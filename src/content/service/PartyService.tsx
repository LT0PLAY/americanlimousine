// src/content/service/PartyService.ts
import type { ServiceItem } from "./types";

const PartyService: ServiceItem = {
  id: "party-service",
  title: "Party Service",
  subtitle: "Nachtfahrt mit Chauffeur",
  description:
    "Mieten Sie eine Stretchlimousine für Ihre Partytour durch die Nacht und genießen Sie stilvolle Mobilität bis zum Morgengrauen.",

  imageSrc: "/images/services/party-service-16x9.webp",
  imageSrcMobile: "/images/services/party-service-1x1.webp",
  imageAlt: "Party Service mit Stretchlimousine",

  stats: [
    { value: "Night", label: "Vibes" },
    { value: "Flexibel", label: "Stops" },
  ],
};

export default PartyService;