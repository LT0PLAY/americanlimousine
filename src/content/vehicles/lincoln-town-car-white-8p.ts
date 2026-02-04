// src/content/vehicles/lincoln-town-car-white-8p.ts
import type { Vehicle } from "./types";

export const lincolnTownCarWhite8p: Vehicle = {
  slug: "lincoln-town-car-white-8p",

  // ✅ Brand bleibt oben klein
  brand: "LINCOLN",

  // ✅ Haupttitel (groß) – kommt aus v.name
  // (wenn du statt dem ganzen Text nur "Town Car" willst, sag Bescheid)
  name: "Town Car Stretch-Limousine (White, 8 Pax)",

  // ✅ bleibt für HomeHeroSlider
  heroLabel: "STRETCH LIMOUSINE",

  // ✅ bleibt für Home/Flotte (unverändert)
  images: {
    wallpaper: "/images/vehicles/lincoln-towncar-white-8p/wallpaper.webp",
    car: "/images/vehicles/lincoln-towncar-white-8p/car.webp",
  },

  gallery: [
    {
      label: "Außen",
      src: "/images/vehicles/lincoln-towncar-white-8p/gallery-1.webp",
      alt: "Lincoln Town Car Stretch-Limousine White – Außenansicht",
    },
    {
      label: "Innen",
      src: "/images/vehicles/lincoln-towncar-white-8p/gallery-2.webp",
      alt: "Lincoln Town Car Stretch-Limousine White – Innenraum",
    },
    {
      label: "Details",
      src: "/images/vehicles/lincoln-towncar-white-8p/gallery-3.webp",
      alt: "Lincoln Town Car Stretch-Limousine White – Details",
    },
  ],

  specs: {
    persons: 8,
    lengthMeters: 8.6,
    motor: "V8",
  },

  shortDescription:
    "Luxuriöse weiße Stretch-Limousine für Hochzeiten, Events und exklusive Fahrten in München & Umgebung.",

  pricing: {
    fromPerHourEUR: 99,
    unitLabel: "/ 1 Std.",
    note: "Alle Preise zzgl. MwSt.",
    tiers: [
      { hours: 1, priceEUR: 99 },
      { hours: 2, priceEUR: 189 },
      { hours: 3, priceEUR: 279 },
      { hours: 4, priceEUR: 369 },
      { hours: 5, priceEUR: 459 },
      { hours: 8, priceEUR: 729 },
    ],
    extraHourEUR: 90,
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
    "USB / CD / AUX / Bluetooth",
    "8 PAX",
  ],

  // ✅ NEU: InfoPage Assets (Design wie bei Mercedes)
  // Wir setzen basePath passend zu deinem Ordner-Namen (nicht slug-Ordner).
  infoPage: {
    basePath: "/images/vehicles/lincoln-towncar-white-8p/info",

    // optional: falls du ein Video hast
    videoUrl: "/images/vehicles/lincoln-towncar-white-8p/showcase.mp4",

    ctaText:
      "Die Lincoln Town Car Stretch-Limousine in Weiß ist perfekt für Hochzeiten, VIP-Auftritte und besondere Events in München. Stilvoll, großzügig und mit Chauffeur – für bis zu 8 Personen.",

    highlights: [
      {
        title: "Wedding & Ceremony",
        text: "Der klassische Auftritt für Brautpaar & Gäste – elegant und fotogen.",
      },
      {
        title: "Party Interior",
        text: "Sternenhimmel, Bar und getönte Scheiben – Stimmung inklusive.",
      },
      {
        title: "VIP Entrance",
        text: "Perfekt für Events, Clubs, Hotels und repräsentative Ankünfte.",
      },
    ],
  },

  seo: {
    title: "Lincoln Town Car Stretch-Limousine White (8 Pax) | American Limousine Service",
    description:
      "Weiße Lincoln Town Car Stretch-Limousine mit Chauffeur in München. Für Hochzeiten, Events & VIP-Fahrten – bis 8 Personen.",
    text:
      "Unsere weiße Lincoln Town Car Stretch-Limousine (8 Pax) ist die perfekte Wahl für Hochzeiten, Events und VIP-Fahrten in München. Stilvoll, komfortabel und ideal für besondere Anlässe.",
  },
};