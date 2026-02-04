// src/app/flotte/page.tsx
import Link from "next/link";
import Image from "next/image";
import { vehicles } from "@/content/vehicles";
import styles from "./page.module.css";

export const metadata = {
  title: "Die Flotte | American Limousine Service",
  description:
    "Unsere Limousinen im Überblick. Wähle ein Fahrzeug und sieh Details, Specs und Ausstattung.",
};

function pickSrc(src: unknown, fallback: string) {
  if (typeof src === "string") {
    const s = src.trim();
    if (s.length > 0) return s;
  }
  return fallback;
}

export default function FleetPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.kicker}>American Limousine Service</div>
        <h1 className={styles.h1}>Die Flotte</h1>
        <p className={styles.sub}>
          Wähle ein Fahrzeug, um Details und Ausstattung zu sehen.
        </p>
      </header>

      <section className={styles.grid}>
        {vehicles.map((v, idx) => {
          const wallpaperSrc = pickSrc(
            v.images?.wallpaper,
            "/images/placeholder-wallpaper.webp"
          );
          const carSrc = pickSrc(v.images?.car, "/images/placeholder-car.webp");

          const href = `/flotte/${v.slug}/`;

          return (
            <Link key={v.slug} href={href} className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={wallpaperSrc}
                  alt=""
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className={styles.wallpaperImg}
                />
                <div className={styles.mediaOverlay} />

                <div className={styles.cardTop}>
                  <div className={styles.brandOnly}>{v.brand}</div>
                </div>

                <div className={styles.carWrap} aria-hidden="true">
                  <Image
                    src={carSrc}
                    alt={`${v.name} freigestellt`}
                    width={1200}
                    height={600}
                    className={styles.car}
                  />
                </div>
              </div>

              <div className={styles.cardBottom}>
                <div className={styles.specs}>
                  <div className={styles.spec}>
                    <div className={styles.specValue}>{v.specs.persons}</div>
                    <div className={styles.specLabel}>PERSONEN</div>
                  </div>

                  <div className={styles.spec}>
                    <div className={styles.specValue}>
                      {v.specs.lengthMeters}m
                    </div>
                    <div className={styles.specLabel}>LÄNGE</div>
                  </div>

                  <div className={styles.spec}>
                    <div className={styles.specValue}>{v.specs.motor}</div>
                    <div className={styles.specLabel}>MOTOR</div>
                  </div>
                </div>

                <div className={styles.ctaRow}>
                  <span className={styles.cta}>Details ansehen</span>
                  <span className={styles.ctaArrow}>→</span>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}