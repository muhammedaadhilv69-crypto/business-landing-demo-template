// EVERYTHING client-specific lives in this file. Edit it, then swap images in /public/images.
// Part 1: things that are the same in every language.
// Part 2: the text, once per language (English + Arabic).

import type { Locale } from "@/lib/i18n";

type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

export const site = {
  url: "https://example.com", // the client's final domain (used for SEO and link previews)
  timezone: "Asia/Bahrain",

  whatsapp: "97300000000", // digits only, with country code, no + or spaces
  phone: "+973 0000 0000",
  mapsUrl: "https://maps.google.com/?q=Manama+Bahrain",
  instagram: "https://instagram.com/yourname", // "" to hide

  // Brand colors (any hex)
  colors: {
    primary: "#0F3D3E", // hero, header, footer background
    accent: "#C8963E", // main buttons
    ink: "#1B1F1E", // body text
    paper: "#F4F6F5", // page background
    mist: "#DDE5E2", // borders and soft panels
  },

  // Gallery photos: drop files in /public/images and list them here (alt text is in the language sections below)
  gallery: ["/images/1.svg", "/images/2.svg", "/images/3.svg", "/images/4.svg", "/images/5.svg", "/images/6.svg"],

  // Opening hours, 24h format. open: null = closed that day. Day order here is the display order.
  hours: [
    { day: "Sat", open: "10:00", close: "23:00" },
    { day: "Sun", open: "10:00", close: "23:00" },
    { day: "Mon", open: "10:00", close: "23:00" },
    { day: "Tue", open: "10:00", close: "23:00" },
    { day: "Wed", open: "10:00", close: "23:00" },
    { day: "Thu", open: "10:00", close: "23:30" },
    { day: "Fri", open: "16:00", close: "23:30" },
  ] as { day: Day; open: string | null; close: string | null }[],
};

export type Copy = {
  name: string;
  tagline: string;
  description: string;
  address: string;
  cta: string;
  call: string;
  instagram: string;
  whatsappMessage: string;
  switchLabel: string; // label of the button that switches to the OTHER language
  mapsLabel: string;
  sections: {
    services: string;
    gallery: string;
    testimonials: string;
    hours: string;
    findUs: string;
    contact: string;
    contactText: string;
  };
  status: { open: string; opensToday: string; closedToday: string; closedNow: string }; // {time} is replaced
  time: { am: string; pm: string; to: string; closed: string };
  days: Record<Day, string>;
  services: { title: string; description: string; price: string }[]; // price "" hides it
  galleryAlts: string[];
  testimonials: { quote: string; name: string }[]; // [] hides the section
};

const en: Copy = {
  name: "Al Fanar Barbers",
  tagline: "Classic cuts and hot-towel shaves in the heart of Manama.",
  description: "Al Fanar Barbers in Manama, Bahrain. Haircuts, beard trims and hot-towel shaves. Book on WhatsApp.",
  address: "Building 0, Road 0, Block 0, Manama, Bahrain",
  cta: "Book on WhatsApp",
  call: "Call",
  instagram: "Instagram",
  whatsappMessage: "Hi! I'd like to book an appointment.",
  switchLabel: "العربية",
  mapsLabel: "Open in Google Maps",
  sections: {
    services: "Services and prices",
    gallery: "Recent work",
    testimonials: "What customers say",
    hours: "Opening hours",
    findUs: "Find us",
    contact: "Ready for a fresh cut?",
    contactText: "Send us a message with the day and time that suits you. We reply on WhatsApp.",
  },
  status: {
    open: "Open now, closes at {time}",
    opensToday: "Closed, opens today at {time}",
    closedToday: "Closed today",
    closedNow: "Closed for today",
  },
  time: { am: "AM", pm: "PM", to: "to", closed: "Closed" },
  days: { Sat: "Saturday", Sun: "Sunday", Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday", Fri: "Friday" },
  services: [
    { title: "Classic haircut", description: "Scissor or clipper cut, finished with a hot-towel neck wipe.", price: "BD 4" },
    { title: "Beard trim and shape", description: "Defined lines, balanced length, and a clean fade into the cheeks.", price: "BD 3" },
    { title: "Hot-towel shave", description: "Straight-razor shave with warm towels and aftershave balm.", price: "BD 5" },
    { title: "Kids' cut", description: "Under 12. Patient barbers and a calm chair.", price: "BD 3" },
    { title: "Haircut and beard", description: "The full routine in one visit.", price: "BD 6" },
  ],
  galleryAlts: ["Fresh fade haircut", "Beard shaping", "Hot-towel shave", "Shop interior", "Barber chair", "Finished classic cut"],
  testimonials: [
    { quote: "Best fade I've had in Bahrain. I booked on WhatsApp and was in the chair in ten minutes.", name: "Hamad A." },
    { quote: "Clean shop, on time, and they actually listen to what you ask for.", name: "Yousif K." },
  ],
};

const ar: Copy = {
  name: "صالون الفنار للحلاقة",
  tagline: "قصات كلاسيكية وحلاقة بالمنشفة الساخنة في قلب المنامة.",
  description: "صالون الفنار للحلاقة في المنامة، البحرين. قص الشعر، تشذيب اللحية، وحلاقة بالمنشفة الساخنة. احجز عبر واتساب.",
  address: "مبنى 0، طريق 0، مجمّع 0، المنامة، البحرين",
  cta: "احجز عبر واتساب",
  call: "اتصل",
  instagram: "إنستغرام",
  whatsappMessage: "مرحباً! أرغب بحجز موعد.",
  switchLabel: "English",
  mapsLabel: "افتح في خرائط Google",
  sections: {
    services: "الخدمات والأسعار",
    gallery: "أحدث أعمالنا",
    testimonials: "آراء عملائنا",
    hours: "ساعات العمل",
    findUs: "موقعنا",
    contact: "جاهز لقصّة جديدة؟",
    contactText: "أرسل لنا اليوم والوقت المناسبين لك، وسنردّ عليك عبر واتساب.",
  },
  status: {
    open: "مفتوح الآن، يغلق في الساعة {time}",
    opensToday: "مغلق الآن، يفتح اليوم في الساعة {time}",
    closedToday: "مغلق اليوم",
    closedNow: "مغلق لهذا اليوم",
  },
  time: { am: "ص", pm: "م", to: "إلى", closed: "مغلق" },
  days: { Sat: "السبت", Sun: "الأحد", Mon: "الاثنين", Tue: "الثلاثاء", Wed: "الأربعاء", Thu: "الخميس", Fri: "الجمعة" },
  services: [
    { title: "قص الشعر الكلاسيكي", description: "قصّ بالمقص أو الماكينة، مع مسح الرقبة بالمنشفة الساخنة.", price: "4 د.ب" },
    { title: "تحديد شكل اللحية وتنسيقها", description: "خطوط واضحة، طول متوازن، وتدرّج ناعم عند الخدّين.", price: "3 د.ب" },
    { title: "حلاقة بالمنشفة الساخنة", description: "حلاقة بالشفرة المستقيمة مع مناشف دافئة ومرطب بعد الحلاقة.", price: "5 د.ب" },
    { title: "قص الأطفال", description: "لمن هم دون 12 سنة. حلاقون صبورون وكرسي هادئ.", price: "3 د.ب" },
    { title: "قص الشعر مع اللحية", description: "الخدمة الكاملة في زيارة واحدة.", price: "6 د.ب" },
  ],
  galleryAlts: ["تدرّج جديد", "تشكيل اللحية", "حلاقة بالمنشفة الساخنة", "داخل الصالون", "كرسي الحلاقة", "قص كلاسيكي منتهي"],
  testimonials: [
    { quote: "أفضل تدرّج حصلت عليه في البحرين. حجزت عبر واتساب وجلست على الكرسي خلال عشر دقائق.", name: "حمد ع." },
    { quote: "الصالون نظيف، والالتزام بالمواعيد، وهم يسمعون طلبك فعلاً.", name: "يوسف ك." },
  ],
};

export const copy: Record<Locale, Copy> = { en, ar };

export const whatsappLink = (t: Copy) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t.whatsappMessage)}`;
export const telLink = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
