"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site.config";
import type { Copy } from "@/content/site.config";
import { format12 } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Props = { status: Copy["status"]; time: Copy["time"] };
type State = { open: boolean; text: string };

const toMinutes = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

function getStatus({ status, time }: Props): State {
  const parts = new Intl.DateTimeFormat("en-US", {
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
  if (!today || !today.open || !today.close) return { open: false, text: status.closedToday };

  if (now >= toMinutes(today.open) && now < toMinutes(today.close)) {
    return { open: true, text: status.open.replace("{time}", format12(today.close, time)) };
  }
  if (now < toMinutes(today.open)) {
    return { open: false, text: status.opensToday.replace("{time}", format12(today.open, time)) };
  }
  return { open: false, text: status.closedNow };
}

export default function OpenStatus(props: Props) {
  const [state, setState] = useState<State | null>(null);

  useEffect(() => {
    setState(getStatus(props));
    const id = setInterval(() => setState(getStatus(props)), 60_000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.status, props.time]);

  // Reserve the space so the page doesn't jump when the badge appears
  if (!state) return <div className="min-h-[2.1rem] min-w-56" aria-hidden="true" />;

  return (
    <div role="status" className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[0.95rem] font-semibold">
      <span className={cn("size-2.5 rounded-full", state.open ? "bg-green-400" : "bg-red-400")} aria-hidden="true" />
      {state.text}
    </div>
  );
}
