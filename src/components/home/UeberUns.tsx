"use client";

import styles from "./UeberUns.module.css";

export default function UeberUns() {
  return (
    <section className={styles.wrap} aria-label="Über Uns">
      {/* VIDEO – HINTERGRUND */}
      <div className={styles.videoWrap} aria-hidden="true">
        {/* Desktop (16:9) */}
        <video
          className={`${styles.video} ${styles.videoDesktop}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/home/ueber-uns-banner.mp4" type="video/mp4" />
        </video>

        {/* Mobile (9:16) */}
        <video
          className={`${styles.video} ${styles.videoMobile}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="/videos/home/ueber-uns-banner-9x16.mp4"
            type="video/mp4"
          />
        </video>

        <div className={styles.videoOverlay} />
      </div>

      {/* TEXT – VORDERGRUND */}
      <div className={styles.inner}>
        {/* KICKER */}
        <div className={styles.kickerRow}>
          <span className={styles.kickerLine} aria-hidden="true" />
          <span className={styles.kickerIndex}>/ 03</span>
          <span className={styles.kickerLine} aria-hidden="true" />
        </div>

        {/* TITEL */}
        <h2 className={styles.title}>Über Uns</h2>
        <div className={styles.subTitle}>
          American Limousine Service GmbH
        </div>

        {/* INHALT */}
        <div className={styles.pointsGrid}>
          <ul className={styles.pointList}>
            <li>
              Wir bieten Ihnen einen professionellen Limousinenservice für private
              und geschäftliche Anlässe in München.
            </li>
            <li>
              Sowohl reguläre Limousinen als auch Stretchlimousinen gehören zu
              unserer exklusiven Flotte.
            </li>
            <li>
              Sie möchten eine Limousine mieten für ein Meeting, eine Stadtrundfahrt
              oder einen Shuttle-Service zum Flughafen?
            </li>
          </ul>

          <ul className={styles.pointList}>
            <li>
              Alle Fahrzeuge können individuell mit Blumen geschmückt werden.
            </li>
            <li>
              Getränke an Bord, roter Teppich oder auf Wunsch eine Tanzeinlage
              unserer Stripper / Stripperinnen.
            </li>
            <li>
              Von der IHK geprüft für innerstaatlichen und grenzüberschreitenden
              Verkehr.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}