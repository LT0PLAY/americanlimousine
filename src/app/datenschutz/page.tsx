import styles from "./page.module.css";

export const metadata = {
  title: "Datenschutzerklärung | American Limousine Service GmbH",
  description: "Datenschutzerklärung der American Limousine Service GmbH.",
};

export default function DatenschutzPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.kickerRow}>
          <span className={styles.kickerIndex}>/ 02</span>
          <span className={styles.kickerLine} aria-hidden="true" />
        </div>

        <h1 className={styles.title}>Datenschutzerklärung</h1>
        <div className={styles.subTitle}>American Limousine Service GmbH</div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.h2}>1. Datenschutz auf einen Blick</h2>

        <h3 className={styles.h3}>Allgemeine Hinweise</h3>
        <p className={styles.p}>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
          passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können.
        </p>

        <h3 className={styles.h3}>Datenerfassung auf dieser Website</h3>
        <p className={styles.p}>
          <strong>Wer ist verantwortlich für die Datenerfassung?</strong><br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
          können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ entnehmen.
        </p>
        <p className={styles.p}>
          <strong>Wie erfassen wir Ihre Daten?</strong><br />
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. Kontaktformular).
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme
          erfasst (technische Daten wie Browser, Betriebssystem, Uhrzeit).
        </p>
        <p className={styles.p}>
          <strong>Wofür nutzen wir Ihre Daten?</strong><br />
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
          Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
        </p>

        <div className={styles.card}>
          <h3 className={styles.h3NoTop}>Ihre Rechte</h3>
          <ul className={styles.list}>
            <li>Auskunft, Berichtigung, Löschung</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Widerruf einer Einwilligung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerspruch gegen Verarbeitung</li>
            <li>Beschwerde bei einer Aufsichtsbehörde</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>2. Hosting</h2>
        <p className={styles.p}>
          Wir hosten die Inhalte unserer Website bei folgendem Anbieter: <strong>IONOS SE</strong>,
          Elgendorfer Straße 57, 56410 Montabaur („IONOS“). Beim Besuch erfasst IONOS Logfiles inklusive IP-Adressen.
        </p>
        <p className={styles.p}>
          Die Verwendung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
          Sofern eine Einwilligung abgefragt wurde, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO
          und § 25 Abs. 1 TTDSG (Einwilligung widerrufbar).
        </p>
        <p className={styles.p}>
          <strong>Auftragsverarbeitung:</strong> Wir haben einen AVV mit dem oben genannten Anbieter geschlossen.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>3. Allgemeine Hinweise und Pflichtinformationen</h2>

        <h3 className={styles.h3}>Datenschutz</h3>
        <p className={styles.p}>
          Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
          sowie dieser Datenschutzerklärung.
        </p>

        <h3 className={styles.h3}>Hinweis zur verantwortlichen Stelle</h3>
        <div className={styles.card}>
          <p className={styles.p}>
            <strong>American Limousine Service GmbH</strong><br />
            Inhaberin: Melissa Strempel<br /><br />
            Stellplatz: 86516 Wehringen, Waldstraße 21 – 29<br />
            Filiale + Postanschrift: 82178 Puchheim, Josefstraße 23<br /><br />
            Telefon: 0152 – 292 462 31<br />
            E-Mail: info@americanlimousinde.de
          </p>
        </div>

        <h3 className={styles.h3}>Gesetzlich vorgeschriebener Datenschutzbeauftragter</h3>
        <div className={styles.card}>
          <p className={styles.p}>
            ISS GmbH Strempel &amp; Strempel<br />
            Maximilian Strempel Jun.<br />
            Westendstr. 260a<br />
            D-80686 München
          </p>
        </div>

        <h3 className={styles.h3}>Speicherdauer</h3>
        <p className={styles.p}>
          Sofern keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns,
          bis der Zweck entfällt. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
        </p>

        <h3 className={styles.h3}>Rechtsgrundlagen</h3>
        <p className={styles.p}>
          Je nach Fall verarbeiten wir Daten auf Grundlage von Art. 6 Abs. 1 lit. a, b, c oder f DSGVO.
          Bei Cookies/Endgerätezugriff zusätzlich § 25 Abs. 1 TTDSG (Einwilligung widerrufbar).
        </p>

        <h3 className={styles.h3}>Drittstaaten</h3>
        <p className={styles.p}>
          Bei Tools mit Sitz in den USA oder sonstigen Drittstaaten kann es zu Datenübertragungen kommen, für die
          kein EU-gleichwertiges Datenschutzniveau garantiert werden kann.
        </p>

        <h3 className={styles.h3}>Widerruf / Widerspruch</h3>
        <p className={styles.p}>
          Sie können Einwilligungen jederzeit widerrufen. Zudem haben Sie ein Widerspruchsrecht nach Art. 21 DSGVO
          (u. a. gegen Direktwerbung).
        </p>

        <h3 className={styles.h3}>Beschwerderecht</h3>
        <p className={styles.p}>
          Beschwerden richten Sie bitte an das Bayerische Landesamt für Datenschutzaufsicht:{" "}
          <a
            className={styles.a}
            href="https://www.lda.bayern.de/de/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.lda.bayern.de/de/index.html
          </a>
        </p>

        <h3 className={styles.h3}>SSL- bzw. TLS-Verschlüsselung</h3>
        <p className={styles.p}>
          Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung.
        </p>

        <h3 className={styles.h3}>Widerspruch gegen Werbe-E-Mails</h3>
        <p className={styles.p}>
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von
          nicht ausdrücklich angeforderter Werbung wird widersprochen.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>4. Datenerfassung auf dieser Website</h2>

        <h3 className={styles.h3}>Cookies</h3>
        <p className={styles.p}>
          Unsere Internetseiten verwenden Cookies. Cookies richten auf Ihrem Endgerät keinen Schaden an und werden
          entweder für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft gespeichert.
        </p>
        <p className={styles.p}>
          Notwendige Cookies werden i. d. R. auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert.
          Sofern eine Einwilligung abgefragt wurde, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO
          und § 25 Abs. 1 TTDSG.
        </p>

        <h3 className={styles.h3}>Einwilligung mit Complianz</h3>
        <p className={styles.p}>
          Unsere Website nutzt die Consent-Technologie von Complianz, um Einwilligungen einzuholen und zu dokumentieren.
          Anbieter: Complianz (Kalmarweg 14-5 9723 JG (NL)). Details:{" "}
          <a className={styles.a} href="https://complianz.io" target="_blank" rel="noopener noreferrer">
            https://complianz.io
          </a>
        </p>

        <h3 className={styles.h3}>Server-Log-Dateien</h3>
        <p className={styles.p}>
          Der Provider erhebt u. a. Browsertyp, Betriebssystem, Referrer URL, Hostname, Uhrzeit, IP-Adresse.
          Eine Zusammenführung mit anderen Datenquellen erfolgt nicht.
        </p>

        <h3 className={styles.h3}>Kontaktanfragen</h3>
        <p className={styles.p}>
          Wenn Sie uns kontaktieren (Kontaktformular/E-Mail/Telefon), verarbeiten wir Ihre Angaben zur Bearbeitung
          Ihres Anliegens. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vertraglich) oder lit. f DSGVO (berechtigtes Interesse)
          bzw. lit. a DSGVO (Einwilligung, falls abgefragt).
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>5. Analyse-Tools und Werbung</h2>

        <h3 className={styles.h3}>Google Analytics</h3>
        <p className={styles.p}>
          Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter: Google Ireland Limited,
          Gordon House, Barrow Street, Dublin 4, Irland.
        </p>
        <p className={styles.p}>
          Google Analytics verwendet Technologien (z. B. Cookies/Device-Fingerprinting). Die Daten können in die USA
          übertragen werden. IP-Anonymisierung ist aktiviert.
        </p>
        <p className={styles.p}>
          Browser-Plugin (Opt-Out):{" "}
          <a className={styles.a} href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer">
            https://tools.google.com/dlpage/gaoptout?hl=de
          </a>
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>6. Plug-ins und Tools</h2>

        <h3 className={styles.h3}>Google Maps</h3>
        <p className={styles.p}>
          Diese Seite nutzt über eine API den Kartendienst Google Maps (Google Ireland Limited). Zur Nutzung kann
          es notwendig sein, Ihre IP-Adresse zu verarbeiten. Mehr Infos:{" "}
          <a className={styles.a} href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">
            https://policies.google.com/privacy?hl=de
          </a>
        </p>

        <h3 className={styles.h3}>Disable &amp; Remove Google Fonts</h3>
        <p className={styles.p}>
          Wir nutzen „Disable &amp; Remove Google Fonts“, um das Nachladen von Google Fonts zu blockieren und dadurch
          eine Datenübermittlung an Google zu vermeiden.
        </p>

        <h3 className={styles.h3}>Complianz Cookie Tool</h3>
        <p className={styles.p}>
          Wir verwenden das Complianz Cookie-Tool, um Transparenz zu schaffen und Einwilligungen rechtssicher zu verwalten.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>7. Eigene Dienste</h2>

        <h3 className={styles.h3}>Umgang mit Bewerberdaten</h3>
        <p className={styles.p}>
          Bewerberdaten verarbeiten wir zur Entscheidung über die Begründung eines Beschäftigungsverhältnisses
          (Rechtsgrundlagen u. a. § 26 BDSG, Art. 6 Abs. 1 lit. b DSGVO und ggf. Art. 6 Abs. 1 lit. a DSGVO).
        </p>
        <p className={styles.p}>
          Aufbewahrungsdauer: Sofern kein Stellenangebot zustande kommt, speichern wir Daten i. d. R. bis zu 6 Monate
          nach Abschluss des Bewerbungsverfahrens, sofern keine gesetzlichen Pflichten entgegenstehen.
        </p>
      </section>
    </main>
  );
}