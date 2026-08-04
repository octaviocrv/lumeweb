import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    // Adicionamos os caminhos com 'src/' caso seu projeto use essa estrutura
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#2323FF",
          dark: "#3d28e0",
        },
        whatsapp: {
          DEFAULT: "#16a34a",
          dark: "#15803d",
        },
      },
    },
  },
  plugins: [],
};

export default config;