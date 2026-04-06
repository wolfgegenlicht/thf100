import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum | 100% Tempelhofer Feld",
  description: "Impressum der Demokratischen Initiative 100% Tempelhofer Feld e.V.",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        <section className="section-pad">
          <div className="container-text">
            <h1 className="text-h2 font-black leading-heading tracking-heading text-foreground mb-10">
              Impressum
            </h1>

            <div className="flex flex-col gap-8 text-body-sm text-muted leading-body">

              <div>
                <h2 className="text-h4 font-bold text-foreground mb-3">Verantwortlich im Sinne des § 5 DDG</h2>
                <p>Demokratische Initiative 100% Tempelhofer Feld e.V.</p>
                <p>Lisa Wiedekamm</p>
                <p>Mahlower Str. 27</p>
                <p>12049 Berlin</p>
                <p className="mt-2">vertreten durch den Vorstand</p>
                <p>(Lisa Wiedekamm, Mareike Witt, Ina Knapp, Anky Brandt und Cielo Faccio)</p>
              </div>

              <div>
                <h2 className="text-h4 font-bold text-foreground mb-3">Redaktionelle Verantwortung i.S.d. § 55 Abs. 2 Rundfunkstaatsvertrag</h2>
                <p>Lisa Wiedekamm (Vorstand)</p>
                <p>Mahlower Str. 27</p>
                <p>12049 Berlin</p>
              </div>

              <div>
                <h2 className="text-h4 font-bold text-foreground mb-3">Rechte</h2>
                <p className="mb-3">Alle Bilder, Zeichnungen und Texte sind urheberrechtlich geschützt. Inhalte und Rechte Dritter sind als solche gekennzeichnet.</p>
                <p className="mb-3">
                  Alle Texte und Bilder stehen, soweit nicht besonders gekennzeichnet, unter der Creative Commons-Lizenz{" "}
                  <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="text-foreground underline">
                    CC-BY-SA
                  </a>
                  . Erlaubt ist die Nutzung durch andere unter der Bedingung, dass Urheber und Lizenz angegeben werden. Das Werk darf unter der Bedingung verändert werden, dass das bearbeitete Werk unter derselben Lizenz veröffentlicht wird.
                </p>
                <p>
                  Sollten Sie Material entdecken, das Rechte Dritter verletzt, schreiben Sie uns:{" "}
                  <a href="mailto:vorstand@thf100.de" className="text-foreground underline">vorstand@thf100.de</a>
                </p>
              </div>

              <div>
                <h2 className="text-h4 font-bold text-foreground mb-3">Haftung für Inhalte</h2>
                <p>
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>

              <div>
                <h2 className="text-h4 font-bold text-foreground mb-3">Haftung für Links</h2>
                <p>
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>

              <div>
                <h2 className="text-h4 font-bold text-foreground mb-3">Datenschutz</h2>
                <p className="mb-3">
                  Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten erhoben werden, erfolgt dies stets auf freiwilliger Basis. Diese Daten werden ohne ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                </p>
                <p>
                  Weitere Informationen:{" "}
                  <Link href="/datenschutz" className="text-foreground underline">
                    Datenschutzerklärung
                  </Link>
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
