"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Zap, TrendingUp, Package } from "lucide-react";

export default function PortraitComposition() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative mx-auto h-[450px] w-full max-w-[640px] sm:h-[560px] md:h-[680px]"
    >
      {/* Soft shape backdrop */}
      <motion.div
        className="absolute bottom-14 left-[4%] right-[4%] top-4 z-0 [background:linear-gradient(160deg,#f5f7ff_0%,#e0e7ff_45%,#c7d2fe_100%)] [box-shadow:inset_0_0_40px_rgba(35,35,255,0.05)] dark:[background:linear-gradient(160deg,#0b1024_0%,#121936_45%,#1a2350_100%)] dark:[box-shadow:inset_0_0_40px_rgba(35,35,255,0.2)] sm:bottom-10 sm:top-3"
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "40% 60% 70% 30% / 40% 60% 40% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%"
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Decorative dotted arc */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 z-[1] h-full w-full opacity-35"
        fill="none"
        stroke="#2323FF"
        strokeWidth="1.2"
        strokeDasharray="2 6"
      >
        <circle cx="200" cy="220" r="180" />
      </svg>

      {/* Main portrait */}
      <div className="absolute inset-x-0 bottom-7 top-0 z-[2] flex items-end justify-center sm:bottom-2.5">
        <Image
          src="/images/minha-foto.svg"
          alt="Foto do desenvolvedor de braços cruzados"
          width={620}
          height={1100}
          priority
          className="h-full w-full max-w-[620px] object-contain object-bottom"
          style={{ filter: "drop-shadow(0 30px 40px rgba(20,15,60,0.18))" }}
        />
      </div>

      {/* Floating chip 1: Entrega (top-left) */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[3%] top-6 z-[4] rounded-2xl bg-white px-2.5 py-2 shadow-[0_14px_30px_-10px_rgba(20,15,60,0.18),0_4px_10px_-4px_rgba(20,15,60,0.08)] dark:bg-black sm:left-[4%] sm:top-10 sm:px-3.5 sm:py-2.5"
      >
        <div className="flex items-center gap-2.5">
          {/* Caixa de entrega atualizada com Lucide React */}
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#2323FF]/10 sm:h-9 sm:w-9">
            <Package className="h-4 w-4 text-[#2323FF]" strokeWidth={2.5} />
          </div>
          <div style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            <div className="mb-0.5 text-[10px] uppercase tracking-[0.08em] text-[#6b6b76] dark:text-[#8f8f9a]">
              Entrega
            </div>
            <div className="text-[13px] font-medium text-[#0a0a0f] dark:text-white">
              Pronto em 10 dias
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating chip 2: Rating (top-right) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute right-[2%] top-[70px] z-[4] rounded-2xl bg-white px-2.5 py-2 shadow-[0_14px_30px_-10px_rgba(20,15,60,0.18),0_4px_10px_-4px_rgba(20,15,60,0.08)] dark:bg-black sm:top-[90px] sm:px-3.5 sm:py-2.5"
      >
        <div
          className="flex items-center gap-2"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          <div className="flex gap-px">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg
                key={i}
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="#facc15"
              >
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            ))}
          </div>
          <div className="text-[13px] font-bold text-[#0a0a0f] dark:text-white">5.0</div>
        </div>
        <div
          className="mt-0.5 text-[10px] text-[#6b6b76] dark:text-[#8f8f9a]"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Avaliação dos clientes
        </div>
      </motion.div>

      {/* Floating chip 3: Performance (middle-left) */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute left-[2%] top-[40%] z-[4] hidden rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_14px_30px_-10px_rgba(20,15,60,0.18),0_4px_10px_-4px_rgba(20,15,60,0.08)] dark:bg-black sm:block"
      >
        <div className="flex items-center gap-2.5">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#2323FF]/10">
            <Zap className="h-4 w-4 text-[#2323FF]" fill="#2323FF" fillOpacity={0.2} />
          </div>
          <div style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            <div className="mb-0.5 text-[10px] uppercase tracking-[0.08em] text-[#6b6b76] dark:text-[#8f8f9a]">
              Performance
            </div>
            <div className="text-[13px] font-medium text-[#0a0a0f] dark:text-white">
              Carregamento Rápido
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating chip 4: Conversão (middle-right) */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
        className="absolute right-[0%] top-[52%] z-[4] hidden rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_14px_30px_-10px_rgba(20,15,60,0.18),0_4px_10px_-4px_rgba(20,15,60,0.08)] dark:bg-black sm:block"
      >
        <div className="flex items-center gap-2.5">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#2323FF]/10">
            <TrendingUp className="h-4 w-4 text-[#2323FF]" strokeWidth={2.5} />
          </div>
          <div style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            <div className="mb-0.5 text-[10px] uppercase tracking-[0.08em] text-[#6b6b76] dark:text-[#8f8f9a]">
              Estratégia
            </div>
            <div className="text-[13px] font-medium text-[#0a0a0f] dark:text-white">
              Foco em Conversão
            </div>
          </div>
        </div>
      </motion.div>

      {/* Signature card (bottom) */}
      <div className="absolute inset-x-[4%] bottom-0 z-[4] flex flex-col items-start gap-2.5 rounded-2xl bg-white px-3.5 py-3 shadow-[0_24px_48px_-14px_rgba(20,15,60,0.22),0_6px_18px_-6px_rgba(20,15,60,0.08)] dark:bg-black sm:inset-x-[6%] sm:flex-row sm:items-center sm:justify-between sm:gap-3.5 sm:px-4 sm:py-3.5">
        <div style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
          <div className="mb-1 inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.18)]" />
            Atendendo novos clientes
          </div>
          <div className="text-[15px] font-bold tracking-tight text-[#0a0a0f] dark:text-white">
            Vamos criar o site do seu negócio 👋
          </div>
          <div className="text-xs text-[#6b6b76] dark:text-[#8f8f9a]">
            Atendimento direto comigo, sem intermediários
          </div>
        </div>
        <div className="inline-flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center self-end rounded-full bg-[#2323FF] text-white sm:h-[42px] sm:w-[42px] sm:self-auto">
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
        </div>
      </div>
    </motion.div>
  );
}