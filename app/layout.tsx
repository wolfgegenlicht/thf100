import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "100% Tempelhofer Feld — Das Feld bleibt frei",
  description:
    "Das Tempelhofer Feld ist in Gefahr. CDU und SPD wollen das Tempelhofer-Feld-Gesetz ändern und die Grillwiese bebauen. Informiere dich, schreib deinen Abgeordneten und spende.",
  openGraph: {
    title: "100% Tempelhofer Feld — Das Feld bleibt frei",
    description:
      "CDU & SPD wollen das Tempelhofer-Feld-Gesetz ändern. Jetzt handeln: Abgeordnete kontaktieren, informieren, spenden.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
