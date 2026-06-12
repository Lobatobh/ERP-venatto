export type AppNavigationItem = {
  href: string;
  label: string;
  description: string;
};

export const appNavigationItems: AppNavigationItem[] = [
  {
    href: "/app",
    label: "Visao geral",
    description: "Base autenticada e status da conta.",
  },
  {
    href: "/app/clientes",
    label: "Clientes",
    description: "Cadastro e relacionamento com clientes em preparacao.",
  },
  {
    href: "/app/propostas",
    label: "Propostas",
    description: "Orcamentos e propostas comerciais em preparacao.",
  },
  {
    href: "/app/projetos",
    label: "Projetos",
    description: "Organizacao de projetos em preparacao.",
  },
  {
    href: "/app/ambientes",
    label: "Ambientes",
    description: "Ambientes e composicoes em preparacao.",
  },
  {
    href: "/app/financeiro",
    label: "Financeiro",
    description: "Controle financeiro em preparacao.",
  },
  {
    href: "/app/producao",
    label: "Producao",
    description: "Fluxo de producao em preparacao.",
  },
  {
    href: "/app/usuarios",
    label: "Usuarios",
    description: "Gestao de acesso interno em preparacao.",
  },
  {
    href: "/app/configuracoes",
    label: "Configuracoes",
    description: "Preferencias do ERP em preparacao.",
  },
];