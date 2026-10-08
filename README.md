# Local Business One-Page Site Template (EN + AR)

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui setup. English and Arabic (RTL) with a language toggle.
A new client site is mostly editing **one file**: `content/site.config.ts`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000  (redirects to /en or /ar)
```

## Make a site for a new client (about 3 hours)

1. Copy this folder (or use it as a GitHub template repo).
2. Edit `content/site.config.ts`:
   - top part: domain, WhatsApp, phone, Maps link, colors, hours, gallery files
   - bottom part: all text, once in English and once in Arabic
3. Replace the images in `public/images/`. For WhatsApp link previews add a 1200x630 `.jpg` and point `openGraph.images` in `app/[lang]/layout.tsx` to it.
4. `npm run build`, push to GitHub, import into Vercel (free tier), add the client's domain.

## English only or Arabic only?

Edit `locales` and `defaultLocale` in `lib/i18n.ts`. With one locale, delete the `LanguageSwitch` from `components/Header.tsx`.

## How the languages work

- URLs are `/en` and `/ar`. Visiting `/` redirects based on the browser language (`middleware.ts`).
- `<html lang dir>` is set per language, so the whole layout flips for Arabic.
- Use logical Tailwind classes (`ms-`, `me-`, `ps-`, `pe-`, `text-start`, `start-`, `end-`, `border-s`) instead of left/right ones.
- Negative letter-spacing breaks Arabic letter joining. Headings use `rtl:tracking-normal` for that reason.
- Phone numbers are wrapped in `<bdi dir="ltr">` so they don't flip in Arabic.

## shadcn/ui

`components.json`, `lib/utils.ts` (`cn`) and the Tailwind v4 color tokens are already set up. `components/ui/` is empty.

```bash
npx shadcn@latest add button dialog
```

If the CLI asks to overwrite `app/globals.css`, say no (or review the diff). Your brand colors from `site.config.ts` are applied as the shadcn tokens (`--primary`, `--background`, `--border`, `--ring`), and `bg-brand` is the main button color.

## Change the look

Colors: `site.colors` in the config. Fonts: `app/[lang]/layout.tsx`. Everything else is Tailwind classes in `components/`.
