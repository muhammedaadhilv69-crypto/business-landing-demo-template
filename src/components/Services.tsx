import { site } from "@/content/site.config";
import { RevealGroup, RevealItem } from "@/components/Reveal";

const copy = site.copy;

export default function Services() {
  if (site.services.length === 0) return null;
  return (
    <section id="services" className="relative bg-paper py-[clamp(4rem,10vw,7rem)]">
      <div className="wrap-wide">
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12">
          {/* Header stays put while the board scrolls past it. */}
          <header className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <RevealItem>
                {copy.services.eyebrow && (
                  <p className="eyebrow">{copy.services.eyebrow}</p>
                )}
              </RevealItem>
              <RevealItem delay={0.05}>
                <h2 className="mt-4 font-heading text-step-4 font-bold tracking-[-0.03em]">
                  {copy.services.title}
                  {copy.services.titleAccent && (
                    <span className="text-ink-3"> {copy.services.titleAccent}</span>
                  )}
                </h2>
              </RevealItem>
              {copy.services.intro && (
                <RevealItem delay={0.1}>
                  <p className="mt-4 max-w-[38ch] text-ink-2">{copy.services.intro}</p>
                </RevealItem>
              )}
            </div>
          </header>

          <RevealGroup className="lg:col-span-7 lg:col-start-6" stagger={0.06}>
            {/* RevealItem interposes an <li> between <ul> and its children, so
                `first:` cannot select the first row. The index drives the
                heavier cap rule instead. */}
            <ul className="border-b border-hairline">
              {site.services.map((s, i) => (
                <RevealItem key={s.title} as="li" className="group py-6 md:py-7">
                  <div
                    className={`transition-colors duration-300 ${
                      i === 0 ? "border-t-2 border-t-ink" : "border-t border-hairline"
                    }`}
                  >
                    <div className="flex items-baseline gap-3 md:gap-5">
                      <span className="tnum w-6 shrink-0 self-start pt-1.5 text-[0.72rem] font-bold text-ink-3">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <h3 className="font-heading text-step-1 font-bold tracking-[-0.02em] transition-colors duration-300 group-hover:text-brand">
                        {s.title}
                      </h3>

                      {/* Dotted leader draws the eye across to the figure. */}
                      <span className="leader" aria-hidden="true" />

                      {s.price && (
                        <span className="tnum shrink-0 font-heading text-step-1 font-bold whitespace-nowrap text-signal-700">
                          {s.price}
                        </span>
                      )}
                    </div>

                    {s.description && (
                      <p className="mt-2 max-w-[56ch] pl-9 text-[0.95rem] leading-relaxed text-ink-2 md:pl-11">
                        {s.description}
                      </p>
                    )}
                  </div>
                </RevealItem>
              ))}
            </ul>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}