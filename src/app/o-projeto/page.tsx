import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusTag } from "@/components/StatusTag";
import {
  Building2,
  Stethoscope,
  Users,
  Utensils,
  Wrench,
  Heart,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "O Projeto & Arquitetura",
  description:
    "Conheça a visão detalhada, programa de necessidades e diretrizes arquitetônicas do Instituto Vida Plena.",
};

export default function OProjetoPage() {
  return (
    <div className="py-16 space-y-20">
      {/* Header Interno */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep text-brand-cream rounded-3xl p-8 md:p-14 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-brand-gold uppercase bg-brand-cream/10 rounded-full border border-brand-gold/20">
              Detalhamento Técnico & Conceitual
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-warmWhite">
              O Projeto Instituto Vida Plena
            </h1>
            <p className="text-lg text-brand-cream/90 font-light leading-relaxed">
              Uma abordagem integrada que une arquitetura térrea acessível, biofilia, modelo assistencial multidisciplinar e programas de memória com inspiração cristã.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <StatusTag status="conceito" label="Conceito Arquitetônico: Pousada Acolhedora" />
              <StatusTag status="estudo" label="Unidade Inicial: ~24 Leitos" />
            </div>
          </div>
        </div>
      </section>

      {/* Programa de Necessidades (7 Setores) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Setorização Espacial"
          title="Programa de Necessidades dos Ambientes"
          description="Espaços planejados rigorosamente de acordo com as normas da ANVISA (RDC 502/2021) e ABNT NBR 9050 para segurança, acessibilidade e conforto."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Setor 1: Administração */}
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="flex items-center gap-3 border-b border-brand-wood/10 pb-3">
              <div className="p-2 rounded-lg bg-brand-deep text-brand-gold">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-deep">1. Administração</h3>
            </div>
            <ul className="text-xs text-brand-charcoal/80 space-y-1.5 list-disc list-inside">
              <li>Recepção e espera acolhedora</li>
              <li>Secretaria e atendimento às famílias</li>
              <li>Diretoria e sala administrativa</li>
              <li>Sala de reuniões e arquivo</li>
              <li>Sanitários acessíveis para visitantes</li>
            </ul>
          </div>

          {/* Setor 2: Saúde e Cuidados */}
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="flex items-center gap-3 border-b border-brand-wood/10 pb-3">
              <div className="p-2 rounded-lg bg-brand-deep text-brand-gold">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-deep">2. Saúde & Cuidados</h3>
            </div>
            <ul className="text-xs text-brand-charcoal/80 space-y-1.5 list-disc list-inside">
              <li>Posto de enfermagem central</li>
              <li>Consultório médico e multidisciplinar</li>
              <li>Sala de medicação com guarda segura</li>
              <li>Sala de primeiros cuidados e curativos</li>
              <li>Fisioterapia e reabilitação motora</li>
              <li>Psicologia, nutrição e terapia ocupacional</li>
            </ul>
          </div>

          {/* Setor 3: Moradia */}
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="flex items-center gap-3 border-b border-brand-wood/10 pb-3">
              <div className="p-2 rounded-lg bg-brand-deep text-brand-gold">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-deep">3. Setor de Moradia</h3>
            </div>
            <ul className="text-xs text-brand-charcoal/80 space-y-1.5 list-disc list-inside">
              <li>Suítes adaptadas (Individuais e duplas)</li>
              <li>Banheiros privativos 100% acessíveis</li>
              <li>Sistema de chamada de emergência leito/banho</li>
              <li>Iluminação noturna de balizamento</li>
              <li>Posto do cuidador de plantão</li>
            </ul>
          </div>

          {/* Setor 4: Convivência */}
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="flex items-center gap-3 border-b border-brand-wood/10 pb-3">
              <div className="p-2 rounded-lg bg-brand-deep text-brand-gold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-deep">4. Convivência</h3>
            </div>
            <ul className="text-xs text-brand-charcoal/80 space-y-1.5 list-disc list-inside">
              <li>Sala de estar social e TV</li>
              <li>Biblioteca e espaço de leitura</li>
              <li>Sala de música, jogos e artesanato</li>
              <li>Capela cristã e espaço de oração</li>
              <li>Cantos de visitação reservada</li>
            </ul>
          </div>

          {/* Setor 5: Alimentação */}
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="flex items-center gap-3 border-b border-brand-wood/10 pb-3">
              <div className="p-2 rounded-lg bg-brand-deep text-brand-gold">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-deep">5. Alimentação</h3>
            </div>
            <ul className="text-xs text-brand-charcoal/80 space-y-1.5 list-disc list-inside">
              <li>Cozinha profissional com fluxo unidirecional</li>
              <li>Despensa seca e câmara refrigerada</li>
              <li>Refeitório principal amplo e iluminado</li>
              <li>Copa de apoio e canto do café</li>
            </ul>
          </div>

          {/* Setor 6: Serviços & Área Externa */}
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="flex items-center gap-3 border-b border-brand-wood/10 pb-3">
              <div className="p-2 rounded-lg bg-brand-deep text-brand-gold">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-deep">6. Serviços & Apoio</h3>
            </div>
            <ul className="text-xs text-brand-charcoal/80 space-y-1.5 list-disc list-inside">
              <li>Lavanderia industrial e rouparia</li>
              <li>Central de resíduos e central de gás</li>
              <li>Área técnica e gerador de emergência</li>
              <li>Vestiários e área de descanso da equipe</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Chamada para Participação */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-gold/15 border border-brand-gold/30 p-8 rounded-3xl text-center space-y-4">
          <h3 className="font-serif font-bold text-2xl text-brand-deep">
            Quer colaborar com a estruturação deste projeto?
          </h3>
          <p className="text-sm text-brand-charcoal/80 max-w-xl mx-auto">
            Seja oferecendo assessoria profissional voluntária, representando sua empresa ou igreja, faça parte do cadastro inicial de interessados.
          </p>
          <div>
            <Link
              href="/participe"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-deep text-brand-cream rounded-xl text-sm font-semibold hover:bg-brand-deepDark transition-colors"
            >
              Manifestar Interesse Institucional <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
