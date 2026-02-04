// src/content/vehicles/hummer-h2-white-8p.ts
import type { Vehicle } from "./types";

export const hummerH2White8p: Vehicle = {
  slug: "hummer-h2-white-8p",

  brand: "HUMMER",
  name: "H2 Stretch-Limousine (White, 8 Pax)",

  // ✅ bleibt für HomeHeroSlider
  heroLabel: "STRETCH LIMOUSINE",

  images: {
    wallpaper: "/images/vehicles/hummer-h2-white-8p/wallpaper.webp",
    car: "/images/vehicles/hummer-h2-white-8p/car.webp",
  },

  gallery: [
    {
      label: "Innenraum",
      src: "/images/vehicles/hummer-h2-white-8p/gallery-1.webp",
      alt: "Hummer H2 White – Innenraum",
    },
    {
      label: "Bar & Licht",
      src: "/images/vehicles/hummer-h2-white-8p/gallery-2.webp",
      alt: "Hummer H2 White – Bar & Licht",
    },
    {
      label: "Sitze & Details",
      src: "/images/vehicles/hummer-h2-white-8p/gallery-3.webp",
      alt: "Hummer H2 White – Sitze & Details",
    },
  ],

  specs: {
    persons: 8,
    lengthMeters: 10.5,
    motor: "V8",
  },

  shortDescription:
    "Die weiße Hummer H2 Stretch-Limousine steht für maximalen Auftritt. Über 10 Meter Länge, luxuriöser Innenraum und perfekte Bühne für Events, Hochzeiten und VIP-Fahrten in München & Umgebung.",

  pricing: {
    fromPerHourEUR: 189,
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

  // ✅ NEU: Inhalte speziell für die Infopage
  infoPage: {
    // großes Hero-Wallpaper (anderes Bild als Home)
    heroWallpaper: "/images/vehicles/hummer-h2-white-8p/info-hero.webp",

    // großer Interior-Bereich
    interiorWallpaper: "/images/vehicles/hummer-h2-white-8p/info-interior.webp",

    // optionales Video
    videoUrl: "/images/vehicles/hummer-h2-white-8p/showcase.mp4",

    // CTA / SEO Text (Block unter dem Interior)
    ctaText:
      "Mit der Hummer H2 Stretch-Limousine erleben Sie einen Auftritt, der in Erinnerung bleibt. Perfekt für Hochzeiten, Events, Junggesellenabschiede und VIP-Transfers – kompromissloser Luxus auf über 10 Metern.",

    // 3 Highlight-Karten
    highlights: [
      {
        title: "Maximaler Auftritt",
        text: "Über 10 Meter Länge und markantes Design – ideal für große Events und spektakuläre Ankünfte.",
        image: "/images/vehicles/hummer-h2-white-8p/highlight-1.webp",
      },
      {
        title: "Party & Event",
        text: "Neon-Lights, Sternenhimmel und Bar machen jede Fahrt zum Erlebnis.",
        image: "/images/vehicles/hummer-h2-white-8p/highlight-2.webp",
      },
      {
        title: "VIP Komfort",
        text: "Abschließbare Trennwand, ruhiger Innenraum und luxuriöse Sitze für exklusive Fahrten.",
        image: "/images/vehicles/hummer-h2-white-8p/highlight-3.webp",
      },
    ],
  },

  seo: {
    title: "Hummer H2 Stretch-Limousine White | American Limousine Service",
    description:
      "Hummer H2 Stretch-Limousine in Weiß mit Chauffeur in München. 8 Personen, über 10 Meter Länge – Events, Hochzeiten & VIP-Fahrten.",
    text:
      "Unsere weiße Hummer H2 Stretch-Limousine ist die perfekte Wahl für alle, die einen spektakulären Auftritt suchen. Ideal für Hochzeiten, Events und exklusive VIP-Fahrten in München und Umgebung.",
  },
};