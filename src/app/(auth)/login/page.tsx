import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCurrentUser } from "@/server/auth/session";
import { signInWithPasswordAction } from "@/server/auth/actions";

export const dynamic = "force-dynamic";

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

const errorMessages: Record<string, string> = {
  invalid_credentials: "E-mail ou senha invalidos.",
  missing_credentials: "Informe e-mail e senha.",
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { user } = await getCurrentUser();

  if (user) {
    redirect("/app");
  }

  const { error } = await searchParams;
  const message = error ? errorMessages[error] : null;

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-10">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>VENATTO ERP</CardTitle>
          <CardDescription>Acesse a base segura do sistema.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={signInWithPasswordAction} className="flex flex-col gap-4">
            <label className="flex flex-col gap-2 text-sm font-medium">
              E-mail
              <input
                className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium">
              Senha
              <input
                className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                name="password"
                type="password"
                autoComplete="current-password"
                required
              />
            </label>
            {message ? <p className="text-sm text-destructive">{message}</p> : null}
            <Button type="submit">Entrar</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
