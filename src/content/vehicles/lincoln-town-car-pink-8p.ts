// src/content/vehicles/lincoln-town-car-pink-8p.ts
import type { Vehicle } from "./types";

export const lincolnTownCarPink8p: Vehicle = {
  slug: "lincoln-town-car-pink-8p",

  // klein oben im Hero
  brand: "LINCOLN",

  // groß & dominant
  name: "Town Car Stretch-Limousine (Pink, 8 Pax)",

  // bleibt für HomeHeroSlider
  heroLabel: "STRETCH LIMOUSINE",

  // bleibt für Home / Flotte
  images: {
    wallpaper: "/images/vehicles/lincoln-towncar-pink-8p/wallpaper.webp",
    car: "/images/vehicles/lincoln-towncar-pink-8p/car.webp",
  },

  gallery: [
    {
      label: "Außen",
      src: "/images/vehicles/lincoln-towncar-pink-8p/gallery-1.webp",
      alt: "Lincoln Town Car Stretch-Limousine Pink (8 Pax) – Außenansicht",
    },
    {
      label: "Innen",
      src: "/images/vehicles/lincoln-towncar-pink-8p/gallery-2.webp",
      alt: "Lincoln Town Car Stretch-Limousine Pink (8 Pax) – Innenraum",
    },
    {
      label: "Details",
      src: "/images/vehicles/lincoln-towncar-pink-8p/gallery-3.webp",
      alt: "Lincoln Town Car Stretch-Limousine Pink (8 Pax) – Details",
    },
  ],

  specs: {
    persons: 8,
    lengthMeters: 8.6,
    motor: "V8",
  },

  shortDescription:
    "Auffällige pinke Stretch-Limousine für Hochzeiten, Partys und besondere Anlässe in München & Umgebung.",

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

  // ✅ Inhalte speziell für die neue Infopage
  infoPage: {
    basePath: "/images/vehicles/lincoln-towncar-pink-8p/info",

    heroWallpaper: "/images/vehicles/lincoln-towncar-pink-8p/info/hero-wallpaper.webp",
    interiorWallpaper: "/images/vehicles/lincoln-towncar-pink-8p/info/interior-wallpaper.webp",

    videoUrl: "/images/vehicles/lincoln-town-car-pink-8p/showcase.mp4",

    ctaText:
      "Die pinke Lincoln Town Car Stretch-Limousine ist ein echter Hingucker für Partys, Junggesellinnenabschiede und besondere Events in München. Exklusiv, auffällig und mit Chauffeur.",

    highlights: [
      {
        title: "Party & Events",
        text: "Perfekt für Geburtstage, Partys und JGAs – auffällig & einzigartig.",
        image: "/images/vehicles/lincoln-towncar-pink-8p/info/highlight-1.webp",
      },
      {
        title: "Pink Statement",
        text: "Ein Auftritt, den niemand vergisst – maximaler Wow-Effekt.",
        image: "/images/vehicles/lincoln-towncar-pink-8p/info/highlight-2.webp",
      },
      {
        title: "Platz für Gruppen",
        text: "Bis zu 8 Personen – feiern, fahren, ankommen.",
        image: "/images/vehicles/lincoln-towncar-pink-8p/info/highlight-3.webp",
      },
    ],
  },

  seo: {
    title: "Lincoln Town Car Stretch-Limousine Pink (8 Pax) | American Limousine Service",
    description:
      "Pinke Lincoln Town Car Stretch-Limousine mit Chauffeur in München. Ideal für Partys, Events & besondere Anlässe – bis 8 Personen.",
    text:
      "Unsere pinke Lincoln Town Car Stretch-Limousine (8 Pax) ist perfekt für Partys, Junggesellinnenabschiede und Events in München. Auffällig, luxuriös und mit Chauffeur.",
  },
};