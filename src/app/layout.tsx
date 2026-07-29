import type { Metadata } from "next";
import { Hanken_Grotesk, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Instituto Vida Plena | Dignidade e cuidado para a pessoa idosa", template: "%s | Instituto Vida Plena" },
  description: "Projeto social de inspiração cristã voltado ao futuro acolhimento integral de pessoas idosas com dignidade, amparo e amor em ação.",
  authors: [{ name: "Instituto Vida Plena" }],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-brand-cream text-brand-charcoal antialiased">
        <a href="#conteudo-principal" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-brand-deep focus:text-white focus:px-4 focus:py-3">Pular para o conteúdo</a>
        <Header />
        <main id="conteudo-principal">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
