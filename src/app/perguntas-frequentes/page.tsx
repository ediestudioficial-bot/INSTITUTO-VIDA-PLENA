"use client";

import React, { useState } from "react";
import { projectStatusData } from "@/data/project-status";
import { HelpCircle, Search, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function PerguntasFrequentesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 3]);

  const categories = [
    "Todas",
    ...Array.from(new Set(projectStatusData.frequentQuestions.map((q) => q.category))),
  ];

  const filteredQuestions = projectStatusData.frequentQuestions.filter((item) => {
    const matchesCategory =
      selectedCategory === "Todas" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <div className="py-16 space-y-16">
      {/* Banner Principal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep text-brand-cream rounded-3xl p-8 md:p-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-brand-gold uppercase bg-brand-cream/10 rounded-full border border-brand-gold/30">
            <HelpCircle className="w-4 h-4 text-brand-gold" />
            <span>Esclarecimentos Transparentes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-warmWhite">
            Perguntas Frequentes (FAQ)
          </h1>
          <p className="text-lg text-brand-cream/90 font-light max-w-3xl leading-relaxed">
            Respostas diretas e transparentes sobre a fase atual de estruturação, conceitos regulatórios, acolhimento e modelo de governança do Instituto Vida Plena.
          </p>
        </div>
      </section>

      {/* Busca e Filtros */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="relative">
          <Search className="w-5 h-5 text-brand-charcoal/50 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Digite sua dúvida (ex: doações, terreno, CNPJ, capacidade)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-brand-wood/20 bg-brand-warmWhite text-brand-charcoal focus:ring-2 focus:ring-brand-gold focus:outline-none text-base transition-all shadow-sm"
          />
        </div>

        {/* Categorias */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-brand-gold text-brand-deepDark shadow-sm font-bold"
                  : "bg-brand-warmWhite text-brand-charcoal border border-brand-wood/15 hover:bg-brand-sageLight"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Lista de Perguntas (Accordion) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-12 bg-brand-warmWhite rounded-2xl border border-brand-wood/15 p-8 space-y-3">
            <HelpCircle className="w-10 h-10 text-brand-wood mx-auto" />
            <h3 className="font-serif font-bold text-xl text-brand-deep">Nenhuma pergunta encontrada</h3>
            <p className="text-sm text-brand-charcoal/70">
              Tente buscar com outro termo ou selecione a categoria &quot;Todas&quot;.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredQuestions.map((item, idx) => {
              const isOpen = openIndices.includes(idx);
              return (
                <div
                  key={idx}
                  className="bg-brand-warmWhite rounded-2xl border border-brand-wood/15 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-brand-sageLight/40"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-brand-deep/5 text-brand-deep uppercase">
                        {item.category}
                      </span>
                      <h3 className="font-serif font-bold text-lg text-brand-deep leading-snug">
                        {item.question}
                      </h3>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-brand-gold shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-brand-charcoal/60 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-brand-wood/10 text-brand-charcoal/90 text-sm leading-relaxed animate-fadeIn">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Chamada para Dúvidas Adicionais */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-sageLight/60 border border-brand-sage/20 p-8 rounded-3xl text-center space-y-4">
          <h3 className="font-serif font-bold text-2xl text-brand-deep">
            Ainda tem dúvidas sobre o projeto?
          </h3>
          <p className="text-sm text-brand-charcoal/80 max-w-lg mx-auto">
            Nossa equipe técnica e o conselho fundador estão à disposição para fornecer esclarecimentos sobre o planejamento e a governança.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="/contato"
              className="px-6 py-3 bg-brand-deep text-brand-cream font-semibold rounded-xl hover:bg-brand-deepDark transition-colors text-sm"
            >
              Fale Conosco
            </Link>
            <Link
              href="/participe"
              className="px-6 py-3 bg-brand-gold text-brand-deepDark font-bold rounded-xl hover:bg-amber-400 transition-colors text-sm shadow-sm"
            >
              Manifestar Interesse
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
