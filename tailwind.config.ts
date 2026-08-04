import type { Config } from "tailwindcss";

const config: Config = {
  content: [
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
          DEFAULT: "#4f39f6",
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
