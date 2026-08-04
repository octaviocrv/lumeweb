"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  function handleMobileMenuToggle() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const floatingTrigger = 24;
    const floatingRange = 120;
    let frameId: number | null = null;

    const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

    const smoothStep = (t: number) => t * t * (3 - 2 * t);

    const updateHeaderState = () => {
      const scrollY = window.scrollY;
      const progress = clamp((scrollY - floatingTrigger) / floatingRange);
      const easedProgress = smoothStep(progress);

      setScrollProgress(easedProgress);
      frameId = null;
    };

    const handleScroll = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateHeaderState);
    };

    updateHeaderState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const visualProgress = scrollProgress;
  const easedVisual = visualProgress;
  const backgroundAlpha = Number((0.82 * easedVisual).toFixed(3));
  const shadowAlpha = Number((0.55 * easedVisual).toFixed(3));
  const borderAlpha = Number((0.12 * easedVisual).toFixed(3));

  const headerBackground = isDark
    ? `rgba(22, 23, 31, ${backgroundAlpha})`
    : `rgba(255, 255, 255, ${backgroundAlpha})`;

  const headerShadow = `0 14px 35px -20px rgba(10, 10, 15, ${shadowAlpha})`;
  const headerBlur = Number((12 * easedVisual).toFixed(2));

  const width = 100 - easedVisual * 5;
  const maxWidth = 1440 - easedVisual * 288;
  const topOffset = 0 + easedVisual * 16;
  const paddingX = 48 - easedVisual * 16;
  const paddingY = 24 - easedVisual * 12;
  const radius = Math.round(24 * easedVisual);

  return (
    <div
      className="fixed left-1/2 z-50 -translate-x-1/2"
      style={{
        top: `${topOffset}px`,
        width: `${width}%`,
        maxWidth: `${maxWidth}px`,
        transition:
          "top 420ms cubic-bezier(0.22, 1, 0.36, 1), width 420ms cubic-bezier(0.22, 1, 0.36, 1), max-width 420ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex items-center justify-between gap-6"
        style={{
          paddingLeft: `${paddingX}px`,
          paddingRight: `${paddingX}px`,
          paddingTop: `${paddingY}px`,
          paddingBottom: `${paddingY}px`,
          borderRadius: `${radius}px`,
          boxShadow: headerShadow,
          backgroundColor: headerBackground,
          backdropFilter: `blur(${headerBlur}px)`,
          WebkitBackdropFilter: `blur(${headerBlur}px)`,
          border: `1px solid rgba(255, 255, 255, ${borderAlpha})`,
          transition:
            "padding 420ms cubic-bezier(0.22, 1, 0.36, 1), border-radius 420ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 420ms cubic-bezier(0.22, 1, 0.36, 1), background-color 420ms cubic-bezier(0.22, 1, 0.36, 1), backdrop-filter 420ms cubic-bezier(0.22, 1, 0.36, 1), border-color 420ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
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
          className="hidden flex-1 items-center justify-center gap-1 rounded-full bg-[#f4f4f6] p-1.5 dark:bg-[#16171f] md:flex"
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
            className="hidden rounded-full bg-[#4f39f6] px-5 py-3 text-[15px] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(79,57,246,0.55)] transition-colors hover:bg-[#3d28e0] md:inline-flex"
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
          <button
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={handleMobileMenuToggle}
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#0a0a0f] transition-colors hover:bg-[#f4f4f6] dark:text-white dark:hover:bg-[#1b1c25] md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-[calc(100%+12px)] z-50 w-[min(90vw,320px)] rounded-2xl border border-[#dcdfea] bg-white/95 p-3 shadow-[0_24px_60px_-34px_rgba(10,10,15,0.7)] backdrop-blur md:hidden dark:border-[#2a2d3c] dark:bg-[#121522]/95"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="rounded-xl px-4 py-3 text-[15px] font-medium text-[#23262d] transition-colors hover:bg-[#f5f6fa] dark:text-[#d6d9e4] dark:hover:bg-[#1e2232]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-[#4f39f6] px-5 py-3 text-[15px] font-semibold text-white shadow-[0_12px_26px_-10px_rgba(79,57,246,0.6)] transition-colors hover:bg-[#3d28e0]"
              >
                Ver planos
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}