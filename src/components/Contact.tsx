import type { Copy } from "@/content/site.config";
import { site, whatsappLink, telLink } from "@/content/site.config";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import ButtonLink from "./ButtonLink";

export default function Contact({ t }: { t: Copy }) {
  return (
    <section id="contact" className="bg-primary py-[clamp(2.5rem,7vw,5rem)] text-primary-foreground">
      <Container>
        <SectionTitle>{t.sections.contact}</SectionTitle>
        <p className="mb-6 max-w-[40ch] opacity-90">{t.sections.contactText}</p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={whatsappLink(t)}>{t.cta}</ButtonLink>
          <ButtonLink href={telLink} variant="ghost">
            {t.call} <bdi dir="ltr" className="ms-2">{site.phone}</bdi>
          </ButtonLink>
          {site.instagram && (
            <ButtonLink href={site.instagram} variant="ghost" external>
              {t.instagram}
            </ButtonLink>
          )}
        </div>
      </Container>
    </section>
  );
}
