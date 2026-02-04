// src/app/vehicles/hummer-h3-white-8p/page.tsx
import VehicleInfoLayout from "@/components/VehicleInfo/VehicleInfoLayout";
import { hummerH3White8p } from "@/content/vehicles/hummer-h3-white-8p";

// ✅ Static Export kompatibel
export const dynamic = "force-static";

export default function HummerH3White8pInfoPage() {
  return <VehicleInfoLayout vehicle={hummerH3White8p} backHref="/flotte/" />;
}