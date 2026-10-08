import type { Copy } from "@/content/site.config";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Testimonials({ t }: { t: Copy }) {
  if (t.testimonials.length === 0) return null;
  return (
    <section className="py-[clamp(2.5rem,7vw,5rem)]">
      <Container>
        <SectionTitle>{t.sections.testimonials}</SectionTitle>
        <div className="grid gap-8 md:grid-cols-2">
          {t.testimonials.map((q) => (
            <figure key={q.name} className="max-w-xl border-s-4 border-brand ps-5">
              <blockquote className="mb-2 text-xl">{q.quote}</blockquote>
              <figcaption className="font-bold">{q.name}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
