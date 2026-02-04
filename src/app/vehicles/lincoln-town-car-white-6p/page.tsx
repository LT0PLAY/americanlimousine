// src/app/vehicles/lincoln-town-car-white-6p/page.tsx
import VehicleInfoLayout from "@/components/VehicleInfo/VehicleInfoLayout";
import { lincolnTownCarWhite6p } from "@/content/vehicles/lincoln-town-car-white-6p";

export const dynamic = "force-static";

export default function LincolnTownCarWhite6pInfoPage() {
  return <VehicleInfoLayout vehicle={lincolnTownCarWhite6p} backHref="/flotte/" />;
}