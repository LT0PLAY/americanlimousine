"use client";

import Image from "next/image";
import styles from "./GalleryHeader.module.css";
import { useMemo, useState } from "react";

type Slide = { src: string; alt: string };

export default function GalleryHeader() {
  const slides = useMemo<Slide[]>(
    () => [
      { src: "/images/gallery/slider-1.webp", alt: "Gallery Slide 1" },
      { src: "/images/gallery/slider-2.webp", alt: "Gallery Slide 2" },
      { src: "/images/gallery/slider-3.webp", alt: "Gallery Slide 3" },
      { src: "/images/gallery/slider-4.webp", alt: "Gallery Slide 4" },
    ],
    []
  );

  const rightTop = { src: "/images/gallery/right-1.webp", alt: "Gallery Right 1" };
  const rightBottom = { src: "/images/gallery/right-2.webp", alt: "Gallery Right 2" };

  const avatar = { src: "/images/partners/munichmotions-avatar.webp", alt: "MunichMotions" };

  const [i, setI] = useState(0);
  const current = slides[i];

  const prev = () => setI((v) => (v === 0 ? slides.length - 1 : v - 1));
  const next = () => setI((v) => (v === slides.length - 1 ? 0 : v + 1));

  return (
    <header className={styles.hero} aria-label="Gallery Header">
      <div className={styles.heroInner}>
        <div className={styles.heroKicker}>GALLERY</div>
        <h1 className={styles.heroTitle}>American Limousine Service</h1>

        {/* ===== Top Layout: links Slider / rechts 2 Bilder ===== */}
        <div className={styles.topGrid}>
          {/* LEFT: Slider */}
          <div className={styles.sliderCard} aria-label="Slider">
            <div className={styles.sliderMedia}>
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                priority
                className={styles.mediaImg}
                sizes="(max-width: 900px) 100vw, 60vw"
              />
              <div className={styles.sliderOverlay} aria-hidden="true" />

              <button type="button" className={`${styles.navBtn} ${styles.navLeft}`} onClick={prev} aria-label="Vorheriges Bild">
                ‹
              </button>
              <button type="button" className={`${styles.navBtn} ${styles.navRight}`} onClick={next} aria-label="Nächstes Bild">
                ›
              </button>
            </div>

            <div className={styles.dots} aria-label="Slider Punkte">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`${styles.dot} ${idx === i ? styles.dotActive : ""}`}
                  onClick={() => setI(idx)}
                  aria-label={`Bild ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: 2 Bilder */}
          <div className={styles.rightCol} aria-label="Bilder rechts">
            <div className={styles.rightCard}>
              <div className={styles.rightMedia}>
                <Image src={rightTop.src} alt={rightTop.alt} fill className={styles.mediaImg} sizes="(max-width: 900px) 100vw, 40vw" />
                <div className={styles.rightOverlay} aria-hidden="true" />
              </div>
            </div>

            <div className={styles.rightCard}>
              <div className={styles.rightMedia}>
                <Image
                  src={rightBottom.src}
                  alt={rightBottom.alt}
                  fill
                  className={styles.mediaImg}
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
                <div className={styles.rightOverlay} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        {/* ===== Bottom: About + Buttons ===== */}
        <div className={styles.bottomRow}>
          <div className={styles.aboutCard} aria-label="About MunichMotions">
            <div className={styles.avatar}>
              <Image src={avatar.src} alt={avatar.alt} fill className={styles.avatarImg} sizes="64px" />
            </div>

            <div className={styles.aboutCopy}>
              <div className={styles.aboutKicker}>Partner – Videoproduktion</div>
              <div className={styles.aboutTitle}>MUNICHMOTIONS</div>
              <p className={styles.aboutText}>
                Cinematic Videoproduktion, Social Content & Brand Storytelling. <br /> Premium Visuals für American Limousine Service und für ausgewählte Marken, <br /> die mehr als nur Sichtbarkeit wollen. <br /> 👉 Interesse an einer Zusammenarbeit? Lass uns über deine Vision sprechen.
              </p>
            </div>
          </div>

          <div className={styles.linksCard} aria-label="Links">
            <a className={styles.linkBtn} href="https://www.munichmotions.com/" target="_blank" rel="noreferrer">
              Website
            </a>
            <a className={styles.linkBtn} href="https://www.instagram.com/munichmotions" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className={styles.linkBtn} href="https://www.linkedin.com/in/andreas-wallner-16a752193" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        {/* American Limousine IG Link */}
        <a className={styles.igLink} href="https://www.instagram.com/americanlimousineservice/" target="_blank" rel="noreferrer">
          Instagram öffnen →
        </a>
      </div>
    </header>
  );
}