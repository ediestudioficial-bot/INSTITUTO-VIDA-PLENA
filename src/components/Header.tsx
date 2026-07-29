"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["/", "Início"],
  ["/o-projeto", "O Instituto"],
  ["/como-sera", "Como será"],
  ["/etapas", "Etapas"],
  ["/transparencia", "Transparência"],
  ["/perguntas-frequentes", "FAQ"],
  ["/contato", "Contato"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-brand-cream/68 backdrop-blur-2xl supports-[backdrop-filter]:bg-brand-cream/58">
      <div className="editorial-shell flex h-20 items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Instituto Vida Plena — início">
          <span className="grid h-9 w-9 place-items-center border border-brand-deep/70 bg-white/55 text-brand-deep font-serif text-lg backdrop-blur-md">VP</span>
          <span className="font-serif text-lg font-semibold tracking-tight text-brand-deep">Instituto Vida Plena</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
          {links.map(([href, label]) => <Link key={href} href={href} className="text-[13px] font-medium tracking-wide text-brand-deep/90 hover:text-brand-wood transition-colors">{label}</Link>)}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/en" className="px-3 py-3 text-xs font-semibold tracking-widest text-brand-deep">EN</Link>
          <Link href="/participe" className="bg-brand-deep/94 px-6 py-3 text-xs font-semibold uppercase tracking-[.12em] text-white hover:bg-brand-sage transition-colors">Faça parte</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-brand-deep" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="lg:hidden border-t border-white/25 bg-brand-cream/88 px-6 py-8 backdrop-blur-2xl"><nav className="flex flex-col">
        {links.map(([href,label]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="border-b border-brand-deep/10 py-4 font-serif text-xl text-brand-deep">{label}</Link>)}
        <Link href="/participe" onClick={() => setOpen(false)} className="mt-6 bg-brand-deep px-6 py-4 text-center text-xs font-semibold uppercase tracking-[.12em] text-white">Faça parte</Link>
      </nav></div>}
    </header>
  );
}
