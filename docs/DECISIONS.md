# Decisions

## DEC-001 - Projeto unico Next.js no MVP

O MVP sera um unico projeto Next.js. Monorepo esta fora do escopo inicial.

## DEC-002 - Backend inicial no Next.js

O backend inicial usara Server Actions e API Routes do Next.js. NestJS nao sera usado nesta fase.

## DEC-003 - Banco oficial PostgreSQL

PostgreSQL e o banco oficial do projeto. SQLite nao sera tratado como arquitetura oficial.

## DEC-004 - Prisma como ORM

Prisma e o ORM oficial do projeto.

## DEC-005 - UI com Tailwind CSS e shadcn/ui

A interface sera construida com Tailwind CSS e shadcn/ui quando as fases de UI forem autorizadas.

## DEC-006 - Scaffold manual controlado da Fase 0.1

O scaffold oficial `create-next-app` falhou porque o nome do diretorio continha letras maiusculas, invalidas para nome de pacote npm.

A Fase 0.1 foi concluida com scaffold manual controlado usando `package.json` com nome valido `venatto-erp-saas`.

## DEC-007 - Lint via ESLint direto

O script `lint` usa `eslint .` em vez de `next lint`, mantendo compatibilidade com a versao instalada do Next.js e ESLint.

## DEC-008 - Typecheck sem incremental

O `tsconfig.json` usa `incremental: false` para evitar escrita de `tsconfig.tsbuildinfo` durante `npm run typecheck`.

## DEC-009 - Raiz do Turbopack fixada

O `next.config.ts` define `turbopack.root` como `process.cwd()` para evitar inferencia incorreta de workspace por lockfile existente em diretorio pai.

## DEC-010 - Git local inicializado sem commit

A Fase 0.2 inicializou Git local apenas para preparar controle de baseline. Nenhum push ou remote foi criado.

## DEC-011 - shadcn/ui inicializado na Fase 0.4

shadcn/ui foi inicializado com preset `nova`, base `radix`, Tailwind CSS v4, CSS variables, base color `neutral` e aliases `@/components`, `@/components/ui`, `@/lib` e `@/lib/utils`.

## DEC-012 - Componentes UI minimos da Fase 0.4

A Fase 0.4 adicionou somente `button`, `card` e `separator`. Outros componentes de UI ficam pendentes para fases autorizadas.

## DEC-013 - Auditoria npm apenas diagnostica

A Fase 0.2 executou `npm audit --audit-level=moderate` sem `npm audit fix` e sem alterar dependencias por causa da auditoria.

## DEC-014 - Prisma fixado na linha 6

A instalacao inicial trouxe Prisma 7, mas Prisma 7 remove suporte a `url = env("DATABASE_URL")` no schema. Para cumprir a regra da Fase 1.0 e manter o datasource PostgreSQL no `schema.prisma`, Prisma e `@prisma/client` foram fixados na linha 6.

## DEC-015 - Migration versionavel como padrao

O projeto usa Prisma Migrate para alteracoes versionaveis de schema. `prisma db push` nao deve ser usado como fluxo oficial.

## DEC-016 - Modelos minimos SaaS

A fundacao de dados inclui somente `Tenant`, `User`, `Membership`, `Role`, `Permission` e `AuditLog`. Modulos de negocio continuam fora do escopo.

## DEC-017 - Supabase self-hosted como banco da fundacao

O banco oficial do ERP nesta fase e o PostgreSQL do Supabase self-hosted. A conexao local via `.env` nao deve ser versionada nem exposta.

## DEC-018 - Risco assumido sem backup na migration inicial

Foi escolhida conscientemente a opcao D: executar a migration inicial sem backup/snapshot confirmado, porque o ambiente ainda nao e producao e nao contem dados reais, clientes, login/auth do ERP, telas operacionais ou modulos de negocio.

## DEC-019 - Cliente Prisma compartilhado server-side

A Fase 1.7 criou `src/lib/prisma.ts` como ponto unico de acesso server-side ao Prisma Client, reutilizando instancia global em desenvolvimento para evitar multiplas conexoes durante hot reload.

## PR-001 - Validacao Docker/Dokploy antes de producao real

Docker/Dokploy deve ser validado obrigatoriamente antes de producao real em VPS real.

Esta pendencia nao bloqueia o desenvolvimento do MVP. Ela bloqueia apenas deploy e producao real.