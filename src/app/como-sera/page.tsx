import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusTag } from "@/components/StatusTag";
import {
  Home,
  TreePine,
  Heart,
  Stethoscope,
  Users,
  Flower2,
  Church,
  ShieldCheck,
  Building2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Como Será o Instituto | Visão Conceitual",
  description:
    "Explore a visão conceitual do futuro lar residencial Instituto Vida Plena: arquitetura térrea, Jardim Central, saúde e convivência.",
};

export default function ComoSeraPage() {
  return (
    <div className="py-16 space-y-20">
      {/* Banner Principal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep text-brand-cream rounded-3xl p-8 md:p-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-brand-gold uppercase bg-brand-cream/10 rounded-full border border-brand-gold/30">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>Visão Conceitual do Lar</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-warmWhite leading-tight">
            Como Será o Instituto Vida Plena
          </h1>
          <p className="text-lg text-brand-cream/90 font-light max-w-3xl leading-relaxed">
            Uma projeção conceitual desenvolvida por arquitetos, gerontólogos e gestores sociais para erguer um ambiente de paz, dignidade, luz natural e convivência familiar.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <StatusTag status="conceito" label="Visão Arquitetônica Conceitual" />
            <StatusTag status="estudo" label="Unidade Inicial: ~24 Moradores" />
          </div>
        </div>
      </section>

      {/* Os 11 Pilares da Experiência do Morador */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Pilares de Design & Vida"
          title="Um ambiente pensado em cada detalhe"
          description="Conheça os 11 elementos centrais que definirão a atmosfera humana e física do nosso futuro lar."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pilar 1 */}
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-deep text-brand-gold flex items-center justify-center">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-brand-deep">1. Conceito de Lar</h3>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              Ambiente aconchegante com atmosfera de pousada de campo, longe do aspecto frio de hospital ou asilo tradicional.
            </p>
          </div>

          {/* Pilar 2 */}
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-deep text-brand-gold flex items-center justify-center">
              <TreePine className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-brand-deep">2. Jardim Central</h3>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              O coração do Instituto. Área verde sombreada ao redor da qual todos os blocos residenciais e sociais convergem.
            </p>
          </div>

          {/* Pilar 3 */}
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-deep text-brand-gold flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-brand-deep">3. Moradia Adaptada</h3>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              Suítes iluminadas com banheiros acessíveis, barras de apoio integradas à marcenaria e iluminação de balizamento.
            </p>
          </div>

          {/* Pilar 4 */}
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-deep text-brand-gold flex items-center justify-center">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-brand-deep">4. Saúde Continuada</h3>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              Posto de enfermagem 24h, fisioterapia e acompanhamento nutricional de forma discreta e eficiente.
            </p>
          </div>

          {/* Pilar 5 */}
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-deep text-brand-gold flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-brand-deep">5. Convivência Ativa</h3>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              Salas de estar, biblioteca, jogos e refeições coletivas saborosas planejadas por nutricionista.
            </p>
          </div>

          {/* Pilar 6 */}
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-deep text-brand-gold flex items-center justify-center">
              <Flower2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-brand-deep">6. Preservação de Memórias</h3>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              Jardim das Memórias, Oficina de Artesanato e Estúdio de gravação de biographies em áudio e vídeo.
            </p>
          </div>

          {/* Pilar 7 */}
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-deep text-brand-gold flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-brand-deep">7. Integração Familiar</h3>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              Praça da Família para visitas prolongadas de filhos, netos e bisnetos em momentos festivos e acolhedores.
            </p>
          </div>

          {/* Pilar 8 */}
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-deep text-brand-gold flex items-center justify-center">
              <Church className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-brand-deep">8. Espiritualidade & Paz</h3>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              Capela cristã e espaço de oração com respeito incondicional à liberdade de consciência de cada morador.
            </p>
          </div>

          {/* Pilar 9 */}
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-deep text-brand-gold flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-brand-deep">9. Acessibilidade Universal</h3>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              Projeto 100% térreo pautado pela norma ABNT NBR 9050, com rampas suaves e portas de 90cm.
            </p>
          </div>
        </div>
      </section>

      {/* Chamada para Acompanhamento das Etapas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-sageLight/60 border border-brand-sage/20 p-8 md:p-12 rounded-3xl text-center space-y-4">
          <h2 className="text-3xl font-serif font-bold text-brand-deep">
            Acompanhe o Cronograma de Implantação
          </h2>
          <p className="text-brand-charcoal text-base max-w-2xl mx-auto leading-relaxed">
            Veja em qual etapa o projeto se encontra atualmente e quais são as próximas entregas técnicas até a abertura oficial.
          </p>
          <div>
            <Link
              href="/etapas"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-deep text-brand-cream font-semibold rounded-xl hover:bg-brand-deepDark transition-colors text-sm shadow-sm"
            >
              Ver Linha do Tempo das Etapas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
