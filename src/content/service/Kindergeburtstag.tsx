// src/content/service/Kindergeburtstag.ts
import type { ServiceItem } from "./types";

const Kindergeburtstag: ServiceItem = {
  id: "kindergeburtstag",
  title: "Kindergeburtstag",
  subtitle: "Ein Tag wie ein Star",
  description:
    "Wie ein Star fühlen – ein Kindergeburtstag in der Stretchlimousine sorgt für strahlende Augen und große Momente.",

  imageSrc: "/images/services/kindergeburtstag-16x9.webp",
  imageSrcMobile: "/images/services/kindergeburtstag-1x1.webp",
  imageAlt: "Kindergeburtstag mit Limousine",

  stats: [
    { value: "Kids", label: "Event" },
    { value: "Sicher", label: "Chauffeur" },
  ],
};

export default Kindergeburtstag;