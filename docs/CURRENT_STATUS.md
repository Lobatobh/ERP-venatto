# Current Status

## Fase atual

Fase 2.5A - Base visual minima pos-auth para `/app`.

## Status

Fase 2.5A concluida tecnicamente. A rota `/app` agora possui uma base visual autenticada com estrutura de SaaS, incluindo cabecalho simples, identificacao do tenant ativo, usuario logado, status da conta, usuarios do tenant e proximas etapas informativas. Ainda nao e dashboard real e nao inclui modulos de negocio.

## Validacao da Fase 2.5A

- `/app`: mantida como rota principal protegida.
- Nome do sistema: `VENATTO ERP` exibido no cabecalho.
- Tenant ativo: exibido na base visual.
- Usuario logado: exibido no cabecalho e status da conta.
- Perfil interno: exibido como `provisionado` ou `pendente`.
- Papel do usuario: exibido quando disponivel.
- Usuarios do tenant: owner ve formulario e lista; member nao ve formulario.
- Proximas etapas: cards informativos estaticos, sem metricas reais.
- Login, logout, provisioning e onboarding: regras funcionais preservadas.
- Schema Prisma: sem alteracao nesta fase.
- Migration: nenhuma nova migration nesta fase.
- Dependencias: nenhuma nova dependencia instalada.
- Dashboard real e modulos de negocio: nao criados.
- Teste manual da base visual: pendente.
- `npx prisma validate`: executado com sucesso.
- `npx prisma generate`: executado com sucesso.
- `npm run lint`: executado com sucesso.
- `npm run typecheck`: executado com sucesso.
- `npm run build`: executado com sucesso.

## Escopo bloqueado

- Criar dashboard real.
- Criar metricas reais.
- Criar graficos.
- Criar modulos de negocio.
- Criar CRM, clientes, vendas, estoque, producao ou financeiro.
- Criar conta Supabase Auth automaticamente.
- Usar service role.
- Criar seed.
- Implementar RBAC completo.
- Alterar schema Prisma sem fase autorizada.
- Executar migration sem autorizacao explicita.
- Executar `prisma db push`.