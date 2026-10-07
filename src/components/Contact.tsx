import { site, whatsappLink, telLink } from "@/content/site.config";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <h2 className="section-title">Ready for a fresh cut?</h2>
        <p className="contact-text">Send us a message with the day and time that suits you. We reply on WhatsApp.</p>
        <div className="hero-actions">
          <a className="btn" href={whatsappLink()}>{site.cta}</a>
          <a className="btn btn-ghost" href={telLink}>Call {site.phone}</a>
          {site.instagram && (
            <a className="btn btn-ghost" href={site.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
