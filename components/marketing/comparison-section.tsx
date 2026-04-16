import { comparisonContent } from "@/lib/site-content";
import { SectionShell } from "@/components/ui/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { Check, Minus } from "lucide-react";

export function ComparisonSection() {
  return (
    <SectionShell id="why-alethi">
      <SectionHeading
        eyebrow="Why Alethi"
        headline={comparisonContent.headline}
        subtext={comparisonContent.subtext}
        centered
      />
      <div className="overflow-x-auto rounded-2xl border border-[#2E4A70]">
        <table className="w-full min-w-[560px]">
          <thead>
            <tr className="border-b border-[#2E4A70]">
              <th className="text-left px-6 py-4 text-[#AABFD8] text-sm font-medium">
                Capability
              </th>
              <th className="text-left px-6 py-4 text-[#AABFD8] text-sm font-medium">
                Others
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold" style={{ color: "#5DDFF0" }}>
                Alethi
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonContent.rows.map((row, i) => (
              <tr
                key={row.capability}
                className="border-b border-[#2E4A70]/50 last:border-0"
                style={{
                  background: i % 2 === 0 ? "rgba(26,46,72,0.5)" : "transparent",
                }}
              >
                <td className="px-6 py-4 text-[#F7FAFD] text-sm font-medium">
                  {row.capability}
                </td>
                <td className="px-6 py-4 text-sm text-[#AABFD8]">
                  <span className="flex items-center gap-2">
                    <Minus size={13} className="opacity-40 shrink-0" />
                    {row.others}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-[#DCE8F5]">
                  <span className="flex items-center gap-2">
                    <Check size={13} className="shrink-0" style={{ color: "#41D39B" }} />
                    {row.alethi}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}
