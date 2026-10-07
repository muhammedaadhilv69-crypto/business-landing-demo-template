import { site, whatsappLink, telLink } from "@/content/site.config";
import OpenStatus from "./OpenStatus";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <OpenStatus />
        <h1 className="hero-title">{site.name}</h1>
        <p className="hero-tagline">{site.tagline}</p>
        <div className="hero-actions">
          <a className="btn" href={whatsappLink()}>{site.cta}</a>
          <a className="btn btn-ghost" href={telLink}>Call {site.phone}</a>
        </div>
      </div>
    </section>
  );
}
