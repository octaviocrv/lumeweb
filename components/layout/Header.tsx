"use client";

import { motion } from "framer-motion";
import { Moon } from "lucide-react";
import { Poppins } from "next/font/google";
import BrandSymbol from "@/components/ui/BrandSymbol";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const navItems = [
  { label: "Processo", href: "#processo" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Preços", href: "#precos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-6 md:px-12"
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-0">
        <div className="flex h-[70px] w-[70px] items-center justify-center rounded-xl font-mono text-lg font-extrabold">
          <BrandSymbol className="h-[70px] w-[70px]" />
        </div>
        <span className={`${poppins.className} -ml-2 text-[22px] font-extrabold tracking-tight`}>
          LUME WEB
        </span>
      </a>

      {/* Nav */}
      <nav className="hidden items-center gap-1 rounded-full bg-[#f4f4f6] p-1.5 md:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-5 py-2.5 text-[15px] font-medium text-[#3a3a44] transition-colors hover:bg-white hover:text-[#0a0a0f]"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-full bg-[#4f39f6] px-5 py-3 text-[15px] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(79,57,246,0.55)] transition-colors hover:bg-[#3d28e0]"
        >
          Ver planos
        </motion.button>
        <button
          aria-label="Alternar tema"
          className="flex h-11 w-11 items-center justify-center rounded-full text-[#0a0a0f] transition-colors hover:bg-[#f4f4f6]"
        >
          <Moon className="h-5 w-5" />
        </button>
      </div>
    </motion.header>
  );
}
