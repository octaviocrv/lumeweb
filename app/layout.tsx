import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

const satoshi = localFont({
  src: [
    { path: "../fonts/satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/satoshi-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/satoshi-900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "LUME WEB — Sites profissionais em até 10 dias",
  description:
    "Desenvolvimento de sites sob medida com Next.js. Do briefing ao domínio configurado em até 10 dias.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${satoshi.variable} ${interTight.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
