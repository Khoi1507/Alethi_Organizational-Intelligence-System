import Link from "next/link";
import { footerContent } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-[#2E4A70]/60 bg-[#0A1628] px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-base font-bold text-[#F7FAFD] font-heading">
            {footerContent.brand}
          </p>
          <p className="text-sm text-[#AABFD8] mt-1">{footerContent.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-6">
          {footerContent.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-[#AABFD8] hover:text-[#F7FAFD] transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-[#AABFD8]">{footerContent.legal}</p>
      </div>
    </footer>
  );
}
