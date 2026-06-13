import { CustomerStatus } from "@prisma/client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createCustomerAction } from "@/features/customers/server/actions";

const statuses = [
  { value: CustomerStatus.LEAD, label: "Lead" },
  { value: CustomerStatus.QUALIFIED, label: "Qualificado" },
  { value: CustomerStatus.PROPOSAL, label: "Proposta" },
  { value: CustomerStatus.CUSTOMER, label: "Cliente" },
  { value: CustomerStatus.INACTIVE, label: "Inativo" },
];

const inputClassName =
  "h-9 rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-ring focus:ring-3 focus:ring-ring/20";
const textareaClassName =
  "min-h-20 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition focus:border-ring focus:ring-3 focus:ring-ring/20";

export function CustomerForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Novo cliente ou lead</CardTitle>
        <CardDescription>
          Cadastre um contato inicial no tenant ativo. O tenant é calculado no servidor.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={createCustomerAction} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-1.5 text-sm font-medium">
              Nome
              <input className={inputClassName} name="name" required />
            </label>
            <label className="grid gap-1.5 text-sm font-medium">
              Status
              <select className={inputClassName} name="status" defaultValue={CustomerStatus.LEAD}>
                {statuses.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-1.5 text-sm font-medium">
              Documento
              <input className={inputClassName} name="document" />
            </label>
            <label className="grid gap-1.5 text-sm font-medium">
              E-mail
              <input className={inputClassName} name="email" type="email" />
            </label>
            <label className="grid gap-1.5 text-sm font-medium">
              Telefone
              <input className={inputClassName} name="phone" />
            </label>
            <label className="grid gap-1.5 text-sm font-medium">
              Origem
              <input className={inputClassName} name="source" />
            </label>
            <label className="grid gap-1.5 text-sm font-medium">
              Cidade
              <input className={inputClassName} name="city" />
            </label>
            <label className="grid gap-1.5 text-sm font-medium">
              Estado
              <input className={inputClassName} maxLength={2} name="state" />
            </label>
          </div>
          <label className="grid gap-1.5 text-sm font-medium">
            Observações
            <textarea className={textareaClassName} name="notes" />
          </label>
          <div>
            <Button type="submit">Adicionar cliente/lead</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}