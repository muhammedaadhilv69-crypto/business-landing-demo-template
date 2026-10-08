import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  solid: "border-brand bg-brand text-neutral-900",
  ghost: "border-white/55 bg-transparent text-white",
  outline: "border-foreground bg-transparent text-foreground",
};

const sizes = {
  md: "px-6 py-3.5",
  sm: "px-4 py-2 text-[0.95rem]",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  external?: boolean;
  className?: string;
};

export default function ButtonLink({ href, children, variant = "solid", size = "md", external, className }: Props) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center rounded-lg border-2 font-bold no-underline",
        "transition-transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </a>
  );
}
