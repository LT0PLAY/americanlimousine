// src/content/vehicles/index.ts
import type { Vehicle } from "./types";

// 1) Lincoln Town Car weiß (6 Pax)
import { lincolnTownCarWhite6p } from "./lincoln-town-car-white-6p";
// 2) Lincoln Town Car weiß (8 Pax)
import { lincolnTownCarWhite8p } from "./lincoln-town-car-white-8p";
// 3) Lincoln Town Car schwarz (8 Pax)
import { lincolnTownCarBlack8p } from "./lincoln-town-car-black-8p";
// 4) Lincoln Town Car pink (8 Pax)
import { lincolnTownCarPink8p } from "./lincoln-town-car-pink-8p";
// 5) Lincoln Town Car golden (8 Pax) ✅ NEU
import { lincolnTownCarGolden8p } from "./lincoln-town-car-golden-8p";
// 6) Hummer H3 weiß (8 Pax)
import { hummerH3White8p } from "./hummer-h3-white-8p";
// 7) Hummer H2 weiß (8 Pax)
import { hummerH2White8p } from "./hummer-h2-white-8p";
// 8) Hummer H2 schwarz (8 Pax)
import { hummerH2Black8p } from "./hummer-h2-black-8p";
// 9) GMC Yukon weiß (8 Pax)
import { gmcYukonWhite8p } from "./gmc-yukon-white-8p";
// 10) V-Klasse schwarz (7 Pax)
import { mercedesVKlasseBlack7p } from "./mercedes-v-klasse-black-7p";

/** ✅ zentrale Liste (SSG/Static Export freundlich) */
export const vehicles = [
  lincolnTownCarWhite6p,
  lincolnTownCarBlack8p,
  lincolnTownCarWhite8p,
  lincolnTownCarPink8p,
  lincolnTownCarGolden8p, // ✅ NEU
  hummerH3White8p,
  hummerH2White8p,
  hummerH2Black8p,
  gmcYukonWhite8p,
  mercedesVKlasseBlack7p,
] as const satisfies readonly Vehicle[];

/** ✅ schnelle Lookups */
export const vehicleBySlug = new Map<string, Vehicle>(vehicles.map((v) => [v.slug, v]));

/** ✅ Helper (trim-safe) */
export function getVehicleBySlug(slug: string): Vehicle | undefined {
  const key = typeof slug === "string" ? slug.trim() : "";
  return vehicleBySlug.get(key);
}

/** ✅ Slug-Checks: nur in dev ausführen */
function assertVehiclesOK(list: readonly Vehicle[]) {
  const seen = new Set<string>();

  for (const v of list) {
    if (!v?.slug || typeof v.slug !== "string") {
      throw new Error(`[vehicles] Missing slug for vehicle: ${v?.name ?? "UNKNOWN"}`);
    }

    const slug = v.slug.trim();
    if (slug !== v.slug) {
      throw new Error(`[vehicles] Slug has leading/trailing spaces: "${v.slug}" (${v.name})`);
    }

    if (seen.has(slug)) {
      throw new Error(`[vehicles] Duplicate slug detected: "${slug}"`);
    }
    seen.add(slug);

    if (/\s/.test(slug)) {
      throw new Error(`[vehicles] Slug contains spaces: "${slug}" (${v.name})`);
    }
  }
}

if (process.env.NODE_ENV !== "production") {
  assertVehiclesOK(vehicles);
}

export type { Vehicle } from "./types";