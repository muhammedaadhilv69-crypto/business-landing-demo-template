import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site.config";
import { buttonVariants } from "@/components/ui/button";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";

export default function Hours() {
  return (
    <section id="hours" className="relative bg-stock py-[clamp(4rem,10vw,7rem)]">
      <div className="wrap-wide">
        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-12">
          {/* Ledger */}
          <div className="lg:col-span-6">
            <RevealItem>
              <p className="eyebrow">Plan your visit</p>
              <h2 className="mt-4 font-heading text-step-4 font-bold tracking-[-0.03em]">
                Opening hours
              </h2>
            </RevealItem>

            <Reveal delay={0.06}>
              <table className="mt-8 w-full max-w-md border-collapse">
                <caption className="sr-only">Weekly opening hours</caption>
                <tbody>
                  {site.hours.map((h) => {
                    const closed = !(h.open && h.close);
                    return (
                      <tr
                        key={h.day}
                        className="group border-t border-hairline transition-colors duration-200 last:border-b hover:bg-brand-50/70"
                      >
                        <th
                          scope="row"
                          className="py-3.5 text-start font-heading text-[1.02rem] font-bold tracking-[-0.01em]"
                        >
                          {h.day}
                        </th>
                        <td
                          className={`tnum py-3.5 text-end text-[0.95rem] tabular-nums ${
                            closed ? "text-ink-3" : "text-ink-2"
                          }`}
                        >
                          {h.open && h.close ? `${h.open} to ${h.close}` : "Closed"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Reveal>
          </div>

          {/* Arrivals card, nudged down so the split is not a plain 50/50. */}
          <RevealGroup className="lg:col-span-5 lg:col-start-8 lg:pt-16" stagger={0.08}>
            <RevealItem>
              <p className="eyebrow">Arrivals</p>
              <h2 className="mt-4 font-heading text-step-4 font-bold tracking-[-0.03em]">
                Find us
              </h2>
            </RevealItem>

            <RevealItem>
              <address className="mt-6 flex gap-3 not-italic">
                <MapPin className="mt-1 size-5 shrink-0 text-signal" aria-hidden="true" />
                <span className="text-step-1 leading-snug font-medium text-pretty">
                  {site.address}
                </span>
              </address>
            </RevealItem>

            <RevealItem>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonVariants({ variant: "solid", size: "lg" })} mt-8`}
              >
                Open in Google Maps
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </RevealItem>

            <RevealItem>
              <dl className="mt-8 border-t border-hairline pt-6 text-[0.95rem]">
                <div className="flex items-center justify-between gap-4 py-1.5">
                  <dt className="text-ink-2">Phone</dt>
                  <dd className="tnum font-semibold">
                    <a
                      href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                      className="inline-flex items-center gap-1.5 rounded-xs underline decoration-signal/50 underline-offset-4 transition-colors hover:text-brand hover:decoration-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                    >
                      <Phone className="size-3.5" aria-hidden="true" />
                      {site.phone}
                    </a>
                  </dd>
                </div>

                {site.instagram && (
                  <div className="flex items-center justify-between gap-4 py-1.5">
                    <dt className="text-ink-2">Instagram</dt>
                    <dd>
                      <a
                        href={site.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xs font-semibold underline decoration-signal/50 underline-offset-4 transition-colors hover:text-brand hover:decoration-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                      >
                        @shop
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </RevealItem>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}