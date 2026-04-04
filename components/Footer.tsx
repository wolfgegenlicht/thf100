import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-light">
      <div className="container-wide section-pad">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-6 h-6 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
              <span className="font-bold text-body text-foreground">100% Tempelhofer Feld</span>
            </div>
            <p className="text-caption text-muted leading-body">
              Demokratische Initiative 100% Tempelhofer Feld e.V.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/thf100"
                target="_blank"
                rel="noopener noreferrer"
                className="text-caption text-muted hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/thf100"
                target="_blank"
                rel="noopener noreferrer"
                className="text-caption text-muted hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="https://bsky.app/profile/tempelhoferfeld100.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-caption text-muted hover:text-foreground transition-colors"
                aria-label="Bluesky"
              >
                Bluesky
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer-Navigation">
            <p className="label-eyebrow mb-4">Navigation</p>
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              <li>
                <Link href="/" className="text-body-sm text-muted hover:text-foreground transition-colors no-underline">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/aktion" className="text-body-sm text-muted hover:text-foreground transition-colors no-underline">
                  Abgeordnete kontaktieren
                </Link>
              </li>
              <li>
                <Link href="/fakten" className="text-body-sm text-muted hover:text-foreground transition-colors no-underline">
                  Fakten
                </Link>
              </li>
              <li>
                <Link href="/spenden" className="text-body-sm text-muted hover:text-foreground transition-colors no-underline">
                  Spenden
                </Link>
              </li>
              <li>
                <a
                  href="https://www.thf100.de/impressum.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm text-muted hover:text-foreground transition-colors no-underline"
                >
                  Impressum
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA */}
          <div>
            <p className="label-eyebrow mb-4">Jetzt helfen</p>
            <p className="text-body-sm text-muted leading-body mb-4">
              Die Grillwiese soll ab Juli 2026 bebaut werden. Jede Mail an einen Abgeordneten zählt.
            </p>
            <Link href="/aktion" className="btn-primary text-body-sm">
              Jetzt schreiben
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center">
          <p className="text-caption text-muted">
            © 2026 Demokratische Initiative 100% Tempelhofer Feld e.V.
          </p>
          <p className="text-caption text-muted">
            Gebaut von{" "}
            <a
              href="https://wolfgegenlicht.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-semibold hover:text-primary transition-colors"
            >
              Wolfgang Stefani
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
