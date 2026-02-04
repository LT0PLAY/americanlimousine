// src/content/booking/locations.ts

export type BookingLocationOption = {
  id: string;
  label: string;
};

export const bookingLocations: BookingLocationOption[] = [
  { id: "none", label: "keine Auswahl" },
  { id: "puchheim", label: "Puchheim" },
  { id: "munich", label: "München" },
  { id: "Anderer Ort", label: "Anderer Ort" },
];