import { provisionInitialSaasProfileAction } from "@/server/saas/provisioning";
import type { SaasSession } from "@/server/saas/session";
import { getSaasSession } from "@/server/saas/session";

const sessionLoader: () => Promise<SaasSession> = getSaasSession;
const provisioningAction: typeof provisionInitialSaasProfileAction =
  provisionInitialSaasProfileAction;

void sessionLoader;
void provisioningAction;