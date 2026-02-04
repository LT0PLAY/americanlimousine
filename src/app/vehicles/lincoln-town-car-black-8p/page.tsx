// src/app/vehicles/lincoln-town-car-black-8p/page.tsx
import VehicleInfoLayout from "@/components/VehicleInfo/VehicleInfoLayout";
import { lincolnTownCarBlack8p } from "@/content/vehicles/lincoln-town-car-black-8p";

export const dynamic = "force-static";

export default function LincolnTownCarBlack8pInfoPage() {
  return <VehicleInfoLayout vehicle={lincolnTownCarBlack8p} backHref="/flotte/" />;
}