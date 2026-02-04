// src/components/home/HomeHeader.tsx
"use client";

import styles from "./HomeHeader.module.css";
import BrandLogoMarquee from "@/components/home/BrandLogoMarquee";

export default function HomeHeader() {
  return (
    <header className={styles.header} aria-label="Header">
      {/* Background */}
      <div className={styles.media}>
        {/* Desktop / Tablet (16:9) */}
        <img
          src="/images/home/header-wallpaper.webp"
          alt="Stretch-Limousinen Service München"
          className={`${styles.mediaEl} ${styles.mediaDesktop}`}
        />

        {/* Mobile (9:16) */}
        <img
          src="/images/home/header-wallpaper-9x16.webp"
          alt="Stretch-Limousinen Service München"
          className={`${styles.mediaEl} ${styles.mediaMobile}`}
        />

        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <span className={styles.kicker}>
          SÜDDEUTSCHLANDS GRÖßTER PREMIUM LIMOUSINENSERVICE
        </span>

        <h1 className={styles.title}>
          <span className={styles.titleLine1}>
            STRETCH-LIMOUSINEN{" "}
            <span className={styles.titleAccent}>MIETEN</span>
          </span>
          <span className={styles.titleLine3}>MÜNCHEN &amp; UMGEBUNG</span>
        </h1>

        <div className={styles.meta}>
          <span>24 Stunden Service</span>
          <span className={styles.dot}>•</span>
          <span>ab 69,00 € / Stunde</span>
        </div>

        {/* ✅ FIX: ctaWrap statt ctaRow */}
        <div className={styles.ctaWrap}>
          <a href="#fahrzeuge" className={styles.ctaPrimary}>
            JETZT UNVERBINDLICH BUCHEN
          </a>

          <a href="tel:+49897256252" className={styles.ctaSecondary}>
            JETZT ANRUFEN
          </a>
        </div>
      </div>

      <div className={styles.brandMarquee}>
        <BrandLogoMarquee />
      </div>
    </header>
  );
}