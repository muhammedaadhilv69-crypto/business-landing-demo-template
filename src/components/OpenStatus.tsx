"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/content/site.config";

const toMinutes = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

const format12 = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${suffix}`;
};

function getStatus() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: site.timezone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const day = parts.find((p) => p.type === "weekday")?.value;
  const hour = Number(parts.find((p) => p.type === "hour")?.value) % 24;
  const minute = Number(parts.find((p) => p.type === "minute")?.value);
  const now = hour * 60 + minute;

  const today = site.hours.find((h) => h.day === day);
  if (!today || !today.open || !today.close) return { open: false, text: "Closed today" };

  const open = toMinutes(today.open);
  const close = toMinutes(today.close);
  if (now >= open && now < close) return { open: true, text: `Open now, closes at ${format12(today.close)}` };
  if (now < open) return { open: false, text: `Closed, opens today at ${format12(today.open)}` };
  return { open: false, text: "Closed for today" };
}

type Status = { open: boolean; text: string };

/**
 * Wall-clock time is an external store, so it is read through
 * useSyncExternalStore rather than state plus an effect:
 *
 *  - the server snapshot is `null`, so the pill renders as a reserved
 *    placeholder and there is no hydration mismatch on a time-dependent string
 *  - one shared interval, created on first subscribe and torn down with the
 *    last subscriber, instead of an effect per component
 *  - no setState inside an effect, which is what the lint rule flags
 */

const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | null = null;

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  if (!timer) timer = setInterval(() => listeners.forEach((l) => l()), 60_000);
  return () => {
    listeners.delete(onChange);
    if (listeners.size === 0 && timer) {
      clearInterval(timer);
      timer = null;
    }
  };
}

const getClientSnapshot = () => getStatus();
const getServerSnapshot = () => null;

export default function OpenStatus() {
  const status = useSyncExternalStore<Status | null>(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  // Reserve the pill's footprint before hydration so the h1 never jumps.
  if (!status)
    return (
      <div
        className="h-8.5 min-w-56 rounded-full border border-transparent"
        aria-hidden="true"
      />
    );

  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[0.82rem] font-semibold tracking-[0.01em] ${
        status.open
          ? "border-signal/40 bg-signal/12 text-signal"
          : "border-on-brand/20 bg-on-brand/[0.06] text-on-brand-2"
      }`}
      role="status"
    >
      <span className="relative flex size-2" aria-hidden="true">
        {status.open && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60" />
        )}
        <span
          className={`relative inline-flex size-2 rounded-full ${
            status.open ? "bg-signal" : "bg-on-brand/45"
          }`}
        />
      </span>
      <span className="tnum">{status.text}</span>
    </div>
  );
}