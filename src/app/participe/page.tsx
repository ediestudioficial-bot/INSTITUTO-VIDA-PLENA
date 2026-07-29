import React from "react";
import { InterestForm } from "@/components/InterestForm";
import { StatusTag } from "@/components/StatusTag";

export const metadata = {
  title: "Participe & Apoie",
  description:
    "Cadastre sua intenção de apoio voluntário, profissional ou institucional ao futuro Instituto Vida Plena.",
};

export default function ParticipePage() {
  return (
    <div className="py-16 space-y-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep text-brand-cream rounded-3xl p-8 md:p-14 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-brand-gold uppercase bg-brand-cream/10 rounded-full border border-brand-gold/30">
            <span>Mobilização de Interesse Voluntário</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-warmWhite">
            Faça Parte da Construção Deste Sonho
          </h1>
          <p className="text-lg text-brand-cream/90 font-light max-w-2xl mx-auto leading-relaxed">
            Estamos mapeando voluntários, profissionais, igrejas e empresas que desejam somar forças para edificar um lar de esperança para nossos idosos.
          </p>
          <div className="pt-2 flex justify-center">
            <StatusTag status="validado" label="Sem Cobrança Financeira Real Nesta Fase" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <InterestForm />
      </section>
    </div>
  );
}
