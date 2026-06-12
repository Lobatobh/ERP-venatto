# Current Status

## Fase atual

Fase 2.4A - Politica controlada para adicionar usuarios internos ao tenant Venatto.

## Status

Fase 2.4A concluida tecnicamente. O owner ativo do tenant `venatto` pode preparar usuarios internos por e-mail dentro do ERP, sem criar conta Supabase Auth, sem service role e sem RBAC completo. O novo usuario podera vincular `supabaseAuthId` no primeiro login/provisioning.

## Validacao da Fase 2.4A

- Owner do tenant `venatto`: pode adicionar usuario interno por e-mail.
- Fluxo: nao cria conta Supabase Auth.
- Fluxo: prepara apenas `User` interno e `Membership` no ERP.
- Role minima `member`: criada/reutilizada para novos usuarios.
- Owner existente: nao e removido nem rebaixado.
- Provisioning: usuario pre-cadastrado com membership ativa pode vincular `supabaseAuthId` no primeiro login/provisioning.
- `/app`: exibe secao simples `Usuarios do tenant` para owner, com formulario e lista.
- Schema Prisma: sem alteracao nesta fase.
- Migration: nenhuma nova migration nesta fase.
- RBAC completo: pendente.
- Teste manual do onboarding de novo usuario: pendente.
- `npx prisma validate`: executado com sucesso.
- `npx prisma generate`: executado com sucesso.
- `npm run lint`: executado com sucesso.
- `npm run typecheck`: executado com sucesso.
- `npm run build`: executado com sucesso.

## Escopo bloqueado

- Criar conta Supabase Auth automaticamente.
- Usar service role.
- Criar cadastro publico.
- Criar recuperacao de senha.
- Criar dashboard real.
- Criar modulos de negocio.
- Criar seed.
- Implementar RBAC completo.
- Alterar schema Prisma sem fase autorizada.
- Executar migration sem autorizacao explicita.
- Executar `prisma db push`.