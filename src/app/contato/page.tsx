import React from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { InterestForm } from "@/components/InterestForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { StatusTag } from "@/components/StatusTag";

export const metadata = {
  title: "Contato Institucional",
  description:
    "Canais de atendimento e formulário de contato do Instituto Vida Plena.",
};

export default function ContatoPage() {
  return (
    <div className="py-16 space-y-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Canais de Atendimento"
          title="Fale Conosco"
          description="Fique à vontade para entrar em contato, tirar dúvidas sobre o conceito ou agendar uma conversa com os idealizadores."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/20 text-brand-gold flex items-center justify-center">
              <Mail className="w-5 h-5 text-brand-wood" />
            </div>
            <h3 className="font-serif font-bold text-lg text-brand-deep">E-mail Institucional</h3>
            <p className="text-xs text-brand-charcoal/80">
              contato@institutovidaplena.org <br />
              <span className="text-[10px] text-brand-charcoal/60 font-mono">(Dominio em fase de reserva)</span>
            </p>
            <StatusTag status="estudo" />
          </div>

          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/20 text-brand-gold flex items-center justify-center">
              <Phone className="w-5 h-5 text-brand-wood" />
            </div>
            <h3 className="font-serif font-bold text-lg text-brand-deep">Atendimento Institucional</h3>
            <p className="text-xs text-brand-charcoal/80">
              Canal telefônico e WhatsApp <br />
              <span className="text-[10px] text-brand-charcoal/60 font-mono">(Ativação pós-CNPJ)</span>
            </p>
            <StatusTag status="pendente" />
          </div>

          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/20 text-brand-gold flex items-center justify-center">
              <MapPin className="w-5 h-5 text-brand-wood" />
            </div>
            <h3 className="font-serif font-bold text-lg text-brand-deep">Sede e Terreno</h3>
            <p className="text-xs text-brand-charcoal/80">
              Estudo de viabilidade de terreno e aprovação do plano diretor municipal.
            </p>
            <StatusTag status="estudo" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <InterestForm />
      </section>
    </div>
  );
}
