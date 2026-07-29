export interface FeasibilityIndicator {
  id: string;
  name: string;
  value: string;
  unit: string;
  classification: string;
  status: "Validado" | "Em estudo" | "Pendente" | "Minuta";
  source: string;
  notice: string;
  lastUpdated: string;
}

export const feasibilityIndicators: FeasibilityIndicator[] = [
  {
    id: "ind-capacidade",
    name: "Capacidade Inicial de Moradores",
    value: "24",
    unit: "moradores",
    classification: "Hipótese de Dimensionamento",
    status: "Em estudo",
    source: "docs/33_MODELO_OPERACIONAL_PRELIMINAR.md",
    notice: "Sujeito a estudo de viabilidade do terreno e aprovação da Vigilância Sanitária.",
    lastUpdated: "28/07/2026",
  },
  {
    id: "ind-area-construida",
    name: "Área Térrea Construída Estimada",
    value: "~1.440",
    unit: "m² útil",
    classification: "Cenário Recomendado",
    status: "Em estudo",
    source: "docs/38_DIMENSIONAMENTO_AREA.md",
    notice: "Estimativa conceitual de planejamento — não corresponde a projeto aprovado ou exigência normativa.",
    lastUpdated: "28/07/2026",
  },
  {
    id: "ind-area-terreno",
    name: "Área de Terreno Necessária",
    value: "~3.000 a 3.500",
    unit: "m² total",
    classification: "Taxa de Ocupação 50%",
    status: "Em estudo",
    source: "docs/27_CRITERIOS_ESCOLHA_TERRENO.md",
    notice: "Estimativa conceitual de planejamento — não corresponde a imóvel adquirido.",
    lastUpdated: "28/07/2026",
  },
  {
    id: "ind-capex",
    name: "Investimento Inicial (CAPEX)",
    value: "A pesquisar",
    unit: "R$",
    classification: "Sem Preços Fictícios",
    status: "Pendente",
    source: "docs/40_CAPEX_PRELIMINAR.md",
    notice: "Valores numéricos serão preenchidos mediante cotações locais em Macapá/AP.",
    lastUpdated: "28/07/2026",
  },
  {
    id: "ind-opex",
    name: "Custo Operacional Mensal (OPEX)",
    value: "A pesquisar",
    unit: "R$",
    classification: "Sem Preços Fictícios",
    status: "Pendente",
    source: "docs/41_OPEX_PRELIMINAR.md",
    notice: "Valores numéricos serão preenchidos mediante cotações locais em Macapá/AP.",
    lastUpdated: "28/07/2026",
  },
  {
    id: "ind-natureza-juridica",
    name: "Natureza Jurídica Proposta",
    value: "Associação Privada sem fins lucrativos",
    unit: "Modelo Legal",
    classification: "Hipótese Recomendada",
    status: "Em estudo",
    source: "docs/21_NATUREZA_JURIDICA.md",
    notice: "Pendente de validação contábil e jurídica formal.",
    lastUpdated: "28/07/2026",
  },
  {
    id: "ind-participacao-custeio",
    name: "Participação no Custeio",
    value: "Art. 35 do Estatuto da Pessoa Idosa",
    unit: "Diretriz Legal",
    classification: "Hipótese de Custeio",
    status: "Em estudo",
    source: "docs/42_MODELO_SUSTENTABILIDADE.md",
    notice: "Possibilidade jurídica a validar — não garantida nem automática.",
    lastUpdated: "28/07/2026",
  },
];
