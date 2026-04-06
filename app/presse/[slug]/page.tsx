import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pressemitteilungen, getPressemitteilung, formatPresseDatum } from "@/data/presse";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return pressemitteilungen.map((pm) => ({ slug: pm.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pm = getPressemitteilung(slug);
  if (!pm) return {};
  return {
    title: `${pm.titel} | 100% Tempelhofer Feld`,
    description: pm.teaser,
    openGraph: {
      title: pm.titel,
      description: pm.teaser,
      locale: "de_DE",
      type: "article",
      publishedTime: pm.datum,
    },
  };
}

export default async function PressemitteilungPage({ params }: Props) {
  const { slug } = await params;
  const pm = getPressemitteilung(slug);
  if (!pm) notFound();

  const idx = pressemitteilungen.findIndex((p) => p.slug === slug);
  const prev = pressemitteilungen[idx + 1] ?? null;
  const next = pressemitteilungen[idx - 1] ?? null;

  return (
    <>
      <Header />

      <main id="main-content">
        <article>
          {/* Header */}
          <header className="pm-header dot-grid border-b border-border">
            <div className="container-wide">
              <Link href="/presse" className="pm-back">
                ← Alle Pressemitteilungen
              </Link>
              <div className="pm-header__inner">
                <time className="pm-header__date" dateTime={pm.datum}>
                  {formatPresseDatum(pm.datum)}
                </time>
                <h1 className="pm-header__title">{pm.titel}</h1>
              </div>
            </div>
          </header>

          {/* Body */}
          <div className="section-pad">
            <div className="container-wide">
              <div className="pm-body">
                <p className="pm-body__lead">{pm.teaser}</p>

                {pm.inhalt?.map((para, i) => (
                  <p key={i} className="pm-body__para">{para}</p>
                ))}

              </div>
            </div>
          </div>

          {/* Nav between releases */}
          <nav className="pm-nav border-t border-border" aria-label="Weitere Mitteilungen">
            <div className="container-wide">
              <div className="pm-nav__inner">
                {prev ? (
                  <Link href={`/presse/${prev.slug}`} className="pm-nav__link pm-nav__link--prev">
                    <span className="pm-nav__direction">← Älter</span>
                    <span className="pm-nav__title">{prev.titel}</span>
                  </Link>
                ) : <span />}
                {next ? (
                  <Link href={`/presse/${next.slug}`} className="pm-nav__link pm-nav__link--next">
                    <span className="pm-nav__direction">Neuer →</span>
                    <span className="pm-nav__title">{next.titel}</span>
                  </Link>
                ) : <span />}
              </div>
            </div>
          </nav>
        </article>
      </main>

      <Footer />
    </>
  );
}
