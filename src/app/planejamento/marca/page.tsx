import { Metadata } from "next";
import { AlertTriangle, Search, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusTag } from "@/components/StatusTag";

export const metadata: Metadata = {
  title: "Painel de Pesquisa de Marca | Privado",
  description: "Controle interno da validação do nome e da marca do Instituto Vida Plena.",
  robots: { index: false, follow: false },
};

const etapas = [
  "Definir serviços e classes de Nice com especialista",
  "Pesquisar expressão exata e sinais semelhantes no INPI",
  "Analisar titulares, vigência e afinidade mercadológica",
  "Verificar nome empresarial, domínios e uso institucional",
  "Emitir parecer e registrar a decisão da governança",
];

export default function MarcaPage() {
  return (
    <div className="py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-brand-deep text-brand-cream rounded-3xl p-8 md:p-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-brand-gold uppercase bg-brand-cream/10 rounded-full border border-brand-gold/30">
          <Search className="w-3.5 h-3.5" />
          <span>Painel interno — não indexado</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-warmWhite">Validação do nome e da marca</h1>
        <p className="text-brand-cream/90 max-w-3xl">“Instituto Vida Plena” permanece como nome de trabalho. A registrabilidade ainda não foi confirmada.</p>
      </div>

      <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 shrink-0 mt-0.5" />
        <p className="text-sm leading-relaxed"><strong>Não há relatório exportado do INPI, protocolo ou parecer especializado anexado.</strong> Por isso, foram removidas classificações de risco e afirmações sobre marcas encontradas ou inexistentes.</p>
      </div>

      <section className="space-y-6">
        <SectionHeading badge="Nome provisório" title="Instituto Vida Plena" description="Uso permitido no planejamento, sem alegação de disponibilidade ou registro garantido." />
        <div className="rounded-2xl border border-brand-wood/15 bg-brand-warmWhite p-6 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-brand-sage" />
            <div><p className="font-serif font-bold text-brand-deep">Situação jurídica da marca</p><p className="text-sm text-brand-charcoal/75">Busca formal e parecer ainda necessários.</p></div>
          </div>
          <StatusTag status="pendente" label="Não validada" />
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading badge="Próximas ações" title="Roteiro de validação" description="A decisão final depende de análise profissional e registro documental." />
        <ol className="grid md:grid-cols-2 gap-4">
          {etapas.map((etapa, index) => <li key={etapa} className="p-5 rounded-2xl border border-brand-wood/15 bg-brand-cream/30 text-sm text-brand-charcoal"><strong className="text-brand-deep mr-2">{index + 1}.</strong>{etapa}</li>)}
        </ol>
      </section>
    </div>
  );
}
