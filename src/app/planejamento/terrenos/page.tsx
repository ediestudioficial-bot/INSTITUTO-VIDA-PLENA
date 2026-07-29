import React from "react";
import { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusTag } from "@/components/StatusTag";
import { MapPin, Info, AlertTriangle, Building2, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Painel de Prospecção de Terrenos | Privado",
  description: "Acompanhamento interno de amostras de mercado de terrenos em Macapá/AP.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TerrenosPage() {
  const amostras = [
    {
      id: "AM-01",
      bairro: "Zona Sul / Fazendinha",
      area: "3.200 m²",
      preco: "R$ 480.000,00",
      precoM2: "R$ 150,00 / m²",
      fonte: "Anúncio Público Comercial",
      status: "Pendente de Vistoria in Loco",
      risco: "Baixo a Moderado",
    },
    {
      id: "AM-02",
      bairro: "Zona Norte / Curiaú",
      area: "3.500 m²",
      preco: "R$ 420.000,00",
      precoM2: "R$ 120,00 / m²",
      fonte: "Anúncio Público Comercial",
      status: "Pendente de Vistoria in Loco",
      risco: "Exige Análise Ambiental",
    },
    {
      id: "AM-03",
      bairro: "Zona Oeste / Cabralzinho",
      area: "3.000 m²",
      preco: "R$ 510.000,00",
      precoM2: "R$ 170,00 / m²",
      fonte: "Anúncio Público Comercial",
      status: "Pendente de Vistoria in Loco",
      risco: "Baixo",
    },
  ];

  return (
    <div className="py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner Principal */}
      <div className="bg-brand-deep text-brand-cream rounded-3xl p-8 md:p-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-brand-gold uppercase bg-brand-cream/10 rounded-full border border-brand-gold/30">
          <MapPin className="w-3.5 h-3.5 text-brand-gold" />
          <span>Painel Interno de Terrenos (Fase 8 — Privado)</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-warmWhite">
          Amostras de Mercado em Macapá / AP
        </h1>
        <p className="text-sm md:text-base text-brand-cream/90 font-light max-w-3xl leading-relaxed">
          Monitoramento de anúncios públicos para compor o estudo de viabilidade espacial.
        </p>
      </div>

      {/* Aviso Regulatório Importante */}
      <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-1 text-sm leading-relaxed">
          <h3 className="font-serif font-bold text-base text-amber-950">Aviso Documental:</h3>
          <p>
            <strong>Análise documental preliminar. Nenhum terreno foi vistoriado, aprovado ou selecionado.</strong> Nenhum dado pessoal de anunciante é publicado nesta aplicação.
          </p>
        </div>
      </div>

      {/* Tabela de Amostras */}
      <div className="space-y-4">
        <SectionHeading
          badge="Amostras Mapeadas"
          title="Opções de Terrenos Anunciados"
          description="Amostras públicas de mercado analisadas preliminarmente para hipótese de 3.000m² a 3.500m²."
        />

        <div className="overflow-x-auto bg-brand-warmWhite rounded-2xl border border-brand-wood/15">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-wood/20 text-brand-deep font-serif font-bold bg-brand-cream/40">
                <th className="py-3.5 px-4">Código</th>
                <th className="py-3.5 px-4">Região / Bairro</th>
                <th className="py-3.5 px-4">Área Mapeada</th>
                <th className="py-3.5 px-4">Preço Anunciado</th>
                <th className="py-3.5 px-4">Valor R$/m²</th>
                <th className="py-3.5 px-4">Status da Avaliação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-wood/10 text-brand-charcoal">
              {amostras.map((item) => (
                <tr key={item.id} className="hover:bg-brand-cream/20">
                  <td className="py-3 px-4 font-mono text-xs text-brand-deep font-bold">{item.id}</td>
                  <td className="py-3 px-4 font-semibold">{item.bairro}</td>
                  <td className="py-3 px-4">{item.area}</td>
                  <td className="py-3 px-4 font-mono">{item.preco}</td>
                  <td className="py-3 px-4 font-mono text-xs">{item.precoM2}</td>
                  <td className="py-3 px-4">
                    <StatusTag status="estudo" label={item.status} />
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
