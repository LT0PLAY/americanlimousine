// src/components/home/Services.tsx
"use client";

import styles from "./Services.module.css";
import { services } from "@/content/service";

export default function Services({
  bookingAnchorId = "fahrzeuge",
}: {
  bookingAnchorId?: string;
}) {
  const goToVehicleSelection = () => {
    const el = document.getElementById(bookingAnchorId);

    // Fallback: ganz nach oben
    if (!el) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Offset wegen Navbar (bei dir: paddingTop 74)
    const NAV_OFFSET = 74;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  };

  return (
    <section className={styles.wrap} aria-label="Services">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {services.map((s) => (
            <article key={s.id} className={styles.card}>
              <div className={styles.left}>
                <div className={styles.stats} aria-label="Service Werte">
                  {s.stats.slice(0, 2).map((st, i) => (
                    <div key={`${s.id}-st-${i}`} className={styles.stat}>
                      <div className={styles.statValue}>{st.value}</div>
                      <div className={styles.statLabel}>{st.label}</div>
                    </div>
                  ))}
                </div>

                <div className={styles.descBox}>
                  <p className={styles.desc}>{s.description}</p>
                </div>
              </div>

              <div className={styles.right} aria-label={`${s.title} Bild`}>
                <div className={styles.titleOverlay}>
                  <h3 className={styles.title}>{s.title}</h3>
                  {s.subtitle ? (
                    <div className={styles.subTitle}>{s.subtitle}</div>
                  ) : null}
                </div>

                {/* ✅ WebP doppelt: Web (16:9) / Mobile (1:1) */}
                <picture>
                  <source
                    media="(max-width: 900px)"
                    srcSet={(s as any).imageSrcMobile ?? s.imageSrc}
                    type="image/webp"
                  />
                  <img
                    src={s.imageSrc}
                    alt={s.imageAlt}
                    className={styles.image}
                    loading="lazy"
                    draggable={false}
                  />
                </picture>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <button type="button" className={styles.cta} onClick={goToVehicleSelection}>
            JETZT BUCHEN
          </button>
        </div>
      </div>
    </section>
  );
}