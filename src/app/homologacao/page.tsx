import React from "react";
import { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusTag } from "@/components/StatusTag";
import { siteConfig } from "@/data/site-config";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Painel de Homologação Institucional | Privado",
  description: "Painel de acompanhamento interno para revisão de homologação da Fase 6.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HomologacaoPage() {
  const paginasProntas = [
    { rota: "/", nome: "Landing Page (Hero & 15 Seções)", status: "Homologada" },
    { rota: "/o-projeto", nome: "O Conceito & Ambientes", status: "Homologada" },
    { rota: "/como-sera", nome: "Como Será o Lar (11 Pilares)", status: "Homologada" },
    { rota: "/masterplan", nome: "Masterplan Interativo SVG", status: "Homologada" },
    { rota: "/visao-do-futuro", nome: "Galeria Conceitual de Renders", status: "Homologada" },
    { rota: "/o-idealizador", nome: "Carta do Idealizador (docs/57)", status: "Homologada" },
    { rota: "/etapas", nome: "Linha do Tempo (14 Etapas)", status: "Homologada" },
    { rota: "/transparencia", nome: "Governança & Status", status: "Homologada" },
    { rota: "/parceiros", nome: "Rede de Alianças (Formulário)", status: "Homologada" },
    { rota: "/participe", nome: "Manifestação de Interesse", status: "Homologada" },
    { rota: "/perguntas-frequentes", nome: "Perguntas Frequentes (FAQ)", status: "Homologada" },
    { rota: "/contato", nome: "Canais Institucionais", status: "Homologada" },
    { rota: "/privacidade", nome: "Termos & LGPD", status: "Homologada" },
    { rota: "/en", nome: "English Overview (Bilingual)", status: "Homologada" },
    { rota: "/planejamento/cotacoes", nome: "Painel de Cotações CSV", status: "Homologada" },
  ];

  return (
    <div className="py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner Principal de Homologação */}
      <div className="bg-brand-deep text-brand-cream rounded-3xl p-8 md:p-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-brand-gold uppercase bg-brand-cream/10 rounded-full border border-brand-gold/30">
          <Lock className="w-3.5 h-3.5 text-brand-gold" />
          <span>Painel Interno de Homologação Privada (Fase 7)</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-warmWhite">
          Relatório de Homologação Institucional
        </h1>
        <p className="text-sm md:text-base text-brand-cream/90 font-light max-w-3xl leading-relaxed">
          {siteConfig.disclaimers.legal}
        </p>
      </div>

      {/* Cartões de Status Global */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
          <span className="text-xs font-bold text-emerald-800 uppercase">Qualidade do Código</span>
          <h3 className="font-serif font-bold text-xl text-emerald-950">ESLint &amp; TypeScript</h3>
          <p className="text-xs text-emerald-800">0 erros, 0 warnings. 100% aprovado na análise estática.</p>
        </div>

        <div className="p-6 rounded-2xl bg-brand-sageLight/70 border border-brand-sage/20 space-y-2">
          <span className="text-xs font-bold text-brand-deep uppercase">Renders Conceituais</span>
          <h3 className="font-serif font-bold text-xl text-brand-deep">16 Prompts Aprovados</h3>
          <p className="text-xs text-brand-charcoal/80">{siteConfig.disclaimers.images}</p>
        </div>

        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
          <span className="text-xs font-bold text-amber-800 uppercase">Status de Deploy</span>
          <h3 className="font-serif font-bold text-xl text-amber-950">Deploy Pendente</h3>
          <p className="text-xs text-amber-800">{siteConfig.disclaimers.deploy}</p>
        </div>
      </div>

      {/* Tabela de Rotas Homologadas */}
      <div className="space-y-4">
        <SectionHeading
          badge="Auditoria de Rotas"
          title="Páginas Validadas no Sistema"
          description="Verificação visual e de layout em múltiplos tamanhos de tela."
        />

        <div className="overflow-x-auto bg-brand-warmWhite rounded-2xl border border-brand-wood/15">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-wood/20 text-brand-deep font-serif font-bold bg-brand-cream/40">
                <th className="py-3.5 px-4">Rota da Aplicação</th>
                <th className="py-3.5 px-4">Descrição do Módulo</th>
                <th className="py-3.5 px-4">Status da Auditoria</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-wood/10 text-brand-charcoal">
              {paginasProntas.map((pag, idx) => (
                <tr key={idx} className="hover:bg-brand-cream/20">
                  <td className="py-3 px-4 font-mono text-xs text-brand-deep font-bold">{pag.rota}</td>
                  <td className="py-3 px-4">{pag.nome}</td>
                  <td className="py-3 px-4">
                    <StatusTag status="validado" label={pag.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
