// src/app/vehicles/gmc-yukon-white-8p/page.tsx
import VehicleInfoLayout from "@/components/VehicleInfo/VehicleInfoLayout";
import { gmcYukonWhite8p } from "@/content/vehicles/gmc-yukon-white-8p";

export const dynamic = "force-static";

export default function GmcYukonWhite8pPage() {
  return (
    <VehicleInfoLayout
      vehicle={gmcYukonWhite8p}
      backHref="/flotte/"
    />
  );
}