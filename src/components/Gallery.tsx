import { site } from "@/content/site.config";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export default function Gallery() {
  if (site.gallery.length === 0) return null;
  return (
    <section
      id="gallery"
      className="on-brand relative overflow-hidden bg-brand py-[clamp(4rem,10vw,7rem)] text-on-brand"
    >
      <div className="wrap-wide">
        {/* Header runs inline so the contact sheet gets full width below. */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <RevealItem>
              <p className="eyebrow">Portfolio</p>
            </RevealItem>
            <RevealItem delay={0.05}>
              <h2 className="mt-4 font-heading text-step-4 font-bold tracking-[-0.03em]">
                Recent work
              </h2>
            </RevealItem>
          </div>

          <RevealItem delay={0.1}>
            <p className="max-w-[34ch] text-on-brand-2">
              Straight from the chair. Hover any shot for the full description.
            </p>
          </RevealItem>
        </div>

        <hr className="rule-fade mt-8" />

        {/* Dark stock, hairline gutters: reads as a contact sheet, not a card grid. */}
        <RevealGroup
          className="mt-10 grid grid-cols-2 gap-1.5 sm:gap-2 md:grid-cols-3"
          stagger={0.05}
        >
          {site.gallery.map((img) => (
            <RevealItem key={img.src} as="figure" className="group relative overflow-hidden bg-brand-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-[650ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
              />

              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-brand/92 via-brand/10 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100"
              />

              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-3 text-[0.78rem] leading-snug font-medium tracking-[0.02em] text-on-brand opacity-0 transition-[opacity,transform] duration-400 ease-[var(--ease-out-expo)] group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </figcaption>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}