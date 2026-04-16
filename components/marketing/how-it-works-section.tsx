import { howItWorksContent } from "@/lib/site-content";
import { SectionShell } from "@/components/ui/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { LoopDiagram } from "@/components/visuals/loop-diagram";

export function HowItWorksSection() {
  return (
    <SectionShell id="how-it-works" className="bg-[#0B1628] section-accent-top">
      <SectionHeading
        eyebrow="The Loop"
        headline={howItWorksContent.headline}
        subtext={howItWorksContent.subtext}
        centered
      />

      <LoopDiagram />

      {/* Supporting text steps below the diagram */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {howItWorksContent.steps.map((step, i) => (
          <div
            key={step.label}
            className="rounded-xl p-5 border border-[#22385A] bg-[#14243C]"
          >
            <span
              className="text-xs font-bold mb-2 block"
              style={{ color: "#6EE7F2" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-semibold text-[#F5F8FC] mb-1 text-sm">
              {step.label}
            </h3>
            <p className="text-xs text-[#D6E0EE] leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
