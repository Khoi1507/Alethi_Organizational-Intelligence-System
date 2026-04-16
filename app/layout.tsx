import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Alethi — The Organizational Intelligence System",
  description:
    "Alethi helps firms understand what is happening across the business, choose better strategies and tactics, and turn those choices into real operating changes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} dark`}
    >
      <body className="min-h-screen antialiased" style={{ background: "#0A1628", color: "#F7FAFD" }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
