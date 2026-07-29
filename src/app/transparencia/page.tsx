import React from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusTag } from "@/components/StatusTag";
import { projectStatusData } from "@/data/project-status";
import { ShieldCheck, FileText, Lock, Eye, AlertTriangle, BookOpen, Info, CheckCircle2, Clock } from "lucide-react";

export const metadata = {
  title: "Transparência & Governança",
  description:
    "Compromisso de transparência pública, documentos institucionais e prestação de contas do Instituto Vida Plena.",
};

export default function TransparenciaPage() {
  return (
    <div className="py-16 space-y-16">
      {/* Banner de Transparência */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep text-brand-cream rounded-3xl p-8 md:p-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-brand-gold uppercase bg-brand-cream/10 rounded-full border border-brand-gold/30">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>Compliance & Prestação de Contas Pública</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-warmWhite">
            Transparência Desde a Primeira Pedra
          </h1>
          <p className="text-lg text-brand-cream/90 font-light max-w-3xl leading-relaxed">
            O Instituto Vida Plena fundamenta toda a sua atuação na ética, na verdade e no respeito absoluto aos doadores, parceiros e futuros moradores.
          </p>
          <div className="pt-2 flex items-center gap-2 text-xs text-brand-gold font-mono">
            <span>Última atualização do painel de transparência: {projectStatusData.lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Aviso Oficial da Fase 2 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-4">
          <Info className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1 text-sm">
            <h3 className="font-serif font-bold text-base text-amber-950">Aviso Institucional Importante:</h3>
            <p className="leading-relaxed">
              {projectStatusData.legalNotice}
            </p>
          </div>
        </div>
      </section>

      {/* Seção Documentos do Projeto (Consumindo projectStatusData) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Documentação Estruturada"
          title="Documentos Públicos do Projeto"
          description="Acesse o resumo dos relatórios e minutas normativas produzidos pela nossa equipe técnica multidisciplinar."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectStatusData.publicDocs.map((doc) => (
            <div
              key={doc.id}
              className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 hover:border-brand-gold transition-colors space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold bg-brand-deep/5 px-2 py-0.5 rounded">
                    {doc.category}
                  </span>
                  <StatusTag status={doc.status} />
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-deep flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-brand-wood shrink-0" />
                  {doc.title}
                </h3>
                <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                  {doc.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-wood/10 text-[11px] text-brand-charcoal/60 font-mono">
                Ref: {doc.path}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-brand-cream border border-brand-wood/10 text-center text-xs text-brand-charcoal/70 italic">
          O Instituto Vida Plena está em fase de estruturação. Os documentos apresentados refletem o planejamento atual e poderão ser atualizados após análises técnicas, jurídicas, sanitárias e arquitetônicas.
        </div>
      </section>

      {/* Pilares de Transparência */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          badge="Diretrizes Ativas"
          title="Nossos Compromissos com a Sociedade"
          description="Conheça as regras rígidas de prestação de contas e integridade institucional que norteiam o projeto."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/20 text-brand-gold font-bold flex items-center justify-center">
              <Eye className="w-6 h-6 text-brand-wood" />
            </div>
            <h3 className="font-serif font-bold text-xl text-brand-deep">Nenhum Número Fictício</h3>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              Jamais exibiremos valores de doações fictícias, relatórios maquiados ou estatísticas sem respaldo real. Toda métrica publicada será verídica e auditada.
            </p>
            <StatusTag status="validado" />
          </div>

          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/20 text-brand-gold font-bold flex items-center justify-center">
              <Lock className="w-6 h-6 text-brand-wood" />
            </div>
            <h3 className="font-serif font-bold text-xl text-brand-deep">Captação Bloqueada Até CNPJ</h3>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              Nenhuma doação financeira em dinheiro será aceita antes da constituição do CNPJ, abertura da conta bancária institucional e homologação do Estatuto Social.
            </p>
            <StatusTag status="validado" />
          </div>

          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/20 text-brand-gold font-bold flex items-center justify-center">
              <FileText className="w-6 h-6 text-brand-wood" />
            </div>
            <h3 className="font-serif font-bold text-xl text-brand-deep">Documentação Aberta</h3>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              Todos os documentos conceituais do projeto estão arquivados e estruturados publicamente na pasta `/docs` do repositório para auditabilidade.
            </p>
            <StatusTag status="validado" />
          </div>
        </div>
      </section>

      {/* Três Blocos de Status Institucional */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <SectionHeading
          badge="Quadro de Acompanhamento"
          title="Status Real do Projeto (Fase 5)"
          description="Transparência cristalina sobre o que já foi entregue, o que está em execução e o que aguarda etapas futuras."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bloco 1: Concluído */}
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-serif font-bold text-lg">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Concluído</span>
            </div>
            <ul className="space-y-2 text-xs text-emerald-950 font-medium">
              <li>✓ Visão institucional e valores cristãos</li>
              <li>✓ Identidade inicial e landing page</li>
              <li>✓ Documentação preliminar (59 arquivos normativos)</li>
              <li>✓ Masterplan conceitual (8 zonas funcionais)</li>
              <li>✓ Modelo operacional preliminar e turnos 24h</li>
              <li>✓ Estrutura de governança e 10 políticas</li>
              <li>✓ Diretrizes de transparência e salvaguardas</li>
            </ul>
          </div>

          {/* Bloco 2: Em Andamento */}
          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-serif font-bold text-lg">
              <Clock className="w-5 h-5 text-amber-700 animate-spin" />
              <span>Em Andamento (Fase 7)</span>
            </div>
            <ul className="space-y-2 text-xs text-amber-950 font-medium">
              <li>⏳ Renders conceituais 3D (prompts aprovados / fallback ativo)</li>
              <li>⏳ Pesquisa regional de preços em Macapá/AP</li>
              <li>⏳ Prospecção e avaliação de terrenos candidatos</li>
              <li>⏳ Dossiê de parceiros e versão internacional</li>
            </ul>
          </div>

          {/* Bloco 3: Ainda Não Iniciado */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-slate-700 font-serif font-bold text-lg">
              <AlertTriangle className="w-5 h-5 text-slate-500" />
              <span>Ainda Não Iniciado</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              <li>▪ Constituição jurídica e obtenção de CNPJ</li>
              <li>▪ Aquisição do terreno</li>
              <li>▪ Anteprojeto profissional e engenharia executiva</li>
              <li>▪ Licenciamento sanitário e ambiental</li>
              <li>▪ Captação financeira real</li>
              <li>▪ Construção civil</li>
              <li>▪ Contratação da equipe assistencial</li>
              <li>▪ Operação e acolhimento dos moradores</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="p-8 rounded-3xl bg-brand-warmWhite border border-brand-wood/15 space-y-4">
          <h3 className="font-serif font-bold text-2xl text-brand-deep">
            Hipóteses Atuais de Planejamento (Fase 4)
          </h3>
          <p className="text-sm text-brand-charcoal/80 leading-relaxed">
            Consolidação das hipóteses de dimensionamento espacial e legal em estudo preliminar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-brand-cream/40 rounded-xl border border-brand-wood/10 text-sm space-y-1">
              <span className="font-bold text-brand-deep block">Capacidade Prevista:</span>
              <p className="text-brand-charcoal">24 moradores <span className="text-xs text-amber-800">[Hipótese de dimensionamento — não validada definitivamente]</span></p>
            </div>

            <div className="p-4 bg-brand-cream/40 rounded-xl border border-brand-wood/10 text-sm space-y-1">
              <span className="font-bold text-brand-deep block">Área Construída Estimada:</span>
              <p className="text-brand-charcoal">~1.440 m² úteis <span className="text-xs text-amber-800">[Estimativa conceitual de planejamento — não corresponde a projeto aprovado]</span></p>
            </div>

            <div className="p-4 bg-brand-cream/40 rounded-xl border border-brand-wood/10 text-sm space-y-1">
              <span className="font-bold text-brand-deep block">Terreno Necessário:</span>
              <p className="text-brand-charcoal">~3.000 m² a 3.500 m² <span className="text-xs text-amber-800">[Estimativa conceitual de planejamento — terreno não selecionado]</span></p>
            </div>

            <div className="p-4 bg-brand-cream/40 rounded-xl border border-brand-wood/10 text-sm space-y-1">
              <span className="font-bold text-brand-deep block">Tipologia & Organização:</span>
              <p className="text-brand-charcoal">Implantação Térrea organizada ao redor do Jardim Central</p>
            </div>

            <div className="p-4 bg-brand-cream/40 rounded-xl border border-brand-wood/10 text-sm space-y-1">
              <span className="font-bold text-brand-deep block">Rampa de Abertura:</span>
              <p className="text-brand-charcoal">Ocupação gradual em 3 etapas (12, 18 e 24 leitos)</p>
            </div>

            <div className="p-4 bg-brand-cream/40 rounded-xl border border-brand-wood/10 text-sm space-y-1">
              <span className="font-bold text-brand-deep block">Modelo de Sustentabilidade:</span>
              <p className="text-brand-charcoal">Modelo Híbrido em Estudo <span className="text-xs text-amber-800">[Participação em custeio a validar]</span></p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-brand-sageLight/60 border border-brand-sage/20 space-y-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-700" />
            <h3 className="font-serif font-bold text-2xl text-brand-deep">
              Fase Atual: {projectStatusData.currentPhase.name}
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-brand-wood/20 text-brand-deep font-serif font-bold">
                  <th className="py-3 px-4">Indicador Operacional / Legal</th>
                  <th className="py-3 px-4">Situação Real Mapeada</th>
                  <th className="py-3 px-4">Status Transparente</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-wood/10 text-brand-charcoal">
                <tr>
                  <td className="py-3 px-4 font-semibold">Modelo de Atendimento</td>
                  <td className="py-3 px-4">{projectStatusData.operationalStatus.modeloAtendimento}</td>
                  <td className="py-3 px-4"><StatusTag status="estudo" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Área Necessária</td>
                  <td className="py-3 px-4">{projectStatusData.operationalStatus.areaNecessaria}</td>
                  <td className="py-3 px-4"><StatusTag status="estudo" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Terreno</td>
                  <td className="py-3 px-4">{projectStatusData.operationalStatus.terreno}</td>
                  <td className="py-3 px-4"><StatusTag status="estudo" label="Não Definido" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Investimento Inicial (CAPEX)</td>
                  <td className="py-3 px-4">{projectStatusData.operationalStatus.investimentoInicial}</td>
                  <td className="py-3 px-4"><StatusTag status="pendente" label="Em Levantamento" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Custo Mensal (OPEX)</td>
                  <td className="py-3 px-4">{projectStatusData.operationalStatus.custoMensal}</td>
                  <td className="py-3 px-4"><StatusTag status="pendente" label="Em Levantamento" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Natureza Jurídica</td>
                  <td className="py-3 px-4">{projectStatusData.operationalStatus.naturezaJuridica}</td>
                  <td className="py-3 px-4"><StatusTag status="estudo" label="Hipótese Recomendada" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Inscrição no CNPJ</td>
                  <td className="py-3 px-4">{projectStatusData.operationalStatus.cnpj}</td>
                  <td className="py-3 px-4"><StatusTag status="pendente" label="Ainda Não Constituído" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Captação Financeira Real</td>
                  <td className="py-3 px-4">{projectStatusData.operationalStatus.captacao}</td>
                  <td className="py-3 px-4"><StatusTag status="validado" label="Ainda Não Aberta" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Projeto Arquitetônico Executivo</td>
                  <td className="py-3 px-4">{projectStatusData.operationalStatus.projetoArquitetonico}</td>
                  <td className="py-3 px-4"><StatusTag status="pendente" label="Ainda Não Contratado" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
