import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { notFound } from "next/navigation";
import { Bricolage_Grotesque, Figtree, IBM_Plex_Sans_Arabic } from "next/font/google";
import { site, copy } from "@/content/site.config";
import { dirOf, isLocale, locales } from "@/lib/i18n";
import "../globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--f-display", display: "swap" });
const body = Figtree({ subsets: ["latin"], variable: "--f-body", display: "swap" });
const arabic = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: ["400", "500", "700"], variable: "--f-ar", display: "swap" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = copy[lang];
  return {
    metadataBase: new URL(site.url),
    title: t.name,
    description: t.description,
    alternates: { canonical: `/${lang}`, languages: { en: "/en", ar: "/ar" } },
    openGraph: {
      title: t.name,
      description: t.description,
      url: `/${lang}`,
      siteName: t.name,
      locale: lang === "ar" ? "ar_BH" : "en_US",
      type: "website",
      images: [{ url: "/images/1.svg" }], // replace with a 1200x630 jpg/png for WhatsApp previews
    },
  };
}

export default async function LangLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const c = site.colors;
  const vars = {
    "--primary": c.primary,
    "--brand-accent": c.accent,
    "--foreground": c.ink,
    "--background": c.paper,
    "--border": c.mist,
    "--input": c.mist,
    "--muted": c.mist,
    "--secondary": c.mist,
    "--accent": c.mist,
    "--ring": c.accent,
  } as CSSProperties;

  return (
    <html lang={lang} dir={dirOf(lang)} className={`${display.variable} ${body.variable} ${arabic.variable}`}>
      <body style={vars}>{children}</body>
    </html>
  );
}
