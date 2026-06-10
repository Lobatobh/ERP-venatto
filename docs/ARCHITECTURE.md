# Architecture

## Decisao inicial

O MVP sera construido como um unico projeto Next.js, sem monorepo e sem NestJS.

## Stack

- Frontend e backend inicial: Next.js
- Linguagem: TypeScript
- Banco oficial: PostgreSQL
- ORM: Prisma
- UI: Tailwind CSS e shadcn/ui

## Organizacao proposta

```txt
docs/
prisma/
public/
src/
  app/
  components/
  features/
  lib/
  server/
tests/
```

## Responsabilidades iniciais

- `docs/`: documentacao, decisoes, roadmap e status.
- `prisma/`: arquivos futuros do Prisma, sem schema nesta fase.
- `public/`: assets publicos futuros.
- `src/app/`: App Router futuro do Next.js.
- `src/components/`: componentes reutilizaveis futuros.
- `src/features/`: organizacao futura por dominios de produto.
- `src/lib/`: utilitarios e integracoes compartilhadas futuras.
- `src/server/`: codigo server-side futuro.
- `tests/`: testes futuros.

## Fora do escopo atual

- Monorepo.
- NestJS.
- SQLite como banco oficial.
- Funcionalidades de negocio.
- Telas de sistema.
- Docker/Dokploy validado em ambiente real.
