import type { Copy } from "@/content/site.config";
import { whatsappLink } from "@/content/site.config";
import type { Locale } from "@/lib/i18n";
import Container from "./Container";
import ButtonLink from "./ButtonLink";
import LanguageSwitch from "./LanguageSwitch";

export default function Header({ lang, t }: { lang: Locale; t: Copy }) {
  return (
    <header className="sticky top-0 z-20 bg-primary text-primary-foreground">
      <Container className="flex items-center justify-between gap-3 py-3">
        <a href="#top" className="font-display text-lg font-bold no-underline">
          {t.name}
        </a>
        <div className="flex items-center gap-2">
          <LanguageSwitch lang={lang} label={t.switchLabel} />
          <ButtonLink href={whatsappLink(t)} size="sm" className="hidden sm:inline-flex">
            {t.cta}
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
