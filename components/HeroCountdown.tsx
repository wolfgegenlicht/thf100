"use client";

import { useEffect, useState } from "react";

const BAUBEGINN = new Date("2026-07-01T00:00:00");

function getTimeLeft() {
  const diff = Math.max(0, BAUBEGINN.getTime() - Date.now());
  return {
    days:    Math.floor(diff / 86_400_000),
    hours:   Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

const UNITS = [
  { key: "days",    label: "Tage" },
  { key: "hours",   label: "Stunden" },
  { key: "minutes", label: "Minuten" },
  { key: "seconds", label: "Sekunden" },
] as const;

export default function HeroCountdown() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="hero-cd"
      aria-label={
        time
          ? `Countdown bis Baubeginn: Noch ${time.days} Tage, ${time.hours} Stunden, ${time.minutes} Minuten`
          : "Countdown bis Baubeginn: 1. Juli 2026"
      }
    >
      <p className="hero-cd__eyebrow" aria-hidden="true">Bis Baubeginn</p>
      <div className="hero-cd__grid" aria-hidden="true">
        {UNITS.map(({ key, label }) => (
          <div key={key} className="hero-cd__unit">
            <span className="hero-cd__num">
              {time ? String(time[key]).padStart(2, "0") : "––"}
            </span>
            <span className="hero-cd__label">{label}</span>
          </div>
        ))}
      </div>
      <p className="hero-cd__date" aria-hidden="true">Baubeginn: 1. Juli 2026</p>
    </div>
  );
}
