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
import { provisionInitialSaasProfileAction } from "@/server/saas/provisioning";
import { getSaasSession } from "@/server/saas/session";

export const dynamic = "force-dynamic";

export default async function AppPage() {
  const session = await getSaasSession();

  if (!session.authUser) {
    redirect("/login");
  }

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