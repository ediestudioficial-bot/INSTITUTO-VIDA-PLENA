export interface SiteConfig {
  name: string;
  tagline: string;
  phase: {
    number: number;
    name: string;
    status: string;
  };
  flags: {
    homologacao: boolean;
    captacaoAberta: boolean;
    entidadeConstituida: boolean;
    terrenoDefinido: boolean;
    parceriaConfirmada: boolean;
    contatoAtivo: boolean;
  };
  disclaimers: {
    accessibility: string;
    performance: string;
    images: string;
    legal: string;
    deploy: string;
  };
  lastUpdated: string;
  homologationNotice: string;
}

export const siteConfig: SiteConfig = {
  name: "Instituto Vida Plena",
  tagline: "Viver com dignidade. Envelhecer com esperança.",
  phase: {
    number: 7,
    name: "Renders Conceituais, Integração Visual Real e Homologação Publicada",
    status: "Fase de Validação de Renders & Homologação Estruturada",
  },
  flags: {
    homologacao: true,
    captacaoAberta: false,
    entidadeConstituida: false,
    terrenoDefinido: false,
    parceriaConfirmada: false,
    contatoAtivo: false,
  },
  disclaimers: {
    accessibility:
      "Auditoria interna de acessibilidade baseada em critérios selecionados da WCAG 2.1. Não constitui certificação oficial.",
    performance:
      "Aplicação otimizada e preparada para medição em ambiente publicado. Resultados definitivos dependerão de Lighthouse, PageSpeed Insights e, futuramente, dados reais de uso.",
    images:
      "Sistema de imagens integrado com fallback visual. Renders conceituais reais ainda em produção.",
    legal:
      "O Instituto Vida Plena encontra-se na fase de planejamento institucional. A constituição jurídica, CNPJ, aquisição de terreno e captação de recursos aguardam homologação oficial futura.",
    deploy: "Deploy de homologação preparado e aguardando conexão a servidor de hospedagem definitivo.",
  },
  lastUpdated: "28/07/2026",
  homologationNotice:
    "Projeto em fase de estruturação e homologação institucional. Nenhuma captação financeira ou recebimento de doações está aberto neste momento.",
};
