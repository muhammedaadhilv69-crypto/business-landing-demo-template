import { MapPin, Phone } from "lucide-react";
import {
  site,
  whatsappLink,
  telLink,
  hoursSpan,
} from "@/content/site.config";
import { buttonVariants } from "@/components/ui/button";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import OpenStatus from "./OpenStatus";
import { cn } from "@/lib/utils";

const copy = site.copy;
const span = hoursSpan();

/** Trade card: the practical facts, built from config so it never lies. */
function TradeCard() {
  return (
    <RevealItem className="w-full">
      <div className="relative overflow-hidden rounded-lg border border-on-brand/18 bg-on-brand/[0.055] p-6 backdrop-blur-[2px] sm:p-7">
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/70 to-transparent" />

        <p className="font-body text-[0.7rem] font-bold tracking-[0.2em] text-signal uppercase">
          {copy.hero.visitUs}
        </p>

        <address className="mt-4 flex gap-3 text-[0.95rem] leading-relaxed text-on-brand-2 not-italic">
          <MapPin className="mt-0.5 size-4 shrink-0 text-signal" aria-hidden="true" />
          <span>{site.address}</span>
        </address>

        <hr className="my-5 border-on-brand/12" />

        <dl className="grid gap-3 text-[0.9rem]">
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-on-brand-2">{copy.hero.phoneLabel}</dt>
            <dd className="tnum">
              <a
                href={telLink}
                className="inline-flex items-center gap-1.5 rounded-xs font-semibold text-on-brand underline decoration-signal/50 decoration-1 underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal hover:decoration-signal"
              >
                <Phone className="size-3.5" aria-hidden="true" />
                {site.phone}
              </a>
            </dd>
          </div>

          {/* Omitted entirely when every day is marked closed. */}
          {span && (
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-on-brand-2">{copy.hero.openLabel}</dt>
              <dd className="tnum font-semibold text-on-brand">{span}</dd>
            </div>
          )}
        </dl>

        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline-on-brand", size: "sm" }),
            "mt-6 w-full",
          )}
        >
          {copy.buttons.maps}
        </a>
      </div>
    </RevealItem>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="on-brand relative overflow-hidden bg-brand text-on-brand"
    >
      {/* Depth from light, not shadow: a low brass bloom top-right and a
          hairline grid. Both inert to pointer events. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 size-[42rem] rounded-full opacity-45 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--accent), transparent 62%) 0%, transparent 68%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "5.5rem 5.5rem",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, #000 20%, transparent 78%)",
        }}
      />

      <div className="wrap-wide relative">
        <RevealGroup className="grid items-end gap-12 pt-14 pb-16 md:pt-24 md:pb-24 lg:grid-cols-12 lg:gap-16">
          {/* Masthead */}
          <div className="lg:col-span-7">
            <RevealItem>
              <OpenStatus />
            </RevealItem>

            <RevealItem>
              <h1 className="mt-6 font-heading text-step-7 font-bold tracking-[-0.035em] text-balance">
                {site.name}
              </h1>
            </RevealItem>

            <RevealItem>
              <p className="mt-5 max-w-[46ch] text-step-1 leading-[1.45] text-on-brand-2 text-pretty">
                {site.tagline}
              </p>
            </RevealItem>

            <RevealItem>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={whatsappLink()}
                  className={buttonVariants({ variant: "signal", size: "xl" })}
                >
                  {copy.buttons.whatsappCta}
                </a>
                <a
                  href={telLink}
                  className={buttonVariants({ variant: "outline-on-brand", size: "xl" })}
                >
                  {copy.buttons.call} {site.phone}
                </a>
              </div>
            </RevealItem>
          </div>

          {/* Colophon */}
          <div className="lg:col-span-5">
            <TradeCard />
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}