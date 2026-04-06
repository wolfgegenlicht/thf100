import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fanartikel | 100% Tempelhofer Feld",
  description:
    "Unterstütze die Initiative 100% Tempelhofer Feld mit dem Kauf von Fanartikeln. Tote Bags, Aufkleber, Postkarten, Hoodies und mehr.",
  openGraph: {
    title: "Fanartikel | 100% Tempelhofer Feld",
    description:
      "Unterstütze die Initiative mit dem Kauf von Fanartikeln. Der Erlös fließt direkt in die Kampagne.",
    locale: "de_DE",
    type: "website",
  },
};

export default function FanartikelPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Header */}
        <section className="dot-grid section-pad border-b border-border">
          <div className="container-wide">
            <div className="presse-header">
              <div>
                <p className="label-eyebrow-primary mb-4">Fanartikel & Shop</p>
                <h1 className="text-hero font-black leading-heading tracking-heading text-foreground">
                  Zeig, dass das Feld<br />
                  <span className="highlight-yellow">dir gehört</span>
                </h1>
              </div>
              <p className="presse-header__sub text-lead leading-body-loose text-muted">
                Jeder Kauf unterstützt direkt die Kampagne für das Tempelhofer Feld. Kein Investor, keine Agentur, nur Berliner Stadtgesellschaft.
              </p>
            </div>
          </div>
        </section>

        {/* Spreadshop — moved above email section per user request */}
        <section className="section-pad border-b border-border">
          <div className="container-wide">
            <div className="fan-section-header">
              <h2 className="fan-section-title">Im Online-Shop</h2>
              <p className="fan-section-desc">Direkt bestellen, nach Hause geliefert.</p>
            </div>

            <div className="fan-grid">
              <article className="fan-card">
                <div className="fan-card__img-wrap">
                  <Image
                    src="/images/fanartikel/turnbeutel.jpg"
                    alt="100% THF Turnbeutel"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="fan-card__body">
                  <span className="fan-card__shop-tag">Spreadshop</span>
                  <h3 className="fan-card__title">Turnbeutel & mehr</h3>
                  <p className="fan-card__desc">
                    Turnbeutel, T-Shirts, Hoodies und weitere Artikel mit dem 100% THF Logo im offiziellen Spreadshop.
                  </p>
                  <a
                    href="https://thf100.myspreadshop.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fan-card__cta fan-card__cta--ext"
                  >
                    Zum Spreadshop ↗
                  </a>
                </div>
              </article>

              <article className="fan-card">
                <div className="fan-card__img-wrap">
                  <Image
                    src="/images/fanartikel/hoodie.jpg"
                    alt="100% THF Hoodie"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="fan-card__body">
                  <span className="fan-card__shop-tag">Spreadshop</span>
                  <h3 className="fan-card__title">Hoodie</h3>
                  <p className="fan-card__desc">
                    Der Klassiker für Feldfans: Hoodie mit dem Kampagnen-Logo. Verschiedene Farben und Größen verfügbar.
                  </p>
                  <a
                    href="https://thf100.myspreadshop.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fan-card__cta fan-card__cta--ext"
                  >
                    Zum Spreadshop ↗
                  </a>
                </div>
              </article>

              <article className="fan-card">
                <div className="fan-card__img-wrap">
                  <Image
                    src="/images/fanartikel/reflective-thf.png"
                    alt="Reflective Berlin THF Kollektion"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="fan-card__body">
                  <span className="fan-card__shop-tag">Reflective Berlin</span>
                  <h3 className="fan-card__title">THF Kollektion</h3>
                  <p className="fan-card__desc">
                    Exklusive THF-Artikel in Kooperation mit Reflective Berlin, dem Berliner Label für Stadtkultur und Bewegung.
                  </p>
                  <a
                    href="https://reflective.berlin/search?q=thf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fan-card__cta fan-card__cta--ext"
                  >
                    Zum Reflective Shop ↗
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Per E-Mail bestellbar */}
        <section className="section-pad border-b border-border">
          <div className="container-wide">
            <div className="fan-section-header">
              <h2 className="fan-section-title">Per E-Mail bestellen</h2>
              <p className="fan-section-desc">
                Schreib uns an{" "}
                <a href="mailto:info@thf100.de" className="presse-ext-link">
                  info@thf100.de
                </a>{" "}
                mit Artikel, Menge und Lieferadresse.
              </p>
            </div>

            <div className="fan-grid">
              {/* Tote Bag */}
              <article className="fan-card">
                <div className="fan-card__img-wrap">
                  <Image
                    src="/images/fanartikel/baumwollbeutel.png"
                    alt="Grüner 100% Tempelhofer Feld Stoffbeutel"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="fan-card__body">
                  <h3 className="fan-card__title">Baumwollbeutel</h3>
                  <p className="fan-card__desc">
                    Die legendären grünen 100% Stoffbeutel sind zurück. Aus Baumwolle, mit dem Kampagnen-Logo.
                  </p>
                  <a href="mailto:info@thf100.de?subject=Bestellung: Baumwollbeutel" className="fan-card__cta">
                    Jetzt bestellen →
                  </a>
                </div>
              </article>

              {/* Aufkleber */}
              <article className="fan-card">
                <div className="fan-card__img-wrap fan-card__img-wrap--sticker">
                  <Image
                    src="/materialien/logo-800x800.jpg"
                    alt="100% Tempelhofer Feld Logo Aufkleber"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="fan-card__body">
                  <h3 className="fan-card__title">Aufkleber</h3>
                  <p className="fan-card__desc">
                    Das Kampagnen-Logo als runder Aufkleber in zwei Größen: 3 cm und 5 cm Durchmesser. Für Fenster, Fahrrad, überall.
                  </p>
                  <div className="fan-card__variants">
                    <span className="fan-variant">3 cm</span>
                    <span className="fan-variant">5 cm</span>
                  </div>
                  <a href="mailto:info@thf100.de?subject=Bestellung: Aufkleber" className="fan-card__cta">
                    Jetzt bestellen →
                  </a>
                </div>
              </article>

              {/* Postkarten */}
              <article className="fan-card fan-card--wide">
                <div className="fan-card__postcards">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="fan-card__postcard-img">
                      <Image
                        src={`/images/fanartikel/postkarte-${n}.jpg`}
                        alt={`Postkarte Motiv ${n}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 200px"
                      />
                    </div>
                  ))}
                </div>
                <div className="fan-card__body">
                  <h3 className="fan-card__title">Postkarten</h3>
                  <p className="fan-card__desc">
                    Vier Fotomotive vom Tempelhofer Feld. Zum Verschicken, Auslegen in Cafés und als Zeichen der Solidarität.
                  </p>
                  <a href="mailto:info@thf100.de?subject=Bestellung: Postkarten" className="fan-card__cta">
                    Jetzt bestellen →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Support note */}
        <section className="section-pad bg-green-light">
          <div className="container-wide">
            <div className="fan-support">
              <div>
                <p className="label-eyebrow-primary mb-3">Warum kaufen?</p>
                <h2 className="text-h3 font-bold text-foreground mb-4">
                  Jeder Kauf ist ein Statement.
                </h2>
                <p className="text-body-sm leading-body text-muted max-w-xl">
                  Der Erlös aus dem Direktverkauf fließt vollständig in die Kampagne für den Erhalt des Tempelhofer Feldes. Mit jedem Artikel machst du die Initiative sichtbar und hilfst, die Kosten für Öffentlichkeitsarbeit, Veranstaltungen und politische Arbeit zu tragen.
                </p>
              </div>
              <a href="mailto:info@thf100.de" className="btn-primary fan-support__cta">
                Kontakt & Bestellung
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
