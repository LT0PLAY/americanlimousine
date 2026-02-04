// src/content/vehicles/hummer-h3-white-8p.ts
import type { Vehicle } from "./types";

export const hummerH3White8p: Vehicle = {
  slug: "hummer-h3-white-8p",

  // ✅ CI: Brand klar, Titel dominant
  brand: "HUMMER",
  name: "H3 Stretch-Limousine (White, 8 Pax)",

  // ✅ HomeHeroSlider
  heroLabel: "STRETCH LIMOUSINE",

  // ✅ Home / Flotte / Slider
  images: {
    wallpaper: "/images/vehicles/hummer-h3-white-8p/wallpaper.webp",
    car: "/images/vehicles/hummer-h3-white-8p/car.webp",
  },

  // ✅ Galerie (für Detail & SEO)
  gallery: [
    {
      label: "Außen",
      src: "/images/vehicles/hummer-h3-white-8p/gallery-1.webp",
      alt: "Hummer H3 Stretch-Limousine White – Außenansicht",
    },
    {
      label: "Innen",
      src: "/images/vehicles/hummer-h3-white-8p/gallery-2.webp",
      alt: "Hummer H3 Stretch-Limousine White – Innenraum",
    },
    {
      label: "Details",
      src: "/images/vehicles/hummer-h3-white-8p/gallery-3.webp",
      alt: "Hummer H3 Stretch-Limousine White – Details",
    },
  ],

  specs: {
    persons: 8,
    lengthMeters: 8.7,
    motor: "V8",
  },

  shortDescription:
    "Markante weiße Hummer H3 Stretch-Limousine für Events, Hochzeiten und exklusive VIP-Fahrten in München & Umgebung.",

  pricing: {
    fromPerHourEUR: 149,
    unitLabel: "/ 1 Std.",
    note: "Alle Preise zzgl. MwSt.",
    tiers: [
      { hours: 1, priceEUR: 149 },
      { hours: 2, priceEUR: 289 },
      { hours: 3, priceEUR: 429 },
      { hours: 4, priceEUR: 509 },
      { hours: 5, priceEUR: 709 },
      { hours: 8, priceEUR: 1129 },
    ],
    extraHourEUR: 140,
  },

  availability: {
    label: "24/7",
    subLabel: "ERREICHBAR",
  },

  // ✅ Ausstattung → mittlere Karte mit › Pfeil
  features: [
    "Chauffeur-Service",
    "Sternenhimmel",
    "Neon Lights",
    "Spiegelhimmel",
    "2 Klimaanlagen",
    "Heizung",
    "Bar mit Kühlfach",
    "Getönte Scheiben",
    "Abschließbare Trennwand",
    "USB / CD / AUX & Bluetooth",
    "8 PAX",
  ],

  // =========================
  // INFO PAGE (neues Design)
  // =========================
  infoPage: {
    basePath: "/images/vehicles/hummer-h3-white-8p/info",

    // ✅ großes Hero-Bild (NEU, nicht das Home-Wallpaper)
    heroWallpaper: "/images/vehicles/hummer-h3-white-8p/info/hero-wallpaper.webp",

    // ✅ Innenraum-Banner
    interiorWallpaper: "/images/vehicles/hummer-h3-white-8p/info/interior-wallpaper.webp",

    // ✅ optionales Video
    videoUrl: "/images/vehicles/hummer-h3-white-8p/showcase.mp4",

    // ✅ CTA / SEO Text
    ctaText:
      "Die weiße Hummer H3 Stretch-Limousine ist ein echter Hingucker für Events, Hochzeiten und VIP-Fahrten in München. Kraftvoll, luxuriös und einzigartig – mit Chauffeur und Platz für bis zu 8 Personen.",

    // ✅ 3 Besonderheiten
    highlights: [
      {
        title: "Unverwechselbarer Auftritt",
        text: "Massives Design, weißes Exterieur und beeindruckende Präsenz für besondere Anlässe.",
        image: "/images/vehicles/hummer-h3-white-8p/info/highlight-1.webp",
      },
      {
        title: "Party & VIP Interior",
        text: "Neon Lights, Spiegelhimmel und Bar – perfekte Atmosphäre für Events & Feiern.",
        image: "/images/vehicles/hummer-h3-white-8p/info/highlight-2.webp",
      },
      {
        title: "Power & Komfort",
        text: "V8-Power, Chauffeur-Service und Platz für bis zu 8 Personen.",
        image: "/images/vehicles/hummer-h3-white-8p/info/highlight-3.webp",
      },
    ],
  },

  // =========================
  // SEO
  // =========================
  seo: {
    title: "Hummer H3 Stretch-Limousine White (8 Pax) | American Limousine Service",
    description:
      "Weiße Hummer H3 Stretch-Limousine mit Chauffeur in München. Perfekt für Events, Hochzeiten & VIP – bis 8 Personen.",
    text:
      "Unsere weiße Hummer H3 Stretch-Limousine ist die perfekte Wahl für exklusive Events und VIP-Fahrten in München. Auffällig, luxuriös und komfortabel – mit Chauffeur und Platz für bis zu 8 Personen.",
  },
};