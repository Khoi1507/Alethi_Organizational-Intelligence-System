import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "default" | "lg";
  href?: string;
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      href,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5DDFF0] focus-visible:ring-offset-[#0A1628] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants = {
      primary:
        "text-[#07111F] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]",
      secondary:
        "border border-[#5DDFF0]/40 bg-transparent text-[#F7FAFD] hover:bg-[#5DDFF0]/10 hover:border-[#5DDFF0]/70",
      ghost:
        "text-[#DCE8F5] hover:text-[#F7FAFD] hover:bg-[#1A2E48]",
    };

    const sizes = {
      sm: "h-10 px-5 text-sm",
      default: "h-12 px-6 text-sm",
      lg: "h-14 px-8 text-base",
    };

    const primaryStyle =
      variant === "primary"
        ? {
            background:
              "linear-gradient(135deg, #5DDFF0 0%, #7C9BFF 50%, #A882FF 100%)",
          }
        : {};

    const classes = cn(base, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={classes} style={primaryStyle}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        style={primaryStyle}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
