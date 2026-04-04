"use client";

import { useState, useEffect, useCallback } from "react";
import { bezirke, getAbgeordneteForBezirk, getEmailsForBezirk } from "@/data/abgeordnete";
import {
  templates,
  perspectives,
  getRandomTemplate,
  getTemplatesByPerspective,
  type Perspective,
  type EmailTemplate,
} from "@/data/templates";

const CC_EMAIL = "aktion@thf100.de";

function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}

function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`btn-copy${copied ? " copied" : ""}`}
      aria-label={label ?? "Kopieren"}
    >
      {copied ? "✓ Kopiert" : "Kopieren"}
    </button>
  );
}

export default function EmailTool() {
  const [bezirk, setBezirk] = useState("");
  const [template, setTemplate] = useState<EmailTemplate>(templates[0]);
  const [activePerspective, setActivePerspective] = useState<Perspective | null>(null);
  const [nachricht, setNachricht] = useState(templates[0].nachricht);

  // Assign random template on mount
  useEffect(() => {
    const t = getRandomTemplate();
    setTemplate(t);
    setNachricht(t.nachricht);
  }, []);

  const shuffle = useCallback(() => {
    const pool = activePerspective
      ? getTemplatesByPerspective(activePerspective)
      : templates;
    const filtered = pool.filter((t) => t.id !== template.id);
    const next = filtered[Math.floor(Math.random() * filtered.length)] ?? pool[0];
    setTemplate(next);
    setNachricht(next.nachricht);
  }, [template.id, activePerspective]);

  function selectPerspective(p: Perspective) {
    if (activePerspective === p) {
      setActivePerspective(null);
      return;
    }
    setActivePerspective(p);
    const pool = getTemplatesByPerspective(p);
    const next = pool[Math.floor(Math.random() * pool.length)];
    setTemplate(next);
    setNachricht(next.nachricht);
  }

  const abgeordnete = bezirk ? getAbgeordneteForBezirk(bezirk) : [];
  const emailsTo = bezirk ? getEmailsForBezirk(bezirk) : "";

  const mailtoHref = bezirk
    ? `mailto:${emailsTo}?cc=${encodeURIComponent(CC_EMAIL)}&subject=${encodeURIComponent(template.betreff)}&body=${encodeURIComponent(nachricht)}`
    : "#";

  const spdReps = abgeordnete.filter((a) => a.partei === "SPD");
  const cduReps = abgeordnete.filter((a) => a.partei === "CDU");

  return (
    <div className="flex flex-col gap-10">
      {/* Step 1: Bezirk */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="step-circle flex-shrink-0">1</div>
          <h2 className="text-h3 font-bold text-foreground">Wo wohnst du?</h2>
        </div>
        <p className="text-body-sm text-muted mb-4 ml-12">
          Wähl deinen Bezirk, dann siehst du die Abgeordneten aus deinem Wahlkreis.
        </p>
        <div className="ml-12 max-w-md">
          <label htmlFor="bezirk-select" className="label-eyebrow mb-2 block">
            Bezirk auswählen
          </label>
          <select
            id="bezirk-select"
            className="bezirk-select"
            value={bezirk}
            onChange={(e) => setBezirk(e.target.value)}
          >
            <option value="">Bitte wählen...</option>
            {bezirke.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Step 2: Abgeordnete (shown once bezirk selected) */}
      {bezirk && (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="step-circle flex-shrink-0">2</div>
            <h2 className="text-h3 font-bold text-foreground">Deine Abgeordneten</h2>
          </div>
          <p className="text-body-sm text-muted mb-4 ml-12">
            Diese CDU- und SPD-Abgeordneten aus {bezirk} sind relevant für den Gesetzentwurf.
          </p>
          <div className="ml-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {spdReps.length > 0 && (
              <div className="card">
                <p className="label-eyebrow-primary mb-3">SPD</p>
                <ul className="list-none m-0 p-0 flex flex-col gap-1">
                  {spdReps.map((a) => (
                    <li key={a.email} className="text-body-sm text-foreground">
                      {a.name}
                      <br />
                      <a
                        href={`mailto:${a.email}`}
                        className="text-caption text-muted hover:text-foreground transition-colors"
                      >
                        {a.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {cduReps.length > 0 && (
              <div className="card">
                <p className="label-eyebrow-primary mb-3">CDU</p>
                <ul className="list-none m-0 p-0 flex flex-col gap-1">
                  {cduReps.map((a) => (
                    <li key={a.email} className="text-body-sm text-foreground">
                      {a.name}
                      <br />
                      <a
                        href={`mailto:${a.email}`}
                        className="text-caption text-muted hover:text-foreground transition-colors"
                      >
                        {a.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Step 3: E-Mail Vorlage */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="step-circle flex-shrink-0">{bezirk ? "3" : "2"}</div>
          <h2 className="text-h3 font-bold text-foreground">Deine E-Mail-Vorlage</h2>
        </div>

        <div className="ml-12 flex flex-col gap-6">
          {/* Perspective chips */}
          <div>
            <p className="text-caption text-muted mb-3 font-semibold">Perspektive wählen (optional):</p>
            <div className="flex flex-wrap gap-2">
              {perspectives.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => selectPerspective(p)}
                  className={`chip${activePerspective === p ? " active" : ""}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Current perspective tag + shuffle */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <p className="text-caption text-muted">
              Aktuelle Perspektive:{" "}
              <span className="font-semibold text-foreground">{template.perspective}</span>
              <span className="text-muted"> · Vorlage {template.id} von {templates.length}</span>
            </p>
            <button
              type="button"
              onClick={shuffle}
              className="btn-copy"
              aria-label="Andere Vorlage laden"
            >
              ↻ Andere Vorlage
            </button>
          </div>

          {/* Betreff */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="label-eyebrow">Betreff</label>
              <CopyButton text={template.betreff} label="Betreff kopieren" />
            </div>
            <div className="email-block text-body-sm">{template.betreff}</div>
          </div>

          {/* An */}
          {bezirk && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="label-eyebrow">An</label>
                <CopyButton text={emailsTo} label="E-Mail-Adressen kopieren" />
              </div>
              <div className="email-block text-body-sm break-all">{emailsTo}</div>
            </div>
          )}

          {/* CC */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="label-eyebrow">CC</label>
              <CopyButton text={CC_EMAIL} label="CC kopieren" />
            </div>
            <div className="email-block text-body-sm">{CC_EMAIL}</div>
          </div>

          {/* Nachricht */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="nachricht" className="label-eyebrow">
                Nachricht
              </label>
              <CopyButton text={nachricht} label="Nachricht kopieren" />
            </div>
            <textarea
              id="nachricht"
              className="email-block w-full min-h-64 resize-y text-body-sm font-mono"
              value={nachricht}
              onChange={(e) => setNachricht(e.target.value)}
              aria-label="E-Mail-Text (bearbeitbar)"
            />
            <p className="text-caption text-muted mt-2">
              Du kannst den Text frei bearbeiten. Ersetze <strong>[Ihr Name]</strong> durch deinen Namen.
            </p>
          </div>

          {/* Send button */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <a
              href={mailtoHref}
              className={`btn-primary${!bezirk ? " opacity-50 pointer-events-none" : ""}`}
              aria-disabled={!bezirk}
              tabIndex={!bezirk ? -1 : undefined}
            >
              E-Mail in meinem Mailprogramm öffnen
            </a>
            {!bezirk && (
              <p className="text-caption text-muted self-center">
                Bitte zuerst einen Bezirk wählen.
              </p>
            )}
          </div>

          <p className="text-caption text-muted border-l-2 border-primary pl-3">
            Die Mail wird direkt aus deinem eigenen Postfach gesendet. Wir speichern keine Daten.
            Deine Vorlage ist eine von {templates.length} verschiedenen Varianten.
          </p>
        </div>
      </div>
    </div>
  );
}
