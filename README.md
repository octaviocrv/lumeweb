# ✨ Lume Web

[![Vercel Deploy](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://lume.web)
[![Next.js](https://img.shields.io/badge/Next.js-16.2-000000?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

Meu portfólio digital moderno com animações fluidas e design minimalista. Desenvolvido com **Next.js 16 + React 19**, focado em performance, acessibilidade e experiência visual impactante.

**🔗 [Visite o site →](https://lume.web)**

---

## ✨ Destaques

- 🎨 **Design elegante** — Minimalista e intencional, sem distrações
- ✨ **Animações fluidas** — Framer Motion + Lenis para scroll suave
- ⚡ **Performance excepcional** — Next.js App Router, otimizações nativas
- 📱 **Mobile-first** — Totalmente responsivo, rápido em qualquer conexão
- ♿ **Acessível** — Radix UI, navegação por teclado, contraste WCAG
- 🔍 **SEO otimizado** — Metadados estruturados, Open Graph

---

## 🎯 Seções

| Seção | Descrição |
|-------|-----------|
| **Header** | Navegação responsiva com brand |
| **Hero** | Apresentação + CTAs principais |
| **Composição Visual** | Foto + chips flutuantes com animações |
| **Footer** | Links e chamada para ação |

---

## 🛠️ Stack Técnico

```
Frontend
├── Next.js 16.2.12
├── React 19 + TypeScript
├── Tailwind CSS (styling)
├── Framer Motion (animações)
├── Lenis (smooth scroll)
├── Radix UI (componentes acessíveis)
└── Lucide (ícones)

Deployment
├── Vercel (automatic deploys)
└── Domínio customizado

Dev Tools
├── TypeScript strict mode
├── ESLint
└── Git workflow
```

---

## 🚀 Como Começar

### Pré-requisitos
- Node.js 18+ e npm (ou pnpm/yarn)

### Setup Local

```bash
# Clone o repositório
git clone https://github.com/octaviocrv/lume-web.git
cd lume-web

# Instale dependências
npm install

# Inicie o dev server
npm run dev
# → Acessa em http://localhost:3000

# Build para produção
npm run build

# Preview da build
npm run start
```

---

## 📁 Estrutura do Projeto

```
lume-web/
├── app/
│   ├── layout.tsx          # Layout raiz + providers
│   ├── page.tsx            # Home
│   └── globals.css         # Estilos globais
├── components/
│   ├── layout/
│   │   └── Header.tsx      # Header responsivo
│   ├── sections/
│   │   ├── Hero.tsx        # Hero com copy + CTAs
│   │   └── PortraitComposition.tsx → Foto + chips
│   ├── ui/
│   │   └── BrandSymbol.tsx # Logo reutilizável
│   └── providers/
│       └── SmoothScroll.tsx → Provider Lenis
├── public/
│   ├── brand/              # Logos e ícones
│   └── images/             # Imagens do site
├── fonts/                  # Fontes locais
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🎨 Customização

### Adicionar sua foto
1. Coloque a foto em `public/images/minha-foto.svg`
2. Prefira formato SVG ou PNG com fundo transparente
3. Orientação vertical funciona melhor

### Mudar fontes
As fontes locais estão em `fonts/`. Atualize em `app/layout.tsx` conforme necessário.

### Estilos globais
Variáveis CSS e temas estão em `app/globals.css`.

---

## 🚀 Deploy

O site está rodando na **Vercel**. Qualquer push para `main` dispara deploy automático:

```bash
git add .
git commit -m "update: new section or improvement"
git push origin main
# → Vercel auto-deploys em ~60s
```

---

## 📦 Scripts Disponíveis

```bash
npm run dev        # Dev server (localhost:3000)
npm run build      # Build para produção
npm run start      # Serve build localmente
npm run lint       # ESLint check
```

---

## 🎯 Roadmap

- [ ] Blog integrado (Markdown)
- [ ] Dark mode com toggle
- [ ] Seção de projetos com filtros
- [ ] Newsletter signup
- [ ] Analytics avançados
- [ ] Suporte a múltiplos idiomas

---

## 📄 Licença

MIT — Sinta-se livre para usar como base ou referência.

---

## 👨‍💻 Autor

**Octávio Augusto** — Full Stack Developer & Creative  
- 🐙 GitHub: [@octaviocrv](https://github.com/octaviocrv)
- 💼 LinkedIn: [linkedin.com/in/octaviocrv](https://linkedin.com/in/octaviocrv)
- 🎬 Criativo: [@lume.mov](https://instagram.com/lume.mov)

---

**Gostou do design?** Sinta-se livre para adaptar e usar como inspiração! 💫
