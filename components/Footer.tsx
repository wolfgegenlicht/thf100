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
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/thf100"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label="Instagram (öffnet in neuem Tab)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/thf100"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label="Facebook (öffnet in neuem Tab)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://bsky.app/profile/tempelhoferfeld100.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label="Bluesky (öffnet in neuem Tab)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.204-.659-.299-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/>
                </svg>
              </a>
              <a
                href="https://chaos.social/@thf100"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label="Mastodon (öffnet in neuem Tab)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/>
                </svg>
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
                <Link href="/#termine" className="text-body-sm text-muted hover:text-foreground transition-colors no-underline">
                  Termine
                </Link>
              </li>
              <li>
                <Link href="/presse" className="text-body-sm text-muted hover:text-foreground transition-colors no-underline">
                  Presse
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-body-sm text-muted hover:text-foreground transition-colors no-underline">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/spenden" className="text-body-sm text-muted hover:text-foreground transition-colors no-underline">
                  Spenden
                </Link>
              </li>
              <li>
                <Link href="/volksentscheid" className="text-body-sm text-muted hover:text-foreground transition-colors no-underline">
                  Volksentscheid 2014
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="text-body-sm text-muted hover:text-foreground transition-colors no-underline">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-body-sm text-muted hover:text-foreground transition-colors no-underline">
                  Datenschutz
                </Link>
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
            <p className="text-caption text-muted mt-4">
              Newsletter: 1.100+ Abonnent*innen
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center">
          <p className="text-caption text-muted">
            © 2026 Demokratische Initiative 100% Tempelhofer Feld e.V.
          </p>
          <p className="text-caption text-muted">
            Mit ♥ für das Tempelhofer Feld gebaut von{" "}
            <a
              href="https://www.wolfgegenlicht.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-semibold hover:text-primary transition-colors"
            >
              wolfgegenlicht.de
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
