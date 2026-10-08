import { site } from "@/content/site.config";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#hours", label: "Hours" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="on-brand footer-pad bg-brand-900 text-on-brand-2">
      <div className="wrap-wide">
        <div className="grid gap-10 border-t border-on-brand/12 pt-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-heading text-step-1 font-bold tracking-[-0.02em] text-on-brand">
              {site.name}
            </p>
            <address className="mt-3 max-w-[34ch] text-[0.9rem] leading-relaxed not-italic">
              {site.address}
            </address>
          </div>

          <nav aria-label="Footer" className="lg:col-span-4">
            <p className="text-[0.7rem] font-bold tracking-[0.18em] text-signal uppercase">
              Sections
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-[0.9rem]">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="rounded-xs underline decoration-transparent underline-offset-4 transition-colors hover:text-on-brand hover:decoration-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="text-[0.7rem] font-bold tracking-[0.18em] text-signal uppercase">
              Hours
            </p>
            <p className="tnum mt-4 text-[0.9rem]">
              {site.hours[0]?.open} – {site.hours[0]?.close}
            </p>
            {site.instagram && (
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block rounded-xs text-[0.9rem] underline decoration-signal/40 underline-offset-4 transition-colors hover:text-on-brand hover:decoration-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
              >
                Instagram
              </a>
            )}
          </div>
        </div>

        <p className="mt-12 border-t border-on-brand/12 pt-6 text-[0.82rem]">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}