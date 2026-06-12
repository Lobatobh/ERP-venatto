# Current Status

## Fase atual

Sprint 2 - Estrutura de navegacao real do VENATTO ERP.

## Status

Sprint 2 concluida tecnicamente. A area autenticada agora possui layout ERP com sidebar, topbar, area principal e navegacao base para os modulos futuros. As paginas criadas sao placeholders estruturais, sem CRUD real, sem regras de negocio completas e sem novas chamadas de banco alem das ja existentes para sessao/acesso.

## Validacao da Sprint 2

- `/app`: mantida como visao geral protegida.
- Layout autenticado: sidebar, topbar e area principal criados.
- Tenant ativo: exibido na topbar.
- Usuario logado: exibido na topbar.
- Logout: preservado.
- Provisioning e onboarding: preservados.
- Navegacao criada para clientes, propostas, projetos, ambientes, financeiro, producao, usuarios e configuracoes.
- Paginas placeholder: criadas sem CRUD real e sem formularios de negocio.
- Gestao simples de usuarios: preservada na visao geral para owner.
- Member: continua sem formulario de adicionar usuario.
- Schema Prisma: sem alteracao.
- Migration: nenhuma nova migration.
- Dependencias: nenhuma nova dependencia instalada.
- RBAC completo e modulos de negocio: pendentes.
- `npx prisma validate`: executado com sucesso.
- `npx prisma generate`: executado com sucesso.
- `npm run lint`: executado com sucesso.
- `npm run typecheck`: executado com sucesso.
- `npm run build`: executado com sucesso.

## Escopo bloqueado

- Criar CRUD real.
- Criar dashboard real com metricas reais.
- Criar modulos de negocio completos.
- Criar CRM, clientes, vendas, estoque, producao ou financeiro funcionais.
- Criar conta Supabase Auth automaticamente.
- Usar service role.
- Criar seed.
- Implementar RBAC completo.
- Alterar schema Prisma sem fase autorizada.
- Executar migration sem autorizacao explicita.
- Executar `prisma db push`.