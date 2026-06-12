import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type AccountStatusCardProps = {
  userEmail: string;
  tenantName: string;
  profileStatus: string;
  roleLabel: string;
};

export function AccountStatusCard({
  userEmail,
  tenantName,
  profileStatus,
  roleLabel,
}: AccountStatusCardProps) {
  const items = [
    ["Usuario", userEmail],
    ["Tenant ativo", tenantName],
    ["Perfil interno", profileStatus],
    ["Papel", roleLabel],
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Status da conta</CardTitle>
        <CardDescription>Base SaaS autenticada e provisionada.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-2">
        {items.map(([label, value]) => (
          <div key={label} className="rounded-md border p-3">
            <p className="text-xs font-medium text-muted-foreground">{label}</p>
            <p className="mt-1 text-sm font-medium">{value}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}