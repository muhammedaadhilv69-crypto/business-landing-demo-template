// EVERYTHING client-specific lives here. Edit this file + swap images in /public/images.

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
};

export type Site = typeof site;

export const whatsappLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
