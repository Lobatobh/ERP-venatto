import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VENATTO ERP SaaS",
  description: "Base tecnica inicial do VENATTO ERP SaaS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
