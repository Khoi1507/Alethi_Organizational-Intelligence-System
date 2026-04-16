import { ctaContent } from "@/lib/site-content";
import { SectionShell } from "@/components/ui/section-shell";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <SectionShell className="bg-[#0A1628]">
      <div
        className="relative max-w-2xl mx-auto text-center rounded-3xl px-10 py-16 md:px-16 md:py-20 border overflow-hidden"
        style={{
          borderColor: "#2E4A70",
          background:
            "linear-gradient(135deg, rgba(26,46,72,0.9) 0%, rgba(15,30,52,0.97) 100%)",
        }}
      >
        {/* Ambient glow */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(93,223,240,0.18) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <h2 className="relative text-3xl md:text-4xl font-bold text-[#F7FAFD] mb-5">
          {ctaContent.headline}
        </h2>
        <p className="relative text-lg text-[#DCE8F5] mb-4">
          {ctaContent.subtext}
        </p>
        <p className="relative text-[#DCE8F5] mb-10 leading-relaxed">
          {ctaContent.body}
        </p>
        <Button href={ctaContent.cta.href} size="lg" className="relative">
          {ctaContent.cta.label}
        </Button>
        <p className="relative mt-6 text-sm text-[#AABFD8]">
          {ctaContent.microcopy}
        </p>
      </div>
    </SectionShell>
  );
}
