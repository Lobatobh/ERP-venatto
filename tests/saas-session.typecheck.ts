import { AccountStatusCard } from "@/components/app/account-status-card";
import { AppHeader } from "@/components/app/app-header";
import { AppShell } from "@/components/app/app-shell";
import { NextStepsCard } from "@/components/app/next-steps-card";
import { TenantUsersCard } from "@/components/app/tenant-users-card";
import {
  getCurrentUserTenantAccess,
  listCurrentTenantUsers,
  requireCurrentOwnerAccess,
} from "@/server/saas/access";
import { provisionInitialSaasProfileAction } from "@/server/saas/provisioning";
import type { SaasSession } from "@/server/saas/session";
import { getSaasSession } from "@/server/saas/session";
import { addTenantUserAction } from "@/server/saas/users";

const sessionLoader: () => Promise<SaasSession> = getSaasSession;
const provisioningAction: typeof provisionInitialSaasProfileAction =
  provisionInitialSaasProfileAction;
const tenantAccessLoader: typeof getCurrentUserTenantAccess =
  getCurrentUserTenantAccess;
const ownerAccessLoader: typeof requireCurrentOwnerAccess = requireCurrentOwnerAccess;
const tenantUsersLoader: typeof listCurrentTenantUsers = listCurrentTenantUsers;
const addUserAction: typeof addTenantUserAction = addTenantUserAction;

void sessionLoader;
void provisioningAction;
void tenantAccessLoader;
void ownerAccessLoader;
void tenantUsersLoader;
void addUserAction;
void AppShell;
void AppHeader;
void AccountStatusCard;
void TenantUsersCard;
void NextStepsCard;