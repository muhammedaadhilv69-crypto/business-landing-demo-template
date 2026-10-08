import type { Copy } from "@/content/site.config";
import { site, whatsappLink, telLink } from "@/content/site.config";
import Container from "./Container";
import ButtonLink from "./ButtonLink";
import OpenStatus from "./OpenStatus";
import { getOpenStatus } from "@/lib/open-status";

export default function Hero({ t }: { t: Copy }) {
  return (
    <section id="top" className="bg-primary py-[clamp(3rem,10vw,7rem)] text-primary-foreground">
      <Container className="grid justify-items-start gap-6">
        <OpenStatus status={t.status} time={t.time} initialState={getOpenStatus(t.status, t.time)} />
        <h1 className="max-w-[14ch] font-display text-[clamp(2.75rem,11vw,7rem)] leading-[1.05] font-extrabold tracking-tight rtl:leading-[1.3] rtl:tracking-normal">
          {t.name}
        </h1>
        <p className="max-w-[36ch] text-[clamp(1.1rem,2.5vw,1.4rem)] opacity-90">{t.tagline}</p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={whatsappLink(t)}>{t.cta}</ButtonLink>
          <ButtonLink href={telLink} variant="ghost">
            {t.call} <bdi dir="ltr" className="ms-2">{site.phone}</bdi>
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
