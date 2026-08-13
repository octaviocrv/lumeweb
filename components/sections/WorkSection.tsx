"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  href: string;
  image?: string;
  alt?: string;
};

const projects: Project[] = [
  {
    title: "Quinta Voolivre",
    subtitle: "Landing Page · Educação",
    href: "https://octaviocrv.github.io/website-institucional-escola/",
    image: "/projetos/SiteQuintalVooLivre.png",
    alt: "Projeto Quinta Voolivre",
  },
  {
    title: "DeltaMat",
    subtitle: "Site Institucional · Educação",
    href: "https://deltamat.com.br/",
    image: "/projetos/SiteDeltaMat.png",
    alt: "Projeto DeltaMat",
  },
  {
    title: "Casa Junno",
    subtitle: "Site Institucional · Moda",
    href: "https://casajunnoo.com.br/",
    image: "/projetos/SiteModaCasaJunno.png",
    alt: "Projeto Casa Junno",
  },
  {
    title: "IndexMed",
    subtitle: "Site Institucional · Saúde",
    href: "https://www.indexmed.com.br/",
    image: "/projetos/IndexMedSite.png",
    alt: "Projeto IndexMed",
  },
  {
    title: "LokGeo",
    subtitle: "Landing Page · Locação",
    href: "https://lokgeo.vercel.app/",
    image: "/projetos/fotolokgeo2.png",
    alt: "Projeto LokGeo",
  },
  // {
  //   title: "Bruno Pedroso",
  //   subtitle: "Landing Page · Portfólio",
  //   href: "https://eubrunopedroso.vercel.app/",
  //   image: "/projetos/brunogoogle.png",
  //   alt: "Projeto Bruno Pedroso",
  // },
  // {
  //   title: "PlanCompany Webinar",
  //   subtitle: "Página de Conversão · Vendas",
  //   href: "https://plancompany.com.br/webnar/#formulario",
  //   image: "/projetos/SitePaginaVsl.png",
  //   alt: "Projeto PlanCompany Webinar",
  // },
  // {
  //   title: "FotosProfissionais",
  //   subtitle: "Landing Page · SaaS",
  //   href: "https://www.fotosprofissionais.com/",
  //   image: "/projetos/SiteFotosProfissionais.png",
  //   alt: "Projeto FotosProfissionais",
  // },
  // {
  //   title: "Diagnóstico de Vendas",
  //   subtitle: "Landing Page · Diagnóstico Comercial",
  //   href: "https://diagnostico-vendas.vercel.app/",
  //   image: "/projetos/DiagnosticoEstrategicoComercial.png",
  //   alt: "Projeto Diagnóstico de Vendas",
  // },
  // {
  //   title: "DivideJa",
  //   subtitle: "Página de Login · Produto Digital",
  //   href: "https://octaviocrv.github.io/divide-ja/src/pages/login/index.html",
  //   image: "/projetos/SiteDivideJa.png",
  //   alt: "Projeto DivideJa",
  // },
  // {
  //   title: "Nerus",
  //   subtitle: "Site Institucional · Tecnologia",
  //   href: "https://nerus.com.br/",
  //   image: "/projetos/SiteNerus.png",
  //   alt: "Projeto Nerus",
  // },
  // {
  //   title: "Casa Vento",
  //   subtitle: "Site Institucional · Educação Infantil",
  //   href: "https://casavento.com.br/",
  //   image: "/projetos/casavento.png",
  //   alt: "Projeto Casa Vento",
  // },
  // {
  //   title: "Studio Up Fitness",
  //   subtitle: "Landing Page · Academia",
  //   href: "https://octaviocrv.github.io/Landing-Page-Academia/",
  //   image: "/projetos/SiteAcademia.png",
  //   alt: "Projeto Studio Up Fitness",
  // },
  {
    title: "Filhos de Música",
    subtitle: "Site Institucional · Música",
    href: "https://filhos-de-musica.vercel.app/",
    image: "/projetos/filhosdemusica.png",
    alt: "Projeto Filhos de Música",
  },
  // {
  //   title: "Takeosan",
  //   subtitle: "Cardápio Digital · Restaurante",
  //   href: "https://takeosan.menudino.com/",
  // },
  // {
  //   title: "Multiverso Burguer",
  //   subtitle: "Cardápio Online · Hamburgueria",
  //   href: "https://multiversoburguer.netlify.app/",
  //   image: "/projetos/multiversoburguer.png",
  //   alt: "Projeto Multiverso Burguer",
  // },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function WorkSection() {
  return (
    <section id="trabalhos" className="bg-[var(--background)]">
      <div className="py-14 md:py-20 2xl:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-none"
          >
            <h2
              className="text-[2rem] font-[700] leading-[1.12] text-[#0a0a0f] dark:text-white sm:text-[2.6rem] sm:leading-tight md:whitespace-nowrap lg:text-5xl xl:text-6xl"
              style={{
                fontFamily: "var(--font-satoshi), var(--font-inter-tight), sans-serif",
              }}
            >
              Trabalhos reais, no ar agora
            </h2>
            <p
              className="mt-4 text-[16px] font-[400] leading-7 sm:text-[18px] sm:leading-relaxed md:whitespace-nowrap"
              style={{
                fontFamily: "var(--font-satoshi), var(--font-inter-tight), sans-serif",
                color: "color-mix(in oklab,var(--color-dark_black) 60%,transparent)",
              }}
            >
              Alguns dos nossos sites desenvolvidos para clientes reais. Visite e comprove.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={project.href}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const projectDomain = project.href.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-[#0a0a0f]/10 bg-white shadow-[0_24px_48px_-24px_rgba(73,40,253,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4f39f6]/35 dark:border-white/10 dark:bg-white/5"
    >
      <div className="flex items-center gap-1.5 border-b border-[#0a0a0f]/5 px-4 py-2.5 dark:border-white/5">
        <span className="h-2 w-2 rounded-full bg-[#0a0a0f]/10 dark:bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-[#0a0a0f]/10 dark:bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-[#0a0a0f]/10 dark:bg-white/15" />
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f4f4f6] dark:bg-white/5">
        {project.image ? (
          <img
            src={project.image}
            alt={project.alt ?? `Projeto ${project.title}`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-0 p-4">
            <div className="flex h-full w-full items-center justify-center rounded-xl border border-dashed border-[#0a0a0f]/20 bg-white/50 px-3 text-center dark:border-white/20 dark:bg-white/5">
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#0a0a0f]/45 dark:text-white/45">
                Espaço reservado para imagem
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-medium leading-snug text-[#0a0a0f] transition-colors duration-200 group-hover:text-[#4f39f6] dark:text-white md:text-xl">
            {project.title}
          </h3>
          <ArrowUpRight
            className="mt-1 h-5 w-5 shrink-0 text-[#0a0a0f]/40 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-white/40"
            strokeWidth={2}
          />
        </div>
        <p className="mt-2 text-sm text-[#0a0a0f]/50 dark:text-white/50">
          {project.subtitle}
        </p>
        <p className="mt-5 text-sm font-medium text-[#0a0a0f]/65 dark:text-white/65">
          {projectDomain}
        </p>
      </div>
    </a>
  );
}