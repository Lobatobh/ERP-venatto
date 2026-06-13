import type { CustomerListItem } from "@/features/customers/server/queries";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const statusLabels = {
  LEAD: "Lead",
  QUALIFIED: "Qualificado",
  PROPOSAL: "Proposta",
  CUSTOMER: "Cliente",
  INACTIVE: "Inativo",
} as const;

type CustomerListProps = {
  customers: CustomerListItem[];
};

export function CustomerList({ customers }: CustomerListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista de clientes e leads</CardTitle>
        <CardDescription>
          Registros do tenant ativo. Nenhum dado de outro tenant é consultado.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {customers.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border bg-muted/30 p-6 text-sm text-muted-foreground">
            Nenhum cliente ou lead cadastrado ainda.
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg border border-border">
            <div className="hidden grid-cols-[1.2fr_1fr_0.8fr_0.8fr] gap-3 border-b bg-muted/50 px-4 py-3 text-xs font-medium uppercase tracking-normal text-muted-foreground md:grid">
              <span>Nome</span>
              <span>Contato</span>
              <span>Status</span>
              <span>Origem</span>
            </div>
            <div className="divide-y divide-border">
              {customers.map((customer) => (
                <div
                  className="grid gap-3 px-4 py-4 text-sm md:grid-cols-[1.2fr_1fr_0.8fr_0.8fr] md:py-3"
                  key={customer.id}
                >
                  <div className="min-w-0">
                    <p className="truncate font-medium">{customer.name}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {[customer.city, customer.state].filter(Boolean).join(" / ") || "Localidade pendente"}
                    </p>
                  </div>
                  <div className="min-w-0 text-muted-foreground">
                    <p className="truncate">{customer.email ?? "E-mail pendente"}</p>
                    <p className="truncate text-xs">{customer.phone ?? "Telefone pendente"}</p>
                  </div>
                  <div>
                    <span className="inline-flex rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
                      {statusLabels[customer.status]}
                    </span>
                  </div>
                  <p className="truncate text-muted-foreground">{customer.source ?? "Não informado"}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}