"use client";

import { useEffect, useState } from "react";

const BAUBEGINN = new Date("2026-07-01T00:00:00");

function getDaysLeft() {
  const now = new Date();
  const diff = BAUBEGINN.getTime() - now.getTime();
  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
}

export default function CountdownBar() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    setDays(getDaysLeft());
    const timer = setInterval(() => setDays(getDaysLeft()), 60_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="urgency-bar" role="status" aria-live="polite" aria-atomic="true">
      Achtung: Die Grillwiese soll bebaut werden.{" "}
      {days !== null && (
        <span className="urgency-countdown">
          Noch <strong>{days} Tage</strong> bis zum Baubeginn.
        </span>
      )}
    </div>
  );
}
