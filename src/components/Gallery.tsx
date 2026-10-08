import type { Copy } from "@/content/site.config";
import { site } from "@/content/site.config";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Gallery({ t }: { t: Copy }) {
  if (site.gallery.length === 0) return null;
  return (
    <section id="gallery" className="bg-card py-[clamp(2.5rem,7vw,5rem)]">
      <Container>
        <SectionTitle>{t.sections.gallery}</SectionTitle>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {site.gallery.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={src} src={src} alt={t.galleryAlts[i] ?? ""} loading="lazy" className="aspect-square w-full rounded-lg bg-muted object-cover" />
          ))}
        </div>
      </Container>
    </section>
  );
}
