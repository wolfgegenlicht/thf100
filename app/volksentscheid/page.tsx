import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Volksentscheid 2014 | 100% Tempelhofer Feld",
  description:
    "Am 25. Mai 2014 stimmten 739.124 Berliner für das Tempelhofer-Feld-Gesetz. In allen 12 Bezirken mehrheitlich Ja. Das Ergebnis ist Gesetz.",
  openGraph: {
    title: "Volksentscheid 2014 | 100% Tempelhofer Feld",
    description:
      "739.124 Berliner stimmten 2014 für ein freies Tempelhofer Feld. In allen 12 Bezirken mehrheitlich Ja.",
    locale: "de_DE",
    type: "website",
  },
};

const ergebnisse = [
  { bezirk: "Berlin gesamt", stimmberechtigte: 2491365, teilnehmer: 1149145, ja: 739124, nein: 343982 },
  { bezirk: "Mitte", stimmberechtigte: 203653, teilnehmer: 92068, ja: 59996, nein: 27520 },
  { bezirk: "Friedrichshain-Kreuzberg", stimmberechtigte: 172597, teilnehmer: 93533, ja: 72401, nein: 18245 },
  { bezirk: "Pankow", stimmberechtigte: 285162, teilnehmer: 132510, ja: 82690, nein: 42456 },
  { bezirk: "Charlottenburg-Wilmersdorf", stimmberechtigte: 217811, teilnehmer: 115094, ja: 69934, nein: 38408 },
  { bezirk: "Spandau", stimmberechtigte: 164167, teilnehmer: 64867, ja: 38181, nein: 21848 },
  { bezirk: "Steglitz-Zehlendorf", stimmberechtigte: 218597, teilnehmer: 122960, ja: 75333, nein: 40100 },
  { bezirk: "Tempelhof-Schöneberg", stimmberechtigte: 233925, teilnehmer: 124453, ja: 86440, nein: 32145 },
  { bezirk: "Neukölln", stimmberechtigte: 204633, teilnehmer: 94790, ja: 70390, nein: 19952 },
  { bezirk: "Treptow-Köpenick", stimmberechtigte: 200959, teilnehmer: 87427, ja: 55805, nein: 25963 },
  { bezirk: "Marzahn-Hellersdorf", stimmberechtigte: 202671, teilnehmer: 66644, ja: 38294, nein: 23667 },
  { bezirk: "Lichtenberg", stimmberechtigte: 205284, teilnehmer: 74963, ja: 45065, nein: 24662 },
  { bezirk: "Reinickendorf", stimmberechtigte: 181906, teilnehmer: 79836, ja: 44595, nein: 29016 },
];

function formatNum(n: number) {
  return n.toLocaleString("de-DE");
}

export default function VolksentscheidPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="dot-grid section-pad">
          <div className="container-wide">
            <div className="max-w-2xl">
              <p className="label-eyebrow-primary mb-4">25. Mai 2014</p>
              <h1 className="text-hero font-black leading-heading tracking-heading text-foreground mb-4">
                Der Volksentscheid
                <br />
                <span className="highlight-yellow">2014.</span>
              </h1>
              <p className="text-lead leading-body-loose text-muted max-w-lg">
                739.124 Berliner stimmten für ein freies Tempelhofer Feld. In allen 12 Bezirken mehrheitlich Ja. Das Ergebnis wurde Gesetz.
              </p>
            </div>
          </div>
        </section>

        {/* Key stats */}
        <section className="section-pad bg-bg-light border-y border-border">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-2xl">
              <div className="card text-center">
                <p className="text-hero font-black text-primary leading-none mb-2">739.124</p>
                <p className="text-body-sm text-muted">Ja-Stimmen für das ThF-Gesetz</p>
              </div>
              <div className="card text-center">
                <p className="text-hero font-black text-primary leading-none mb-2">64,3%</p>
                <p className="text-body-sm text-muted">der Abstimmenden stimmten Ja</p>
              </div>
              <div className="card text-center">
                <p className="text-hero font-black text-primary leading-none mb-2">12/12</p>
                <p className="text-body-sm text-muted">Bezirken mit mehrheitlichem Ja</p>
              </div>
            </div>
          </div>
        </section>

        {/* Victory statement */}
        <section className="section-pad">
          <div className="container-text">
            <p className="label-eyebrow mb-3">Pressemitteilung vom 29. Mai 2014</p>
            <h2 className="text-h3 font-bold text-foreground mb-6">Zum Ergebnis des Volksentscheids</h2>
            <div className="flex flex-col gap-5 text-body-sm text-muted leading-body">
              <p>
                Die Demokratische Initiative 100% Tempelhofer Feld freut sich über das eindeutige Ergebnis des Volksentscheids zum Erhalt des Tempelhofer Feldes.
              </p>
              <p>
                Der Gesetzesvorschlag der Initiative hat mit 739.124 Ja-Stimmen weit mehr als das nötige Quorum erreicht. Landesweit haben die Berliner in allen Bezirken mehrheitlich für das ThF-Gesetz gestimmt. Das ist ein eindeutiges Votum für den Erhalt des Tempelhofer Feldes und darüber hinaus für eine bürgernahe und transparente Stadtentwicklungspolitik.
              </p>
              <p>
                Die Werbekampagne des Aktionsbündnisses der Immobilienwirtschaft in Koalition mit der Landesregierung wurde durchschaut und blieb wirkungslos.
              </p>
              <p>
                Das Volksgesetz ist im Juli 2014 in Kraft getreten. Das Land Berlin ist verpflichtet, das Tempelhofer Feld zu erhalten und vor Bebauung zu schützen.
              </p>
            </div>
          </div>
        </section>

        {/* Results table */}
        <section className="section-pad bg-bg-light border-t border-border">
          <div className="container-wide">
            <p className="label-eyebrow mb-3">Endergebnis</p>
            <h2 className="text-h3 font-bold text-foreground mb-6">Ergebnisse nach Bezirk</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-body-sm" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 pr-6 font-bold text-foreground">Bezirk</th>
                    <th className="text-right py-3 px-4 font-bold text-foreground">Stimmberechtigte</th>
                    <th className="text-right py-3 px-4 font-bold text-foreground">Abgestimmt</th>
                    <th className="text-right py-3 px-4 font-bold text-primary">Ja</th>
                    <th className="text-right py-3 pl-4 font-bold text-muted">Nein</th>
                  </tr>
                </thead>
                <tbody>
                  {ergebnisse.map((row, i) => (
                    <tr
                      key={row.bezirk}
                      className={`border-b border-border ${i === 0 ? "bg-green-light font-bold" : "hover:bg-gray-50"}`}
                    >
                      <td className={`py-3 pr-6 ${i === 0 ? "font-bold text-foreground" : "text-foreground"}`}>
                        {row.bezirk}
                      </td>
                      <td className="text-right py-3 px-4 text-muted">{formatNum(row.stimmberechtigte)}</td>
                      <td className="text-right py-3 px-4 text-muted">{formatNum(row.teilnehmer)}</td>
                      <td className={`text-right py-3 px-4 ${i === 0 ? "text-primary font-black" : "text-primary font-semibold"}`}>
                        {formatNum(row.ja)}
                      </td>
                      <td className="text-right py-3 pl-4 text-muted">{formatNum(row.nein)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-caption text-muted mt-4">
              Quelle: Landesabstimmungsleiterin Berlin, 25. Mai 2014
            </p>
          </div>
        </section>

        {/* Law summary */}
        <section className="section-pad">
          <div className="container-wide">
            <div className="max-w-2xl">
              <div className="card">
                <p className="label-eyebrow-primary mb-2">Das Gesetz</p>
                <h2 className="text-h4 font-bold text-foreground mb-3">Das Tempelhofer-Feld-Gesetz (ThF-Gesetz)</h2>
                <p className="text-body-sm text-muted leading-body mb-3">
                  Das vom Volk beschlossene Gesetz vom 14. Juni 2014 verpflichtet das Land Berlin:
                </p>
                <ul className="flex flex-col gap-2 mb-4">
                  {[
                    "Das Tempelhofer Feld nicht zu veräußern, zu bebauen oder teilzuprivatisieren.",
                    "Das Feld der Öffentlichkeit vollumfänglich, dauerhaft, uneingeschränkt und unentgeltlich zur Verfügung zu stellen.",
                    "Die Funktion als innerstädtisches Kaltluftentstehungsgebiet und Lebensraum für Pflanzen und Tiere zu schützen.",
                    "Das Feld in seiner Bedeutung als historischer Ort zu erhalten.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-body-sm text-muted">
                      <span className="text-primary font-bold flex-shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.berlin.de/sen/uvk/natur-und-gruen/stadtgruen/stadtgruen-projekte/tempelhofer-feld/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-caption text-muted hover:text-foreground transition-colors"
                >
                  Amtliche Fassung des ThF-Gesetzes (PDF) ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad bg-bg-light border-t border-border">
          <div className="container-text text-center">
            <p className="label-eyebrow mb-3">Heute</p>
            <h2 className="text-h3 font-bold text-foreground mb-4">Das Gesetz ist in Gefahr</h2>
            <p className="text-body-sm text-muted mb-6 max-w-md mx-auto">
              CDU und SPD wollen das ThF-Gesetz ändern und die Grillwiese bebauen. Wir kämpfen dagegen.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/fakten" className="btn-primary">
                Fakten und Argumente
              </Link>
              <Link href="/aktion" className="btn-secondary">
                Jetzt handeln
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
