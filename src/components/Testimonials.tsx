import { site } from "@/content/site.config";

export default function Testimonials() {
  if (site.testimonials.length === 0) return null;
  return (
    <section className="section">
      <div className="wrap">
        <h2 className="section-title">What customers say</h2>
        <div className="quotes">
          {site.testimonials.map((t) => (
            <figure key={t.name} className="quote">
              <blockquote>{t.quote}</blockquote>
              <figcaption>{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
