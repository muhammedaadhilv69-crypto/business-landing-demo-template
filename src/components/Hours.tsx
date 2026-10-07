import { site } from "@/content/site.config";

export default function Hours() {
  return (
    <section id="hours" className="section section-tint">
      <div className="wrap split">
        <div>
          <h2 className="section-title">Opening hours</h2>
          <table className="hours">
            <tbody>
              {site.hours.map((h) => (
                <tr key={h.day}>
                  <th scope="row">{h.day}</th>
                  <td>{h.open && h.close ? `${h.open} to ${h.close}` : "Closed"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="section-title">Find us</h2>
          <p className="address">{site.address}</p>
          <a className="btn btn-outline" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
