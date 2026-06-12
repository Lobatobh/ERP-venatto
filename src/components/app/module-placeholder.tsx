import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export type ModulePlaceholderProps = {
  title: string;
  description: string;
};

export function ModulePlaceholder({ title, description }: ModulePlaceholderProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-normal">{title}</h1>
        <p className="max-w-3xl text-sm text-muted-foreground">{description}</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Modulo em preparacao</CardTitle>
          <CardDescription>
            Esta area ja faz parte da navegacao do VENATTO ERP, mas ainda nao possui regras de negocio.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            O fluxo sera implementado em sprint propria, com schema, validacoes e telas especificas quando autorizado.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}