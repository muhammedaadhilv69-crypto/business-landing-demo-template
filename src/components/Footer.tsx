import type { Copy } from "@/content/site.config";
import Container from "./Container";

export default function Footer({ t }: { t: Copy }) {
  return (
    <footer className="bg-black/80 py-6 text-sm text-white/70">
      <Container>
        <p>
          &copy; {new Date().getFullYear()} {t.name}. {t.address}
        </p>
      </Container>
    </footer>
  );
}
