// src/app/api/booking/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { vehicles } from "@/content/vehicles";
import { bookingExtras } from "@/content/booking/extras";
import { bookingLocations } from "@/content/booking/locations";
import { bookingOccasions } from "@/content/booking/occasions";
import { calcBookingPrice } from "@/content/booking/pricing";
import type { BookingRequest } from "@/content/booking/types";

function money(n: number) {
  return `${Math.round(n)}€`;
}

function safeStr(v: unknown) {
  return typeof v === "string" ? v.trim() : "";
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function nl2br(s: string) {
  return escapeHtml(s).replaceAll("\n", "<br/>");
}

function labelForExtra(id: string) {
  const ex = bookingExtras.find((e) => e.id === id);
  return ex ? `${ex.label} (+${money(ex.priceEUR)})` : id;
}

function labelForLocation(id?: string) {
  if (!id || id === "none") return "";
  return bookingLocations.find((l) => l.id === id)?.label ?? id;
}

function labelForOccasion(id?: string) {
  if (!id || id === "none") return "";
  return bookingOccasions.find((o) => o.id === id)?.label ?? id;
}

/** ADMIN MAIL (optisch schön) */
function buildAdminHtmlDoc(args: {
  vehicleBrand: string;
  vehicleName: string;
  req: BookingRequest;
  price: { vehicleBaseEUR: number; extrasEUR: number; totalEUR: number; selectedTierHours?: number };
}) {
  const { vehicleBrand, vehicleName, req, price } = args;

  const extrasList =
    (req.extraIds ?? []).length > 0
      ? (req.extraIds ?? []).map((id) => `<li>${escapeHtml(labelForExtra(id))}</li>`).join("")
      : "<li>Keine Extras</li>";

  const pickupLocation = labelForLocation(req.pickupLocationId);
  const occasion = labelForOccasion(req.occasionId);

  const dateLine =
    req.dateISO || req.timeFrom || req.timeTo
      ? `${req.dateISO ?? ""} ${req.timeFrom ? `• von ${req.timeFrom}` : ""} ${
          req.timeTo ? `bis ${req.timeTo}` : ""
        }`.trim()
      : "";

  const contactLine = [
    req.customerName ? `Name: ${req.customerName}` : "",
    req.customerEmail ? `E-Mail: ${req.customerEmail}` : "",
    req.customerPhone ? `Telefon: ${req.customerPhone}` : "",
  ]
    .filter(Boolean)
    .join(" • ");

  const msg = safeStr(req.message);

  return `
  <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; background:#0b0b0b; color:#fff; padding:24px;">
    <div style="max-width:860px; margin:0 auto; border:1px solid rgba(255,255,255,.12); border-radius:18px; overflow:hidden; box-shadow:0 18px 60px rgba(0,0,0,.45);">
      <div style="padding:18px 20px; background:rgba(255,255,255,.03); border-bottom:1px solid rgba(255,255,255,.10);">
        <div style="font-size:11px; letter-spacing:.22em; color:rgba(255,255,255,.65);">NEUE BUCHUNGSANFRAGE</div>
        <div style="margin-top:10px; font-size:22px; font-weight:800; text-transform:uppercase;">
          ${escapeHtml(vehicleBrand)} <span style="color:#b11212;">${escapeHtml(vehicleName)}</span>
        </div>
      </div>

      <div style="padding:18px 20px;">
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:14px;">
          <div style="padding:14px; border:1px solid rgba(255,255,255,.10); border-radius:14px; background:rgba(0,0,0,.30);">
            <div style="font-size:11px; letter-spacing:.14em; color:rgba(255,255,255,.65); text-transform:uppercase;">Dauer</div>
            <div style="margin-top:8px; font-size:16px; font-weight:700;">
              ${escapeHtml(String(req.durationHours))} Std. ${
    price.selectedTierHours ? `(Tier: ${escapeHtml(String(price.selectedTierHours))} Std.)` : ""
  }
            </div>
          </div>

          <div style="padding:14px; border:1px solid rgba(255,255,255,.10); border-radius:14px; background:rgba(0,0,0,.30);">
            <div style="font-size:11px; letter-spacing:.14em; color:rgba(255,255,255,.65); text-transform:uppercase;">Anlass</div>
            <div style="margin-top:8px; font-size:16px; font-weight:700;">
              ${escapeHtml(occasion || "—")}
            </div>
          </div>

          <div style="padding:14px; border:1px solid rgba(255,255,255,.10); border-radius:14px; background:rgba(0,0,0,.30);">
            <div style="font-size:11px; letter-spacing:.14em; color:rgba(255,255,255,.65); text-transform:uppercase;">Ort / Abholung</div>
            <div style="margin-top:8px; font-size:14px; color:rgba(255,255,255,.9);">
              ${escapeHtml(pickupLocation || "—")}${req.pickupAddress ? `<br/>${nl2br(req.pickupAddress)}` : ""}
            </div>
          </div>

          <div style="padding:14px; border:1px solid rgba(255,255,255,.10); border-radius:14px; background:rgba(0,0,0,.30);">
            <div style="font-size:11px; letter-spacing:.14em; color:rgba(255,255,255,.65); text-transform:uppercase;">Ziel</div>
            <div style="margin-top:8px; font-size:14px; color:rgba(255,255,255,.9);">
              ${req.dropoffAddress ? nl2br(req.dropoffAddress) : "—"}
            </div>
          </div>
        </div>

        <div style="margin-top:14px; padding:14px; border:1px solid rgba(255,255,255,.10); border-radius:14px; background:rgba(0,0,0,.30);">
          <div style="font-size:11px; letter-spacing:.14em; color:rgba(255,255,255,.65); text-transform:uppercase;">Datum / Zeit</div>
          <div style="margin-top:8px; font-size:14px; color:rgba(255,255,255,.9);">
            ${escapeHtml(dateLine || "—")}
          </div>
        </div>

        <div style="margin-top:14px; padding:14px; border:1px solid rgba(255,255,255,.10); border-radius:14px; background:rgba(0,0,0,.30);">
          <div style="font-size:11px; letter-spacing:.14em; color:rgba(255,255,255,.65); text-transform:uppercase;">Extras</div>
          <ul style="margin:10px 0 0; padding-left:18px; color:rgba(255,255,255,.9);">
            ${extrasList}
          </ul>
        </div>

        <div style="margin-top:14px; display:grid; grid-template-columns: 1fr 1fr; gap:14px;">
          <div style="padding:14px; border:1px solid rgba(255,255,255,.10); border-radius:14px; background:rgba(0,0,0,.30);">
            <div style="font-size:11px; letter-spacing:.14em; color:rgba(255,255,255,.65); text-transform:uppercase;">Kontakt</div>
            <div style="margin-top:8px; font-size:13px; color:rgba(255,255,255,.9);">
              ${escapeHtml(contactLine || "—")}
            </div>
          </div>

          <div style="padding:14px; border:1px solid rgba(255,255,255,.10); border-radius:14px; background:rgba(0,0,0,.30);">
            <div style="font-size:11px; letter-spacing:.14em; color:rgba(255,255,255,.65); text-transform:uppercase;">Preis</div>
            <div style="margin-top:10px; display:flex; justify-content:space-between; color:rgba(255,255,255,.85);">
              <span>Fahrzeug</span><span>${escapeHtml(money(price.vehicleBaseEUR))}</span>
            </div>
            <div style="margin-top:6px; display:flex; justify-content:space-between; color:rgba(255,255,255,.85);">
              <span>Extras</span><span>${escapeHtml(money(price.extrasEUR))}</span>
            </div>
            <div style="margin-top:10px; padding-top:10px; border-top:1px solid rgba(255,255,255,.08); display:flex; justify-content:space-between; font-size:18px; font-weight:900;">
              <span>Gesamt</span><span>${escapeHtml(money(price.totalEUR))}</span>
            </div>
          </div>
        </div>

        ${
          msg
            ? `<div style="margin-top:14px; padding:14px; border:1px solid rgba(255,255,255,.10); border-radius:14px; background:rgba(0,0,0,.30);">
                <div style="font-size:11px; letter-spacing:.14em; color:rgba(255,255,255,.65); text-transform:uppercase;">Nachricht</div>
                <div style="margin-top:8px; font-size:13px; color:rgba(255,255,255,.9); white-space:pre-wrap;">${nl2br(msg)}</div>
              </div>`
            : ""
        }

        <div style="margin-top:16px; font-size:11px; color:rgba(255,255,255,.55);">
          Hinweis: Preis ist automatisch berechnet (serverseitig). Verfügbarkeit/Bestätigung erfolgt per Rückmeldung.
        </div>
      </div>
    </div>
  </div>`;
}

function buildAdminTextDoc(args: {
  vehicleBrand: string;
  vehicleName: string;
  req: BookingRequest;
  price: { vehicleBaseEUR: number; extrasEUR: number; totalEUR: number; selectedTierHours?: number };
}) {
  const { vehicleBrand, vehicleName, req, price } = args;

  const pickupLocation = labelForLocation(req.pickupLocationId);
  const occasion = labelForOccasion(req.occasionId);

  const extras =
    (req.extraIds ?? []).length > 0 ? (req.extraIds ?? []).map(labelForExtra).join(", ") : "Keine Extras";

  return [
    `NEUE BUCHUNGSANFRAGE`,
    ``,
    `Fahrzeug: ${vehicleBrand} ${vehicleName}`,
    `Slug: ${req.vehicleSlug}`,
    ``,
    `Dauer: ${req.durationHours} Std.${price.selectedTierHours ? ` (Tier: ${price.selectedTierHours} Std.)` : ""}`,
    `Anlass: ${occasion || "-"}`,
    ``,
    `Ort (Dropdown): ${pickupLocation || "-"}`,
    `Abholadresse: ${req.pickupAddress || "-"}`,
    `Zieladresse: ${req.dropoffAddress || "-"}`,
    ``,
    `Datum: ${req.dateISO || "-"}`,
    `Zeit: ${req.timeFrom || "-"} bis ${req.timeTo || "-"}`,
    ``,
    `Extras: ${extras}`,
    ``,
    `Kontakt:`,
    `Name: ${req.customerName || "-"}`,
    `E-Mail: ${req.customerEmail || "-"}`,
    `Telefon: ${req.customerPhone || "-"}`,
    ``,
    `Nachricht:`,
    `${req.message || "-"}`,
    ``,
    `Preis:`,
    `Fahrzeug: ${money(price.vehicleBaseEUR)}`,
    `Extras: ${money(price.extrasEUR)}`,
    `Gesamt: ${money(price.totalEUR)}`,
  ].join("\n");
}

/** KUNDENBESTÄTIGUNG (schön, aber kürzer) */
function buildCustomerHtmlDoc(args: {
  brand: string;
  name: string;
  req: BookingRequest;
  priceTotalEUR: number;
}) {
  const { brand, name, req, priceTotalEUR } = args;

  const greetingName = safeStr(req.customerName) || "Hallo";
  const dateLine =
    req.dateISO || req.timeFrom || req.timeTo
      ? `${req.dateISO ?? ""} ${req.timeFrom ? `• ${req.timeFrom}` : ""} ${req.timeTo ? `– ${req.timeTo}` : ""}`.trim()
      : "";

  return `
  <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; background:#0b0b0b; color:#fff; padding:24px;">
    <div style="max-width:720px; margin:0 auto; border:1px solid rgba(255,255,255,.12); border-radius:18px; overflow:hidden; box-shadow:0 18px 60px rgba(0,0,0,.45);">
      <div style="padding:18px 20px; background:rgba(255,255,255,.03); border-bottom:1px solid rgba(255,255,255,.10);">
        <div style="font-size:11px; letter-spacing:.22em; color:rgba(255,255,255,.65); text-transform:uppercase;">
          ANFRAGE EINGEGANGEN
        </div>
        <div style="margin-top:10px; font-size:22px; font-weight:800; text-transform:uppercase;">
          ${escapeHtml(brand)} <span style="color:#b11212;">${escapeHtml(name)}</span>
        </div>
      </div>

      <div style="padding:18px 20px;">
        <div style="font-size:14px; color:rgba(255,255,255,.88); line-height:1.6;">
          ${escapeHtml(greetingName)},<br/>
          wir haben deine <strong>unverbindliche Anfrage</strong> erhalten und melden uns schnellstmöglich bei dir.
        </div>

        <div style="margin-top:14px; padding:14px; border:1px solid rgba(255,255,255,.10); border-radius:14px; background:rgba(0,0,0,.30);">
          <div style="font-size:11px; letter-spacing:.14em; color:rgba(255,255,255,.65); text-transform:uppercase;">Kurzüberblick</div>
          <div style="margin-top:10px; font-size:14px; color:rgba(255,255,255,.92); line-height:1.6;">
            Datum/Zeit: ${escapeHtml(dateLine || "—")}<br/>
            Dauer: ${escapeHtml(String(req.durationHours || "—"))} Std.<br/>
            Abholadresse: ${req.pickupAddress ? nl2br(req.pickupAddress) : "—"}<br/>
            Zieladresse: ${req.dropoffAddress ? nl2br(req.dropoffAddress) : "—"}<br/>
            Preis (automatisch): <strong>${escapeHtml(money(priceTotalEUR))}</strong>
          </div>
        </div>

        <div style="margin-top:14px; font-size:12px; color:rgba(255,255,255,.55); line-height:1.6;">
          Hinweis: Diese Anfrage ist noch keine verbindliche Buchung. Verfügbarkeit und Details bestätigen wir dir per E-Mail/Telefon.
        </div>
      </div>
    </div>
  </div>`;
}

function buildCustomerTextDoc(args: { brand: string; name: string; req: BookingRequest; priceTotalEUR: number }) {
  const { brand, name, req, priceTotalEUR } = args;
  return [
    `ANFRAGE EINGEGANGEN`,
    ``,
    `Fahrzeug: ${brand} ${name}`,
    `Datum: ${req.dateISO || "-"}`,
    `Zeit: ${req.timeFrom || "-"} bis ${req.timeTo || "-"}`,
    `Dauer: ${req.durationHours || "-"} Std.`,
    `Abholadresse: ${req.pickupAddress || "-"}`,
    `Zieladresse: ${req.dropoffAddress || "-"}`,
    `Preis (automatisch): ${money(priceTotalEUR)}`,
    ``,
    `Hinweis: Unverbindliche Anfrage – wir melden uns schnellstmöglich.`,
  ].join("\n");
}

export async function POST(req: Request) {
  const to = process.env.BOOKING_TO_EMAIL;
  const from = process.env.BOOKING_FROM_EMAIL;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const secure = String(process.env.SMTP_SECURE || "false") === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!to || !from || !host || !user || !pass) {
    return NextResponse.json({ ok: false, error: "Missing email env config" }, { status: 500 });
  }

  const body = await req.json().catch(() => null);
  if (!body?.request) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const request = body.request as BookingRequest;

  // Minimal validation
  if (!request.vehicleSlug || !request.durationHours) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const vehicle = vehicles.find((v) => v.slug === request.vehicleSlug);
  if (!vehicle) {
    return NextResponse.json({ ok: false, error: "Vehicle not found" }, { status: 404 });
  }

  // ✅ Preis serverseitig berechnen (nicht Client vertrauen)
  const price = calcBookingPrice(vehicle, {
    durationHours: request.durationHours,
    extraIds: request.extraIds ?? [],
  });

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  // --- 1) Admin-Mail ---
  const subject = `Buchungsanfrage: ${vehicle.brand} – ${vehicle.name} (${request.durationHours} Std.)`;

  const adminHtml = buildAdminHtmlDoc({
    vehicleBrand: vehicle.brand,
    vehicleName: vehicle.name,
    req: request,
    price,
  });

  const adminText = buildAdminTextDoc({
    vehicleBrand: vehicle.brand,
    vehicleName: vehicle.name,
    req: request,
    price,
  });

  await transporter.sendMail({
    from,
    to,
    subject,
    text: adminText,
    html: adminHtml,

    // ✅ Mitarbeiter kann direkt auf Kunde antworten
    replyTo: request.customerEmail || undefined,

    attachments: [
      {
        filename: `booking-${vehicle.slug}.json`,
        content: JSON.stringify(
          { request, price, vehicle: { slug: vehicle.slug, brand: vehicle.brand, name: vehicle.name } },
          null,
          2
        ),
        contentType: "application/json",
      },
    ],
  });

  // --- 2) Kunden-Bestätigung ---
  const customerEmail = safeStr(request.customerEmail);
  if (customerEmail) {
    const customerSubject = `Wir haben deine Anfrage erhalten – ${vehicle.brand} ${vehicle.name}`;

    const customerHtml = buildCustomerHtmlDoc({
      brand: vehicle.brand,
      name: vehicle.name,
      req: request,
      priceTotalEUR: price.totalEUR,
    });

    const customerText = buildCustomerTextDoc({
      brand: vehicle.brand,
      name: vehicle.name,
      req: request,
      priceTotalEUR: price.totalEUR,
    });

    await transporter.sendMail({
      from,
      to: customerEmail,
      subject: customerSubject,
      text: customerText,
      html: customerHtml,
    });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}