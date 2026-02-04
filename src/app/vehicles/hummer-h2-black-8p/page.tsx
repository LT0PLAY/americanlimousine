// src/app/vehicles/hummer-h2-black-8p/page.tsx
import VehicleInfoLayout from "@/components/VehicleInfo/VehicleInfoLayout";
import { hummerH2Black8p } from "@/content/vehicles/hummer-h2-black-8p";

export const dynamic = "force-static";

export default function HummerH2Black8pPage() {
  return (
    <VehicleInfoLayout
      vehicle={hummerH2Black8p}
      backHref="/flotte/"
    />
  );
}