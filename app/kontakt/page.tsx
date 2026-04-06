import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kontakt | 100% Tempelhofer Feld",
  description:
    "Kontakt zur Demokratischen Initiative 100% Tempelhofer Feld e.V. Schreib uns auf Deutsch, Englisch, Spanisch oder Französisch.",
  openGraph: {
    title: "Kontakt | 100% Tempelhofer Feld",
    description:
      "Kontakt zur Demokratischen Initiative 100% Tempelhofer Feld e.V.",
    locale: "de_DE",
    type: "website",
  },
};

const team = [
  { name: "Mareike Witt", tel: "0178 923 88 04" },
  { name: "Lisa Wiedekamm", tel: "0176 96233838" },
  { name: "Anky Brandt", tel: "0176 43488268" },
  { name: "Anita Möller", tel: "0172 3968685" },
  { name: "Christoph Witt", tel: "0170 654 3511" },
];

export default function KontaktPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="dot-grid section-pad">
          <div className="container-wide">
            <div className="max-w-2xl">
              <p className="label-eyebrow-primary mb-4">Kontakt</p>
              <h1 className="text-hero font-black leading-heading tracking-heading text-foreground mb-4">
                Schreib
                <span className="highlight-yellow">uns</span>
              </h1>
              <p className="text-lead leading-body-loose text-muted max-w-lg">
                Wir antworten auf Deutsch, Englisch, Spanisch und Französisch.
              </p>
            </div>
          </div>
        </section>

        {/* Email */}
        <section className="section-pad">
          <div className="container-wide">
            <div className="max-w-2xl">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-10">
                <div className="card">
                  <p className="label-eyebrow mb-2">Allgemein</p>
                  <a
                    href="mailto:info@thf100.de"
                    className="text-h4 font-bold text-foreground hover:text-primary transition-colors"
                  >
                    info@thf100.de
                  </a>
                  <p className="text-caption text-muted mt-2">
                    Für alle Anfragen, Fragen und Anmerkungen.
                  </p>
                </div>
                <div className="card">
                  <p className="label-eyebrow mb-2">Vorstand</p>
                  <a
                    href="mailto:vorstand@thf100.de"
                    className="text-h4 font-bold text-foreground hover:text-primary transition-colors"
                  >
                    vorstand@thf100.de
                  </a>
                  <p className="text-caption text-muted mt-2">
                    Für offizielle und rechtliche Angelegenheiten.
                  </p>
                </div>
              </div>

              {/* Team */}
              <p className="label-eyebrow mb-4">Ansprechpersonen</p>
              <div className="flex flex-col gap-3">
                {team.map((person) => (
                  <div key={person.name} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <span className="text-body-sm font-semibold text-foreground">{person.name}</span>
                    <a
                      href={`tel:${person.tel.replace(/\s/g, "")}`}
                      className="text-body-sm text-muted hover:text-foreground transition-colors"
                    >
                      {person.tel}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* In person */}
        <section className="section-pad bg-bg-light border-t border-border">
          <div className="container-wide">
            <div className="max-w-2xl">
              <div className="card">
                <p className="label-eyebrow-primary mb-2">Persönlich</p>
                <h2 className="text-h4 font-bold text-foreground mb-3">Komm zum Aktionstreffen</h2>
                <p className="text-body-sm text-muted leading-body mb-4">
                  Der schnellste Weg, uns kennenzulernen. Jeden zweiten Montag, 19:00 Uhr in der Genezarethkirche am Herrfurthplatz 14, Neukölln. Neue kommen ab 18:00 Uhr.
                </p>
                <Link href="/termine" className="btn-secondary text-body-sm">
                  Alle Termine
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
