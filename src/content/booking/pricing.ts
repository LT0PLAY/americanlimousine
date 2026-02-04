// src/content/booking/pricing.ts
import type { Vehicle } from "@/content/vehicles/types";
import { bookingExtras } from "./extras";
import type { BookingRequest, PriceBreakdown } from "./types";

function findTierPrice(
  vehicle: Vehicle,
  hours: number
): { priceEUR: number; selectedTierHours: number } {
  const tiers = vehicle.pricing.tiers ?? [];

  // 1) exakter Treffer
  const exact = tiers.find((t) => t.hours === hours);
  if (exact) {
    return { priceEUR: exact.priceEUR, selectedTierHours: exact.hours };
  }

  // 2) bestes Tier <= hours + extraHourEUR hochrechnen
  const sorted = [...tiers].sort((a, b) => a.hours - b.hours);
  const baseTier = [...sorted].reverse().find((t) => t.hours < hours);

  if (baseTier && vehicle.pricing.extraHourEUR) {
    const extraHours = hours - baseTier.hours;
    return {
      priceEUR: baseTier.priceEUR + extraHours * vehicle.pricing.extraHourEUR,
      selectedTierHours: baseTier.hours,
    };
  }

  // 3) fallback: fromPerHourEUR * hours
  return {
    priceEUR: vehicle.pricing.fromPerHourEUR * hours,
    selectedTierHours: hours,
  };
}

export function calcBookingPrice(
  vehicle: Vehicle,
  req: Pick<BookingRequest, "durationHours" | "extraIds">
): PriceBreakdown {
  const tier = findTierPrice(vehicle, req.durationHours);

  const extrasEUR = req.extraIds
    .map((id) => bookingExtras.find((e) => e.id === id)?.priceEUR ?? 0)
    .reduce((a, b) => a + b, 0);

  return {
    vehicleBaseEUR: tier.priceEUR,
    extrasEUR,
    totalEUR: tier.priceEUR + extrasEUR,
    selectedTierHours: tier.selectedTierHours,
  };
}