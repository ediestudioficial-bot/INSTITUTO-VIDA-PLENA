import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusTag } from "@/components/StatusTag";
import { Compass, ArrowRight, Info } from "lucide-react";

export const metadata = {
  title: "Masterplan Conceitual | Organização Espacial",
  description:
    "Explore o Masterplan Conceitual do Instituto Vida Plena: 8 zonas funcionais, Jardim Central e alternativas de implantação bioclimática.",
};

export default function MasterplanPage() {
  return (
    <div className="py-16 space-y-20">
      {/* Banner Principal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep text-brand-cream rounded-3xl p-8 md:p-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-brand-gold uppercase bg-brand-cream/10 rounded-full border border-brand-gold/30">
            <Compass className="w-4 h-4 text-brand-gold" />
            <span>Estudo de Implantação Espacial</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-warmWhite leading-tight">
            Masterplan Conceitual
          </h1>
          <p className="text-lg text-brand-cream/90 font-light max-w-3xl leading-relaxed">
            Uma proposta preliminar de zoneamento e circulação pensada para orientar o futuro projeto arquitetônico executivo.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <StatusTag status="conceito" label="Diagrama Conceitual — Não Constitui Planta Aprovada" />
            <StatusTag status="estudo" label="Arquitetura Térrea Bioclimática" />
          </div>
        </div>
      </section>

      {/* Aviso Metodológico */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-4">
          <Info className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1 text-sm">
            <h3 className="font-serif font-bold text-base text-amber-950">Aviso sobre o Estudo Espacial:</h3>
            <p className="leading-relaxed">
              O Masterplan apresentado nesta página representa uma <strong>hipótese de organização espacial preliminar</strong>. Nenhuma planta baixa definitiva foi homologada ou submetida à Prefeitura. O projeto executivo oficial será contratado na Fase 5 com arquiteto habilitado e chancela da Vigilância Sanitária.
            </p>
          </div>
        </div>
      </section>

      {/* Diagrama Textual do Complexo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Zoneamento Espacial"
          title="Organização das 8 Zonas Funcionais"
          description="O complexo é estruturado em anéis de acessibilidade convergindo para o Jardim Central."
        />

        <div className="bg-brand-deepDark/95 text-brand-cream p-6 md:p-10 rounded-3xl border border-brand-gold/30 font-mono text-xs md:text-sm overflow-x-auto shadow-2xl space-y-4">
          <div className="text-brand-gold font-serif font-bold text-base mb-4 text-center">
            DIAGRAMA ESPACIAL CONCEITUAL DO INSTITUTO VIDA PLENA
          </div>
          <pre className="leading-relaxed text-brand-cream/90">
{`                           BOSQUE E POMAR (Zona 8)

                   CAMINHADA ACESSÍVEL COBERTA

           ┌──────────────────────────────────────┐
           │          JARDIM DAS MEMÓRIAS         │
           │                                      │
    ┌──────┴────────┐                    ┌────────┴───────┐
    │   ALA VIDA    │                    │   ALA PLENA    │
    │ (Zona 2 - Moradias)               │ (Zona 2 - Moradias)
    └──────┬────────┘                    └────────┬───────┘
           │                                      │
           │          JARDIM CENTRAL              │
           │       CORAÇÃO DO INSTITUTO            │
           │                                      │
    ┌──────┴────────┐                    ┌────────┴───────┐
    │ SAÚDE E       │                    │ CONVIVÊNCIA E  │
    │ CUIDADOS (Zona 3)                 │ MEMÓRIAS (Zona 4)
    └──────┬────────┘                    └────────┬───────┘
           │                                      │
    ┌──────┴────────┐                    ┌────────┴───────┐
    │ ADMINISTRAÇÃO │                    │ CAPELA E       │
    │ E RECEPÇÃO (Zona 1)               │ REFLEXÃO (Zona 5)
    └──────┬────────┘                    └────────┬───────┘
           │                                      │
           └──────────── PRAÇA DA FAMÍLIA ────────┘

                 ESTACIONAMENTO E ACESSO PRINCIPAL

       ACESSO DE SERVIÇO → COZINHA, LAVANDERIA E TÉCNICA (Zonas 6 e 7)`}
          </pre>
        </div>
      </section>

      {/* Alternativas de Implantação */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Estudos de Implantação"
          title="Alternativas Arquitetônicas em Análise"
          description="Diferentes formas de ocupar o terreno para otimizar ventilação, insolação e segurança."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Alternativa 1</span>
            <h3 className="font-serif font-bold text-xl text-brand-deep">Implantação em U</h3>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              Formato que abraça o Jardim Central deixando uma praça aberta na frente. Excelente para insolação matinal e ventilação cruzada.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Alternativa 2</span>
            <h3 className="font-serif font-bold text-xl text-brand-deep">Pátio Central Fechado</h3>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              Circulação em anel fechado com pátio interno protegido. Oferece máxima segurança passiva contra saídas não monitoradas de idosos com demência.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Alternativa 3</span>
            <h3 className="font-serif font-bold text-xl text-brand-deep">Vila Residencial (Pavilhões)</h3>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              Pequenos pavilhões térreos independentes conectados por passarelas cobertas. Aparência idêntica a uma pousada de campo contemporânea.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Alternativa 4</span>
            <h3 className="font-serif font-bold text-xl text-brand-deep">Implantação Modular Expansível</h3>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              Permite construir e inaugurar a Fase 1 (12 leitos) com investimento inicial otimizado, expandindo para 24 leitos em módulo futuro.
            </p>
          </div>
        </div>
      </section>

      {/* Botão de Ação */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-sageLight/60 border border-brand-sage/20 p-8 md:p-12 rounded-3xl text-center space-y-4">
          <h3 className="text-2xl font-serif font-bold text-brand-deep">
            Conheça as Imagens Conceituais do Projeto
          </h3>
          <p className="text-sm text-brand-charcoal/80 max-w-xl mx-auto">
            Explore os cartões e descrições visuais desenvolvidos para ilustrar o sonho do Instituto Vida Plena.
          </p>
          <div>
            <Link
              href="/visao-do-futuro"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-deep text-brand-cream font-semibold rounded-xl hover:bg-brand-deepDark transition-colors text-sm shadow-sm"
            >
              Ver Galeria Conceitual <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
