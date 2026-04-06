import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmailTool from "@/components/EmailTool";
import { getTemplatesByLength } from "@/data/templates";

export const metadata: Metadata = {
  title: "Abgeordnete kontaktieren  | 100% Tempelhofer Feld",
  description:
    "Schreib jetzt deinen Abgeordneten. Wähl deinen Bezirk und bekomm eine fertige E-Mail-Vorlage, alle Adressen schon eingetragen.",
  openGraph: {
    title: "Abgeordnete kontaktieren  | 100% Tempelhofer Feld",
    description:
      "Schreib jetzt deinen Abgeordneten. Wähl deinen Bezirk und bekomm eine fertige E-Mail-Vorlage, alle Adressen schon eingetragen.",
    locale: "de_DE",
    type: "website",
  },
};

const langCount = getTemplatesByLength("lang").length;

export default function AktionPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="dot-grid section-pad">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto text-center">
              <p className="label-eyebrow-primary mb-4">Aktion</p>
              <h1 className="text-hero font-black leading-heading tracking-heading text-foreground mb-4">
                Schreib deinen
                <br />
                <span className="highlight-green">Abgeordneten</span>
              </h1>
              <p className="text-lead leading-body-loose text-muted">
                Du musst kein Experte sein. Deine Meinung zählt. Eine persönliche Mail zeigt Abgeordneten, was Menschen in ihrem Wahlkreis bewegt.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-bg-light border-y border-border py-6">
          <div className="container-wide">
            <div className="flex flex-wrap gap-6 md:gap-12">
              <div className="flex items-center gap-3">
                <div className="step-circle text-body-sm flex-shrink-0">1</div>
                <p className="text-body-sm font-semibold text-foreground">Bezirk wählen</p>
              </div>
              <div className="text-muted hidden md:block self-center">→</div>
              <div className="flex items-center gap-3">
                <div className="step-circle text-body-sm flex-shrink-0">2</div>
                <p className="text-body-sm font-semibold text-foreground">Vorlage anpassen</p>
              </div>
              <div className="text-muted hidden md:block self-center">→</div>
              <div className="flex items-center gap-3">
                <div className="step-circle text-body-sm flex-shrink-0">3</div>
                <p className="text-body-sm font-semibold text-foreground">E-Mail senden</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tool */}
        <section className="section-pad">
          <div className="container-wide max-w-3xl">
            <EmailTool />
          </div>
        </section>

        {/* Why it matters */}
        <section className="section-pad bg-bg-light border-t border-border">
          <div className="container-text">
            <h2 className="text-h3 font-bold text-foreground mb-4">Warum das wirkt</h2>
            <div className="flex flex-col gap-4 text-body-sm text-muted leading-body">
              <p>
                Abgeordnete erhalten viele automatisierte Massenmails. Was auffällt, sind persönliche Nachrichten von echten Menschen aus ihrem Wahlkreis.
              </p>
              <p>
                Deshalb nutzt dieses Tool {langCount} verschiedene ausführliche Vorlagen mit unterschiedlichen Themen und Perspektiven. Keine zwei Mails klingen gleich. Und du kannst die Vorlage jederzeit bearbeiten und deinen eigenen Ton reinbringen.
              </p>
              <p>
                Die Mail geht direkt aus deinem eigenen Postfach. Keine Zwischenstufe, keine gespeicherten Daten.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
