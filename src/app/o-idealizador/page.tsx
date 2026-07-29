import React from "react";
import Link from "next/link";
import { StatusTag } from "@/components/StatusTag";
import { Quote, Heart, ShieldCheck, ArrowRight, UserCheck } from "lucide-react";

export const metadata = {
  title: "Carta do Idealizador | A Visão do Lar",
  description:
    "Leia a carta do idealizador do Instituto Vida Plena sobre a vocação cristã, respeito às biografias e compromisso social.",
};

export default function IdealizadorPage() {
  return (
    <div className="py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner Principal */}
      <div className="bg-brand-deep text-brand-cream rounded-3xl p-8 md:p-14 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-brand-gold uppercase bg-brand-cream/10 rounded-full border border-brand-gold/30">
          <UserCheck className="w-4 h-4 text-brand-gold" />
          <span>Mensagem Institucional</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-warmWhite">
          Carta do Idealizador
        </h1>
        <p className="text-lg text-brand-cream/90 font-light max-w-3xl leading-relaxed">
          O nascimento de um sonho pautado pelo amor em ação, pelo respeito à história de cada idoso e pela transparência absoluta.
        </p>
      </div>

      {/* Grid: Carta Transcrita + Elemento Visual Respeitoso */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Transcrição Fiel da Carta */}
        <div className="lg:col-span-8 bg-brand-warmWhite p-8 md:p-12 rounded-3xl border border-brand-wood/15 space-y-6 shadow-sm">
          <div className="flex items-center gap-3 text-brand-gold">
            <Quote className="w-10 h-10" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-deep">
              Transcrição Oficial do Documento docs/57
            </span>
          </div>

          <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-deep border-b border-brand-wood/10 pb-4">
            O Nascimento de um Sonho
          </h2>

          <div className="space-y-4 text-brand-charcoal text-base leading-relaxed font-sans font-light">
            <p className="font-semibold text-brand-deep text-lg">
              Querido amigo, irmã e parceiro de caminhada,
            </p>

            <p>
              Escrevo esta carta com o coração repleto de esperança e profunda responsabilidade.
            </p>

            <p>
              O Instituto Vida Plena não nasceu de um plano de negócios ou de uma ambição comercial. Ele nasceu do olhar atento para o envelhecer — uma estação da vida tão abençoada, recheada de memórias, sabedoria e lutas, mas que com frequência é acompanhada pela solidão, pelo esquecimento e pela perda de autonomia.
            </p>

            <p>
              Na nossa fé cristã, aprendemos que cada vida humana possui um valor inestimável do início ao fim. As pessoas idosas não são um fardo; são guardiãs da nossa história, das nossas raízes e da nossa fé. Elas merecem mais do que um lugar frio para passar os dias. Merecem um verdadeiro lar.
            </p>

            <p>
              Um lar onde o aroma do café da tarde traga aconchego; onde as janelas se abram para jardins ensolarados; onde o cuidado médico de excelência aconteça de forma discreta e carinhosa; e onde cada biografia continue a ser respeitada, celebrada e ouvida.
            </p>

            <p>
              Sei perfeitamente que erguer um empreendimento desta magnitude — com ética, rigor técnico, acessibilidade total e sustentabilidade continuada — exige um planejamento minucioso. Por isso, decidimos não dar passos no escuro. Construímos primeiro a casa da governança: mapeamos as normas sanitárias, desenhamos a rotina humanizada, estruturamos os cenários de equipe e estabelecemos um compromisso inegociável com a transparência pública.
            </p>

            <p>
              O Instituto Vida Plena ainda está na sua fase de estruturação e viabilidade. Não temos pressa que atropele a segurança, mas temos a firme convicção de que este projeto precisa existir.
            </p>

            <p>
              Convido você a conhecer esta visão, a acompanhar cada etapa deste planejamento e a sonhar conosco o dia em que acolheremos os nossos primeiros moradores com a dignidade que eles tanto merecem.
            </p>
          </div>

          <div className="pt-6 border-t border-brand-wood/10 space-y-1">
            <p className="font-serif font-bold text-lg text-brand-deep">
              Conselho Idealizador do Instituto Vida Plena
            </p>
            <p className="text-xs text-brand-sage font-medium">
              Macapá, Amapá — Brasil
            </p>
          </div>
        </div>

        {/* Quadro Lateral de Valores e Próximos Passos */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-brand-sageLight/60 p-6 md:p-8 rounded-3xl border border-brand-sage/20 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-deep text-brand-gold flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-brand-deep">
              Compromisso com o Planejamento
            </h3>
            <p className="text-xs text-brand-charcoal/80 leading-relaxed">
              O projeto avança rigorosamente respeitando as etapas de viabilidade técnica e legal antes de qualquer contratação física.
            </p>
            <div className="pt-2">
              <StatusTag status="estudo" label="Fase 6: Homologação" />
            </div>
          </div>

          <div className="bg-brand-deep text-brand-cream p-6 md:p-8 rounded-3xl space-y-4 shadow-md">
            <ShieldCheck className="w-8 h-8 text-brand-gold" />
            <h4 className="font-serif font-bold text-lg text-brand-warmWhite">
              Transparência em Primeiro Lugar
            </h4>
            <p className="text-xs text-brand-cream/80 leading-relaxed">
              Todas as decisões e hipóteses de custo são arquivadas publicamente no nosso portal de transparência.
            </p>
            <div>
              <Link
                href="/transparencia"
                className="inline-flex items-center gap-1.5 text-xs text-brand-gold font-bold hover:underline"
              >
                Acessar Painel de Governança <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
