// src/content/booking/occasions.ts

export type BookingOccasion = {
  id: string;
  label: string;
  // optional: Kurzbeschreibung für UI
  description?: string;
};

export const bookingOccasions: BookingOccasion[] = [
  { id: "none", label: "keine Angabe" },
  { id: "wedding", label: "Hochzeit" },
  { id: "bachelor", label: "Junggesellenabschied" },
  { id: "bachelorette", label: "Junggesellinnenabschied" },
  { id: "party", label: "Party / Gala / Event" },
  { id: "city-tour", label: "Stadtrundfahrt" },
  { id: "airport", label: "Flughafen-Shuttle" },
  { id: "chauffeur", label: "Chauffeurdienst" },
  { id: "advertising", label: "Werbefahrt" },
  { id: "oktoberfest", label: "Oktoberfest-Shuttle" },
  { id: "sports", label: "Sport- / Vereinsfahrten" },
  { id: "funeral", label: "Beerdigung" },
  { id: "other", label: "Sonstiges" },
];