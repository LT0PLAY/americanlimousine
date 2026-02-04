// src/content/service/Junggesellenabschied.ts
import type { ServiceItem } from "./types";

const Junggesellenabschied: ServiceItem = {
  id: "junggesellenabschied",
  title: "Junggesellenabschied",
  subtitle: "Luxus-Event in München & Umgebung",
  description:
    "Noch keine Idee für den Junggesellenabschied? Mietet eine Stretchlimousine und startet stilvoll in eine unvergessliche Nacht.",

  imageSrc: "/images/services/junggesellenabschied-16x9.webp",
  imageSrcMobile: "/images/services/junggesellenabschied-1x1.webp",
  imageAlt: "Junggesellenabschied mit Limousine",

  stats: [
    { value: "Bis 8", label: "Personen" },
    { value: "Chauffeur", label: "inkl." },
  ],
};

export default Junggesellenabschied;