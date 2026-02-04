// src/content/vehicles/lincoln-town-car-white-6p.ts
import type { Vehicle } from "./types";

export const lincolnTownCarWhite6p: Vehicle = {
  slug: "lincoln-town-car-white-6p",

  // ✅ klein oben
  brand: "LINCOLN",

  // ✅ groß als Haupttitel
  name: "Town Car Stretch-Limousine (White, 6 Pax)",

  // ✅ bleibt für HomeHeroSlider
  heroLabel: "STRETCH LIMOUSINE",

  // ✅ bleibt für Home/Flotte
  images: {
    wallpaper: "/images/vehicles/lincoln-towncar-white-6p/wallpaper.webp",
    car: "/images/vehicles/lincoln-towncar-white-6p/car.webp",
  },

  gallery: [
    {
      label: "Außen",
      src: "/images/vehicles/lincoln-towncar-white-6p/gallery-1.webp",
      alt: "Lincoln Town Car Stretch-Limousine White (6 Pax) – Außenansicht",
    },
    {
      label: "Innen",
      src: "/images/vehicles/lincoln-towncar-white-6p/gallery-2.webp",
      alt: "Lincoln Town Car Stretch-Limousine White (6 Pax) – Innenraum",
    },
    {
      label: "Details",
      src: "/images/vehicles/lincoln-towncar-white-6p/gallery-3.webp",
      alt: "Lincoln Town Car Stretch-Limousine White (6 Pax) – Details",
    },
  ],

  specs: {
    persons: 6,
    lengthMeters: 6.4,
    motor: "V8",
  },

  shortDescription:
    "Elegante weiße Stretch-Limousine für Hochzeiten, Business und stilvolle Transfers in München & Umgebung.",

  pricing: {
    fromPerHourEUR: 69,
    unitLabel: "/ 1 Std.",
    note: "Alle Preise zzgl. MwSt.",
    tiers: [
      { hours: 1, priceEUR: 69 },
      { hours: 2, priceEUR: 129 },
      { hours: 3, priceEUR: 189 },
      { hours: 4, priceEUR: 249 },
      { hours: 5, priceEUR: 309 },
      { hours: 8, priceEUR: 489 },
    ],
    extraHourEUR: 60,
  },

  availability: {
    label: "24/7",
    subLabel: "ERREICHBAR",
  },

  features: [
    "Chauffeur-Service",
    "Sternenhimmel",
    "Klimaanlage",
    "Heizung",
    "Bar mit Kühlfach",
    "Getönte Scheiben",
    "USB / AUX / Premium Soundsystem",
    "6 PAX",
  ],

  // ✅ NEU: InfoPage Assets (Design wie bei Mercedes)
  infoPage: {
    basePath: "/images/vehicles/lincoln-towncar-white-6p/info",

    // optional: falls du ein Video hast
    videoUrl: "/images/vehicles/lincoln-town-car-white-6p/showcase.mp4",

    ctaText:
      "Die Lincoln Town Car Stretch-Limousine (White, 6 Pax) ist ideal für stilvolle Transfers, Hochzeiten und Business-Fahrten in München. Klassischer Look, komfortabel, mit Chauffeur.",

    highlights: [
      {
        title: "Classic Wedding Look",
        text: "Elegant und zeitlos – ideal für Hochzeiten und Fotoshootings.",
      },
      {
        title: "Comfort Transfer",
        text: "Ruhige Fahrt, Klimaanlage und hochwertige Ausstattung – entspannt ankommen.",
      },
      {
        title: "Premium Experience",
        text: "Bar, Sternenhimmel und getönte Scheiben – exklusives Limousinen-Feeling.",
      },
    ],
  },

  seo: {
    title: "Lincoln Town Car Stretch-Limousine White (6 Pax) | American Limousine Service",
    description:
      "Weiße Lincoln Town Car Stretch-Limousine mit Chauffeur in München. Für Hochzeiten, Business & Transfers – bis 6 Personen.",
    text:
      "Unsere weiße Lincoln Town Car Stretch-Limousine (6 Pax) bietet einen stilvollen Auftritt für Hochzeiten, Business und Transfers in München. Klassisch, komfortabel und zuverlässig – mit Chauffeur.",
  },
};