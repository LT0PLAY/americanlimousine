// src/emails/bookingAdminMail.ts

type AdminMailInput = {
  vehicleLabel: string;
  totalAllInEUR: number;
  baseFeeEUR: number;
  travelFeeEUR: number;

  dateISO?: string;
  timeFrom?: string;
  timeTo?: string;
  durationHours?: number;

  pickupLocationLabel?: string;
  pickupAddress?: string;
  dropoffAddress?: string;

  occasionLabel?: string;
  extrasLabels?: string[];

  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  message?: string;
};

function eur(n: number) {
  return new Intl.NumberFormat("de-DE").format(Math.round(n));
}

export function renderBookingAdminMail(input: AdminMailInput) {
  const {
    vehicleLabel,
    totalAllInEUR,
    baseFeeEUR,
    travelFeeEUR,
    dateISO,
    timeFrom,
    timeTo,
    durationHours,
    pickupLocationLabel,
    pickupAddress,
    dropoffAddress,
    occasionLabel,
    extrasLabels,
    customerName,
    customerEmail,
    customerPhone,
    message,
  } = input;

  const extrasText = extrasLabels?.length ? extrasLabels.join(", ") : "Keine";
  const safe = (v?: string) => (v && v.trim().length ? v.trim() : "—");

  const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Buchungsanfrage</title>
  </head>
  <body style="margin:0;padding:0;background:#070707;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#070707;">
      <tr>
        <td align="center" style="padding:28px 14px;">
          <table width="680" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;max-width:680px;border:1px solid rgba(255,255,255,0.10);background:rgba(255,255,255,0.03);border-radius:22px;overflow:hidden;">
            <!-- Header -->
            <tr>
              <td style="padding:26px 26px 10px 26px;">
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.35em;text-transform:uppercase;color:rgba(255,255,255,0.55);text-align:center;">
                  BUCHUNGSANFRAGE
                </div>
                <div style="margin-top:14px;text-align:center;">
                  <div style="font-family:Arial,Helvetica,sans-serif;font-weight:900;letter-spacing:0.18em;text-transform:uppercase;color:rgba(177,18,18,0.95);font-size:26px;line-height:1.15;">
                    Neue Anfrage
                  </div>
                  <div style="margin-top:8px;font-family:Arial,Helvetica,sans-serif;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.80);font-size:12px;line-height:1.35;">
                    ${vehicleLabel}
                  </div>
                </div>
              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="padding:0 26px;">
                <div style="height:1px;background:rgba(255,255,255,0.10);"></div>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:22px 26px 10px 26px;">
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td style="font-family:Arial,Helvetica,sans-serif;font-size:14px;letter-spacing:0.20em;text-transform:uppercase;color:rgba(255,255,255,0.88);padding:0 0 10px 0;">
                      Details
                    </td>
                  </tr>

                  <!-- Detail rows (card look) -->
                  ${row("Datum", safe(dateISO))}
                  ${row("Startzeit", safe(timeFrom))}
                  ${row("Endzeit", safe(timeTo))}
                  ${row("Mietdauer", durationHours ? `${durationHours}h` : "—")}
                  ${row("Abholort", safe(pickupLocationLabel))}
                  ${row("Abholadresse", safe(pickupAddress))}
                  ${row("Zieladresse", safe(dropoffAddress))}
                  ${row("Anlass", safe(occasionLabel))}
                  ${row("Extras", safe(extrasText))}
                </table>

                <div style="height:14px;"></div>

                <!-- Price card -->
                <div style="border:1px solid rgba(255,255,255,0.10);border-radius:18px;background:linear-gradient(to bottom, rgba(0,0,0,0.62), rgba(0,0,0,0.92));padding:18px;">
                  <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;letter-spacing:0.20em;text-transform:uppercase;color:rgba(255,255,255,0.88);">
                    Gesamtpreis
                  </div>
                  <div style="margin-top:8px;font-family:Arial,Helvetica,sans-serif;font-weight:900;font-size:46px;letter-spacing:0.02em;color:#fff;line-height:1;">
                    ${eur(totalAllInEUR)}<span style="font-size:18px;color:rgba(255,255,255,0.65);font-weight:800;">€</span>
                  </div>
                  <div style="margin-top:10px;height:1px;background:rgba(255,255,255,0.10);"></div>
                  <div style="margin-top:10px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:rgba(255,255,255,0.60);letter-spacing:0.08em;text-transform:uppercase;">
                    Grundpauschale: +${eur(baseFeeEUR)}€ &nbsp;&nbsp;|&nbsp;&nbsp; Anfahrt: +${eur(travelFeeEUR)}€
                  </div>
                </div>

                <div style="height:16px;"></div>

                <!-- Customer -->
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td style="font-family:Arial,Helvetica,sans-serif;font-size:14px;letter-spacing:0.20em;text-transform:uppercase;color:rgba(255,255,255,0.88);padding:0 0 10px 0;">
                      Kunde
                    </td>
                  </tr>
                  ${row("Name", safe(customerName))}
                  ${row("E-Mail", safe(customerEmail))}
                  ${row("Telefon", safe(customerPhone))}
                </table>

                <div style="height:14px;"></div>

                <!-- Message -->
                <div style="border:1px solid rgba(255,255,255,0.10);border-radius:16px;background:rgba(255,255,255,0.04);padding:14px;">
                  <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.78);font-weight:800;">
                    Nachricht
                  </div>
                  <div style="margin-top:8px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:rgba(255,255,255,0.88);white-space:pre-wrap;">
                    ${escapeHtml(message?.trim() || "—")}
                  </div>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:18px 26px 26px 26px;">
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:rgba(255,255,255,0.45);line-height:1.5;">
                  Diese E-Mail wurde automatisch über das Buchungsformular erstellt.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text =
`BUCHUNGSANFRAGE
Fahrzeug: ${vehicleLabel}

DETAILS
Datum: ${safe(dateISO)}
Startzeit: ${safe(timeFrom)}
Endzeit: ${safe(timeTo)}
Mietdauer: ${durationHours ? `${durationHours}h` : "—"}

Abholort: ${safe(pickupLocationLabel)}
Abholadresse: ${safe(pickupAddress)}
Zieladresse: ${safe(dropoffAddress)}

Anlass: ${safe(occasionLabel)}
Extras: ${safe(extrasText)}

GESAMTPREIS: ${eur(totalAllInEUR)} €
Grundpauschale: +${eur(baseFeeEUR)} €
Anfahrt: +${eur(travelFeeEUR)} €

KUNDE
Name: ${safe(customerName)}
E-Mail: ${safe(customerEmail)}
Telefon: ${safe(customerPhone)}

NACHRICHT
${(message?.trim() || "—")}
`;

  return { html, text };
}

function row(label: string, value: string) {
  return `
  <tr>
    <td style="padding:8px 0;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border:1px solid rgba(255,255,255,0.10);border-radius:14px;background:rgba(255,255,255,0.06);">
        <tr>
          <td style="padding:12px 14px;">
            <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.60);font-weight:800;">
              ${escapeHtml(label)}
            </div>
            <div style="margin-top:6px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:rgba(255,255,255,0.92);line-height:1.4;">
              ${escapeHtml(value)}
            </div>
          </td>
        </tr>
      </table>
    </td>
  </tr>`;
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}