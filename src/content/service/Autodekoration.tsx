// src/content/service/Autodekoration.ts
import type { ServiceItem } from "./types";

const Autodekoration: ServiceItem = {
  id: "autodekoration",
  title: "Autodekoration",
  subtitle: "Blumen, Schleifen, Details",
  description:
    "Mit stilvoller Autodekoration und perfekter Inszenierung wird Ihre Limousine zum eleganten Blickfang jedes Events.",

  // ✅ zwei Dateien: Web (16:9) + Mobile (1:1)
  imageSrc: "/images/services/autodekoration-16x9.webp",
  imageSrcMobile: "/images/services/autodekoration-1x1.webp",

  imageAlt: "Limousine mit Autodekoration",

  stats: [
    { value: "Individuell", label: "Style" },
    { value: "Optional", label: "Add-on" },
  ],
};

export default Autodekoration;