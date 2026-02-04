"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* LEFT */}
        <div className={styles.col}>
          <div className={styles.logo}>American Limousine Service GmbH</div>

          <address className={styles.address}>
            Josefstraße 23<br />
            82178 Puchheim<br />
            Deutschland
          </address>

          <div className={styles.contact}>
            <a href="tel:+4915229246231">Tel: +49 89 725 6252</a>
            <a href="mailto:info@americanlimousine.de">
              info@americanlimousine.de
            </a>
          </div>
        </div>

        {/* CENTER */}
        <div className={styles.col}>
          <div className={styles.colTitle}>Rechtliches</div>

          <nav className={styles.links}>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutzerklärung</Link>
            <Link href="/cookie-richtlinie-eu">Cookie-Richtlinie (EU)</Link>
          </nav>
        </div>

        {/* RIGHT */}
        <div className={styles.col}>
          <div className={styles.colTitle}>Social Media</div>

          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/americanlimousineservice/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/AmericanLimousinenService/?locale=de_DE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/49897256252"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
            aria-label="WhatsApp Chat starten"
          >
            <span className={styles.whatsappIcon}>🟢</span>
            WhatsApp Chat starten
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} American Limousine Service GmbH
      </div>
    </footer>
  );
}