import { Navbar } from "@/components/marketing/navbar";
import { ComparisonSection } from "@/components/marketing/comparison-section";
import { CtaSection } from "@/components/marketing/cta-section";
import { Footer } from "@/components/marketing/footer";

export const metadata = {
  title: "Why Alethi",
  description:
    "Alethi helps you choose better work and improve how the business runs — not just track or automate it.",
};

export default function WhyAlethiPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ComparisonSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
