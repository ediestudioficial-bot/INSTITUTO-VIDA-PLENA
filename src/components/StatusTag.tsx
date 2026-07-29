import React from "react";

type StatusType = "validado" | "estudo" | "pendente" | "futura" | "conceito" | "hipotese" | "risco";

interface StatusTagProps {
  status: StatusType | string;
  label?: string;
}

export function StatusTag({ status, label }: StatusTagProps) {
  const normalized = status.toLowerCase();

  let bg = "bg-gray-100 text-gray-700 border-gray-300";
  let text = label || status;

  if (normalized.includes("validado")) {
    bg = "bg-emerald-100 text-emerald-800 border-emerald-300";
    text = label || "Validado";
  } else if (normalized.includes("estudo")) {
    bg = "bg-blue-100 text-blue-800 border-blue-300";
    text = label || "Em estudo";
  } else if (normalized.includes("pendente")) {
    bg = "bg-amber-100 text-amber-900 border-amber-300";
    text = label || "Pendente de análise profissional";
  } else if (normalized.includes("futura")) {
    bg = "bg-purple-100 text-purple-800 border-purple-300";
    text = label || "Decisão futura";
  } else if (normalized.includes("conceito")) {
    bg = "bg-stone-100 text-stone-800 border-stone-300";
    text = label || "Conceito";
  } else if (normalized.includes("hipotese")) {
    bg = "bg-amber-50 text-amber-800 border-amber-200";
    text = label || "Hipótese";
  } else if (normalized.includes("risco")) {
    bg = "bg-rose-100 text-rose-800 border-rose-300";
    text = label || "Risco Mapeado";
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${bg} transition-colors`}
    >
      {text}
    </span>
  );
}
