import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionShellProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionShell({ children, className, id }: SectionShellProps) {
  return (
    <section id={id} className={cn("py-24 md:py-32 px-6", className)}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
