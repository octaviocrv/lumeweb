"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import PortraitComposition from "@/components/sections/PortraitComposition";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative z-[5] mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-4 pb-16 pt-4 sm:px-6 sm:pb-24 sm:pt-6 md:px-12 lg:grid-cols-12 lg:gap-14 lg:pb-32 lg:pt-8">
      {/* LEFT: copy */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="animate-hero-enter flex flex-col items-start gap-5 text-left sm:gap-6 lg:col-span-6"
      >

        <motion.h1
          variants={item}
          className="text-[2rem] font-[700] leading-[1.12] text-[#0a0a0f] dark:text-white sm:text-[2.6rem] sm:leading-tight lg:text-5xl xl:text-6xl"
          style={{
            fontFamily: "var(--font-satoshi), var(--font-inter-tight), sans-serif",
          }}
        >
          Seu site profissional
          <br />
          no ar em{" "}
          <motion.span
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="box-decoration-clone inline-block rounded-xl bg-[#2323FF] px-2.5 py-0.5 text-white sm:rounded-2xl sm:px-3"
          >
            até 10 dias
          </motion.span>
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-[580px] text-[16px] font-[400] leading-7 sm:text-[18px] sm:leading-relaxed"
          style={{
            fontFamily: "var(--font-satoshi), var(--font-inter-tight), sans-serif",
            color: "color-mix(in oklab,var(--color-dark_black) 60%,transparent)",
          }}
        >
          Fuja dos modelos genéricos e tenha um espaço pensado
          <br className="hidden md:block" />
          exclusivamente para o seu negócio. Cuido da execução técnica
          <br className="hidden md:block" />
          e do design para que você possa focar no que faz de melhor.
        </motion.p>

        <motion.div variants={item} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
          <motion.a
            href="/precos"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex min-h-12 w-full items-center justify-between gap-3 rounded-full border border-[#2323FF] bg-[#2323FF] py-2 pl-5 pr-2 font-medium text-white transition-all duration-200 ease-out hover:-translate-y-px hover:border-[#3a1ed0] hover:bg-[#3a1ed0] active:translate-y-0 active:scale-[0.98] sm:w-auto"
          >
            <span>Solicitar orçamento</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#2323FF] transition-transform duration-200 ease-out group-hover:rotate-45">
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
            </span>
          </motion.a>
          <motion.a
            href="https://wa.me/5531989184698?text=Ol%C3%A1!%20Quero%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex min-h-12 w-full items-center justify-between gap-3 rounded-full border border-green-700 bg-green-700 py-2 pl-5 pr-2 font-medium text-white transition-all duration-200 ease-out hover:-translate-y-px hover:border-green-800 hover:bg-green-800 active:translate-y-0 active:scale-[0.98] sm:w-auto"
          >
            <span>Falar direto comigo</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-700">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.79 14.02c-.24.68-1.41 1.29-1.97 1.35-.5.05-1.14.08-1.83-.11-.42-.13-.96-.31-1.66-.61-2.92-1.26-4.82-4.2-4.97-4.4-.15-.19-1.19-1.58-1.19-3.02s.76-2.14 1.03-2.44c.27-.3.59-.37.79-.37h.57c.18 0 .43-.07.67.51.24.6.83 2.06.9 2.21.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.6 2 1.11.98 2.04 1.28 2.33 1.43.29.15.46.12.63-.07.17-.19.72-.85.92-1.14.19-.29.39-.24.65-.15.27.1 1.71.81 2 .95.29.15.49.22.56.34.07.12.07.71-.17 1.39z" />
              </svg>
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={item}
          className="grid w-full max-w-[620px] grid-cols-1 gap-2 text-sm sm:flex sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2"
          style={{ color: "color-mix(in oklab,var(--color-dark_black) 60%,transparent)" }}
        >
          <span className="flex items-center gap-1.5 rounded-xl border border-black/5 bg-white/50 px-3 py-2 dark:border-white/10 dark:bg-white/[0.03]">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            98% de satisfação
          </span>
          <span className="rounded-xl border border-black/5 bg-white/50 px-3 py-2 dark:border-white/10 dark:bg-white/[0.03]">46 projetos entregues</span>
          <span className="rounded-xl border border-black/5 bg-white/50 px-3 py-2 dark:border-white/10 dark:bg-white/[0.03]">15% dos clientes vêm por indicação</span>
        </motion.div>
      </motion.div>

      {/* RIGHT: portrait */}
      <div className="lg:col-span-6">
        <PortraitComposition />
      </div>
    </section>
  );
}
