export type Perspective =
  | "Demokratie"
  | "Klimaschutz"
  | "Familie"
  | "Sport & Freizeit"
  | "Stadtentwicklung";

export type EmailTemplate = {
  id: number;
  betreff: string;
  nachricht: string;
  perspective: Perspective;
};

export const templates: EmailTemplate[] = [
  // ─── Demokratie (10 templates) ───────────────────────────────────────────
  {
    id: 1,
    perspective: "Demokratie",
    betreff: "Kein Bau auf dem Tempelhofer Feld — bitte stimmen Sie gegen den Gesetzentwurf",
    nachricht: `Sehr geehrte Damen und Herren,

ich schreibe Ihnen als Berliner Bürger*in, dem das Tempelhofer Feld am Herzen liegt.

2014 haben fast 750.000 Berliner*innen beim Volksentscheid klar entschieden: Das Feld bleibt unbebaut. Diesen Entscheid jetzt durch eine Gesetzesänderung zu umgehen wäre ein direkter Angriff auf die direkte Demokratie dieser Stadt.

Ich bitte Sie dringend: Stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes. Der Volkswille verdient Respekt, nicht Umgehung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 2,
    perspective: "Demokratie",
    betreff: "Volksentscheid respektieren: Keine Bebauung des Tempelhofer Feldes",
    nachricht: `Sehr geehrte Damen und Herren,

der Volksentscheid von 2014 war eindeutig: Die Mehrheit der Berliner*innen hat sich gegen eine Bebauung des Tempelhofer Feldes ausgesprochen. Dieses Ergebnis hat Gesetzeskraft.

Wenn das Tempelhofer-Feld-Gesetz jetzt geändert wird, um Bauvorhaben zu ermöglichen, untergräbt das das Vertrauen in demokratische Abstimmungen. Was nützt ein Volksentscheid, wenn er bei Gelegenheit einfach revidiert wird?

Bitte stimmen Sie gegen diesen Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 3,
    perspective: "Demokratie",
    betreff: "Das Feld bleibt frei — meine Bitte an Sie als Abgeordnete*r",
    nachricht: `Sehr geehrte Damen und Herren,

ich wende mich heute an Sie, weil ich glaube, dass Demokratie mehr ist als eine Abstimmung alle vier Jahre. Wenn eine Bevölkerung über ein Gesetz abstimmt und dieses Gesetz dann trotzdem geändert wird, verliert politisches Handeln seine Glaubwürdigkeit.

Das Tempelhofer Feld ist durch einen demokratisch legitimierten Volksentscheid geschützt. Bitte respektieren Sie diesen Schutz und lehnen Sie den Gesetzentwurf ab.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 4,
    perspective: "Demokratie",
    betreff: "Tempelhofer Feld: Bitte halten Sie den Volkswillen aufrecht",
    nachricht: `Sehr geehrte Damen und Herren,

als Berliner*in schreibe ich Ihnen heute mit einer einfachen Bitte: Respektieren Sie das, was die Menschen dieser Stadt 2014 entschieden haben.

Fast drei Viertel Million Berlinerinnen und Berliner haben beim Volksentscheid gesagt: Das Feld bleibt frei. Dieses Votum war deutlich. Es sollte nicht durch parlamentarische Mehrheiten ausgehebelt werden.

Ich bitte Sie, gegen die Änderung des Tempelhofer-Feld-Gesetzes zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 5,
    perspective: "Demokratie",
    betreff: "Gegen die Bebauung des Tempelhofer Feldes — eine Bitte",
    nachricht: `Sehr geehrte Damen und Herren,

direkte Demokratie funktioniert nur, wenn ihre Ergebnisse auch dann respektiert werden, wenn sie unbequem sind. Der Volksentscheid von 2014 hat das Tempelhofer Feld gesetzlich geschützt. Eine Änderung dieses Gesetzes wäre ein falsches Signal.

Ich bitte Sie deshalb: Stimmen Sie Nein zum geplanten Gesetzentwurf. Zeigen Sie, dass Berlins direkte Demokratie Bestand hat.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 6,
    perspective: "Demokratie",
    betreff: "Keine Änderung des Tempelhofer-Feld-Gesetzes — bitte dagegen stimmen",
    nachricht: `Sehr geehrte Damen und Herren,

ich habe von dem geplanten Gesetzentwurf erfahren, der die Bebauung des Tempelhofer Feldes ermöglichen soll, und schreibe Ihnen deshalb direkt.

Der Volksentscheid 2014 war eine der deutlichsten direktdemokratischen Entscheidungen in der Geschichte Berlins. Ihn durch eine einfache parlamentarische Mehrheit zu revidieren würde das Instrument des Volksentscheids dauerhaft entwerten.

Bitte stimmen Sie gegen diesen Entwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 7,
    perspective: "Demokratie",
    betreff: "Das Tempelhofer Feld ist unersetzlich — bitte stimmen Sie dagegen",
    nachricht: `Sehr geehrte Damen und Herren,

2014 haben die Berliner*innen klar entschieden: Das Tempelhofer Feld bleibt wie es ist. Dieses Ergebnis ist nicht nur ein politisches Signal, es ist Gesetz.

Ich finde es wichtig, dass gewählte Abgeordnete diesen Willen schützen und nicht aushöhlen. Daher meine herzliche Bitte: Bitte stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 8,
    perspective: "Demokratie",
    betreff: "Meine Bitte: Stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes",
    nachricht: `Sehr geehrte Damen und Herren,

ich bin einer von vielen Berliner*innen, die das Tempelhofer Feld regelmäßig nutzen und die 2014 beim Volksentscheid für seinen Schutz gestimmt haben.

Dass dieser Schutz jetzt durch einen Gesetzentwurf ausgehebelt werden soll, macht mir Sorgen, nicht nur wegen des Feldes, sondern wegen des Signals, das das an die Bürger*innen sendet.

Bitte stimmen Sie dagegen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 9,
    perspective: "Demokratie",
    betreff: "Als Berliner Bürger*in bitte ich Sie: Das Feld muss frei bleiben",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld steht unter demokratischem Schutz. Das ist nicht Tradition oder Gewohnheit, es ist das Ergebnis eines Volksentscheids.

Ich bitte Sie, diesen Schutz nicht aufzugeben. Berlins Glaubwürdigkeit in Sachen Bürgerbeteiligung hängt auch davon ab, ob solche Entscheidungen Bestand haben.

Bitte lehnen Sie den Gesetzentwurf ab.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 10,
    perspective: "Demokratie",
    betreff: "Kein Bau auf dem Tempelhofer Feld — bitte stimmen Sie gegen den Gesetzentwurf",
    nachricht: `Sehr geehrte Damen und Herren,

ich wohne in Berlin und nutze das Tempelhofer Feld seit Jahren. Mir ist es nicht egal, was mit diesem Ort passiert.

Aber vor allem als Demokratin/Demokrat ist mir wichtig: Der Volksentscheid von 2014 war ein starkes Zeichen. Wenn Volksabstimmungen keinen Bestand haben, werden weniger Menschen an zukünftigen Abstimmungen teilnehmen.

Bitte stimmen Sie gegen die Gesetzesänderung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Klimaschutz (10 templates) ─────────────────────────────────────────
  {
    id: 11,
    perspective: "Klimaschutz",
    betreff: "Das Tempelhofer Feld ist eine klimatische Schutzfläche — bitte erhalten Sie es",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist eine der bedeutendsten Klimaschutzflächen Berlins. Studien belegen, dass das Feld die Innenstadt um mehrere Grad kühlt und als grüne Lunge für ein verdichtetes Stadtgebiet unverzichtbar ist.

Gerade angesichts zunehmender Hitzeextreme in Berliner Sommern wäre eine Bebauung dieser Fläche klimapolitisch unverantwortlich.

Bitte stimmen Sie gegen den Gesetzentwurf zur Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 12,
    perspective: "Klimaschutz",
    betreff: "Volksentscheid respektieren: Keine Bebauung des Tempelhofer Feldes",
    nachricht: `Sehr geehrte Damen und Herren,

Berlin wird heißer. Das ist keine Prognose mehr, es ist Realität. Das Tempelhofer Feld ist in diesem Kontext ein unverzichtbarer Kühlkörper für Neukölln und Tempelhof.

Wenn auf dieser Fläche gebaut wird, verliert die Stadt einen der letzten großen Freiflächen-Puffer gegen urbane Überhitzung. Das ist nicht wiederherstellbar.

Bitte stimmen Sie Nein zum geplanten Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 13,
    perspective: "Klimaschutz",
    betreff: "Das Feld bleibt frei — meine Bitte an Sie als Abgeordnete*r",
    nachricht: `Sehr geehrte Damen und Herren,

ich schreibe Ihnen als jemand, dem Klimaschutz in Berlin am Herzen liegt.

Das Tempelhofer Feld ist nicht einfach eine freie Fläche. Es ist ein ökologisches System: Kühlung, CO2-Speicherung, Biodiversität, Versickerungsfläche bei Starkregen. Diese Funktionen kann kein Bebauungsplan ersetzen.

Bitte stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 14,
    perspective: "Klimaschutz",
    betreff: "Keine Änderung des Tempelhofer-Feld-Gesetzes — bitte dagegen stimmen",
    nachricht: `Sehr geehrte Damen und Herren,

das Stadtklimamodell der TU Berlin zeigt klar: Das Tempelhofer Feld senkt die Temperatur in umliegenden Kiezen messbar. In einem Sommer mit 35-Grad-Hitze ist das kein Luxus, sondern Daseinsvorsorge.

Eine Bebauung würde diesen Effekt dauerhaft zerstören. Ich bitte Sie deshalb, dem Gesetzentwurf nicht zuzustimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 15,
    perspective: "Klimaschutz",
    betreff: "Tempelhofer Feld: Bitte halten Sie den Volkswillen aufrecht",
    nachricht: `Sehr geehrte Damen und Herren,

offene Stadtflächen wie das Tempelhofer Feld sind nicht rückholbar. Ist eine Fläche einmal bebaut, ist sie weg, für Generationen.

Als Berliner*in, dem die klimatische Zukunft dieser Stadt wichtig ist, bitte ich Sie: Schützen Sie das Feld. Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 16,
    perspective: "Klimaschutz",
    betreff: "Das Tempelhofer Feld gehört allen Berlinerinnen — bitte schützen Sie es",
    nachricht: `Sehr geehrte Damen und Herren,

Berlins Grünflächen stehen unter zunehmendem Druck. Das Tempelhofer Feld ist eine der wenigen noch erhaltenen großen Freiflächen im Stadtinneren, und eine der klimatisch wertvollsten.

Ein Moratorium auf Bebauung wäre das Klügste. Ich bitte Sie jedenfalls, diesem Gesetzentwurf nicht zuzustimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 17,
    perspective: "Klimaschutz",
    betreff: "Gegen die Bebauung des Tempelhofer Feldes — eine Bitte",
    nachricht: `Sehr geehrte Damen und Herren,

wir erleben bereits heute, dass dicht bebaute Stadtteile ohne Grünflächen bei Hitzewellen zur Gesundheitsgefahr werden. Das Tempelhofer Feld schützt davor.

Bitte schützen Sie das Feld. Stimmen Sie gegen den Gesetzentwurf zur Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 18,
    perspective: "Klimaschutz",
    betreff: "Kein Bau auf dem Tempelhofer Feld — bitte stimmen Sie gegen den Gesetzentwurf",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist ein wichtiger Lebensraum für Vögel, Insekten und Pflanzen mitten in der Stadt. Diese Biodiversität auf einer urban eingebetteten Fläche dieser Größe ist einzigartig.

Eine Bebauung würde diesen Lebensraum unwiederbringlich zerstören. Ich bitte Sie, dagegen zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 19,
    perspective: "Klimaschutz",
    betreff: "Das Tempelhofer Feld ist unersetzlich — bitte stimmen Sie dagegen",
    nachricht: `Sehr geehrte Damen und Herren,

ich verfolge die Debatte um das Tempelhofer Feld mit großer Sorge. Nicht nur aus demokratischen Gründen, sondern auch aus Klimaschutzperspektive.

Das Feld ist eine der wertvollsten Freiflächen Berlins. Als Versickerungsfläche, Kühlfläche und Biotop hat es eine Funktion, die sich nicht ersetzen lässt.

Bitte stimmen Sie Nein zum Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 20,
    perspective: "Klimaschutz",
    betreff: "Meine Bitte: Stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes",
    nachricht: `Sehr geehrte Damen und Herren,

Berlin hat sich Klimaneutralität zum Ziel gesetzt. Das ist schwer zu vereinbaren mit der Bebauung einer der größten innerstädtischen Klimaschutzflächen.

Ich bitte Sie: Zeigen Sie, dass Berliner Klimapolitik keine leeren Versprechen sind. Stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Familie (10 templates) ─────────────────────────────────────────────
  {
    id: 21,
    perspective: "Familie",
    betreff: "Das Feld bleibt frei — meine Bitte an Sie als Abgeordnete*r",
    nachricht: `Sehr geehrte Damen und Herren,

ich bin Elternteil und lebe in Berlin. Das Tempelhofer Feld ist für unsere Familie einer der wichtigsten Orte in dieser Stadt, ein riesiger, freier Raum, in dem Kinder wirklich spielen, rennen und die Welt entdecken können.

Solche Orte gibt es in Berlin nicht viele. Bitte stimmen Sie dafür, dass es diesen Ort weiterhin gibt.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 22,
    perspective: "Familie",
    betreff: "Das Tempelhofer Feld gehört allen Berlinerinnen — bitte schützen Sie es",
    nachricht: `Sehr geehrte Damen und Herren,

als Mutter/Vater zweier Kinder ist das Tempelhofer Feld für uns mehr als eine Freizeitfläche. Es ist ein Ort, an dem Kinder aus dichten Stadtteilen echte Weite erleben, etwas, das in Neukölln und Tempelhof sonst selten ist.

Ich bitte Sie herzlich: Stimmen Sie gegen die Bebauung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 23,
    perspective: "Familie",
    betreff: "Volksentscheid respektieren: Keine Bebauung des Tempelhofer Feldes",
    nachricht: `Sehr geehrte Damen und Herren,

Berliner Familien brauchen zugängliche, kostenlose Orte zum Spielen, Bewegen und Atmen. Das Tempelhofer Feld ist einer der wenigen, die das für viele Kieze zugleich bieten.

Wenn diese Fläche bebaut wird, verlieren besonders Familien mit wenig Geld einen ihrer wichtigsten Freiräume. Bitte stimmen Sie dagegen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 24,
    perspective: "Familie",
    betreff: "Kein Bau auf dem Tempelhofer Feld — bitte stimmen Sie gegen den Gesetzentwurf",
    nachricht: `Sehr geehrte Damen und Herren,

für meine Familie ist das Tempelhofer Feld unverzichtbar. Kein Park der Stadt bietet diese Kombination aus Weite, Zugänglichkeit und Freiheit.

Ich möchte, dass meine Kinder diesen Ort noch kennen. Und deren Kinder auch. Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 25,
    perspective: "Familie",
    betreff: "Tempelhofer Feld: Bitte halten Sie den Volkswillen aufrecht",
    nachricht: `Sehr geehrte Damen und Herren,

meine Kinder gehen fast jedes Wochenende auf das Tempelhofer Feld. Es ist für sie selbstverständlicher Teil dieser Stadt. Das darf es bleiben.

Ich bitte Sie, gegen die Änderung des Tempelhofer-Feld-Gesetzes zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 26,
    perspective: "Familie",
    betreff: "Keine Änderung des Tempelhofer-Feld-Gesetzes — bitte dagegen stimmen",
    nachricht: `Sehr geehrte Damen und Herren,

gerade für Familien, die sich keine Reisen oder teure Freizeitangebote leisten können, ist das Tempelhofer Feld eine der wichtigsten Flächen Berlins. Es ist kostenlos, nah und groß genug, dass man wirklich Abstand von der Stadt bekommt.

Ich bitte Sie, diese Fläche zu schützen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 27,
    perspective: "Familie",
    betreff: "Das Tempelhofer Feld ist unersetzlich — bitte stimmen Sie dagegen",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist ein Ort, der Menschen verbindet. Familien, Senioren, Sportler, Grillende, Drachen-Fliegende. Diese Mischung ist einmalig und wertvoll.

Bebauung würde nicht nur Fläche kosten, sie würde ein soziales Gefüge zerstören, das sich über Jahre entwickelt hat. Bitte stimmen Sie dagegen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 28,
    perspective: "Familie",
    betreff: "Als Berliner Bürger*in bitte ich Sie: Das Feld muss frei bleiben",
    nachricht: `Sehr geehrte Damen und Herren,

ich denke oft daran, welche Stadt ich meinen Kindern hinterlasse. Das Tempelhofer Feld ist Teil der Antwort: ein Ort, der nicht dem Verwertungsinteresse geopfert wurde.

Bitte sorgen Sie dafür, dass das so bleibt. Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 29,
    perspective: "Familie",
    betreff: "Gegen die Bebauung des Tempelhofer Feldes — eine Bitte",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist einer der wenigen Orte in dieser Stadt, an dem ich mit meinen Kindern wirklich entspannen kann. Kein Lärm, keine Autos, keine Enge.

Das ist selten. Und unersetzlich. Bitte stimmen Sie gegen die Bebauung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 30,
    perspective: "Familie",
    betreff: "Meine Bitte: Stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes",
    nachricht: `Sehr geehrte Damen und Herren,

als Berliner Familie nutzen wir das Tempelhofer Feld das ganze Jahr. Im Sommer zum Grillen, im Winter für Spaziergänge, mit Kindern, Hund und Freunden.

Ein solcher Ort entsteht nicht neu. Er muss erhalten werden. Ich bitte Sie, gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Sport & Freizeit (10 templates) ────────────────────────────────────
  {
    id: 31,
    perspective: "Sport & Freizeit",
    betreff: "Das Tempelhofer Feld gehört allen Berlinerinnen — bitte schützen Sie es",
    nachricht: `Sehr geehrte Damen und Herren,

ich fahre regelmäßig auf dem Tempelhofer Feld Fahrrad. Es ist einer der wenigen Orte in Berlin, an dem das wirklich entspannt möglich ist, ohne Autoverkehr, ohne Enge.

Für mich und viele andere ist das Feld keine abstrakte politische Frage, sondern gelebter Alltag. Bitte schützen Sie es. Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 32,
    perspective: "Sport & Freizeit",
    betreff: "Kein Bau auf dem Tempelhofer Feld — bitte stimmen Sie gegen den Gesetzentwurf",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld bietet Platz für Sport, den Berlin sonst kaum hat: Jogging, Skating, Kiten, Yoga, Ballspiele auf riesigen Flächen ohne Eintritt und ohne Platzzwang.

Das ist urbaner Luxus, aber einer für alle. Ich bitte Sie, diesen Luxus zu erhalten und gegen die Bebauung zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 33,
    perspective: "Sport & Freizeit",
    betreff: "Volksentscheid respektieren: Keine Bebauung des Tempelhofer Feldes",
    nachricht: `Sehr geehrte Damen und Herren,

ich betreibe regelmäßig Sport auf dem Tempelhofer Feld und weiß, dass es für viele Berliner*innen der einzige wohnortnahe Ort ist, der das auf dieser Fläche ermöglicht.

Ersetzen lässt sich das nicht. Ich bitte Sie, gegen die Änderung des Tempelhofer-Feld-Gesetzes zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 34,
    perspective: "Sport & Freizeit",
    betreff: "Das Feld bleibt frei — meine Bitte an Sie als Abgeordnete*r",
    nachricht: `Sehr geehrte Damen und Herren,

ich fliege auf dem Tempelhofer Feld Drachen, seit ich Kind bin. Für solche Aktivitäten braucht man Platz, echten Platz. Den gibt es in Berlin fast nirgendwo außer hier.

Das Feld ist für viele Menschen Erholung, Sport und Lebensqualität in einem. Bitte schützen Sie es.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 35,
    perspective: "Sport & Freizeit",
    betreff: "Tempelhofer Feld: Bitte halten Sie den Volkswillen aufrecht",
    nachricht: `Sehr geehrte Damen und Herren,

Sport ohne teure Mitgliedschaft, ohne feste Zeiten, ohne Platzreservierung: Das ist das Tempelhofer Feld für Hunderttausende Berliner*innen.

Diesen Freiraum zu verbauen wäre ein sozialpolitischer Fehler. Bitte stimmen Sie dagegen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 36,
    perspective: "Sport & Freizeit",
    betreff: "Gegen die Bebauung des Tempelhofer Feldes — eine Bitte",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist nicht nur Grünfläche. Es ist ein Ort der Bewegung, der Begegnung und der Erholung, der gerade für Menschen aus dichten Stadtteilen unverzichtbar ist.

Ich bitte Sie, diesen Ort zu schützen und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 37,
    perspective: "Sport & Freizeit",
    betreff: "Keine Änderung des Tempelhofer-Feld-Gesetzes — bitte dagegen stimmen",
    nachricht: `Sehr geehrte Damen und Herren,

ich laufe dreimal pro Woche auf dem Tempelhofer Feld. Es ist mein Ausgleich zum Stadtleben. Und ich weiß, dass das für viele Menschen genauso ist.

Diesen Ort zu bebauen würde Menschen eine wichtige Möglichkeit zur Bewegung und Erholung nehmen. Bitte stimmen Sie dagegen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 38,
    perspective: "Sport & Freizeit",
    betreff: "Das Tempelhofer Feld ist unersetzlich — bitte stimmen Sie dagegen",
    nachricht: `Sehr geehrte Damen und Herren,

ein Ort wie das Tempelhofer Feld ist nicht planbar. Er entsteht durch Geschichte, durch Nutzung, durch Menschen, die ihn immer wieder neu entdecken.

Ich nutze das Feld seit Jahren für Sport und Erholung und bitte Sie deshalb: Behalten Sie diesen Ort. Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 39,
    perspective: "Sport & Freizeit",
    betreff: "Als Berliner Bürger*in bitte ich Sie: Das Feld muss frei bleiben",
    nachricht: `Sehr geehrte Damen und Herren,

ob Kiten, Slacklinen, Skateboard oder einfach Spazierengehen: Das Tempelhofer Feld gibt jedem Raum. Genau das macht es so wertvoll.

Ich bitte Sie, dafür zu sorgen, dass das so bleibt. Stimmen Sie gegen die Bebauung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 40,
    perspective: "Sport & Freizeit",
    betreff: "Meine Bitte: Stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes",
    nachricht: `Sehr geehrte Damen und Herren,

auf dem Tempelhofer Feld findet jeder Platz, ohne Buchung, ohne Eintritt, ohne Ausschluss. Das ist außergewöhnlich für eine Metropole wie Berlin.

Ich hoffe, dass Sie diesen Wert erkennen und gegen den Gesetzentwurf stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Stadtentwicklung (10 templates) ────────────────────────────────────
  {
    id: 41,
    perspective: "Stadtentwicklung",
    betreff: "Kein Bau auf dem Tempelhofer Feld — bitte stimmen Sie gegen den Gesetzentwurf",
    nachricht: `Sehr geehrte Damen und Herren,

ich befasse mich mit Stadtentwicklung und möchte eines klarstellen: Das Tempelhofer Feld schafft keine Wohnungen für Berlin. Die 384 geplanten Einheiten auf der Grillwiese sind im Verhältnis zum Bedarf winzig, während der Verlust der Fläche dauerhaft wäre.

Lösungen für die Wohnungskrise liegen woanders: Leerstand, Nachverdichtung, Konversion. Nicht auf dem Tempelhofer Feld. Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 42,
    perspective: "Stadtentwicklung",
    betreff: "Das Tempelhofer Feld gehört allen Berlinerinnen — bitte schützen Sie es",
    nachricht: `Sehr geehrte Damen und Herren,

Berlin hat genug Flächen, auf denen Wohnungsbau möglich ist, ohne Schutzgebiete und demokratisch gesicherte Freiflächen anzutasten.

Der Stadtentwicklungsplan 2024 weist Grundstücke für 249.000 Wohnungen aus. Das Tempelhofer Feld braucht man dafür nicht. Bitte stimmen Sie gegen die Gesetzesänderung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 43,
    perspective: "Stadtentwicklung",
    betreff: "Volksentscheid respektieren: Keine Bebauung des Tempelhofer Feldes",
    nachricht: `Sehr geehrte Damen und Herren,

der Wohnungsmangel in Berlin ist real. Aber die Lösung liegt nicht auf dem Tempelhofer Feld. Gute Stadtentwicklung nutzt bestehende Potenziale, Brachflächen, Konversionen, Verdichtung im Bestand, bevor sie einmalige Freiflächen opfert.

Ich bitte Sie, den Gesetzentwurf abzulehnen und nach besseren Lösungen zu suchen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 44,
    perspective: "Stadtentwicklung",
    betreff: "Das Feld bleibt frei — meine Bitte an Sie als Abgeordnete*r",
    nachricht: `Sehr geehrte Damen und Herren,

Architektinnen und Architekten aus aller Welt haben sich klar positioniert: Das Tempelhofer Feld darf nicht bebaut werden. Lacaton & Vassal, Pritzker-Preisträger, haben es so formuliert: "Man sollte nicht einmal einen Quadratmeter dieser Dimension berühren."

Das ist fachliche Expertise auf höchstem Niveau. Ich bitte Sie, ihr zu folgen und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 45,
    perspective: "Stadtentwicklung",
    betreff: "Tempelhofer Feld: Bitte halten Sie den Volkswillen aufrecht",
    nachricht: `Sehr geehrte Damen und Herren,

internationale Städte kämpfen darum, Freiräume in dichten Quartieren zu erhalten. Berlin hat das Glück, einen solchen Ort noch zu besitzen.

Ihn zu opfern für eine kleine Anzahl von Wohneinheiten, die das Wohnungsproblem nicht lösen, wäre strategisch und städtebaulich falsch. Bitte stimmen Sie dagegen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 46,
    perspective: "Stadtentwicklung",
    betreff: "Gegen die Bebauung des Tempelhofer Feldes — eine Bitte",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist ein städtebauliches Alleinstellungsmerkmal Berlins, das weltweit seinesgleichen sucht. Kein vergleichbares Stadtfeld dieser Größe existiert in einer Metropole dieser Dichte.

Einmal bebaut, ist es weg. Für immer. Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 47,
    perspective: "Stadtentwicklung",
    betreff: "Keine Änderung des Tempelhofer-Feld-Gesetzes — bitte dagegen stimmen",
    nachricht: `Sehr geehrte Damen und Herren,

ich bin überzeugt: Wohnungspolitik, die auf dem Rücken des Tempelhofer Feldes betrieben wird, ist keine gute Wohnungspolitik. Sie löst das Problem nicht, sondern schafft ein neues.

Die Stadt braucht Wohnungen und Freiflächen. Bitte stimmen Sie gegen die Bebauung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 48,
    perspective: "Stadtentwicklung",
    betreff: "Das Tempelhofer Feld ist unersetzlich — bitte stimmen Sie dagegen",
    nachricht: `Sehr geehrte Damen und Herren,

der Berliner Senat plant Wohncontainer auf der Grillwiese. Abgesehen vom demokratiepolitischen Problem: Wohncontainer sind keine Lösung für dauerhafte Wohnungsnot.

Ich bitte Sie, diesen symbolischen und sachlich schwachen Schritt zu stoppen. Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 49,
    perspective: "Stadtentwicklung",
    betreff: "Als Berliner Bürger*in bitte ich Sie: Das Feld muss frei bleiben",
    nachricht: `Sehr geehrte Damen und Herren,

Berlin hat eine lange Geschichte guter und schlechter Stadtplanung. Das Tempelhofer Feld steht für eine der besten Entscheidungen der letzten Jahrzehnte: Diese Fläche für alle offen zu halten.

Diese Entscheidung rückgängig zu machen wäre ein Fehler, der sich in 20 Jahren rächt. Bitte stimmen Sie Nein.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 50,
    perspective: "Stadtentwicklung",
    betreff: "Meine Bitte: Stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes",
    nachricht: `Sehr geehrte Damen und Herren,

ich bitte Sie um eine Entscheidung, die Sie in Zukunft nicht bereuen werden. Das Tempelhofer Feld ist ein städtischer Schatz. Es zu bebauen löst kein Problem und schafft ein neues.

Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
];

export const perspectives: Perspective[] = [
  "Demokratie",
  "Klimaschutz",
  "Familie",
  "Sport & Freizeit",
  "Stadtentwicklung",
];

export function getRandomTemplate(exclude?: number): EmailTemplate {
  const idx = Math.floor(Math.random() * templates.length);
  const t = templates[idx];
  if (exclude !== undefined && t.id === exclude && templates.length > 1) {
    return getRandomTemplate(exclude);
  }
  return t;
}

export function getTemplatesByPerspective(p: Perspective): EmailTemplate[] {
  return templates.filter((t) => t.perspective === p);
}
