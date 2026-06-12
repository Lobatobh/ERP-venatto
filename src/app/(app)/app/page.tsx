import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { signOutAction } from "@/server/auth/actions";
import {
  getCurrentUserTenantAccess,
  listCurrentTenantUsers,
} from "@/server/saas/access";
import { provisionInitialSaasProfileAction } from "@/server/saas/provisioning";
import { getSaasSession } from "@/server/saas/session";
import { addTenantUserAction } from "@/server/saas/users";

export const dynamic = "force-dynamic";

export default async function AppPage() {
  const session = await getSaasSession();

  if (!session.authUser) {
    redirect("/login");
  }

  const tenantAccess = await getCurrentUserTenantAccess();
  const tenantUsers = tenantAccess.isOwner ? await listCurrentTenantUsers() : [];

  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Area protegida</CardTitle>
          <CardDescription>Autenticacao minima validada.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Usuario: {session.authUser.email}</p>
            <p>
              Perfil interno: {session.isProvisioned ? "provisionado" : "pendente"}
            </p>
            <p>
              Tenant ativo: {session.activeTenant ? session.activeTenant.name : "pendente"}
            </p>
          </div>

          {!session.isProvisioned ? (
            <form action={provisionInitialSaasProfileAction}>
              <Button type="submit">Inicializar perfil interno da Venatto</Button>
            </form>
          ) : null}

          {session.isProvisioned ? (
            <section className="space-y-4">
              <Separator />
              <div className="space-y-1">
                <h2 className="text-base font-medium">Usuarios do tenant</h2>
                <p className="text-sm text-muted-foreground">
                  Politica minima de usuarios internos da Venatto.
                </p>
              </div>

              {tenantAccess.isOwner ? (
                <form action={addTenantUserAction} className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
                  <input
                    name="name"
                    placeholder="Nome"
                    className="h-9 rounded-md border bg-background px-3 text-sm"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="email@empresa.com"
                    className="h-9 rounded-md border bg-background px-3 text-sm"
                    required
                  />
                  <Button type="submit">Adicionar usuario</Button>
                </form>
              ) : null}

              {tenantAccess.isOwner ? (
                <div className="divide-y rounded-md border text-sm">
                  {tenantUsers.map((tenantUser) => (
                    <div
                      key={tenantUser.id}
                      className="grid gap-1 p-3 sm:grid-cols-[1fr_1fr_auto_auto]"
                    >
                      <span>{tenantUser.name}</span>
                      <span className="text-muted-foreground">{tenantUser.email}</span>
                      <span className="text-muted-foreground">{tenantUser.role}</span>
                      <span className="text-muted-foreground">
                        {tenantUser.isActive ? "ativo" : "inativo"}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Seu usuario esta vinculado ao tenant Venatto.
                </p>
              )}
            </section>
          ) : null}

          <Separator />
          <form action={signOutAction}>
            <Button type="submit" variant="outline">
              Sair
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}