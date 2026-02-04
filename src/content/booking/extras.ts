// src/content/booking/extras.ts

export type BookingExtra = {
  id: string;
  label: string;
  description?: string;
  priceEUR: number;
};

export const bookingExtras: BookingExtra[] = [
  {
    id: "flowers",
    label: "Blumen-Arrangement",
    description: "Frische Blumendekoration im Fahrzeug",
    priceEUR: 39,
  },
  {
    id: "red-carpet",
    label: "Roter Teppich",
    description: "Exklusiver roter Teppich beim Einstieg",
    priceEUR: 29,
  },
  {
    id: "just-married-flags",
    label: "Just Married Flaggen",
    description: "Hochzeits-Dekorationsset am Fahrzeug",
    priceEUR: 19,
  },
  {
    id: "champagne-premium",
    label: "Champagner Moët",
    description: "Premium Champagner (z. B. Moët)",
    priceEUR: 89,
  },

  // Entertainment & Services
  {
    id: "stripper",
    label: "Stripper",
    description: "Professionelle Unterhaltung durch Stripper",
    priceEUR: 299,
  },
  {
    id: "stripperin",
    label: "Stripperin",
    description: "Professionelle Unterhaltung durch Stripperin",
    priceEUR: 299,
  },
  {
    id: "photographer",
    label: "Fotograf Service",
    description: "2 Stunden professionelle Fotografie",
    priceEUR: 249,
  },

  // Getränke
  {
    id: "Extra Proseco",
    label: "Extra Prosecco",
    description: "Zusätzliche Flasche Prosecco",
    priceEUR: 19,
  },
];