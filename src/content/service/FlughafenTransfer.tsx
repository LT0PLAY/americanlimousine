// src/content/service/FlughafenTransfer.ts
import type { ServiceItem } from "./types";

const FlughafenTransfer: ServiceItem = {
  id: "flughafen-transfer",
  title: "Flughafen-Transfer",
  subtitle: "Business & Privat",
  description:
    "Exklusiver Flughafen-Transfer für Businesskunden: entspannt zum Flughafen, pünktliche Abholung Ihrer Geschäftspartner.",

  imageSrc: "/images/services/flughafen-transfer-16x9.webp",
  imageSrcMobile: "/images/services/flughafen-transfer-1x1.webp",
  imageAlt: "Flughafen Transfer mit Limousine",

  stats: [
    { value: "Sicher", label: "Fahrt" },
    { value: "Termintreu", label: "Service" },
  ],
};

export default FlughafenTransfer;