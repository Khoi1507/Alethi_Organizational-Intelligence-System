import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  headline: string;
  subtext?: string;
  centered?: boolean;
  className?: string;
  headlineClassName?: string;
}

export function SectionHeading({
  eyebrow,
  headline,
  subtext,
  centered = false,
  className,
  headlineClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        centered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5DDFF0] mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#F7FAFD] leading-tight mb-5${headlineClassName ? ` ${headlineClassName}` : ''}`}>
        {headline}
      </h2>
      {subtext && (
        <p className="text-lg text-[#DCE8F5] leading-relaxed">{subtext}</p>
      )}
    </div>
  );
}
