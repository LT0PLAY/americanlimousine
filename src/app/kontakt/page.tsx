// src/app/kontakt/page.tsx
"use client";

import styles from "./Kontakt.module.css";

const GALLERY = [
  { src: "/images/kontakt/slider/01.webp", alt: "American Limousine – Service 1" },
  { src: "/images/kontakt/slider/02.webp", alt: "American Limousine – Service 2" },
  { src: "/images/kontakt/slider/03.webp", alt: "American Limousine – Service 3" },
  { src: "/images/kontakt/slider/04.webp", alt: "American Limousine – Service 4" },
];

// ✅ Normale E-Mail (oben)
const INFO_MAILTO = "mailto:info@americanlimousine.de";

// ✅ Booking E-Mail (mit Formular)
const BOOKING_EMAIL_TO = "info@americanlimousine.de";
const BOOKING_EMAIL_SUBJECT = "Anfrage / Reservierung – American Limousine Service";

const BOOKING_EMAIL_BODY = [
  "Bitte diese E-Mail vollständig ausfüllen (je mehr Details, desto schneller das Angebot).",
  "",
  "ANLASS:",
  "DATUM:",
  "UHRZEIT (Start/Ende):",
  "ABHOLORT:",
  "ZIEL:",
  "PERSONENANZAHL:",
  "KONTAKTDATEN (Name, Telefon):",
  "",
  "WUNSCHFAHRZEUG (bitte auswählen):",
  "☐ LINCOLN TownCar (White, 6 Pax)",
  "☐ LINCOLN TownCar (Black, 8 Pax)",
  "☐ LINCOLN TownCar (Pink, 8 Pax)",
  "☐ LINCOLN TownCar (Golden, 8 Pax)",
  "☐ LINCOLN TownCar (White, 8 Pax)",
  "☐ HUMMER H2 (Black)",
  "☐ HUMMER H2 (White)",
  "☐ HUMMER H3 (White)",
  "☐ GMC YUKON",
  "☐ V-Class (Business)",
  "",
  "EXTRAS (optional):",
  "☐ Autodekoration",
  "☐ Extra Champagner / Getränke",
  "☐ Roter Teppich",
  "☐ Just Married Flaggen",
  "☐ Stripper",
  "☐ Stripperin",
  "☐ Rückfahrt",
  "☐ FotografenService",
  "",
  "HINWEISE / WÜNSCHE:",
  "",
].join("\n");

const BOOKING_MAILTO = `mailto:${BOOKING_EMAIL_TO}?subject=${encodeURIComponent(
  BOOKING_EMAIL_SUBJECT
)}&body=${encodeURIComponent(BOOKING_EMAIL_BODY)}`;

export default function KontaktPage() {
  return (
    <main className={styles.page} aria-label="Kontakt">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.kicker}>KONTAKT</div>
          <h1 className={styles.h1}>Schnell & direkt</h1>
          <p className={styles.lead}>
            E-Mail, Anruf, WhatsApp oder Standort – wir melden uns zeitnah zurück.
          </p>
        </header>

        {/* TOP 3 CARDS */}
        <section className={styles.topGrid} aria-label="Kontakt-Optionen">
          <Card
            kicker="Telefon"
            title="+49 89 7256252"
            actionLabel="CALL US"
            href="tel:+49897256252"
            icon="☎"
          />
          <Card
            kicker="E-Mail"
            title="info@americanlimousine.de"
            actionLabel="EMAIL US"
            href={INFO_MAILTO}
            icon="✉"
          />
          <Card
            kicker="WhatsApp"
            title="Sofort schreiben"
            actionLabel="WHATSAPP"
            href="https://wa.me/49897256252"
            icon="💬"
          />
        </section>

        {/* MID GRID: BOOKING + LOCATION */}
        <section className={styles.midGrid} aria-label="Booking & Location">
          <div className={styles.cardBig}>
            <div className={styles.cardKicker}>BOOKING</div>
            <div className={styles.cardTitle}>Anfrage / Reservierung</div>
            <p className={styles.cardText}>
              Schreibe uns kurz Anlass, Datum, Uhrzeit, Start/Ende, Personen und
              Wunschfahrzeug – wir melden uns schnell zurück.
            </p>

            <div className={styles.bigButtons}>
              <a className={styles.bigBtn} href={BOOKING_MAILTO}>
                <span className={styles.bigBtnIcon}>✉</span>
                BOOKING PER E-MAIL
                <span className={styles.bigBtnArrow}>↗</span>
              </a>

              <a className={styles.bigBtn} href="tel:+49897256252">
                <span className={styles.bigBtnIcon}>☎</span>
                BOOKING PER TELEFON
                <span className={styles.bigBtnArrow}>↗</span>
              </a>
            </div>
          </div>

          <div className={styles.cardSmall}>
            <div className={styles.cardKicker}>LOCATION</div>
            <div className={styles.cardTitle}>München</div>

            <a
              className={styles.bigBtn}
              href="https://www.google.com/maps/search/?api=1&query=American+Limousine+Service+GmbH,+Josefstraße+23,+82178+Puchheim"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.bigBtnIcon}>⌖</span>
              OPEN MAPS
              <span className={styles.bigBtnArrow}>↗</span>
            </a>
          </div>
        </section>

        {/* BOTTOM GRID: SOCIAL + SLIDER */}
        <section className={styles.bottomGrid} aria-label="Social & Galerie">
          <div className={styles.cardSocial}>
            <div className={styles.cardKicker}>SOCIAL</div>
            <div className={styles.cardTitle}>Folgen & schreiben</div>

            <a className={styles.socialRow} href="https://www.instagram.com/americanlimousineservice/" target="_blank" rel="noreferrer">
              <div className={styles.socialMain}>
                <div className={styles.socialLabel}>INSTAGRAM</div>
                <div className={styles.socialSub}>Folge uns</div>
              </div>
              <div className={styles.socialArrow}>↗</div>
            </a>

            <a className={styles.socialRow} href="https://www.facebook.com/AmericanLimousinenService/?locale=de_DE" target="_blank" rel="noreferrer">
              <div className={styles.socialMain}>
                <div className={styles.socialLabel}>FACEBOOK</div>
                <div className={styles.socialSub}>Schreib uns</div>
              </div>
              <div className={styles.socialArrow}>↗</div>
            </a>
          </div>

          <div className={styles.cardSlider}>
            <div className={styles.cardKicker}>GALERIE</div>
            <div className={styles.cardTitle}>Einblicke</div>
            <p className={styles.cardText}>
              Von Hochzeiten bis Business-Transfers: Wir bringen euch stilvoll ans
              Ziel – zuverlässig, diskret und mit Chauffeur.
            </p>

            <div className={styles.slider} aria-label="Foto-Slider">
              <div className={styles.track}>
                {GALLERY.concat(GALLERY).map((img, i) => (
                  <div className={styles.slide} key={`${img.src}-${i}`}>
                    <img
                      className={styles.slideImg}
                      src={img.src}
                      alt={img.alt}
                      loading={i < 2 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Card({
  kicker,
  title,
  actionLabel,
  href,
  icon,
}: {
  kicker: string;
  title: string;
  actionLabel: string;
  href: string;
  icon: string;
}) {
  return (
    <article className={styles.cardTop}>
      <div className={styles.cardKicker}>{kicker}</div>
      <div className={styles.cardTopTitle}>{title}</div>

      <a
        className={styles.topBtn}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
      >
        <span className={styles.topBtnIcon}>{icon}</span>
        {actionLabel}
        <span className={styles.topBtnArrow}>↗</span>
      </a>
    </article>
  );
}