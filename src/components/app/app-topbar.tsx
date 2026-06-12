import { Button } from "@/components/ui/button";
import { signOutAction } from "@/server/auth/actions";

export type AppTopbarProps = {
  tenantName: string;
  userEmail: string;
  roleLabel: string;
};

export function AppTopbar({ tenantName, userEmail, roleLabel }: AppTopbarProps) {
  return (
    <header className="border-b bg-background/95 px-6 py-4">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Tenant ativo
          </p>
          <p className="text-sm font-medium">{tenantName}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="text-sm text-muted-foreground">
            <span>{userEmail}</span>
            <span className="px-2">/</span>
            <span>{roleLabel}</span>
          </div>
          <form action={signOutAction}>
            <Button type="submit" variant="outline">
              Sair
            </Button>
          </form>
        </div>
      </div>
    </header>
  );
}