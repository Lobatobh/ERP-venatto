# Current Status

## Fase atual

Fase 2.2 - Fundacao de sessao/perfil SaaS sem RBAC completo.

## Status

Fase 2.2 implementada com camada server-only de sessao SaaS. O usuario autenticado pelo Supabase Auth agora pode ser combinado com o usuario interno do ERP via `User.email`, quando o perfil interno existir. Se nao houver perfil interno provisionado, a sessao retorna estado seguro de perfil pendente sem criar usuario, tenant ou membership automaticamente.

## Validacao da Fase 2.2

- `prisma/schema.prisma`: inspecionado sem alteracao.
- Vinculo interno disponivel no schema atual: `User.email`.
- Campo dedicado para `auth.uid`: inexistente no schema atual.
- Provisioning automatico: nao implementado.
- RBAC completo: nao implementado.
- `/app`: exibe e-mail autenticado, status de perfil interno e status de tenant ativo.
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
- Criar usuario automaticamente no banco.
- Criar tenant automaticamente no banco.
- Criar RBAC completo.
- Alterar schema Prisma sem fase autorizada.
- Executar migration sem autorizacao explicita.
- Executar `prisma db push`.