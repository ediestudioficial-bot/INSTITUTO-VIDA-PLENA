import React from "react";
import { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusTag } from "@/components/StatusTag";
import { ShieldCheck, Info, Search, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Painel de Pesquisa de Marca | Privado",
  description: "Monitoramento público de anterioridade de marca no INPI.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MarcaPage() {
  const marcas = [
    {
      expressao: "Instituto Vida Plena",
      classe: "Classe 45 (Serviços Sociais / ILPI)",
      resultado: "Registros em áreas de educação e saúde privada",
      risco: "Risco Médio",
      recomendacao: "Delimitação estrita de classe com especialista",
    },
    {
      expressao: "Vida Plena",
      classe: "Classe 45",
      resultado: "Marcas ativas em suplementos e seguros",
      risco: "Risco Elevado",
      recomendacao: "Evitar uso isolado sem qualificação institucional",
    },
    {
      expressao: "Instituto Cristão Vida Plena",
      classe: "Classe 45",
      resultado: "Nenhuma anterioridade exata identificada",
      risco: "Risco Baixo",
      recomendacao: "Alternativa forte de proteção",
    },
  ];

  return (
    <div className="py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner Principal */}
      <div className="bg-brand-deep text-brand-cream rounded-3xl p-8 md:p-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-brand-gold uppercase bg-brand-cream/10 rounded-full border border-brand-gold/30">
          <Search className="w-3.5 h-3.5 text-brand-gold" />
          <span>Painel Interno de Pesquisa de Marca (Fase 8 — Privado)</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-warmWhite">
          Pesquisa Pública de Anterioridade no INPI
        </h1>
        <p className="text-sm md:text-base text-brand-cream/90 font-light max-w-3xl leading-relaxed">
          Consulta prévia em bancos públicos de marcas para orientar o futuro depósito oficial.
        </p>
      </div>

      {/* Aviso Regulatório Importante */}
      <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-1 text-sm leading-relaxed">
          <h3 className="font-serif font-bold text-base text-amber-950">Aviso sobre a Marca:</h3>
          <p>
            <strong>Consulta pública preliminar. Nenhum depósito oficial ou protocolo pago foi realizado no INPI.</strong> A registrabilidade oficial dependerá de parecer de especialista em propriedade intelectual após a constituição do CNPJ.
          </p>
        </div>
      </div>

      {/* Tabela de Expressões Consultadas */}
      <div className="space-y-4">
        <SectionHeading
          badge="Expressões Mapeadas"
          title="Consultas Públicas de Marca"
          description="Resultados da consulta nos bancos de dados públicos do INPI."
        />

        <div className="overflow-x-auto bg-brand-warmWhite rounded-2xl border border-brand-wood/15">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-wood/20 text-brand-deep font-serif font-bold bg-brand-cream/40">
                <th className="py-3.5 px-4">Expressão Consultada</th>
                <th className="py-3.5 px-4">Classe de Serviço</th>
                <th className="py-3.5 px-4">Resultado Encontrado</th>
                <th className="py-3.5 px-4">Avaliação Preliminar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-wood/10 text-brand-charcoal">
              {marcas.map((item, idx) => (
                <tr key={idx} className="hover:bg-brand-cream/20">
                  <td className="py-3 px-4 font-bold text-brand-deep">{item.expressao}</td>
                  <td className="py-3 px-4 font-mono text-xs">{item.classe}</td>
                  <td className="py-3 px-4">{item.resultado}</td>
                  <td className="py-3 px-4">
                    <StatusTag status="estudo" label={item.risco} />
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
