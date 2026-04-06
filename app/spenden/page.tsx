import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spenden  | 100% Tempelhofer Feld",
  description:
    "Unterstütze die Initiative mit einer Spende. Jeder Beitrag hilft bei rechtlichen Schritten, Öffentlichkeitsarbeit und dem Kampf für ein freies Tempelhofer Feld.",
  openGraph: {
    title: "Spenden  | 100% Tempelhofer Feld",
    description:
      "Unterstütze die Initiative mit einer Spende. Jeder Beitrag hilft bei rechtlichen Schritten, Öffentlichkeitsarbeit und dem Kampf für ein freies Tempelhofer Feld.",
    locale: "de_DE",
    type: "website",
  },
};

export default function SpendenPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="dot-grid section-pad">
          <div className="container-wide">
            <div className="max-w-2xl">
              <p className="label-eyebrow-primary mb-4">Unterstützen</p>
              <h1 className="text-hero font-black leading-heading tracking-heading text-foreground mb-4">
                Das Feld
                <br />
                <span className="highlight-yellow">braucht dich</span>
              </h1>
              <p className="text-lead leading-body-loose text-muted max-w-lg">
                Die Initiative 100% Tempelhofer Feld kämpft seit Jahren für ein freies Feld. Dafür braucht sie Ressourcen.
              </p>
            </div>
          </div>
        </section>

        {/* Why donate */}
        <section className="section-pad">
          <div className="container-text">
            <p className="label-eyebrow mb-3">Wohin geht das Geld?</p>
            <h2 className="text-h3 font-bold text-foreground mb-6">Was Spenden ermöglicht</h2>
            <div className="flex flex-col gap-4">
              <div className="card">
                <h3 className="text-body font-bold text-foreground mb-1">Rechtliche Schritte</h3>
                <p className="text-body-sm text-muted leading-body">
                  Anwälte, Klagen, Gutachten. Der rechtliche Kampf für das Feld kostet Geld.
                </p>
              </div>
              <div className="card">
                <h3 className="text-body font-bold text-foreground mb-1">Öffentlichkeitsarbeit</h3>
                <p className="text-body-sm text-muted leading-body">
                  Flyer, Aktionen, Veranstaltungen. Damit mehr Menschen wissen, was gerade passiert.
                </p>
              </div>
              <div className="card">
                <h3 className="text-body font-bold text-foreground mb-1">Aktionsarbeit</h3>
                <p className="text-body-sm text-muted leading-body">
                  Wöchentliche Treffen, Aktionsmaterial, Koordination. Die Initiative läuft zu großen Teilen ehrenamtlich.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Donate CTA */}
        <section className="section-pad bg-bg-light border-y border-border">
          <div className="container-text text-center">
            <h2 className="text-h3 font-bold text-foreground mb-4">Jetzt spenden</h2>
            <p className="text-body-sm text-muted mb-8 max-w-md mx-auto">
              Spenden gehen direkt an die Demokratische Initiative 100% Tempelhofer Feld e.V. über Betterplace.
            </p>
            <a
              href="https://www.betterplace.org/de/organisations/13806-100-tempelhofer-feld"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              Zur Spendenplattform Betterplace ↗
            </a>
            <p className="text-caption text-muted mt-4">
              Du wirst zu Betterplace.org weitergeleitet.
            </p>
          </div>
        </section>

        {/* Also */}
        <section className="section-pad">
          <div className="container-text text-center">
            <p className="label-eyebrow mb-3">Nicht nur Geld hilft</p>
            <h2 className="text-h3 font-bold text-foreground mb-4">Weitere Möglichkeiten</h2>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/aktion" className="btn-primary">
                Abgeordnete anschreiben
              </Link>
              <Link href="/fakten" className="btn-secondary">
                Fakten weitersagen
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
