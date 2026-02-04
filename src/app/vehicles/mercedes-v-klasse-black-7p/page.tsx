// src/app/vehicles/mercedes-v-klasse-black-7p/page.tsx
import VehicleInfoLayout from "@/components/VehicleInfo/VehicleInfoLayout";
import { mercedesVKlasseBlack7p } from "@/content/vehicles/mercedes-v-klasse-black-7p";

// ✅ Static Export kompatibel
export const dynamic = "force-static";

export default function MercedesVKlasseBlack7pInfoPage() {
  return (
    <VehicleInfoLayout
      vehicle={mercedesVKlasseBlack7p}
      backHref="/flotte/"
    />
  );
}