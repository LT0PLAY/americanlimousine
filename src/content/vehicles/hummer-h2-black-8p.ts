// src/content/vehicles/hummer-h2-black-8p.ts
import type { Vehicle } from "./types";

export const hummerH2Black8p: Vehicle = {
  slug: "hummer-h2-black-8p",

  brand: "HUMMER",
  name: "H2 Stretch-Limousine (Black, 8 Pax)",

  // Text im HomeHeroSlider
  heroLabel: "STRETCH LIMOUSINE",

  // bleibt für Home / Flotte
  images: {
    wallpaper: "/images/vehicles/hummer-h2-black-8p/wallpaper.webp",
    car: "/images/vehicles/hummer-h2-black-8p/car.webp",
  },

  specs: {
    persons: 8,
    lengthMeters: 10.5,
    motor: "V8",
  },

  shortDescription:
    "Einzigartige schwarze Hummer H2 Stretch-Limousine – über 10 Meter Länge, maximaler Auftritt und purer Luxus für Events in München & Umgebung.",

  pricing: {
    fromPerHourEUR: 180,
    unitLabel: "/ 1 Std.",
    note: "Alle Preise zzgl. MwSt.",
    tiers: [
      { hours: 1, priceEUR: 189 },
      { hours: 2, priceEUR: 369 },
      { hours: 3, priceEUR: 549 },
      { hours: 4, priceEUR: 729 },
      { hours: 5, priceEUR: 909 },
      { hours: 8, priceEUR: 1449 },
    ],
    extraHourEUR: 180,
  },

  availability: {
    label: "24/7",
    subLabel: "ERREICHBAR",
  },

  features: [
    "USB / CD / AUX & Bluetooth",
    "Sternenhimmel",
    "2 Klimaanlagen",
    "Heizung",
    "Bar mit Kühlfach",
    "Getönte Scheiben",
    "Neon Lights",
    "Spiegelhimmel",
    "Abschließbare Trennwand",
    "8 PAX",
  ],

  // 🔥 ALLES für die Infopage
  infoPage: {
    heroWallpaper:
      "/images/vehicles/hummer-h2-black-8p/info/hero-wallpaper.webp",

    interiorWallpaper:
      "/images/vehicles/hummer-h2-black-8p/info/interior-wallpaper.webp",

    videoUrl:
      "/videos/vehicles/hummer-h2-black-8p/showcase.mp4",

    ctaText:
      "Die schwarze Hummer H2 Stretch-Limousine steht für maximalen Auftritt, Luxus und Präsenz. Ideal für Events, VIP-Transfers und besondere Anlässe in München – mit Chauffeur und Platz für bis zu 8 Personen.",

    highlights: [
      {
        title: "Maximaler Auftritt",
        text: "Über 10 Meter Länge, tiefschwarzes Design und pure Präsenz – ein Fahrzeug, das Eindruck hinterlässt.",
        image:
          "/images/vehicles/hummer-h2-black-8p/info/highlight-1.webp",
      },
      {
        title: "Luxury Night Interior",
        text: "Neon Lights, Sternenhimmel und exklusiver Barbereich für stilvolle Abende.",
        image:
          "/images/vehicles/hummer-h2-black-8p/info/highlight-2.webp",
      },
      {
        title: "Events & VIP",
        text: "Perfekt für Clubs, Galas, Hochzeiten und exklusive Gruppenfahrten.",
        image:
          "/images/vehicles/hummer-h2-black-8p/info/highlight-3.webp",
      },
    ],
  },

  seo: {
    title: "Hummer H2 Stretch-Limousine Black | American Limousine Service",
    description:
      "Schwarze Hummer H2 Stretch-Limousine mit Chauffeur in München. Luxus, Neon Lights, Bar & VIP-Feeling für bis zu 8 Personen.",
    text:
      "Unsere schwarze Hummer H2 Stretch-Limousine ist das ultimative VIP-Fahrzeug für Events, Nachtfahrten und besondere Anlässe in München. Luxuriös, auffällig und kompromisslos.",
  },
};