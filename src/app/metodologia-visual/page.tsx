import React from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Compass, ShieldCheck, TreePine, Eye, CheckCircle2, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Metodologia Visual & Renders Conceituais | Instituto Vida Plena",
  description:
    "Entenda como as imagens e diagramas conceituais do Instituto Vida Plena são elaborados, avaliados e integrados com responsabilidade ética.",
};

export default function MetodologiaVisualPage() {
  return (
    <div className="py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner Principal */}
      <div className="bg-brand-deep text-brand-cream rounded-3xl p-8 md:p-14 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-brand-gold uppercase bg-brand-cream/10 rounded-full border border-brand-gold/30">
          <Eye className="w-4 h-4 text-brand-gold" />
          <span>Diretrizes de Comunicação Visual</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-warmWhite">
          Metodologia Visual &amp; Renders Conceituais
        </h1>
        <p className="text-lg text-brand-cream/90 font-light max-w-3xl leading-relaxed">
          Transparência absoluta sobre o papel das ilustrações e modelos 3D na comunicação da visão do projeto.
        </p>
      </div>

      {/* Seção 1: O Que Representam e O Que NÃO Representam */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 space-y-4">
          <div className="flex items-center gap-3 text-emerald-800 font-serif font-bold text-xl">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
            <span>O Que as Imagens Representam</span>
          </div>
          <ul className="space-y-2.5 text-sm text-emerald-950 leading-relaxed font-medium">
            <li>✓ A intenção arquitetônica humanizada e o conceito de pousada de campo.</li>
            <li>✓ As diretrizes de acessibilidade universal baseadas na NBR 9050 para edificações.</li>
            <li>✓ A integração com o clima tropical de Macapá/AP (sombra, varandas e beirais).</li>
            <li>✓ O acolhimento cristão com foco na dignidade, autonomia e biografia da pessoa idosa.</li>
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-amber-50 border border-amber-200 space-y-4">
          <div className="flex items-center gap-3 text-amber-900 font-serif font-bold text-xl">
            <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0" />
            <span>O Que as Imagens NÃO Representam</span>
          </div>
          <ul className="space-y-2.5 text-sm text-amber-950 leading-relaxed font-medium">
            <li>✘ Não constituem um projeto de arquitetura executivo aprovado pela Vigilância Sanitária.</li>
            <li>✘ Não correspondem a fotografias de uma edificação existente ou em obras.</li>
            <li>✘ Não substituem o trabalho de arquitetos, engenheiros e sanitaristas habilitados.</li>
            <li>✘ Não prometem acabamentos ou revestimentos finais sem cotações validadas.</li>
          </ul>
        </div>
      </div>

      {/* Seção 2: Critérios de Avaliação e Vetos */}
      <div className="space-y-8">
        <SectionHeading
          badge="Governança de Imagem"
          title="Critérios de Seleção &amp; Veto Técnico"
          description="Nenhuma representação conceitual é publicada sem passar pelo nosso protocolo de homologação visual."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <ShieldCheck className="w-8 h-8 text-brand-deep" />
            <h3 className="font-serif font-bold text-lg text-brand-deep">Acessibilidade Estrita</h3>
            <p className="text-xs text-brand-charcoal/80">
              Veto a qualquer render que apresente degraus sem rampa alternativa, portas estreitas ou pisos escorregadios.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <TreePine className="w-8 h-8 text-brand-deep" />
            <h3 className="font-serif font-bold text-lg text-brand-deep">Adequação Equatorial</h3>
            <p className="text-xs text-brand-charcoal/80">
              Exigência de soluções passivas de conforto térmico (beirais amplos, vegetação regional e ventilação).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <Compass className="w-8 h-8 text-brand-deep" />
            <h3 className="font-serif font-bold text-lg text-brand-deep">Sem Estética Hospitalar</h3>
            <p className="text-xs text-brand-charcoal/80">
              Rejeição imediata de imagens com equipamentos clínicos expostos que descaracterizem o ambiente residencial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
