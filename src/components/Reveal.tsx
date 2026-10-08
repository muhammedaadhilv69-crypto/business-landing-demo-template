"use client";

import { motion, type Variants } from "motion/react";
import {
  useSyncExternalStore,
  type ElementType,
  type ReactNode,
} from "react";

/**
 * Scroll reveals for Server-Component children.
 *
 * Children arrive as RSC payload, so wrapping a section never turns that
 * section's markup into client-rendered output — only this wrapper ships.
 *
 * An invisible section is far worse than an unanimated one, so the animation is
 * skipped entirely whenever it might not run:
 *
 *  1. `prefers-reduced-motion: reduce` renders plain markup, no animation.
 *  2. No IntersectionObserver support renders plain markup.
 *
 * Reduced-motion is read from matchMedia through useSyncExternalStore so the
 * value is available on the first client render rather than after an effect.
 */

const EASE = [0.16, 1, 0.3, 1] as const;
const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReduced(cb: () => void) {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

const readReduced = () => window.matchMedia(REDUCED_QUERY).matches;
const reducedSnapshotServer = () => false;

function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribeReduced, readReduced, reducedSnapshotServer);
}

/**
 * True when the animation must be skipped: reduced motion, or an environment
 * with no IntersectionObserver to drive `whileInView`.
 */
/**
 * True when the animation must be skipped: reduced motion, or an environment
 * with no IntersectionObserver to drive `whileInView`.
 */
function useSkipMotion() {
  const reduced = usePrefersReducedMotion();

  // A capability probe, not state: the value is fixed for the page's lifetime,
  // so reading it during render avoids a setState-in-effect round trip.
  const noObserver = typeof window !== "undefined" && typeof IntersectionObserver === "undefined";

  return reduced || noObserver;
}

function variantsFor(y: number, delay: number): Variants {
  return {
    hidden: { opacity: 0, y },
    shown: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
  };
}

/** Standalone reveal for one block. */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 18,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const skip = useSkipMotion();
  const Plain = as as ElementType;

  if (skip) return <Plain className={className}>{children}</Plain>;

  return (
    <motion.div
      className={className}
      variants={variantsFor(y, delay)}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Coordinates a staggered set of children. Children inherit the animation from
 * this parent, so only the group needs the whileInView trigger.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.07,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: ElementType;
}) {
  const skip = useSkipMotion();
  const Plain = as as ElementType;

  if (skip) return <Plain className={className}>{children}</Plain>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      variants={{
        hidden: {},
        shown: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * motion's React API has no `as` prop (that is the Vue convention), so this
 * resolves a real element factory. An unknown tag falls back to a div rather
 * than leaking a bogus attribute into the DOM.
 *
 * Set `as` when the parent constrains what its children may be — a <ul> may
 * only contain <li>, so a bare div wrapper there would be invalid markup.
 */
const MOTION_TAGS = {
  div: motion.div,
  li: motion.li,
  span: motion.span,
  p: motion.p,
  figure: motion.figure,
  blockquote: motion.blockquote,
} as const;

type RevealTag = keyof typeof MOTION_TAGS;

export function RevealItem({
  children,
  className,
  y = 16,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  as?: RevealTag;
}) {
  const skip = useSkipMotion();
  const Plain = as;

  if (skip) return <Plain className={className}>{children}</Plain>;

  const Comp = MOTION_TAGS[as] ?? motion.div;

  return (
    <Comp className={className} variants={variantsFor(y, delay)}>
      {children}
    </Comp>
  );
}