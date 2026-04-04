import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fakten — 100% Tempelhofer Feld",
  description:
    "Warum das Tempelhofer Feld nicht bebaut werden darf. Fakten zu Demokratie, Klimaschutz, Stadtentwicklung und Wohnungspolitik.",
};

type Fact = {
  heading: string;
  text: string;
  source?: string;
  sourceHref?: string;
};

const facts: Fact[] = [
  {
    heading: "750.000 Berliner*innen haben Nein gesagt",
    text: "Beim Volksentscheid 2014 stimmten 64,3% der Abstimmenden für das Tempelhofer-Feld-Gesetz. Fast 750.000 Menschen entschieden: Das Feld bleibt frei, ohne Bebauung, ohne Einschränkung.",
  },
  {
    heading: "Das Gesetz ist eindeutig",
    text: "Das Tempelhofer-Feld-Gesetz von 2014 verbietet Bebauung und schränkt Nutzungsänderungen auf der Fläche strikt ein. Es entstand direkt durch den Volksentscheid und hat demokratische Legitimation.",
  },
  {
    heading: "Das Feld kühlt die Stadt messbar",
    text: "Das Stadtklimamodell der TU Berlin zeigt: Das Tempelhofer Feld senkt die Temperatur in umliegenden Stadtteilen um mehrere Grad. Bei Hitzeextreme im Berliner Sommer ist das keine Fußnote, sondern Daseinsvorsorge.",
    source: "TU Berlin / Senatsverwaltung",
    sourceHref: "https://www.berlin.de/sen/uvk/natur-und-gruen/stadtgruen/stadtgruen-projekte/tempelhofer-feld/studie-gesellschaftliche-wertigkeit/",
  },
  {
    heading: "Der Stadtentwicklungsplan braucht das Feld nicht",
    text: "Berlin hat Flächen für über 249.000 Wohnungen identifiziert, ohne das Tempelhofer Feld anzutasten. Die geplanten Einheiten auf der Grillwiese sind im Verhältnis zum Bedarf marginal, der Verlust der Fläche wäre dauerhaft.",
    source: "Stadtentwicklungsplan Wohnen 2040",
    sourceHref: "https://www.berlin.de/sen/stadtentwicklung/planung/stadtentwicklungsplaene/step-wohnen-2040/",
  },
  {
    heading: "Internationales Fachwissen ist eindeutig",
    text: 'Architekt*innen aus aller Welt haben sich gegen eine Bebauung ausgesprochen. Die Pritzker-Preisträger Lacaton & Vassal: "Man sollte nicht einmal einen Quadratmeter dieser Dimension berühren."',
    source: "architects4thf.com",
    sourceHref: "https://architects4thf.com",
  },
  {
    heading: "72 von 164 Wettbewerbsbeiträgen lehnten Bebauung ab",
    text: "Beim Ideenwettbewerb des Senats 2024/2025 lehnten 72 von 164 eingereichten Beiträgen Bebauung explizit ab. Vier der sechs ausgezeichneten Projekte sprachen sich gegen Bauen auf dem Feld aus.",
    source: "architects4thf.com",
    sourceHref: "https://architects4thf.com",
  },
  {
    heading: "Das Feld hat gesellschaftlichen Wert",
    text: "Das Helmholtz-Zentrum für Umweltforschung belegt im Auftrag der Senatsverwaltung den hohen gesellschaftlichen Wert des Feldes für Erholung, soziale Begegnung und psychisches Wohlbefinden.",
    source: "Helmholtz-Zentrum für Umweltforschung",
    sourceHref: "https://www.berlin.de/sen/uvk/natur-und-gruen/stadtgruen/stadtgruen-projekte/tempelhofer-feld/studie-gesellschaftliche-wertigkeit/",
  },
  {
    heading: "Das Feld ist ein Biotop mitten in der Stadt",
    text: "Feldlerchen, Hasen, seltene Insekten und Pflanzen: Das Tempelhofer Feld ist ein einzigartiges urbanes Ökosystem. Bebauung würde dieses Biotop dauerhaft zerstören.",
  },
];

export default function FaktenPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="dot-grid section-pad">
          <div className="container-wide">
            <div className="max-w-2xl">
              <p className="label-eyebrow-primary mb-4">Fakten und Argumente</p>
              <h1 className="text-hero font-black leading-heading tracking-heading text-foreground mb-4">
                Warum das Feld
                <br />
                <span className="highlight-yellow">frei bleiben muss.</span>
              </h1>
              <p className="text-lead leading-body-loose text-muted max-w-lg">
                Demokratie, Klima, Stadtentwicklung, soziale Gerechtigkeit. Es gibt viele gute Gründe, das Tempelhofer Feld zu schützen.
              </p>
            </div>
          </div>
        </section>

        {/* Facts */}
        <section className="section-pad">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {facts.map((fact, i) => (
                <div key={i} className="card">
                  <h2 className="text-h4 font-bold text-foreground mb-3">{fact.heading}</h2>
                  <p className="text-body-sm text-muted leading-body">{fact.text}</p>
                  {fact.source && fact.sourceHref && (
                    <a
                      href={fact.sourceHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-caption text-muted hover:text-foreground transition-colors mt-3 block"
                    >
                      Quelle: {fact.source} ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* External resources */}
        <section className="section-pad bg-bg-light border-t border-border">
          <div className="container-text">
            <p className="label-eyebrow mb-3">Vertiefung</p>
            <h2 className="text-h3 font-bold text-foreground mb-6">Weiterlesen und -schauen</h2>
            <div className="flex flex-col gap-4">
              <a
                href="https://haus104.de/wp/wp-content/uploads/2024/10/Feldliebe-Faktencheckheft-Version-2-digital.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="card no-underline"
              >
                <p className="text-body-sm font-semibold text-foreground mb-1">Faktencheck #Feldliebe (PDF)</p>
                <p className="text-caption text-muted">Detaillierter Faktencheck der Feldliebe-Initiative — alle Argumente auf einen Blick.</p>
              </a>
              <a
                href="https://tempelhofer-feld.berlin.de/documents/816/Faktencheck_Poster_final_Kurzversion.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="card no-underline"
              >
                <p className="text-body-sm font-semibold text-foreground mb-1">Faktencheck der Feldkoordination (PDF)</p>
                <p className="text-caption text-muted">Kurzversion der gewählten Feldkoordinator*innen für schnelle Orientierung.</p>
              </a>
              <a
                href="https://architects4thf.com"
                target="_blank"
                rel="noopener noreferrer"
                className="card no-underline"
              >
                <p className="text-body-sm font-semibold text-foreground mb-1">Architects for Tempelhofer Feld</p>
                <p className="text-caption text-muted">Internationale Architekt*innen gegen die Bebauung: ihre Geschichte, ihre Argumente.</p>
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad">
          <div className="container-text text-center">
            <h2 className="text-h3 font-bold text-foreground mb-4">Jetzt handeln</h2>
            <p className="text-body-sm text-muted mb-6">
              Informiert? Gut. Jetzt ist es Zeit zu handeln. Schreib deinen Abgeordneten.
            </p>
            <Link href="/aktion" className="btn-primary">
              Zur Aktion
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
