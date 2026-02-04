// src/components/home/Unsere_Limousinen.tsx
"use client";

import styles from "./Unsere_Limousinen.module.css";

export default function Unsere_Limousinen() {
  return (
    <section className={styles.wrap} aria-label="Unsere Limousinen">
      <div className={styles.inner}>
        <div className={styles.kickerRow}>
          <span className={styles.kickerIndex}>/ 01</span>
          <span className={styles.kickerLine} aria-hidden="true" />
        </div>

        <h2 className={styles.title}>Unsere Limousinen</h2>
        <div className={styles.subTitle}>American Limousine Service GmbH</div>

        <p className={styles.text}>
          Europaweit dürfen laut Gesetz max. 8 Personen befördert werden. Genießen Sie eine Flasche
          Prosecco gratis und nehmen gerne zusätzlich eigene Getränke mit. Alle Fahrzeuge verfügen
          über einen Chauffeur sowie freie Kilometerbegrenzung.<br /> Für einen kleinen Aufpreis können Sie
          auch einen Blumenschmuck oder einen roten Teppich-Service dazubuchen.<br /> Des Weiteren sind wir
          von der IHK geprüft für innerstaatlichen und grenzüberschreitenden Verkehr.
        </p>
      </div>
    </section>
  );
}