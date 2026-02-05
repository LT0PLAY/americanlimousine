// src/content/vehicles/mercedes-v-klasse-black-7p.ts
import type { Vehicle } from "./types";

export const mercedesVKlasseBlack7p: Vehicle = {
  slug: "mercedes-v-klasse-black-7p",
  brand: "MERCEDES",
  name: "V-Klasse VIP Van (Black)",
  heroLabel: "VIP VAN",

  // ✅ bleibt für Home/Flotte/Hero-Slider wie bisher
  images: {
    wallpaper: "/images/vehicles/mercedes-v-klasse-black/wallpaper.webp",
    car: "/images/vehicles/mercedes-v-klasse-black/car.webp",
  },

  gallery: [
    {
      label: "Außen",
      src: "/images/vehicles/mercedes-v-klasse-black/gallery-1.webp",
      alt: "Mercedes V-Klasse Black – Außenansicht",
    },
    {
      label: "Innen",
      src: "/images/vehicles/mercedes-v-klasse-black/gallery-2.webp",
      alt: "Mercedes V-Klasse Black – Innenraum",
    },
    {
      label: "Details",
      src: "/images/vehicles/mercedes-v-klasse-black/gallery-3.webp",
      alt: "Mercedes V-Klasse Black – Details",
    },
  ],

  specs: {
    persons: 7,
    lengthMeters: 5.1,
    motor: "V6",
  },

  shortDescription:
    "Diskreter VIP-Transfer im Premium-Van – ideal für Business, Flughafen und Events in München & Umgebung.",

  pricing: {
    fromPerHourEUR: 89,
    unitLabel: "/ 1 Std.",
    note: "Alle Preise zzgl. MwSt.",
    tiers: [
      { hours: 1, priceEUR: 89 },
      { hours: 2, priceEUR: 169 },
      { hours: 3, priceEUR: 255 },
      { hours: 4, priceEUR: 340 },
      { hours: 5, priceEUR: 425 },
      { hours: 6, priceEUR: 510 },
      { hours: 7, priceEUR: 595 },
      { hours: 8, priceEUR: 680 },
    ],
    extraHourEUR: 85,
  },

  availability: {
    label: "24/7",
    subLabel: "ERREICHBAR",
  },

  features: [
    "Chauffeur-Service",
    "Klimaanlage",
    "Getönte Scheiben",
    "Leder / Komfortsitze",
    "USB / Bluetooth",
    "Viel Stauraum",
    "Leiser VIP-Transfer",
    "7 PAX",
  ],

  // ✅ InfoPage: gleiche Dateinamen für jedes Auto – nur anderer Ordner
  // Empfehlung: /public/images/vehicles/<FOLDER>/info/...
  infoPage: {
    // Wenn du künftig pro Fahrzeug nach slug sortierst:
    // basePath kannst du weglassen und nutzt /images/vehicles/<slug>/info
    // Für deinen aktuellen Ordnernamen setzen wir ihn einmalig:
    basePath: "/images/vehicles/mercedes-v-klasse-black/info",

    // Video (optional)
    videoUrl: "/images/vehicles/mercedes-v-klasse-black/showcase.mp4",

    // CTA/SEO Text (optional, sonst nimmt er seo.text)
    ctaText:
      "Die Mercedes-Benz V-Klasse ist der ideale VIP-Van in München für Business-Transfers, Flughafentransfers und exklusive Events, perfekt geeignet für Geschäftsreisende, Firmenkunden und VIP-Personentransfers, die in München Wert auf Diskretion, Komfort und ein repräsentatives Auftreten legen – mit erfahrenem Chauffeur, großzügigem Platz für bis zu 7 Personen sowie einem zuverlässigen Chauffeur-Service in München für professionelle Fahrten auf höchstem Niveau.",

    // 3 Highlight-Karten: Bilder werden automatisch genommen (highlight-1.webp etc.)
    highlights: [
      {
        title: "Business & Airport",
        text: "Pünktlich, diskret und komfortabel – ideal für Meetings, Hotels und Flughafenfahrten.",
      },
      {
        title: "VIP Comfort",
        text: "Komfortsitze, ruhiger Innenraum und getönte Scheiben – entspannt ankommen.",
      },
      {
        title: "Events & Gruppen",
        text: "Bis zu 7 Personen – perfekt für Events, Dinner, Hochzeiten oder Team-Transfers.",
      },
    ],
  },

  seo: {
    title: "Mercedes V-Klasse VIP Van (Black) | American Limousine Service",
    description:
      "Mercedes V-Klasse VIP Van mit Chauffeur in München. Bis 7 Personen, diskret & komfortabel – Business, Airport, Events.",
    text:
      "Unsere Mercedes V-Klasse (Black) bietet diskreten Premium-Transport für Business, Flughafen und Events in München. Ideal für bis zu 7 Personen – komfortabel, repräsentativ und zuverlässig.",
  },
};