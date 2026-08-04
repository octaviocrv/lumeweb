import Link from "next/link";

export default function PrecosPage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] px-4 py-10 text-[var(--foreground)] sm:px-6 md:px-12">
      <section className="mx-auto w-full max-w-[960px] rounded-3xl border border-black/5 bg-white/80 p-8 shadow-[0_24px_54px_-24px_rgba(15,23,42,0.35)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02] sm:p-10 md:p-14">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.1em] text-[#2323FF]">
          Lume Web
        </p>
        <h1
          className="text-3xl font-bold leading-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Planos e precos
        </h1>
        <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-black/70 dark:text-white/70 sm:text-lg">
          Esta pagina esta sendo finalizada. Enquanto isso, posso te enviar os valores e opcoes
          ideais para o seu negocio direto no WhatsApp.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="https://wa.me/5531989184698?text=Ola!%20Quero%20conhecer%20os%20planos%20de%20criacao%20de%20site."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-full bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-800"
          >
            Pedir precos no WhatsApp
          </a>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center rounded-full border border-black/10 px-5 py-2.5 text-sm font-semibold text-[#0a0a0f] transition-colors hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
          >
            Voltar para a pagina inicial
          </Link>
        </div>
      </section>
    </main>
  );
}
