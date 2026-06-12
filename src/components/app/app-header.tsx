import { Button } from "@/components/ui/button";
import { signOutAction } from "@/server/auth/actions";

export type AppHeaderProps = {
  tenantName: string;
  userEmail: string;
};

export function AppHeader({ tenantName, userEmail }: AppHeaderProps) {
  return (
    <header className="flex flex-col gap-4 border-b pb-5 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-muted-foreground">{tenantName}</p>
        <h1 className="text-2xl font-semibold tracking-normal">VENATTO ERP</h1>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">{userEmail}</p>
        <form action={signOutAction}>
          <Button type="submit" variant="outline">
            Sair
          </Button>
        </form>
      </div>
    </header>
  );
}