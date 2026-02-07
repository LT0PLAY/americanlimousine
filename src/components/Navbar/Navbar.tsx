// src/components/Navbar/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import styles from "./Navbar.module.css";
import { __next_app__ } from "next/dist/build/templates/app-page";

type NavItem = { href: string; label: string; kind?: "servicesAnchor" | "homeAnchor" };

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const [hash, setHash] = useState<string>("");

  // ✅ Hash immer aktuell halten: bei Hashchange + bei Routechange
  useEffect(() => {
    const update = () => setHash(window.location.hash || "");
    update();

    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  useEffect(() => {
    // Route-Wechsel kann Hash indirekt ändern → nochmal syncen
    setHash(window.location.hash || "");
  }, [pathname]);

  const nav: NavItem[] = useMemo(
    () => [
      { href: "/", label: "HOME", kind: "homeAnchor" },
      { href: "/flotte", label: "FLOTTE" },
      { href: "/#services", label: "SERVICES", kind: "servicesAnchor" },
      { href: "/kontakt", label: "KONTAKT" },
      { href: "/gallery", label: "GALLERY" },
    ],
    []
  );

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/#services") return pathname === "/" && hash === "#services";
    if (href === "/") return pathname === "/" && hash !== "#services";
    return pathname?.startsWith(href);
  };

  const goHome = (e?: React.MouseEvent) => {
    // Wenn wir schon auf Home sind: Hash löschen + nach oben
    if (pathname === "/") {
      e?.preventDefault();
      window.history.replaceState(null, "", "/");
      setHash("");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
      return;
    }

    // Wenn nicht auf Home: normale Navigation (Hash sicher leer)
    router.push("/");
    setOpen(false);
  };

  const goToServices = (e?: React.MouseEvent) => {
    if (pathname === "/") {
      e?.preventDefault();
      const el = document.getElementById("services");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });

      window.history.replaceState(null, "", "/#services");
      setHash("#services");
      setOpen(false);
      return;
    }

    router.push("/#services");
    setOpen(false);
  };

  const goToFahrzeuge = (e?: React.MouseEvent) => {
    if (pathname === "/") {
      e?.preventDefault();
      const el = document.getElementById("fahrzeuge");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });

      window.history.replaceState(null, "", "/#fahrzeuge");
      setHash("#fahrzeuge");
      setOpen(false);
      return;
    }

    router.push("/#fahrzeuge");
    setOpen(false);
  };

  return (
    <header className={styles.navbar} role="banner">
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="American Limousine Service" onClick={goHome}>
          <div className={styles.brandTop}>AMERICAN</div>
          <div className={styles.brandBottom}>
            LIMOUSINE <span>SERVICE</span>
          </div>
        </Link>

        <nav className={styles.nav} aria-label="Hauptnavigation">
          {nav.map((item) => {
            if (item.kind === "servicesAnchor") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={goToServices}
                  className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}
                >
                  {item.label}
                </Link>
              );
            }

            if (item.kind === "homeAnchor") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={goHome}
                  className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <a className={styles.phone} href="tel:+49897256252" aria-label="Telefon">
            <span className={styles.phoneIcon} aria-hidden="true">
              ☎
            </span>
            <span className={styles.phoneText}>+49 89 7256252</span>
          </a>

          <Link href="/#fahrzeuge" className={styles.cta} onClick={goToFahrzeuge} aria-label="Jetzt anfragen">
            ANFRAGE
          </Link>

          <button
            type="button"
            className={styles.burger}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.burgerBar} />
            <span className={styles.burgerBar} />
            <span className={styles.burgerBar} />
          </button>
        </div>
      </div>

      <div className={`${styles.drawerOverlay} ${open ? styles.drawerOverlayOpen : ""}`} />

      <aside className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`} aria-hidden={!open}>
        <div className={styles.drawerHead}>
          <div className={styles.drawerTitle}>MENÜ</div>
          <button type="button" className={styles.drawerClose} aria-label="Menü schließen" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        <div className={styles.drawerLinks}>
          {nav.map((item) => {
            if (item.kind === "servicesAnchor") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={goToServices}
                  className={`${styles.drawerLink} ${isActive(item.href) ? styles.drawerActive : ""}`}
                >
                  {item.label}
                </Link>
              );
            }

            if (item.kind === "homeAnchor") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={goHome}
                  className={`${styles.drawerLink} ${isActive(item.href) ? styles.drawerActive : ""}`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.drawerLink} ${isActive(item.href) ? styles.drawerActive : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className={styles.drawerFooter}>
          <a className={styles.drawerPhone} href="tel:+49897256252">
            +49 89 7256252
          </a>
          <Link href="/#fahrzeuge" className={styles.drawerCta} onClick={goToFahrzeuge} aria-label="Jetzt anfragen">
            ANFRAGE
          </Link>
        </div>
      </aside>
    </header>
  );
}