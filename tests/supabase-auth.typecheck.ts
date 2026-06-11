import { createSupabaseBrowserClient } from "@/lib/supabase/browser";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getCurrentUser, requireCurrentUser, type AuthSessionUser } from "@/server/auth/session";

const browserFactory: () => ReturnType<typeof createSupabaseBrowserClient> = createSupabaseBrowserClient;
const serverFactory: () => ReturnType<typeof createSupabaseServerClient> = createSupabaseServerClient;
const currentUser: () => ReturnType<typeof getCurrentUser> = getCurrentUser;
const requiredUser: () => ReturnType<typeof requireCurrentUser> = requireCurrentUser;
const authState: AuthSessionUser = { user: null };

void browserFactory;
void serverFactory;
void currentUser;
void requiredUser;
void authState;