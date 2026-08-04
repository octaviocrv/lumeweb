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
      className="relative mx-auto h-[560px] w-full max-w-[640px] sm:h-[680px]"
    >
      {/* Soft shape backdrop */}
{/* Soft shape backdrop */}
      <motion.div
        className="absolute z-0"
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "40% 60% 70% 30% / 40% 60% 40% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%"
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          top: 10,
          bottom: 40,
          left: "4%",
          right: "4%",
          // Gradiente azul suave, perfeitamente alinhado com a paleta #2323FF
          background: "linear-gradient(160deg, #f5f7ff 0%, #e0e7ff 45%, #c7d2fe 100%)",
          // Uma sombra interna muito sutil para dar profundidade à bolha
          boxShadow: "inset 0 0 40px rgba(35,35,255,0.05)"
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

      {/* Floating chip 1: Entrega (top-left) */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[4%] top-10 z-[4] rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_14px_30px_-10px_rgba(20,15,60,0.18),0_4px_10px_-4px_rgba(20,15,60,0.08)]"
      >
        <div className="flex items-center gap-2.5">
          {/* Caixa de entrega atualizada com Lucide React */}
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#2323FF]/10">
            <Package className="h-4 w-4 text-[#2323FF]" strokeWidth={2.5} />
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

      {/* Floating chip 2: Rating (top-right) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
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

      {/* Floating chip 3: Performance (middle-left) */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute left-[2%] top-[40%] z-[4] hidden rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_14px_30px_-10px_rgba(20,15,60,0.18),0_4px_10px_-4px_rgba(20,15,60,0.08)] sm:block"
      >
        <div className="flex items-center gap-2.5">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#2323FF]/10">
            <Zap className="h-4 w-4 text-[#2323FF]" fill="#2323FF" fillOpacity={0.2} />
          </div>
          <div style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            <div className="mb-0.5 text-[10px] uppercase tracking-[0.08em] text-[#6b6b76]">
              Performance
            </div>
            <div className="text-[13px] font-medium text-[#0a0a0f]">
              Carregamento Rápido
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating chip 4: Conversão (middle-right) */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
        className="absolute right-[0%] top-[52%] z-[4] hidden rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_14px_30px_-10px_rgba(20,15,60,0.18),0_4px_10px_-4px_rgba(20,15,60,0.08)] sm:block"
      >
        <div className="flex items-center gap-2.5">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#2323FF]/10">
            <TrendingUp className="h-4 w-4 text-[#2323FF]" strokeWidth={2.5} />
          </div>
          <div style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            <div className="mb-0.5 text-[10px] uppercase tracking-[0.08em] text-[#6b6b76]">
              Estratégia
            </div>
            <div className="text-[13px] font-medium text-[#0a0a0f]">
              Foco em Conversão
            </div>
          </div>
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