import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <div className="urgency-bar">
        Achtung: Die Grillwiese soll ab Juli 2026 bebaut werden. Grundsteinlegung Oktober 2026.
      </div>

      <Header />

      <main>
        {/* Hero */}
        <section className="dot-grid section-pad-lg">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="label-eyebrow-primary mb-4">Volksentscheid in Gefahr</p>
              <h1 className="text-hero font-black leading-heading tracking-heading text-foreground mb-6">
                Das Tempelhofer Feld
                <br />
                <span className="highlight-yellow">gehört allen.</span>
              </h1>
              <p className="text-lead leading-body-loose text-muted mb-8 max-w-xl">
                CDU und SPD wollen das Tempelhofer-Feld-Gesetz ändern und die Grillwiese bebauen. Gegen den Willen von fast 750.000 Berlinerinnen und Berlinern, die 2014 klar Nein gesagt haben.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/aktion" className="btn-primary">
                  Jetzt deinen Abgeordneten schreiben
                </Link>
                <Link href="/fakten" className="btn-secondary">
                  Was ist passiert?
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Aktionen */}
        <section className="section-pad bg-bg-light" aria-labelledby="aktionen-heading">
          <div className="container-wide">
            <div className="text-center mb-12">
              <p className="label-eyebrow mb-3">Was kannst du tun?</p>
              <h2 id="aktionen-heading" className="text-h2 font-bold leading-heading-sm tracking-heading-md text-foreground">
                Drei Wege, das Feld zu retten
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="card">
                <div className="step-circle mb-4">1</div>
                <h3 className="text-h3 font-bold text-foreground mb-2">Abgeordnete anschreiben</h3>
                <p className="text-body-sm text-muted leading-body mb-6">
                  Wähl deinen Bezirk aus und schreib direkt deinen Abgeordneten. Wir machen es einfach: eine fertige Vorlage, alle Empfänger schon eingetragen.
                </p>
                <Link href="/aktion" className="btn-primary text-body-sm">
                  Zur Aktion
                </Link>
              </div>

              <div className="card">
                <div className="step-circle mb-4">2</div>
                <h3 className="text-h3 font-bold text-foreground mb-2">Informieren und weitersagen</h3>
                <p className="text-body-sm text-muted leading-body mb-6">
                  Versteh die Argumente. Dann erkläre anderen, warum das Feld so wichtig ist. Fakten, Zahlen, Hintergründe, alles auf einer Seite.
                </p>
                <Link href="/fakten" className="btn-secondary text-body-sm">
                  Zu den Fakten
                </Link>
              </div>

              <div className="card">
                <div className="step-circle mb-4">3</div>
                <h3 className="text-h3 font-bold text-foreground mb-2">Spenden</h3>
                <p className="text-body-sm text-muted leading-body mb-6">
                  Die Initiative braucht Ressourcen für rechtliche Schritte, Öffentlichkeitsarbeit und Aktionen. Jeder Beitrag hilft.
                </p>
                <Link href="/spenden" className="btn-accent text-body-sm">
                  Jetzt spenden
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Was ist passiert */}
        <section className="section-pad" aria-labelledby="hintergrund-heading">
          <div className="container-text">
            <p className="label-eyebrow mb-3">Hintergrund</p>
            <h2 id="hintergrund-heading" className="text-h2 font-bold leading-heading-sm tracking-heading-md text-foreground mb-6">
              Was gerade auf dem Spiel steht
            </h2>

            <div className="flex flex-col gap-6 text-body leading-body text-muted">
              <p>
                2014 haben fast 750.000 Berliner*innen beim Volksentscheid für ein freies Tempelhofer Feld gestimmt. Das Ergebnis ist Gesetz: das Tempelhofer-Feld-Gesetz.
              </p>
              <p>
                Jetzt wollen CDU und SPD dieses Gesetz ändern, um Bauvorhaben auf der Grillwiese am Columbiadamm zu ermöglichen. Die Vorbereitungen laufen bereits seit Januar 2026. Baustart ist für Juli 2026 geplant.
              </p>
              <p>
                Das ist nicht nur ein Angriff auf ein Stück Grünfläche. Es ist ein Angriff auf einen der deutlichsten demokratischen Beschlüsse dieser Stadt.
              </p>
            </div>

            <div className="mt-8">
              <Link href="/fakten" className="btn-secondary">
                Alle Fakten und Argumente
              </Link>
            </div>
          </div>
        </section>

        {/* Urgency CTA */}
        <section className="section-pad bg-foreground" aria-labelledby="jetzt-heading">
          <div className="container-wide text-center">
            <p className="label-eyebrow mb-4 text-accent">Jetzt ist der Moment</p>
            <h2 id="jetzt-heading" className="text-h2 font-black leading-heading-sm tracking-heading-md text-white mb-4">
              Deine Mail kann einen Unterschied machen.
            </h2>
            <p className="text-lead text-white/70 mb-8 max-w-xl mx-auto">
              Der Gesetzentwurf wird in zwei Ausschüssen des Abgeordnetenhauses beraten. Abgeordnete müssen wissen, was ihre Wähler*innen denken. Schreib ihnen jetzt.
            </p>
            <Link href="/aktion" className="btn-accent">
              Jetzt deinen Abgeordneten schreiben
            </Link>
          </div>
        </section>

        {/* Nächste Termine */}
        <section className="section-pad" aria-labelledby="termine-heading">
          <div className="container-wide">
            <p className="label-eyebrow mb-3">Mitmachen</p>
            <h2 id="termine-heading" className="text-h2 font-bold leading-heading-sm tracking-heading-md text-foreground mb-8">
              Aktionstreffen
            </h2>
            <div className="card max-w-xl">
              <p className="label-eyebrow-primary mb-2">Montag, 13. April 2026</p>
              <h3 className="text-h3 font-bold text-foreground mb-1">Aktionstreffen</h3>
              <p className="text-body-sm text-muted mb-2">19:00 bis 21:00 Uhr (18:00 Treffen für Neue)</p>
              <p className="text-body-sm text-muted mb-4">
                Genezarethkirche am Herrfurthplatz 14, Neukölln. Falls die Eingangstür geschlossen ist: bitte klingeln.
              </p>
              <p className="text-caption text-muted">Alle sind willkommen.</p>
            </div>
            <p className="text-body-sm text-muted mt-6">
              Alle Termine auf{" "}
              <a
                href="https://www.thf100.de/kalender-termine-anzeigen.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline"
              >
                thf100.de
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
