import Link from "next/link";
import { otherLocale, type Locale } from "@/lib/i18n";

export default function LanguageSwitch({ lang, label }: { lang: Locale; label: string }) {
  const other = otherLocale(lang);
  return (
    <Link
      href={`/${other}`}
      hrefLang={other}
      lang={other}
      className="rounded-lg border border-white/40 px-3 py-1.5 text-sm font-bold text-white hover:bg-white/10"
    >
      {label}
    </Link>
  );
}
