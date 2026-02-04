// src/content/vehicles/lincoln-town-car-golden-8p.ts
import type { Vehicle } from "./types";

export const lincolnTownCarGolden8p: Vehicle = {
  slug: "lincoln-town-car-golden-8p",

  // ✅ CI-Style: Brand klein / Title groß
  brand: "LINCOLN",
  name: "Town Car Stretch-Limousine (Golden, 8 Pax)",

  // ✅ bleibt für HomeHeroSlider
  heroLabel: "STRETCH LIMOUSINE",

  // ✅ bleibt für Home / Flotte
  images: {
    wallpaper: "/images/vehicles/lincoln-towncar-golden-8p/wallpaper.webp",
    car: "/images/vehicles/lincoln-towncar-golden-8p/car.webp",
  },

  // ✅ Gallery mit Alt-Texten (für Infopage + SEO)
  gallery: [
    {
      label: "Außen",
      src: "/images/vehicles/lincoln-towncar-golden-8p/gallery-1.webp",
      alt: "Lincoln Town Car Stretch-Limousine Golden (8 Pax) – Außenansicht",
    },
    {
      label: "Innen",
      src: "/images/vehicles/lincoln-towncar-golden-8p/gallery-2.webp",
      alt: "Lincoln Town Car Stretch-Limousine Golden (8 Pax) – Innenraum",
    },
    {
      label: "Details",
      src: "/images/vehicles/lincoln-towncar-golden-8p/gallery-3.webp",
      alt: "Lincoln Town Car Stretch-Limousine Golden (8 Pax) – Details",
    },
  ],

  specs: {
    persons: 8,
    lengthMeters: 8.6,
    motor: "V8",
  },

  shortDescription:
    "Luxuriöse goldene Stretch-Limousine für Hochzeiten, Events und exklusive Fahrten in München & Umgebung.",

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

  // ✅ Features im “›”-Design
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

  // ✅ Infopage Inhalte (Design wie Referenzbild)
  infoPage: {
    basePath: "/images/vehicles/lincoln-towncar-golden-8p/info",

    heroWallpaper: "/images/vehicles/lincoln-towncar-golden-8p/info/hero-wallpaper.webp",
    interiorWallpaper: "/images/vehicles/lincoln-towncar-golden-8p/info/interior-wallpaper.webp",

    videoUrl: "/videos/vehicles/lincoln-town-car-golden-8p/showcase.mp4",

    ctaText:
      "Die goldene Lincoln Town Car Stretch-Limousine ist ein echter Hingucker für Hochzeiten, Events und exklusive Fahrten in München. Luxuriös, auffällig und mit Chauffeur – für bis zu 8 Personen.",

    highlights: [
      {
        title: "Golden Statement",
        text: "Goldener Auftritt mit Show-Effekt – ideal für besondere Anlässe und starke Fotos.",
        image: "/images/vehicles/lincoln-towncar-golden-8p/info/highlight-1.webp",
      },
      {
        title: "Stretch Experience",
        text: "Sternenhimmel, Bar & Komfort – die klassische Stretch-Limo-Atmosphäre.",
        image: "/images/vehicles/lincoln-towncar-golden-8p/info/highlight-2.webp",
      },
      {
        title: "Events & Gruppen",
        text: "Bis zu 8 Personen – perfekt für Hochzeiten, Geburtstage, Clubs und Event-Transfers.",
        image: "/images/vehicles/lincoln-towncar-golden-8p/info/highlight-3.webp",
      },
    ],
  },

  seo: {
    title: "Lincoln Town Car Stretch-Limousine Golden (8 Pax) | American Limousine Service",
    description:
      "Goldene Lincoln Town Car Stretch-Limousine mit Chauffeur in München. Luxus für Hochzeiten, Events & VIP – bis 8 Personen.",
    text:
      "Unsere goldene Lincoln Town Car Stretch-Limousine (8 Pax) ist die perfekte Wahl für unvergessliche Auftritte in München. Ideal für Hochzeiten, Events und VIP-Fahrten – mit Chauffeur, Sternenhimmel und Bar.",
  },
};