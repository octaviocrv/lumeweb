"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Palette, Rocket, Sparkles } from "lucide-react";

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
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const cardBase =
  "relative overflow-hidden rounded-[28px] border border-[#0a0a0f]/10 bg-white shadow-[0_24px_48px_-24px_rgba(73,40,253,0.25)] dark:border-white/10 dark:bg-white/[0.04]";

const skills = [
  { icon: Code2, label: "Design sob medida" },
  { icon: Palette, label: "Site rápido e responsivo" },
  { icon: Rocket, label: "Otimizado para o Google" },
  { icon: Sparkles, label: "Suporte durante todo o processo" },
];

const stats = [
  { value: "3", label: "Anos de mercado" },
  { value: "46", label: "Projetos entregues" },
  { value: "98%", label: "Clientes que indicam meu trabalho" },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative bg-[var(--background)]">
      {/* Brilho de marca sutil atrás da composição */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 z-0 h-[420px]"
        style={{
          background:
            "radial-gradient(600px 320px at 20% 50%, rgba(35,35,255,0.10), transparent 65%)",
        }}
      />

      <div className="relative z-10 py-14 md:py-20 2xl:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12">
          {/* ---------- Cabeçalho ---------- */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <div className="max-w-[900px]">
              <span
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0a0a0f]/10 bg-white/60 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[#0a0a0f]/60 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/60"
                style={micro}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#2323FF] shadow-[0_0_0_3px_rgba(35,35,255,0.18)]" />
                SOBRE MIM
              </span>

              <h2
                className="text-[2rem] font-[700] leading-[1.12] text-[#0a0a0f] dark:text-white sm:text-[2.6rem] sm:leading-tight lg:text-5xl xl:text-[3.4rem]"
                style={display}
              >
                Sites feitos por{" "}
                <span className="box-decoration-clone inline-block rounded-xl bg-[#2323FF] px-2.5 py-0.5 text-white sm:rounded-2xl sm:px-3">
                  quem entende
                </span>
                <br />
                do seu negócio.
              </h2>
            </div>

            <p
              className="max-w-[760px] text-[16px] leading-7 sm:text-[17px]"
              style={{ ...display, ...muted }}
            >
              Sou desenvolvedor independente e ajudo pequenos e médios
              negócios a terem uma presença online profissional, sem
              complicação e sem depender de agência.
            </p>
          </motion.div>

          {/* ---------- Bento grid ---------- */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:mt-14 lg:grid-cols-12 lg:grid-rows-[repeat(2,minmax(0,auto))]">
            {/* CARD 1 — Retrato (alto, ocupa 2 linhas) */}
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className={`${cardBase} min-h-[420px] p-0 sm:min-h-[520px] lg:col-span-5 lg:row-span-2`}
            >
              {/* Fundo em gradiente + arco pontilhado (linguagem do Hero) */}
              <div className="absolute inset-0 [background:linear-gradient(160deg,#f5f7ff_0%,#e0e7ff_45%,#c7d2fe_100%)] dark:[background:linear-gradient(160deg,#0b1024_0%,#121936_45%,#1a2350_100%)]" />
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 h-full w-full opacity-30"
                fill="none"
                stroke="#2323FF"
                strokeWidth="1.2"
                strokeDasharray="2 6"
                aria-hidden
              >
                <circle cx="200" cy="230" r="175" />
              </svg>

              {/* Rótulo vertical — detalhe editorial */}
              <span
                className="absolute left-5 top-8 z-[3] hidden rotate-180 text-[11px] uppercase tracking-[0.3em] text-[#0a0a0f]/35 [writing-mode:vertical-rl] dark:text-white/35 sm:block"
                style={micro}
              >
                LUME.WEB · 2026
              </span>

              {/* Foto principal */}
              <img
                src="/brand/eu-olhando-para-lado-sem-fundo.svg"
                alt="Retrato do desenvolvedor da Lume Web"
                width={620}
                height={820}
                className="absolute inset-x-0 bottom-0 z-[2] mx-auto h-[92%] w-full max-w-[520px] object-contain object-bottom"
                style={{ filter: "drop-shadow(0 30px 40px rgba(20,15,60,0.18))" }}
              />

              {/* Chip flutuante sobreposto */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-4 top-6 z-[4] rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_14px_30px_-10px_rgba(20,15,60,0.18)] dark:bg-black sm:right-6"
              >
                <div style={micro}>
                  <div className="mb-0.5 text-[10px] uppercase tracking-[0.08em] text-[#6b6b76] dark:text-[#8f8f9a]">
                    DISPONÍVEL
                  </div>
                  <div className="text-[13px] font-medium text-[#0a0a0f] dark:text-white">
                    Agenda aberta para agosto
                  </div>
                </div>
              </motion.div>

              {/* Assinatura na base do card */}
              <div className="absolute inset-x-4 bottom-4 z-[4] flex items-center justify-between gap-3 rounded-2xl bg-white/90 px-4 py-3.5 backdrop-blur-sm dark:bg-black/85 sm:inset-x-6 sm:bottom-6">
                <div style={micro}>
                  <div className="text-[15px] font-bold tracking-tight text-[#0a0a0f] dark:text-white">
                    Vamos conversar?
                  </div>
                  <div className="text-xs text-[#6b6b76] dark:text-[#8f8f9a]">
                    Presença online profissional em até 10 dias
                  </div>
                </div>
                <span className="inline-flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full bg-[#2323FF] text-white">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </div>
            </motion.div>

            {/* CARD 2 — Manifesto tipográfico */}
            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className={`${cardBase} p-7 sm:p-9 lg:col-span-7`}
            >
              {/* Marca d'água numérica */}
              <span
                className="pointer-events-none absolute -right-2 -top-8 select-none text-[8rem] font-[900] leading-none text-[#2323FF]/[0.06] dark:text-white/[0.05]"
                style={display}
                aria-hidden
              >
                01
              </span>

              <p
                className="relative max-w-[560px] text-[1.35rem] font-[700] leading-[1.3] text-[#0a0a0f] dark:text-white sm:text-[1.7rem]"
                style={display}
              >
                O nível do seu site dita o valor que o cliente{" "}
                <span className="text-[#2323FF]">percebe no seu trabalho.</span>
              </p>
              <p
                className="relative mt-5 max-w-[560px] text-[16px] leading-7 text-balance sm:text-[17px]"
                style={{ ...display, ...muted }}
              >
                Aparecer no Google, ou ter um Instagram ativo, virou o básico: é só a porta de entrada. O que realmente faz alguém confiar no seu trabalho é o que essa pessoa encontra depois de clicar no seu link.
                <br />
                É o seu site que apresenta o que você faz, transmite profissionalismo e conduz o visitante até o próximo passo. Meu trabalho é construir essa ponte para transformar visitantes em clientes.
              </p>

              {/* Imagem de apoio + selo, sobrepostos */}
              <div className="relative mt-8 flex items-start gap-4 rounded-2xl border border-[#0a0a0f]/[0.06] bg-[#2323FF]/[0.04] p-5 dark:border-white/10 dark:bg-[#2323FF]/[0.08]">
                <span
                  className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2323FF] text-white"
                  aria-hidden
                >
                  <Sparkles className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <div className="flex-1">
                  <p
                    className="text-[13px] font-[600] uppercase tracking-[0.12em] text-[#2323FF]"
                    style={display}
                  >
                    Na prática
                  </p>
                  <p
                    className="mt-1.5 text-[15px] leading-6 sm:text-[16px]"
                    style={{ ...display, ...muted }}
                  >
                    É isso que separa um negócio que <span className="font-[600] text-[#0a0a0f] dark:text-white">parece profissional</span> de um que só parece amador online.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CARD 3 — Skills em destaque */}
            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className={`${cardBase} p-7 sm:p-8 lg:col-span-4`}
            >
              <span
                className="text-[11px] uppercase tracking-[0.14em] text-[#0a0a0f]/45 dark:text-white/45"
                style={micro}
              >
                O QUE ESTÁ INCLUSO
              </span>

              <div className="mt-5 grid grid-cols-1 gap-2.5">
                {skills.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="group flex items-center gap-3 rounded-2xl border border-[#0a0a0f]/[0.07] bg-[#f4f4f6]/60 px-3.5 py-3 transition-colors duration-200 hover:border-[#4f39f6]/35 hover:bg-white dark:border-white/[0.07] dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#2323FF]/10">
                      <Icon className="h-4 w-4 text-[#2323FF]" strokeWidth={2.2} />
                    </span>
                    <span
                      className="text-[14px] font-medium text-[#0a0a0f] dark:text-white"
                      style={display}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CARD 4 — Números */}
            <motion.div
              variants={fadeUp}
              custom={4}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className={`${cardBase} flex flex-col justify-between p-7 sm:p-8 lg:col-span-3`}
            >
              <span
                className="text-[11px] uppercase tracking-[0.14em] text-[#0a0a0f]/45 dark:text-white/45"
                style={micro}
              >
                NÚMEROS QUE FALAM POR MIM
              </span>

              <div className="mt-6 flex flex-col gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="text-[2.2rem] font-[900] leading-none tracking-tight text-[#0a0a0f] dark:text-white"
                      style={display}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="mt-1.5 text-[13px] leading-5"
                      style={{ ...micro, ...muted }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ---------- Faixa de fechamento com CTA ---------- */}
          <motion.div
            variants={fadeUp}
            custom={5}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-5 flex flex-col items-start justify-between gap-5 rounded-[28px] bg-[#2323FF] px-7 py-7 shadow-[0_24px_48px_-24px_rgba(73,40,253,0.55)] sm:px-9 md:flex-row md:items-center"
          >
            <p
              className="max-w-[620px] text-[1.15rem] font-[700] leading-snug text-white sm:text-[1.35rem]"
              style={display}
            >
              Pronto para colocar o seu negócio no ar com um site profissional
              em até 10 dias?
            </p>

            <a
              href="https://wa.me/5531989184698?text=Ol%C3%A1!%20Quero%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio."
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
