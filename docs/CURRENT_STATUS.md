# Current Status

## Fase atual

Fase 2.4B - Teste manual do onboarding de novo usuario interno no tenant Venatto.

## Status

Fase 2.4B validada manualmente. O owner adicionou um novo usuario interno ao tenant `venatto`, o novo usuario apareceu como `member` ativo, conseguiu logar apos existir no Supabase Auth, vinculou `supabaseAuthId` no primeiro login/provisioning e permaneceu provisionado no tenant `Venatto` sem acesso de owner.

## Validacao da Fase 2.4B

- Owner validado: acessou `/app` e visualizou `Usuarios do tenant`.
- Novo usuario interno: adicionado pelo owner por nome/e-mail.
- Novo usuario na lista: exibido como `member` e `ativo`.
- Novo usuario Auth: login validado apos existir no Supabase Auth.
- Vinculo `supabaseAuthId`: validado no primeiro login/provisioning.
- Perfil interno do novo usuario: `provisionado`.
- Tenant ativo do novo usuario: `Venatto`.
- Restricao de nao-owner: novo usuario nao viu formulario de adicionar usuario.
- Owner preservado: owner logou novamente e confirmou novo usuario como `member ativo`.
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