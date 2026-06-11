# Current Status

## Fase atual

Fase 2.3B - Teste manual do provisioning inicial e validacao pos-provisioning.

## Status

Fase 2.3B validada manualmente. O login real passou, o provisioning inicial foi executado com sucesso pelo botao protegido em `/app`, o tenant ativo `Venatto` foi validado e o logout/login pos-provisioning manteve o perfil interno provisionado.

## Validacao da Fase 2.3B

- Login real: validado manualmente.
- `/app`: abriu corretamente autenticado.
- Provisioning inicial: validado manualmente.
- Perfil interno: `provisionado` apos provisioning.
- Tenant ativo: `Venatto` validado.
- Botao `Inicializar perfil interno da Venatto`: nao aparece mais apos provisioning.
- Logout/login pos-provisioning: validado manualmente.
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