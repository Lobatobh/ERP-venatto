import "server-only";

import type { User } from "@supabase/supabase-js";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export type AuthUser = User;

export type AuthSessionUser = {
  user: AuthUser | null;
};

export class AuthRequiredError extends Error {
  constructor() {
    super("Authentication is required.");
    this.name = "AuthRequiredError";
  }
}

export async function getCurrentUser(): Promise<AuthSessionUser> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    return { user: null };
  }

  return { user: data.user };
}

export async function requireCurrentUser(): Promise<AuthUser> {
  const { user } = await getCurrentUser();

  if (!user) {
    throw new AuthRequiredError();
  }

  return user;
}