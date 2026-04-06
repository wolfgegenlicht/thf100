import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutz | 100% Tempelhofer Feld",
  description: "Datenschutzerklärung der Demokratischen Initiative 100% Tempelhofer Feld e.V.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        <section className="section-pad">
          <div className="container-text">
            <h1 className="text-h2 font-black leading-heading tracking-heading text-foreground mb-10">
              Datenschutz
            </h1>

            <div className="flex flex-col gap-8 text-body-sm text-muted leading-body">

              <p>
                100% Tempelhofer Feld legt großen Wert auf den Schutz personenbezogener Daten und verpflichtet sich zur Einhaltung der gesetzlichen Bestimmungen des Bundesdatenschutzgesetzes (BDSG) sowie des Telemediengesetzes (TMG). Die Daten werden ausschließlich bei 100% Tempelhofer Feld verwendet und nicht an Dritte weitergegeben oder verkauft.
              </p>

              <div>
                <h2 className="text-h4 font-bold text-foreground mb-3">Protokolldateien (Logfiles)</h2>
                <p className="mb-3">
                  Bei Aufrufen dieser Website werden automatisch technische Informationen in den Server-Logfiles gespeichert: Browsertyp, Betriebssystem, Referrer-URL, IP-Adresse und Uhrzeit der Serveranfrage.
                </p>
                <p className="mb-3">
                  IP-Adressen werden anonymisiert gespeichert. Die Logfiles werden nach 7 Tagen automatisch gelöscht. Die Daten sind nicht personenbezogen zuordbar und werden nicht mit anderen Datenquellen abgeglichen.
                </p>
              </div>

              <div>
                <h2 className="text-h4 font-bold text-foreground mb-3">Kontaktanfragen</h2>
                <p>
                  Bei Kontaktaufnahme per E-Mail werden Ihre Angaben zur Bearbeitung Ihres Anliegens gespeichert. Nach Beendigung der Bearbeitung werden die Daten gelöscht. Sie haben jederzeit das Recht auf Auskunft, Widerruf, Korrektur und Löschung der personenbezogenen Daten.
                </p>
              </div>

              <div>
                <h2 className="text-h4 font-bold text-foreground mb-3">Cookies</h2>
                <p>
                  Diese Website verwendet ausschließlich technische Cookies, die für den reibungslosen Betrieb notwendig sind. Es werden keine Tracking-Cookies eingesetzt.
                </p>
              </div>

              <div>
                <h2 className="text-h4 font-bold text-foreground mb-3">Google Analytics</h2>
                <p>
                  Aus Datenschutzgründen wird auf dieser Website auf den Einsatz von Google Analytics verzichtet.
                </p>
              </div>

              <div>
                <h2 className="text-h4 font-bold text-foreground mb-3">Verarbeitung von Daten öffentlich tätiger Personen</h2>
                <p>
                  Im Rahmen unserer inhaltlichen Arbeit verarbeiten wir personenbezogene Daten von Personen mit öffentlichen Funktionen, insbesondere von politischen Mandatsträgern (Name, Funktion, Mandat, öffentliches Abstimmungsverhalten). Die Verarbeitung erfolgt ausschließlich auf Grundlage öffentlich zugänglicher Informationen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an politischer Information und öffentlicher Meinungsbildung).
                </p>
              </div>

              <div>
                <h2 className="text-h4 font-bold text-foreground mb-3">Externe Links</h2>
                <p>
                  Diese Website enthält Links zu externen Plattformen ohne Zählpixel oder Tracker. Beim Aufruf unserer Website werden keine Inhalte dieser Plattformen eingebunden und keine personenbezogenen Daten an diese Anbieter übermittelt.
                </p>
              </div>

              <div>
                <h2 className="text-h4 font-bold text-foreground mb-3">Ihre Rechte</h2>
                <p className="mb-3">
                  Sie haben das Recht auf Auskunft, Widerruf, Recht auf Einschränkung der Verarbeitung sowie das Recht, bei der zuständigen Aufsichtsbehörde eine Beschwerde einzureichen.
                </p>
                <p className="mb-3">
                  Kontakt:{" "}
                  <a href="mailto:info@thf100.de" className="text-foreground underline">info@thf100.de</a>
                  {" "}/ 100% Tempelhofer Feld e.V., Lisa Wiedekamm, Mahlower Str. 27, 12049 Berlin
                </p>
                <p>
                  Aufsichtsbehörde:{" "}
                  <a href="https://www.datenschutz-berlin.de" target="_blank" rel="noopener noreferrer" className="text-foreground underline">
                    Landesbeauftragte für Datenschutz und Informationsfreiheit Berlin ↗
                  </a>
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
