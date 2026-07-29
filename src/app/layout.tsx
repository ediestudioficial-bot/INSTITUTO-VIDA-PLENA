import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Instituto Vida Plena | Um lugar para continuar vivendo",
    template: "%s | Instituto Vida Plena",
  },
  description:
    "Projeto social e cristão voltado à futura criação de um lar residencial para acolhimento integral a idosos com dignidade, segurança, fé e propósito.",
  keywords: [
    "Instituto Vida Plena",
    "ILPI",
    "Acolhimento a idosos",
    "Casa de repouso humana",
    "Terceira idade",
    "Arquitetura acessível idosos",
    "Cuidado cristão",
    "Jardim das Memórias",
  ],
  authors: [{ name: "Instituto Vida Plena" }],
  openGraph: {
    title: "Instituto Vida Plena | Um lugar para continuar vivendo",
    description:
      "Projeto social e cristão voltado ao acolhimento integral da pessoa idosa com dignidade, humanidade e transparência.",
    url: "https://institutovidaplena.org",
    siteName: "Instituto Vida Plena",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="flex flex-col min-h-full bg-brand-cream text-brand-charcoal antialiased">
        {/* Link para pular direto ao conteúdo principal (Acessibilidade) */}
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-gold focus:text-brand-deep font-bold rounded-lg shadow-lg"
        >
          Pular para o conteúdo principal
        </a>

        <Header />

        <main id="conteudo-principal" className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
