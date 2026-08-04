import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-[#0a0a0f]">
      {/* Background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 85% 30%, rgba(147,130,255,0.18), transparent 60%), radial-gradient(800px 500px at 10% 90%, rgba(255,200,220,0.15), transparent 60%)",
        }}
      />
      <div className="relative z-10">
        <Header />
        <Hero />
      </div>
    </main>
  );
}
