# Pending Tasks

## Pendencias reais

- Testar manualmente o botao `Inicializar perfil interno da Venatto`.
- Validar login/logout apos provisioning inicial.
- Definir politica futura para adicionar novos usuarios ao tenant `venatto`.
- Implementar RBAC completo em fase futura autorizada.
- Criar dashboard real em fase futura autorizada.
- Rotacionar secrets antes de producao.
- Configurar `INTERNAL_HEALTHCHECK_TOKEN` em ambiente real antes de expor healthcheck em producao.
- Configurar valores reais de Supabase apenas em ambiente local/seguro, nunca versionados.
- Validar fluxo de auth em ambiente de staging/producao quando houver deploy autorizado.
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
- Secrets devem ser rotacionados antes de producao.