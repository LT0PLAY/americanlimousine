// src/components/VehicleInfo/VehicleInfoLayout.tsx
import Image from "next/image";
import Link from "next/link";
import type { Vehicle } from "@/content/vehicles";
import styles from "@/app/vehicles/VehicleInfoPage.module.css";

function pickSrc(src: unknown, fallback: string) {
  if (typeof src === "string") {
    const s = src.trim();
    if (s.length > 0) return s;
  }
  return fallback;
}

function splitGallery(v: Vehicle) {
  const gallery = Array.isArray(v.gallery) ? v.gallery : [];
  const exterior = gallery.filter((g) => (g.label ?? "").toLowerCase().includes("außen"));
  const interior = gallery.filter((g) => (g.label ?? "").toLowerCase().includes("innen"));
  const details = gallery.filter((g) => !exterior.includes(g) && !interior.includes(g));
  return { gallery, exterior, interior, details };
}

export default function VehicleInfoLayout({
  vehicle,
  backHref = "/flotte/",
  showBackLink = true,
}: {
  vehicle: Vehicle;
  backHref?: string;
  showBackLink?: boolean;
}) {
  const v = vehicle;

  // ✅ Einheitliche Ordnerlogik:
  // - Wenn infoPage.basePath gesetzt -> nutze den
  // - sonst -> /images/vehicles/<slug>/info
  const basePath = v.infoPage?.basePath ?? `/images/vehicles/${v.slug}/info`;

  // ✅ Einheitliche Dateinamen für ALLE Autos (pro Auto anderer Ordner)
  const heroWallpaperDefault = `${basePath}/hero-wallpaper.webp`;
  const carMainDefault = `${basePath}/car-main.webp`;
  const exteriorPortraitDefault = `${basePath}/exterior-portrait.webp`;
  const interiorWallpaperDefault = `${basePath}/interior-wallpaper.webp`;

  const heroWallpaper = pickSrc(heroWallpaperDefault, pickSrc(v.images?.wallpaper, "/images/placeholder-wallpaper.webp"));

  const carSrc = pickSrc(carMainDefault, pickSrc(v.images?.car, "/images/placeholder-car.webp"));

  const { exterior, interior } = splitGallery(v);

  const interiorWallpaper = pickSrc(
    interiorWallpaperDefault,
    pickSrc(interior[0]?.src, "/images/placeholder-wallpaper.webp")
  );

  const exteriorPortrait = pickSrc(
    exteriorPortraitDefault,
    pickSrc(exterior[0]?.src, heroWallpaper)
  );

  const priceFrom = v.pricing?.fromPerHourEUR;
  const unitLabel = v.pricing?.unitLabel ?? "";
  const priceLabel = typeof priceFrom === "number" ? `ab ${priceFrom.toFixed(0)} € ${unitLabel}`.trim() : null;

  const features = Array.isArray(v.features) ? v.features : [];

  const seoText =
    (v.infoPage?.ctaText && typeof v.infoPage.ctaText === "string"
      ? v.infoPage.ctaText
      : v.seo?.text) ?? null;

  const videoUrl = v.infoPage?.videoUrl;
  const highlights = Array.isArray(v.infoPage?.highlights) ? v.infoPage!.highlights! : [];

  const highlightImg = (i: number) => `${basePath}/highlight-${i + 1}.webp`;

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroWallpaper} aria-hidden="true">
          <Image src={heroWallpaper} alt="" fill priority className={styles.heroWallpaperImg} />
        </div>
        <div className={styles.heroOverlay} />

        <div className={styles.heroInner}>
          <div className={styles.heroTopRow}>
            {showBackLink ? (
              <Link href={backHref} className={styles.back}>
                ← Zur Flotte
              </Link>
            ) : null}
          </div>

          <div className={styles.heroTitleBlock}>
            {/* ✅ Brand kleiner, Name groß (CI / Fokus) */}
            <div className={styles.heroBrand}>{v.brand}</div>
            <h1 className={styles.heroTitle}>{v.name}</h1>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className={styles.content}>
        {/* TOP GRID */}
        <section className={styles.gridTop} aria-label="Übersicht">
          {/* LEFT CARD */}
          <article className={styles.card} aria-label="Fahrzeugdaten">
            <div className={styles.cardHeader}>
              <div className={styles.cardKicker}>FAHRZEUG</div>
              {priceLabel ? <div className={styles.priceInline}>{priceLabel}</div> : null}
            </div>

            <div className={styles.mediaBox}>
              <Image
                src={carSrc}
                alt={`${v.name} – Fahrzeug`}
                width={1600}
                height={900}
                className={styles.mediaImg}
                priority
              />
            </div>

            <div className={styles.specRow} aria-label="Specs">
              <div className={styles.specItem}>
                <div className={styles.specValue}>{v.specs.persons}</div>
                <div className={styles.specLabel}>Personen</div>
              </div>
              <div className={styles.specItem}>
                <div className={styles.specValue}>{v.specs.lengthMeters}m</div>
                <div className={styles.specLabel}>Länge</div>
              </div>
              <div className={styles.specItem}>
                <div className={styles.specValue}>{v.specs.motor}</div>
                <div className={styles.specLabel}>Motor</div>
              </div>
            </div>

            {v.shortDescription ? <p className={styles.lead}>{v.shortDescription}</p> : null}
            {v.pricing?.note ? <p className={styles.note}>{v.pricing.note}</p> : null}
          </article>

          {/* MIDDLE CARD */}
          <article className={styles.card} aria-label="Ausstattung">
            <div className={styles.cardHeader}>
              <div className={styles.cardKicker}>AUSSTATTUNG</div>
            </div>

            <ul className={styles.featureList}>
              {features.map((f) => (
                <li key={f} className={styles.featureItem}>
                  <span className={styles.featureText}>{f}</span>
                  <span className={styles.featureArrow}>›</span>
                </li>
              ))}
            </ul>
          </article>

          {/* RIGHT CARD */}
          <article className={styles.card} aria-label="Einblick">
            <div className={styles.cardHeader}>
              <div className={styles.cardKicker}>EINBLICK</div>
            </div>

            <div className={styles.mediaBoxTall}>
              <Image
                src={exteriorPortrait}
                alt={`${v.name} – Einblick`}
                width={900}
                height={1125}
                className={styles.mediaImg}
              />
            </div>

            <div className={styles.captionTitle}>VIP Transfer</div>
            <div className={styles.captionText}>
              Diskret, komfortabel und zuverlässig – ideal für Business, Flughafen und besondere Anlässe.
            </div>
          </article>
        </section>

        {/* INTERIOR WALLPAPER */}
        <section className={styles.interiorSection} aria-label="Innenraum">
          <div className={styles.interiorWallpaper} aria-hidden="true">
            <Image src={interiorWallpaper} alt="" fill className={styles.interiorImg} />
          </div>
          <div className={styles.interiorOverlay} />

          <div className={styles.interiorCopy}>
            <div className={styles.blockKicker}>INTERIOR</div>
            <div className={styles.blockTitle}>Business-Class Komfort</div>
            <div className={styles.blockText}>
              Viel Platz, ruhige Atmosphäre und hochwertige Ausstattung – perfekt für Transfers mit Anspruch.
            </div>
          </div>
        </section>

        {/* SEO / CTA */}
        {seoText ? (
          <section className={styles.seoSection} aria-label="Infos">
            <div className={styles.blockKicker}>INFOS</div>
            <h2 className={styles.h2}>Experience your next journey</h2>
            <p className={styles.blockText}>{seoText}</p>
          </section>
        ) : null}

        {/* VIDEO */}
        {videoUrl ? (
          <section className={styles.videoSection} aria-label="Video">
            <div className={styles.blockKicker}>VIDEO</div>
            <h2 className={styles.h2}>Einblicke in Fahrt & Interieur</h2>

            <div className={styles.videoWrap}>
              <video className={styles.video} controls playsInline preload="metadata">
                <source src={videoUrl} />
              </video>
            </div>
          </section>
        ) : null}

        {/* 3 HIGHLIGHTS */}
        {highlights.length ? (
          <section className={styles.cards3} aria-label="Highlights">
            {highlights.slice(0, 3).map((h, i) => (
              <article key={`${h.title}-${i}`} className={styles.cardMini}>
                <div className={styles.cardMiniImg}>
                  <Image
                    src={pickSrc(h.image, highlightImg(i))}
                    alt={h.alt ?? `${v.name} – Highlight ${i + 1}`}
                    width={1200}
                    height={800}
                    className={styles.mediaImg}
                  />
                </div>
                <div className={styles.cardMiniTitle}>{h.title}</div>
                <div className={styles.cardMiniText}>{h.text}</div>
              </article>
            ))}
          </section>
        ) : null}
      </div>
    </main>
  );
}