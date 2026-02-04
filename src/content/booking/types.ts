// src/content/booking/types.ts
import type { Vehicle } from "@/content/vehicles/types";
import type { BookingOccasion } from "./occasions";

export type BookingDurationOption = {
  hours: number;
  label: string; // "1h", "2h", ...
};

export const bookingDurations: BookingDurationOption[] = [
  { hours: 1, label: "1h" },
  { hours: 2, label: "2h" },
  { hours: 3, label: "3h" },
  { hours: 8, label: "8h" },
];

export type BookingRequest = {
  vehicleSlug: Vehicle["slug"];

  durationHours: number;

  pickupLocationId?: string; // z.B. "munich" | "none"
  pickupAddress?: string; // optional (Freitext)
  dropoffAddress?: string;

  occasionId?: BookingOccasion["id"]; // z.B. "wedding" | "none"

  // ✅ einfacher & robuster als BookingExtra["id"] (weil aktuell sowieso string)
  extraIds: string[];

  dateISO?: string; // "YYYY-MM-DD"
  timeFrom?: string; // "HH:mm"
  timeTo?: string; // "HH:mm"

  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;

  message?: string;
};

export type PriceBreakdown = {
  vehicleBaseEUR: number;
  extrasEUR: number;
  totalEUR: number;
  selectedTierHours?: number;
};