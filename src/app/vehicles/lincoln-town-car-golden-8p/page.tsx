// src/app/vehicles/lincoln-town-car-golden-8p/page.tsx
import VehicleInfoLayout from "@/components/VehicleInfo/VehicleInfoLayout";
import { lincolnTownCarGolden8p } from "@/content/vehicles/lincoln-town-car-golden-8p";

// ✅ Static Export kompatibel
export const dynamic = "force-static";

export default function LincolnTownCarGolden8pInfoPage() {
  return (
    <VehicleInfoLayout
      vehicle={lincolnTownCarGolden8p}
      backHref="/flotte/"
    />
  );
}