import "server-only";

import { prisma } from "@/lib/prisma";
import { getSaasSession } from "@/server/saas/session";

const VENATTO_TENANT_SLUG = "venatto";
const OWNER_ROLE_KEY = "owner";

export type TenantUserListItem = {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  role: string;
};

export type CurrentTenantAccess = {
  isOwner: boolean;
  tenantId: string | null;
  appUserId: string | null;
};

export type OwnerTenantAccess = {
  isOwner: true;
  tenantId: string;
  appUserId: string;
};

export async function getCurrentUserTenantAccess(): Promise<CurrentTenantAccess> {
  const session = await getSaasSession();

  if (!session.appUser || !session.isProvisioned) {
    return { isOwner: false, tenantId: null, appUserId: null };
  }

  const venattoMembership = session.memberships.find(
    (membership) => membership.tenant.slug === VENATTO_TENANT_SLUG,
  );

  return {
    isOwner: venattoMembership?.role?.key === OWNER_ROLE_KEY,
    tenantId: venattoMembership?.tenant.id ?? null,
    appUserId: session.appUser.id,
  };
}

export async function requireCurrentOwnerAccess(): Promise<OwnerTenantAccess> {
  const access = await getCurrentUserTenantAccess();

  if (!access.isOwner || !access.tenantId || !access.appUserId) {
    throw new Error("Owner access is required.");
  }

  return {
    isOwner: true,
    tenantId: access.tenantId,
    appUserId: access.appUserId,
  };
}

export async function listCurrentTenantUsers(): Promise<TenantUserListItem[]> {
  const access = await getCurrentUserTenantAccess();

  if (!access.isOwner || !access.tenantId) {
    return [];
  }

  const memberships = await prisma.membership.findMany({
    where: { tenantId: access.tenantId },
    orderBy: { createdAt: "asc" },
    select: {
      id: true,
      isActive: true,
      user: {
        select: {
          name: true,
          email: true,
        },
      },
      role: {
        select: {
          key: true,
        },
      },
    },
  });

  return memberships.map((membership) => ({
    id: membership.id,
    name: membership.user.name,
    email: membership.user.email,
    isActive: membership.isActive,
    role: membership.role?.key ?? "sem role",
  }));
}