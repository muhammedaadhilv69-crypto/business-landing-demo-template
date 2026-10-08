import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

/**
 * The one place button geometry lives.
 *
 * Landing-appropriate sizes/variants are added alongside the base-nova set so
 * shadcn components stay available. Anchors use `buttonVariants()` directly:
 *
 *   <a className={buttonVariants({ variant: "signal", size: "lg" })} />
 */
const buttonVariants = cva(
  [
    "group/btn relative inline-flex shrink-0 items-center justify-center gap-2",
    "whitespace-nowrap select-none",
    "border border-transparent font-semibold leading-none",
    "transition-[transform,background-color,border-color,color,box-shadow] duration-200 ease-[var(--ease-standard)]",
    "focus-visible:outline-2 focus-visible:outline-offset-4",
    "active:translate-y-px",
    "disabled:pointer-events-none disabled:opacity-45",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        /* Primary call to action. The single accent on the page. */
        signal:
          "bg-signal text-accent-foreground border-signal hover:bg-signal-300 hover:border-signal-300 hover:-translate-y-0.5 focus-visible:outline-ink hover:shadow-[0_6px_18px_-6px_var(--accent)]",
        /* Brand-filled, for use on light grounds. */
        solid:
          "bg-brand text-primary-foreground border-brand hover:bg-brand-800 hover:border-brand-800 hover:-translate-y-0.5 focus-visible:outline-brand",
        /* Ink outline on light grounds. */
        outline:
          "bg-transparent text-ink border-hairline-strong hover:bg-brand-50 hover:border-brand hover:text-brand focus-visible:outline-ink",
        /* Light outline on brand grounds. */
        "outline-on-brand":
          "bg-transparent text-on-brand border-on-brand/45 hover:bg-on-brand hover:text-brand hover:border-on-brand focus-visible:outline-signal",
        /* Quiet text link with a travelling arrow. */
        link: "bg-transparent text-ink border-transparent gap-1.5 hover:text-brand px-0 focus-visible:outline-ink",
        /* shadcn defaults, retained for component use. */
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:outline-destructive",
      },
      size: {
        /* Landing scale */
        xl: "h-14 rounded-md px-8 text-[0.98rem] tracking-[0.01em]",
        lg: "h-12 rounded-md px-6 text-[0.95rem] tracking-[0.01em]",
        md: "h-11 rounded-md px-5 text-[0.9rem]",
        sm: "h-9 rounded-sm px-4 text-[0.85rem]",
        xs: "h-7 rounded-xs px-3 text-[0.78rem]",
        /* Base-nova scale, required by the shadcn components in this folder. */
        "icon-xs": "size-6 rounded-xs",
        "icon-sm": "size-9 rounded-full",
        icon: "size-11 rounded-full",
        default: "h-8 rounded-sm px-2.5 text-sm",
      },
    },
    defaultVariants: { variant: "signal", size: "lg" },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

function Button({
  className,
  variant,
  size,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };