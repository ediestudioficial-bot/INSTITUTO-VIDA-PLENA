"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Users, Church, Building2, Stethoscope, Globe, Send, CheckCircle2 } from "lucide-react";

export default function ParceirosPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    estado: "",
    pais: "Brasil",
    organizacao: "",
    funcao: "",
    tipoInteresse: "quero_conhecer",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner Principal */}
      <div className="bg-brand-deep text-brand-cream rounded-3xl p-8 md:p-14 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-brand-gold uppercase bg-brand-cream/10 rounded-full border border-brand-gold/30">
          <Users className="w-4 h-4 text-brand-gold" />
          <span>Rede Institucional &amp; Alianças</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-warmWhite">
          Parceiros &amp; Colaboradores
        </h1>
        <p className="text-lg text-brand-cream/90 font-light max-w-3xl leading-relaxed">
          Saiba como profissionais, igrejas, empresas e parceiros internacionais poderão colaborar no futuro do Instituto Vida Plena.
        </p>
      </div>

      {/* Categorias de Parceria Futura */}
      <div className="space-y-8">
        <SectionHeading
          badge="Formas Futuras de Participação"
          title="Quem pode fazer parte dessa visão"
          description="Conheça as modalidades de relacionamento institucional estruturadas no nosso plano de governança."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <Stethoscope className="w-8 h-8 text-brand-deep" />
            <h3 className="font-serif font-bold text-lg text-brand-deep">Profissionais de Saúde</h3>
            <p className="text-xs text-brand-charcoal/80">Médicos, enfermeiros, fisioterapeutas e nutricionistas para apoio técnico futuro.</p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <Church className="w-8 h-8 text-brand-deep" />
            <h3 className="font-serif font-bold text-lg text-brand-deep">Igrejas &amp; Comunidades</h3>
            <p className="text-xs text-brand-charcoal/80">Apadrinhamento devocional, visitas voluntárias e apoio espiritual aos idosos.</p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <Building2 className="w-8 h-8 text-brand-deep" />
            <h3 className="font-serif font-bold text-lg text-brand-deep">Empresas &amp; ESG</h3>
            <p className="text-xs text-brand-charcoal/80">Patrocínio de ambientes e programas sociais via Leis de Incentivo (Fundo do Idoso).</p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <Globe className="w-8 h-8 text-brand-deep" />
            <h3 className="font-serif font-bold text-lg text-brand-deep">Parceiros Globais</h3>
            <p className="text-xs text-brand-charcoal/80">Alianças com igrejas e organizações internacionais para apadrinhamento institucional.</p>
          </div>
        </div>
      </div>

      {/* Formulário Interativo Ampliado */}
      <div className="bg-brand-sageLight/60 border border-brand-sage/20 p-8 md:p-12 rounded-3xl space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-serif font-bold text-brand-deep">
            Manifestação de Interesse Institucional
          </h2>
          <p className="text-sm text-brand-charcoal/80 max-w-xl mx-auto">
            Cadastre seus dados para receber atualizações ou apresentar sua intenção de colaboração técnica para a Fase 5.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 bg-brand-warmWhite border border-emerald-300 rounded-2xl text-center space-y-4 max-w-lg mx-auto">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="font-serif font-bold text-xl text-brand-deep">Interesse Registrado com Sucesso!</h3>
            <p className="text-sm text-brand-charcoal/80">
              Obrigado por se conectar ao Instituto Vida Plena. Seus dados foram salvos no nosso cadastro preliminar de relacionamento.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2 bg-brand-deep text-brand-cream text-xs font-bold rounded-lg"
            >
              Enviar Novo Cadastro
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-brand-deep uppercase mb-1">Nome Completo</label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-wood/20 bg-brand-warmWhite text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-deep uppercase mb-1">E-mail de Contato</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-wood/20 bg-brand-warmWhite text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold text-brand-deep uppercase mb-1">Telefone / WhatsApp</label>
                <input
                  type="text"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-wood/20 bg-brand-warmWhite text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  placeholder="(96) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-deep uppercase mb-1">Cidade / Estado</label>
                <input
                  type="text"
                  value={formData.cidade}
                  onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-wood/20 bg-brand-warmWhite text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  placeholder="Macapá / AP"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-deep uppercase mb-1">País</label>
                <input
                  type="text"
                  value={formData.pais}
                  onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-wood/20 bg-brand-warmWhite text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-deep uppercase mb-1">Tipo de Interesse Principal</label>
              <select
                value={formData.tipoInteresse}
                onChange={(e) => setFormData({ ...formData, tipoInteresse: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-brand-wood/20 bg-brand-warmWhite text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
              >
                <option value="quero_conhecer">Quero conhecer o projeto</option>
                <option value="igreja">Quero representar uma igreja</option>
                <option value="empresa">Quero representar uma empresa</option>
                <option value="servico_profissional">Quero oferecer serviço profissional</option>
                <option value="arquitetura_engenharia">Quero colaborar com arquitetura ou engenharia</option>
                <option value="saude">Quero colaborar com saúde</option>
                <option value="assistencia">Quero colaborar com assistência social</option>
                <option value="comunicacao">Quero colaborar com comunicação</option>
                <option value="terreno">Quero apresentar uma opção de terreno</option>
                <option value="atualizacoes">Quero receber atualizações periódicas</option>
                <option value="internacional">Quero conversar sobre apoio internacional</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-deep uppercase mb-1">Mensagem ou Apresentação</label>
              <textarea
                rows={4}
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-brand-wood/20 bg-brand-warmWhite text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                placeholder="Conte um pouco sobre sua motivação ou área de atuação..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-brand-deep text-brand-cream font-bold text-sm rounded-xl hover:bg-brand-deepDark transition-colors flex items-center justify-center gap-2"
            >
              Registrar Manifestação de Interesse <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
