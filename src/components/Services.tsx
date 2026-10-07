import { site } from "@/content/site.config";

export default function Services() {
  if (site.services.length === 0) return null;
  return (
    <section id="services" className="section">
      <div className="wrap">
        <h2 className="section-title">Services and prices</h2>
        <ul className="price-list">
          {site.services.map((s) => (
            <li key={s.title} className="price-row">
              <div>
                <h3 className="price-name">{s.title}</h3>
                <p className="price-desc">{s.description}</p>
              </div>
              {s.price && <span className="price-tag">{s.price}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
