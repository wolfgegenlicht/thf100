"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
<div className="container-wide flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-h4 text-foreground no-underline"
          aria-label="100% Tempelhofer Feld, Startseite"
        >
          <Image
            src="/images/logo-thf100.webp"
            alt=""
            width={70}
            height={70}
            className="flex-shrink-0"
            aria-hidden="true"
          />
          <span>100% Tempelhofer Feld</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block" aria-label="Hauptnavigation">
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
                href="/#termine"
                className="text-body-sm font-semibold text-muted hover:text-foreground transition-colors no-underline"
              >
                Termine
              </Link>
            </li>
            <li>
              <Link
                href="/presse"
                className="text-body-sm font-semibold text-muted hover:text-foreground transition-colors no-underline"
              >
                Presse
              </Link>
            </li>
            <li>
              <Link
                href="/materialien"
                className="text-body-sm font-semibold text-muted hover:text-foreground transition-colors no-underline"
              >
                Materialien
              </Link>
            </li>
            <li>
              <Link
                href="/fanartikel"
                className="text-body-sm font-semibold text-muted hover:text-foreground transition-colors no-underline"
              >
                Fanartikel
              </Link>
            </li>
            <li>
              <Link
                href="/aktion"
                className="btn-primary text-body-sm py-2 px-5"
              >
                Jetzt E-Mail schreiben
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl text-foreground hover:bg-bg-light transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-haspopup="menu"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-border bg-white"
          aria-label="Mobile Navigation"
        >
          <ul className="list-none m-0 p-4 flex flex-col gap-1">
            <li>
              <Link
                href="/fakten"
                onClick={close}
                className="flex items-center h-12 px-4 rounded-xl text-body-sm font-semibold text-foreground hover:bg-bg-light transition-colors no-underline"
              >
                Fakten
              </Link>
            </li>
            <li>
              <Link
                href="/#termine"
                onClick={close}
                className="flex items-center h-12 px-4 rounded-xl text-body-sm font-semibold text-foreground hover:bg-bg-light transition-colors no-underline"
              >
                Termine
              </Link>
            </li>
            <li>
              <Link
                href="/presse"
                onClick={close}
                className="flex items-center h-12 px-4 rounded-xl text-body-sm font-semibold text-foreground hover:bg-bg-light transition-colors no-underline"
              >
                Presse
              </Link>
            </li>
            <li>
              <Link
                href="/materialien"
                onClick={close}
                className="flex items-center h-12 px-4 rounded-xl text-body-sm font-semibold text-foreground hover:bg-bg-light transition-colors no-underline"
              >
                Materialien
              </Link>
            </li>
            <li>
              <Link
                href="/fanartikel"
                onClick={close}
                className="flex items-center h-12 px-4 rounded-xl text-body-sm font-semibold text-foreground hover:bg-bg-light transition-colors no-underline"
              >
                Fanartikel
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href="/aktion"
                onClick={close}
                className="btn-primary w-full justify-center"
              >
                Jetzt schreiben
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
