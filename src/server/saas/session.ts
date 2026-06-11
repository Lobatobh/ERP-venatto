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
  supabaseAuthId: string | null;
  isActive: boolean;
};

export type SaasSession = {
  authUser: SupabaseUser | null;
  appUser: SaasSessionAppUser | null;
  memberships: SaasSessionMembership[];
  activeTenant: SaasSessionMembership["tenant"] | null;
  isProvisioned: boolean;
  needsAuthLink: boolean;
};

export async function getSaasSession(): Promise<SaasSession> {
  const { user: authUser } = await getCurrentUser();

  if (!authUser?.email) {
    return createEmptySaasSession(authUser ?? null);
  }

  const linkedUser = await findAppUserBySupabaseAuthId(authUser.id);
  const appUser = linkedUser ?? (await findAppUserByEmail(authUser.email));

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
    supabaseAuthId: appUser.supabaseAuthId,
    isActive: appUser.isActive,
  };

  const isLinkedToAuthUser = appUser.supabaseAuthId === authUser.id;

  return {
    authUser,
    appUser: safeAppUser,
    memberships: isLinkedToAuthUser ? memberships : [],
    activeTenant: isLinkedToAuthUser ? memberships[0]?.tenant ?? null : null,
    isProvisioned: isLinkedToAuthUser && memberships.length > 0,
    needsAuthLink: !isLinkedToAuthUser,
  };
}

function findAppUserBySupabaseAuthId(supabaseAuthId: string) {
  return prisma.user.findUnique({
    where: { supabaseAuthId },
    select: appUserSelect,
  });
}

function findAppUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
    select: appUserSelect,
  });
}

const appUserSelect = {
  id: true,
  name: true,
  email: true,
  supabaseAuthId: true,
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
} as const;

function createEmptySaasSession(authUser: SupabaseUser | null): SaasSession {
  return {
    authUser,
    appUser: null,
    memberships: [],
    activeTenant: null,
    isProvisioned: false,
    needsAuthLink: false,
  };
}