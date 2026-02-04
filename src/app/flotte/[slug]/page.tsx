// src/app/flotte/[slug]/page.tsx
import { notFound } from "next/navigation";
import { vehicles } from "@/content/vehicles";
import VehicleInfoLayout from "@/components/VehicleInfo/VehicleInfoLayout";

export const dynamic = "force-static";
export const dynamicParams = false;

// ✅ Static Export (output:"export") braucht alle Slugs vorab
export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const cleanSlug = (slug ?? "").trim();
  const v = vehicles.find((x) => x.slug === cleanSlug);
  if (!v) return notFound();

  // ✅ /flotte/<slug>/ rendert die Infoseite (VehicleInfoLayout)
  return <VehicleInfoLayout vehicle={v} backHref="/flotte/" />;
}