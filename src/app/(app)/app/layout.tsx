import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import { AppShell } from "@/components/app/app-shell";
import { AppSidebar } from "@/components/app/app-sidebar";
import { AppTopbar } from "@/components/app/app-topbar";
import { getSaasSession } from "@/server/saas/session";

export default async function AuthenticatedAppLayout({ children }: { children: ReactNode }) {
  const session = await getSaasSession();

  if (!session.authUser) {
    redirect("/login");
  }

  const tenantName = session.activeTenant?.name ?? "Venatto";
  const userEmail = session.authUser.email ?? "usuario autenticado";
  const roleLabel = session.memberships[0]?.role?.key ?? "pendente";

  return (
    <AppShell
      sidebar={<AppSidebar />}
      topbar={<AppTopbar tenantName={tenantName} userEmail={userEmail} roleLabel={roleLabel} />}
    >
      {children}
    </AppShell>
  );
}