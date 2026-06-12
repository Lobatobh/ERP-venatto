"use server";

import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { requireCurrentOwnerAccess } from "@/server/saas/access";

const MEMBER_ROLE = {
  name: "Member",
  key: "member",
};

export async function addTenantUserAction(formData: FormData) {
  const access = await requireCurrentOwnerAccess();
  const name = normalizeName(formData.get("name"));
  const email = normalizeEmail(formData.get("email"));

  if (!email) {
    throw new Error("A valid email is required.");
  }

  await prisma.$transaction(async (tx) => {
    const memberRole = await tx.role.upsert({
      where: {
        tenantId_key: {
          tenantId: access.tenantId,
          key: MEMBER_ROLE.key,
        },
      },
      update: { name: MEMBER_ROLE.name },
      create: {
        tenantId: access.tenantId,
        name: MEMBER_ROLE.name,
        key: MEMBER_ROLE.key,
      },
      select: { id: true },
    });

    const user = await tx.user.upsert({
      where: { email },
      update: {
        name: name ?? undefined,
        isActive: true,
      },
      create: {
        email,
        name: name ?? email,
      },
      select: { id: true },
    });

    const existingMembership = await tx.membership.findUnique({
      where: {
        tenantId_userId: {
          tenantId: access.tenantId,
          userId: user.id,
        },
      },
      select: {
        role: { select: { key: true } },
      },
    });

    await tx.membership.upsert({
      where: {
        tenantId_userId: {
          tenantId: access.tenantId,
          userId: user.id,
        },
      },
      update: {
        isActive: true,
        roleId: existingMembership?.role?.key === "owner" ? undefined : memberRole.id,
      },
      create: {
        tenantId: access.tenantId,
        userId: user.id,
        roleId: memberRole.id,
      },
    });
  });

  redirect("/app");
}

function normalizeName(value: FormDataEntryValue | null) {
  if (typeof value !== "string") {
    return null;
  }

  const name = value.trim();
  return name.length > 0 ? name : null;
}

function normalizeEmail(value: FormDataEntryValue | null) {
  if (typeof value !== "string") {
    return null;
  }

  const email = value.trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : null;
}