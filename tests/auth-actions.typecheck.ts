import { signInWithPasswordAction, signOutAction } from "@/server/auth/actions";

const signInAction: (formData: FormData) => Promise<void> = signInWithPasswordAction;
const signOut: () => Promise<void> = signOutAction;

void signInAction;
void signOut;