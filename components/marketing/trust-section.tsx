import { trustContent } from "@/lib/site-content";
import { SectionShell } from "@/components/ui/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { GovernanceFlow } from "@/components/visuals/governance-flow";
import { UserCheck, ShieldCheck, RefreshCw, Building2 } from "lucide-react";
import type { ReactNode } from "react";

const pointMeta: { icon: ReactNode; color: string; bg: string }[] = [
  { icon: <UserCheck size={20} />,   color: "#5DDFF0", bg: "rgba(93,223,240,0.1)" },
  { icon: <ShieldCheck size={20} />, color: "#5DDFF0", bg: "rgba(93,223,240,0.1)" },
  { icon: <RefreshCw size={20} />,   color: "#5DDFF0", bg: "rgba(93,223,240,0.1)" },
  { icon: <Building2 size={20} />,   color: "#5DDFF0", bg: "rgba(93,223,240,0.1)" },
];

export function TrustSection() {
  return (
    <SectionShell id="trust" className="bg-[#0F1E34] section-accent-top">
      <SectionHeading
        eyebrow="Trust"
        headline={trustContent.headline}
        subtext={trustContent.subtext}
        centered
        headlineClassName="gradient-text"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trustContent.points.map((point, i) => {
          const meta = pointMeta[i % pointMeta.length];
          return (
            <div
              key={point.title}
              className="rounded-2xl p-7 border border-[#2E4A70] bg-[#1A2E48] flex gap-5 hover:border-[#5DDFF0]/30 hover:bg-[#203554] transition-all duration-200"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: meta.bg }}
              >
                <span style={{ color: meta.color }}>{meta.icon}</span>
              </div>
              <div>
                <h3
                  className="text-base font-bold mb-2" style={{ color: "#5DDFF0" }}>
                  {point.title}
                </h3>
                <p className="text-sm text-[#DCE8F5] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5DDFF0] mb-2">
          How it works
        </p>
        <p className="text-sm text-[#AABFD8] mb-4">
          Intelligence surfaces the options. You stay in control of every decision.
        </p>
      </div>
      <GovernanceFlow />
    </SectionShell>
  );
}
