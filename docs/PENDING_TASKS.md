# Pending Tasks

## Pendencias reais

- Fazer commit da Fase 0.4 somente com autorizacao explicita.
- Criar Prisma schema somente em fase autorizada.
- Configurar PostgreSQL somente em fase autorizada.
- Definir autenticacao somente na Fase 1 autorizada.
- Criar funcionalidades de negocio somente nas fases correspondentes.
- Instalar novos componentes shadcn/ui somente quando houver escopo aprovado.
- Avaliar o `package-lock.json` existente no diretorio pai antes de qualquer remocao.
- Validar Docker/Dokploy em VPS real antes de producao real.

## Bloqueios para producao real

- PR-001: Docker/Dokploy nao validado em VPS real.
- Banco PostgreSQL real ainda nao configurado.
- Variaveis de ambiente de producao ainda nao definidas.
- Processo de deploy real ainda nao validado.