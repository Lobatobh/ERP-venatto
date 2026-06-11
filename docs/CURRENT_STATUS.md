# Current Status

## Fase atual

Fase 2.1 - Validacao real de login + usuario admin inicial controlado.

## Status

Fase 2.1 bloqueada por variaveis publicas locais ausentes. O fluxo minimo de autenticacao esta pronto para validacao manual com usuario real, mas o `.env` local ainda nao possui `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

## Validacao da Fase 2.1

- `git status --short`: limpo no inicio da fase.
- Branch atual: `main`.
- Remote `origin`: configurado.
- `.env`: existe localmente e nao e versionado.
- `NEXT_PUBLIC_SUPABASE_URL`: ausente no `.env` local.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: ausente no `.env` local.
- Validacao manual de login/logout: bloqueada ate configurar as variaveis publicas em ambiente local seguro.

## Checklist manual da Fase 2.1

- Criar usuario admin manualmente no Supabase Studio em Authentication > Users.
- Usar e-mail e senha definidos pelo usuario, sem registrar credenciais no codigo.
- Confirmar e-mail manualmente se o Supabase exigir.
- Abrir `/login`.
- Acessar `/app` deslogado e confirmar redirect para `/login`.
- Logar com usuario real.
- Confirmar redirect para `/app`.
- Confirmar exibicao do e-mail do usuario.
- Clicar em sair.
- Confirmar redirect para `/login`.
- Tentar `/app` novamente e confirmar protecao.

## Escopo bloqueado

- Criar cadastro publico.
- Criar recuperacao de senha.
- Criar dashboard real.
- Criar modulos de negocio.
- Criar seed.
- Alterar schema Prisma sem fase autorizada.
- Executar migration sem autorizacao explicita.
- Executar `prisma db push`.