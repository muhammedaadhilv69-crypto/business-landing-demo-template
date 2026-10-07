"use client";

import { useEffect, useState } from "react";
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

export default function OpenStatus() {
  const [status, setStatus] = useState<{ open: boolean; text: string } | null>(null);

  useEffect(() => {
    setStatus(getStatus());
    const id = setInterval(() => setStatus(getStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return <div className="status status-placeholder" aria-hidden="true" />;

  return (
    <div className={`status ${status.open ? "is-open" : "is-closed"}`} role="status">
      <span className="status-dot" aria-hidden="true" />
      {status.text}
    </div>
  );
}
