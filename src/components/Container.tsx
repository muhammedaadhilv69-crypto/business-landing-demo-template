import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-[min(100%_-_2.5rem,68rem)]", className)}>{children}</div>;
}
