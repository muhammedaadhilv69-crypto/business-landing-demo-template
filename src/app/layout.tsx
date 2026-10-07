import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { site } from "@/content/site.config";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [{ url: "/images/1.svg" }], // replace with a 1200x630 jpg/png for best WhatsApp previews
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const c = site.colors;
  const vars = {
    "--primary": c.primary,
    "--accent": c.accent,
    "--ink": c.ink,
    "--paper": c.paper,
    "--mist": c.mist,
  } as CSSProperties;

  return (
    <html lang={site.lang} dir={site.dir}>
      <body className={`${display.variable} ${body.variable}`} style={vars}>
        {children}
      </body>
    </html>
  );
}
