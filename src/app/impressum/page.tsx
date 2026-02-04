import styles from "./page.module.css";

export const metadata = {
  title: "Impressum | American Limousine Service GmbH",
  description: "Impressum der American Limousine Service GmbH.",
};

export default function ImpressumPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.kickerRow}>
          <span className={styles.kickerIndex}>/ 01</span>
          <span className={styles.kickerLine} aria-hidden="true" />
        </div>

        <h1 className={styles.title}>Impressum</h1>
        <div className={styles.subTitle}>American Limousine Service GmbH</div>
      </header>

      <section className={styles.section} aria-label="Unternehmensangaben">
        <h2 className={styles.h2}>Unternehmensangaben</h2>

        <div className={styles.card}>
          <div className={styles.block}>
            <div className={styles.label}>Firmensitz + Postanschrift</div>
            <div className={styles.text}>
              Josefstraße 23<br />
              82178 Puchheim
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.label}>Kontakt</div>
            <div className={styles.text}>
              Telefon: 089 – 725 6252<br />
              E-Mail: info@americanlimousine.de
            </div>
          </div>

          <div className={styles.grid2}>
            <div className={styles.block}>
              <div className={styles.label}>Rechtsform</div>
              <div className={styles.text}>GmbH</div>
            </div>
            <div className={styles.block}>
              <div className={styles.label}>Geschäftsführerin</div>
              <div className={styles.text}>Melissa Manzau</div>
            </div>
            <div className={styles.block}>
              <div className={styles.label}>Registerart</div>
              <div className={styles.text}>Handelsregister</div>
            </div>
            <div className={styles.block}>
              <div className={styles.label}>Register / Ort</div>
              <div className={styles.text}>Amtsgericht München</div>
            </div>
            <div className={styles.block}>
              <div className={styles.label}>Registernummer</div>
              <div className={styles.text}>HRB 237883</div>
            </div>
            <div className={styles.block}>
              <div className={styles.label}>Umsatzsteuer-ID</div>
              <div className={styles.text}>DE 316803268</div>
            </div>
            <div className={styles.block}>
              <div className={styles.label}>Steuernummer</div>
              <div className={styles.text}>117/121/53018</div>
            </div>
            <div className={styles.block}>
              <div className={styles.label}>Gerichtsstand &amp; Erfüllungsort</div>
              <div className={styles.text}>München</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-label="Allgemeine Informationspflicht">
        <h2 className={styles.h2}>Allgemeine Informationspflicht nach § 36 VSBG</h2>
        <p className={styles.p}>
          Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle weder bereit noch verpflichtet.
        </p>
      </section>

      <section className={styles.section} aria-label="Hinweis Online-Streitbeilegung">
        <h2 className={styles.h2}>Hinweis gemäß Online-Streitbeilegung</h2>
        <p className={styles.p}>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
          {" "}
          <a
            className={styles.a}
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor
          einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section className={styles.section} aria-label="Haftung für Inhalte">
        <h2 className={styles.h2}>Haftung für Inhalte</h2>
        <p className={styles.p}>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
          den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
          jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
          hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
          den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
          erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
          entfernen.
        </p>
      </section>

      <section className={styles.section} aria-label="Haftung für Links">
        <h2 className={styles.h2}>Haftung für Links</h2>
        <p className={styles.p}>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
          mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung
          nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
          Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
      </section>

      <section className={styles.section} aria-label="Urheberrecht">
        <h2 className={styles.h2}>Urheberrecht</h2>
        <p className={styles.p}>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
          des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
          privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht
          vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
          werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
          Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>
      </section>

      <section className={styles.section} aria-label="Seiten-Erstellung">
        <h2 className={styles.h2}>Seiten-Erstellung</h2>
        <div className={styles.card}>
          <p className={styles.p}>
            Diese Website wurde erstellt von:<br />
            Andreas Wallner<br />
            <a
              className={styles.a}
              href="https://www.munichmotions.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.munichmotions.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}