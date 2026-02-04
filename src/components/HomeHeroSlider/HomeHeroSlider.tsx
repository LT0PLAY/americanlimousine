// src/components/HomeHeroSlider/HomeHeroSlider.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./HomeHeroSlider.module.css";
import type { Vehicle } from "@/content/vehicles";

function pickSrc(src: unknown, fallback: string) {
  if (typeof src === "string") {
    const s = src.trim();
    if (s.length > 0) return s;
  }
  return fallback;
}

type Props = {
  vehicles: Vehicle[];

  // ✅ neu: wird aufgerufen wenn "Jetzt wählen" gedrückt wird
  onSelect?: (vehicle: Vehicle) => void;

  // ✅ optional: wohin gescrollt werden soll (Default: "#booking")
  bookingAnchorId?: string;
};

export default function HomeHeroSlider({
  vehicles,
  onSelect,
  bookingAnchorId = "booking",
}: Props) {
  const safeVehicles = useMemo(() => vehicles ?? [], [vehicles]);
  const [index, setIndex] = useState(0);

  const v = safeVehicles[index];
  if (!v) return null;

  const prev = () =>
    setIndex((i) => (i === 0 ? safeVehicles.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === safeVehicles.length - 1 ? 0 : i + 1));

  const wallpaperDesktop = "/images/wallpaper/desktop.webp";
  const wallpaperMobile = "/images/wallpaper/mobile.webp";

  const carSrc = pickSrc(
    (v as any).car ?? v.images?.car,
    "/images/placeholder-car.webp"
  );

  // ✅ HERO LABEL AUS FAHRZEUG (falls vorhanden)
  const heroBottomLabel = (v as any).heroLabel?.trim() || "STRETCH LIMOUSINE";

  // ✅ Button-Click: Fahrzeug wählen + scrollen zum Formular
  const handleSelect = () => {
    onSelect?.(v);

    // scroll zu Formular-Container auf Home
    const el = document.getElementById(bookingAnchorId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const Stage = () => (
    <div className={styles.stage}>
      <div className={styles.wallpaper} aria-hidden="true">
        <picture>
          <source media="(max-width: 768px)" srcSet={wallpaperMobile} />
          <img
            src={wallpaperDesktop}
            alt=""
            className={styles.wallpaperImg}
            loading="eager"
          />
        </picture>
      </div>

      <div className={styles.wallpaperOverlay} aria-hidden="true" />

      <div className={styles.header}>
        <span className={styles.headerClaim}>
          PREMIUM-LIMOUSINEN-SERVICE FÜR MÜNCHEN & UMGEBUNG
        </span>
        <span className={styles.counter}>
          {index + 1} / {safeVehicles.length}
        </span>
      </div>

      <div className={styles.heroText} aria-hidden="true">
        <div className={styles.heroTop}>{v.brand}</div>
        <div className={styles.heroBottom}>{heroBottomLabel}</div>
      </div>

      <div className={styles.carStage}>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={prev}
        >
          ‹
        </button>

        <Image
          src={carSrc}
          alt={v.name}
          width={1600}
          height={800}
          className={styles.car}
          priority
        />

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={next}
        >
          ›
        </button>
      </div>
    </div>
  );

  const Bottom = () => (
    <div className={styles.bottomStack}>
      <div className={styles.bottomSpecs}>
        <div className={styles.specBox}>
          <div className={styles.specValue}>{v.specs.persons}</div>
          <div className={styles.specLabel}>PERSONEN</div>
        </div>
        <div className={styles.specBox}>
          <div className={styles.specValue}>{v.specs.lengthMeters}m</div>
          <div className={styles.specLabel}>LÄNGE</div>
        </div>
        <div className={styles.specBox}>
          <div className={styles.specValue}>{v.specs.motor}</div>
          <div className={styles.specLabel}>MOTOR</div>
        </div>
      </div>

      <div className={styles.infoPanel}>
        <div className={styles.panelTopRow}>
          <div>
            <div className={styles.panelKicker}>ERLEBEN SIE EXKLUSIVITÄT</div>
            <div className={styles.priceLine}>
              <span className={styles.pricePrefix}>ab</span>
              <span className={styles.priceValue}>
                {v.pricing.fromPerHourEUR}€
              </span>
              <span className={styles.priceUnit}>{v.pricing.unitLabel}</span>
            </div>
          </div>

          <div className={styles.avail}>
            <div className={styles.availValue}>{v.availability.label}</div>
            <div className={styles.availLabel}>{v.availability.subLabel}</div>
          </div>
        </div>

        <p className={styles.panelText}>{v.shortDescription}</p>

        <div className={styles.features}>
          {v.features.map((f) => (
            <div key={f} className={styles.feature}>
              <span className={styles.bullet}>›</span>
              {f}
            </div>
          ))}
        </div>

        <div className={styles.ctas}>
          {/* ✅ NICHT mehr zu /flotte/[slug] navigieren */}
          <button
            type="button"
            className={styles.primaryButton}
            onClick={handleSelect}
          >
            Jetzt wählen
          </button>

          {/* ✅ Flotte bleibt als separate Übersicht */}
          <Link href="/flotte" className={styles.secondary}>
            Flotte ansehen
          </Link>
        </div>

        <div className={styles.note}>{v.pricing.note}</div>
      </div>
    </div>
  );

  return (
    <section className={styles.hero}>
      <div className={styles.desktopOnly}>
        <Stage />
        <Bottom />
      </div>

      <div className={styles.mobileOnly}>
        <Stage />
        <Bottom />
      </div>
    </section>
  );
}