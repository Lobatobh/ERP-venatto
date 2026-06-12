import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const steps = [
  "Base SaaS validada",
  "Autenticacao ativa",
  "Tenant provisionado",
  "Onboarding interno validado",
];

export function NextStepsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Proximas etapas</CardTitle>
        <CardDescription>Preparacao visual para evolucao do MVP.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2">
          {steps.map((step) => (
            <div key={step} className="rounded-md border p-3 text-sm text-muted-foreground">
              {step}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}