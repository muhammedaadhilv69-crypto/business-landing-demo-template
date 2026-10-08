import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Local Business",
  description: "One-page business site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
