import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container-wide flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-h4 text-foreground no-underline"
          aria-label="100% Tempelhofer Feld — Startseite"
        >
          <span className="inline-block w-8 h-8 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
          <span>100% Tempelhofer Feld</span>
        </Link>

        <nav aria-label="Hauptnavigation">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            <li>
              <Link
                href="/fakten"
                className="text-body-sm font-semibold text-muted hover:text-foreground transition-colors no-underline"
              >
                Fakten
              </Link>
            </li>
            <li>
              <Link
                href="/aktion"
                className="btn-primary text-body-sm py-2 px-5"
              >
                Jetzt schreiben
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
