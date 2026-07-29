import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-deepDark text-white">
      <div className="editorial-shell py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mb-6 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center border border-white/40 font-serif">VP</span><span className="font-serif text-2xl">Instituto Vida Plena</span></div>
            <p className="max-w-md text-sm leading-7 text-white/65">Projeto social de inspiração cristã dedicado ao futuro acolhimento integral de pessoas idosas com dignidade, amparo e amor em ação.</p>
          </div>
          <div className="md:col-span-2"><p className="mb-5 text-[10px] font-semibold uppercase tracking-[.18em] text-white">Navegação</p><div className="space-y-3 text-sm text-white/65"><Link className="block hover:text-white" href="/o-projeto">O Instituto</Link><Link className="block hover:text-white" href="/como-sera">Como será</Link><Link className="block hover:text-white" href="/etapas">Etapas</Link><Link className="block hover:text-white" href="/participe">Participe</Link></div></div>
          <div className="md:col-span-2"><p className="mb-5 text-[10px] font-semibold uppercase tracking-[.18em] text-white">Institucional</p><div className="space-y-3 text-sm text-white/65"><Link className="block hover:text-white" href="/transparencia">Transparência</Link><Link className="block hover:text-white" href="/privacidade">Privacidade</Link><Link className="block hover:text-white" href="/perguntas-frequentes">Perguntas frequentes</Link></div></div>
          <div className="md:col-span-3"><p className="mb-5 text-[10px] font-semibold uppercase tracking-[.18em] text-white">Contato</p><Link href="/contato" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"><Mail className="h-4 w-4" /> Fale com o projeto</Link><p className="mt-5 text-sm text-white/55">Macapá — Amapá — Brasil</p></div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/45 md:flex-row md:justify-between"><p>© {new Date().getFullYear()} Instituto Vida Plena.</p><p>Projeto em fase de planejamento. Nenhuma captação financeira está ativa.</p></div>
      </div>
    </footer>
  );
}
