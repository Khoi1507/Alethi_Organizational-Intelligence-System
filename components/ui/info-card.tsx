import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  body: string;
  fullWidth?: boolean;
  highlight?: boolean;
  className?: string;
  accentColor?: string;
  iconColor?: string;
}

export function InfoCard({
  icon,
  title,
  body,
  fullWidth,
  highlight,
  className,
  accentColor,
  iconColor = "#5DDFF0",
}: InfoCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-7 border transition-all duration-200",
        highlight
          ? "gradient-border-card border-transparent"
          : "bg-[#1A2E48] border-[#2E4A70] hover:border-[#5DDFF0]/30 hover:bg-[#203554]",
        fullWidth && "md:flex md:items-start md:gap-8",
        className
      )}
    >
      {icon && (
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 md:mb-0 md:shrink-0"
          style={{ background: `${iconColor}18` }}
        >
          <span style={{ color: iconColor }}>{icon}</span>
        </div>
      )}
      <div>
        <h3
          className="text-lg font-semibold mb-2"
          style={{ color: accentColor ?? "#F7FAFD" }}
        >{title}</h3>
        <p className="text-[#DCE8F5] leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
