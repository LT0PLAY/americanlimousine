import type { Vehicle } from "./types";

export const gmcYukonWhite8p: Vehicle = {
  slug: "gmc-yukon-white-8p",

  brand: "GMC YUKON WHITE",
  name: "GMC Yukon Stretch-Limousine (White, 8 Pax)",

  // ✅ bleibt für HomeHeroSlider / Flotte
  heroLabel: "STRETCH LIMOUSINE",

  images: {
    wallpaper: "/images/vehicles/gmc-yukon-white-8p/wallpaper.webp",
    car: "/images/vehicles/gmc-yukon-white-8p/car.webp",
  },

  // ✅ klassische Galerie (optional, fallback / Zusatz)
  gallery: [
    { label: "Außen", src: "/images/vehicles/gmc-yukon-white-8p/gallery-1.webp" },
    { label: "Innenraum", src: "/images/vehicles/gmc-yukon-white-8p/gallery-2.webp" },
    { label: "Details", src: "/images/vehicles/gmc-yukon-white-8p/gallery-3.webp" },
  ],

  specs: {
    persons: 8,
    lengthMeters: 10.5,
    motor: "V8",
  },

  shortDescription:
    "Geräumiger Premium-SUV mit Chauffeur für Transfers, Business und Events in München & Umgebung.",

  pricing: {
    fromPerHourEUR: 239,
    unitLabel: "/ 1 Std.",
    note: "Alle Preise zzgl. MwSt.",
    tiers: [
      { hours: 1, priceEUR: 239 },
      { hours: 2, priceEUR: 469 },
      { hours: 3, priceEUR: 699 },
      { hours: 4, priceEUR: 929 },
      { hours: 5, priceEUR: 1159 },
      { hours: 8, priceEUR: 1849 },
    ],
    extraHourEUR: 230,
  },

  availability: {
    label: "24/7",
    subLabel: "ERREICHBAR",
  },

  features: [
    "Chauffeur-Service",
    "Klimaanlage",
    "Premium Soundsystem",
    "Getönte Scheiben",
    "Großzügiger Innenraum",
    "Viel Stauraum",
    "USB / Bluetooth",
    "Komfortsitze",
    "8 PAX",
  ],

  // ✅ NEU: Inhalte für die Infopage (Design wie Mercedes / Hummer)
  infoPage: {
    heroWallpaper: "/images/vehicles/gmc-yukon-white-8p/info/hero-wallpaper.webp",

    
    interiorWallpaper:
    "/images/vehicles/gmc-yukon-white-8p/info/interior-wallpaper.webp",

    videoUrl: "/images/vehicles/gmc-yukon-white-8p/showcase.mp4",

    ctaText:
      "Der GMC Yukon Stretch bietet luxuriösen Komfort und viel Platz für Business-Transfers, Events und exklusive Fahrten in München. Ideal für Gruppen bis zu 8 Personen – repräsentativ, ruhig und souverän.",

    highlights: [
      {
        title: "Business & Transfers",
        text: "Perfekt für Geschäftstermine, Hotels und repräsentative Transfers.",
        image: "/images/vehicles/gmc-yukon-white-8p/info/highlight-1.webp",
      },
      {
        title: "Premium Komfort",
        text: "Großzügiger Innenraum, Komfortsitze und ruhige Fahrt für höchste Ansprüche.",
        image: "/images/vehicles/gmc-yukon-white-8p/info/highlight-2.webp",
      },
      {
        title: "Events & Gruppen",
        text: "Bis zu 8 Personen – ideal für Events, VIP-Shuttles und besondere Anlässe.",
        image: "/images/vehicles/gmc-yukon-white-8p/info/highlight-3.webp",
      },
    ],
  },

  seo: {
    title: "GMC Yukon Stretch-Limousine | American Limousine Service München",
    description:
      "GMC Yukon Stretch-Limousine mit Chauffeur in München. Premium-SUV für Business, Transfers und Events – bis 8 Personen.",
    text:
      "Unsere GMC Yukon Stretch-Limousine bietet großzügigen Komfort, starke Präsenz und zuverlässigen Chauffeur-Service für Transfers, Business und Events in München.",
  },
};