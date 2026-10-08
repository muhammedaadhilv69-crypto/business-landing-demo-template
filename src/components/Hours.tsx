import type { Copy } from "@/content/site.config";
import { site } from "@/content/site.config";
import { format12 } from "@/lib/i18n";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import ButtonLink from "./ButtonLink";

export default function Hours({ t }: { t: Copy }) {
  return (
    <section id="hours" className="bg-card py-[clamp(2.5rem,7vw,5rem)]">
      <Container className="grid gap-10 md:grid-cols-2">
        <div>
          <SectionTitle>{t.sections.hours}</SectionTitle>
          <table className="w-full max-w-sm border-collapse">
            <tbody>
              {site.hours.map((h) => (
                <tr key={h.day}>
                  <th scope="row" className="w-32 border-b py-2 text-start font-bold">
                    {t.days[h.day]}
                  </th>
                  <td className="border-b py-2 text-start">
                    {h.open && h.close ? (
                      <bdi>
                        {format12(h.open, t.time)} {t.time.to} {format12(h.close, t.time)}
                      </bdi>
                    ) : (
                      t.time.closed
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <SectionTitle>{t.sections.findUs}</SectionTitle>
          <p className="mb-5 max-w-[30ch]">{t.address}</p>
          <ButtonLink href={site.mapsUrl} variant="outline" external>
            {t.mapsLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
