import { capabilitiesContent } from "@/lib/site-content";
import { SectionShell } from "@/components/ui/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { InfoCard } from "@/components/ui/info-card";
import { TransformationFlow } from "@/components/visuals/transformation-flow";
import {
  Eye,
  GitBranch,
  Scale,
  ArrowRightLeft,
  RefreshCw,
} from "lucide-react";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  Eye: <Eye size={20} />,
  GitBranch: <GitBranch size={20} />,
  Scale: <Scale size={20} />,
  ArrowRightLeft: <ArrowRightLeft size={20} />,
  RefreshCw: <RefreshCw size={20} />,
};

const cardColors: Record<string, string> = {
  Eye:            "#5DDFF0",
  GitBranch:      "#5DDFF0",
  Scale:          "#5DDFF0",
  ArrowRightLeft: "#5DDFF0",
  RefreshCw:      "#5DDFF0",
};

const iconColors: Record<string, string> = {
  Eye:            "#5DDFF0",
  GitBranch:      "#5DDFF0",
  Scale:          "#5DDFF0",
  ArrowRightLeft: "#5DDFF0",
  RefreshCw:      "#5DDFF0",
};

export function CapabilitiesSection() {
  return (
    <SectionShell id="product" className="bg-[#0A1628] section-accent-top">
      <SectionHeading
        headline={capabilitiesContent.headline}
        subtext={capabilitiesContent.subtext}
        centered
        headlineClassName="gradient-text"
      />
      <TransformationFlow />

      <div className="max-w-3xl mx-auto flex flex-col">
        {capabilitiesContent.cards.map((card, i) => {
          const isLast = i === capabilitiesContent.cards.length - 1;
          return (
            <div key={card.title} className="flex gap-5">
              {/* Step gutter */}
              <div className="flex flex-col items-center pt-7 shrink-0 w-8">
                <span className="text-xs font-bold" style={{ color: "#2E4A70" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {!isLast && (
                  <div className="flex-1 w-px mt-2" style={{ background: "rgba(46,74,112,0.5)" }} />
                )}
              </div>

              {/* Card */}
              <div className={`flex-1 ${!isLast ? "mb-4" : ""}`}>
                <InfoCard
                  icon={iconMap[card.icon]}
                  title={card.title}
                  body={card.body}
                  highlight={isLast}
                  accentColor={cardColors[card.icon]}
                  iconColor={iconColors[card.icon]}
                />
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
