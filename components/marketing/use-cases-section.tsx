import { useCasesContent } from "@/lib/site-content";
import { SectionShell } from "@/components/ui/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagPill } from "@/components/ui/tag-pill";

const caseColors = ["#3DD99F", "#7C9BFF", "#A882FF", "#FFB86B"];

export function UseCasesSection() {
  return (
    <SectionShell id="use-cases" className="bg-[#0A1628] section-accent-top">
      <SectionHeading
        eyebrow="Use Cases"
        headline={useCasesContent.headline}
        subtext={useCasesContent.subtext}
        centered
        headlineClassName="gradient-text"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {useCasesContent.cases.map((c, i) => {
          const color = caseColors[i % caseColors.length];
          return (
            <div
              key={c.title}
              className="rounded-2xl p-7 border border-[#2E4A70] bg-[#1A2E48] hover:border-[#5DDFF0]/35 hover:bg-[#203554] transition-all duration-200"
            >
              <TagPill label={c.tag} color={color} className="mb-4" />
              <h3 className="text-lg font-bold mb-3" style={{ color: "#5DDFF0" }}>
                {c.title}
              </h3>
              <p className="text-sm text-[#DCE8F5] leading-relaxed">{c.description}</p>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
