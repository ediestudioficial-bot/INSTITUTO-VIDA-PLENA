import { Metadata } from "next";
import { AlertTriangle, ClipboardCheck, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusTag } from "@/components/StatusTag";

export const metadata: Metadata = {
  title: "Painel de Prospecção de Terrenos | Privado",
  description: "Controle interno da prospecção de terrenos para o Instituto Vida Plena.",
  robots: { index: false, follow: false },
};

const requisitos = [
  "URL específica ou documento do corretor, com data e captura preservada",
  "área, preço e localização verificáveis",
  "matrícula e certidão de ônus atualizadas",
  "consulta de zoneamento e uso do solo",
  "análise de drenagem, acesso, infraestrutura e restrições ambientais",
  "vistoria assinada por profissional habilitado",
];

export default function TerrenosPage() {
  return (
    <div className="py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-brand-deep text-brand-cream rounded-3xl p-8 md:p-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-brand-gold uppercase bg-brand-cream/10 rounded-full border border-brand-gold/30">
          <MapPin className="w-3.5 h-3.5" />
          <span>Painel interno — não indexado</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-warmWhite">Prospecção de terrenos</h1>
        <p className="text-brand-cream/90 max-w-3xl">Nenhum imóvel específico está validado ou selecionado. O painel permanece preparado para receber evidências reais.</p>
      </div>

      <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 shrink-0 mt-0.5" />
        <p className="text-sm leading-relaxed"><strong>Os preços e bairros anteriormente exibidos foram removidos.</strong> Eles estavam associados apenas a páginas genéricas de portais e não permitiam verificar anúncios individuais.</p>
      </div>

      <section className="space-y-6">
        <SectionHeading badge="Estado atual" title="Prospecção pendente" description="Um imóvel só entra na matriz de decisão depois de cumprir os requisitos documentais e técnicos." />
        <div className="rounded-2xl border border-brand-wood/15 bg-brand-warmWhite p-6 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="font-serif font-bold text-brand-deep text-lg">PROS-01 — Macapá, região a definir</p>
            <p className="text-sm text-brand-charcoal/75 mt-1">Registro de controle; não representa anúncio ou imóvel identificado.</p>
          </div>
          <StatusTag status="pendente" label="Sem evidência anexada" />
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading badge="Critérios" title="Evidências mínimas" description="Itens necessários antes de comparar preço, risco ou adequação." />
        <div className="grid md:grid-cols-2 gap-4">
          {requisitos.map((item) => (
            <div key={item} className="p-5 rounded-2xl border border-brand-wood/15 bg-brand-cream/30 flex gap-3">
              <ClipboardCheck className="w-5 h-5 text-brand-sage shrink-0" />
              <p className="text-sm text-brand-charcoal">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
