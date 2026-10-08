/**
 * Regenerates the six gallery placeholders in public/images as one consistent
 * art-directed family. Run: node scripts/gen-placeholders.mjs
 *
 * Colours are baked in because an <img>-loaded SVG cannot inherit CSS custom
 * properties from the page. These are throwaway placeholders — a client
 * overwrites 1.svg–6.svg with real photography, so re-skinning site.config.ts
 * does not need to reach them.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");

// Derived from site.config.ts colors.
const BRAND = "#0F3D3E";
const BRAND_DEEP = "#0B2E2F"; // primary mixed 24% toward black

const SIGNAL = "#C8963E";
const SIGNAL_SOFT = "#DBBA80"; // accent mixed 34% toward white
const INK = "#1B1F1E";

const LABELS = [
  "Fresh fade haircut",
  "Beard shaping",
  "Hot-towel shave",
  "Shop interior",
  "Barber chair",
  "Finished classic cut",
];

/** Per-index variation so the six tiles read as a set, not six copies. */
const VARIANTS = [
  { angle: 45, cx: 300, cy: 300, r: 250, stripe: 26, weight: 0.5 },
  { angle: 62, cx: 880, cy: 340, r: 200, stripe: 34, weight: 0.36 },
  { angle: 38, cx: 620, cy: 640, r: 310, stripe: 20, weight: 0.44 },
  { angle: 70, cx: 320, cy: 900, r: 170, stripe: 40, weight: 0.3 },
  { angle: 52, cx: 900, cy: 880, r: 230, stripe: 28, weight: 0.4 },
  { angle: 34, cx: 600, cy: 480, r: 360, stripe: 24, weight: 0.46 },
];

function svg(i) {
  const v = VARIANTS[i];
  const label = LABELS[i];

  // Diagonal pinstripe field, rotated per tile.
  /* Hairline pinstripes only. Wide bars at any opacity read as a high-contrast
     pattern and flatten the tile, which fights the page instead of sitting
     behind real photography. */
  const stripe = (() => {
    const lines = [];
    for (let p = -1400; p <= 1400; p += v.stripe * 2) {
      lines.push(
        `<line x1="${p}" y1="-200" x2="${p}" y2="1400" stroke="${SIGNAL_SOFT}" stroke-opacity="${
          v.weight * 0.5
        }" stroke-width="1.5"/>`,
      );
    }
    return `<g transform="rotate(${v.angle} 600 600)">${lines.join("")}</g>`;
  })();

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" role="img" aria-label="${label} — placeholder">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${BRAND_DEEP}"/>
      <stop offset="0.55" stop-color="${BRAND}"/>
      <stop offset="1" stop-color="${BRAND_DEEP}"/>
    </linearGradient>
    <radialGradient id="v" cx="0.5" cy="0.42" r="0.78">
      <stop offset="0.55" stop-color="${BRAND}" stop-opacity="0"/>
      <stop offset="1" stop-color="${INK}" stop-opacity="0.55"/>
    </radialGradient>
    <radialGradient id="bloom" cx="${v.cx / 1200}" cy="${v.cy / 1200}" r="0.55">
      <stop offset="0" stop-color="${SIGNAL}" stop-opacity="0.2"/>
      <stop offset="1" stop-color="${SIGNAL}" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="c"><rect width="1200" height="1200"/></clipPath>
  </defs>

  <g clip-path="url(#c)">
    <rect width="1200" height="1200" fill="url(#g)"/>
    <rect width="1200" height="1200" fill="url(#bloom)"/>
    ${stripe}

    <!-- Motif: concentric rings, echoing the header mark. -->
    <circle cx="${v.cx}" cy="${v.cy}" r="${v.r}" fill="none" stroke="${SIGNAL}" stroke-opacity="0.32" stroke-width="2"/>
    <circle cx="${v.cx}" cy="${v.cy}" r="${v.r * 0.62}" fill="none" stroke="${SIGNAL_SOFT}" stroke-opacity="0.24" stroke-width="1.5"/>
    <circle cx="${v.cx}" cy="${v.cy}" r="${v.r * 0.24}" fill="${SIGNAL}" fill-opacity="0.16"/>
    <circle cx="${v.cx}" cy="${v.cy}" r="${v.r * 0.07}" fill="${SIGNAL_SOFT}" fill-opacity="0.75"/>

    <rect width="1200" height="1200" fill="url(#v)"/>

    <!-- Warm haze under the motif: stops the tile reading as flat green. -->
    <ellipse cx="${v.cx}" cy="${v.cy}" rx="${v.r * 2.2}" ry="${v.r * 2.2}"
             fill="${SIGNAL}" opacity="0.06"/>

    <!-- Inset brass frame. -->
    <rect x="46" y="46" width="1108" height="1108" fill="none" stroke="${SIGNAL}" stroke-opacity="0.26" stroke-width="2"/>

    <!-- Caption block, bottom-left. -->
    <g font-family="Georgia, 'Times New Roman', serif">
      <text x="92" y="1024" fill="${SIGNAL_SOFT}" fill-opacity="0.95" font-size="34" letter-spacing="3">${label.toUpperCase()}</text>
      <text x="92" y="1070" fill="${SIGNAL}" fill-opacity="0.62" font-family="Helvetica, Arial, sans-serif" font-size="21" letter-spacing="5.5">REPLACE WITH PHOTO ${i + 1}</text>
    </g>
  </g>
</svg>
`;
}

mkdirSync(OUT, { recursive: true });
LABELS.forEach((_, i) => {
  writeFileSync(join(OUT, `${i + 1}.svg`), svg(i), "utf8");
});
console.log(`Wrote ${LABELS.length} placeholders to ${OUT}`);