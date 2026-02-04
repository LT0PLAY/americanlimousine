// src/components/home/BrandLogoMarquee.tsx
"use client";

import styles from "./BrandLogoMarquee.module.css";

type Logo = {
  src: string;
  alt: string;
};

const LOGOS: Logo[] = [
  { src: "/images/brands/lincoln.webp", alt: "Lincoln" },
  { src: "/images/brands/chrysler.webp", alt: "Chrysler" },
  { src: "/images/brands/mercedes.webp", alt: "Mercedes-Benz" },
  { src: "/images/brands/hummer.webp", alt: "Hummer" },
];

export default function BrandLogoMarquee() {
  return (
    <section className={styles.wrap} aria-label="Markenlogos">
      <div className={styles.card}>
        {/* 👉 Zentrier-Wrapper */}
        <div className={styles.center}>
          <div className={styles.row}>
            {LOGOS.map((l) => (
              <img
                key={l.src}
                src={l.src}
                alt={l.alt}
                className={styles.logo}
                loading="lazy"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}