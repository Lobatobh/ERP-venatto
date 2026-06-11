import "server-only";

import type { User as SupabaseUser } from "@supabase/supabase-js";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/server/auth/session";

export type SaasSessionMembership = {
  id: string;
  isActive: boolean;
  tenant: {
    id: string;
    name: string;
    slug: string;
    isActive: boolean;
  };
  role: {
    id: string;
    name: string;
    key: string;
  } | null;
};

export type SaasSessionAppUser = {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
};

export type SaasSession = {
  authUser: SupabaseUser | null;
  appUser: SaasSessionAppUser | null;
  memberships: SaasSessionMembership[];
  activeTenant: SaasSessionMembership["tenant"] | null;
  isProvisioned: boolean;
};

export async function getSaasSession(): Promise<SaasSession> {
  const { user: authUser } = await getCurrentUser();

  if (!authUser?.email) {
    return createEmptySaasSession(authUser ?? null);
  }

  const appUser = await prisma.user.findUnique({
    where: { email: authUser.email },
    select: {
      id: true,
      name: true,
      email: true,
      isActive: true,
      memberships: {
        where: { isActive: true },
        orderBy: { createdAt: "asc" },
        select: {
          id: true,
          isActive: true,
          tenant: {
            select: {
              id: true,
              name: true,
              slug: true,
              isActive: true,
            },
          },
          role: {
            select: {
              id: true,
              name: true,
              key: true,
            },
          },
        },
      },
    },
  });

  if (!appUser?.isActive) {
    return createEmptySaasSession(authUser);
  }

  const memberships = appUser.memberships.filter(
    (membership) => membership.tenant.isActive,
  );

  const safeAppUser: SaasSessionAppUser = {
    id: appUser.id,
    name: appUser.name,
    email: appUser.email,
    isActive: appUser.isActive,
  };

  return {
    authUser,
    appUser: safeAppUser,
    memberships,
    activeTenant: memberships[0]?.tenant ?? null,
    isProvisioned: true,
  };
}

function createEmptySaasSession(authUser: SupabaseUser | null): SaasSession {
  return {
    authUser,
    appUser: null,
    memberships: [],
    activeTenant: null,
    isProvisioned: false,
  };
}