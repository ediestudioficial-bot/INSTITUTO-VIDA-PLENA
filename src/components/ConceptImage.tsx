"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ConceptIllustration } from "@/components/ConceptIllustration";
import { Info } from "lucide-react";

interface ConceptImageProps {
  src?: string;
  title: string;
  description?: string;
  alt: string;
  environment?: string;
  illustrationType?: "facade" | "jardim" | "moradia" | "convivencia" | "capela" | "saude" | "oficina" | "familia" | "horta";
  aspectRatio?: "16/9" | "4/3" | "1/1";
  conceptualNotice?: string;
  className?: string;
}

export function ConceptImage({
  src,
  title,
  description,
  alt,
  environment,
  illustrationType = "facade",
  aspectRatio = "16/9",
  conceptualNotice = "Representações conceituais geradas para comunicação da visão do projeto.",
  className = "",
}: ConceptImageProps) {
  const [imageError, setImageError] = useState(false);

  const aspectClass =
    aspectRatio === "16/9"
      ? "aspect-video"
      : aspectRatio === "4/3"
      ? "aspect-[4/3]"
      : "aspect-square";

  return (
    <div
      className={`bg-brand-warmWhite rounded-2xl border border-brand-wood/15 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {/* Container da Imagem com Fallback Otimizado */}
      <div className={`relative w-full ${aspectClass} bg-brand-sageLight/70 overflow-hidden`}>
        {src && !imageError ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          /* Fallback para Ilustração Vetorial Abstrata */
          <div className="w-full h-full relative">
            <ConceptIllustration type={illustrationType} className="w-full h-full" />
            <div className="absolute top-3 left-3 bg-brand-deep/80 backdrop-blur-md text-brand-cream text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-brand-gold/30">
              {environment || "Ambiente Conceitual"}
            </div>
          </div>
        )}
      </div>

      {/* Conteúdo Informativo do Cartão */}
      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          <h4 className="font-serif font-bold text-base md:text-lg text-brand-deep leading-snug">
            {title}
          </h4>
          {description && (
            <p className="text-xs text-brand-charcoal/80 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="pt-2 border-t border-brand-wood/10 flex items-center gap-2 text-[11px] text-amber-800 bg-amber-50/70 p-2 rounded-lg">
          <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
          <span>{conceptualNotice}</span>
        </div>
      </div>
    </div>
  );
}
