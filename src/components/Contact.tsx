import { AtSign, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink, telLink } from "@/content/site.config";
import { buttonVariants } from "@/components/ui/button";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="on-brand relative overflow-hidden bg-brand text-on-brand"
    >
      {/* Brass hairlines top and bottom frame the band like a printed rule. */}
      <hr className="rule-fade" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 100%, color-mix(in oklab, var(--accent), transparent 78%) 0%, transparent 70%)",
        }}
      />

      <div className="wrap-narrow relative py-[clamp(4.5rem,11vw,8rem)] text-center">
        <RevealGroup stagger={0.07}>
          <RevealItem>
            <p className="eyebrow justify-center before:hidden">Book a chair</p>
          </RevealItem>

          <RevealItem>
            <h2 className="mt-5 font-heading text-step-6 font-bold tracking-[-0.035em] text-balance">
              Ready for a fresh cut?
            </h2>
          </RevealItem>

          <RevealItem>
            <p className="mx-auto mt-5 max-w-[52ch] text-step-0 text-on-brand-2 text-pretty">
              Send us a message with the day and time that suits you. We reply on
              WhatsApp.
            </p>
          </RevealItem>

          <RevealItem>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={whatsappLink()}
                className={buttonVariants({ variant: "signal", size: "xl" })}
              >
                <MessageCircle className="size-[1.05rem]" aria-hidden="true" />
                {site.cta}
              </a>

              <a
                href={telLink}
                className={buttonVariants({ variant: "outline-on-brand", size: "xl" })}
              >
                <Phone className="size-[1.05rem]" aria-hidden="true" />
                Call {site.phone}
              </a>

              {site.instagram && (
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline-on-brand", size: "xl" })}
                >
                  <AtSign className="size-[1.05rem]" aria-hidden="true" />
                  Instagram
                </a>
              )}
            </div>
          </RevealItem>

          <RevealItem>
            <p className="tnum mt-8 text-[0.82rem] tracking-[0.04em] text-on-brand-2">
              {site.hours[0]?.open} – {site.hours[0]?.close} · {site.address}
            </p>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}