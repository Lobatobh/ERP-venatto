# Pending Tasks

## Pendencias reais

- Fazer commit da Fase 1.0 somente com autorizacao explicita.
- Validar PostgreSQL local real somente em fase autorizada.
- Executar migration somente em fase autorizada.
- Configurar cliente Prisma compartilhado somente em fase autorizada.
- Definir autenticacao somente em fase autorizada.
- Criar funcionalidades de negocio somente nas fases correspondentes.
- Instalar novos componentes shadcn/ui somente quando houver escopo aprovado.
- Avaliar o `package-lock.json` existente no diretorio pai antes de qualquer remocao.
- Validar Docker/Dokploy em VPS real antes de producao real.

## Bloqueios para producao real

- PR-001: Docker/Dokploy nao validado em VPS real.
- Banco PostgreSQL real ainda nao configurado.
- Variaveis de ambiente de producao ainda nao definidas.
- Processo de deploy real ainda nao validado.