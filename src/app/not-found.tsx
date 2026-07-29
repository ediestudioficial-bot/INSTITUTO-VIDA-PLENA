import React from "react";
import Link from "next/link";
import { Compass, Home as HomeIcon, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-brand-warmWhite p-8 md:p-10 rounded-3xl border border-brand-wood/15 text-center space-y-6 shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-brand-deep/10 text-brand-deep mx-auto flex items-center justify-center">
          <Compass className="w-8 h-8 text-brand-gold" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-brand-gold uppercase tracking-wider bg-brand-deep text-brand-cream px-3 py-1 rounded-full">
            Página Não Encontrada (404)
          </span>
          <h1 className="font-serif font-bold text-2xl text-brand-deep leading-snug">
            Este caminho ainda não faz parte do Instituto Vida Plena.
          </h1>
          <p className="text-xs text-brand-charcoal/80 leading-relaxed">
            A rota que você tentou acessar não existe ou está em fase de planejamento metodológico.
          </p>
        </div>

        <div className="pt-2 space-y-3">
          <Link
            href="/"
            className="w-full py-3 bg-brand-deep text-brand-cream font-bold text-xs rounded-xl hover:bg-brand-deepDark transition-colors flex items-center justify-center gap-2"
          >
            <HomeIcon className="w-4 h-4" />
            Voltar à Página Inicial
          </Link>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/o-projeto"
              className="py-2.5 bg-brand-cream text-brand-deep border border-brand-wood/20 font-semibold text-xs rounded-xl hover:bg-brand-sageLight transition-colors flex items-center justify-center gap-1"
            >
              <BookOpen className="w-3.5 h-3.5" />
              O Projeto
            </Link>
            <Link
              href="/etapas"
              className="py-2.5 bg-brand-cream text-brand-deep border border-brand-wood/20 font-semibold text-xs rounded-xl hover:bg-brand-sageLight transition-colors flex items-center justify-center gap-1"
            >
              Etapas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
