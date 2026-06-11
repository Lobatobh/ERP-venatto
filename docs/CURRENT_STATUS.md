# Current Status

## Fase atual

Fase 2.3A - Provisioning inicial controlado de perfil interno e tenant.

## Status

Fase 2.3A concluida tecnicamente. A migration manual versionavel `add_supabase_auth_id` foi criada e aplicada via `prisma migrate deploy`, adicionando `User.supabaseAuthId` como vinculo estavel com Supabase Auth. O provisioning inicial e explicito via server action/botao protegido em `/app` e nao roda automaticamente ao acessar a rota.

## Validacao da Fase 2.3A

- Migration `20260611162416_add_supabase_auth_id`: criada manualmente e aplicada com sucesso.
- `User.supabaseAuthId`: adicionado como campo opcional e unico.
- Sessao SaaS: busca usuario interno primeiro por `supabaseAuthId` e usa fallback por e-mail sem liberar tenant/membership se o usuario ainda nao estiver vinculado ao `authUser.id`.
- Provisioning inicial: cria ou vincula `User`, reutiliza/cria tenant `Venatto`, reutiliza/cria role minima `Owner` e reutiliza/cria `Membership` em transacao Prisma.
- Protecao: nao sobrescreve `supabaseAuthId` existente.
- Protecao: bloqueia e-mail ja vinculado a outro `authUser.id`.
- Protecao: bloqueia owner duplicado no tenant `venatto`.
- Protecao: nao usa service role.
- `/app`: exibe botao `Inicializar perfil interno da Venatto` quando o perfil interno esta pendente.
- Teste manual do provisioning: pendente.
- `npx prisma validate`: executado com sucesso.
- `npx prisma generate`: executado com sucesso.
- `npm run lint`: executado com sucesso.
- `npm run typecheck`: executado com sucesso.
- `npm run build`: executado com sucesso.

## Escopo bloqueado

- Criar cadastro publico.
- Criar recuperacao de senha.
- Criar dashboard real.
- Criar modulos de negocio.
- Criar seed.
- Criar novos usuarios automaticamente no tenant.
- Criar RBAC completo.
- Executar migration sem autorizacao explicita.
- Executar `prisma db push`.