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

## DEC-020 - Healthcheck interno server-only

A Fase 1.8 criou healthcheck server-only para conexao com banco usando Prisma e rota interna com resposta minima, sem dados sensiveis. Em producao, a rota depende de `INTERNAL_HEALTHCHECK_TOKEN`; sem token configurado, retorna 404.

## DEC-021 - Auth foundation com Supabase SSR

A Fase 1.9 usa `@supabase/ssr` e `@supabase/supabase-js` para a fundacao tecnica de autenticacao no Next.js App Router. `@supabase/auth-helpers` nao sera usado.

## DEC-022 - Fluxo minimo de auth antes de modulos

A Fase 2.0 cria apenas o fluxo funcional minimo de login/logout e rota protegida `/app`. Cadastro publico, recuperacao de senha, RBAC, multi-tenant enforcement e dashboard real ficam para fases autorizadas.

## PR-001 - Validacao Docker/Dokploy antes de producao real

Docker/Dokploy deve ser validado obrigatoriamente antes de producao real em VPS real.

Esta pendencia nao bloqueia o desenvolvimento do MVP. Ela bloqueia apenas deploy e producao real.


## DEC-023 - Sessao SaaS server-only

A Fase 2.2 usa uma camada server-only para combinar Supabase Auth com dados internos do ERP via Prisma. No schema atual, o vinculo possivel e por `User.email`; campo dedicado para `auth.uid`, provisioning, RBAC completo e multi-tenant enforcement ficam para fases autorizadas.


## DEC-024 - Vinculo estavel com Supabase Auth

A Fase 2.3A adiciona `User.supabaseAuthId` como vinculo estavel entre Supabase Auth e usuario interno do ERP. O e-mail permanece unico, mas deixa de ser a identidade primaria de vinculacao.

## DEC-025 - Provisioning inicial explicito e controlado

O provisioning inicial de `User`, `Tenant`, `Role` e `Membership` e acionado apenas por server action/botao protegido em `/app`. Ele nao roda automaticamente ao acessar a rota, nao usa service role, usa transacao Prisma, nao sobrescreve `supabaseAuthId` existente, bloqueia e-mail vinculado a outro `authUser.id` e bloqueia owner duplicado no tenant `venatto`.
