import { site, whatsappLink } from "@/content/site.config";

export default function Header() {
  return (
    <header className="header">
      <div className="wrap header-row">
        <a href="#top" className="brand">{site.name}</a>
        <a className="btn btn-small" href={whatsappLink()}>{site.cta}</a>
      </div>
    </header>
  );
}
