import { Navbar } from "@/components/marketing/navbar";
import { HeroSection } from "@/components/marketing/hero-section";
import { ProblemSection } from "@/components/marketing/problem-section";
import { CapabilitiesSection } from "@/components/marketing/capabilities-section";
import { TrustSection } from "@/components/marketing/trust-section";
import { UseCasesSection } from "@/components/marketing/use-cases-section";
import { CtaSection } from "@/components/marketing/cta-section";
import { Footer } from "@/components/marketing/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <CapabilitiesSection />
        <TrustSection />
        <UseCasesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
