import React from "react";
import { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusTag } from "@/components/StatusTag";
import { Database, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Painel Interno de Cotações | Planejamento",
  description: "Painel de controle interno e monitoramento metodológico de cotações de preços em Macapá/AP.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CotacoesInternasPage() {
  const cotacoesSummary = [
    { grupo: "Construção Civil & M²", arquivo: "construcao.csv", itens: 1, status: "A pesquisar", fonte: "Sinduscon AP (CUB)" },
    { grupo: "Mobiliário Hospitalar/Residencial", arquivo: "mobiliario.csv", itens: 1, status: "Cotação pendente", fonte: "A pesquisar" },
    { grupo: "Equipamentos de Saúde & Enfermagem", arquivo: "equipamentos_saude.csv", itens: 1, status: "Em validação", fonte: "A pesquisar" },
    { grupo: "Cozinha Industrial Inox", arquivo: "cozinha.csv", itens: 1, status: "Cotação pendente", fonte: "A pesquisar" },
    { grupo: "Lavanderia de Barreira", arquivo: "lavanderia.csv", itens: 1, status: "Cotação pendente", fonte: "A pesquisar" },
    { grupo: "Tecnologia & Sistemas", arquivo: "tecnologia.csv", itens: 1, status: "Cotação pendente", fonte: "A pesquisar" },
    { grupo: "Energia & Gerador", arquivo: "energia_agua.csv", itens: 1, status: "Cotação pendente", fonte: "A pesquisar" },
    { grupo: "Folha de Pagamento & Encargos", arquivo: "folha_pagamento.csv", itens: 1, status: "Em validação", fonte: "Convenção Coletiva AP" },
    { grupo: "Custos Mensais (OPEX)", arquivo: "custos_mensais.csv", itens: 1, status: "A pesquisar", fonte: "A pesquisar" },
  ];

  return (
    <div className="py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Cabeçalho Técnico Interno */}
      <div className="bg-brand-deep text-brand-cream rounded-3xl p-8 md:p-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-brand-gold uppercase bg-brand-cream/10 rounded-full border border-brand-gold/30">
          <Lock className="w-3.5 h-3.5 text-brand-gold" />
          <span>Painel de Controle Interno — Não Indexado</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-warmWhite">
          Monitoramento de Cotações Regionais (Macapá/AP)
        </h1>
        <p className="text-sm md:text-base text-brand-cream/90 font-light max-w-3xl leading-relaxed">
          Página de governança interna para acompanhamento das planilhas de pesquisa de preços reais (Fase 4). Todos os dados são mantidos em planilhas estruturadas sem exposição de valores especulativos.
        </p>
      </div>

      {/* Alerta de Governança */}
      <div className="p-6 rounded-2xl bg-brand-sageLight/70 border border-brand-sage/20 flex items-start gap-4 text-brand-charcoal text-sm">
        <Database className="w-6 h-6 text-brand-deep shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="font-serif font-bold text-base text-brand-deep">Status da Base de Cotações:</h3>
          <p className="leading-relaxed">
            As cotações estão estruturadas no diretório local <code>data/cotacoes/</code>. Nenhuma cotação fictícia é registrada. Campos sem pesquisa verificável são exibidos rigorosamente como <strong>A pesquisar</strong> ou <strong>Cotação pendente</strong>.
          </p>
        </div>
      </div>

      {/* Tabela de Monitoramento dos Grupos */}
      <div className="space-y-6">
        <SectionHeading
          badge="Insumos em Mapeamento"
          title="Planilhas Estruturadas em CSV"
          description="Acompanhamento dos arquivos de fornecedores e convenções coletivas de Macapá."
        />

        <div className="overflow-x-auto bg-brand-warmWhite rounded-2xl border border-brand-wood/15">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-wood/20 text-brand-deep font-serif font-bold bg-brand-cream/40">
                <th className="py-3.5 px-4">Grupo de Insumo</th>
                <th className="py-3.5 px-4">Arquivo CSV Local</th>
                <th className="py-3.5 px-4">Registros Mapeados</th>
                <th className="py-3.5 px-4">Fonte Principal</th>
                <th className="py-3.5 px-4">Status da Pesquisa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-wood/10 text-brand-charcoal">
              {cotacoesSummary.map((item, idx) => (
                <tr key={idx} className="hover:bg-brand-cream/20">
                  <td className="py-3.5 px-4 font-semibold text-brand-deep">{item.grupo}</td>
                  <td className="py-3.5 px-4 font-mono text-xs text-brand-sage">{item.arquivo}</td>
                  <td className="py-3.5 px-4">{item.itens} item estruturado</td>
                  <td className="py-3.5 px-4 italic text-xs">{item.fonte}</td>
                  <td className="py-3.5 px-4">
                    <StatusTag status="pendente" label={item.status} />
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
