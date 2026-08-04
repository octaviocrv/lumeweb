"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function PortraitComposition() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative mx-auto h-[560px] w-full max-w-[640px] sm:h-[680px]"
    >
      {/* Soft shape backdrop */}
      <div
        className="absolute z-0"
        style={{
          top: 10,
          bottom: 40,
          left: "4%",
          right: "4%",
          background:
            "linear-gradient(160deg, #ede9fe 0%, #ddd6fe 45%, #fbcfe8 100%)",
          borderRadius: "40% 40% 44% 44% / 46% 46% 40% 40%",
        }}
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
      <div className="absolute inset-x-0 bottom-2.5 top-0 z-[2] flex items-end justify-center">
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

      {/* Floating chip: entrega (top-left) */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[4%] top-10 z-[4] rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_14px_30px_-10px_rgba(20,15,60,0.18),0_4px_10px_-4px_rgba(20,15,60,0.08)]"
      >
        <div className="flex items-center gap-2.5">
          <div className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-[10px] bg-transparent">
            <Image
              src="/brand/caixa.png"
              alt="Logo Lume"
              width={36}
              height={36}
              className="h-full w-full object-contain"
            />
          </div>
          <div style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            <div className="mb-0.5 text-[10px] uppercase tracking-[0.08em] text-[#6b6b76]">
              Entrega
            </div>
            <div className="text-[13px] font-medium text-[#0a0a0f]">
              Pronto em 10 dias
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating chip: rating (top-right) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[2%] top-[90px] z-[4] rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_14px_30px_-10px_rgba(20,15,60,0.18),0_4px_10px_-4px_rgba(20,15,60,0.08)]"
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
          <div className="text-[13px] font-bold text-[#0a0a0f]">5.0</div>
        </div>
        <div
          className="mt-0.5 text-[10px] text-[#6b6b76]"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Avaliação dos clientes
        </div>
      </motion.div>

      {/* Signature card (bottom) */}
      <div className="absolute inset-x-[6%] bottom-0 z-[4] flex items-center justify-between gap-3.5 rounded-2xl bg-white px-4 py-3.5 shadow-[0_24px_48px_-14px_rgba(20,15,60,0.22),0_6px_18px_-6px_rgba(20,15,60,0.08)]">
        <div style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
          <div className="mb-1 inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.18)]" />
            Atendendo novos clientes
          </div>
          <div className="text-[15px] font-bold tracking-tight text-[#0a0a0f]">
            Vamos criar o site do seu negócio 👋
          </div>
          <div className="text-xs text-[#6b6b76]">
            Atendimento direto comigo, sem intermediários
          </div>
        </div>
        <div className="inline-flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full bg-[#2323FF] text-white">
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
        </div>
      </div>
    </motion.div>
  );
}
