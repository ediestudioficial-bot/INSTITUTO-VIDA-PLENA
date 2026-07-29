"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, Menu, X, ShieldCheck, Sun, Globe } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-md border-b border-brand-wood/10 transition-all shadow-sm">
      {/* Top Banner Informativo de Fase */}
      <div className="bg-brand-deep text-brand-cream text-xs py-1.5 px-4 text-center border-b border-brand-gold/20">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-brand-gold text-brand-deepDark">
            Fase 1: Estruturação Conceitual
          </span>
          <span className="hidden sm:inline">|</span>
          <span>Projeto social de inspiração cristã para acolhimento integral a idosos.</span>
          <Link
            href="/transparencia"
            className="underline hover:text-brand-gold font-medium ml-1 flex items-center gap-1 inline-flex"
          >
            <ShieldCheck className="w-3 h-3 inline" /> Saiba mais
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logotipo Textual Provisório */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-lg p-1"
          aria-label="Instituto Vida Plena - Página Inicial"
        >
          <div className="w-11 h-11 rounded-xl bg-brand-deep text-brand-gold flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-brand-gold/30">
            <Sun className="w-6 h-6" />
          </div>
          <div>
            <span className="block font-serif font-bold text-xl md:text-2xl text-brand-deep leading-none">
              INSTITUTO VIDA PLENA
            </span>
            <span className="block text-[11px] text-brand-wood font-medium tracking-wide mt-0.5">
              Viver com dignidade. Envelhecer com esperança.
            </span>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-brand-charcoal">
          <Link
            href="/"
            className="hover:text-brand-deep transition-colors py-2 border-b-2 border-transparent hover:border-brand-gold"
          >
            Início
          </Link>
          <Link
            href="/"
            className="hover:text-brand-deep transition-colors py-2 border-b-2 border-transparent hover:border-brand-gold"
          >
            Início
          </Link>
          <Link
            href="/o-projeto"
            className="hover:text-brand-deep transition-colors py-2 border-b-2 border-transparent hover:border-brand-gold"
          >
            O Projeto
          </Link>
          <Link
            href="/como-sera"
            className="hover:text-brand-deep transition-colors py-2 border-b-2 border-transparent hover:border-brand-gold"
          >
            Como Será
          </Link>
          <Link
            href="/etapas"
            className="hover:text-brand-deep transition-colors py-2 border-b-2 border-transparent hover:border-brand-gold"
          >
            Etapas
          </Link>
          <Link
            href="/transparencia"
            className="hover:text-brand-deep transition-colors py-2 border-b-2 border-transparent hover:border-brand-gold"
          >
            Transparência
          </Link>
          <Link
            href="/participe"
            className="hover:text-brand-deep transition-colors py-2 border-b-2 border-transparent hover:border-brand-gold"
          >
            Participe
          </Link>
          <Link
            href="/perguntas-frequentes"
            className="hover:text-brand-deep transition-colors py-2 border-b-2 border-transparent hover:border-brand-gold"
          >
            FAQ
          </Link>
          <Link
            href="/participe"
            className="hover:text-brand-deep transition-colors py-2 border-b-2 border-transparent hover:border-brand-gold"
          >
            Participe
          </Link>
          <Link
            href="/contato"
            className="hover:text-brand-deep transition-colors py-2 border-b-2 border-transparent hover:border-brand-gold"
          >
            Contato
          </Link>
        </nav>

        {/* Botões de Ação */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/en"
            className="px-3 py-2 text-xs font-bold text-brand-deep border border-brand-wood/20 hover:bg-brand-sageLight rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Globe className="w-3.5 h-3.5 text-brand-gold" />
            <span>EN</span>
          </Link>
          <Link
            href="/participe"
            className="px-5 py-2 text-sm font-semibold text-brand-deepDark bg-brand-gold hover:bg-amber-400 rounded-lg transition-all shadow-sm hover:shadow-gold flex items-center gap-2"
          >
            <Heart className="w-4 h-4 text-brand-deep fill-brand-deep" />
            Faça Parte
          </Link>
        </div>

        {/* Botão Menu Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-brand-deep hover:bg-brand-sageLight focus:outline-none focus:ring-2 focus:ring-brand-gold"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-cream border-b border-brand-wood/10 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-medium text-brand-deep hover:bg-brand-sageLight"
          >
            Início
          </Link>
          <Link
            href="/o-projeto"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-medium text-brand-deep hover:bg-brand-sageLight"
          >
            O Projeto
          </Link>
          <Link
            href="/como-sera"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-medium text-brand-deep hover:bg-brand-sageLight"
          >
            Como Será
          </Link>
          <Link
            href="/masterplan"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-medium text-brand-deep hover:bg-brand-sageLight"
          >
            Masterplan Conceitual
          </Link>
          <Link
            href="/visao-do-futuro"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-medium text-brand-deep hover:bg-brand-sageLight"
          >
            Visão do Futuro (Galeria)
          </Link>
          <Link
            href="/etapas"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-medium text-brand-deep hover:bg-brand-sageLight"
          >
            Linha do Tempo (Etapas)
          </Link>
          <Link
            href="/transparencia"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-medium text-brand-deep hover:bg-brand-sageLight"
          >
            Transparência
          </Link>
          <Link
            href="/perguntas-frequentes"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-medium text-brand-deep hover:bg-brand-sageLight"
          >
            Perguntas Frequentes (FAQ)
          </Link>
          <Link
            href="/participe"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-medium text-brand-deep hover:bg-brand-sageLight"
          >
            Participe
          </Link>
          <Link
            href="/contato"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-medium text-brand-deep hover:bg-brand-sageLight"
          >
            Contato
          </Link>
          <div className="pt-3 border-t border-brand-wood/10 flex flex-col gap-2">
            <Link
              href="/o-projeto"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center px-4 py-2.5 text-sm font-medium text-brand-deep border border-brand-deep rounded-lg"
            >
              Conheça o projeto
            </Link>
            <Link
              href="/participe"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center px-4 py-2.5 text-sm font-semibold text-brand-deepDark bg-brand-gold rounded-lg shadow-sm"
            >
              Faça Parte (Manifeste seu Interesse)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
