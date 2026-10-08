// EVERYTHING client-specific lives here. Edit this file + swap images in /public/images.
//
// Nothing in src/components may hardcode a word, label or link. If you find
// yourself typing copy into a component, put it in `copy` below instead.

export const site = {
  // --- Language / direction (set lang "ar" and dir "rtl" for Arabic sites) ---
  lang: "en",
  dir: "ltr" as "ltr" | "rtl",

  // --- Business basics ---
  name: "Al Fanar Barbers",
  tagline: "Classic cuts and hot-towel shaves in the heart of Manama.",
  description:
    "Al Fanar Barbers in Manama, Bahrain. Haircuts, beard trims and hot-towel shaves. Book on WhatsApp.",
  url: "https://example.com", // the client's final domain (used for SEO / sharing previews)
  timezone: "Asia/Bahrain",

  // --- Contact ---
  whatsapp: "97300000000", // digits only, with country code, no + or spaces
  whatsappMessage: "Hi! I'd like to book an appointment.",
  phone: "+973 0000 0000",
  address: "Building 0, Road 0, Block 0, Manama, Bahrain",
  mapsUrl: "https://maps.google.com/?q=Manama+Bahrain",
  instagram: "https://instagram.com/yourclient", // "" to hide

  // --- Button text ---
  cta: "Book on WhatsApp",

  // --- Brand colors (any hex) ---
  colors: {
    primary: "#0F3D3E", // hero + footer background
    accent: "#C8963E", // buttons + highlights
    ink: "#1B1F1E", // body text
    paper: "#F4F6F5", // page background
    mist: "#DDE5E2", // borders + soft panels
  },

  // --- Services (price is free text: "BD 3", "From BD 5", or "" to hide) ---
  services: [
    { title: "Classic haircut", description: "Scissor or clipper cut, finished with a hot-towel neck wipe.", price: "BD 4" },
    { title: "Beard trim and shape", description: "Defined lines, balanced length, and a clean fade into the cheeks.", price: "BD 3" },
    { title: "Hot-towel shave", description: "Straight-razor shave with warm towels and aftershave balm.", price: "BD 5" },
    { title: "Kids' cut", description: "Under 12. Patient barbers and a calm chair.", price: "BD 3" },
    { title: "Haircut and beard", description: "The full routine in one visit.", price: "BD 6" },
  ],

  // --- Gallery: put photos in /public/images and list them here ---
  gallery: [
    { src: "/images/1.svg", alt: "Fresh fade haircut" },
    { src: "/images/2.svg", alt: "Beard shaping" },
    { src: "/images/3.svg", alt: "Hot-towel shave" },
    { src: "/images/4.svg", alt: "Shop interior" },
    { src: "/images/5.svg", alt: "Barber chair" },
    { src: "/images/6.svg", alt: "Finished classic cut" },
  ],

  // --- Testimonials ("[]" hides the section) ---
  testimonials: [
    { quote: "Best fade I've had in Bahrain. I booked on WhatsApp and was in the chair in ten minutes.", name: "Hamad A." },
    { quote: "Clean shop, on time, and they actually listen to what you ask for.", name: "Yousif K." },
  ],

  // --- Opening hours (open: null = closed that day, 24h format) ---
  hours: [
    { day: "Sat", open: "10:00", close: "23:00" },
    { day: "Sun", open: "10:00", close: "23:00" },
    { day: "Mon", open: "10:00", close: "23:00" },
    { day: "Tue", open: "10:00", close: "23:00" },
    { day: "Wed", open: "10:00", close: "23:00" },
    { day: "Thu", open: "10:00", close: "23:30" },
    { day: "Fri", open: "16:00", close: "23:30" },
  ] as { day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun"; open: string | null; close: string | null }[],

  // ==================================================================
  // COPY — every visible word on the page, so a client can rebrand the
  // whole site without opening a component. Delete a key you do not need
  // and the section hides itself.
  // ==================================================================
  copy: {
    /** Header navigation labels. The hrefs match section ids. */
    nav: {
      sections: "Sections", // aria-label for both navs
      services: "Services",
      gallery: "Gallery",
      testimonials: "Reviews",
      hours: "Hours",
      contact: "Contact",
    },

    buttons: {
      directions: "Directions", // header, shown on sm and up
      maps: "Open in Google Maps", // hero + hours
      call: "Call", // prefixed to the phone number, e.g. "Call +973 0000 0000"
      whatsappCta: "Book on WhatsApp", // hero + contact primary
      instagram: "Instagram",
    },

    hero: {
      visitUs: "Visit us", // trade-card heading
      openLabel: "Open", // trade-card hours row
      phoneLabel: "Phone",
    },

    services: {
      eyebrow: "Price board",
      /** `titleAccent` renders in a muted colour after the title. "" to drop it. */
      title: "Services",
      titleAccent: "and prices",
      intro:
        "Every price below is the full cost — no consultation fee, no surprise add-ons at the chair.",
    },

    gallery: {
      eyebrow: "Portfolio",
      title: "Recent work",
      intro: "Straight from the chair. Hover any shot for the full description.",
    },

    testimonials: {
      eyebrow: "Word of mouth",
      title: "What customers say",
    },

    hours: {
      eyebrow: "Plan your visit",
      title: "Opening hours",
      caption: "Weekly opening hours", // screen-reader caption for the table
      arrivalsEyebrow: "Arrivals",
      arrivalsTitle: "Find us",
      phoneLabel: "Phone",
      instagramLabel: "Instagram",
    },

    contact: {
      eyebrow: "Book a chair",
      title: "Ready for a fresh cut?",
      body: "Send us a message with the day and time that suits you. We reply on WhatsApp.",
    },

    footer: {
      sectionsLabel: "Sections",
      hoursLabel: "Hours",
      rights: "All rights reserved.",
      phoneLabel: "Phone",
      instagramLabel: "Instagram",
    },
  },
};

export type Site = typeof site;

export const whatsappLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:${site.phone.replace(/[^\d+]/g, "")}`;

/**
 * Handle pulled from the Instagram URL, e.g. "@yourclient".
 * Empty when instagram is "", so callers can hide the row entirely.
 */
export const instagramHandle = site.instagram
  ? "@" + (site.instagram.split("/").filter(Boolean).pop() ?? "").replace(/^@/, "")
  : "";

/**
 * Earliest opening to latest closing across the whole week, for one-line
 * summaries in the hero, contact band and footer. Returns "" when every day
 * is marked closed, so callers can omit the row.
 *
 * Times are zero-padded 24h strings, so a plain string compare orders them.
 */
export const hoursSpan = () => {
  const opens = site.hours.map((h) => h.open).filter((t): t is string => !!t);
  const closes = site.hours.map((h) => h.close).filter((t): t is string => !!t);
  if (!opens.length || !closes.length) return "";
  const earliest = opens.reduce((a, b) => (a < b ? a : b));
  const latest = closes.reduce((a, b) => (a > b ? a : b));
  return `${earliest} – ${latest}`;
};