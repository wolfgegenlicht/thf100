import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Materialien | 100% Tempelhofer Feld",
  description:
    "Flyer, Plakate, Aufkleber, Postkarten und Logos der Initiative 100% Tempelhofer Feld zum Download.",
  openGraph: {
    title: "Materialien | 100% Tempelhofer Feld",
    description:
      "Flyer, Plakate, Aufkleber, Postkarten und Logos der Initiative 100% Tempelhofer Feld zum Download.",
    locale: "de_DE",
    type: "website",
  },
};

type Material = {
  titel: string;
  datei: string;
  groesse: string;
  typ: string;
};

type Kategorie = {
  id: string;
  name: string;
  beschreibung?: string;
  materialien: Material[];
};

const kategorien: Kategorie[] = [
  {
    id: "flyer",
    name: "Flyer",
    materialien: [
      {
        titel: "Hände weg vom Feld",
        datei: "/materialien/haende-weg-vom-feld.pdf",
        groesse: "1,5 MB",
        typ: "PDF",
      },
      {
        titel: "Wem gehört das Feld?",
        datei: "/materialien/wem-gehoert-das-feld.pdf",
        groesse: "1,8 MB",
        typ: "PDF",
      },
      {
        titel: "Bezahlbares Wohnen auf dem Tempelhofer Feld?",
        datei: "/materialien/flyer-aerzte-konzert.pdf",
        groesse: "402 KB",
        typ: "PDF",
      },
      {
        titel: "Tempelhofer Feld soll UNESCO Weltkulturerbe werden",
        datei: "/materialien/unesco-weltkulturerbe.pdf",
        groesse: "959 KB",
        typ: "PDF",
      },
    ],
  },
  {
    id: "plakate",
    name: "Plakate",
    beschreibung: "Historische Plakate aus dem Volksentscheid 2014",
    materialien: [
      {
        titel: "Plakat: Weite sehen",
        datei: "/materialien/plakat-weite-sehen.pdf",
        groesse: "6,4 MB",
        typ: "PDF",
      },
      {
        titel: "Plakat: Vögeln lauschen",
        datei: "/materialien/plakat-voegeln-lauschen.pdf",
        groesse: "6,3 MB",
        typ: "PDF",
      },
      {
        titel: "Plakat: Wiese riechen",
        datei: "/materialien/plakat-wiese-riechen.pdf",
        groesse: "9,0 MB",
        typ: "PDF",
      },
    ],
  },
  {
    id: "aufkleber",
    name: "Aufkleber",
    materialien: [
      {
        titel: "I Love 100% THF",
        datei: "/materialien/i-love-thf100.pdf",
        groesse: "588 KB",
        typ: "PDF",
      },
      {
        titel: "Eine Liebe, die ewig hält: THF Herz",
        datei: "/materialien/eine-liebe-die-ewig-haelt-herz.pdf",
        groesse: "1,0 MB",
        typ: "PDF",
      },
      {
        titel: "Hände weg vom Feld (Konzert-Edition)",
        datei: "/materialien/sticker-aerzte-konzert.pdf",
        groesse: "573 KB",
        typ: "PDF",
      },
    ],
  },
  {
    id: "postkarten",
    name: "Postkarten",
    materialien: [
      {
        titel: "Das Feld braucht dich mal wieder",
        datei: "/materialien/das-feld-braucht-dich-mal-wieder.pdf",
        groesse: "640 KB",
        typ: "PDF",
      },
      {
        titel: "Eine Liebe, die ewig hält: Das Tempelhofer Feld",
        datei: "/materialien/eine-liebe-die-ewig-haelt.pdf",
        groesse: "629 KB",
        typ: "PDF",
      },
    ],
  },
  {
    id: "logos",
    name: "Logos & CI",
    beschreibung: "Für Presse, Printmedien und digitale Nutzung",
    materialien: [
      {
        titel: "Logo 800 × 800 px",
        datei: "/materialien/logo-800x800.jpg",
        groesse: "242 KB",
        typ: "JPG",
      },
      {
        titel: "Logo mit Internetadresse (Vektorgrafik)",
        datei: "/materialien/logo-mit-internet.ai",
        groesse: "123 KB",
        typ: "AI",
      },
      {
        titel: "Logo ohne Internetadresse (Vektorgrafik)",
        datei: "/materialien/logo-ohne-internet.ai",
        groesse: "111 KB",
        typ: "AI",
      },
    ],
  },
  {
    id: "sonstiges",
    name: "Sonstiges",
    materialien: [
      {
        titel: "Präsentation zum Tempelhofer Feld",
        datei: "/materialien/praesentation-aktuelles.pdf",
        groesse: "1,9 MB",
        typ: "PDF",
      },
      {
        titel: "Shop-Flyer DIN A3",
        datei: "/materialien/shop-flyer-dina3.pdf",
        groesse: "741 KB",
        typ: "PDF",
      },
    ],
  },
];

function TypBadge({ typ }: { typ: string }) {
  return (
    <span className="mat-typ-badge" data-typ={typ}>
      {typ}
    </span>
  );
}

export default function MaterialienPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Header */}
        <section className="dot-grid section-pad border-b border-border">
          <div className="container-wide">
            <div className="presse-header">
              <div>
                <p className="label-eyebrow-primary mb-4">Materialien</p>
                <h1 className="text-hero font-black leading-heading tracking-heading text-foreground">
                  Drucken,<br />
                  <span className="highlight-yellow">verteilen, kleben</span>
                </h1>
              </div>
              <p className="presse-header__sub text-lead leading-body-loose text-muted">
                Flyer, Plakate, Aufkleber und mehr, kostenlos zum Download. Zeig Haltung, bring das Feld in die Stadt.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        {kategorien.map((kat) => (
          <section key={kat.id} id={kat.id} className="mat-section">
            <div className="container-wide">
              <div className="mat-section__header">
                <h2 className="mat-section__title">{kat.name}</h2>
                {kat.beschreibung && (
                  <p className="mat-section__desc">{kat.beschreibung}</p>
                )}
              </div>
              <ul className="mat-list" role="list">
                {kat.materialien.map((m) => (
                  <li key={m.datei} className="mat-item">
                    <div className="mat-item__info">
                      <span className="mat-item__titel">{m.titel}</span>
                      <span className="mat-item__meta">
                        <TypBadge typ={m.typ} />
                        <span className="mat-item__groesse">{m.groesse}</span>
                      </span>
                    </div>
                    <a
                      href={m.datei}
                      download
                      className="mat-item__dl"
                      aria-label={`${m.titel} herunterladen`}
                    >
                      Herunterladen ↓
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        {/* Call to action */}
        <section className="section-pad border-t border-border bg-bg-light">
          <div className="container-wide">
            <div className="max-w-xl">
              <p className="label-eyebrow mb-3">Aktiv werden</p>
              <h2 className="text-h3 font-bold text-foreground mb-4">
                Materialien fehlen oder etwas ist unklar?
              </h2>
              <p className="text-body-sm text-muted leading-body mb-5">
                Schreib uns, wenn du Materialien in anderen Formaten brauchst oder Fragen zur Nutzung hast.
              </p>
              <a href="mailto:info@thf100.de" className="btn-primary">
                info@thf100.de
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
