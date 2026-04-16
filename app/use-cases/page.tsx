import { Navbar } from "@/components/marketing/navbar";
import { UseCasesSection } from "@/components/marketing/use-cases-section";
import { CtaSection } from "@/components/marketing/cta-section";
import { Footer } from "@/components/marketing/footer";

export const metadata = {
  title: "Use Cases — Alethi",
  description:
    "Start with one high-friction workflow or one hard recurring decision. See how Alethi is used.",
};

export default function UseCasesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <UseCasesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
