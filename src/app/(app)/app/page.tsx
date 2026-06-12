import { redirect } from "next/navigation";

import { AccountStatusCard } from "@/components/app/account-status-card";
import { AppHeader } from "@/components/app/app-header";
import { AppShell } from "@/components/app/app-shell";
import { NextStepsCard } from "@/components/app/next-steps-card";
import { TenantUsersCard } from "@/components/app/tenant-users-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  getCurrentUserTenantAccess,
  listCurrentTenantUsers,
} from "@/server/saas/access";
import { provisionInitialSaasProfileAction } from "@/server/saas/provisioning";
import { getSaasSession } from "@/server/saas/session";

export const dynamic = "force-dynamic";

export default async function AppPage() {
  const session = await getSaasSession();

  if (!session.authUser) {
    redirect("/login");
  }

  const tenantAccess = await getCurrentUserTenantAccess();
  const tenantUsers = tenantAccess.isOwner ? await listCurrentTenantUsers() : [];
  const userEmail = session.authUser.email ?? "usuario autenticado";
  const tenantName = session.activeTenant?.name ?? "Venatto";
  const roleLabel = session.memberships[0]?.role?.key ?? "pendente";

  return (
    <AppShell>
      <AppHeader tenantName={tenantName} userEmail={userEmail} />

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <AccountStatusCard
          userEmail={userEmail}
          tenantName={tenantName}
          profileStatus={session.isProvisioned ? "provisionado" : "pendente"}
          roleLabel={roleLabel}
        />
        <NextStepsCard />
      </section>

      {!session.isProvisioned ? (
        <Card>
          <CardHeader>
            <CardTitle>Perfil interno pendente</CardTitle>
            <CardDescription>
              Inicialize o vinculo interno para acessar a base SaaS da Venatto.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={provisionInitialSaasProfileAction}>
              <Button type="submit">Inicializar perfil interno da Venatto</Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <TenantUsersCard isOwner={tenantAccess.isOwner} users={tenantUsers} />
      )}
    </AppShell>
  );
}