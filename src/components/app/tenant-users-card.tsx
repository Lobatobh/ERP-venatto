import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { TenantUserListItem } from "@/server/saas/access";
import { addTenantUserAction } from "@/server/saas/users";

export type TenantUsersCardProps = {
  isOwner: boolean;
  users: TenantUserListItem[];
};

export function TenantUsersCard({ isOwner, users }: TenantUsersCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Usuarios do tenant</CardTitle>
        <CardDescription>
          Onboarding interno controlado para o tenant Venatto.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {isOwner ? (
          <form action={addTenantUserAction} className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
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
        ) : (
          <p className="text-sm text-muted-foreground">
            Seu acesso esta vinculado ao tenant Venatto. A inclusao de usuarios e restrita ao owner.
          </p>
        )}

        {isOwner ? (
          <div className="divide-y rounded-md border text-sm">
            {users.map((user) => (
              <div key={user.id} className="grid gap-1 p-3 md:grid-cols-[1fr_1fr_auto_auto]">
                <span>{user.name}</span>
                <span className="text-muted-foreground">{user.email}</span>
                <span className="text-muted-foreground">{user.role}</span>
                <span className="text-muted-foreground">
                  {user.isActive ? "ativo" : "inativo"}
                </span>
              </div>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}