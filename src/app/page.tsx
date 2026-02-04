// src/app/page.tsx
"use client";

import { useState } from "react";
import HomeHeroSlider from "@/components/HomeHeroSlider/HomeHeroSlider";
import BookingForm from "@/components/booking/BookingForm";
import BrandLogoMarquee from "@/components/home/BrandLogoMarquee";
import Unsere_Limousinen from "@/components/home/Unsere_Limousinen";
import Services from "@/components/home/Services";
import { vehicles, type Vehicle } from "@/content/vehicles";
import styles from "./page.module.css";
import Ueber_Uns from "@/components/home/UeberUns";
import HomeHeader from "@/components/home/HomeHeader";

export default function HomePage() {
  const [selected, setSelected] = useState<Vehicle | null>(null);

  return (
    <main className={styles.main}>
      {/* HERO HEADER */}
      <HomeHeader />

      {/* ✅ Anchor für "Fahrzeugauswahl" */}
      <div id="fahrzeuge">
        <HomeHeroSlider
          vehicles={vehicles}
          onSelect={(v) => setSelected(v)}
          bookingAnchorId="booking"
        />
      </div>

      <section id="booking" className={styles.bookingSection} aria-label="Buchung">
        <BookingForm vehicle={selected} defaultDurationHours={2} />
        <BrandLogoMarquee />
      </section>

      {/* SEO Text Block */}
      <Unsere_Limousinen />

      {/* ✅ WICHTIG: Anchor für Services */}
      <section id="services" aria-label="Services">
        <Services bookingAnchorId="fahrzeuge" />
      </section>

      {/* Über Uns – Text + Video */}
      <Ueber_Uns />
    </main>
  );
}