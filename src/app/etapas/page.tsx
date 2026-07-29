import React from "react";
import { StatusTag } from "@/components/StatusTag";
import { CheckCircle2, Clock, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Linha do Tempo & Etapas",
  description:
    "Conheça as 14 etapas metodológicas de desenvolvimento do Instituto Vida Plena, da estruturação à operação.",
};

export default function EtapasPage() {
  const etapas = [
    { num: 1, title: "Visão & Conceito Base", status: "Concluída", current: false, desc: "Definição da missão, valores e premissa de lar residencial térreo." },
    { num: 2, title: "Estruturação Documental", status: "Concluída", current: false, desc: "Elaboração da base normativa de 21 documentos na pasta /docs." },
    { num: 3, title: "Modelo Operacional & Viabilidade", status: "Em Andamento", current: true, desc: "Fase Atual: Dimensionamento de área, 10 políticas, inventário de ambientes e cenários de equipe." },
    { num: 4, title: "Prospecção & Escolha do Terreno", status: "Próxima", current: false, desc: "Aplicação da Ficha Técnica de Avaliação em terrenos na região de Macapá." },
    { num: 5, title: "Anteprojeto Arquitetônico", status: "Pendente", current: false, desc: "Elaboração das plantas conceituais 3D com aprovação sanitária (RDC 502)." },
    { num: 6, title: "Pesquisa de Preços & Orçamento", status: "Pendente", current: false, desc: "Cotações de mercado para estimativas finais de CAPEX e OPEX." },
    { num: 7, title: "Constituição Jurídica & CNPJ", status: "Pendente", current: false, desc: "Assembleia de fundadores, estatuto aprovado e inscrição na Receita Federal." },
    { num: 8, title: "Captação & Parcerias Globais", status: "Pendente", current: false, desc: "Apresentação bilíngue ao Pr. Paulo Lambach/EUA e abertura de contas bancárias." },
    { num: 9, title: "Projetos Executivos de Engenharia", status: "Pendente", current: false, desc: "Desenvolvimento dos projetos estrutural, elétrico, hidráulico e combate a incêndio." },
    { num: 10, title: "Licenciamento Regulatório", status: "Pendente", current: false, desc: "Aprovação do Alvará de Construção, Habite-se e Alvará Sanitário." },
    { num: 11, title: "Construção Civil & Paisagismo", status: "Pendente", current: false, desc: "Execução das fundações, edificação térrea e implantação do Jardim Central." },
    { num: 12, title: "Mobiliário & Equipamentos", status: "Pendente", current: false, desc: "Instalação de camas adaptadas, cozinha industrial e lavanderia de barreira." },
    { num: 13, title: "Seleção & Treinamento da Equipe", status: "Pendente", current: false, desc: "Contratação da equipe assistencial e treinamento em gerontologia." },
    { num: 14, title: "Início da Operação & Acolhimento", status: "Pendente", current: false, desc: "Admissão gradual dos 24 primeiros moradores do Instituto Vida Plena." },
  ];

  return (
    <div className="py-16 space-y-16">
      {/* Banner Principal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep text-brand-cream rounded-3xl p-8 md:p-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-brand-gold uppercase bg-brand-cream/10 rounded-full border border-brand-gold/30">
            <Calendar className="w-4 h-4 text-brand-gold" />
            <span>Linha do Tempo Metodológica</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-warmWhite">
            As 14 Etapas do Projeto
          </h1>
          <p className="text-lg text-brand-cream/90 font-light max-w-3xl leading-relaxed">
            Acompanhe o cronograma estruturado que garante a segurança jurídica, arquitetônica e financeira até o acolhimento dos nossos primeiros moradores.
          </p>
        </div>
      </section>

      {/* Linha do Tempo das Etapas */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border-l-2 border-brand-gold/30 ml-4 md:ml-8 space-y-8 pl-6 md:pl-8">
          {etapas.map((step) => (
            <div key={step.num} className="relative group">
              {/* Marcador Numérico */}
              <div
                className={`absolute -left-[35px] md:-left-[43px] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-xs md:text-sm border-2 transition-all ${
                  step.current
                    ? "bg-brand-gold text-brand-deepDark border-brand-gold ring-4 ring-brand-gold/20 scale-110"
                    : step.status === "Concluída"
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-brand-cream text-brand-charcoal border-brand-wood/30"
                }`}
              >
                {step.status === "Concluída" ? (
                  <CheckCircle2 className="w-5 h-5 text-white" />
                ) : (
                  step.num
                )}
              </div>

              {/* Cartão de Conteúdo da Etapa */}
              <div
                className={`p-6 rounded-2xl border transition-all ${
                  step.current
                    ? "bg-brand-warmWhite border-brand-gold shadow-md ring-1 ring-brand-gold/30"
                    : "bg-brand-warmWhite/80 border-brand-wood/15 hover:border-brand-wood/30"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                    Etapa {step.num} de 14
                  </span>
                  {step.current ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-brand-gold text-brand-deepDark">
                      <Clock className="w-3.5 h-3.5 animate-spin" />
                      Fase Atual em Execução
                    </span>
                  ) : (
                    <StatusTag
                      status={
                        step.status === "Concluída"
                          ? "validado"
                          : step.status === "Próxima"
                          ? "estudo"
                          : "futura"
                      }
                      label={step.status}
                    />
                  )}
                </div>

                <h3 className="font-serif font-bold text-xl text-brand-deep mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chamada para Transparência */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep text-brand-cream p-8 rounded-3xl text-center space-y-4">
          <ShieldCheck className="w-10 h-10 text-brand-gold mx-auto" />
          <h3 className="font-serif font-bold text-2xl text-brand-warmWhite">
            Transparência em Cada Entrega
          </h3>
          <p className="text-sm text-brand-cream/80 max-w-lg mx-auto">
            Todas as deliberações e documentos produzidos em cada etapa são arquivados publicamente no nosso portal de governança.
          </p>
          <div>
            <Link
              href="/transparencia"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-brand-deepDark font-bold rounded-xl hover:bg-amber-400 transition-colors text-sm shadow-sm"
            >
              Acessar Documentos do Projeto <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
