// src/content/vehicles/types.ts

export type VehicleInfoPage = {
  /**
   * Optional: Basisordner für die InfoPage Assets.
   * Wenn nicht gesetzt, nutzt Layout automatisch:
   * /images/vehicles/<slug>/info
   */
  basePath?: string;

  /**
   * Optional: Überschrift/SEO-CTA Textblock (wenn nicht gesetzt, nimmt er v.seo.text)
   */
  ctaText?: string;

  /**
   * Optional: Video URL (wenn nicht gesetzt → kein Video)
   * Empfehlung: /videos/vehicles/<slug>/showcase.mp4
   */
  videoUrl?: string;

  /**
   * Optional: 3 Highlight-Karten (Titel/Text). Bilder kommen automatisch aus basePath,
   * können aber auch pro Highlight überschrieben werden.
   */
  highlights?: {
    title: string;
    text: string;
    image?: string; // optional override
    alt?: string;
  }[];
};

export type Vehicle = {
  slug: string;
  brand: string;
  name: string;

  /** Optional: Label für HomeHeroSlider (z.B. "VIP VAN", "SUV", "STRETCH LIMOUSINE") */
  heroLabel?: string;

  // Home + Flotte + Slider (unverändert lassen!)
  images: {
    wallpaper: string;
    car: string;
  };

  gallery?: {
    label?: string;
    src: string;
    alt?: string;
  }[];

  specs: {
    persons: number;
    lengthMeters: number;
    motor: string;
  };

  shortDescription: string;

  pricing: {
    fromPerHourEUR: number;
    unitLabel: string;
    note: string;

    tiers?: { hours: number; priceEUR: number }[];
    extraHourEUR?: number;
  };

  availability: {
    label: string;
    subLabel: string;
  };

  features: string[];

  /** ✅ NEU: Inhalte/Assets für die InfoPage */
  infoPage?: VehicleInfoPage;

  seo?: {
    title?: string;
    description?: string;
    text?: string;
  };
};