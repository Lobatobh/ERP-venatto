# Pending Tasks

## Pendencias reais

- Configurar `INTERNAL_HEALTHCHECK_TOKEN` em ambiente real antes de expor healthcheck em producao.
- Configurar valores reais de Supabase apenas em ambiente local/seguro, nunca versionados.
- Testar login manualmente com usuario real do Supabase Auth em ambiente seguro.
- Implementar cadastro, recuperacao de senha, RBAC e multi-tenant enforcement somente em fases autorizadas.
- Validar politica de backup/snapshot antes de qualquer uso com dados reais.
- Criar funcionalidades de negocio somente nas fases correspondentes.
- Instalar novos componentes shadcn/ui somente quando houver escopo aprovado.
- Avaliar o `package-lock.json` existente no diretorio pai antes de qualquer remocao.
- Validar Docker/Dokploy em VPS real antes de producao real.

## Bloqueios para producao real

- PR-001: Docker/Dokploy nao validado em VPS real.
- Politica de backup/restore ainda nao validada para producao.
- Variaveis de ambiente de producao ainda nao definidas.
- Processo de deploy real ainda nao validado.