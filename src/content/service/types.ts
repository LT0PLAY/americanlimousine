// src/content/service/types.ts

export type ServiceStat = {
  value: string;
  label: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  stats: ServiceStat[];

  // optional für mobile (1:1), wird in Services.tsx benutzt
  imageSrcMobile?: string;
};