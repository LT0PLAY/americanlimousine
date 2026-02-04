// src/app/vehicles/lincoln-town-car-pink-8p/page.tsx
import VehicleInfoLayout from "@/components/VehicleInfo/VehicleInfoLayout";
import { lincolnTownCarPink8p } from "@/content/vehicles/lincoln-town-car-pink-8p";

export const dynamic = "force-static";

export default function LincolnTownCarPink8pInfoPage() {
  return <VehicleInfoLayout vehicle={lincolnTownCarPink8p} backHref="/flotte/" />;
}