// src/app/vehicles/[slug]/page.tsx
import { notFound } from "next/navigation";
import { vehicles } from "@/content/vehicles";
import VehicleInfoLayout from "@/components/VehicleInfo/VehicleInfoLayout";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export default function VehicleInfoBySlugPage({ params }: { params: { slug: string } }) {
  const slug = params.slug?.trim();
  const v = vehicles.find((x) => x.slug === slug);
  if (!v) return notFound();

  return <VehicleInfoLayout vehicle={v} backHref="/flotte/" />;
}