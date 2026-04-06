import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pressemitteilungen, formatPresseDatum } from "@/data/presse";

export const metadata: Metadata = {
  title: "Presse | 100% Tempelhofer Feld",
  description:
    "Pressemitteilungen und Stellungnahmen der Demokratischen Initiative 100% Tempelhofer Feld.",
  openGraph: {
    title: "Presse | 100% Tempelhofer Feld",
    description:
      "Pressemitteilungen und Stellungnahmen der Demokratischen Initiative 100% Tempelhofer Feld.",
    locale: "de_DE",
    type: "website",
  },
};

export default function PressePage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Page header */}
        <section className="dot-grid section-pad border-b border-border">
          <div className="container-wide">
            <div className="presse-header">
              <div>
                <p className="label-eyebrow-primary mb-4">Presse</p>
                <h1 className="text-hero font-black leading-heading tracking-heading text-foreground">
                  Pressemitteilungen<br />
                  <span className="highlight-yellow">und Stellungnahmen</span>
                </h1>
              </div>
              <p className="presse-header__sub text-lead leading-body-loose text-muted">
                Die Initiative 100% Tempelhofer Feld äußert sich regelmäßig zu aktuellen
                Entwicklungen. {pressemitteilungen.length} Mitteilungen seit 2023.
              </p>
            </div>
          </div>
        </section>

        {/* Press release list */}
        <section className="section-pad">
          <div className="container-wide">
            <ul className="presse-list" role="list">
              {pressemitteilungen.map((pm, i) => (
                <li key={pm.slug} className={`presse-item${i === 0 ? " presse-item--featured" : ""}`}>
                  <time className="presse-item__date" dateTime={pm.datum}>
                    {formatPresseDatum(pm.datum)}
                  </time>
                  <div className="presse-item__body">
                    <Link href={`/presse/${pm.slug}`} className="presse-item__title-link">
                      <h2 className="presse-item__title">{pm.titel}</h2>
                    </Link>
                    <p className="presse-item__teaser">{pm.teaser}</p>
                    <Link href={`/presse/${pm.slug}`} className="presse-item__cta">
                      Mitteilung lesen →
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pressespiegel + Kontakt */}
        <section className="section-pad border-t border-border bg-bg-light">
          <div className="container-wide">
            <div className="presse-footer-grid">
              <div>
                <p className="label-eyebrow mb-3">Externe Berichterstattung</p>
                <h2 className="text-h3 font-bold text-foreground mb-4">Pressespiegel</h2>
                <p className="text-body-sm text-muted leading-body mb-5">
                  Über 46 Seiten externe Medienberichterstattung zum Tempelhofer Feld im Archiv.
                </p>
              </div>
              <div className="presse-footer-divider" aria-hidden />
              <div>
                <p className="label-eyebrow mb-3">Pressekontakt</p>
                <h2 className="text-h3 font-bold text-foreground mb-4">Kontakt für Medien</h2>
                <p className="text-body-sm text-muted leading-body mb-5">
                  Anfragen, Interviews und Statements auf Deutsch, Englisch, Spanisch und Französisch.
                </p>
                <a href="mailto:info@thf100.de" className="btn-primary">
                  info@thf100.de
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
