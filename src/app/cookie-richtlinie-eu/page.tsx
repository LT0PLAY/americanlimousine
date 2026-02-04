import styles from "./page.module.css";

export const metadata = {
  title: "Cookie-Richtlinie (EU) | American Limousine Service GmbH",
  description: "Informationen zur Verwendung von Cookies und ähnlichen Technologien.",
};

export default function CookieRichtliniePage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.kickerRow}>
          <span className={styles.kickerIndex}>/ 03</span>
          <span className={styles.kickerLine} aria-hidden="true" />
        </div>

        <h1 className={styles.title}>Cookie-Richtlinie (EU)</h1>
        <div className={styles.subTitle}>American Limousine Service GmbH</div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.h2}>1. Einführung</h2>
        <p className={styles.p}>
          Seit dem Inkrafttreten der EU-Datenschutzgrundverordnung (DSGVO) im Mai 2018 sind Websites
          verpflichtet, ihre Besucher über die Verwendung von Cookies auf ihrer Website zu
          informieren und ihre Zustimmung einzuholen. Diese Verpflichtung hat zur Einführung von
          Cookie-Richtlinien auf vielen Websites geführt, die den Besuchern Informationen darüber
          geben, welche Cookies verwendet werden, warum sie verwendet werden und wie sie Cookies
          ablehnen können.
        </p>
        <p className={styles.p}>
          Zur Information: Unsere Website (im Folgenden: „die Website“) verwendet Cookies und ähnliche
          Technologien (zur Vereinfachung werden all diese unter „Cookies“ zusammengefasst).
          Nachfolgend informieren wir Sie über die Verwendung von Cookies auf unserer Website.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>2. Was sind Cookies?</h2>
        <p className={styles.p}>
          Cookies sind kleine Textdateien, die von einer Website auf Ihrem Computer oder Mobilgerät
          gespeichert werden, wenn Sie die Website besuchen. Sie enthalten Informationen über Ihre
          Interaktion mit der Website, wie beispielsweise Ihre Einstellungen oder Anmeldedaten.
        </p>

        <div className={styles.card}>
          <ul className={styles.list}>
            <li><strong>Sitzungscookies:</strong> nur während der Sitzung, werden beim Schließen gelöscht.</li>
            <li><strong>Dauerhafte Cookies:</strong> bleiben gespeichert, bis sie gelöscht werden.</li>
            <li><strong>Erstanbieter-Cookies:</strong> werden von der besuchten Website gesetzt.</li>
            <li><strong>Drittanbieter-Cookies:</strong> werden von Dritten gesetzt, die Inhalte bereitstellen.</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>3. Was sind Skripte?</h2>
        <p className={styles.p}>
          Ein Script ist eine Sammlung von Programmiercode, der verwendet wird, um spezifische
          Funktionen oder Interaktivität auf einer Website zu ermöglichen (z. B. Formulare, Galerien,
          Animationen). Skripte können serverseitig oder im Browser ausgeführt werden.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>4. Was ist ein Web Beacon?</h2>
        <p className={styles.p}>
          Ein Web-Beacon (Tracking-Pixel) ist ein kleines unsichtbares Element, das in Webseiten oder
          E-Mails eingebettet sein kann. Es kann genutzt werden, um Traffic zu messen oder Informationen
          über den Abruf (z. B. Browser/OS, IP-Adresse, Zeit) zu erfassen.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>5. Cookies</h2>

        <h3 className={styles.h3}>5.1 Technische oder funktionelle Cookies</h3>
        <p className={styles.p}>
          Diese Cookies sind notwendig, damit die Website ordnungsgemäß funktioniert (z. B. Navigation,
          Formularfunktionen, Stabilität/Performance). Sie dienen nicht primär dazu, Nutzerverhalten
          für Werbung zu analysieren.
        </p>

        <h3 className={styles.h3}>5.2 Analytische Cookies</h3>
        <p className={styles.p}>
          Analytische Cookies helfen uns zu verstehen, wie Besucher die Website nutzen (z. B. Seitenaufrufe,
          Verweildauer). Wir bitten um Ihre Erlaubnis, analytische Cookies zu setzen.
        </p>

        <h3 className={styles.h3}>5.3 Marketing- / Tracking-Cookies</h3>
        <p className={styles.p}>
          Marketing-/Tracking-Cookies können eingesetzt werden, um Verhalten zu verfolgen und personalisierte
          Werbung auszuspielen. Diese Cookies sind für viele Nutzer besonders sensibel und bedürfen i. d. R.
          einer Einwilligung.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>6. Platzierte Cookies</h2>
        <div className={styles.card}>
          <ul className={styles.list}>
            <li>Google Maps</li>
            <li>Complianz</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>7. Ihre Zustimmung</h2>
        <p className={styles.p}>
          Wenn Sie unsere Website das erste Mal besuchen, zeigen wir Ihnen ein Pop-Up mit einer Erklärung
          über Cookies. Sobald Sie auf „Einstellungen speichern“ klicken, geben Sie uns Ihr Einverständnis,
          alle von Ihnen gewählten Kategorien von Cookies und Plugins wie in dieser Cookie-Erklärung
          beschrieben zu verwenden. Sie können die Verwendung von Cookies über Ihren Browser deaktivieren,
          beachten Sie jedoch, dass die Website dann ggf. nicht korrekt funktioniert.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>8. Aktivierung/Deaktivierung und Löschen von Cookies</h2>
        <p className={styles.p}>
          Viele Cookies können Sie über Ihre Browser-Einstellungen deaktivieren oder löschen. Die Vorgehensweise
          ist je nach Browser unterschiedlich (z. B. Chrome, Firefox, Safari). Bitte beachten Sie, dass bei
          Deaktivierung von Cookies Funktionen der Website eingeschränkt sein können.
        </p>
        <p className={styles.p}>
          Alternativ finden Sie Infos unter{" "}
          <a className={styles.a} href="http://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer">
            http://www.allaboutcookies.org/
          </a>
          .
        </p>
        <p className={styles.p}>
          Wir behalten uns das Recht vor, Änderungen an dieser Cookie-Richtlinie vorzunehmen. Falls erforderlich,
          werden wir Sie erneut um Ihre Zustimmung bitten.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>9. Ihre Rechte in Bezug auf persönliche Daten</h2>
        <div className={styles.card}>
          <ul className={styles.list}>
            <li>Recht auf Information, warum Daten benötigt werden und wie lange sie gespeichert werden.</li>
            <li>Zugriffsrecht auf gespeicherte Daten.</li>
            <li>Recht auf Berichtigung, Ergänzung, Sperrung oder Löschung.</li>
            <li>Widerruf einer erteilten Einwilligung.</li>
            <li>Recht auf Datenübertragbarkeit.</li>
            <li>Widerspruchsrecht gegen Verarbeitung, sofern keine berechtigten Gründe entgegenstehen.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}