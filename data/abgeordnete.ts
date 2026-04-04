export type Partei = "SPD" | "CDU";

export type Abgeordneter = {
  name: string;
  email: string;
  partei: Partei;
};

export type BezirkData = {
  bezirk: string;
  abgeordnete: Abgeordneter[];
};

export const bezirkData: BezirkData[] = [
  {
    bezirk: "Charlottenburg-Wilmersdorf",
    abgeordnete: [
      { name: "Florian Dörstelmann", email: "florian.doerstelmann@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Reinhard Naumann", email: "reinhard.naumann@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Ülker Radziwill", email: "uelker.radziwill@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Stefanie Bung", email: "bung@cdu-fraktion.berlin.de", partei: "CDU" },
      { name: "Ariturel Hack", email: "buero@ariturel-hack.de", partei: "CDU" },
      { name: "Stefan Häntsch", email: "info@stefan-haentsch.de", partei: "CDU" },
      { name: "Sandra Khalatbari", email: "khalatbari@cdu-fraktion.berlin.de", partei: "CDU" },
      { name: "Peer Mock-Stümer", email: "info@mock-stuemer.de", partei: "CDU" },
      { name: "Aldona Niemczyk", email: "niemczyk@cdu-fraktion.berlin.de", partei: "CDU" },
    ],
  },
  {
    bezirk: "Friedrichshain-Kreuzberg",
    abgeordnete: [
      { name: "Sevim Aydin", email: "sevim.aydin@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Sven Heinemann", email: "sven.heinemann@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Dr. Timur Husein", email: "husein@cdu-fraktion.berlin.de", partei: "CDU" },
      { name: "Kurt Wansner", email: "kontakt@kurtwansner.de", partei: "CDU" },
    ],
  },
  {
    bezirk: "Lichtenberg",
    abgeordnete: [
      { name: "Andreas Geisel", email: "andreas.geisel@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Tamara Lüdke", email: "tamara.luedke@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Danny Freymark", email: "buergerbuero@danny-freymark.de", partei: "CDU" },
      { name: "Dennis Haustein", email: "kontakt@dennis-haustein.de", partei: "CDU" },
      { name: "Prof. Dr. Martin Pätzold", email: "paetzold@cdu-fraktion.berlin.de", partei: "CDU" },
      { name: "Lilia Usik", email: "kontakt@lilia-usik.de", partei: "CDU" },
    ],
  },
  {
    bezirk: "Marzahn-Hellersdorf",
    abgeordnete: [
      { name: "Jan Lehmann", email: "jan.lehmann@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Iris Spranger", email: "iris.spranger@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Olga Gauks", email: "post@olgagauks.de", partei: "CDU" },
      { name: "Johannes Martin", email: "buero@martin.berlin", partei: "CDU" },
      { name: "Katharina Günther-Wünsch", email: "post@kgwberlin.de", partei: "CDU" },
      { name: "Alexander J. Herrmann", email: "post@alexander-j-herrmann.de", partei: "CDU" },
    ],
  },
  {
    bezirk: "Mitte",
    abgeordnete: [
      { name: "Dr. Maja Lasić", email: "maja.lasic@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Mathias Schulz", email: "mathias.schulz@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Sven Rissmann", email: "buero@sven-rissmann.de", partei: "CDU" },
      { name: "Lucas Schaal", email: "info@lucas-schaal.de", partei: "CDU" },
    ],
  },
  {
    bezirk: "Neukölln",
    abgeordnete: [
      { name: "Derya Çağlar", email: "derya.caglar@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Franziska Giffey", email: "franziska.giffey@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Marcel Hopp", email: "marcel.hopp@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Christopher Förster", email: "buero@christopher-foerster.de", partei: "CDU" },
      { name: "Dr. Robbin Juhnke", email: "info@robbin-juhnke.de", partei: "CDU" },
      { name: "Olaf Schenk", email: "post@olafschenk.berlin", partei: "CDU" },
    ],
  },
  {
    bezirk: "Pankow",
    abgeordnete: [
      { name: "Dennis Buchner", email: "dennis.buchner@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Torsten Schneider", email: "torsten.schneider@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Tino Schopf", email: "tino.schopf@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Linda Vierecke", email: "linda.vierecke@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Lars Bocian", email: "kontakt@lars-bocian.de", partei: "CDU" },
      { name: "Johannes Kraft", email: "buero@johannes-kraft.de", partei: "CDU" },
      { name: "Stephan Lenz", email: "s.lenz@cdu-schoenhauser-allee.de", partei: "CDU" },
      { name: "Dirk Stettner", email: "info@dirk-stettner.de", partei: "CDU" },
    ],
  },
  {
    bezirk: "Reinickendorf",
    abgeordnete: [
      { name: "Bettina König", email: "bettina.koenig@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Sven Meyer", email: "sven.meyer@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Jörg Stroedter", email: "joerg.stroedter@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Frank Balzer", email: "balzer@cdu-fraktion.berlin.de", partei: "CDU" },
      { name: "Michael Dietmann", email: "wahlkreis@michaeldietmann.de", partei: "CDU" },
      { name: "Burkard Dregger", email: "bd@burkard-dregger.berlin", partei: "CDU" },
      { name: "Niklas Graßelt", email: "grasselt@cdu-fraktion.berlin.de", partei: "CDU" },
      { name: "Stephan Schmidt", email: "buero@stephan-schmidt.berlin", partei: "CDU" },
      { name: "Björn Wohlert", email: "wohlert@cdu-fraktion.berlin.de", partei: "CDU" },
    ],
  },
  {
    bezirk: "Spandau",
    abgeordnete: [
      { name: "Sebahat Atli", email: "sebahat.atli@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Raed Saleh", email: "raed.saleh@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Kerstin Brauner", email: "info@kerstin-brauner.de", partei: "CDU" },
      { name: "Bettina Meißner", email: "bettina.meissner@cdu-spandau.de", partei: "CDU" },
      { name: "Heiko Melzer", email: "helfen@heiko-melzer.de", partei: "CDU" },
      { name: "Dr. Ersin Nas", email: "info@ersin-nas.de", partei: "CDU" },
      { name: "Kai Wegner", email: "kontakt@kai-wegner.de", partei: "CDU" },
    ],
  },
  {
    bezirk: "Steglitz-Zehlendorf",
    abgeordnete: [
      { name: "Dr. Ina Czyborra", email: "ina.czyborra@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Mirjam Golm", email: "mirjam.golm@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Matthias Kollatz", email: "matthias.kollatz@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Martin Matz", email: "martin.matz@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Tom Cywinski", email: "cywinski@cdu-fraktion.berlin.de", partei: "CDU" },
      { name: "Iris Gertig", email: "gertig@cdu-fraktion.berlin.de", partei: "CDU" },
      { name: "Christian Goiny", email: "buero@christian-goiny.de", partei: "CDU" },
      { name: "Marco Hahnfeld", email: "vorsitz@cdu-lankwitz.de", partei: "CDU" },
      { name: "Cornelia Seibeld", email: "buero@cornelia-seibeld.de", partei: "CDU" },
      { name: "Stephan Standfuß", email: "kontakt@starkes-zehlendorf.de", partei: "CDU" },
      { name: "Dr. Claudia Wein", email: "c.wein@cdusz.de", partei: "CDU" },
    ],
  },
  {
    bezirk: "Tempelhof-Schöneberg",
    abgeordnete: [
      { name: "Melanie Kühnemann-Grunow", email: "melanie.kuehnemann@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Wiebke Neumann", email: "wiebke.neumann@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Orkan Özdemir", email: "orkan.oezdemir@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Lars Rauchfuß", email: "lars.rauchfuss@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Scott Körber", email: "kontakt@scottkoerber.de", partei: "CDU" },
      { name: "Frank Luhmann", email: "info@frank-luhmann.de", partei: "CDU" },
      { name: "Katharina Senge", email: "post@katharina-senge.de", partei: "CDU" },
      { name: "Roman Simon", email: "info@romansimon.de", partei: "CDU" },
    ],
  },
  {
    bezirk: "Treptow-Köpenick",
    abgeordnete: [
      { name: "Lars Düsterhöft", email: "lars.duesterhoeft@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Alexander Freier-Winterwerb", email: "alexander.freier-winterwerb@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Dunja Wolff", email: "dunja.wolff@spd.parlament-berlin.de", partei: "SPD" },
      { name: "Stefan Evers", email: "buero@stefan-evers.de", partei: "CDU" },
      { name: "Lisa Knack", email: "info@knack-tk.de", partei: "CDU" },
      { name: "Maik Penn", email: "buero@penn-tk.de", partei: "CDU" },
      { name: "Dr. Martin Sattelkau", email: "sattelkau@cdu-fraktion.berlin.de", partei: "CDU" },
    ],
  },
];

export const bezirke = bezirkData.map((b) => b.bezirk);

export function getAbgeordneteForBezirk(bezirk: string): Abgeordneter[] {
  return bezirkData.find((b) => b.bezirk === bezirk)?.abgeordnete ?? [];
}

export function getEmailsForBezirk(bezirk: string): string {
  return getAbgeordneteForBezirk(bezirk)
    .map((a) => a.email)
    .join(", ");
}
