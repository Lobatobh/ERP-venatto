import type { SaasSession } from "@/server/saas/session";
import { getSaasSession } from "@/server/saas/session";

const sessionLoader: () => Promise<SaasSession> = getSaasSession;

void sessionLoader;