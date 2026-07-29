"use client";

import React from "react";

interface ConceptIllustrationProps {
  type: "facade" | "jardim" | "moradia" | "convivencia" | "capela" | "saude" | "oficina" | "familia" | "horta";
  className?: string;
}

export function ConceptIllustration({ type, className = "" }: ConceptIllustrationProps) {
  switch (type) {
    case "facade":
      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full rounded-2xl ${className}`} fill="none">
          <rect width="400" height="240" rx="16" fill="url(#bg-facade)" />
          <defs>
            <linearGradient id="bg-facade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1B3B2B" />
              <stop offset="100%" stopColor="#122A1E" />
            </linearGradient>
          </defs>

          {/* Iluminação Quente do Sol */}
          <circle cx="340" cy="50" r="40" fill="#C59B27" opacity="0.25" />

          {/* Telhado de Madeira & Pergolado */}
          <path d="M40 140 L200 70 L360 140" stroke="#C59B27" strokeWidth="6" strokeLinecap="round" />
          <rect x="60" y="140" width="280" height="70" fill="#FAF7F2" opacity="0.15" rx="8" />

          {/* Colunas Acessíveis & Entrada */}
          <line x1="100" y1="140" x2="100" y2="210" stroke="#8B5E3C" strokeWidth="4" />
          <line x1="200" y1="140" x2="200" y2="210" stroke="#8B5E3C" strokeWidth="4" />
          <line x1="300" y1="140" x2="300" y2="210" stroke="#8B5E3C" strokeWidth="4" />

          {/* Rampa Suave e Vegetação */}
          <path d="M40 210 Q200 205, 360 210" stroke="#5C7C68" strokeWidth="6" strokeLinecap="round" />
          <circle cx="80" cy="205" r="16" fill="#5C7C68" opacity="0.8" />
          <circle cx="320" cy="205" r="18" fill="#5C7C68" opacity="0.8" />

          <text x="200" y="180" textAnchor="middle" fill="#FAF7F2" fontSize="13" fontWeight="bold">
            RECEPTIVO &amp; FACHADA TÉRREA
          </text>
        </svg>
      );

    case "jardim":
      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full rounded-2xl ${className}`} fill="none">
          <rect width="400" height="240" rx="16" fill="url(#bg-jardim)" />
          <defs>
            <linearGradient id="bg-jardim" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2D5A40" />
              <stop offset="100%" stopColor="#1B3B2B" />
            </linearGradient>
          </defs>

          {/* Circulo Sol e Copas de Árvores */}
          <circle cx="200" cy="60" r="45" fill="#5C7C68" opacity="0.6" />
          <circle cx="120" cy="90" r="35" fill="#5C7C68" opacity="0.7" />
          <circle cx="280" cy="90" r="35" fill="#5C7C68" opacity="0.7" />

          {/* Caminho Curvo Nivelado */}
          <path d="M60 220 C140 150, 260 150, 340 220" fill="none" stroke="#FAF7F2" strokeWidth="12" opacity="0.3" strokeLinecap="round" />
          <path d="M60 220 C140 150, 260 150, 340 220" fill="none" stroke="#C59B27" strokeWidth="3" strokeDasharray="6 6" />

          {/* Banco de Madeira */}
          <rect x="170" y="150" width="60" height="12" rx="4" fill="#8B5E3C" />
          <line x1="180" y1="162" x2="180" y2="180" stroke="#8B5E3C" strokeWidth="3" />
          <line x1="220" y1="162" x2="220" y2="180" stroke="#8B5E3C" strokeWidth="3" />

          <text x="200" y="205" textAnchor="middle" fill="#FAF7F2" fontSize="13" fontWeight="bold">
            JARDIM CENTRAL &amp; BIOFILIA
          </text>
        </svg>
      );

    case "moradia":
      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full rounded-2xl ${className}`} fill="none">
          <rect width="400" height="240" rx="16" fill="url(#bg-moradia)" />
          <defs>
            <linearGradient id="bg-moradia" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FAF7F2" />
              <stop offset="100%" stopColor="#E9EDE9" />
            </linearGradient>
          </defs>

          {/* Janela Ampla com Luz Natural */}
          <rect x="250" y="40" width="110" height="120" rx="8" fill="#5C7C68" opacity="0.3" stroke="#1B3B2B" strokeWidth="3" />
          <line x1="305" y1="40" x2="305" y2="160" stroke="#1B3B2B" strokeWidth="2" />
          <line x1="250" y1="100" x2="360" y2="100" stroke="#1B3B2B" strokeWidth="2" />

          {/* Cama Adaptada & Cabeceira */}
          <rect x="50" y="120" width="160" height="70" rx="6" fill="#1B3B2B" opacity="0.85" />
          <rect x="40" y="90" width="20" height="100" rx="4" fill="#8B5E3C" />

          <text x="200" y="210" textAnchor="middle" fill="#1B3B2B" fontSize="13" fontWeight="bold">
            SUÍTE RESIDENCIAL ADAPTADA
          </text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full rounded-2xl ${className}`} fill="none">
          <rect width="400" height="240" rx="16" fill="#1B3B2B" />
          <circle cx="200" cy="120" r="60" fill="#C59B27" opacity="0.2" />
          <text x="200" y="125" textAnchor="middle" fill="#FAF7F2" fontSize="14" fontWeight="bold">
            ILUSTRAÇÃO CONCEITUAL
          </text>
        </svg>
      );
  }
}
