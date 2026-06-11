# Pending Tasks

## Pendencias reais

- Configurar `INTERNAL_HEALTHCHECK_TOKEN` em ambiente real antes de expor healthcheck em producao.
- Configurar valores reais de Supabase apenas em ambiente local/seguro, nunca versionados.
- Validar fluxo de auth em ambiente de staging/producao quando houver deploy autorizado.
- Definir fase de provisioning para criar/vincular User, Tenant e Membership internos sem automatismo inseguro.
- Avaliar campo dedicado para vinculo com Supabase Auth (uth.uid) em fase de schema autorizada.
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
