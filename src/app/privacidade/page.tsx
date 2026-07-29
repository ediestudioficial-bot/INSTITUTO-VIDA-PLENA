import React from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusTag } from "@/components/StatusTag";

export const metadata = {
  title: "Política de Privacidade & LGPD",
  description:
    "Diretrizes de proteção de dados, privacidade de imagem e conformidade com a LGPD no Instituto Vida Plena.",
};

export default function PrivacidadePage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <SectionHeading
        badge="Proteção de Dados & Ética"
        title="Política de Privacidade e Uso de Dados (LGPD)"
        description="Compromisso com a Lei Geral de Proteção de Dados (Lei 13.709/2018) e com o respeito incondicional à imagem da pessoa idosa."
      />

      <div className="bg-brand-warmWhite p-8 md:p-10 rounded-2xl border border-brand-wood/15 space-y-6 text-brand-charcoal text-sm leading-relaxed">
        <div>
          <h3 className="font-serif font-bold text-lg text-brand-deep mb-2">
            1. Coleta de Dados no Formulario de Interesse
          </h3>
          <p>
            Os dados fornecidos espontaneamente pelo usuário em nossos formulários de manifestação de interesse (como nome, e-mail, telefone e cidade) são utilizados estritamente para o envio de atualizações institucionais sobre o avanço das fases do projeto.
          </p>
        </div>

        <div>
          <h3 className="font-serif font-bold text-lg text-brand-deep mb-2">
            2. Não Compartilhamento com Terceiros
          </h3>
          <p>
            O Instituto Vida Plena compromete-se a não vender, alugar, ceder ou compartilhar informações pessoais de cadastrados com terceiros para fins comerciais ou publicitários.
          </p>
        </div>

        <div>
          <h3 className="font-serif font-bold text-lg text-brand-deep mb-2">
            3. Proteção da Imagem da Pessoa Idosa
          </h3>
          <p>
            Recusamos qualquer exploração de imagem apelativa, vitimizadora ou não autorizada de pessoas idosas. Todo registro audiovisual no futuro Instituto dependerá de Termo de Consentimento Livre e Esclarecido (TCLE) assinado pelo idoso ou por seu responsável legal.
          </p>
        </div>

        <div>
          <h3 className="font-serif font-bold text-lg text-brand-deep mb-2">
            4. Direitos do Titular de Dados
          </h3>
          <p>
            A qualquer momento, o titular dos dados cadastrados poderá solicitar a alteração, anonimização ou exclusão definitiva do seu cadastro de nossos bancos de dados através dos canais de contato institucionais.
          </p>
        </div>

        <div className="pt-4 border-t border-brand-wood/10 flex items-center gap-3">
          <StatusTag status="validado" label="Conformidade LGPD Garantida" />
        </div>
      </div>
    </div>
  );
}
