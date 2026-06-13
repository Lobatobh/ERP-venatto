# Current Status

## Fase atual

Sprint 3A - Modulo Clientes/Leads V1.

## Status

Sprint 3A concluida tecnicamente. O modulo Clientes/Leads V1 foi criado como primeiro modulo real do VENATTO ERP, com schema versionado, migration aplicada, pagina real em `/app/clientes`, resumo por status, formulario de criacao para owner e listagem isolada por tenant.

## Validacao da Sprint 3A

- Migration `add_customers_module_v1`: criada e aplicada com Prisma Migrate.
- Model `Customer`: criado com `CustomerStatus` em UPPERCASE e tabela real `customers`.
- Relacao `Tenant.customers`: adicionada ao schema.
- Multi-tenant: queries e actions usam tenant ativo da sessao SaaS; `tenantId` nao vem do client.
- Owner: pode criar clientes/leads.
- Member: pode visualizar clientes/leads e nao recebe formulario de criacao.
- `/app/clientes`: deixou de ser placeholder e passou a exibir modulo V1 real.
- Resumo: total de registros, leads, clientes e propostas em andamento.
- Formulario: nome obrigatorio, status validado por enum e campos opcionais normalizados.
- Lista: exibe nome, contato, status e origem com estado vazio.
- CRM completo, propostas, projetos, financeiro, producao e RBAC completo: pendentes.
- `npx prisma validate`: executado com sucesso.
- `npx prisma generate`: executado com sucesso.
- `npm run lint`: executado com sucesso.
- `npm run typecheck`: executado com sucesso.
- `npm run build`: executado com sucesso.

## Escopo bloqueado

- Criar CRM completo.
- Criar propostas reais.
- Criar projetos reais.
- Criar financeiro real.
- Criar producao real.
- Criar dashboard real com metricas reais.
- Criar seed.
- Criar conta Supabase Auth automaticamente.
- Usar service role.
- Implementar RBAC completo.
- Alterar schema Prisma sem fase autorizada.
- Executar migration sem autorizacao explicita.
- Executar `prisma db push`.