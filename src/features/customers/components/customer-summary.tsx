import type { CustomerSummary as CustomerSummaryData } from "@/features/customers/server/queries";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const summaryItems = [
  { key: "total", label: "Total de registros" },
  { key: "leads", label: "Leads" },
  { key: "customers", label: "Clientes" },
  { key: "proposals", label: "Propostas em andamento" },
] as const;

type CustomerSummaryProps = {
  summary: CustomerSummaryData;
};

export function CustomerSummary({ summary }: CustomerSummaryProps) {
  return (
    <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {summaryItems.map((item) => (
        <Card key={item.key} size="sm">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">{item.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold tracking-normal">{summary[item.key]}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}