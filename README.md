# LUME WEB — Landing Page

Stack: Next.js 16.2.12 · React 19 · TypeScript · Tailwind · Framer Motion · Lenis · Lucide · Radix UI.

## Setup

1. Instale dependências:
   ```bash
   npm install
   ```

2. Adicione sua foto em `public/images/minha-foto.svg` (fundo branco/transparente, orientação vertical).

3. Rode em dev:
   ```bash
   npm run dev
   ```

Abra `http://localhost:3000`.

## Estrutura

- `app/layout.tsx` — layout raiz + fontes + provider de scroll suave
- `app/page.tsx` — página Home
- `components/layout/Header.tsx` — header responsivo
- `components/sections/Hero.tsx` — hero com copy + CTAs
- `components/sections/PortraitComposition.tsx` — foto + chips flutuantes
- `components/ui/BrandSymbol.tsx` — símbolo/logotipo reutilizável
- `components/providers/SmoothScroll.tsx` — provider Lenis
- `public/brand/*` — logos e ícones de marca
- `public/images/*` — imagens do site
- `fonts/*` — fontes locais usadas pelo Next
