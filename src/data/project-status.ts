export interface PublicDoc {
  id: string;
  title: string;
  category: string;
  summary: string;
  status: "Validado" | "Em estudo" | "Pendente" | "Minuta";
  path: string;
}

export interface ProjectStatusData {
  lastUpdated: string;
  currentPhase: {
    number: number;
    name: string;
    description: string;
  };
  operationalStatus: {
    modeloAtendimento: string;
    areaNecessaria: string;
    terreno: string;
    investimentoInicial: string;
    custoMensal: string;
    naturezaJuridica: string;
    cnpj: string;
    captacao: string;
    projetoArquitetonico: string;
  };
  legalNotice: string;
  publicDocs: PublicDoc[];
  frequentQuestions: {
    question: string;
    answer: string;
    category: string;
  }[];
}

export const projectStatusData: ProjectStatusData = {
  lastUpdated: "28/07/2026",
  currentPhase: {
    number: 5,
    name: "Identidade Visual, Experiência Cinematográfica e Dossiê Institucional",
    description:
      "Fase concluída: identidade visual provisória completa, logotipo em SVG, manual de marca (docs/56), Carta do Idealizador (docs/57), Dossiê Institucional Completo (docs/58), Resumo Executivo (docs/59), versão em Inglês (docs/en), MasterplanDiagram interativo, página de Parceiros (/parceiros) e versão global (/en).",
  },
  operationalStatus: {
    modeloAtendimento: "Em estudo (Cenários A, B e C para 24 moradores)",
    areaNecessaria: "Em dimensionamento (~1.440m² úteis / Terreno ~3.000m² a 3.500m²)",
    terreno: "Não definido (Ficha Técnica de Avaliação pronta em docs/28)",
    investimentoInicial: "Em levantamento (CAPEX preliminar sem preços fictícios)",
    custoMensal: "Em levantamento (OPEX preliminar sem preços fictícios)",
    naturezaJuridica: "Associação Privada Sem Fins Lucrativos (Hipótese recomendada)",
    cnpj: "Ainda não constituído (Aguardando Assembleia de Fundadores)",
    captacao: "Ainda não aberta (Formulário público exclusivo de interesse voluntário)",
    projetoArquitetonico: "Ainda não contratado (Programa preliminar estruturado em docs/29)",
  },
  legalNotice:
    "O Instituto Vida Plena encontra-se na Fase 5 de planejamento e estruturação institucional. O nome 'Instituto' refere-se à denominação pública da futura Associação Privada Sem Fins Lucrativos. A constituição jurídica formal, obtenção de CNPJ, aquisição do terreno, contratação de obra civil e captação financeira real estão pendentes de validação e homologação oficial.",
  publicDocs: [
    {
      id: "00_VISAO_GERAL",
      title: "Visão Geral do Projeto",
      category: "Visão & Estratégia",
      summary: "Resumo executivo, fundamentação cristã e abordagem multidisciplinar do lar residencial.",
      status: "Validado",
      path: "/docs/00_VISAO_GERAL.md",
    },
    {
      id: "56_MANUAL_MARCA",
      title: "Manual da Identidade Visual Provisória",
      category: "Design",
      summary: "Construção do símbolo, assinaturas institucionais, paleta de cores e regras de uso.",
      status: "Validado",
      path: "/docs/56_MANUAL_IDENTIDADE_VISUAL.md",
    },
    {
      id: "57_CARTA_IDEALIZADOR",
      title: "Carta do Idealizador: O Nascimento de um Sonho",
      category: "Institucional",
      summary: "Mensagem humana sobre a vocação cristã, respeito às biografias e transparência.",
      status: "Validado",
      path: "/docs/57_CARTA_DO_IDEALIZADOR.md",
    },
    {
      id: "58_DOSSIE_INSTITUCIONAL",
      title: "Dossiê Institucional Completo",
      category: "Governança",
      summary: "Apresentação em 26 capítulos abrangendo propósito, masterplan, operação e sustentabilidade.",
      status: "Validado",
      path: "/docs/58_DOSSIE_INSTITUCIONAL_COMPLETO.md",
    },
    {
      id: "59_RESUMO_EXECUTIVO",
      title: "Resumo Executivo Institucional",
      category: "Governança",
      summary: "Documento de leitura rápida para apresentação a parceiros e organizações.",
      status: "Validado",
      path: "/docs/59_RESUMO_EXECUTIVO.md",
    },
  ],
  frequentQuestions: [
    {
      question: "O Instituto Vida Plena já está funcionando?",
      answer:
        "Não. O Instituto Vida Plena está na Fase 5 de planejamento e estruturação institucional. A construção física e o atendimento a idosos só ocorrerão após a constituição jurídica formal, aprovação dos projetos de arquitetura e licenciamento sanitário.",
      category: "Institucional",
    },
    {
      question: "Já é possível fazer doações em dinheiro?",
      answer:
        "Não. Em respeito aos nossos princípios de transparência e governança, nenhuma doação financeira em dinheiro será aceita antes do registro oficial do CNPJ e da abertura de conta bancária institucional vinculada.",
      category: "Captação",
    },
    {
      question: "O projeto possui parceiros internacionais confirmados?",
      answer:
        "Ainda não. Todas as aproximações com organizações, igrejas ou lideranças internacionais (incluindo o Pastor Paulo Lambach) constituem contatos de relacionamento preliminar e não representam alianças formais firmadas.",
      category: "Parcerias",
    },
    {
      question: "Como posso manifestar meu interesse em colaborar?",
      answer:
        "Profissionais de saúde, arquitetura, igrejas, empresas e voluntários podem cadastrar sua intenção de colaboração futura no formulário da página 'Parceiros'.",
      category: "Voluntariado",
    },
  ],
};
