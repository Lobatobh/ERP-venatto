# Decisions

## DEC-001 - Projeto unico Next.js no MVP

O MVP sera um unico projeto Next.js. Monorepo esta fora do escopo inicial.

## DEC-002 - Backend inicial no Next.js

O backend inicial usara Server Actions e API Routes do Next.js. NestJS nao sera usado nesta fase.

## DEC-003 - Banco oficial PostgreSQL

PostgreSQL e o banco oficial do projeto. SQLite nao sera tratado como arquitetura oficial.

## DEC-004 - Prisma como ORM

Prisma sera o ORM oficial quando a fase de banco for autorizada.

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

## PR-001 - Validacao Docker/Dokploy antes de producao real

Docker/Dokploy deve ser validado obrigatoriamente antes de producao real em VPS real.

Esta pendencia nao bloqueia o desenvolvimento do MVP. Ela bloqueia apenas deploy e producao real.