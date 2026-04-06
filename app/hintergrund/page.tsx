import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Was ist passiert? | 100% Tempelhofer Feld",
  description:
    "Die Geschichte des Tempelhofer Felds: vom Volksentscheid 2014 bis zu den aktuellen Bebauungsplänen von CDU und SPD.",
  openGraph: {
    title: "Was ist passiert? | 100% Tempelhofer Feld",
    description:
      "Die Geschichte des Tempelhofer Felds: vom Volksentscheid 2014 bis zu den aktuellen Bebauungsplänen von CDU und SPD.",
    locale: "de_DE",
    type: "website",
  },
};

const timeline = [
  {
    year: "2014",
    heading: "750.000 Menschen sagen Nein",
    text: "Beim Volksentscheid am 25. Mai 2014 stimmen 64,3 Prozent der Abstimmenden für das Tempelhofer-Feld-Gesetz. Fast 750.000 Berliner*innen entscheiden: Das Feld bleibt frei, keine Bebauung, keine Einschränkung. Das Ergebnis wird Gesetz.",
  },
  {
    year: "2014–2022",
    heading: "Das Feld lebt",
    text: "Das Tempelhofer Feld entwickelt sich zu einem der meistgenutzten Freiräume der Stadt. Feldlerchen brüten auf der Startbahn, Familien grillen auf der Wiese, Geflüchtete finden Unterkunft. Das Gesetz schützt alles davon.",
  },
  {
    year: "2023",
    heading: "Neue Koalition, alte Pläne",
    text: "CDU und SPD bilden nach der Wiederholungswahl eine neue Koalition. Im Koalitionsvertrag taucht auf, was viele befürchtet hatten: Wohnungsbau auf der Grillwiese am Columbiadamm. Das Gesetz soll geändert werden.",
  },
  {
    year: "2024",
    heading: "Wettbewerb als Ablenkungsmanöver",
    text: "Der Senat schreibt einen internationalen Ideenwettbewerb aus. 164 Beiträge werden eingereicht. Das Ergebnis ist eindeutig: 72 Einreichungen lehnen Bebauung explizit ab. Vier der sechs ausgezeichneten Projekte sprechen sich gegen Bauen auf dem Feld aus. Auch 100 Prozent der Teilnehmenden am Dialogprozess sprechen sich gegen Bebauung aus. Der Senat ignoriert beides.",
  },
  {
    year: "2025",
    heading: "Das Gesetz soll fallen",
    text: "CDU und SPD bringen einen Änderungsantrag zum Tempelhofer-Feld-Gesetz in den Ausschuss für Stadtentwicklung ein. Die parlamentarischen Beratungen laufen. Grundstücke sollen an Privatinvestoren verkauft werden.",
  },
  {
    year: "2026",
    heading: "Die Uhr tickt",
    text: "Seit Januar 2026 laufen die Vorbereitungen. Grundsteinlegung ist für Oktober 2026 geplant, Baubeginn auf der Grillwiese für Juli 2026. Wenn das Gesetz geändert wird, ist der Verlust dauerhaft.",
  },
];

export default function HintergrundPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="dot-grid section-pad">
          <div className="container-wide">
            <div className="max-w-2xl">
              <p className="label-eyebrow-primary mb-4">Hintergrund</p>
              <h1 className="text-hero font-black leading-heading tracking-heading text-foreground mb-4">
                Was gerade
                <span className="highlight-yellow">auf dem Spiel steht.</span>
              </h1>
              <p className="text-lead leading-body-loose text-muted max-w-lg">
                CDU und SPD wollen das Tempelhofer-Feld-Gesetz kippen. Wie es dazu kam und warum das nicht passieren darf.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-pad">
          <div className="container-text">
            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 md:gap-10">
                  {/* Year column */}
                  <div className="flex flex-col items-center flex-shrink-0 w-16 md:w-24">
                    <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-1" />
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-2" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-10 flex-1 min-w-0">
                    <p className="label-eyebrow-primary mb-2">{item.year}</p>
                    <h2 className="text-h4 font-bold text-foreground mb-3">{item.heading}</h2>
                    <p className="text-body-sm text-muted leading-body">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why it must not happen */}
        <section className="section-pad bg-foreground">
          <div className="container-text">
            <p className="label-eyebrow mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Warum das nicht passieren darf</p>
            <h2 className="text-h2 font-bold leading-heading-sm tracking-heading-md text-white mb-8">
              Vier Gründe, die keine Ausrede wegmacht.
            </h2>

            <div className="flex flex-col gap-6">
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-h4 font-bold text-white mb-2">Demokratie</h3>
                <p className="text-body-sm leading-body" style={{ color: "rgba(255,255,255,0.7)" }}>
                  750.000 Menschen haben beim Volksentscheid 2014 klar und deutlich Nein gesagt. Das Ergebnis ist Gesetz. Es einfach zu ändern, weil die aktuelle Koalition andere Pläne hat, ist kein normaler parlamentarischer Vorgang. Es ist die Aushöhlung direkter Demokratie.
                </p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-h4 font-bold text-white mb-2">Klima</h3>
                <p className="text-body-sm leading-body" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Das Tempelhofer Feld kühlt umliegende Stadtteile um mehrere Grad. Bei sommerlichen Hitzewellen ist das keine Fußnote. Bebauung würde diese Kühlwirkung dauerhaft zerstören, in einer Stadt, die immer heißer wird.
                </p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-h4 font-bold text-white mb-2">Stadtentwicklung</h3>
                <p className="text-body-sm leading-body" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Berlin hat Flächen für über 249.000 Wohnungen identifiziert, ohne das Feld anzutasten. Die geplanten Einheiten auf der Grillwiese sind im Verhältnis zum Bedarf marginal. Der Verlust des Felds wäre dauerhaft, der Wohnungsgewinn ist es nicht.
                </p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-h4 font-bold text-white mb-2">Natur und Gemeinschaft</h3>
                <p className="text-body-sm leading-body" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Das Feld ist Heimat seltener Tierarten, ein Biotop mitten in der Stadt und gleichzeitig ein Ort der Begegnung für alle Berliner*innen, unabhängig von Einkommen oder Herkunft. Solche Orte entstehen nicht neu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad">
          <div className="container-text">
            <h2 className="text-h3 font-bold text-foreground mb-4">Jetzt handeln</h2>
            <p className="text-body-sm text-muted leading-body mb-8">
              Der Gesetzentwurf wird im Abgeordnetenhaus beraten. Abgeordnete brauchen Post von ihren Wähler*innen. Alle Fakten und Argumente gibt es auf der Fakten-Seite.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/aktion" className="btn-primary">
                Abgeordneten anschreiben
              </Link>
              <Link href="/fakten" className="btn-secondary">
                Alle Fakten
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
