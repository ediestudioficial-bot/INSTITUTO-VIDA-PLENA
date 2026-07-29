import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { conceptImagesData } from "@/data/concept-images";
import { ConceptImage } from "@/components/ConceptImage";
import { Sparkles, Info, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Visão do Futuro | Galeria Conceitual",
  description:
    "Explore as projeções e descrições conceituais dos ambientes planejados para o Instituto Vida Plena.",
};

export default function VisaoDoFuturoPage() {
  return (
    <div className="py-16 space-y-16">
      {/* Banner Principal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep text-brand-cream rounded-3xl p-8 md:p-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-brand-gold uppercase bg-brand-cream/10 rounded-full border border-brand-gold/30">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>Representações Artísticas</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-warmWhite">
            Visão do Futuro
          </h1>
          <p className="text-lg text-brand-cream/90 font-light max-w-3xl leading-relaxed">
            Galeria conceitual desenvolvida para comunicar a atmosfera acolhedora, humana e integrada dos ambientes do nosso futuro lar.
          </p>
        </div>
      </section>

      {/* Aviso Regulatório Importante */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-4">
          <Info className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1 text-sm leading-relaxed">
            <h3 className="font-serif font-bold text-base text-amber-950">Aviso sobre as Imagens do Projeto:</h3>
            <p>
              <strong>As imagens arquitetônicas são representações conceituais e não fotografias de instalações existentes.</strong> O Instituto Vida Plena encontra-se na fase de planejamento preliminar. Renders 3D completos estão sendo produzidos para apresentação aos futuros parceiros.
            </p>
          </div>
        </div>
      </section>

      {/* Cartões da Galeria Conceitual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Galeria de Ambientes"
          title="Projeção Estética dos Espaços"
          description="Conheça os 16 ambientes planejados com sistema de imagem e fallback visual inteligente."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conceptImagesData.map((img) => (
            <ConceptImage
              key={img.id}
              src={img.webpPath}
              title={img.title}
              description={img.description}
              alt={img.alt}
              environment={img.title}
              illustrationType={img.illustrationType}
              aspectRatio={img.aspectRatio}
              conceptualNotice={img.conceptNotice}
            />
          ))}
        </div>
      </section>

      {/* Navegação */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Link
          href="/masterplan"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-deep text-brand-cream font-semibold rounded-xl hover:bg-brand-deepDark transition-colors text-sm"
        >
          Explorar a Organização do Masterplan <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
