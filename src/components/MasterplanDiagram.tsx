"use client";

import React, { useState } from "react";
import { Info, CheckCircle2 } from "lucide-react";

interface ZoneInfo {
  id: string;
  name: string;
  color: string;
  bgLight: string;
  borderColor: string;
  summary: string;
  items: string[];
}

export const masterplanZones: Record<string, ZoneInfo> = {
  jardim: {
    id: "jardim",
    name: "Jardim Central (O Coração do Lar)",
    color: "#5C7C68",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-300",
    summary: "O elemento central de biofilia, iluminação e ventilação cruzada que conecta todas as alas.",
    items: [
      "Trilha de caminhada sem degraus (NBR 9050)",
      "Bancos de madeira sombreados e pergolados",
      "Jardim Sensorial e Horta Terapêutica suspensa",
      "Praça da Família para reuniões com netos e filhos",
    ],
  },
  moradia: {
    id: "moradia",
    name: "Zona 2 — Moradia (Ala Vida & Ala Plena)",
    color: "#1B3B2B",
    bgLight: "bg-brand-sageLight",
    borderColor: "border-brand-sage",
    summary: "Suítes residenciais adaptadas divididas em duas alas tranquilas voltadas para a natureza.",
    items: [
      "Suítes com iluminação natural e banheiros acessíveis",
      "Salas de estar íntimas em cada ala",
      "Posto de apoio dos cuidadores de plantão",
      "Varandas sombreadas privativas",
    ],
  },
  saude: {
    id: "saude",
    name: "Zona 3 — Cuidado & Saúde",
    color: "#8B5E3C",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-300",
    summary: "Núcleo médico-assistencial com atendimento discreto para preservar o clima de residência.",
    items: [
      "Posto de enfermagem 24h",
      "Sala de medicação com armário blindado",
      "Consultório médico e multidisciplinar",
      "Sala de fisioterapia e reabilitação motora",
    ],
  },
  convivencia: {
    id: "convivencia",
    name: "Zona 4 — Convivência & Memórias",
    color: "#C59B27",
    bgLight: "bg-yellow-50",
    borderColor: "border-yellow-300",
    summary: "Espaços socioculturais planejados para o estímulo cognitivo, lazer e expressão biográfica.",
    items: [
      "Oficina das Memórias (Artesanato e pintura)",
      "Estúdio de Memórias (Gravação biográfica)",
      "Biblioteca Viva e sala de música/jogos",
      "Estar principal com TV",
    ],
  },
  espiritualidade: {
    id: "espiritualidade",
    name: "Zona 5 — Espiritualidade & Paz",
    color: "#1B3B2B",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-200",
    summary: "Espaço sereno para oração, devocionais e reflexão em um ambiente acolhedor.",
    items: [
      "Capela cristã com luz natural filtrada",
      "Sala silenciosa para oração individual",
      "Jardim contemplativo",
      "Acolhimento respeitoso a todas as crenças",
    ],
  },
  alimentacao: {
    id: "alimentacao",
    name: "Zona 6 — Alimentação",
    color: "#8B5E3C",
    bgLight: "bg-orange-50",
    borderColor: "border-orange-300",
    summary: "Refeitório ensolarado e cozinha industrial estruturada com fluxo higiênico unidirecional.",
    items: [
      "Refeitório amplo com mesas para cadeirantes",
      "Cozinha industrial com barreira",
      "Despensa seca e câmara fria",
      "Café Vida Plena para visitas",
    ],
  },
  acolhimento: {
    id: "acolhimento",
    name: "Zona 1 — Acolhimento & Recepção",
    color: "#1B3B2B",
    bgLight: "bg-brand-cream",
    borderColor: "border-brand-wood/30",
    summary: "Portal de entrada e recepção aconchegante para acolher famílias e visitantes com dignidade.",
    items: [
      "Guarita de segurança e controle de acesso",
      "Recepção aconchegante estilo pousada",
      "Sala de atendimento às famílias",
      "Embarque e desembarque coberto",
    ],
  },
  servicos: {
    id: "servicos",
    name: "Zona 7 — Serviços & Apoio Operacional",
    color: "#5C7C68",
    bgLight: "bg-slate-50",
    borderColor: "border-slate-300",
    summary: "Área técnica e de apoio operacional isolada com entrada de serviço independente.",
    items: [
      "Lavanderia industrial com barreira sanitária",
      "Central de resíduos (DML / PGRSS)",
      "Gerador de emergência 100kVA e reservatórios",
      "Vestiários e descanso de funcionários",
    ],
  },
};

export function MasterplanDiagram() {
  const [selectedZone, setSelectedZone] = useState<string>("jardim");
  const currentZone = masterplanZones[selectedZone] || masterplanZones.jardim;

  return (
    <div className="space-y-8">
      {/* Disclaimer Banner */}
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-3">
        <Info className="w-5 h-5 text-amber-700 shrink-0" />
        <span>
          <strong>Aviso Metodológico:</strong> Diagrama conceitual de organização espacial — não constitui planta arquitetônica aprovada.
        </span>
      </div>

      {/* Grid: SVG Responsivo + Painel Lateral */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* SVG Interativo */}
        <div className="lg:col-span-7 bg-brand-deepDark p-4 sm:p-6 rounded-3xl border border-brand-gold/30 shadow-xl overflow-hidden">
          <div className="text-center text-brand-gold font-serif font-bold text-sm mb-4">
            DIAGRAMA ESPACIAL INTERATIVO (CLIQUE NAS ZONAS)
          </div>

          <svg
            viewBox="0 0 600 500"
            className="w-full h-auto max-h-[460px] rounded-2xl"
            role="region"
            aria-label="Diagrama interativo do Masterplan do Instituto Vida Plena"
          >
            <rect width="600" height="500" rx="16" fill="#122A1E" />

            {/* Fundo do Terreno Permeável */}
            <rect x="20" y="20" width="560" height="460" rx="12" fill="#1B3B2B" opacity="0.6" stroke="#5C7C68" strokeDasharray="4 4" />

            {/* Zona 8 — Jardins Externos */}
            <rect x="30" y="30" width="540" height="60" rx="8" fill="#2D5A40" />
            <text x="300" y="65" textAnchor="middle" fill="#FAF7F2" fontSize="13" fontWeight="bold">
              BOSQUE, POMAR &amp; PRAÇA DA FAMÍLIA (Zona 8)
            </text>

            {/* Zona 2 — Ala Vida (Esquerda) */}
            <g
              tabIndex={0}
              role="button"
              aria-label="Selecionar Zona 2 - Ala Vida"
              onClick={() => setSelectedZone("moradia")}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedZone("moradia")}
              className="cursor-pointer transition-opacity hover:opacity-90 focus:outline-none"
            >
              <rect x="40" y="110" width="160" height="120" rx="10" fill={selectedZone === "moradia" ? "#C59B27" : "#1B3B2B"} stroke="#FAF7F2" strokeWidth="2" />
              <text x="120" y="165" textAnchor="middle" fill={selectedZone === "moradia" ? "#122A1E" : "#FAF7F2"} fontSize="13" fontWeight="bold">
                ALA VIDA
              </text>
              <text x="120" y="185" textAnchor="middle" fill={selectedZone === "moradia" ? "#122A1E" : "#C59B27"} fontSize="11">
                (Moradias 1)
              </text>
            </g>

            {/* Zona 2 — Ala Plena (Direita) */}
            <g
              tabIndex={0}
              role="button"
              aria-label="Selecionar Zona 2 - Ala Plena"
              onClick={() => setSelectedZone("moradia")}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedZone("moradia")}
              className="cursor-pointer transition-opacity hover:opacity-90 focus:outline-none"
            >
              <rect x="400" y="110" width="160" height="120" rx="10" fill={selectedZone === "moradia" ? "#C59B27" : "#1B3B2B"} stroke="#FAF7F2" strokeWidth="2" />
              <text x="480" y="165" textAnchor="middle" fill={selectedZone === "moradia" ? "#122A1E" : "#FAF7F2"} fontSize="13" fontWeight="bold">
                ALA PLENA
              </text>
              <text x="480" y="185" textAnchor="middle" fill={selectedZone === "moradia" ? "#122A1E" : "#C59B27"} fontSize="11">
                (Moradias 2)
              </text>
            </g>

            {/* JARDIM CENTRAL (O Coração) */}
            <g
              tabIndex={0}
              role="button"
              aria-label="Selecionar Jardim Central"
              onClick={() => setSelectedZone("jardim")}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedZone("jardim")}
              className="cursor-pointer transition-opacity hover:opacity-90 focus:outline-none"
            >
              <ellipse cx="300" cy="220" rx="120" ry="75" fill={selectedZone === "jardim" ? "#C59B27" : "#5C7C68"} stroke="#FAF7F2" strokeWidth="3" />
              <text x="300" y="215" textAnchor="middle" fill={selectedZone === "jardim" ? "#122A1E" : "#FAF7F2"} fontSize="14" fontWeight="bold">
                JARDIM CENTRAL
              </text>
              <text x="300" y="235" textAnchor="middle" fill={selectedZone === "jardim" ? "#122A1E" : "#FAF7F2"} fontSize="11">
                (Coração do Instituto)
              </text>
            </g>

            {/* Zona 3 — Saúde & Cuidados */}
            <g
              tabIndex={0}
              role="button"
              aria-label="Selecionar Zona 3 - Saúde e Cuidados"
              onClick={() => setSelectedZone("saude")}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedZone("saude")}
              className="cursor-pointer transition-opacity hover:opacity-90 focus:outline-none"
            >
              <rect x="40" y="250" width="160" height="90" rx="10" fill={selectedZone === "saude" ? "#C59B27" : "#8B5E3C"} stroke="#FAF7F2" strokeWidth="2" />
              <text x="120" y="295" textAnchor="middle" fill="#FAF7F2" fontSize="12" fontWeight="bold">
                SAÚDE &amp; CUIDADOS
              </text>
            </g>

            {/* Zona 4 — Convivência & Memórias */}
            <g
              tabIndex={0}
              role="button"
              aria-label="Selecionar Zona 4 - Convivência"
              onClick={() => setSelectedZone("convivencia")}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedZone("convivencia")}
              className="cursor-pointer transition-opacity hover:opacity-90 focus:outline-none"
            >
              <rect x="400" y="250" width="160" height="90" rx="10" fill={selectedZone === "convivencia" ? "#C59B27" : "#8B5E3C"} stroke="#FAF7F2" strokeWidth="2" />
              <text x="480" y="295" textAnchor="middle" fill="#FAF7F2" fontSize="12" fontWeight="bold">
                CONVIVÊNCIA &amp; MEMÓRIA
              </text>
            </g>

            {/* Zona 1 — Acolhimento & Recepção */}
            <g
              tabIndex={0}
              role="button"
              aria-label="Selecionar Zona 1 - Acolhimento"
              onClick={() => setSelectedZone("acolhimento")}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedZone("acolhimento")}
              className="cursor-pointer transition-opacity hover:opacity-90 focus:outline-none"
            >
              <rect x="40" y="360" width="240" height="70" rx="10" fill={selectedZone === "acolhimento" ? "#C59B27" : "#1B3B2B"} stroke="#FAF7F2" strokeWidth="2" />
              <text x="160" y="400" textAnchor="middle" fill="#FAF7F2" fontSize="12" fontWeight="bold">
                ACOLHIMENTO &amp; RECEPÇÃO
              </text>
            </g>

            {/* Zona 5 — Capela */}
            <g
              tabIndex={0}
              role="button"
              aria-label="Selecionar Zona 5 - Espiritualidade"
              onClick={() => setSelectedZone("espiritualidade")}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedZone("espiritualidade")}
              className="cursor-pointer transition-opacity hover:opacity-90 focus:outline-none"
            >
              <rect x="320" y="360" width="240" height="70" rx="10" fill={selectedZone === "espiritualidade" ? "#C59B27" : "#1B3B2B"} stroke="#FAF7F2" strokeWidth="2" />
              <text x="440" y="400" textAnchor="middle" fill="#FAF7F2" fontSize="12" fontWeight="bold">
                CAPELA &amp; REFLEXÃO
              </text>
            </g>

            {/* Faixa Inferior de Serviços e Alimentação */}
            <g
              tabIndex={0}
              role="button"
              aria-label="Selecionar Zonas 6 e 7 - Serviços e Alimentação"
              onClick={() => setSelectedZone("alimentacao")}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedZone("alimentacao")}
              className="cursor-pointer"
            >
              <rect x="30" y="445" width="540" height="35" rx="6" fill="#122A1E" stroke="#5C7C68" />
              <text x="300" y="467" textAnchor="middle" fill="#C59B27" fontSize="11" fontWeight="bold">
                ACESSO DE SERVIÇO → COZINHA, LAVANDERIA &amp; TÉCNICA (Zonas 6 e 7)
              </text>
            </g>
          </svg>
        </div>

        {/* Painel Lateral Detalhado da Zona Selecionada */}
        <div className="lg:col-span-5 bg-brand-warmWhite p-6 md:p-8 rounded-3xl border border-brand-wood/15 space-y-6 shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider bg-brand-deep text-brand-cream px-3 py-1 rounded-full inline-block">
              Zona Selecionada
            </span>
            <h3 className="font-serif font-bold text-2xl text-brand-deep">
              {currentZone.name}
            </h3>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              {currentZone.summary}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="font-serif font-bold text-sm text-brand-deep">
              Componentes &amp; Caracteristicas Principais:
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-brand-charcoal">
              {currentZone.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
