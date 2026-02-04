// src/app/vehicles/hummer-h2-white-8p/page.tsx
import VehicleInfoLayout from "@/components/VehicleInfo/VehicleInfoLayout";
import { hummerH2White8p } from "@/content/vehicles/hummer-h2-white-8p";

// ✅ Static Export kompatibel
export const dynamic = "force-static";

export default function HummerH2White8pInfoPage() {
  return (
    <VehicleInfoLayout
      vehicle={hummerH2White8p}
      backHref="/flotte/"
    />
  );
}