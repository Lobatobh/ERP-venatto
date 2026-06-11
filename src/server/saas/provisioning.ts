"use server";

import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { requireCurrentUser } from "@/server/auth/session";

const INITIAL_TENANT = {
  name: "Venatto",
  slug: "venatto",
};

const OWNER_ROLE = {
  name: "Owner",
  key: "owner",
};

class ProvisioningBlockedError extends Error {
  constructor(message = "Initial SaaS provisioning is blocked.") {
    super(message);
    this.name = "ProvisioningBlockedError";
  }
}

export async function provisionInitialSaasProfileAction() {
  const authUser = await requireCurrentUser();

  if (!authUser.email) {
    throw new ProvisioningBlockedError("Authenticated user must have an email.");
  }

  await prisma.$transaction(async (tx) => {
    const userByAuthId = await tx.user.findUnique({
      where: { supabaseAuthId: authUser.id },
      select: { id: true },
    });

    const userByEmail = userByAuthId
      ? null
      : await tx.user.findUnique({
          where: { email: authUser.email! },
          select: { id: true, supabaseAuthId: true },
        });

    if (userByEmail?.supabaseAuthId && userByEmail.supabaseAuthId !== authUser.id) {
      throw new ProvisioningBlockedError(
        "Internal user is already linked to another auth identity.",
      );
    }

    const appUser = userByAuthId
      ? userByAuthId
      : userByEmail
        ? await tx.user.update({
            where: { id: userByEmail.id },
            data: {
              supabaseAuthId: authUser.id,
              isActive: true,
            },
            select: { id: true },
          })
        : await tx.user.create({
            data: {
              email: authUser.email!,
              name: getProvisionedUserName(authUser),
              supabaseAuthId: authUser.id,
            },
            select: { id: true },
          });

    const tenant = await tx.tenant.upsert({
      where: { slug: INITIAL_TENANT.slug },
      update: { isActive: true },
      create: {
        name: INITIAL_TENANT.name,
        slug: INITIAL_TENANT.slug,
      },
      select: { id: true },
    });

    const role = await tx.role.upsert({
      where: {
        tenantId_key: {
          tenantId: tenant.id,
          key: OWNER_ROLE.key,
        },
      },
      update: { name: OWNER_ROLE.name },
      create: {
        tenantId: tenant.id,
        name: OWNER_ROLE.name,
        key: OWNER_ROLE.key,
      },
      select: { id: true },
    });

    const activeOwnerMembership = await tx.membership.findFirst({
      where: {
        tenantId: tenant.id,
        roleId: role.id,
        isActive: true,
      },
      select: { userId: true },
    });

    if (activeOwnerMembership && activeOwnerMembership.userId !== appUser.id) {
      throw new ProvisioningBlockedError("Tenant already has an active owner.");
    }

    await tx.membership.upsert({
      where: {
        tenantId_userId: {
          tenantId: tenant.id,
          userId: appUser.id,
        },
      },
      update: {
        roleId: role.id,
        isActive: true,
      },
      create: {
        tenantId: tenant.id,
        userId: appUser.id,
        roleId: role.id,
      },
    });
  });

  redirect("/app");
}

function getProvisionedUserName(authUser: Awaited<ReturnType<typeof requireCurrentUser>>) {
  const metadataName = authUser.user_metadata?.name;

  if (typeof metadataName === "string" && metadataName.trim().length > 0) {
    return metadataName.trim();
  }

  return authUser.email ?? "Usuario Venatto";
}