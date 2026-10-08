export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const dirOf = (lang: Locale) => (lang === "ar" ? "rtl" : "ltr");
export const otherLocale = (lang: Locale): Locale => (lang === "en" ? "ar" : "en");

/** "23:30" -> "11:30 PM" (or "11:30 م" in Arabic) */
export function format12(time: string, labels: { am: string; pm: string }) {
  const [h, m] = time.split(":").map(Number);
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${h >= 12 ? labels.pm : labels.am}`;
}
