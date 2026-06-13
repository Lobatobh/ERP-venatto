"use server";

import { CustomerStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { requireCurrentOwnerAccess } from "@/server/saas/access";

const allowedStatuses = new Set<string>(Object.values(CustomerStatus));

export async function createCustomerAction(formData: FormData) {
  const access = await requireCurrentOwnerAccess();
  const name = normalizeRequiredString(formData.get("name"));

  if (!name) {
    throw new Error("Customer name is required.");
  }

  const status = normalizeStatus(formData.get("status"));

  await prisma.customer.create({
    data: {
      tenantId: access.tenantId,
      name,
      document: normalizeOptionalString(formData.get("document")),
      email: normalizeEmail(formData.get("email")),
      phone: normalizeOptionalString(formData.get("phone")),
      city: normalizeOptionalString(formData.get("city")),
      state: normalizeOptionalString(formData.get("state")),
      source: normalizeOptionalString(formData.get("source")),
      status,
      notes: normalizeOptionalString(formData.get("notes")),
    },
  });

  revalidatePath("/app/clientes");
  redirect("/app/clientes");
}

function normalizeRequiredString(value: FormDataEntryValue | null) {
  const normalized = normalizeOptionalString(value);
  return normalized && normalized.length > 0 ? normalized : null;
}

function normalizeOptionalString(value: FormDataEntryValue | null) {
  if (typeof value !== "string") {
    return null;
  }

  const normalized = value.trim();
  return normalized.length > 0 ? normalized : null;
}

function normalizeEmail(value: FormDataEntryValue | null) {
  const email = normalizeOptionalString(value)?.toLowerCase();
  return email ?? null;
}

function normalizeStatus(value: FormDataEntryValue | null): CustomerStatus {
  if (typeof value === "string" && allowedStatuses.has(value)) {
    return value as CustomerStatus;
  }

  return CustomerStatus.LEAD;
}