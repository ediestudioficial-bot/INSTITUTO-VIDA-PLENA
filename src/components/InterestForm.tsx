"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Info, Heart } from "lucide-react";

export function InterestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    pais: "Brasil",
    participacao: "conhecer",
    mensagem: "",
    consentimento: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentimento) {
      alert("Por favor, aceite os termos de consentimento para envio.");
      return;
    }
    // Modo demonstrativo transparente
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-brand-warmWhite p-8 md:p-10 rounded-2xl border-2 border-brand-gold/40 shadow-soft text-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-brand-deep">
          Manifestação Registrada com Sucesso!
        </h3>
        <p className="text-brand-charcoal text-base max-w-lg mx-auto leading-relaxed">
          Obrigado, <strong className="text-brand-deep">{formData.nome}</strong>! Sua manifestação de interesse foi acolhida nesta fase conceitual.
        </p>
        
        <div className="p-4 bg-brand-cream rounded-xl border border-brand-gold/30 text-left text-xs text-brand-charcoal/80 space-y-2 max-w-md mx-auto">
          <div className="flex items-center gap-2 text-brand-deep font-semibold">
            <Info className="w-4 h-4 text-brand-gold" />
            <span>Aviso do Modo Demonstrativo:</span>
          </div>
          <p>
            O Instituto Vida Plena encontra-se em fase de estruturação conceitual. Nenhuma captação financeira real está ativa. Assim que a constituição jurídica e os canais formais forem homologados, nossa equipe entrará em contato.
          </p>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              nome: "",
              email: "",
              telefone: "",
              cidade: "",
              pais: "Brasil",
              participacao: "conhecer",
              mensagem: "",
              consentimento: false,
            });
          }}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-deep text-brand-cream rounded-lg text-sm font-semibold hover:bg-brand-deepDark transition-colors"
        >
          Enviar Outra Mensagem
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-brand-warmWhite p-6 md:p-10 rounded-2xl border border-brand-wood/15 shadow-soft space-y-6"
    >
      <div className="border-b border-brand-wood/10 pb-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold uppercase tracking-wider mb-1">
          <Heart className="w-4 h-4 fill-brand-gold" />
          <span>Faça Parte Deste Legado</span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-brand-deep">
          Formulário de Manifestação de Interesse
        </h3>
        <p className="text-sm text-brand-charcoal/70 mt-1">
          Preencha abaixo para cadastrar seu interesse voluntário ou institucional. (Nenhuma cobrança é realizada).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Nome */}
        <div>
          <label htmlFor="nome" className="block text-sm font-semibold text-brand-deep mb-1">
            Nome Completo <span className="text-rose-600">*</span>
          </label>
          <input
            type="text"
            id="nome"
            required
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            placeholder="Seu nome"
            className="w-full px-4 py-3 rounded-lg border border-brand-wood/20 bg-brand-cream/50 text-brand-charcoal focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all text-sm"
          />
        </div>

        {/* E-mail */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-brand-deep mb-1">
            E-mail <span className="text-rose-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="seu.email@exemplo.com"
            className="w-full px-4 py-3 rounded-lg border border-brand-wood/20 bg-brand-cream/50 text-brand-charcoal focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all text-sm"
          />
        </div>

        {/* Telefone */}
        <div>
          <label htmlFor="telefone" className="block text-sm font-semibold text-brand-deep mb-1">
            Telefone / WhatsApp <span className="text-xs text-brand-charcoal/60 font-normal">(Opcional)</span>
          </label>
          <input
            type="tel"
            id="telefone"
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            placeholder="(00) 00000-0000"
            className="w-full px-4 py-3 rounded-lg border border-brand-wood/20 bg-brand-cream/50 text-brand-charcoal focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all text-sm"
          />
        </div>

        {/* Cidade e País */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="cidade" className="block text-sm font-semibold text-brand-deep mb-1">
              Cidade <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              id="cidade"
              required
              value={formData.cidade}
              onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
              placeholder="Sua cidade"
              className="w-full px-3 py-3 rounded-lg border border-brand-wood/20 bg-brand-cream/50 text-brand-charcoal focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all text-sm"
            />
          </div>
          <div>
            <label htmlFor="pais" className="block text-sm font-semibold text-brand-deep mb-1">
              País <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              id="pais"
              required
              value={formData.pais}
              onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
              placeholder="Brasil"
              className="w-full px-3 py-3 rounded-lg border border-brand-wood/20 bg-brand-cream/50 text-brand-charcoal focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all text-sm"
            />
          </div>
        </div>
      </div>

      {/* Como deseja participar */}
      <div>
        <label htmlFor="participacao" className="block text-sm font-semibold text-brand-deep mb-1">
          Como deseja participar futuramente? <span className="text-rose-600">*</span>
        </label>
        <select
          id="participacao"
          required
          value={formData.participacao}
          onChange={(e) => setFormData({ ...formData, participacao: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-brand-wood/20 bg-brand-cream/50 text-brand-charcoal focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all text-sm"
        >
          <option value="conhecer">Desejo apenas conhecer o projeto e receber atualizações</option>
          <option value="voluntario">Tenho interesse em ser voluntário(a)</option>
          <option value="profissional">Desejo oferecer serviço profissional ou consultoria</option>
          <option value="igreja">Represento uma Igreja ou Comunidade Cristã</option>
          <option value="empresa">Represento uma Empresa ou Fundação parceira</option>
          <option value="apoiar">Desejo apoiar financeiramente quando for regularizado</option>
        </select>
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="mensagem" className="block text-sm font-semibold text-brand-deep mb-1">
          Sua Mensagem / Comentário
        </label>
        <textarea
          id="mensagem"
          rows={4}
          value={formData.mensagem}
          onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
          placeholder="Conte-nos um pouco sobre suas motivações ou como gostaria de somar com este sonho..."
          className="w-full px-4 py-3 rounded-lg border border-brand-wood/20 bg-brand-cream/50 text-brand-charcoal focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all text-sm resize-none"
        ></textarea>
      </div>

      {/* Consentimento LGPD */}
      <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-cream border border-brand-wood/10">
        <input
          type="checkbox"
          id="consentimento"
          required
          checked={formData.consentimento}
          onChange={(e) => setFormData({ ...formData, consentimento: e.target.checked })}
          className="mt-1 w-4 h-4 rounded text-brand-gold focus:ring-brand-gold border-brand-wood/30"
        />
        <label htmlFor="consentimento" className="text-xs text-brand-charcoal/80 leading-snug cursor-pointer">
          Concordo em compartilhar estes dados com o Instituto Vida Plena exclusivamente para fins de atualização sobre a estruturação do projeto, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
        </label>
      </div>

      {/* Botão Submit */}
      <button
        type="submit"
        className="w-full py-4 px-6 bg-brand-gold hover:bg-amber-400 text-brand-deepDark font-serif font-bold text-base rounded-xl transition-all shadow-md hover:shadow-gold flex items-center justify-center gap-3 cursor-pointer"
      >
        <Send className="w-5 h-5 text-brand-deepDark" />
        Registrar Manifestação de Interesse
      </button>

      <div className="flex items-center justify-center gap-2 text-xs text-brand-charcoal/60 text-center">
        <Info className="w-3.5 h-3.5 text-brand-gold" />
        <span>Nenhum pagamento é solicitado nesta fase. Registro estritamente conceitual.</span>
      </div>
    </form>
  );
}
