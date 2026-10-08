import { site, type Copy } from "@/content/site.config";
import { format12 } from "@/lib/i18n";

export type OpenStatusState = { open: boolean; text: string };

const toMinutes = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

export function getOpenStatus(
  status: Copy["status"],
  time: Copy["time"],
  now = new Date(),
): OpenStatusState {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: site.timezone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const day = parts.find((part) => part.type === "weekday")?.value;
  const hour = Number(parts.find((part) => part.type === "hour")?.value) % 24;
  const minute = Number(parts.find((part) => part.type === "minute")?.value);
  const currentTime = hour * 60 + minute;

  const today = site.hours.find((hours) => hours.day === day);
  if (!today?.open || !today.close) {
    return { open: false, text: status.closedToday };
  }

  if (currentTime >= toMinutes(today.open) && currentTime < toMinutes(today.close)) {
    return { open: true, text: status.open.replace("{time}", format12(today.close, time)) };
  }
  if (currentTime < toMinutes(today.open)) {
    return { open: false, text: status.opensToday.replace("{time}", format12(today.open, time)) };
  }
  return { open: false, text: status.closedNow };
}
