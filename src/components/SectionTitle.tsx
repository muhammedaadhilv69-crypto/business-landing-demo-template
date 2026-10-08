import type { ReactNode } from "react";

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-bold tracking-tight rtl:leading-snug rtl:tracking-normal">
      {children}
    </h2>
  );
}
