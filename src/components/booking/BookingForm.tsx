// src/components/booking/BookingForm.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import type { Vehicle } from "@/content/vehicles/types";
import {
  bookingDurations,
  type BookingRequest,
  type PriceBreakdown,
} from "@/content/booking/types";
import { bookingLocations } from "@/content/booking/locations";
import { bookingOccasions } from "@/content/booking/occasions";
import { bookingExtras } from "@/content/booking/extras";
import { calcBookingPrice } from "@/content/booking/pricing";
import styles from "./BookingForm.module.css";

type Props = {
  vehicle: Vehicle | null;
  defaultDurationHours?: number;
};

function eur(n: number) {
  return new Intl.NumberFormat("de-DE").format(Math.round(n));
}

function buildTimeOptions(stepMinutes = 30) {
  const out: string[] = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += stepMinutes) {
      const hh = String(h).padStart(2, "0");
      const mm = String(m).padStart(2, "0");
      out.push(`${hh}:${mm}`);
    }
  }
  return out;
}

function toMinutes(t: string) {
  if (!t || !t.includes(":")) return null;
  const [hh, mm] = t.split(":").map((x) => Number(x));
  if (Number.isNaN(hh) || Number.isNaN(mm)) return null;
  return hh * 60 + mm;
}

function fromMinutes(total: number) {
  const m = ((total % (24 * 60)) + (24 * 60)) % (24 * 60);
  const hh = String(Math.floor(m / 60)).padStart(2, "0");
  const mm = String(m % 60).padStart(2, "0");
  return `${hh}:${mm}`;
}

function diffHours(from: string, to: string) {
  const a = toMinutes(from);
  const b = toMinutes(to);
  if (a == null || b == null) return null;

  let d = b - a;
  if (d <= 0) d += 24 * 60; // über Mitternacht
  return d / 60;
}

function roundToHalfHourHours(h: number) {
  return Math.round(h * 2) / 2;
}

// ✅ "Heute" als local ISO (kein UTC-Shift)
function todayISO_local() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

const TIME_OPTIONS = buildTimeOptions(30);

const TRAVEL_FEE_EUR = 60;

const EXTRAS_VISIBLE_COUNT = 4;

export default function BookingForm({ vehicle, defaultDurationHours = 2 }: Props) {
  const [durationHours, setDurationHours] = useState<number>(defaultDurationHours);
  const [pickupLocationId, setPickupLocationId] = useState<string>("munich");
  const [occasionId, setOccasionId] = useState<string>("none");
  const [extraIds, setExtraIds] = useState<string[]>([]);

  const [dateISO, setDateISO] = useState<string>("");
  const [timeFrom, setTimeFrom] = useState<string>("");
  const [timeTo, setTimeTo] = useState<string>("");

  // ✅ Endzeit-Modus
  const [useEndTime, setUseEndTime] = useState<boolean>(false);

  const [customerName, setCustomerName] = useState<string>("");
  const [customerEmail, setCustomerEmail] = useState<string>("");
  const [customerPhone, setCustomerPhone] = useState<string>("");

  const [pickupAddress, setPickupAddress] = useState<string>("");
  const [dropoffAddress, setDropoffAddress] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "ok" | "error">("idle");

  // ✅ Pflicht-Hinweis: erst nach erstem Klick anzeigen
  const [attemptedSubmit, setAttemptedSubmit] = useState<boolean>(false);

  // ✅ min Datum: immer ab heute
  const minDateISO = useMemo(() => todayISO_local(), []);

  // ✅ Bei Fahrzeugwechsel: alles resetten AUSSER Texte (Name/Mail/Telefon/Nachricht)
  useEffect(() => {
    setDurationHours(defaultDurationHours);
    setPickupLocationId("munich");
    setOccasionId("none");
    setExtraIds([]);

    setDateISO("");
    setTimeFrom("");
    setTimeTo("");
    setUseEndTime(false);

    setPickupAddress("");
    setDropoffAddress("");

    setSubmitState("idle");
    setAttemptedSubmit(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vehicle?.slug]);

  // ✅ Wenn Datum gesetzt ist und plötzlich < minDate (z.B. Tab offen über Mitternacht),
  // dann automatisch auf minDate zurücksetzen.
  useEffect(() => {
    if (!dateISO) return;
    if (dateISO < minDateISO) setDateISO(minDateISO);
  }, [dateISO, minDateISO]);

  // ✅ Wenn NICHT Endzeit-Modus: Endzeit automatisch aus Startzeit + Mietdauer berechnen/anzeigen
  const computedEndTime = useMemo(() => {
    const startM = toMinutes(timeFrom);
    if (startM == null) return "";
    const endM = startM + Math.round(durationHours * 60);
    return fromMinutes(endM);
  }, [timeFrom, durationHours]);

  useEffect(() => {
    if (useEndTime) return;
    if (!timeFrom) return;
    setTimeTo(computedEndTime);
  }, [useEndTime, timeFrom, computedEndTime]);

  // ✅ Endzeit-Modus: Dauer aus Start/Endzeit ableiten
  const derivedDurationHours = useMemo(() => {
    if (!useEndTime) return null;
    const d = diffHours(timeFrom, timeTo);
    if (d == null) return null;
    const rounded = roundToHalfHourHours(d);
    return Math.max(1, rounded);
  }, [useEndTime, timeFrom, timeTo]);

  const effectiveDurationHours = useMemo(() => {
    return useEndTime && derivedDurationHours != null ? derivedDurationHours : durationHours;
  }, [useEndTime, derivedDurationHours, durationHours]);

  const price: PriceBreakdown = useMemo(() => {
    if (!vehicle) return { vehicleBaseEUR: 0, extrasEUR: 0, totalEUR: 0 };
    return calcBookingPrice(vehicle, { durationHours: effectiveDurationHours, extraIds });
  }, [vehicle, effectiveDurationHours, extraIds]);

  // ✅ Gesamtpreis: alles inkl. (Anfahrt + Fahrzeug + Extras)
  const totalAllInEUR = useMemo(() => {
    return (price?.totalEUR ?? 0) + TRAVEL_FEE_EUR;
  }, [price]);

  const toggleExtra = (id: string) => {
    setExtraIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  // ✅ Pflichtfelder (Datum + Startzeit sind jetzt verpflichtend)
  const missingFields = useMemo(() => {
    const missing: string[] = [];
    if (!customerName.trim()) missing.push("Name & Vorname");
    if (!customerEmail.trim()) missing.push("E-Mail");
    if (!pickupAddress.trim()) missing.push("Abholadresse");
    if (!dropoffAddress.trim()) missing.push("Zieladresse");
    if (!dateISO) missing.push("Datum");
    if (!timeFrom) missing.push("Startzeit");
    if (useEndTime && !timeTo) missing.push("Endzeit");
    return missing;
  }, [customerName, customerEmail, pickupAddress, dropoffAddress, dateISO, timeFrom, useEndTime, timeTo]);

  const canSubmit =
    !!vehicle &&
    customerEmail.trim().length > 3 &&
    customerName.trim().length > 1 &&
    pickupAddress.trim().length > 3 &&
    dropoffAddress.trim().length > 3 &&
    !!dateISO &&
    !!timeFrom &&
    (!useEndTime || !!timeTo) &&
    effectiveDurationHours > 0;

  const handleSubmit = async () => {
    setAttemptedSubmit(true);

    if (!vehicle) return;

    // ✅ Blocken, wenn Pflichtfelder fehlen
    if (!canSubmit) return;

    setIsSubmitting(true);
    setSubmitState("idle");

    const payload: BookingRequest = {
      vehicleSlug: vehicle.slug,
      durationHours: effectiveDurationHours,
      pickupLocationId,
      pickupAddress: pickupAddress.trim() || undefined,
      dropoffAddress: dropoffAddress.trim() || undefined,
      occasionId: occasionId !== "none" ? occasionId : undefined,
      extraIds,
      dateISO: dateISO || undefined,
      timeFrom: timeFrom || undefined,
      timeTo: timeTo || undefined,
      customerName: customerName.trim() || undefined,
      customerEmail: customerEmail.trim() || undefined,
      customerPhone: customerPhone.trim() || undefined,
      message: message.trim() || undefined,
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...payload,
          price,
          travelFeeEUR: TRAVEL_FEE_EUR,
          totalAllInEUR,
          vehicleLabel: `${vehicle.brand} – ${vehicle.name}`,
          useEndTime,
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setSubmitState("ok");
    } catch {
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!vehicle) {
    return (
      <section className={`${styles.wrap} ${styles.emptyCenter}`} aria-label="Buchungsformular">
        <div className={styles.card}>
          <div className={styles.kicker}>BUCHUNGSANFRAGE</div>
          <h2 className={styles.title}>Fahrzeug auswählen</h2>
          <p className={styles.sub}>
            Bitte oben im Slider auf <strong>„Jetzt wählen“</strong> klicken, damit das Formular mit dem gewählten
            Fahrzeug geladen wird.
          </p>
        </div>
      </section>
    );
  }

  const extrasPrimary = bookingExtras.slice(0, EXTRAS_VISIBLE_COUNT);
  const extrasMore = bookingExtras.slice(EXTRAS_VISIBLE_COUNT);

  return (
    <section className={styles.wrap} aria-label="Buchungsformular">
      <div className={styles.card}>
        <div className={styles.kicker}>BUCHUNGSANFRAGE</div>

        {/* ✅ Titel: Brand rot, Rest klein weiß */}
        <div className={styles.headRow}>
          <div className={styles.vehicleTitleWrap}>
            <div className={styles.vehicleTitleBrand}>{vehicle.brand}</div>
            <div className={styles.vehicleTitleRest}>{vehicle.name}</div>
          </div>
        </div>

        {/* ===== 1) MIETDAUER ===== */}
        <div className={styles.block}>
          <div className={styles.blockTitle}>
            <span className={styles.iconCircle} aria-hidden="true">
              ⏱
            </span>
            <span>MIETDAUER</span>
          </div>

          <div className={styles.chips}>
            {bookingDurations.map((d) => {
              const active = d.hours === durationHours && !useEndTime;
              return (
                <button
                  key={d.hours}
                  type="button"
                  disabled={useEndTime}
                  className={[styles.chip, active ? styles.chipActive : "", useEndTime ? styles.chipDisabled : ""].join(
                    " "
                  )}
                  onClick={() => setDurationHours(d.hours)}
                >
                  {d.label}
                </button>
              );
            })}
          </div>

          <div className={styles.hintSmall}>
            Bei mehr als <strong>8 Stunden</strong> können die Preise variieren.
          </div>
        </div>

        {/* ===== 2) DATUM / UHRZEIT ===== */}
        <div className={styles.block}>
          <div className={styles.blockTitle}>
            <span className={styles.iconCircle} aria-hidden="true">
              ⏰
            </span>
            <span>DATUM / UHRZEIT</span>
          </div>

          <div className={styles.timeModeRow}>
            <label className={styles.timeModeLabel}>
              <input
                className={styles.timeModeCheck}
                type="checkbox"
                checked={useEndTime}
                onChange={(e) => setUseEndTime(e.target.checked)}
              />
              <span className={styles.timeModeText}>Endzeit wählen</span>
            </label>

            {useEndTime && derivedDurationHours != null ? (
              <div className={styles.timeModeHint}>
                Mietdauer: <strong>{derivedDurationHours}h</strong>
              </div>
            ) : (
              <div className={styles.timeModeHint}>Mietdauer → Endzeit</div>
            )}
          </div>

          <div className={styles.dateTimeGrid}>
            {/* ✅ Datum verpflichtend */}
            <div className={styles.dateWrap} data-placeholder="Datum *" data-hasvalue={dateISO ? "true" : "false"}>
              <input
                className={`${styles.input} ${styles.dateInput}`}
                value={dateISO}
                onChange={(e) => setDateISO(e.target.value)}
                type="date"
                min={minDateISO}
                aria-label="Datum"
                required
              />
            </div>

            {/* ✅ Startzeit verpflichtend */}
            <select className={styles.select} value={timeFrom} onChange={(e) => setTimeFrom(e.target.value)} required>
              <option value="">Startzeit *</option>
              {TIME_OPTIONS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            {useEndTime ? (
              <select className={styles.select} value={timeTo} onChange={(e) => setTimeTo(e.target.value)} required>
                <option value="">Endzeit *</option>
                {TIME_OPTIONS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            ) : (
              <select className={styles.select} value={timeTo} disabled aria-label="Endzeit (automatisch)">
                <option value="">{computedEndTime ? `Endzeit: ${computedEndTime}` : "Endzeit"}</option>
              </select>
            )}
          </div>
        </div>

        {/* ===== 3) ABHOLORT ===== */}
        <div className={styles.block}>
          <div className={styles.blockTitle}>
            <span className={styles.iconCircle} aria-hidden="true">
              📍
            </span>
            <span>ABHOLORT</span>
          </div>

          <select className={styles.select} value={pickupLocationId} onChange={(e) => setPickupLocationId(e.target.value)}>
            {bookingLocations.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>

          <div className={styles.twoCols}>
            <input
              className={styles.input}
              value={pickupAddress}
              onChange={(e) => setPickupAddress(e.target.value)}
              placeholder="Abholadresse *"
              type="text"
              autoComplete="street-address"
              required
            />
            <input
              className={styles.input}
              value={dropoffAddress}
              onChange={(e) => setDropoffAddress(e.target.value)}
              placeholder="Zieladresse *"
              type="text"
              autoComplete="street-address"
              required
            />
          </div>
        </div>

        {/* ===== ANLASS ===== */}
        <div className={styles.block}>
          <div className={styles.blockTitle}>
            <span className={styles.iconCircle} aria-hidden="true">
              🗓
            </span>
            <span>ANLASS</span>
          </div>

          <select className={styles.select} value={occasionId} onChange={(e) => setOccasionId(e.target.value)}>
            {bookingOccasions.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        {/* ===== EXTRAS ===== */}
        <div className={styles.block}>
          <div className={styles.blockTitle}>
            <span className={styles.iconCircle} aria-hidden="true">
              ＋
            </span>
            <span>EXTRAS HINZUFÜGEN</span>
          </div>

          <div className={styles.extras}>
            {extrasPrimary.map((x) => {
              const active = extraIds.includes(x.id);
              return (
                <button
                  key={x.id}
                  type="button"
                  className={`${styles.extraRow} ${active ? styles.extraRowActive : ""}`}
                  onClick={() => toggleExtra(x.id)}
                >
                  <span className={styles.extraLeft}>
                    <span className={`${styles.check} ${active ? styles.checkOn : ""}`} aria-hidden="true" />
                    <span className={styles.extraTexts}>
                      <span className={styles.extraTitle}>{x.label}</span>
                      {x.description ? <span className={styles.extraDesc}>{x.description}</span> : null}
                    </span>
                  </span>

                  <span className={styles.extraPrice}>+{eur(x.priceEUR)}€</span>
                </button>
              );
            })}

            {extrasMore.length > 0 ? (
              <details className={styles.extrasMore}>
                <summary className={styles.extrasMoreSummary}>Weitere Extras anzeigen ({extrasMore.length})</summary>
                <div className={styles.extrasMoreInner}>
                  {extrasMore.map((x) => {
                    const active = extraIds.includes(x.id);
                    return (
                      <button
                        key={x.id}
                        type="button"
                        className={`${styles.extraRow} ${active ? styles.extraRowActive : ""}`}
                        onClick={() => toggleExtra(x.id)}
                      >
                        <span className={styles.extraLeft}>
                          <span className={`${styles.check} ${active ? styles.checkOn : ""}`} aria-hidden="true" />
                          <span className={styles.extraTexts}>
                            <span className={styles.extraTitle}>{x.label}</span>
                            {x.description ? <span className={styles.extraDesc}>{x.description}</span> : null}
                          </span>
                        </span>
                        <span className={styles.extraPrice}>+{eur(x.priceEUR)}€</span>
                      </button>
                    );
                  })}
                </div>
              </details>
            ) : null}
          </div>
        </div>

        {/* ===== GESAMTPREIS ===== */}
        <div className={styles.totalCard} aria-live="polite">
          <div className={styles.totalTop}>
            <div className={styles.totalLabel}>
              <span className={styles.totalIcon} aria-hidden="true">
                €
              </span>
              <span>GESAMTPREIS</span>
            </div>

            <div className={styles.totalNumber}>
              <span className={styles.totalValue}>{eur(totalAllInEUR)}</span>
              <span className={styles.totalEuro}>€</span>
            </div>
          </div>

          <div className={styles.totalFine}>
            Inklusive Chauffeur, Versicherung und Kraftstoff. Alle Preise verstehen sich inkl. MwSt.
          </div>

          <div className={styles.feeLines}>
            <div className={styles.feeLine}>
              <span className={styles.feeLabel}>Anfahrtspauschale</span>
              <span className={styles.feeValue}>+{eur(TRAVEL_FEE_EUR)}€</span>
            </div>

            <div className={styles.feeNote}>*Der Preis beinhaltet die An- und Abfahrtspauschale im Stadtgebiet München.*</div>
          </div>
        </div>

        {/* ===== KONTAKT + NACHRICHT ===== */}
        <div className={styles.block}>
          <div className={styles.blockTitle}>
            <span className={styles.iconCircle} aria-hidden="true">
              ✉
            </span>
            <span>KONTAKT</span>
          </div>

          <div className={styles.twoCols}>
            <input
              className={styles.input}
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Name & Vorname *"
              type="text"
              autoComplete="name"
              required
            />
            <input
              className={styles.input}
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              placeholder="E-Mail *"
              type="email"
              autoComplete="email"
              required
            />
          </div>

          <div className={styles.twoCols}>
            <input
              className={styles.input}
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              placeholder="Telefon (optional)"
              type="tel"
              autoComplete="tel"
            />
            <div />
          </div>

          <div className={styles.blockSubTitle}>Nachricht (optional)</div>
          <textarea
            className={styles.textarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Weitere Infos, Wünsche, Fragen etc."
            rows={5}
          />
        </div>

        {/* ===== CTA ===== */}
        <div className={styles.ctaRow}>
          <button type="button" className={styles.cta} onClick={handleSubmit} disabled={!canSubmit || isSubmitting}>
            {isSubmitting ? "Sende..." : "JETZT UNVERBINDLICH ANFRAGEN"}
          </button>

          {/* ✅ Hinweis nur nach erstem Klick */}
          {attemptedSubmit && !canSubmit && submitState !== "ok" ? (
            <div className={styles.err}>
              Bitte Pflichtfelder ausfüllen: <strong>{missingFields.join(", ")}</strong>
            </div>
          ) : null}

          {submitState === "ok" ? (
            <div className={styles.ok}>Anfrage wurde gesendet (API OK). E-Mail Versand kommt als nächster Schritt.</div>
          ) : null}
          {submitState === "error" ? (
            <div className={styles.err}>Senden fehlgeschlagen. Bitte später erneut versuchen.</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}