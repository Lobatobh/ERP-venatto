import { Card, CardContent } from "@/components/ui/card";
import { CustomerForm } from "@/features/customers/components/customer-form";
import { CustomerList } from "@/features/customers/components/customer-list";
import { CustomerSummary } from "@/features/customers/components/customer-summary";
import { getCustomersPageData } from "@/features/customers/server/queries";

export const dynamic = "force-dynamic";

export default async function ClientesPage() {
  const data = await getCustomersPageData();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium uppercase tracking-normal text-muted-foreground">
          Comercial
        </p>
        <h1 className="text-2xl font-semibold tracking-normal">Clientes e Leads</h1>
        <p className="max-w-3xl text-sm text-muted-foreground">
          Cadastro inicial de contatos comerciais da Venatto com isolamento por tenant e permissao simples por papel.
        </p>
      </div>

      <CustomerSummary summary={data.summary} />

      {!data.hasTenantAccess ? (
        <Card>
          <CardContent className="p-6 text-sm text-muted-foreground">
            Perfil interno ou tenant ativo pendente. Conclua o provisioning para acessar Clientes e Leads.
          </CardContent>
        </Card>
      ) : null}

      {data.hasTenantAccess && data.canCreate ? <CustomerForm /> : null}

      {data.hasTenantAccess && !data.canCreate ? (
        <Card>
          <CardContent className="p-6 text-sm text-muted-foreground">
            Voce pode visualizar os clientes e leads do tenant. A criacao esta restrita ao owner nesta versao.
          </CardContent>
        </Card>
      ) : null}

      {data.hasTenantAccess ? <CustomerList customers={data.customers} /> : null}
    </div>
  );
}