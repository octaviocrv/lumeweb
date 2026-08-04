import Header from "@/components/layout/Header";
import WorkSection from "@/components/sections/WorkSection";

export default function TrabalhosPage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <div aria-hidden className="h-[104px]" />
      <WorkSection />
    </main>
  );
}