export type EventType = "Aktionstreffen" | "Demo" | "Veranstaltung" | "Sonstiges";

export type Termin = {
  datum: string;
  wochentag: string;
  titel: string;
  zeit: string;
  zeitHinweis?: string;
  ort: string;
  ortDetail?: string;
  typ: EventType;
  beschreibung?: string;
};

export const termine: Termin[] = [
  { datum: "2026-04-13", wochentag: "Montag", titel: "Aktionstreffen", zeit: "19:00 Uhr", zeitHinweis: "18:00 Uhr Treffen für Neue", ort: "Genezarethkirche", ortDetail: "Herrfurthplatz 14, Neukölln", typ: "Aktionstreffen" },
];

const MONTHS = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

export function formatDatumBadge(datum: string): { tag: string; monat: string } {
  const [, m, d] = datum.split("-");
  return { tag: String(parseInt(d, 10)), monat: MONTHS[parseInt(m, 10) - 1] };
}
