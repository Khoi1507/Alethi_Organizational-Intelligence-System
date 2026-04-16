import { heroContent } from "@/lib/site-content";
import { Button } from "@/components/ui/button";
import { HeroNetworkVisual } from "./hero-network-visual";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 px-6 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.12]"
          style={{
            background:
              "radial-gradient(circle, #5DDFF0 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.1]"
          style={{
            background:
              "radial-gradient(circle, #A882FF 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5DDFF0] mb-6">
            {heroContent.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#F7FAFD] leading-[1.08] mb-6">
            {heroContent.headline}
          </h1>
          <p className="text-lg text-[#DCE8F5] leading-relaxed mb-8 max-w-xl">
            {heroContent.subtext}
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button href={heroContent.primaryCta.href} size="lg">
              {heroContent.primaryCta.label}
            </Button>
          </div>
          <p className="text-sm text-[#AABFD8]">{heroContent.trustLine}</p>
        </div>

        {/* Right: animated SVG visual */}
        <div className="hidden lg:flex items-center justify-center">
          <HeroNetworkVisual />
        </div>
      </div>
    </section>
  );
}
