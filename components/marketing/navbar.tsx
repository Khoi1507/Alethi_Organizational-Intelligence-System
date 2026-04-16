"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "glass-nav" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-[#F7FAFD] tracking-tight font-heading"
        >
          {navContent.brand}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navContent.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-[#AABFD8] hover:text-[#F7FAFD] transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={navContent.cta.href} size="sm">
            {navContent.cta.label}
          </Button>
        </div>

        <button
          className="md:hidden text-[#AABFD8] hover:text-[#F7FAFD] p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-nav px-6 py-4 flex flex-col gap-3 border-t border-[#2E4A70]/50">
          {navContent.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-[#DCE8F5] hover:text-[#F7FAFD] py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            href={navContent.cta.href}
            size="sm"
            className="mt-2 w-full justify-center"
          >
            {navContent.cta.label}
          </Button>
        </div>
      )}
    </header>
  );
}
