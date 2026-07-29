import React from "react";
import Link from "next/link";
import {
  Heart,
  Home as HomeIcon,
  Sun,
  ShieldCheck,
  Users,
  TreePine,
  Coffee,
  Palette,
  Mic,
  BookOpen,
  Flower2,
  ArrowRight,
  CheckCircle2,
  Building2,
  Stethoscope,
  Church,
  Quote,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusTag } from "@/components/StatusTag";
import { MasterplanDiagram } from "@/components/MasterplanDiagram";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO CINEMATOGRÁFICO */}
      <section className="relative bg-gradient-to-b from-brand-deep via-brand-deep to-brand-deepDark text-brand-cream py-20 lg:py-28 overflow-hidden rounded-b-[40px]">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-sage/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texto Hero */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cream/10 border border-brand-gold/30 text-brand-gold text-xs font-semibold backdrop-blur-sm">
                <Sun className="w-4 h-4 text-brand-gold" />
                <span>Projeto Social Cristão de Longa Permanência</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-warmWhite leading-[1.15]">
                Um lugar para <br />
                <span className="text-brand-gold italic">continuar vivendo.</span>
              </h1>

              <p className="text-lg md:text-xl text-brand-cream/90 font-sans leading-relaxed max-w-2xl font-light">
                O Instituto Vida Plena nasce do sonho de construir um lar onde pessoas idosas possam viver com dignidade, segurança, cuidado, fé, vínculos e propósito.
              </p>

              <div className="p-4 rounded-xl bg-brand-deepDark/80 border-l-4 border-brand-gold text-brand-cream/95 text-base italic font-serif shadow-inner max-w-xl">
                &quot;Não queremos construir apenas uma casa de repouso. Queremos construir um verdadeiro lar.&quot;
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  href="#o-sonho"
                  className="px-7 py-3.5 bg-brand-gold hover:bg-amber-400 text-brand-deepDark font-serif font-bold text-base rounded-xl transition-all shadow-gold hover:scale-105 flex items-center gap-2"
                >
                  Conheça este sonho
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/masterplan"
                  className="px-6 py-3.5 bg-brand-cream/10 hover:bg-brand-cream/20 text-brand-cream font-medium text-base rounded-xl border border-brand-cream/20 transition-all flex items-center gap-2"
                >
                  Explore o Masterplan
                </Link>
              </div>

              <div className="pt-2 flex items-center gap-3 text-xs text-brand-cream/70">
                <StatusTag status="estudo" label="Unidade Inicial Proposta: 24 Moradores" />
                <span>|</span>
                <StatusTag status="conceito" label="Arquitetura Térrea Acessível" />
              </div>
            </div>

            {/* Cartão de Destaque da Pousada */}
            <div className="lg:col-span-5">
              <div className="relative bg-brand-deepDark border border-brand-gold/30 rounded-3xl p-8 shadow-2xl space-y-6 text-brand-cream">
                <div className="flex items-center justify-between border-b border-brand-cream/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-gold/20 text-brand-gold">
                      <HomeIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-brand-warmWhite">
                        Conceito de Pousada
                      </h3>
                      <p className="text-xs text-brand-gold font-serif">Ambiente Familiar e Térreo</p>
                    </div>
                  </div>
                  <StatusTag status="conceito" />
                </div>

                <ul className="space-y-3 text-sm text-brand-cream/80">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-1" />
                    <span>Jardim Central com circulação 100% acessível (NBR 9050).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-1" />
                    <span>Ausência de aparência fria ou hospitalar.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-1" />
                    <span>Suítes adaptadas com iluminação natural e vista para a natureza.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-1" />
                    <span>Atendimento em saúde multidisciplinar 24h.</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link
                    href="/como-sera"
                    className="w-full block text-center py-2.5 rounded-lg bg-brand-cream/10 hover:bg-brand-cream/20 text-brand-cream text-xs font-semibold transition-colors border border-brand-cream/15"
                  >
                    Veja Como Será o Lar ➔
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. O SONHO & POR QUE ESTE PROJETO PRECISA EXISTIR */}
      <section id="o-sonho" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="Nossa Origem & Propósito"
              title="O Sonho do Instituto Vida Plena"
              description="Acreditamos que a velhice é uma estação abençoada da vida, repleta de sabedoria, memórias e dignidade."
            />

            <p className="text-brand-charcoal text-base leading-relaxed">
              Em um mundo onde idosos muitas vezes enfrentam a solidão, o isolamento social e a perda de autonomia, o Instituto Vida Plena surge para erguer uma comunidade onde cada pessoa continue a viver com alegria, conforto físico e amparo espiritual.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-brand-warmWhite border border-brand-wood/15 shadow-sm">
                <Heart className="w-6 h-6 text-brand-wood mb-2" />
                <h4 className="font-serif font-bold text-brand-deep text-base">Amor Cristão</h4>
                <p className="text-xs text-brand-charcoal/70 mt-1">Cuidado manifestado em ações concretas de compaixão.</p>
              </div>
              <div className="p-4 rounded-xl bg-brand-warmWhite border border-brand-wood/15 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-brand-wood mb-2" />
                <h4 className="font-serif font-bold text-brand-deep text-base">Respeito à História</h4>
                <p className="text-xs text-brand-charcoal/70 mt-1">Preservação da biografia e identidade de cada idoso.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-brand-sageLight/60 p-8 rounded-3xl border border-brand-sage/20 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-brand-deep">
                Por Que Este Projeto Precisa Existir
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-deep text-brand-gold flex items-center justify-center shrink-0 font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-deep text-base">Combate à Solidão</h4>
                    <p className="text-sm text-brand-charcoal/80">Proporcionar um ambiente de convivência onde os idosos se sintam escutados e pertencentes.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-deep text-brand-gold flex items-center justify-center shrink-0 font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-deep text-base">Segurança em Saúde</h4>
                    <p className="text-sm text-brand-charcoal/80">Acompanhamento contínuo por médicos, enfermeiros, fisioterapeutas e nutricionistas.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-deep text-brand-gold flex items-center justify-center shrink-0 font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-deep text-base">Fortalecimento Familiar</h4>
                    <p className="text-sm text-brand-charcoal/80">Espaços amplos criados para reuniões frequentes entre idosos, seus filhos e netos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. UM LAR, NÃO UMA INSTITUIÇÃO FRIA (JARDIM CENTRAL) */}
      <section className="bg-brand-warmWhite py-20 border-y border-brand-wood/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Arquitetura Humana & Biofílica"
            title="Um lar residencial, não uma instituição fria"
            description="Projetado em torno de um Jardim Central com luz natural, passarerias cobertas, varandas acolhedoras e total acessibilidade."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-wood/15 hover:shadow-card transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-deep text-brand-gold flex items-center justify-center">
                <TreePine className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-brand-deep">Jardim Central</h3>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                O coração verde do Instituto. Espaço seguro para caminhar, banho de sol e encontros sob árvores sombreadas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-wood/15 hover:shadow-card transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-deep text-brand-gold flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-brand-deep">Arquitetura Térrea</h3>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Construção 100% térrea que elimina escadas e degraus, com rampas suaves e barras duplas de apoio integradas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-wood/15 hover:shadow-card transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-deep text-brand-gold flex items-center justify-center">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-brand-deep">Saúde Sem Caráter Hospitalar</h3>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Posto de enfermagem e consultórios dispostos de forma discreta para preservar o clima aconchegante de residência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MASTERPLAN INTERATIVO DA LANDING PAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Zoneamento Espacial"
          title="Como o sonho poderá ganhar forma"
          description="Explore o diagrama conceitual das 8 Zonas Funcionais organizadas ao redor do Jardim Central."
        />

        <MasterplanDiagram />
      </section>

      {/* 5. UMA VIDA INTEIRA IMPORTA */}
      <section className="bg-brand-sageLight/50 py-16 border-y border-brand-sage/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            badge="Preservação de Biografias"
            title="Uma vida inteira importa"
            description="Cada morador trará uma história rica em memórias, lições e conquistas. Nossos espaços foram desenhados para cuidar do presente sem apagar o passado."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-2">
              <Mic className="w-8 h-8 text-brand-deep mb-1" />
              <h3 className="font-serif font-bold text-lg text-brand-deep">Estúdio de Memórias</h3>
              <p className="text-xs text-brand-charcoal/80">Espaço acústico para gravação de depoimentos biográficos em áudio e vídeo.</p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-2">
              <Palette className="w-8 h-8 text-brand-deep mb-1" />
              <h3 className="font-serif font-bold text-lg text-brand-deep">Oficina das Memórias</h3>
              <p className="text-xs text-brand-charcoal/80">Ateliê para pintura, trabalhos manuais e costura terapêutica.</p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-2">
              <Flower2 className="w-8 h-8 text-brand-deep mb-1" />
              <h3 className="font-serif font-bold text-lg text-brand-deep">Jardim das Memórias</h3>
              <p className="text-xs text-brand-charcoal/80">Área verde com árvores comemorativas plantadas em homenagem a histórias de vida.</p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-2">
              <BookOpen className="w-8 h-8 text-brand-deep mb-1" />
              <h3 className="font-serif font-bold text-lg text-brand-deep">Biblioteca Viva</h3>
              <p className="text-xs text-brand-charcoal/80">Canto de leitura para compartilhamento de livros e rodas de histórias.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NÃO SERÁ UM LUGAR ISOLADO DA VIDA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Integração Comunitária"
          title="Não será um lugar isolado da vida"
          description="O Instituto promoverá a convivência constante com familiares, igrejas, voluntários e crianças."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <Users className="w-8 h-8 text-brand-deep" />
            <h3 className="font-serif font-bold text-xl text-brand-deep">Praça da Família</h3>
            <p className="text-sm text-brand-charcoal/80">
              Área sob pergolados criada para recepção de netos, filhos e visitas com conforto e alegria.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <Church className="w-8 h-8 text-brand-deep" />
            <h3 className="font-serif font-bold text-xl text-brand-deep">Igrejas Parceiras</h3>
            <p className="text-sm text-brand-charcoal/80">
              Apoio espiritual e visitas devocionais organizadas sob protocolos de respeito e acolhimento.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <Coffee className="w-8 h-8 text-brand-deep" />
            <h3 className="font-serif font-bold text-xl text-brand-deep">Café Vida Plena</h3>
            <p className="text-sm text-brand-charcoal/80">
              Canto especial de convivência para encontros informais e cafés da tarde com a comunidade.
            </p>
          </div>
        </div>
      </section>

      {/* 7. MENSAGEM DE QUEM SONHOU ESTE PROJETO (CARTA DO IDEALIZADOR) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep text-brand-cream p-8 md:p-12 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
          <Quote className="w-16 h-16 text-brand-gold/20 absolute -top-4 -right-4" />
          <span className="text-xs font-bold text-brand-gold uppercase tracking-wider bg-brand-cream/10 px-3 py-1 rounded-full">
            Carta do Conselho Idealizador
          </span>
          <h3 className="font-serif font-bold text-3xl text-brand-warmWhite">
            Uma mensagem de quem sonhou este projeto
          </h3>
          <p className="text-brand-cream/90 font-light text-base leading-relaxed italic">
            &quot;O Instituto Vida Plena não nasceu de um plano comercial, mas da convicção cristã de que as pessoas idosas merecem envelhecer com dignidade, amparo e amor em ação.&quot;
          </p>
          <div className="pt-2">
            <Link
              href="/parceiros"
              className="inline-flex items-center gap-2 text-brand-gold hover:underline font-semibold text-sm"
            >
              Conheça a Rede de Parceiros e Colaboradores ➔
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CONVITE FINAL E NAVEGAÇÃO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="bg-brand-sageLight/60 border border-brand-sage/20 p-8 md:p-12 rounded-3xl space-y-4">
          <h3 className="text-3xl font-serif font-bold text-brand-deep">
            Acompanhe a Evolução do Projeto
          </h3>
          <p className="text-sm text-brand-charcoal/80 max-w-xl mx-auto">
            Veja as etapas cumpridas e os próximos passos do planejamento institucional.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/etapas"
              className="px-6 py-3.5 bg-brand-deep text-brand-cream font-bold text-sm rounded-xl hover:bg-brand-deepDark transition-colors"
            >
              Ver Linha do Tempo em 14 Etapas
            </Link>
            <Link
              href="/transparencia"
              className="px-6 py-3.5 bg-brand-warmWhite text-brand-deep border border-brand-wood/20 font-bold text-sm rounded-xl hover:bg-brand-cream transition-colors"
            >
              Painel de Governança &amp; Transparência
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
