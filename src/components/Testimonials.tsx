import { Quote } from "lucide-react";
import { site } from "@/content/site.config";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export default function Testimonials() {
  if (site.testimonials.length === 0) return null;
  return (
    <section className="relative overflow-hidden bg-paper py-[clamp(4rem,10vw,7rem)]">
      {/* Oversized watermark mark, bled off the leading edge. */}
      <Quote
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 -left-4 size-40 text-signal opacity-[0.07] sm:size-56"
        strokeWidth={1}
      />

      <div className="wrap-wide relative">
        <RevealItem>
          <p className="eyebrow">Word of mouth</p>
          <h2 className="mt-4 font-heading text-step-4 font-bold tracking-[-0.03em]">
            What customers say
          </h2>
        </RevealItem>

        <hr className="rule-fade mt-8" />

        <RevealGroup
          className="mt-12 grid gap-x-16 gap-y-12 md:grid-cols-2 md:gap-y-16"
          stagger={0.08}
        >
          {site.testimonials.map((t) => (
            <RevealItem key={t.name} as="figure" className="flex h-full flex-col">
              <blockquote className="relative font-heading text-step-2 leading-[1.28] tracking-[-0.02em] text-pretty">
                <span
                  aria-hidden="true"
                  className="text-signal-700"
                  style={{ textIndent: "-0.42em" }}
                >
                  &ldquo;
                </span>
                {t.quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-signal" aria-hidden="true" />
                <span className="text-[0.82rem] font-bold tracking-[0.12em] text-ink uppercase">
                  {t.name}
                </span>
              </figcaption>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}