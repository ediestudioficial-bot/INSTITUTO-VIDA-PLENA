import React from "react";
import { StatusTag } from "@/components/StatusTag";
import { CheckCircle2, Clock, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Linha do Tempo & Etapas",
  description: "Conheça as 14 etapas metodológicas de desenvolvimento do Instituto Vida Plena, da estruturação à operação.",
};

export default function EtapasPage() {
  const etapas = [
    { num: 1, title: "Visão & Conceito Base", status: "Concluída", current: false, desc: "Definição da missão, valores e premissa de lar residencial térreo." },
    { num: 2, title: "Estruturação Documental", status: "Concluída", current: false, desc: "Elaboração da base normativa e dos documentos institucionais." },
    { num: 3, title: "Modelo Operacional & Viabilidade", status: "Em Andamento", current: true, desc: "Dimensionamento de área, políticas, inventário de ambientes e cenários de equipe." },
    { num: 4, title: "Prospecção & Escolha do Terreno", status: "Próxima", current: false, desc: "Aplicação da ficha técnica de avaliação em terrenos na região de Macapá." },
    { num: 5, title: "Anteprojeto Arquitetônico", status: "Pendente", current: false, desc: "Elaboração do anteprojeto por profissionais habilitados e validação sanitária." },
    { num: 6, title: "Pesquisa de Preços & Orçamento", status: "Pendente", current: false, desc: "Cotações reais e documentadas para estimativas de implantação e operação." },
    { num: 7, title: "Constituição Jurídica & CNPJ", status: "Pendente", current: false, desc: "Assembleia de fundadores, estatuto aprovado e inscrição nos órgãos competentes." },
    { num: 8, title: "Mobilização & Parcerias Estratégicas", status: "Pendente", current: false, desc: "Estruturação de apresentações institucionais e aproximação responsável com potenciais parceiros nacionais e internacionais." },
    { num: 9, title: "Projetos Executivos de Engenharia", status: "Pendente", current: false, desc: "Desenvolvimento dos projetos estrutural, elétrico, hidráulico e de combate a incêndio." },
    { num: 10, title: "Licenciamento Regulatório", status: "Pendente", current: false, desc: "Obtenção das licenças e autorizações aplicáveis antes do funcionamento." },
    { num: 11, title: "Construção Civil & Paisagismo", status: "Pendente", current: false, desc: "Execução da edificação e implantação das áreas externas após as aprovações." },
    { num: 12, title: "Mobiliário & Equipamentos", status: "Pendente", current: false, desc: "Aquisição e instalação conforme os projetos e as necessidades assistenciais." },
    { num: 13, title: "Seleção & Treinamento da Equipe", status: "Pendente", current: false, desc: "Contratação e capacitação da equipe assistencial e administrativa." },
    { num: 14, title: "Início da Operação & Acolhimento", status: "Pendente", current: false, desc: "Início gradual do acolhimento após todas as autorizações e validações necessárias." },
  ];

  return (
    <div className="py-16 space-y-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep text-brand-cream p-8 md:p-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold uppercase tracking-[.12em]"><Calendar className="w-4 h-4" /><span>Linha do tempo metodológica</span></div>
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-brand-warmWhite">As 14 etapas do projeto</h1>
          <p className="text-lg text-brand-cream/80 font-light max-w-3xl leading-relaxed">Acompanhe o caminho de estruturação até o futuro acolhimento, com decisões condicionadas às validações jurídicas, técnicas e financeiras.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border-l border-brand-deep/20 ml-4 md:ml-8 space-y-10 pl-8 md:pl-10">
          {etapas.map((step) => (
            <div key={step.num} className="relative group">
              <div className={`absolute -left-[37px] md:-left-[45px] top-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center font-bold text-xs md:text-sm border ${step.current ? "bg-brand-deep text-white border-brand-deep" : step.status === "Concluída" ? "bg-brand-wood text-white border-brand-wood" : "bg-brand-cream text-brand-deep border-brand-deep/25"}`}>
                {step.status === "Concluída" ? <CheckCircle2 className="w-5 h-5" /> : step.num}
              </div>
              <div className={`p-7 border ${step.current ? "bg-brand-warmWhite border-brand-gold" : "bg-brand-warmWhite/80 border-brand-deep/10"}`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3"><span className="editorial-label">Etapa {step.num} de 14</span>{step.current ? <span className="inline-flex items-center gap-1.5 border border-brand-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[.12em] text-brand-deep"><Clock className="w-3.5 h-3.5" />Fase atual</span> : <StatusTag status={step.status === "Concluída" ? "validado" : step.status === "Próxima" ? "estudo" : "futura"} label={step.status} />}</div>
                <h3 className="font-serif font-medium text-2xl text-brand-deep mb-2">{step.title}</h3><p className="text-sm text-brand-charcoal/75 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div className="bg-brand-deep text-brand-cream p-10 text-center space-y-5"><ShieldCheck className="w-9 h-9 text-brand-gold mx-auto" /><h3 className="font-serif font-medium text-3xl text-brand-warmWhite">Transparência em cada entrega</h3><p className="text-sm text-brand-cream/75 max-w-lg mx-auto">As etapas são apresentadas conforme o estado real do projeto, sem tratar hipóteses, contatos ou intenções como compromissos firmados.</p><Link href="/transparencia" className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[.12em] text-white">Acessar transparência <ArrowRight className="w-4 h-4" /></Link></div></section>
    </div>
  );
}
