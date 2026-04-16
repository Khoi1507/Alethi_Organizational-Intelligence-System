import { cn } from "@/lib/utils";

interface TagPillProps {
  label: string;
  className?: string;
  color?: string;
}

export function TagPill({ label, className, color = "#5DDFF0" }: TagPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide",
        "border",
        className
      )}
      style={{
        background: `${color}14`,
        color,
        borderColor: `${color}40`,
      }}
    >
      {label}
    </span>
  );
}
