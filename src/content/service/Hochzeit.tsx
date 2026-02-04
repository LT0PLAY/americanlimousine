// src/content/service/Hochzeit.ts
import type { ServiceItem } from "./types";

const Hochzeit: ServiceItem = {
  id: "hochzeit",
  title: "Hochzeit",
  subtitle: "Stilvolle An- & Abfahrt",
  description:
    "Glanzvolle Verlobung oder rauschende Traumhochzeit – wir begleiten Ihr besonderes Fest stilvoll und unvergesslich.",

  imageSrc: "/images/services/hochzeit-16x9.webp",
  imageSrcMobile: "/images/services/hochzeit-1x1.webp",
  imageAlt: "Hochzeitspaar mit Limousine",

  stats: [
    { value: "Premium", label: "Auftritt" },
    { value: "Pünktlich", label: "Planung" },
  ],
};

export default Hochzeit;