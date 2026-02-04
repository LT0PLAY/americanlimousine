// src/app/vehicles/lincoln-town-car-white-8p/page.tsx
import VehicleInfoLayout from "@/components/VehicleInfo/VehicleInfoLayout";
import { lincolnTownCarWhite8p } from "@/content/vehicles/lincoln-town-car-white-8p";

export const dynamic = "force-static";

export default function LincolnTownCarWhite8pInfoPage() {
  return <VehicleInfoLayout vehicle={lincolnTownCarWhite8p} backHref="/flotte/" />;
}