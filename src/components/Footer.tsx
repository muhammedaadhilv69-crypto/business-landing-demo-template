import { site } from "@/content/site.config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p>&copy; {new Date().getFullYear()} {site.name}. {site.address}</p>
      </div>
    </footer>
  );
}
