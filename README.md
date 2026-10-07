# Local Business One-Page Site Template

Next.js (App Router) + TypeScript, no UI libraries. A new client site is mostly editing **one file**.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

## Make a site for a new client (about 3 hours)

1. Copy this folder (or use it as a GitHub template repo).
2. Edit `content/site.config.ts`: name, WhatsApp number, hours, services, colors, address, Maps link.
3. Replace the images in `public/images/` (keep the file names, or update the list in the config).
   For WhatsApp link previews, add a 1200x630 `.jpg` and point `openGraph.images` in `app/layout.tsx` to it.
4. Set `url` in the config to the client's domain.
5. `npm run build` to check, then push to GitHub and import into Vercel (free tier).
6. Add the client's domain in Vercel > Settings > Domains.

## Arabic version

In `content/site.config.ts` set `lang: "ar"` and `dir: "rtl"`, then translate the text. Spacing, borders and the floating button use logical CSS properties, so they flip automatically.

## Change the look

Colors come from `site.colors` and are applied as CSS variables. Fonts are set in `app/layout.tsx` (swap the two `next/font/google` imports). Layout CSS is in `app/globals.css`.

## What's included

Sticky header with WhatsApp button, hero with a live "Open now / Closed" badge (uses Bahrain time), services price list, gallery, testimonials (hidden if empty), opening hours with a Google Maps link, contact section, floating WhatsApp button, SEO metadata, and LocalBusiness structured data.
