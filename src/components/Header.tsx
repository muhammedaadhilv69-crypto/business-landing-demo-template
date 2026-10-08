import { site, whatsappLink } from "@/content/site.config";

const copy = site.copy;
const NAV = [
  { href: "#services", label: copy.nav.services },
  { href: "#gallery", label: copy.nav.gallery },
  { href: "#hours", label: copy.nav.hours },
  { href: "#contact", label: copy.nav.contact },
];

/** Brand-neutral geometric mark. Inherits currentColor so it re-skins. */
function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="none">
      <circle cx="16" cy="16" r="14.25" stroke="currentColor" strokeWidth="1.5" opacity=".38" />
      <path d="M7 16h18" stroke="currentColor" strokeWidth="1.5" opacity=".38" />
      <path d="M16 3.5v5M16 23.5v5" stroke="currentColor" strokeWidth="1.5" opacity=".38" />
      <circle cx="16" cy="16" r="5.25" fill="currentColor" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-on-brand/12 bg-brand text-on-brand">
      <div className="wrap-wide">
        <div className="flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
          <a
            href="#top"
            className="group flex items-center gap-2.5 rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
          >
            <Mark className="size-7 shrink-0 text-signal transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-90 md:size-8" />
            <span className="font-heading text-[1.05rem] font-bold tracking-[-0.02em] whitespace-nowrap md:text-xl">
              {site.name}
            </span>
          </a>

          <nav aria-label={copy.nav.sections} className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="group rounded-xs px-3 py-2 text-[0.86rem] font-medium tracking-[0.02em] text-on-brand-2 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal hover:text-on-brand"
              >
                <span className="relative">
                  {n.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-signal transition-[width] duration-300 ease-[var(--ease-out-expo)] group-hover:w-full" />
                </span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-sm border border-on-brand/40 px-4 py-2 text-[0.85rem] font-semibold text-on-brand transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal hover:border-on-brand hover:bg-on-brand hover:text-brand sm:inline-flex"
            >
              {copy.buttons.directions}
            </a>
            <a
              href={whatsappLink()}
              className="inline-flex h-10 items-center rounded-sm bg-signal px-4 text-[0.85rem] font-bold text-accent-foreground transition-[transform,background-color] duration-200 ease-[var(--ease-standard)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink hover:-translate-y-0.5 hover:bg-signal-300 sm:px-5"
            >
              {copy.buttons.whatsappCta}
            </a>
          </div>
        </div>
      </div>

      {/* Reading progress. Driven by the CSS scroll timeline, so this costs
          no JS listener and no hydration work. */}
      <div aria-hidden="true" className="progress-line absolute inset-x-0 -bottom-px" />
    </header>
  );
}