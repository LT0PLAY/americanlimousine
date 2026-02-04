// src/content/vehicles/lincoln-town-car-black-8p.ts
import type { Vehicle } from "./types";

export const lincolnTownCarBlack8p: Vehicle = {
  slug: "lincoln-town-car-black-8p",

  // ✅ CI-Style: Brand klein / Title groß
  brand: "LINCOLN",
  name: "Town Car Stretch-Limousine (Black, 8 Pax)",

  // ✅ bleibt für HomeHeroSlider
  heroLabel: "STRETCH LIMOUSINE",

  // ✅ bleibt für Home / Flotte
  images: {
    wallpaper: "/images/vehicles/lincoln-towncar-black-8p/wallpaper.webp",
    car: "/images/vehicles/lincoln-towncar-black-8p/car.webp",
  },

  // ✅ Gallery mit Alt-Texten (für Infopage + SEO)
  gallery: [
    {
      label: "Außen",
      src: "/images/vehicles/lincoln-towncar-black-8p/gallery-1.webp",
      alt: "Lincoln Town Car Stretch-Limousine Black (8 Pax) – Außenansicht",
    },
    {
      label: "Innen",
      src: "/images/vehicles/lincoln-towncar-black-8p/gallery-2.webp",
      alt: "Lincoln Town Car Stretch-Limousine Black (8 Pax) – Innenraum",
    },
    {
      label: "Details",
      src: "/images/vehicles/lincoln-towncar-black-8p/gallery-3.webp",
      alt: "Lincoln Town Car Stretch-Limousine Black (8 Pax) – Details",
    },
  ],

  specs: {
    persons: 8,
    lengthMeters: 8.6,
    motor: "V8",
  },

  shortDescription:
    "Luxuriöse schwarze Stretch-Limousine für Hochzeiten, Events und exklusive Fahrten in München & Umgebung.",

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

  // ✅ NEU: Inhalte für die neue Infopage (Design wie Referenzbild)
  infoPage: {
    // ✅ optionaler Helper (dein Layout kann ihn ignorieren, wenn du willst)
    basePath: "/images/vehicles/lincoln-towncar-black-8p/info",

    // ✅ Neues Hero-Wallpaper nur für Infopage (nicht images.wallpaper!)
    heroWallpaper: "/images/vehicles/lincoln-towncar-black-8p/info/hero-wallpaper.webp",

    // ✅ Innenraum-Wallpaper Block
    interiorWallpaper: "/images/vehicles/lincoln-towncar-black-8p/info/interior-wallpaper.webp",

    // ✅ optionales Video
    videoUrl: "/images/vehicles/lincoln-towncar-black-8p/showcase.mp4",

    // ✅ CTA/SEO Block Text
    ctaText:
      "Die schwarze Lincoln Town Car Stretch-Limousine ist die elegante Wahl für Hochzeiten, Events und exklusive Fahrten in München. Diskret, luxuriös und mit Chauffeur – für bis zu 8 Personen.",

    // ✅ 3 Besonderheiten-Karten
    highlights: [
      {
        title: "Elegant & Diskret",
        text: "Klassischer Auftritt in Schwarz – ideal für Business, VIP und stilvolle Anlässe.",
        image: "/images/vehicles/lincoln-towncar-black-8p/info/highlight-1.webp",
      },
      {
        title: "Stretch Experience",
        text: "Sternenhimmel, Bar & Komfort – die klassische Stretch-Limo-Atmosphäre.",
        image: "/images/vehicles/lincoln-towncar-black-8p/info/highlight-2.webp",
      },
      {
        title: "Events & Gruppen",
        text: "Bis zu 8 Personen – perfekt für Hochzeiten, Dinner und Event-Transfers.",
        image: "/images/vehicles/lincoln-towncar-black-8p/info/highlight-3.webp",
      },
    ],
  },

  seo: {
    title: "Lincoln Town Car Stretch-Limousine Black (8 Pax) | American Limousine Service",
    description:
      "Schwarze Lincoln Town Car Stretch-Limousine mit Chauffeur in München. Luxus für Hochzeiten, Events & VIP – bis 8 Personen.",
    text:
      "Unsere schwarze Lincoln Town Car Stretch-Limousine (8 Pax) steht für stilvollen Luxus in München. Ideal für Hochzeiten, Events und VIP-Fahrten – mit Chauffeur, Sternenhimmel und Bar.",
  },
};