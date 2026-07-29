import React from "react";
import Link from "next/link";
import { Sun, Heart, ShieldCheck, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-brand-cream pt-16 pb-12 border-t-4 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-brand-cream/10">
          {/* Coluna Principal */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-gold text-brand-deep font-bold flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <span className="font-serif font-bold text-2xl tracking-wide text-brand-warmWhite">
                INSTITUTO VIDA PLENA
              </span>
            </div>
            <p className="text-brand-gold font-serif italic text-base">
              Viver com dignidade. Envelhecer com esperança.
            </p>
            <p className="text-brand-cream/80 text-sm leading-relaxed max-w-md">
              O Instituto Vida Plena é uma iniciativa cristã voltada ao futuro acolhimento integral da pessoa idosa, em um ambiente que evoca lar, paz, propósito e convivência familiar.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-brand-deepDark border border-brand-gold/30 text-xs text-brand-gold">
              <Heart className="w-3.5 h-3.5 fill-brand-gold" />
              <span>Onde o cuidado encontra o amor.</span>
            </div>
          </div>

          {/* Navegação Rápida */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-serif text-lg font-bold text-brand-gold mb-2">
              Navegação Institucional
            </h3>
            <ul className="space-y-2 text-sm text-brand-cream/80">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors inline-block py-1">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link href="/o-projeto" className="hover:text-brand-gold transition-colors inline-block py-1">
                  O Conceito &amp; Arquitetura
                </Link>
              </li>
              <li>
                <Link href="/como-sera" className="hover:text-brand-gold transition-colors inline-block py-1">
                  Como Será o Lar
                </Link>
              </li>
              <li>
                <Link href="/masterplan" className="hover:text-brand-gold transition-colors inline-block py-1">
                  Masterplan Conceitual
                </Link>
              </li>
              <li>
                <Link href="/visao-do-futuro" className="hover:text-brand-gold transition-colors inline-block py-1">
                  Visão do Futuro (Galeria)
                </Link>
              </li>
              <li>
                <Link href="/metodologia-visual" className="hover:text-brand-gold transition-colors inline-block py-1">
                  Metodologia Visual &amp; Renders
                </Link>
              </li>
              <li>
                <Link href="/etapas" className="hover:text-brand-gold transition-colors inline-block py-1">
                  Linha do Tempo (Etapas)
                </Link>
              </li>
              <li>
                <Link href="/transparencia" className="hover:text-brand-gold transition-colors inline-block py-1">
                  Governança &amp; Transparência
                </Link>
              </li>
              <li>
                <Link href="/parceiros" className="hover:text-brand-gold transition-colors inline-block py-1">
                  Parceiros &amp; Colaboradores
                </Link>
              </li>
              <li>
                <Link href="/en" className="hover:text-brand-gold transition-colors inline-block py-1 font-semibold text-brand-gold">
                  English Overview (Global)
                </Link>
              </li>
              <li>
                <Link href="/perguntas-frequentes" className="hover:text-brand-gold transition-colors inline-block py-1">
                  Perguntas Frequentes (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/participe" className="hover:text-brand-gold transition-colors inline-block py-1">
                  Seja Voluntário / Parceiro
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-brand-gold transition-colors inline-block py-1">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Documentação & LGPD */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-serif text-lg font-bold text-brand-gold mb-2">
              Conformidade & Ética
            </h3>
            <ul className="space-y-2 text-sm text-brand-cream/80">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <Link href="/transparencia" className="hover:text-brand-gold transition-colors">
                  Compliance & Regras de Transparência
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-gold" />
                <Link href="/privacidade" className="hover:text-brand-gold transition-colors">
                  Política de Privacidade & LGPD
                </Link>
              </li>
            </ul>

            <div className="mt-4 p-4 rounded-xl bg-brand-deepDark/60 border border-brand-cream/10 text-xs text-brand-cream/70 leading-normal">
              <strong className="block text-brand-gold mb-1 font-semibold">Nota Legal de Salvaguarda:</strong>
              O Instituto Vida Plena encontra-se em fase de planejamento conceitual. Nenhuma captação financeira real está ativa nesta etapa. Informações jurídicas, arquitetônicas e financeiras são preliminares e serão devidamente homologadas.
            </div>
          </div>
        </div>

        {/* Rodapé Direitos */}
        <div className="pt-8 text-center text-xs text-brand-cream/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Instituto Vida Plena. Todos os direitos reservados.</p>
          <p className="italic">&quot;Não construiremos apenas uma casa de repouso. Construiremos um lar.&quot;</p>
        </div>
      </div>
    </footer>
  );
}
