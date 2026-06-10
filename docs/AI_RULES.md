# AI Rules

## Regra principal

O VENATTO ERP SaaS deve ser reconstruido com fases curtas, validadas e sem avancar escopo sem autorizacao.

## Regras obrigatorias

- Nao implementar funcionalidades antes da fase correspondente.
- Nao criar telas de sistema antes da fase correspondente.
- Nao criar modulos de negocio antes da fase correspondente.
- Nao executar comandos destrutivos.
- Nao alterar arquivos sem plano, impacto, riscos e autorizacao previa.
- Nao avancar de fase sem concluir e validar a fase atual.
- Nao criar monorepo no MVP inicial.
- Nao usar NestJS no MVP inicial.
- Nao alternar arquitetura sem autorizacao.
- Nao marcar fase como concluida sem validacao.
- Nao usar SQLite como arquitetura oficial.
- Nao tratar Docker/Dokploy como validado sem VPS real.
- Nao trabalhar fora do diretorio autorizado.
- Nao fazer commit ou push sem autorizacao explicita.

## Stack aprovada

- Next.js
- TypeScript
- PostgreSQL
- Prisma
- Tailwind CSS
- shadcn/ui

## Limites da Fase 0

A Fase 0 cria apenas fundacao documental e estrutura minima de pastas. Ela nao inicializa Next.js, nao instala dependencias, nao cria schema Prisma, nao cria banco e nao implementa funcionalidades.
