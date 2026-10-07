import { site } from "@/content/site.config";

export default function Gallery() {
  if (site.gallery.length === 0) return null;
  return (
    <section id="gallery" className="section section-tint">
      <div className="wrap">
        <h2 className="section-title">Recent work</h2>
        <div className="gallery">
          {site.gallery.map((img) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={img.src} src={img.src} alt={img.alt} loading="lazy" className="gallery-img" />
          ))}
        </div>
      </div>
    </section>
  );
}
