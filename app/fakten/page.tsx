import type { Metadata } from "next";
import type React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fakten | 100% Tempelhofer Feld",
  description:
    "Warum das Tempelhofer Feld nicht bebaut werden darf. Fakten zu Demokratie, Klimaschutz, Stadtentwicklung und Wohnungspolitik.",
  openGraph: {
    title: "Fakten | 100% Tempelhofer Feld",
    description:
      "Warum das Tempelhofer Feld nicht bebaut werden darf. Fakten zu Demokratie, Klimaschutz, Stadtentwicklung und Wohnungspolitik.",
    locale: "de_DE",
    type: "website",
  },
};

type Fact = {
  heading: string;
  text: string;
  icon: React.ReactNode;
  source?: string;
  sourceHref?: string;
};

const Icon = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary-light">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  </div>
);

const facts: Fact[] = [
  {
    heading: "750.000 Berliner*innen haben Nein gesagt",
    text: "Beim Volksentscheid 2014 stimmten 64,3% der Abstimmenden für das Tempelhofer-Feld-Gesetz. Fast 750.000 Menschen entschieden: Das Feld bleibt frei, ohne Bebauung, ohne Einschränkung.",
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
  },
  {
    heading: "Das Gesetz ist eindeutig",
    text: "Das Tempelhofer-Feld-Gesetz von 2014 verbietet Bebauung und schränkt Nutzungsänderungen auf der Fläche strikt ein. Es entstand direkt durch den Volksentscheid und hat demokratische Legitimation.",
    icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="12" y2="17"/></>,
  },
  {
    heading: "Das Feld kühlt die Stadt messbar",
    text: "Das Stadtklimamodell der TU Berlin zeigt: Das Tempelhofer Feld senkt die Temperatur in umliegenden Stadtteilen um mehrere Grad. Bei Hitzeextreme im Berliner Sommer ist das keine Fußnote, sondern Daseinsvorsorge.",
    icon: <><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></>,
    source: "TU Berlin / Senatsverwaltung",
    sourceHref: "https://www.berlin.de/sen/uvk/natur-und-gruen/stadtgruen/stadtgruen-projekte/tempelhofer-feld/studie-gesellschaftliche-wertigkeit/",
  },
  {
    heading: "Der Stadtentwicklungsplan braucht das Feld nicht",
    text: "Berlin hat Flächen für über 249.000 Wohnungen identifiziert, ohne das Tempelhofer Feld anzutasten. Die geplanten Einheiten auf der Grillwiese sind im Verhältnis zum Bedarf marginal, der Verlust der Fläche wäre dauerhaft.",
    icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
    source: "Stadtentwicklungsplan Wohnen 2040",
    sourceHref: "https://www.berlin.de/sen/stadtentwicklung/planung/stadtentwicklungsplaene/step-wohnen-2040/",
  },
  {
    heading: "Internationales Fachwissen ist eindeutig",
    text: 'Architekt*innen aus aller Welt haben sich gegen eine Bebauung ausgesprochen. Die Pritzker-Preisträger Lacaton & Vassal: "Man sollte nicht einmal einen Quadratmeter dieser Dimension berühren."',
    icon: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
    source: "architects4thf.com",
    sourceHref: "https://architects4thf.com",
  },
  {
    heading: "72 von 164 Wettbewerbsbeiträgen lehnten Bebauung ab",
    text: "Beim Ideenwettbewerb des Senats 2024/2025 lehnten 72 von 164 eingereichten Beiträgen Bebauung explizit ab. Vier der sechs ausgezeichneten Projekte sprachen sich gegen Bauen auf dem Feld aus.",
    icon: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>,
    source: "architects4thf.com",
    sourceHref: "https://architects4thf.com",
  },
  {
    heading: "Das Feld hat gesellschaftlichen Wert",
    text: "Das Helmholtz-Zentrum für Umweltforschung belegt im Auftrag der Senatsverwaltung den hohen gesellschaftlichen Wert des Feldes für Erholung, soziale Begegnung und psychisches Wohlbefinden.",
    icon: <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>,
    source: "Helmholtz-Zentrum für Umweltforschung",
    sourceHref: "https://www.berlin.de/sen/uvk/natur-und-gruen/stadtgruen/stadtgruen-projekte/tempelhofer-feld/studie-gesellschaftliche-wertigkeit/",
  },
  {
    heading: "Das Feld ist ein Biotop mitten in der Stadt",
    text: "Feldlerchen, Hasen, seltene Insekten und Pflanzen: Das Tempelhofer Feld ist ein einzigartiges urbanes Ökosystem. Bebauung würde dieses Biotop dauerhaft zerstören.",
    icon: <><path d="M12 22V12"/><path d="M5 3a7 7 0 0 0 7 7 7 7 0 0 0 7-7"/><path d="M5 9a7 7 0 0 1 7 7 7 7 0 0 1-7-7"/></>,
  },
];

export default function FaktenPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="dot-grid section-pad">
          <div className="container-wide flex justify-center">
            <div className="max-w-2xl text-center">
              <p className="label-eyebrow-primary mb-4">Fakten und Argumente</p>
              <h1 className="text-hero font-black leading-heading tracking-heading text-foreground mb-4">
                Warum das Feld
                <br />
                <span className="highlight-yellow">frei bleiben muss</span>
              </h1>
              <p className="text-lead leading-body-loose text-muted max-w-lg text-center mx-auto">
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
                  <Icon>{fact.icon}</Icon>
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

        {/* Architects image */}
        <section className="section-pad">
          <div className="container-wide">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/to-build-is-to-destroy.webp"
                alt="To build is to destroy. Luftaufnahme einer Stadionbaustelle, Symbol für den Widerspruch zwischen Bauen und Bewahren"
                width={2750}
                height={1833}
                className="w-full h-auto"
              />
            </div>
            <p className="text-caption text-muted mt-3 text-center">
              »To build is to destroy«, architects4thf.com
            </p>
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
                className="card no-underline flex items-start gap-4"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary-light">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/>
                  </svg>
                </div>
                <div>
                  <p className="text-body-sm font-semibold text-foreground mb-1">Faktencheck #Feldliebe <span className="text-caption font-normal text-muted">PDF</span></p>
                  <p className="text-caption text-muted">Detaillierter Faktencheck der Feldliebe-Initiative. Alle Argumente auf einen Blick.</p>
                </div>
              </a>
              <a
                href="https://tempelhofer-feld.berlin.de/documents/816/Faktencheck_Poster_final_Kurzversion.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="card no-underline flex items-start gap-4"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary-light">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/>
                  </svg>
                </div>
                <div>
                  <p className="text-body-sm font-semibold text-foreground mb-1">Faktencheck der Feldkoordination <span className="text-caption font-normal text-muted">PDF</span></p>
                  <p className="text-caption text-muted">Kurzversion der gewählten Feldkoordinator*innen für schnelle Orientierung.</p>
                </div>
              </a>
              <a
                href="https://architects4thf.com"
                target="_blank"
                rel="noopener noreferrer"
                className="card no-underline flex items-start gap-4"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary-light">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-body-sm font-semibold text-foreground mb-1">Architects for Tempelhofer Feld <span className="text-caption font-normal text-muted">Website ↗</span></p>
                  <p className="text-caption text-muted">Internationale Architekt*innen gegen die Bebauung: ihre Geschichte, ihre Argumente.</p>
                </div>
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
