"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import BrandSymbol from "@/components/ui/BrandSymbol";

const navItems = [
  { label: "Processo", href: "#processo" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Preços", href: "#precos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    const shouldUseDark = savedTheme === "dark" || (savedTheme === null && root.classList.contains("dark"));

    root.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  function handleThemeToggle() {
    const root = document.documentElement;
    const nextIsDark = !isDark;

    root.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  }

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
        <span
          className="-ml-2 text-[22px] font-semibold tracking-tight text-[#0a0a0f] dark:text-white"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          lume.web
        </span>
      </a>

      {/* Nav */}
      <nav
        className="hidden items-center gap-1 rounded-full bg-[#f4f4f6] p-1.5 dark:bg-[#16171f] md:flex"
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-5 py-2.5 text-[15px] font-medium text-[#1b1d1e99] transition-[background-color,color,box-shadow] duration-200 hover:bg-[#fafafc] hover:text-[#0a0a0f] hover:shadow-[0_0_18px_-8px_rgba(0,0,0,0.28)] dark:text-[#a0a3b5] dark:hover:bg-[#202232] dark:hover:text-white dark:hover:shadow-[0_0_18px_-8px_rgba(0,0,0,0.45)]"
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
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Ver planos
        </motion.button>
        <button
          aria-label="Alternar tema"
          onClick={handleThemeToggle}
          className="flex h-11 w-11 items-center justify-center rounded-full text-[#0a0a0f] transition-colors hover:bg-[#f4f4f6] dark:text-white dark:hover:bg-[#1b1c25]"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>
    </motion.header>
  );
}
