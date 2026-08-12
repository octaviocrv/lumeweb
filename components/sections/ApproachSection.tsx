"use client";

import { motion } from "framer-motion";
import {
  Atom,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Braces,
  CalendarClock,
  Check,
  CheckCheck,
  CircleCheck,
  ClipboardCheck,
  ClipboardList,
  CloudUpload,
  CodeXml,
  Crown,
  Eye,
  Gauge,
  GitBranch,
  Globe,
  Info,
  MessageCircle,
  Palette,
  Plus,
  RefreshCw,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  Wind,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const WHATSAPP = "https://wa.me/5531989184698?text=";

const display = {
  fontFamily: "var(--font-satoshi), var(--font-inter-tight), sans-serif",
};

const micro = { fontFamily: "var(--font-poppins), sans-serif" };

const muted = {
  color: "color-mix(in oklab,var(--color-dark_black) 60%,transparent)",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: Math.min(i, 4) * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const viewport = { once: true, margin: "-60px" };

const card =
  "rounded-2xl border border-[#0a0a0f]/10 bg-white/60 dark:border-white/10 dark:bg-white/[0.03]";

/* ------------------------------ Dados ------------------------------ */

const badges = [
  { icon: BadgeCheck, label: "Sem mensalidade obrigatória", accent: "emerald" },
  { icon: ShieldCheck, label: "Pagamento único · O site é seu", accent: "brand" },
  // { icon: Zap, label: "Pix com 10% de desconto", accent: "brand" },
] as const;

const values: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Eye,
    title: "Transparência",
    text: "Você acompanha cada etapa do desenvolvimento do seu projeto.",
  },
  {
    icon: Rocket,
    title: "Agilidade",
    text: "Processos otimizados para entregas rápidas sem perder qualidade.",
  },
  {
    icon: Star,
    title: "Qualidade",
    text: "Código limpo, design moderno e tecnologias de ponta.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento direto comigo",
    text: "Você fala comigo pelo WhatsApp, sem intermediários e sem burocracia.",
  },
];

const howItWorks = [
  {
    title: "Você me manda uma referência",
    text: "Normalmente peço um site do seu segmento que você gosta, pode ser de um concorrente, uma inspiração, algo que te chamou atenção. Isso me ajuda a entender o tom que você quer transmitir.",
  },
  {
    title: "Criamos juntos",
    text: "Você acompanha o processo comigo, direto pelo WhatsApp. Sem intermediários, sem burocracia.",
  },
  {
    title: "Ajustes até ficar perfeito",
    text: "Cada plano inclui até 3 rodadas de alterações antes de publicar. Você revisa, comenta, e eu ajusto até você aprovar.",
  },
];

const steps: {
  icon: LucideIcon;
  title: string;
  when: string;
  text: string;
  items: string[];
}[] = [
  {
    icon: ClipboardList,
    title: "Briefing e Descoberta",
    when: "Início",
    text: "Entendo sua visão, seus objetivos e suas necessidades através de um briefing simples e direto.",
    items: [
      "Conversa inicial para alinhamento",
      "Análise da referência que você me enviar",
      "Definição de objetivos do projeto",
      "Mapeamento de funcionalidades necessárias",
    ],
  },
  {
    icon: Palette,
    title: "Design e Prototipação",
    when: "Etapa criativa",
    text: "Crio o design completo do site com protótipo navegável antes de escrever qualquer linha de código.",
    items: [
      "Design sob medida para o seu negócio",
      "Layout de todas as páginas do plano",
      "Protótipo interativo clicável",
      "Estrutura e organização do conteúdo",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Validação e Feedback",
    when: "Depende de você",
    text: "Você analisa o protótipo e me manda o feedback para ajustes antes do desenvolvimento começar.",
    items: [
      "Apresentação do protótipo completo",
      "Rodada de feedback e sugestões",
      "Ajustes e refinamentos no design",
      "Aprovação final para desenvolvimento",
    ],
  },
  {
    icon: CodeXml,
    title: "Desenvolvimento",
    when: "Execução",
    text: "Transformo o protótipo aprovado em código, com o site funcionando de verdade em qualquer tela.",
    items: [
      "Desenvolvimento front-end responsivo",
      "Integrações do plano contratado",
      "Otimização de performance",
      "Testes em celular, tablet e computador",
    ],
  },
  {
    icon: CheckCheck,
    title: "Revisão Final e Ajustes",
    when: "Até 3 rodadas",
    text: "Você testa o site desenvolvido e eu faço os últimos ajustes até estar do seu jeito.",
    items: [
      "Apresentação do site desenvolvido",
      "Teste completo de funcionalidades",
      "Ajustes finais de conteúdo",
      "Validação final antes do lançamento",
    ],
  },
  {
    icon: Rocket,
    title: "Lançamento",
    when: "Entrega",
    text: "Publico seu site no ar e garanto que está tudo funcionando perfeitamente.",
    items: [
      "Auxílio na configuração de domínio e hospedagem",
      "Deploy e publicação do site",
      "Testes finais pós publicação",
      "Entrega de acessos e documentação",
    ],
  },
];

type Plan = {
  name: string;
  price: string;
  installments?: string;
  ideal: string;
  features: { text: string; emphasized?: boolean; included?: boolean }[];
  cta: string;
  message: string;
  icon: LucideIcon;
  highlight?: boolean;
  tag?: string;
};

const plans: Plan[] = [
  {
    name: "Essencial",
    price: "R$ 497",
    // installments: "Em até 6x de R$ 89 · Pix com 10% de desconto",
    ideal: "Pra quem quer só um site simples pra começar a existir na internet.",
    icon: Zap,
    features: [
      { text: "Landing page de 1 página baseada em modelo profissional" },
      { text: "Personalizado com sua marca, cores e logo" },
      { text: "Conteúdo modelo pronto pra sua área (sem precisar mandar nada)" },
      { text: "Adaptado para celular, tablet e computador" },
      { text: "Botão de WhatsApp" },
      { text: "Links pro seu Instagram e Google Maps" },
      { text: "SEO básico configurado" },
      { text: "Site sob medida com até 4 páginas", included: false },
      { text: "Google Analytics configurado", included: false },
      { text: "Entrega em até 5 dias" },
      { text: "1 rodada de alterações antes de publicar" },
      { text: "Suporte de 7 dias após publicação" },
    ],
    cta: "Quero o Essencial",
    message: "Ola!%20Quero%20o%20plano%20Essencial%20(R%24%20497).",
  },
  {
    name: "Profissional",
    price: "R$ 897",
    // installments: "Em até 10x de R$ 89 · Pix com 10% de desconto",
    ideal: "Pra quem quer um site sob medida que trabalha pra atrair cliente todo dia.",
    icon: Sparkles,
    highlight: true,
    tag: "⭐ Mais escolhido",
    features: [
      { text: "Site sob medida, feito do zero pro seu negócio (até 4 páginas)", emphasized: true },
      { text: "Design 100% personalizado, pensado pra sua área", emphasized: true },
      { text: "Copywriting escrito por mim, focado em converter visitas em contato", emphasized: true },
      { text: "Orientação de fotos ou uso das suas", emphasized: true },
      { text: "Adaptado para todos os dispositivos", emphasized: true },
      { text: "Botão flutuante de WhatsApp em todas as páginas", emphasized: true },
      { text: "Mapa do Google embutido + link do Instagram", emphasized: true },
      { text: "Google Analytics configurado", emphasized: true },
      { text: "SEO on-page otimizado", emphasized: true },
      { text: "Entrega em até 10 dias", emphasized: true },
      { text: "Até 3 rodadas de alterações antes de publicar", emphasized: true },
      { text: "Suporte de 30 dias após publicação", emphasized: true },
      { text: "Blog com posts iniciais de SEO", included: false },
      { text: "Meta Pixel para campanhas pagas", included: false },
    ],
    cta: "Quero o Profissional",
    message: "Ola!%20Quero%20o%20plano%20Profissional%20(R%24%20897).",
  },
  {
    name: "Completo",
    price: "R$ 1.497",
    // installments: "Em até 12x de R$ 125 · Pix com 10% de desconto",
    ideal: "Pra empresas que querem virar referência e ter um site pronto pra escalar com anúncios.",
    icon: Crown,
    features: [
      { text: "Tudo do Profissional, com até 8 páginas + blog" },
      { text: "3 posts de blog iniciais escritos (base de SEO)" },
      { text: "Google Meu Negócio otimizado (perfil, fotos, categorias)" },
      { text: "Meta Pixel instalado (site pronto pra rodar anúncios no Instagram e Facebook)" },
      { text: "Copywriting estratégico ampliado pra todas as páginas" },
      {
        text: "Revisão estratégica em 60 dias (call de 30 min pra ajustar o que não tá convertendo)",
        emphasized: true,
      },
      { text: "Entrega em até 15 dias" },
      { text: "Até 3 rodadas de alterações antes de publicar" },
      { text: "Suporte de 30 dias após publicação" },
    ],
    cta: "Quero o Completo",
    message: "Ola!%20Quero%20o%20plano%20Completo%20(R%24%201.497).",
  },
];

const deadlines = [
  { plan: "Essencial", time: "até 5 dias" },
  { plan: "Profissional", time: "até 10 dias" },
  { plan: "Completo", time: "até 15 dias" },
];

const maintenance = [
  "Atualizações e ajustes de conteúdo (1 por mês)",
  "Backup mensal do site",
  "Suporte prioritário no WhatsApp",
  "Monitoramento de funcionamento",
];

const technologies: {
  name: string;
  tag: string;
  icon: LucideIcon;
  text: string;
  perks: string[];
}[] = [
  {
    name: "Next.js",
    tag: "Framework",
    icon: Server,
    text: "Framework React usado para construir sites rápidos e otimizados para SEO.",
    perks: ["Performance superior", "SEO otimizado", "Carregamento rápido"],
  },
  {
    name: "React",
    tag: "Biblioteca",
    icon: Atom,
    text: "Biblioteca JavaScript usada para criar interfaces modernas e interativas.",
    perks: ["Interface dinâmica", "Experiência fluida", "Manutenção fácil"],
  },
  {
    name: "TypeScript",
    tag: "Linguagem",
    icon: Braces,
    text: "Linguagem que garante código mais seguro, com menos bugs e melhor manutenção.",
    perks: ["Menos bugs", "Código robusto", "Escalabilidade"],
  },
  {
    name: "Tailwind CSS",
    tag: "Estilização",
    icon: Wind,
    text: "Framework CSS que garante design consistente e responsivo.",
    perks: ["Design moderno", "Totalmente responsivo", "Customizável"],
  },
];

const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Gauge,
    title: "Performance excepcional",
    text: "Sites que carregam em menos de 2 segundos, melhorando conversões e experiência do usuário.",
  },
  {
    icon: Search,
    title: "SEO otimizado",
    text: "Tecnologias que ajudam seu site a ranquear melhor no Google e outros mecanismos de busca.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança avançada",
    text: "Código moderno e seguro, protegendo seu site e os dados dos seus clientes.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    text: "Sites que funcionam perfeitamente em qualquer dispositivo, de smartphones a desktops.",
  },
  {
    icon: TrendingUp,
    title: "Escalável",
    text: "Seu site cresce junto com seu negócio, sem necessidade de reconstrução.",
  },
  {
    icon: RefreshCw,
    title: "Sempre atualizado",
    text: "Uso tecnologias recentes, mantidas pelas maiores empresas do mundo.",
  },
];

const extraTools: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: GitBranch,
    title: "Controle de versão",
    text: "Git e GitHub para gerenciar todo o código do seu projeto.",
  },
  {
    icon: CloudUpload,
    title: "Hospedagem premium",
    text: "Publico na Hostinger, Vercel ou onde você já tiver conta.",
  },
  {
    icon: BarChart3,
    title: "Analytics e métricas",
    text: "Google Analytics para acompanhar os resultados do seu site.",
  },
  {
    icon: ShieldCheck,
    title: "Boas práticas de segurança",
    text: "Código moderno, dependências atualizadas e HTTPS ativo.",
  },
];

/* --------------------------- Componente --------------------------- */

export default function ApproachSection() {
  return (
    <section id="processo" className="relative bg-[var(--background)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[460px]"
        style={{
          background:
            "radial-gradient(700px 360px at 80% 20%, rgba(35,35,255,0.08), transparent 65%)",
        }}
      />

      <div className="relative z-10 py-14 md:py-20 2xl:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12">
          {/* ---------- Cabeçalho da seção ---------- */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col items-center gap-4 text-center"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full border border-[#0a0a0f]/10 bg-white/60 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[#0a0a0f]/60 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/60"
              style={micro}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#2323FF] shadow-[0_0_0_3px_rgba(35,35,255,0.18)]" />
              COMO TRABALHAMOS
            </span>

            <h2
              className="max-w-[900px] text-[2rem] font-[700] leading-[1.12] text-[#0a0a0f] dark:text-white sm:text-[2.6rem] sm:leading-tight lg:text-5xl"
              style={display}
            >
              Minha abordagem de trabalho
            </h2>

            <p
              className="max-w-[760px] text-[16px] leading-7 sm:text-[17px]"
              style={{ ...display, ...muted }}
            >
              Metodologia, etapas do projeto, tecnologias e planos: tudo
              explicado com transparência do início ao fim.
            </p>

            {/* Selos de confiança */}
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2.5">
              {badges.map(({ icon: Icon, label, accent }) => (
                <span
                  key={label}
                  className={
                    accent === "emerald"
                      ? "inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-2 text-[13px] font-medium text-emerald-700 dark:text-emerald-400"
                      : "inline-flex items-center gap-2 rounded-full border border-[#2323FF]/20 bg-[#2323FF]/[0.07] px-3.5 py-2 text-[13px] font-medium text-[#2323FF]"
                  }
                  style={micro}
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ============ SUBSEÇÃO 1 — Como trabalhamos ============ */}
          <div id="visao-geral" className="mt-12 scroll-m-28 md:mt-16 md:scroll-m-[130px]">
            <SubHeading
              title="Como trabalhamos"
              text="Criar um site deve ser uma experiência simples e sem complicação. Meu processo foi desenhado para transformar sua ideia em realidade digital, com cada etapa clara, eficiente e focada em resultado."
            />

            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className={`${card} mt-6 p-6 md:p-8`}
            >
              <h4
                className="text-xl font-[700] tracking-tight text-[#0a0a0f] dark:text-white"
                style={display}
              >
                Do primeiro rascunho ao site publicado
              </h4>
              <p className="mt-4 text-[15px] leading-7 sm:text-[16px]" style={{ ...display, ...muted }}>
                Do briefing ao site no ar, você sabe exatamente em que ponto o
                projeto está. Sem etapas invisíveis, sem fidelidade e sem
                surpresa no prazo. A execução técnica e o design ficam comigo,
                as decisões continuam com você.
              </p>

              <div className="mt-6 grid gap-5 border-t border-[#0a0a0f]/10 pt-6 dark:border-white/10 md:grid-cols-3">
                {howItWorks.map(({ title, text }, i) => (
                  <div key={title}>
                    <span
                      className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2323FF]/10 text-sm font-bold text-[#2323FF]"
                      style={micro}
                    >
                      {i + 1}
                    </span>
                    <p
                      className="text-[15px] font-semibold text-[#0a0a0f] dark:text-white"
                      style={display}
                    >
                      {title}
                    </p>
                    <p className="mt-1.5 text-sm leading-6" style={{ ...display, ...muted }}>
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {values.map(({ icon: Icon, title, text }, i) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  className={`${card} flex items-start gap-4 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2323FF]/40`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2323FF]/10">
                    <Icon className="h-5 w-5 text-[#2323FF]" strokeWidth={2} />
                  </span>
                  <div>
                    <h4
                      className="text-lg font-[700] tracking-tight text-[#0a0a0f] dark:text-white"
                      style={display}
                    >
                      {title}
                    </h4>
                    <p className="mt-1 text-sm leading-6" style={{ ...display, ...muted }}>
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ============ SUBSEÇÃO 2 — Etapas ============ */}
          <div id="etapas" className="mt-14 scroll-m-28 md:mt-20 md:scroll-m-[130px]">
            <SubHeading
              title="Etapas do projeto"
              text="O processo é estruturado em 6 etapas claras, garantindo transparência e qualidade em cada fase do desenvolvimento."
            />

            <div className="mt-8 flex flex-col gap-5">
              {steps.map(({ icon: Icon, title, when, text, items }, i) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  className={`${card} relative p-6 transition-all duration-300 hover:-translate-y-0.5 md:p-8`}
                >
                  <span className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#2323FF] text-sm font-bold text-white">
                    {i + 1}
                  </span>

                  <div className="flex flex-col gap-6 md:flex-row">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#2323FF]/10">
                      <Icon className="h-6 w-6 text-[#2323FF]" strokeWidth={2} />
                    </span>

                    <div className="flex-1">
                      <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div>
                          <p className="text-sm font-medium text-[#2323FF]" style={micro}>
                            Etapa {String(i + 1).padStart(2, "0")}
                          </p>
                          <h4
                            className="text-xl font-[700] tracking-tight text-[#0a0a0f] dark:text-white"
                            style={display}
                          >
                            {title}
                          </h4>
                        </div>
                        <span
                          className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#0a0a0f]/[0.04] px-3 py-1 text-sm font-medium text-[#0a0a0f]/70 dark:bg-white/5 dark:text-white/70"
                          style={micro}
                        >
                          {when}
                        </span>
                      </div>

                      <p className="mb-4 text-[15px] leading-7" style={{ ...display, ...muted }}>
                        {text}
                      </p>

                      <div className="grid gap-2 md:grid-cols-2">
                        {items.map((entry) => (
                          <div key={entry} className="flex items-start gap-2">
                            <CircleCheck
                              className="mt-0.5 h-4 w-4 shrink-0 text-[#2323FF]"
                              strokeWidth={2}
                            />
                            <span className="text-sm" style={{ ...display, ...muted }}>
                              {entry}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Prazo por plano */}
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="mt-6 rounded-2xl bg-[#0a0a0f]/[0.03] p-6 dark:bg-white/5 md:p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <CalendarClock className="h-6 w-6 text-[#2323FF]" strokeWidth={2} />
                <h4
                  className="text-lg font-[700] tracking-tight text-[#0a0a0f] dark:text-white"
                  style={display}
                >
                  Prazo de entrega por plano
                </h4>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {deadlines.map(({ plan, time }) => (
                  <div
                    key={plan}
                    className="rounded-xl bg-white/70 px-4 py-3 dark:bg-white/5"
                  >
                    <p
                      className="text-sm font-semibold text-[#0a0a0f] dark:text-white"
                      style={display}
                    >
                      {plan}
                    </p>
                    <p className="mt-0.5 text-sm" style={{ ...display, ...muted }}>
                      Entrega em {time}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm leading-6" style={{ ...display, ...muted }}>
                As seis etapas continuam existindo. Elas só não esperam em fila
                entre uma e outra. O que estica o prazo não é a complexidade do
                site, é material pendente e feedback parado.
              </p>

              <div className="mt-4 flex items-start gap-2 border-t border-[#0a0a0f]/10 pt-4 dark:border-white/10">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#2323FF]" strokeWidth={2} />
                <p className="text-sm leading-6" style={{ ...display, ...muted }}>
                  <strong className="font-semibold text-[#0a0a0f] dark:text-white">
                    Importante:
                  </strong>{" "}
                  a etapa 3 (validação e feedback) depende da sua
                  disponibilidade para análise. Quanto mais rápido o retorno,
                  mais rápido seguimos para o desenvolvimento.
                </p>
              </div>
            </motion.div>

            {/* Garantia */}
            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="mt-5 grid gap-5 md:grid-cols-2"
            >
              <div className="flex items-start gap-4 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                  <BadgeCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                </span>
                <div>
                  <h4
                    className="text-lg font-[700] tracking-tight text-[#0a0a0f] dark:text-white"
                    style={display}
                  >
                    Garantia de satisfação
                  </h4>
                  <p className="mt-1 text-sm leading-6" style={{ ...display, ...muted }}>
                    Todo plano inclui até 3 rodadas de alterações antes de
                    publicar. Você revisa, comenta, e eu ajusto até aprovar.
                  </p>
                </div>
              </div>

              <div className={`${card} flex items-start gap-4 p-6`}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2323FF]/10">
                  <MessageCircle className="h-5 w-5 text-[#2323FF]" strokeWidth={2} />
                </span>
                <div>
                  <h4
                    className="text-lg font-[700] tracking-tight text-[#0a0a0f] dark:text-white"
                    style={display}
                  >
                    Atendimento direto comigo
                  </h4>
                  <p className="mt-1 text-sm leading-6" style={{ ...display, ...muted }}>
                    Sem intermediários e sem ticket. Do orçamento à publicação,
                    você fala comigo pelo WhatsApp.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ============ SUBSEÇÃO 3 — Planos ============ */}
          <div id="planos" className="mt-14 scroll-m-28 md:mt-20 md:scroll-m-[130px]">
            <SubHeading
              title="Planos, garantias e suporte"
              text="Você paga uma vez e o site é seu pra sempre."
            />

            <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.1fr_1fr]">
              {plans.map((plan, i) => (
                <PlanCard key={plan.name} plan={plan} index={i} />
              ))}
            </div>

            {/* Adicionais opcionais */}
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className={`${card} mt-6 p-6 md:p-8`}
            >
              <h4
                className="mb-5 flex items-center gap-2 text-lg font-[700] tracking-tight text-[#0a0a0f] dark:text-white"
                style={display}
              >
                <Plus className="h-5 w-5 text-[#2323FF]" strokeWidth={2} />
                Adicionais opcionais
              </h4>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl bg-[#0a0a0f]/[0.03] p-4 dark:bg-white/5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2323FF]/10">
                    <Plus className="h-4 w-4 text-[#2323FF]" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0a0a0f] dark:text-white" style={display}>
                      Página extra: R$ 79 cada
                    </p>
                    <p className="mt-1 text-xs leading-5" style={{ ...display, ...muted }}>
                      Precisa de uma página além do que o plano inclui? É só
                      somar ao orçamento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-[#0a0a0f]/[0.03] p-4 dark:bg-white/5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2323FF]/10">
                    <Wrench className="h-4 w-4 text-[#2323FF]" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0a0a0f] dark:text-white" style={display}>
                      Manutenção: R$ 49/mês
                    </p>
                    <p className="mt-1 text-xs leading-5" style={{ ...display, ...muted }}>
                      Totalmente opcional, sem fidelidade. Detalhes logo abaixo.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Domínio e hospedagem */}
            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className={`${card} mt-6 p-6 md:p-8`}
            >
              <h4
                className="mb-5 flex items-center gap-2 text-lg font-[700] tracking-tight text-[#0a0a0f] dark:text-white"
                style={display}
              >
                <Globe className="h-5 w-5 text-[#2323FF]" strokeWidth={2} />
                Domínio e hospedagem: como funciona
              </h4>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-[#0a0a0f]/[0.03] p-4 dark:bg-white/5">
                  <div className="mb-2 flex items-center gap-2">
                    <Globe className="h-4 w-4 text-[#2323FF]" strokeWidth={2} />
                    <p className="text-sm font-semibold text-[#0a0a0f] dark:text-white" style={display}>
                      Domínio (www.seusite.com.br)
                    </p>
                  </div>
                  <p className="text-sm leading-6" style={{ ...display, ...muted }}>
                    Se quiser, te ajudo a escolher e registrar o domínio ideal
                    pro seu negócio (custa em média R$ 40/ano no Registro.br). Se
                    preferir pesquisar e comprar por conta própria, tudo bem
                    também. Só me passa depois que estiver registrado.
                  </p>
                </div>

                <div className="rounded-xl bg-[#0a0a0f]/[0.03] p-4 dark:bg-white/5">
                  <div className="mb-2 flex items-center gap-2">
                    <Server className="h-4 w-4 text-[#2323FF]" strokeWidth={2} />
                    <p className="text-sm font-semibold text-[#0a0a0f] dark:text-white" style={display}>
                      Hospedagem
                    </p>
                  </div>
                  <p className="text-sm leading-6" style={{ ...display, ...muted }}>
                    Trabalho com a Hostinger, que oferece ótima performance e
                    preço acessível. Como sou parceiro, consigo repassar desconto
                    pra você. Sai por cerca de R$ 15 a R$ 25/mês dependendo do
                    plano (pagos direto na Hostinger, sem passar por mim).
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6" style={{ ...display, ...muted }}>
                Se você já tem hospedagem em outro lugar, também consigo publicar
                seu site lá, sem problema.
              </p>
            </motion.div>

            {/* Manutenção opcional */}
            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className={`${card} mt-6 p-6 md:p-8`}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h4
                  className="flex items-center gap-2 text-lg font-[700] tracking-tight text-[#0a0a0f] dark:text-white"
                  style={display}
                >
                  <Wrench className="h-5 w-5 text-[#2323FF]" strokeWidth={2} />
                  Manutenção opcional
                </h4>
                <span
                  className="inline-flex w-fit items-center rounded-full bg-[#2323FF]/[0.07] px-3 py-1 text-sm font-semibold text-[#2323FF]"
                  style={micro}
                >
                  R$ 49/mês
                </span>
              </div>

              <p className="mt-4 text-[15px] leading-7" style={{ ...display, ...muted }}>
                Se quiser tranquilidade total, cuido de tudo por você:
              </p>

              <div className="mt-4 grid gap-2 md:grid-cols-2">
                {maintenance.map((entry) => (
                  <div key={entry} className="flex items-start gap-2">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#2323FF]" strokeWidth={2} />
                    <span className="text-sm" style={{ ...display, ...muted }}>
                      {entry}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-2 border-t border-[#0a0a0f]/10 pt-4 dark:border-white/10">
                <p
                  className="text-sm font-semibold text-emerald-600 dark:text-emerald-400"
                  style={display}
                >
                  Sem fidelidade. Cancele quando quiser.
                </p>
                <p className="text-sm leading-6" style={{ ...display, ...muted }}>
                  Se preferir cuidar por conta própria depois da entrega, também
                  tudo certo. Te deixo tudo documentado.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ============ SUBSEÇÃO 4 — Tecnologias ============ */}
          <div id="tecnologias" className="mt-14 scroll-m-28 md:mt-20 md:scroll-m-[130px]">
            <SubHeading
              title="Tecnologias e ferramentas"
              text="Utilizo tecnologias modernas e confiáveis do mercado para entregar sites de alta performance e qualidade."
            />

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {technologies.map(({ name, tag, icon: Icon, text, perks }, i) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  className={`${card} p-6 transition-all duration-300 hover:-translate-y-0.5`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2323FF]/10 text-[#2323FF]"
                      aria-hidden
                    >
                      <Icon className="h-6 w-6" strokeWidth={2.1} />
                    </span>
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <h4
                          className="text-lg font-[700] tracking-tight text-[#0a0a0f] dark:text-white"
                          style={display}
                        >
                          {name}
                        </h4>
                        <span
                          className="rounded-full bg-[#2323FF]/10 px-2 py-0.5 text-xs font-medium text-[#2323FF] dark:bg-[#2323FF]/20"
                          style={micro}
                        >
                          {tag}
                        </span>
                      </div>
                      <p className="mb-3 text-sm leading-6" style={{ ...display, ...muted }}>
                        {text}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {perks.map((perk) => (
                          <span
                            key={perk}
                            className="inline-flex items-center gap-1 rounded-full bg-[#0a0a0f]/[0.04] px-3 py-1 text-xs font-medium text-[#0a0a0f]/70 dark:bg-white/5 dark:text-white/70"
                            style={micro}
                          >
                            <CircleCheck className="h-3.5 w-3.5 text-[#2323FF]" strokeWidth={2} />
                            {perk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className={`${card} mt-6 p-6 md:p-8`}
            >
              <h4
                className="text-xl font-[700] tracking-tight text-[#0a0a0f] dark:text-white"
                style={display}
              >
                Por que uso tecnologia moderna
              </h4>
              <p className="mb-6 mt-3 text-[15px] leading-7" style={{ ...display, ...muted }}>
                Investir nas tecnologias certas se traduz em resultado real para
                o seu negócio:
              </p>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {benefits.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="flex items-start gap-3 rounded-xl bg-[#0a0a0f]/[0.03] p-4 dark:bg-white/5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2323FF]/10">
                      <Icon className="h-4 w-4 text-[#2323FF]" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#0a0a0f] dark:text-white" style={display}>
                        {title}
                      </p>
                      <p className="mt-1 text-xs leading-5" style={{ ...display, ...muted }}>
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className={`${card} mt-6 p-6 md:p-8`}
            >
              <h4
                className="mb-5 flex items-center gap-2 text-lg font-[700] tracking-tight text-[#0a0a0f] dark:text-white"
                style={display}
              >
                <Wrench className="h-5 w-5 text-[#2323FF]" strokeWidth={2} />
                Ferramentas adicionais que utilizo
              </h4>

              <div className="grid gap-4 md:grid-cols-2">
                {extraTools.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="flex items-center gap-3 rounded-xl bg-[#0a0a0f]/[0.03] p-3 dark:bg-white/5"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-[#2323FF]" strokeWidth={2} />
                    <div>
                      <p className="text-sm font-semibold text-[#0a0a0f] dark:text-white" style={display}>
                        {title}
                      </p>
                      <p className="text-xs leading-5" style={{ ...display, ...muted }}>
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="mt-6 rounded-2xl bg-[#0a0a0f] p-6 text-center dark:bg-white/5 md:p-8"
            >
              <Info className="mx-auto mb-3 h-8 w-8 text-[#7c7cff]" strokeWidth={2} />
              <h4 className="text-lg font-[700] tracking-tight text-white" style={display}>
                Tecnologia não é complicação
              </h4>
              <p
                className="mx-auto mt-2 max-w-2xl text-[15px] leading-7 text-white/70"
                style={display}
              >
                Você não precisa entender de tecnologia. Eu cuido de todos os
                detalhes técnicos enquanto você foca no que importa: fazer seu
                negócio crescer.
              </p>
            </motion.div>
          </div>

          {/* ---------- CTA final ---------- */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-8 flex flex-col items-center gap-6 rounded-[28px] bg-[#2323FF] p-6 text-center shadow-[0_24px_48px_-24px_rgba(73,40,253,0.55)] md:flex-row md:justify-between md:p-8 md:text-left"
          >
            <div>
              <h4 className="text-xl font-[700] tracking-tight text-white" style={display}>
                Pronto para começar seu projeto?
              </h4>
              <p className="mt-2 text-white/75" style={display}>
                Me conta sobre o seu negócio e eu te envio uma proposta
                personalizada em até 24 horas.
              </p>
            </div>

            <a
              href={`${WHATSAPP}Ola!%20Quero%20um%20orcamento%20para%20o%20meu%20site.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-12 w-full items-center justify-between gap-3 rounded-full bg-white py-2 pl-5 pr-2 font-medium text-[#2323FF] transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-0 active:scale-[0.98] sm:w-auto"
            >
              <span>Falar direto comigo</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2323FF] text-white transition-transform duration-200 ease-out group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Auxiliares --------------------------- */

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const Icon = plan.icon;

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={`relative flex flex-col rounded-2xl border transition-all duration-300 ${
        plan.highlight
          ? "z-10 border-[#2323FF] bg-white px-6 py-8 shadow-[0_30px_60px_-28px_rgba(73,40,253,0.56)] hover:scale-[1.01] md:-translate-y-5 md:px-7 md:py-9 md:hover:-translate-y-6 dark:bg-white/[0.06]"
          : "border-[#0a0a0f]/10 bg-white/50 px-6 py-6 hover:-translate-y-0.5 md:px-7 md:py-7 dark:border-white/10 dark:bg-white/[0.025]"
      }`}
    >
      {plan.tag && (
        <span
          className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2323FF] px-4 py-1.5 text-[11px] font-bold tracking-[0.02em] text-white shadow-[0_10px_20px_-14px_rgba(35,35,255,0.65)]"
          style={micro}
        >
          {plan.tag}
        </span>
      )}

      <div className="flex items-center gap-2.5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2323FF]/10">
          <Icon className="h-5 w-5 text-[#2323FF]" strokeWidth={2} />
        </span>
        <h4
          className="text-xl font-[700] tracking-tight text-[#0a0a0f] dark:text-white"
          style={display}
        >
          {plan.name}
        </h4>
      </div>

      <div className="mt-5">
        <div
          className="text-[2.4rem] font-[900] leading-none tracking-tight text-[#0a0a0f] dark:text-white"
          style={display}
        >
          {plan.price}
        </div>
        {plan.installments && (
          <p className="mt-2 text-[13px] leading-5" style={{ ...micro, ...muted }}>
            {plan.installments}
          </p>
        )}
      </div>

      <p className="mt-5 text-sm italic leading-6" style={{ ...display, ...muted }}>
        {plan.ideal}
      </p>

      <div className="mt-5 border-t border-[#0a0a0f]/10 pt-5 dark:border-white/10">
        <p
          className="mb-3 text-[11px] uppercase tracking-[0.14em] text-[#0a0a0f]/45 dark:text-white/45"
          style={micro}
        >
          O que está incluso
        </p>
        <div className="flex flex-col gap-2.5">
          {plan.features.map((feature, i) => {
            const included = feature.included !== false;
            const isProfessionalFocus = plan.highlight && included;
            const isCompleteIncluded = plan.name === "Completo" && included;
            const useStrongText = isProfessionalFocus || feature.emphasized;

            return (
              <div key={`${plan.name}-${i}`} className="flex items-start gap-2">
                <span
                  className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                    included
                      ? "bg-[#2323FF]/10"
                      : "bg-[#0a0a0f]/[0.06] text-[#0a0a0f]/45 dark:bg-white/10 dark:text-white/45"
                  }`}
                  aria-hidden
                >
                  {included ? (
                    <Check className="h-3 w-3 text-[#2323FF]" strokeWidth={3} />
                  ) : (
                    <X className="h-3 w-3 text-[#0a0a0f]/55 dark:text-white/55" strokeWidth={2.4} />
                  )}
                </span>
                <span
                  className={`text-sm leading-6 ${
                    useStrongText
                      ? "font-semibold text-[#0a0a0f] dark:text-white"
                      : isCompleteIncluded
                        ? "text-[#0a0a0f]/85 dark:text-white/85"
                        : ""
                  }`}
                  style={
                    !included
                      ? { ...display, ...muted, opacity: 0.65 }
                      : useStrongText || isCompleteIncluded
                        ? display
                        : { ...display, ...muted }
                  }
                >
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <a
        href={`${WHATSAPP}${plan.message}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`group mt-7 inline-flex min-h-12 w-full items-center justify-between gap-3 rounded-full py-2 pl-5 pr-2 font-medium transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-0 active:scale-[0.98] ${
          plan.highlight
            ? "bg-[#2323FF] text-white hover:bg-[#3a1ed0]"
            : "border border-[#2323FF]/70 bg-white/70 text-[#2323FF] hover:border-[#2323FF] hover:bg-[#2323FF]/[0.06] dark:border-[#2323FF]/60 dark:bg-transparent dark:text-[#7c7cff] dark:hover:bg-[#2323FF]/10"
        }`}
      >
        <span>{plan.cta}</span>
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-200 ease-out group-hover:rotate-45 ${
            plan.highlight
              ? "bg-white text-[#2323FF]"
              : "border border-[#2323FF]/25 bg-[#2323FF]/10 text-[#2323FF]"
          }`}
        >
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
        </span>
      </a>
    </motion.div>
  );
}

function SubHeading({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={0}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <h3
        className="text-[1.6rem] font-[700] leading-tight text-[#0a0a0f] dark:text-white sm:text-[2rem]"
        style={display}
      >
        {title}
      </h3>
      <p
        className="mt-3 max-w-[760px] text-[15px] leading-7 sm:text-[16px]"
        style={{ ...display, ...muted }}
      >
        {text}
      </p>
    </motion.div>
  );
}
