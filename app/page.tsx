import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CountdownBar from "@/components/CountdownBar";
import HeroCountdown from "@/components/HeroCountdown";
import { termine, formatDatumBadge } from "@/data/termine";

export default function HomePage() {
  const nextTermin = termine[0];

  return (
    <>
      <CountdownBar />

      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden section-pad-lg hero-section">
          {/* Background image */}
          <Image
            src="/images/feld-sommer.webp"
            alt="Menschen genießen das Tempelhofer Feld im Sommer. Wiese im Vordergrund, Startbahn und Berliner Skyline im Hintergrund."
            fill
            className="object-cover"
            style={{ objectPosition: "center 75%" }}
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%), linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.1) 100%)" }} />

          <div className="container-wide relative z-10">
            <div className="hero-layout">
              {/* Left: copy */}
              <div className="hero-layout__left">
                <p className="label-eyebrow mb-4" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Volksentscheid in Gefahr</p>
                <h1 className="text-hero font-black leading-heading tracking-heading text-white mb-6">
                  Das Tempelhofer Feld
                  <br />
                  <span className="highlight-yellow">gehört allen</span>
                </h1>
                <p className="text-lead leading-body-loose mb-8" style={{ color: "rgba(255,255,255,0.9)", maxWidth: "38rem" }}>
                  CDU und SPD wollen das Tempelhofer-Feld-Gesetz ändern und die Grillwiese bebauen. Gegen den Willen von fast 750.000 Berlinerinnen und Berlinern, die 2014 klar Nein gesagt haben.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/aktion" className="btn-primary">
                    Jetzt deinen Abgeordneten schreiben
                  </Link>
                  <Link href="/hintergrund" className="btn-secondary" style={{ borderColor: "rgba(255,255,255,0.6)", color: "white" }}>
                    Was ist passiert?
                  </Link>
                </div>
              </div>
              {/* Right: countdown */}
              <div className="hero-layout__right">
                <HeroCountdown />
              </div>
            </div>
          </div>

          {/* Photo credit */}
          <p className="absolute bottom-2 right-3 z-10" style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.5)" }}>
            Photo by{" "}
            <a href="https://unsplash.com/@cecilecos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
              Cécile
            </a>
            {" "}on{" "}
            <a href="https://unsplash.com/photos/a-large-field-with-people-and-horses--z2wrf4N8z4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
              Unsplash
            </a>
          </p>
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

        {/* Protest banner */}
        <div className="protest-banner flex justify-center" aria-hidden="true">
          <Image
            src="/images/haende-weg.webp"
            alt=""
            width={854}
            height={127}
            className="h-auto"
            style={{ maxWidth: "100%", width: "854px" }}
          />
        </div>

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
        <section id="termine" className="section-pad" aria-labelledby="termine-heading">
          <div className="container-wide">
            <div className="mb-8">
              <p className="label-eyebrow mb-3">Mitmachen</p>
              <h2 id="termine-heading" className="text-h2 font-bold leading-heading-sm tracking-heading-md text-foreground">
                Aktionstreffen
              </h2>
            </div>

            {nextTermin && (() => {
              const { tag, monat } = formatDatumBadge(nextTermin.datum);
              return (
                <div className="flex flex-col gap-4 max-w-xl">
                  <div className="card flex gap-5 items-start">
                    <div className="flex-shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-2xl bg-primary text-foreground font-black leading-none">
                      <span style={{ fontSize: "1.35rem" }}>{tag}</span>
                      <span style={{ fontSize: "0.65rem", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 700, marginTop: "0.1em" }}>{monat}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="label-eyebrow-primary mb-1">Nächster Termin</p>
                      <h3 className="text-h4 font-bold text-foreground mb-1">
                        {nextTermin.wochentag}, {nextTermin.datum.split("-").reverse().join(".")}
                      </h3>
                      <p className="text-body-sm text-muted">{nextTermin.zeit}</p>
                      {nextTermin.zeitHinweis && <p className="text-body-sm text-muted">{nextTermin.zeitHinweis}</p>}
                      <p className="text-body-sm text-muted">{nextTermin.ort}{nextTermin.ortDetail && `, ${nextTermin.ortDetail}`}</p>
                    </div>
                  </div>
                </div>
              );
            })()}

            <p className="text-caption text-muted mt-6">Alle sind willkommen.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
