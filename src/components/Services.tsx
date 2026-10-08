import type { Copy } from "@/content/site.config";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Services({ t }: { t: Copy }) {
  if (t.services.length === 0) return null;
  return (
    <section id="services" className="py-[clamp(2.5rem,7vw,5rem)]">
      <Container>
        <SectionTitle>{t.sections.services}</SectionTitle>
        <ul className="max-w-2xl">
          {t.services.map((s) => (
            <li key={s.title} className="flex justify-between gap-6 border-b py-4">
              <div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="max-w-[48ch] text-foreground/75">{s.description}</p>
              </div>
              {s.price && <span className="font-display text-xl font-bold whitespace-nowrap">{s.price}</span>}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
