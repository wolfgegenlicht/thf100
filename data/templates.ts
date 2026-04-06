export type Perspective =
  | "Demokratie"
  | "Klimaschutz"
  | "Familie"
  | "Sport & Freizeit"
  | "Stadtentwicklung"
  | "Naturschutz"
  | "Persönlich";

export type EmailLength = "kurz" | "lang";

export type EmailTemplate = {
  id: number;
  betreff: string;
  nachricht: string;
  perspective: Perspective;
  length?: EmailLength; // undefined = "lang"
};

export const templates: EmailTemplate[] = [
  // ─── Demokratie (10 templates) ───────────────────────────────────────────
  {
    id: 1,
    perspective: "Demokratie",
    betreff: "Kein Bau auf dem Tempelhofer Feld, bitte stimmen Sie gegen den Gesetzentwurf",
    nachricht: `Sehr geehrte Damen und Herren,

2014 haben fast 750.000 Berliner*innen beim Volksentscheid für das Tempelhofer-Feld-Gesetz gestimmt. Das ist eines der eindeutigsten direktdemokratischen Ergebnisse in der Geschichte dieser Stadt. Es ist nicht Tradition oder Empfehlung, es ist Gesetz.

Nun planen CDU und SPD, genau dieses Gesetz zu ändern, um Bauvorhaben auf der Grillwiese zu ermöglichen. Das Beteiligungsverfahren des Senats war eindeutig: nahezu alle Teilnehmenden sprachen sich gegen eine Bebauung aus. Dennoch wird der Gesetzentwurf vorangetrieben.

Wenn Volksabstimmungen nur dann gelten, wenn ihre Ergebnisse politisch bequem sind, verlieren sie ihre Legitimation. Zukünftige Volksinitiativen werden auf weniger Beteiligung stoßen, wenn klar ist, dass Ergebnisse revidierbar sind.

Ich bitte Sie dringend: Stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes. Berlins direkte Demokratie darf kein Verfallsdatum haben.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 2,
    perspective: "Demokratie",
    betreff: "Volksentscheid respektieren: Keine Bebauung des Tempelhofer Feldes",
    nachricht: `Sehr geehrte Damen und Herren,

der Volksentscheid von 2014 war eine der klarsten Entscheidungen, die Berliner Bürger*innen je getroffen haben. Fast 750.000 Menschen stimmten für das Tempelhofer-Feld-Gesetz, das die Fläche dauerhaft schützt. Dieses Ergebnis hat Gesetzeskraft.

Wenn CDU und SPD dieses Gesetz nun ändern, um doch zu bauen, ist das mehr als eine politische Entscheidung. Es ist ein Signal: Volksabstimmungen gelten nur so lange, wie sie der Regierung passen. Das untergräbt das Vertrauen in direkte Demokratie als Instrument.

Im Beteiligungsverfahren des Senats haben sich die Teilnehmenden nahezu einstimmig gegen Bebauung ausgesprochen. Auch das wurde ignoriert. Vier von sechs eingeladenen Architekturbüros lehnten eine Teilnahme am Wettbewerb ab, weil sie die Bebauung grundsätzlich ablehnen.

Bitte stimmen Sie gegen diesen Gesetzentwurf. Die Entscheidung von 2014 verdient Respekt.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 3,
    perspective: "Demokratie",
    betreff: "Das Feld bleibt frei, meine Bitte an Sie als Abgeordnete*r",
    nachricht: `Sehr geehrte Damen und Herren,

ich wende mich heute an Sie, weil ich glaube, dass Demokratie mehr bedeutet als eine Abstimmung alle vier Jahre. Direkte Demokratie, wie sie beim Volksentscheid 2014 stattgefunden hat, ist eine besonders starke Form der Mitbestimmung. Fast 750.000 Menschen haben damals für den Schutz des Tempelhofer Feldes gestimmt.

Wenn das Tempelhofer-Feld-Gesetz jetzt geändert wird, schickt das Abgeordnetenhaus eine klare Botschaft: Volksabstimmungen können nachträglich korrigiert werden, wenn sie unbequem sind. Das beschädigt nicht nur das Vertrauen in diese eine Abstimmung. Es beschädigt das Vertrauen in direktdemokratische Beteiligung insgesamt.

Der Baustart auf der Grillwiese ist für Juli 2026 geplant. Die Zeit ist knapp, aber die Entscheidung, die Sie treffen, wirkt weit über dieses Projekt hinaus. Bitte schützen Sie das Ergebnis des Volksentscheids und lehnen Sie den Gesetzentwurf ab.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 4,
    perspective: "Demokratie",
    betreff: "Tempelhofer Feld: Bitte halten Sie den Volkswillen aufrecht",
    nachricht: `Sehr geehrte Damen und Herren,

als Berliner*in schreibe ich Ihnen heute mit einer einfachen Bitte: Respektieren Sie das, was die Menschen dieser Stadt 2014 entschieden haben.

Fast drei Viertel Million Berlinerinnen und Berliner haben beim Volksentscheid klar gesagt: Das Feld bleibt frei. Das war kein knapper Entscheid, es war ein starkes Mandat. Das Tempelhofer-Feld-Gesetz ist das direkte Ergebnis dieser Entscheidung.

Nun will die Koalition aus CDU und SPD dieses Gesetz ändern, obwohl das Beteiligungsverfahren ergab, dass die überwiegende Mehrheit der Teilnehmenden gegen jede Bebauung ist. Vier von sechs eingeladenen Architekturbüros verweigerten sogar die Mitarbeit am Wettbewerb. Das politische Signal, das von diesem Vorgehen ausgeht, ist verheerend für das Vertrauen in Bürgerbeteiligung.

Ich bitte Sie: Stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 5,
    perspective: "Demokratie",
    betreff: "Gegen die Bebauung des Tempelhofer Feldes, eine Bitte",
    nachricht: `Sehr geehrte Damen und Herren,

direkte Demokratie funktioniert nur, wenn ihre Ergebnisse auch dann respektiert werden, wenn sie unbequem sind. Der Volksentscheid von 2014 hat das Tempelhofer Feld gesetzlich geschützt. Fast 750.000 Berliner*innen stimmten dafür. Das ist eine klare demokratische Aussage.

Die Koalition plant nun, dieses Gesetz zu ändern, um bis zum Baustart im Juli 2026 vollendete Tatsachen zu schaffen. Dabei hat das senatsbegleitende Beteiligungsverfahren gezeigt: Die Bevölkerung lehnt Bebauung nahezu geschlossen ab. Wer das ignoriert, sendet ein fatales Signal an alle, die künftig an Volksinitiativen teilnehmen möchten.

Berlins Glaubwürdigkeit in Sachen Bürgerbeteiligung steht auf dem Spiel. Ich bitte Sie deshalb: Stimmen Sie Nein zum geplanten Gesetzentwurf. Zeigen Sie, dass direktdemokratische Entscheidungen in Berlin Bestand haben.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 6,
    perspective: "Demokratie",
    betreff: "Keine Änderung des Tempelhofer-Feld-Gesetzes, bitte dagegen stimmen",
    nachricht: `Sehr geehrte Damen und Herren,

ich habe von dem geplanten Gesetzentwurf erfahren, der die Bebauung des Tempelhofer Feldes ermöglichen soll, und schreibe Ihnen deshalb direkt.

Der Volksentscheid 2014 war einer der beteiligungsstärksten in der Geschichte Berlins. Fast 750.000 Menschen haben damals für den Erhalt des Feldes gestimmt, das Ergebnis ist bindend. Es durch eine einfache parlamentarische Mehrheit zu revidieren würde das Instrument des Volksentscheids dauerhaft entwerten.

Das Beteiligungsverfahren des Senats ergab dasselbe: nahezu alle Teilnehmenden lehnten Bauvorhaben auf dem Feld ab. Selbst vier der sechs eingeladenen Architekturbüros verweigerten die Teilnahme am Wettbewerb. Der Wille ist klar. Es fehlt nur der politische Wille, ihn zu respektieren.

Bitte stimmen Sie gegen diesen Entwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 7,
    perspective: "Demokratie",
    betreff: "Das Tempelhofer Feld ist unersetzlich, bitte stimmen Sie dagegen",
    nachricht: `Sehr geehrte Damen und Herren,

2014 haben Berliner*innen klar entschieden: Das Tempelhofer Feld bleibt wie es ist. Dieses Ergebnis ist nicht nur ein politisches Signal, es ist Gesetz. Und es entstand aus einer Bürgerbewegung, die ohne Parteien und ohne große finanzielle Mittel fast 750.000 Stimmen gesammelt hat.

Ich finde es wichtig, dass gewählte Abgeordnete diesen Willen schützen und nicht aushöhlen. Die geplante Gesetzesänderung ist ein Eingriff in ein demokratisch legitimiertes Schutzgesetz. Baustart Juli 2026, vollendete Tatsachen, minimale Konsultation. Das ist keine ernsthafte Auseinandersetzung mit dem demokratischen Erbe dieses Entscheids.

Als Abgeordnete*r können Sie ein Zeichen setzen, dass Volksabstimmungen in Berlin mehr sind als unverbindliche Empfehlungen. Bitte lehnen Sie die Änderung des Tempelhofer-Feld-Gesetzes ab.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 8,
    perspective: "Demokratie",
    betreff: "Meine Bitte: Stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes",
    nachricht: `Sehr geehrte Damen und Herren,

ich bin einer von vielen Berliner*innen, die das Tempelhofer Feld regelmäßig nutzen und die 2014 beim Volksentscheid für seinen Schutz gestimmt haben. Damals hatten wir das Gefühl, dass unsere Stimme tatsächlich zählt. Das Tempelhofer-Feld-Gesetz war das Ergebnis.

Dass dieses Gesetz nun durch CDU und SPD geändert werden soll, um Bau auf der Grillwiese zu ermöglichen, macht mir Sorgen, nicht nur wegen des Feldes. Es geht um das Signal, das das an Berliner Bürger*innen sendet: Direktdemokratische Entscheidungen gelten nur temporär. Das ist keine Grundlage für eine funktionierende Beteiligungskultur.

Das Beteiligungsverfahren des Senats hat gezeigt, dass die Mehrheit weiterhin gegen Bebauung ist. Bitte hören Sie auf diese Stimmen. Bitte stimmen Sie gegen die Gesetzesänderung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 9,
    perspective: "Demokratie",
    betreff: "Als Berliner Bürger*in bitte ich Sie: Das Feld muss frei bleiben",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld steht unter demokratischem Schutz. Nicht weil es eine schöne Tradition wäre, sondern weil fast 750.000 Berliner*innen 2014 beim Volksentscheid dafür gestimmt haben. Das Ergebnis ist verbindlich, es ist Gesetz.

Ich bitte Sie, diesen Schutz nicht aufzugeben. Wenn das Abgeordnetenhaus das Tempelhofer-Feld-Gesetz ändert, um Bauvorhaben zu ermöglichen, die die Bevölkerung im Beteiligungsverfahren nahezu einhellig abgelehnt hat, dann untergräbt das das Vertrauen in das gesamte System direkter Demokratie.

Berlins Ruf als Stadt mit lebendiger Bürgergesellschaft hängt auch daran, ob solche Entscheidungen Bestand haben. Bitte lehnen Sie den Gesetzentwurf ab und stehen Sie damit für eine glaubwürdige Beteiligungspolitik.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 10,
    perspective: "Demokratie",
    betreff: "Kein Bau auf dem Tempelhofer Feld, bitte stimmen Sie gegen den Gesetzentwurf",
    nachricht: `Sehr geehrte Damen und Herren,

ich wohne in Berlin und nutze das Tempelhofer Feld seit Jahren. Mir ist es nicht egal, was mit diesem Ort passiert. Aber noch mehr als der Ort selbst bewegt mich der Vorgang dahinter.

Der Volksentscheid von 2014 war ein starkes Zeichen. Fast 750.000 Menschen haben sich beteiligt und für das Tempelhofer-Feld-Gesetz gestimmt. Das war kein Zufall, sondern gelebte Demokratie. Wenn dieser Beschluss jetzt durch eine parlamentarische Mehrheit aufgehoben wird, dann werden weniger Menschen an zukünftigen Volksabstimmungen teilnehmen. Das schwächt Berlins Demokratie strukturell.

CDU und SPD behaupten, Wohnraum zu brauchen. Aber der Stadtentwicklungsplan zeigt: Es gibt in Berlin über 249.000 genehmigte Bauplätze außerhalb des Feldes. Der Bedarf lässt sich anders decken.

Bitte stimmen Sie gegen die Gesetzesänderung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Klimaschutz (10 templates) ─────────────────────────────────────────
  {
    id: 11,
    perspective: "Klimaschutz",
    betreff: "Das Tempelhofer Feld ist eine klimatische Schutzfläche, bitte erhalten Sie es",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist eine der bedeutendsten Klimaschutzflächen Berlins. Das Stadtklimamodell der TU Berlin belegt, dass das Feld die umliegenden Kieze messbar kühlt, in manchen Bereichen um mehrere Grad. An Hitzetagen mit über 35 Grad Celsius ist das der Unterschied zwischen belastenden und gefährlichen Bedingungen für ältere Menschen, Kinder und chronisch Kranke.

Das Feld erfüllt dabei mehrere Klimafunktionen gleichzeitig: Es speichert Kohlenstoff in der Bodenvegetation, nimmt bei Starkregen große Wassermengen auf und entlastet so die überlastete Berliner Kanalisation, und es hält Kaltluft, die von Südwesten einströmt, als Puffer für die Innenstadt.

Diese Funktionen sind nicht ersetzbar. Einmal versiegelt, ist die klimatische Wirkung dauerhaft verloren. Angesichts zunehmender Hitzesommer und häufigerer Starkregenereignisse wäre das klimapolitisch unverantwortlich.

Bitte stimmen Sie gegen den Gesetzentwurf zur Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 12,
    perspective: "Klimaschutz",
    betreff: "Volksentscheid respektieren: Keine Bebauung des Tempelhofer Feldes",
    nachricht: `Sehr geehrte Damen und Herren,

Berlin wird heißer. Das ist keine Zukunftsprognose mehr, sondern Realität. Hitzewellen dauern länger, Starkregen kommt häufiger, und dicht bebaute Stadtteile wie Neukölln und Tempelhof leiden besonders stark darunter.

Das Tempelhofer Feld ist in diesem Kontext kein optionaler Grünstreifen, sondern klimatische Schutzinfrastruktur. Es kühlt die Umgebung, nimmt Wasser auf und schafft durch seine Offenheit Luftaustausch, der in verdichteten Quartieren nicht mehr stattfindet.

Wenn auf dieser Fläche gebaut wird, verliert die Stadt einen ihrer letzten großen innerstädtischen Klimapuffer. Dieser Verlust ist nicht wiederherstellbar, kein Ausgleichsprojekt ersetzt 355 Hektar unversiegelte Fläche an dieser Stelle.

Der 2014 per Volksentscheid beschlossene Schutz war auch klimapolitisch richtig. Bitte stimmen Sie Nein zum geplanten Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 13,
    perspective: "Klimaschutz",
    betreff: "Das Feld bleibt frei, meine Bitte an Sie als Abgeordnete*r",
    nachricht: `Sehr geehrte Damen und Herren,

ich schreibe Ihnen als jemand, dem Klimaschutz in Berlin am Herzen liegt.

Das Tempelhofer Feld ist nicht einfach eine freie Fläche. Es ist ein ökologisches System mit klar belegten Klimafunktionen: Kühlung der umliegenden Kieze, CO2-Speicherung in Vegetation und Boden, Versickerungsfläche bei Starkregen, Kaltluftzufuhr für das überhitzte Stadtinnere. Das Stadtklimamodell der TU Berlin hat diese Wirkungen dokumentiert.

Diese Funktionen entstehen nicht durch Planung, sie sind das Ergebnis jahrzehntelanger ungestörter Entwicklung. Eine neue Fläche irgendwo am Stadtrand hätte diese Wirkung nicht, weil sie nicht im dichten Süden der Stadt liegt, wo die Hitze am stärksten ist.

Klimaschutz bedeutet auch, zu erhalten, was bereits wirkt. Bitte stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 14,
    perspective: "Klimaschutz",
    betreff: "Keine Änderung des Tempelhofer-Feld-Gesetzes, bitte dagegen stimmen",
    nachricht: `Sehr geehrte Damen und Herren,

das Stadtklimamodell der TU Berlin zeigt klar: Das Tempelhofer Feld senkt die Temperatur in den Kiezen Neukölln und Tempelhof messbar. In einem Sommer mit 35-Grad-Hitze ist das kein Luxus, sondern Daseinsvorsorge. Ältere Menschen, Menschen mit Herzerkrankungen, Kinder, all diese Gruppen profitieren direkt davon.

Hinzu kommt: Das Feld ist eine der letzten großen unversiegelten Flächen im Süden Berlins. Bei zunehmendem Starkregen nimmt es Wasser auf, das die Kanalisation sonst überfordern würde. Diese Funktion ist nicht kompensierbar.

Eine Bebauung auf der Grillwiese würde diesen Effekt dauerhaft zerstören. Was einmal versiegelt ist, bleibt versiegelt. Das ist keine abstrakte Umweltsorge, sondern ein konkreter Verlust für die Menschen, die hier leben.

Ich bitte Sie deshalb, dem Gesetzentwurf nicht zuzustimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 15,
    perspective: "Klimaschutz",
    betreff: "Tempelhofer Feld: Bitte halten Sie den Volkswillen aufrecht",
    nachricht: `Sehr geehrte Damen und Herren,

offene Stadtflächen wie das Tempelhofer Feld sind nicht rückholbar. Ist eine Fläche einmal bebaut und versiegelt, ist sie für Generationen verloren, mitsamt ihrer Klimafunktionen.

Das Feld ist nicht irgendein Grünstreifen. Es ist eine 355 Hektar große unversiegelte Fläche inmitten eines der dichtest besiedelten Teile Berlins. Dieses Feld kühlt, filtert, speichert Wasser und schafft Luftaustausch. Diese Wirkungen hat das Stadtklimamodell der TU Berlin belegt.

Gerade weil die klimatischen Herausforderungen zunehmen, Hitzesommer, Starkregenereignisse, urbane Wärmeinseln, braucht Berlin diese Fläche. Eine Stadt, die ihre klimatischen Schutzflächen opfert, um kurzfristige Wohnbaupolitik zu betreiben, handelt klimapolitisch verantwortungslos.

Als Berliner*in, dem die klimatische Zukunft dieser Stadt wichtig ist, bitte ich Sie: Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 16,
    perspective: "Klimaschutz",
    betreff: "Das Tempelhofer Feld gehört allen Berliner*innen, bitte schützen Sie es",
    nachricht: `Sehr geehrte Damen und Herren,

Berlins Grünflächen stehen unter zunehmendem Druck. Das Tempelhofer Feld ist eine der wenigen noch erhaltenen großen Freiflächen im Stadtinneren und zugleich eine der klimatisch wertvollsten.

Als Versickerungsfläche nimmt es bei Starkregen Wasser auf, das die Kanalisation andernfalls überlasten würde. Als Kühlfläche senkt es die Temperaturen in Neukölln und Tempelhof messbar. Als unversiegelte Fläche speichert es CO2 und ermöglicht Luftaustausch, der in dicht bebauten Stadtteilen kaum noch möglich ist.

Berlin hat sich ambitionierte Klimaziele gesetzt. Es wäre widersprüchlich, gleichzeitig eine der wichtigsten natürlichen Klimaschutzflächen der Stadt zu bebauen. Die Folgen eines solchen Verlustes treffen zuerst die Menschen, die in den anliegenden Kiezen wohnen und sich keinen Umzug leisten können.

Ich bitte Sie, diesem Gesetzentwurf nicht zuzustimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 17,
    perspective: "Klimaschutz",
    betreff: "Gegen die Bebauung des Tempelhofer Feldes, eine Bitte",
    nachricht: `Sehr geehrte Damen und Herren,

wir erleben bereits heute, dass dicht bebaute Stadtteile ohne Grünflächen bei Hitzewellen zur Gesundheitsgefahr werden. Das Tempelhofer Feld schützt Neukölln und Tempelhof vor genau diesem Szenario.

Das Stadtklimamodell der TU Berlin hat belegt, dass das Feld die Umgebung um mehrere Grad kühlt. An Hitzetagen ist dieser Unterschied für ältere Menschen, kleine Kinder und Menschen mit Vorerkrankungen lebenswichtig. Zugleich ist die Fläche unversiegelt, nimmt Starkregen auf und verhindert, dass das Abwassersystem kollabiert.

Berlin hat sich verpflichtet, klimaneutral zu werden. Wer diese Ziele ernst nimmt, kann nicht gleichzeitig eine der wirkungsvollsten natürlichen Klimaschutzflächen bebauen. Das wäre klimapolitisch unglaubwürdig und praktisch schädlich.

Bitte schützen Sie das Feld. Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 18,
    perspective: "Klimaschutz",
    betreff: "Kein Bau auf dem Tempelhofer Feld, bitte stimmen Sie gegen den Gesetzentwurf",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist ein wichtiger Lebensraum für Vögel, Insekten und Pflanzen mitten in der Stadt. Die Feldlerche, eine bundesweit stark gefährdete Vogelart, brütet hier. Trockenrasen, Langgrasbereiche und offene Sandstellen bieten Lebensraum für Arten, die in der verdichteten Stadt sonst keinen Platz finden.

Aber auch aus rein klimatischer Sicht ist die Fläche unverzichtbar: Sie kühlt, sie speichert CO2, sie nimmt Regenwasser auf. Diese Ökosystemleistungen sind das Ergebnis jahrzehntelanger ungestörter Entwicklung und nicht replizierbar.

Wer Klimaschutz und Naturschutz ernst nimmt, kann dem Gesetzentwurf nicht zustimmen. Die Bebauung der Grillwiese würde diesen Lebensraum unwiederbringlich zerstören und Berlins Klimaresilienz dauerhaft schwächen.

Ich bitte Sie, dagegen zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 19,
    perspective: "Klimaschutz",
    betreff: "Das Tempelhofer Feld ist unersetzlich, bitte stimmen Sie dagegen",
    nachricht: `Sehr geehrte Damen und Herren,

ich verfolge die Debatte um das Tempelhofer Feld mit großer Sorge. Nicht nur aus demokratischen Gründen, sondern auch aus Klimaschutzperspektive.

Das Feld ist eine der wertvollsten Freiflächen Berlins. Als Versickerungsfläche schützt es vor Überflutungen bei Starkregen. Als Kühlfläche senkt es die Temperaturen in den anliegenden Kiezen messbar. Als unversiegelte Offenfläche ist es Lebensraum für Arten, die in der verdichteten Stadt sonst keine Chance hätten. Diese Funktionen lassen sich nicht ersetzen.

Berlin hat Klimanotstand ausgerufen und ambitionierte Ziele. Es ist unvereinbar, gleichzeitig eine der größten innerstädtischen Klimaschutzflächen zu opfern, nur um eine kleine Zahl Wohneinheiten zu schaffen, die das Wohnungsproblem nicht löst. Im Stadtentwicklungsplan sind über 249.000 Bauplätze in Berlin verzeichnet, die das Feld nicht brauchen.

Bitte stimmen Sie Nein zum Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 20,
    perspective: "Klimaschutz",
    betreff: "Meine Bitte: Stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes",
    nachricht: `Sehr geehrte Damen und Herren,

Berlin hat sich Klimaneutralität zum Ziel gesetzt. Dieses Ziel ist nur erreichbar, wenn die Stadt auch schützt, was bereits vorhanden ist und wirkt. Das Tempelhofer Feld ist eines der wirkmächtigsten natürlichen Klimaschutzinstrumente, die Berlin hat.

Das Stadtklimamodell der TU Berlin belegt die Kühlwirkung des Feldes auf die umliegenden Kieze. Das Feld nimmt Starkregen auf, verhindert Überflutungen und schafft durch seine Offenheit Luftaustausch, der das Stadtklima spürbar verbessert. Diese Leistungen entstehen kostenlos und ohne Technik, durch eine intakte natürliche Fläche.

Eine Bebauung würde diese Wirkungen dauerhaft zerstören. Kein Ausgleichsprojekt kann 355 Hektar mitten in der Stadt ersetzen. Ich bitte Sie: Zeigen Sie, dass Berliner Klimapolitik keine leeren Versprechen sind. Stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Familie (10 templates) ─────────────────────────────────────────────
  {
    id: 21,
    perspective: "Familie",
    betreff: "Das Feld bleibt frei, meine Bitte an Sie als Abgeordnete*r",
    nachricht: `Sehr geehrte Damen und Herren,

ich bin Elternteil und lebe in Berlin. Das Tempelhofer Feld ist für unsere Familie einer der wichtigsten Orte in dieser Stadt. Nicht weil es besonders gestaltet wäre, sondern weil es das Gegenteil bietet: Weite, Stille, keine Autos, kein Konsumzwang. Kinder können hier rennen, Drachen steigen lassen, Fahrrad fahren, einfach sein.

Solche Orte gibt es in Berlin nicht viele, besonders nicht in Neukölln und Tempelhof, wo Wohnungen klein sind, Hinterhöfe eng und Parks meist überfüllt. Das Tempelhofer Feld ist das Wohnzimmer der Kieze, kostenlos zugänglich für alle, unabhängig von Einkommen und Herkunft.

2014 haben fast 750.000 Berliner*innen für den Schutz dieses Ortes gestimmt. Diese Entscheidung war auch eine Entscheidung für Familien. Bitte respektieren Sie sie. Stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 22,
    perspective: "Familie",
    betreff: "Das Tempelhofer Feld gehört allen Berliner*innen, bitte schützen Sie es",
    nachricht: `Sehr geehrte Damen und Herren,

als Mutter/Vater zweier Kinder ist das Tempelhofer Feld für uns mehr als eine Freizeitfläche. Es ist ein Ort, an dem Kinder aus dichten Stadtteilen echte Weite erleben. In Neukölln und Tempelhof, wo Wohnungen klein und Innenhöfe kaum grün sind, gibt es wenig Vergleichbares.

Besonders für Familien, die sich kein Auto und keine teuren Ausflüge leisten können, ist das Feld unverzichtbar. Es ist kostenlos, liegt nah, ist sicher und bietet Raum für alle Altersstufen gleichzeitig. Das ist eine Form von sozialer Gerechtigkeit, die selten explizit politisch verhandelt wird.

CDU und SPD wollen dieses Gesetz ändern, obwohl der Volksentscheid 2014 klar dagegen war und das Beteiligungsverfahren des Senats erneut ergab: die Mehrheit will keine Bebauung. Bitte hören Sie auf diese Stimmen. Stimmen Sie gegen die Bebauung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 23,
    perspective: "Familie",
    betreff: "Volksentscheid respektieren: Keine Bebauung des Tempelhofer Feldes",
    nachricht: `Sehr geehrte Damen und Herren,

Berliner Familien brauchen zugängliche, kostenlose Orte zum Spielen, Bewegen und Durchatmen. Das Tempelhofer Feld bietet das für eine riesige Anzahl von Menschen gleichzeitig, auf 355 Hektar offener Fläche, ohne Eintritt, ohne Anmeldung, ohne Konsumzwang.

Familien mit Kindern, Alleinerziehende, Menschen mit wenig Einkommen: Für sie alle ist das Feld eine der wichtigsten Ressourcen in dieser Stadt. Kleinere Parks, Spielplätze und Grünstreifen sind kein Ersatz für die Kombination aus Weite, Freiheit und sozialer Offenheit, die das Feld bietet.

Wenn diese Fläche bebaut wird, trifft das zuerst jene, die sich keine Alternativen leisten können. Das 2014 per Volksentscheid beschlossene Schutzgesetz war auch ein Versprechen an sie. Bitte stimmen Sie gegen seine Änderung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 24,
    perspective: "Familie",
    betreff: "Kein Bau auf dem Tempelhofer Feld, bitte stimmen Sie gegen den Gesetzentwurf",
    nachricht: `Sehr geehrte Damen und Herren,

für meine Familie ist das Tempelhofer Feld unverzichtbar. Kein Park der Stadt bietet diese Kombination aus Weite, Zugänglichkeit und Freiheit. Meine Kinder sind hier aufgewachsen, sie kennen diesen Ort als Teil ihrer Stadt.

Das Tempelhofer Feld ist kostenlos, liegt zentral und braucht keine Reservierung. Es ist damit einer der demokratischsten öffentlichen Räume Berlins. Familien mit wenig Geld haben hier dieselben Möglichkeiten wie alle anderen, das ist selten in einer Stadt, in der immer mehr Freizeitangebote kostenpflichtig werden.

2014 haben fast 750.000 Berliner*innen für den Schutz dieses Ortes gestimmt. Ich möchte, dass meine Kinder ihn noch kennen. Und deren Kinder auch. Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 25,
    perspective: "Familie",
    betreff: "Tempelhofer Feld: Bitte halten Sie den Volkswillen aufrecht",
    nachricht: `Sehr geehrte Damen und Herren,

meine Kinder gehen fast jedes Wochenende auf das Tempelhofer Feld. Es ist für sie selbstverständlicher Teil dieser Stadt. Sie fahren Fahrrad auf der alten Startbahn, spielen mit anderen Kindern aus dem Kiez, beobachten Vögel in der offenen Landschaft.

Das alles gibt es für sie gratis und ohne Anmeldung. In einer Stadt, in der immer mehr öffentliche Räume privatisiert oder gebührenpflichtig werden, ist das außergewöhnlich. Das Feld gehört allen, genau so wie es der Volksentscheid 2014 festgelegt hat.

Die geplante Gesetzesänderung würde diesen Ort verändern, dauerhaft. Ich bitte Sie als Abgeordnete*r, das zu verhindern. Stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 26,
    perspective: "Familie",
    betreff: "Keine Änderung des Tempelhofer-Feld-Gesetzes, bitte dagegen stimmen",
    nachricht: `Sehr geehrte Damen und Herren,

gerade für Familien, die sich keine Reisen, keine teuren Freizeitangebote und keinen Garten leisten können, ist das Tempelhofer Feld eine der wichtigsten Flächen Berlins. Es ist kostenlos, liegt nah und groß genug, dass man wirklich Abstand von der Enge der Stadt bekommt.

In Neukölln und Tempelhof, wo viele Familien auf engem Raum leben, ist das Feld oft der einzige echte Freiraum. Spielplätze und kleine Parks sind überfüllt und bieten nicht die Weite, die Kinder für freies Spiel brauchen.

Das Tempelhofer-Feld-Gesetz wurde 2014 von fast 750.000 Menschen beschlossen, auch von Familien genau dieser Kieze. Wenn es jetzt geändert wird, verlieren besonders jene den meisten, die sich kein Mehr leisten können.

Ich bitte Sie, diese Fläche zu schützen und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 27,
    perspective: "Familie",
    betreff: "Das Tempelhofer Feld ist unersetzlich, bitte stimmen Sie dagegen",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist ein Ort, der Menschen verbindet. Familien mit Kindern, ältere Menschen, Sportler*innen, Menschen aus aller Welt, die in Neukölln und Tempelhof leben. Diese Mischung auf einer offenen Fläche ohne Eintritt ist einmalig.

Bebauung würde nicht nur Fläche kosten. Sie würde ein soziales Gefüge zerstören, das sich über Jahre entwickelt hat. Der Grill am Wochenende, das gemeinsame Spiel der Kinder, das Picknick verschiedenster Menschen nebeneinander: Das ist gelebte Stadtgesellschaft, und sie braucht Raum.

2014 haben fast 750.000 Berliner*innen dafür gestimmt, diesen Raum zu erhalten. Das Beteiligungsverfahren des Senats bestätigte: Die Mehrheit will das weiterhin. Bitte respektieren Sie das. Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 28,
    perspective: "Familie",
    betreff: "Als Berliner Bürger*in bitte ich Sie: Das Feld muss frei bleiben",
    nachricht: `Sehr geehrte Damen und Herren,

ich denke oft daran, welche Stadt ich meinen Kindern hinterlasse. Das Tempelhofer Feld ist Teil der Antwort: ein Ort, der nicht dem Verwertungsinteresse geopfert wurde, der allen gehört und für alle offen ist.

Dieser Ort entstand durch einen demokratischen Akt. Fast 750.000 Berliner*innen haben 2014 für das Tempelhofer-Feld-Gesetz gestimmt, auch deshalb, weil sie wussten, was verloren geht, wenn der Platz bebaut wird. Nicht nur Freifläche, sondern ein Teil des gemeinsamen Berlins.

In Berlin gibt es laut Stadtentwicklungsplan bereits Flächen für über 249.000 Wohnungen, ohne das Feld anzutasten. Die Wohnungsnot ist real, aber das Argument, das Feld zu bebauen, ist es nicht.

Bitte sorgen Sie dafür, dass das Feld frei bleibt. Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 29,
    perspective: "Familie",
    betreff: "Gegen die Bebauung des Tempelhofer Feldes, eine Bitte",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist einer der wenigen Orte in dieser Stadt, an dem ich mit meinen Kindern wirklich entspannen kann. Kein Lärm, keine Autos, keine Enge. Nur Weite, Wind und die Freiheit, sich zu bewegen, wohin man möchte.

Das ist selten in einer dichten Metropole wie Berlin. Für Familien, die in kleinen Wohnungen ohne Garten leben, für Kinder, die in engen Kiezen aufwachsen, für alle, die sich kein Auto leisten können: Das Feld ist Freiheit, und sie ist kostenlos.

2014 haben fast 750.000 Berliner*innen für den Erhalt dieses Ortes gestimmt. Das Beteiligungsverfahren des Senats bestätigte diese Haltung erneut. Bitte respektieren Sie das. Stimmen Sie gegen die Bebauung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 30,
    perspective: "Familie",
    betreff: "Meine Bitte: Stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes",
    nachricht: `Sehr geehrte Damen und Herren,

als Berliner Familie nutzen wir das Tempelhofer Feld das ganze Jahr. Im Sommer zum Grillen und Spielen, im Herbst für Spaziergänge, im Winter für Schlittenfahrten, wenn Schnee liegt. Es ist Teil unseres Alltags, und wir sind keine Ausnahme.

Hunderttausende Berliner*innen nutzen dieses Feld regelmäßig, kostenlos, ohne Anmeldung, ohne Hierarchie. Das macht es zu einem der sozialsten Orte der Stadt. Jeder und jede ist willkommen.

Ein solcher Ort entsteht nicht neu. Er muss erhalten werden. Das haben 2014 fast 750.000 Menschen beim Volksentscheid gesagt. CDU und SPD planen nun, diesen Beschluss durch eine Gesetzesänderung zu umgehen. Ich bitte Sie, das zu verhindern. Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Sport & Freizeit (10 templates) ────────────────────────────────────
  {
    id: 31,
    perspective: "Sport & Freizeit",
    betreff: "Das Tempelhofer Feld gehört allen Berliner*innen, bitte schützen Sie es",
    nachricht: `Sehr geehrte Damen und Herren,

ich fahre regelmäßig auf dem Tempelhofer Feld Fahrrad. Es ist einer der wenigen Orte in Berlin, an dem das wirklich entspannt möglich ist: ohne Autoverkehr, ohne Enge, ohne Ampeln. Auf 355 Hektar Offenfläche kann man sich bewegen, wie man möchte.

Das Feld bietet Platz für eine Vielfalt von sportlichen Aktivitäten, die es in dieser Kombination in Berlin kein zweites Mal gibt. Jogging, Kiten, Skateboard, Slacklinen, Yoga, Ballspiele, all das ohne Mitgliedschaft, ohne Buchung, ohne Eintritt. Das ist demokratischer Zugang zu Sport, wie er selten ist.

2014 haben fast 750.000 Berliner*innen für den Erhalt dieses Ortes gestimmt. Ich bitte Sie, diesen Beschluss zu respektieren. Für mich und für alle, die das Feld täglich für Sport und Erholung nutzen. Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 32,
    perspective: "Sport & Freizeit",
    betreff: "Kein Bau auf dem Tempelhofer Feld, bitte stimmen Sie gegen den Gesetzentwurf",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld bietet Platz für Sport, den Berlin sonst kaum hat: Jogging, Skating, Kiten, Yoga, Ballspiele auf riesigen Flächen, ohne Eintritt und ohne Platzzwang. Jeder und jede kann kommen, wann und wie es passt.

Das ist urbaner Luxus, aber einer für alle, unabhängig von Einkommen oder Vereinsmitgliedschaft. Für viele Berliner*innen, besonders in den dicht besiedelten Kiezen Neukölln und Tempelhof, ist das Feld die wichtigste Sportinfrastruktur überhaupt.

CDU und SPD wollen das Tempelhofer-Feld-Gesetz ändern und auf der Grillwiese bauen. Das würde diesen Ort dauerhaft verändern. 2014 haben fast 750.000 Menschen dagegen gestimmt. Das Beteiligungsverfahren bestätigte: Die Mehrheit will das Feld erhalten. Ich bitte Sie, auf diese Mehrheit zu hören und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 33,
    perspective: "Sport & Freizeit",
    betreff: "Volksentscheid respektieren: Keine Bebauung des Tempelhofer Feldes",
    nachricht: `Sehr geehrte Damen und Herren,

ich betreibe regelmäßig Sport auf dem Tempelhofer Feld und weiß, dass es für viele Berliner*innen der einzige wohnortnahe Ort ist, der Sport auf dieser Fläche überhaupt ermöglicht.

In einer Stadt, in der Sporthallen ausgelastet, Vereinsmitgliedschaften teuer und Parks meist überfüllt sind, bietet das Feld etwas Seltenes: 355 Hektar offenen Raum, kostenlos und ohne Anmeldung. Wer laufen, Kiten, Rollschuh fahren oder einfach spazieren möchte, findet hier Platz.

Diesen Ort ersetzen zu können ist eine Illusion. Die Kombination aus Größe, Lage und Zugänglichkeit ist einzigartig. Das haben 2014 auch fast 750.000 Berliner*innen erkannt, als sie für das Tempelhofer-Feld-Gesetz stimmten. Ich bitte Sie, gegen die Änderung dieses Gesetzes zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 34,
    perspective: "Sport & Freizeit",
    betreff: "Das Feld bleibt frei, meine Bitte an Sie als Abgeordnete*r",
    nachricht: `Sehr geehrte Damen und Herren,

ich fliege auf dem Tempelhofer Feld Drachen, seit ich Kind bin. Für solche Aktivitäten braucht man Platz, echten Platz ohne Bäume und Hindernisse. Den gibt es in Berlin fast nirgendwo außer hier.

Das Feld ist für mich und viele andere kein politisches Thema, sondern gelebter Alltag. Kiter, Modellflieger, Frisbee-Spieler, Menschen, die einfach laufen wollen, ohne auf andere zu achten: Sie alle brauchen die Weite, die dieses Feld bietet. Kein kleiner Stadtpark kann das ersetzen.

Das haben 2014 fast 750.000 Berliner*innen verstanden, als sie für das Tempelhofer-Feld-Gesetz stimmten. Jetzt plant die Koalition, dieses Gesetz zu ändern. Ich bitte Sie als Abgeordnete*r, das zu verhindern und für den Erhalt dieses unvergleichlichen Ortes zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 35,
    perspective: "Sport & Freizeit",
    betreff: "Tempelhofer Feld: Bitte halten Sie den Volkswillen aufrecht",
    nachricht: `Sehr geehrte Damen und Herren,

Sport ohne teure Mitgliedschaft, ohne feste Zeiten, ohne Platzreservierung: Das ist das Tempelhofer Feld für Hunderttausende Berliner*innen. Man kommt, bewegt sich, geht wieder. Gratis, barrierefrei, jederzeit.

Diese Art von Zugang zu sportlicher Betätigung ist sozial bedeutsam. In einer Stadt, in der Sportvereine oft Wartelisten haben und Fitnessstudios teuer sind, ist das Feld für viele die einzige niedrigschwellige Möglichkeit. Besonders für Kinder und Jugendliche aus ärmeren Haushalten ist das unverzichtbar.

Den Volksentscheid von 2014 zu übergehen, um hier zu bauen, wäre ein sozialpolitischer Fehler. Das Feld gehört allen Berliner*innen, auch denen, die für den Schutz gestimmt haben. Bitte stimmen Sie dagegen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 36,
    perspective: "Sport & Freizeit",
    betreff: "Gegen die Bebauung des Tempelhofer Feldes, eine Bitte",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist nicht nur Grünfläche. Es ist ein Ort der Bewegung, der Begegnung und der Erholung, der gerade für Menschen aus dichten Stadtteilen unverzichtbar ist.

Ob Laufen, Radfahren, Kiten, Yoga oder einfach Spazierengehen: Das Feld gibt jedem Raum, ohne Eintritt, ohne Dresscode, ohne Buchung. Das ist eine Form von Teilhabe, die in einer zunehmend teuren Stadt immer seltener wird.

2014 haben fast 750.000 Berliner*innen für das Tempelhofer-Feld-Gesetz gestimmt, auch weil sie wussten, was sie verlieren würden. Das Beteiligungsverfahren des Senats zeigte erneut: Die Mehrheit will den Erhalt. CDU und SPD ignorieren das.

Ich bitte Sie, diesen Ort zu schützen und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 37,
    perspective: "Sport & Freizeit",
    betreff: "Keine Änderung des Tempelhofer-Feld-Gesetzes, bitte dagegen stimmen",
    nachricht: `Sehr geehrte Damen und Herren,

ich laufe dreimal pro Woche auf dem Tempelhofer Feld. Es ist mein Ausgleich zum Stadtleben, mein Ausweg aus der Enge. Und ich weiß, dass das für sehr viele Menschen genauso ist.

Das Feld bietet etwas, das in einer Großstadt wie Berlin selten ist: endlose Weite, flacher Untergrund, frische Luft, keine Autos. Wer eine Runde drehen will, kommt einfach. Kostenlos, ohne Anmeldung, zu jeder Jahreszeit.

Eine Bebauung auf der Grillwiese würde diesen Ort dauerhaft verändern. Nicht nur die Fläche wäre kleiner, das Gefühl von Weite, das das Feld so besonders macht, wäre weg. Das haben 2014 fast 750.000 Menschen erkannt, als sie für den Schutz stimmten. Bitte stimmen Sie dagegen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 38,
    perspective: "Sport & Freizeit",
    betreff: "Das Tempelhofer Feld ist unersetzlich, bitte stimmen Sie dagegen",
    nachricht: `Sehr geehrte Damen und Herren,

ein Ort wie das Tempelhofer Feld ist nicht planbar. Er entsteht durch Geschichte, durch Nutzung, durch Menschen, die ihn immer wieder neu entdecken. Die alte Flughafenlandebahn, die Grillwiese, die offenen Wiesenbereiche mit Feldlerchen und Hasen: Das alles zusammen ist etwas Seltenes in einer Metropole.

Ich nutze das Feld seit Jahren für Sport und Erholung. Jogging, Radfahren, manchmal einfach Sitzen und die Weite genießen. Diese Nutzung teile ich mit Hunderttausenden anderen Berliner*innen, die 2014 für den Schutz dieses Ortes gestimmt haben.

CDU und SPD planen nun, das Tempelhofer-Feld-Gesetz zu ändern. Ich bitte Sie, diesen Ort zu behalten und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 39,
    perspective: "Sport & Freizeit",
    betreff: "Als Berliner Bürger*in bitte ich Sie: Das Feld muss frei bleiben",
    nachricht: `Sehr geehrte Damen und Herren,

ob Kiten, Slacklinen, Skateboard oder einfach Spazierengehen: Das Tempelhofer Feld gibt jedem Raum. Genau das macht es so wertvoll. Es ist der einzige Ort in Berlin, an dem so viele verschiedene Aktivitäten nebeneinander stattfinden können, kostenlos und für alle zugänglich.

Das ist in einer Großstadt außergewöhnlich. Sportangebote sind oft teuer, gebunden an Vereine oder Öffnungszeiten. Das Feld kennt das nicht. Es ist offen, wann immer man kommt.

2014 haben fast 750.000 Menschen für den Schutz dieses Ortes gestimmt. CDU und SPD wollen diesen Schutz nun aushebeln. Das Beteiligungsverfahren bestätigte erneut die Ablehnung von Bebauung. Ich bitte Sie, dafür zu sorgen, dass das so bleibt, und gegen die Bebauung zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 40,
    perspective: "Sport & Freizeit",
    betreff: "Meine Bitte: Stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes",
    nachricht: `Sehr geehrte Damen und Herren,

auf dem Tempelhofer Feld findet jeder Platz, ohne Buchung, ohne Eintritt, ohne Ausschluss. Ob Anfänger*in oder Leistungssportler*in, ob Kind oder Senior: Die Fläche gehört allen und ist für alle nutzbar.

Das ist außergewöhnlich für eine Metropole wie Berlin. In einer Stadt, in der öffentliche Sporträume unter Druck stehen, Hallenzeiten knapp sind und Vereinsmitgliedschaften teuer werden, ist das Feld eine demokratische Ressource.

Diese Ressource soll nun durch eine Änderung des Tempelhofer-Feld-Gesetzes teilweise bebaut werden. Das widerspricht dem Volksentscheid von 2014, den nahezu 750.000 Menschen gewonnen haben. Es widerspricht auch dem Ergebnis des Beteiligungsverfahrens. Ich hoffe, dass Sie diesen Wert erkennen und gegen den Gesetzentwurf stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Stadtentwicklung (10 templates) ────────────────────────────────────
  {
    id: 41,
    perspective: "Stadtentwicklung",
    betreff: "Kein Bau auf dem Tempelhofer Feld, bitte stimmen Sie gegen den Gesetzentwurf",
    nachricht: `Sehr geehrte Damen und Herren,

ich befasse mich mit Stadtentwicklung und möchte eines klarstellen: Das Tempelhofer Feld löst Berlins Wohnungskrise nicht. Der Stadtentwicklungsplan Wohnen 2040 identifiziert Flächen für über 249.000 Wohneinheiten in Berlin, ohne das Tempelhofer Feld anzutasten. Die Grillwiese fällt angesichts dieses Potenzials kaum ins Gewicht.

Gute Stadtentwicklung setzt auf verfügbare Potenziale: Konversion von Gewerbeflächen, Nachverdichtung im Bestand, Aktivierung von Leerstand. Berlin hat davon reichlich, und das braucht kein Schutzgesetz zu brechen.

Das Tempelhofer Feld hingegen ist ein städtebauliches Alleinstellungsmerkmal, das weltweit seinesgleichen sucht: 355 Hektar unverbaute Offenfläche inmitten einer dichten Metropole. Einmal bebaut, ist es weg. Das ist nicht aufholbar, weder städtebaulich noch klimatisch.

Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 42,
    perspective: "Stadtentwicklung",
    betreff: "Das Tempelhofer Feld gehört allen Berliner*innen, bitte schützen Sie es",
    nachricht: `Sehr geehrte Damen und Herren,

Berlin hat genug Flächen, auf denen Wohnungsbau möglich ist, ohne Schutzgebiete und demokratisch gesicherte Freiflächen anzutasten.

Der Stadtentwicklungsplan Wohnen 2040 weist Grundstücke für über 249.000 Wohnungen in Berlin aus, ohne das Tempelhofer Feld zu berücksichtigen. Die Wohnungsnot ist real und ernst zu nehmen, aber sie rechtfertigt nicht den dauerhaften Verlust einer der wichtigsten öffentlichen Flächen der Stadt.

Städtebaulich wäre die Bebauung des Feldes ein Fehler, der sich in Jahrzehnten rächen würde. Weltweit kämpfen Städte darum, solche Flächen zu erhalten. Berlin hat das Glück, eine zu besitzen. Sie zu opfern für eine Anzahl Wohneinheiten, die das Wohnungsproblem nicht strukturell löst, wäre ein Versagen vorausschauender Stadtplanung.

Bitte stimmen Sie gegen die Gesetzesänderung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 43,
    perspective: "Stadtentwicklung",
    betreff: "Volksentscheid respektieren: Keine Bebauung des Tempelhofer Feldes",
    nachricht: `Sehr geehrte Damen und Herren,

der Wohnungsmangel in Berlin ist real. Aber die Lösung liegt nicht auf dem Tempelhofer Feld. Gute Stadtentwicklung nutzt bestehende Potenziale: Brachflächen, Konversionen, Verdichtung im Bestand. Berlin hat davon reichlich.

Der Stadtentwicklungsplan Wohnen 2040 nennt Flächen für über 249.000 Wohnungen, ohne das Feld zu berühren. Warum also ausgerechnet eine der bedeutendsten innerstädtischen Freiflächen Berlins bebauen? Nicht zuletzt, weil das 2014 per Volksentscheid durch fast 750.000 Menschen ausgeschlossen wurde.

Vier von sechs eingeladenen Architekturbüros lehnten eine Mitarbeit am Wettbewerb ab, weil sie das Vorhaben grundsätzlich ablehnen. Das ist ein deutliches fachliches Signal. Ich bitte Sie, den Gesetzentwurf abzulehnen und nach besseren Lösungen zu suchen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 44,
    perspective: "Stadtentwicklung",
    betreff: "Das Feld bleibt frei, meine Bitte an Sie als Abgeordnete*r",
    nachricht: `Sehr geehrte Damen und Herren,

Architektinnen und Architekten von Weltrang haben sich klar positioniert. Lacaton und Vassal, Pritzker-Preisträger, sagten: Man sollte nicht einmal einen Quadratmeter dieser Dimension berühren. Vier von sechs Architekturbüros, die zum Wettbewerb eingeladen wurden, verweigerten die Teilnahme, weil sie die Bebauung grundsätzlich ablehnen.

Das ist fachliche Expertise auf höchstem Niveau. Dazu kommt: Der Stadtentwicklungsplan Wohnen 2040 weist in Berlin Flächen für über 249.000 Wohnungen aus, ohne das Tempelhofer Feld anzutasten. Die Wohnungsnot ist lösbar, ohne diesen Ort zu opfern.

Das Tempelhofer Feld ist ein städtebauliches Unikat. Einmal bebaut, ist es dauerhaft verloren. 2014 haben fast 750.000 Berliner*innen für seinen Schutz gestimmt. Ich bitte Sie, ihr zu folgen und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 45,
    perspective: "Stadtentwicklung",
    betreff: "Tempelhofer Feld: Bitte halten Sie den Volkswillen aufrecht",
    nachricht: `Sehr geehrte Damen und Herren,

internationale Städte kämpfen darum, Freiräume in dichten Quartieren zu erhalten, denn sie wissen, was ohne sie verloren geht. Berlin hat das Glück, mit dem Tempelhofer Feld noch einen solchen Ort zu besitzen.

355 Hektar unverbaute Offenfläche inmitten einer Metropole: Das gibt es kein zweites Mal auf der Welt in dieser Form. Städtebaulich, klimatisch und sozial ist dieser Ort unverzichtbar. Den Volksentscheid von 2014 zu umgehen, um hier Wohnungen zu bauen, die das strukturelle Wohnungsproblem nicht lösen, wäre strategisch und städtebaulich falsch.

Der Stadtentwicklungsplan Wohnen 2040 zeigt: Es gibt über 249.000 alternative Bauplätze in Berlin. Es gibt keinen zwingenden Grund, das Tempelhofer Feld zu bebauen. Bitte stimmen Sie dagegen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 46,
    perspective: "Stadtentwicklung",
    betreff: "Gegen die Bebauung des Tempelhofer Feldes, eine Bitte",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist ein städtebauliches Alleinstellungsmerkmal Berlins, das weltweit seinesgleichen sucht. Kein vergleichbares Stadtfeld dieser Größe existiert in einer Metropole dieser Dichte. Pritzker-Preisträger wie Lacaton und Vassal haben das anerkannt und sich klar gegen Bebauung ausgesprochen.

Das Feld ist nicht nur Freifläche, es ist Klimainfrastruktur, sozialer Raum und demokratisches Erbe. 2014 haben fast 750.000 Berliner*innen für seinen Schutz gestimmt. Das Beteiligungsverfahren des Senats bestätigte erneut die überwältigende Ablehnung von Bebauung.

Einmal bebaut, ist es für immer weg. Keine zukünftige Regierung kann das rückgängig machen. Ich bitte Sie, dieses irreversible Signal nicht zu setzen. Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 47,
    perspective: "Stadtentwicklung",
    betreff: "Keine Änderung des Tempelhofer-Feld-Gesetzes, bitte dagegen stimmen",
    nachricht: `Sehr geehrte Damen und Herren,

ich bin überzeugt: Wohnungspolitik, die auf dem Rücken des Tempelhofer Feldes betrieben wird, ist keine gute Wohnungspolitik. Sie löst das Problem nicht und schafft ein neues.

Der Stadtentwicklungsplan Wohnen 2040 identifiziert Flächen für über 249.000 Wohneinheiten in Berlin, ohne das Tempelhofer Feld zu benötigen. Es gibt Alternativen: Konversion von Gewerbeflächen, Aktivierung von Leerstand, Nachverdichtung in Bestandsquartieren. Diese Wege sind politisch anspruchsvoller, aber stadtplanerisch richtig.

Das Tempelhofer Feld hingegen ist klimatisch, ökologisch und sozial nicht zu ersetzen. Es ist das Ergebnis eines demokratischen Beschlusses von fast 750.000 Menschen. Die Stadt braucht beides: Wohnungen und Freiflächen. Es gibt einen Weg, beides zu haben. Bitte stimmen Sie gegen die Bebauung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 48,
    perspective: "Stadtentwicklung",
    betreff: "Das Tempelhofer Feld ist unersetzlich, bitte stimmen Sie dagegen",
    nachricht: `Sehr geehrte Damen und Herren,

die Koalition aus CDU und SPD plant Bebauung auf der Grillwiese des Tempelhofer Feldes. Abgesehen vom demokratiepolitischen Problem, dem Volksentscheid 2014, gibt es auch städtebauliche Einwände: Wohncontainer und kleine Einheiten auf einer einzigartigen innerstädtischen Freifläche sind keine ernsthafte Antwort auf die Berliner Wohnungsnot.

Der Stadtentwicklungsplan Wohnen 2040 zeigt: Berlin hat Potenzial für über 249.000 Wohnungen auf anderen Flächen. Vier von sechs eingeladenen Architekturbüros lehnten eine Beteiligung am Wettbewerb ab, weil sie das Vorhaben grundsätzlich ablehnen. Das sind keine Einzelmeinungen.

Ich bitte Sie, diesen symbolischen und sachlich schwachen Schritt zu stoppen. Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 49,
    perspective: "Stadtentwicklung",
    betreff: "Als Berliner Bürger*in bitte ich Sie: Das Feld muss frei bleiben",
    nachricht: `Sehr geehrte Damen und Herren,

Berlin hat eine lange Geschichte guter und schlechter Stadtplanung. Das Tempelhofer Feld steht für eine der besten Entscheidungen der letzten Jahrzehnte: Diese Fläche für alle offen zu halten, unbebaut, zugänglich und kostenlos.

Diese Entscheidung rückgängig zu machen wäre ein Fehler, der sich in 20 Jahren rächt. Nicht nur weil der Volksentscheid 2014 von fast 750.000 Menschen getragen wurde, sondern weil das Feld klimatisch, ökologisch und städtebaulich unersetzlich ist.

Pritzker-Preisträgerin Anne Lacaton sagte: Man sollte nicht einmal einen Quadratmeter dieser Dimension berühren. Das ist Fachkenntnis, die ernst genommen werden sollte. Der Stadtentwicklungsplan Wohnen 2040 zeigt: Es gibt über 249.000 alternative Bauplätze. Bitte stimmen Sie Nein.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 50,
    perspective: "Stadtentwicklung",
    betreff: "Meine Bitte: Stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes",
    nachricht: `Sehr geehrte Damen und Herren,

ich bitte Sie um eine Entscheidung, die Sie in Zukunft nicht bereuen werden. Das Tempelhofer Feld ist ein städtischer Schatz. Es zu bebauen löst kein Problem und schafft ein neues.

Der Wohnungsmangel in Berlin ist real, aber die Lösung liegt woanders. Der Stadtentwicklungsplan Wohnen 2040 weist über 249.000 Wohneinheiten auf alternativen Flächen aus. Architektur-Nobelpreisträgerinnen wie Lacaton und Vassal, vier von sechs eingeladenen Wettbewerbsbüros, und das Ergebnis des Beteiligungsverfahrens weisen alle in dieselbe Richtung: Das Feld soll frei bleiben.

Einmal bebaut, gibt es kein Zurück. Die Chance, diesen Ort für künftige Generationen zu erhalten, besteht jetzt. Bitte nutzen Sie sie. Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Kurze Vorlagen: Demokratie ─────────────────────────────────────────
  {
    id: 51,
    perspective: "Demokratie",
    length: "kurz",
    betreff: "Volksentscheid 2014, bitte stimmen Sie dagegen",
    nachricht: `Sehr geehrte Damen und Herren,

750.000 Berliner*innen haben beim Volksentscheid 2014 das Tempelhofer-Feld-Gesetz beschlossen. Dieses Ergebnis einfach parlamentarisch zu kippen entwertet direkte Demokratie als Instrument. Wenn Volksabstimmungen nur dann gelten, wenn sie der aktuellen Regierung passen, wird niemand mehr daran teilnehmen.

Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 52,
    perspective: "Demokratie",
    length: "kurz",
    betreff: "Gegen die Bebauung: Demokratie ist nicht verhandelbar",
    nachricht: `Sehr geehrte Damen und Herren,

der Volksentscheid 2014 war kein Vorschlag, er war ein Beschluss. Das Tempelhofer-Feld-Gesetz ist das direkte Ergebnis dieses Beschlusses. Wer es ändert, sendet das Signal: Volksabstimmungen gelten nur, solange sie bequem sind.

Ich erwarte von gewählten Abgeordneten, dass sie demokratische Beschlüsse schützen. Bitte stimmen Sie Nein.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 53,
    perspective: "Demokratie",
    length: "kurz",
    betreff: "Kein Bau auf dem Feld, kurz und klar",
    nachricht: `Sehr geehrte Damen und Herren,

Friedrich Merz plädierte in einer Fernsehdebatte dafür, den Volksentscheid zu ignorieren. Kanzler Scholz pflichtete ihm bei. Beide lagen falsch. Direkte Demokratie ist kein Verhandlungsgegenstand.

Bitte zeigen Sie, dass das Berliner Abgeordnetenhaus das anders sieht. Stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 54,
    perspective: "Demokratie",
    length: "kurz",
    betreff: "Das Feld bleibt frei, bitte dagegen stimmen",
    nachricht: `Sehr geehrte Damen und Herren,

ein Volksentscheid, der bei nächster Gelegenheit parlamentarisch korrigiert wird, ist kein Volksentscheid. Es ist eine Befragung. Ich bin nicht für eine Befragung angetreten, sondern für eine Entscheidung.

Bitte respektieren Sie die Entscheidung von 2014. Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 55,
    perspective: "Demokratie",
    length: "kurz",
    betreff: "Meine Stimme gilt noch, bitte schützen Sie sie",
    nachricht: `Sehr geehrte Damen und Herren,

ich habe 2014 beim Volksentscheid zum Tempelhofer Feld abgestimmt. Diese Stimme soll noch gelten. Bitte stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes und zeigen Sie, dass direkte Demokratie in Berlin mehr wert ist als eine parlamentarische Mehrheit.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Kurze Vorlagen: Klimaschutz ─────────────────────────────────────────
  {
    id: 56,
    perspective: "Klimaschutz",
    length: "kurz",
    betreff: "Das Feld kühlt Berlin, bitte schützen Sie es",
    nachricht: `Sehr geehrte Damen und Herren,

das Stadtklimamodell der TU Berlin belegt: Das Tempelhofer Feld senkt die Temperatur in Neukölln und Tempelhof um mehrere Grad. An Hitzetagen ist das der Unterschied zwischen erträglichen und gefährlichen Bedingungen für ältere Menschen und Kinder.

Diesen Effekt kann kein Bebauungsplan ersetzen. Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 57,
    perspective: "Klimaschutz",
    length: "kurz",
    betreff: "Klimaschutz konkret: Keine Bebauung des Tempelhofer Feldes",
    nachricht: `Sehr geehrte Damen und Herren,

Klimaschutz bedeutet auch, das zu erhalten, was die Stadt bereits schützt. Das Tempelhofer Feld ist Kühlkörper, Versickerungsfläche und CO2-Speicher in einem. Einmal bebaut, sind diese Funktionen dauerhaft verloren.

Bitte stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 58,
    perspective: "Klimaschutz",
    length: "kurz",
    betreff: "Hitzeschutz für Berlin, das Feld muss frei bleiben",
    nachricht: `Sehr geehrte Damen und Herren,

Berlin erlebt immer mehr Hitzetage. Das Tempelhofer Feld ist einer der wenigen verbleibenden natürlichen Hitzepuffer im dicht bebauten Süden der Stadt. Seine Bebauung wäre in Zeiten des Klimawandels nicht verantwortbar.

Bitte stimmen Sie Nein zum geplanten Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 59,
    perspective: "Klimaschutz",
    length: "kurz",
    betreff: "Keine Bebauung: Das Feld ist Klimainfrastruktur",
    nachricht: `Sehr geehrte Damen und Herren,

eine Stadt, die Klimanotstand ausruft und gleichzeitig eine ihrer größten Kühlflächen bebauen will, verliert jede Glaubwürdigkeit in der Klimapolitik. Das Tempelhofer Feld ist nicht irgendein Grünstreifen. Es ist Infrastruktur.

Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 60,
    perspective: "Klimaschutz",
    length: "kurz",
    betreff: "Für künftige Generationen: Das Feld freihalten",
    nachricht: `Sehr geehrte Damen und Herren,

die Kinder, die heute in Berlin aufwachsen, werden in einer deutlich heißeren Stadt leben. Das Tempelhofer Feld ist ihr Erbe. Bitte bebauen Sie es nicht, und stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Kurze Vorlagen: Familie ─────────────────────────────────────────────
  {
    id: 61,
    perspective: "Familie",
    length: "kurz",
    betreff: "Als Berliner Familie bitten wir: Das Feld muss frei bleiben",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist der einzige Ort in unserem Kiez, an dem Kinder wirklich frei laufen können. Kein Park der Stadt bietet diesen Raum. Bitte stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 62,
    perspective: "Familie",
    length: "kurz",
    betreff: "Das Feld für unsere Kinder, bitte dagegen stimmen",
    nachricht: `Sehr geehrte Damen und Herren,

wir haben das Tempelhofer Feld unseren Kindern immer als besonderen Ort Berlins gezeigt. Ein Ort, den die Stadt gemeinsam erkämpft und erhalten hat. Diese Geschichte verlieren wir, wenn das Feld bebaut wird.

Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 63,
    perspective: "Familie",
    length: "kurz",
    betreff: "Für Familien ohne Garten: Das Tempelhofer Feld erhalten",
    nachricht: `Sehr geehrte Damen und Herren,

die meisten Familien in Neukölln und Tempelhof haben keinen Garten. Das Tempelhofer Feld ist ihr Ausgleich. Eine Bebauung trifft genau jene Familien am härtesten, die sich keinen Umzug leisten können.

Bitte stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 64,
    perspective: "Familie",
    length: "kurz",
    betreff: "Freiraum für Kinder, bitte schützen Sie das Feld",
    nachricht: `Sehr geehrte Damen und Herren,

ich bringe meine Kinder regelmäßig auf das Tempelhofer Feld. Nirgendwo sonst in der Stadt haben sie so viel Platz. Bitte erhalten Sie diesen Raum und stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 65,
    perspective: "Familie",
    length: "kurz",
    betreff: "Spielraum ist Sozialinfrastruktur, bitte nein stimmen",
    nachricht: `Sehr geehrte Damen und Herren,

in einer Stadt mit wenig bezahlbarem Wohnraum und noch weniger Gärten ist das Tempelhofer Feld Sozialinfrastruktur. Spielplätze und Parks sind kein Ersatz. Bitte stimmen Sie gegen die Bebauung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Kurze Vorlagen: Sport & Freizeit ───────────────────────────────────
  {
    id: 66,
    perspective: "Sport & Freizeit",
    length: "kurz",
    betreff: "Keine Bebauung: Das Feld ist unersetzlich für Sport in Berlin",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld bietet Flächen für Sport und Bewegung, die es in dieser Größe und Zugänglichkeit in Berlin kein zweites Mal gibt. Ich nutze es regelmäßig. Eine Bebauung würde das unmöglich machen.

Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 67,
    perspective: "Sport & Freizeit",
    length: "kurz",
    betreff: "Sport braucht Raum, das Feld muss frei bleiben",
    nachricht: `Sehr geehrte Damen und Herren,

auf dem Tempelhofer Feld treffen sich täglich Tausende Menschen zum Laufen, Radfahren, Skaten, Drachen steigen lassen. Diese Nutzung ist kostenlos und barrierefrei. Kein Sportpark ersetzt das.

Bitte stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 68,
    perspective: "Sport & Freizeit",
    length: "kurz",
    betreff: "Freizeitraum für alle, bitte dagegen stimmen",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist eines der wenigen Freizeitangebote Berlins, das wirklich allen offensteht, unabhängig von Einkommen und Alter. Das ist selten. Bitte schützen Sie es und stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 69,
    perspective: "Sport & Freizeit",
    length: "kurz",
    betreff: "Für alle, die das Feld nutzen, bitte nein sagen",
    nachricht: `Sehr geehrte Damen und Herren,

ich bin einer von vielen, die das Tempelhofer Feld täglich nutzen. Diese Nutzung ist nicht möglich, wenn bebaut wird. Bitte stimmen Sie gegen den Gesetzentwurf und erhalten Sie diesen Raum für alle.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 70,
    perspective: "Sport & Freizeit",
    length: "kurz",
    betreff: "Kein Ersatz für das Feld, bitte nein",
    nachricht: `Sehr geehrte Damen und Herren,

Bebauungsplaner sprechen von Ersatzflächen. Aber es gibt keinen Ersatz für 355 Hektar freie Landebahn mitten in der Stadt. Die Qualität des Tempelhofer Feldes ist seine Größe und Offenheit. Beides verschwindet mit der Bebauung.

Bitte stimmen Sie dagegen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Kurze Vorlagen: Stadtentwicklung ───────────────────────────────────
  {
    id: 71,
    perspective: "Stadtentwicklung",
    length: "kurz",
    betreff: "249.000 Wohnungen ohne das Feld, die Rechnung stimmt",
    nachricht: `Sehr geehrte Damen und Herren,

der Stadtentwicklungsplan Wohnen 2040 identifiziert Flächen für über 249.000 Wohnungen in Berlin, ohne das Tempelhofer Feld anzutasten. Die Wohnungsnot löst man nicht durch die Bebauung des einzigen verbleibenden Freiraums, sondern durch konsequente Nutzung der verfügbaren Flächen.

Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 72,
    perspective: "Stadtentwicklung",
    length: "kurz",
    betreff: "Dauerhafter Verlust für marginalen Gewinn, bitte nein",
    nachricht: `Sehr geehrte Damen und Herren,

die auf der Grillwiese geplanten Wohneinheiten sind im Verhältnis zum Berliner Wohnungsbedarf marginal. Der Verlust des Feldes als öffentlicher Raum wäre dagegen dauerhaft. Das ist keine gute Rechnung.

Bitte stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 73,
    perspective: "Stadtentwicklung",
    length: "kurz",
    betreff: "Wohnungsnot anders lösen, das Feld verschonen",
    nachricht: `Sehr geehrte Damen und Herren,

Berlin hat ein Wohnungsproblem. Die Lösung liegt in Nachverdichtung, Umwidmung von Gewerbeflächen und beschleunigten Genehmigungen, nicht in der Zerstörung des letzten großen Freiraums im Süden der Stadt.

Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 74,
    perspective: "Stadtentwicklung",
    length: "kurz",
    betreff: "Stadtplanung mit Weitblick, bitte das Feld schützen",
    nachricht: `Sehr geehrte Damen und Herren,

in 30 Jahren werden die Menschen in Berlin froh sein, wenn das Tempelhofer Feld noch existiert. Wohnungsprobleme lassen sich lösen, versiegelte Freiflächen lassen sich nicht rückgängig machen.

Bitte stimmen Sie gegen die Bebauung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 75,
    perspective: "Stadtentwicklung",
    length: "kurz",
    betreff: "Was für eine Stadt wollen wir sein? Bitte dagegen",
    nachricht: `Sehr geehrte Damen und Herren,

eine lebenswerte Stadt braucht Freiräume. Das Tempelhofer Feld ist genau das: ein demokratisch beschlossener, klimatisch wichtiger, sozial wertvoller Freiraum. Bitte bebauen Sie ihn nicht. Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Naturschutz (lang) ──────────────────────────────────────────────────
  {
    id: 76,
    perspective: "Naturschutz",
    betreff: "Das Tempelhofer Feld ist ein einzigartiges Stadtbiotop, bitte schützen Sie es",
    nachricht: `Sehr geehrte Damen und Herren,

ich schreibe Ihnen als jemand, dem der Erhalt städtischer Natur am Herzen liegt.

Das Tempelhofer Feld ist kein gewöhnliches Grünland. Es ist Brutgebiet der Feldlerche, einer bundesweit stark gefährdeten Vogelart. Auf der offenen Fläche leben Hasen, Rebhühner, seltene Insektenarten und Trockenrasenpflanzen, die auf intensiv genutzten Stadtflächen keine Chance hätten. Dieser Artenreichtum ist das Ergebnis jahrzehntelanger natürlicher Entwicklung auf ungestörter Fläche.

Das Helmholtz-Zentrum für Umweltforschung hat den hohen ökologischen und gesellschaftlichen Wert dieser Fläche wissenschaftlich belegt. Kompensationsflächen können ein bestehendes Ökosystem nicht ersetzen, das sich über Jahrzehnte etabliert hat. Einmal bebaut, ist dieser Lebensraum dauerhaft verloren.

Ich bitte Sie: Schützen Sie dieses einzigartige Stadtbiotop. Stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 77,
    perspective: "Naturschutz",
    betreff: "Feldlerchen, Hasen, seltene Insekten: Berlins wertvollstes Stadtbiotop",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld beherbergt eine Artenvielfalt, die im urbanen Berlin einzigartig ist. Feldlerchen brüten auf der Startbahn, Feldhase und Rebhuhn sind auf der Fläche heimisch, und die Trockenrasenbereiche bieten Lebensraum für Insekten, die in der Stadt anderswo verschwunden sind.

Das Helmholtz-Zentrum für Umweltforschung hat im Auftrag der Senatsverwaltung den hohen ökologischen und gesellschaftlichen Wert dieser Fläche wissenschaftlich belegt. Die Feldlerche gilt in Deutschland als stark gefährdet. Dass sie inmitten einer Weltstadt brütet, ist bemerkenswert und schützenswert.

Eine Bebauung bedeutet nicht nur weniger Grün. Sie bedeutet den dauerhaften Verlust eines funktionierenden Ökosystems, das nicht reproduzierbar ist. Ich bitte Sie, das zu verhindern. Stimmen Sie dagegen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 78,
    perspective: "Naturschutz",
    betreff: "Urbane Biodiversität schützen: Keine Bebauung des Tempelhofer Feldes",
    nachricht: `Sehr geehrte Damen und Herren,

Deutschland verliert seit Jahren Insekten, Vögel und Artenvielfalt. Auf landwirtschaftlichen Flächen und in Stadtteilen, die verdichtet und versiegelt werden. Das Tempelhofer Feld ist ein unerwarteter Gegenpol mitten in der Großstadt: eine offene, wenig gestörte Fläche, auf der sich Natur über Jahrzehnte entwickeln konnte.

Die Feldlerche, bundesweit stark gefährdet, brütet hier. Trockenrasen, Langgrasbereiche, offene Sandflächen: Lebensräume, die in der Stadt anderswo nicht mehr existieren. Das Helmholtz-Zentrum hat den ökologischen Wert dieser Fläche wissenschaftlich dokumentiert.

Solche Flächen entstehen nicht neu. Einmal bebaut, ist der ökologische Wert für immer verloren. Kein Ausgleichsprojekt ersetzt ein Jahrzehnte altes Biotop. Ich bitte Sie deshalb, gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 79,
    perspective: "Naturschutz",
    betreff: "Das Feld als Versickerungsfläche: Klimaanpassung durch Naturerhalt",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld erfüllt nicht nur die Funktion einer Kühlfläche. Es ist auch eine der letzten großen unversiegelten Flächen im verdichteten Süden Berlins. Bei Starkregen, der durch den Klimawandel häufiger und intensiver wird, nimmt das Feld große Wassermengen auf, entlastet die überlastete Kanalisation und verhindert Überschwemmungen in Neukölln und Tempelhof.

Versiegelte Fläche kann diese Leistung nicht erbringen. Beton und Asphalt leiten Wasser ab, statt es aufzunehmen. Das erhöht die Überflutungsgefahr für die gesamte umliegende Bebauung.

Hinzu kommt der Lebensraum für gefährdete Arten: Feldlerche, Rebhuhn, Feldhase, Trockenraseninsekten. Dieser Lebensraum ist das Ergebnis jahrzehntelanger ungestörter Entwicklung und nicht reproduzierbar.

Bitte stimmen Sie gegen die Bebauung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 80,
    perspective: "Naturschutz",
    betreff: "Für den Naturschutz: Das Tempelhofer Feld muss erhalten bleiben",
    nachricht: `Sehr geehrte Damen und Herren,

ich engagiere mich für den Schutz städtischer Natur und schreibe Ihnen, weil das Tempelhofer Feld aus naturschutzfachlicher Sicht zwingend schützenswert ist.

Die Kombination aus offener Landschaft, geringer Störung und zentraler Lage in einer Weltstadt macht das Feld zu einem Refugium für Arten, die in verdichteten Stadtteilen keinen Platz mehr finden. Die Feldlerche brütet hier, seltene Insekten finden in den Trockenrasenbereichen Lebensraum, Hasen und Rebhühner bewohnen die offenen Wiesenflächen.

Das Helmholtz-Zentrum für Umweltforschung hat diesen Wert wissenschaftlich dokumentiert. Kompensationsprojekte können ein über Jahrzehnte gewachsenes innerstädtisches Ökosystem nicht ersetzen.

Bitte lehnen Sie den Gesetzentwurf zur Änderung des Tempelhofer-Feld-Gesetzes ab.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Naturschutz (kurz) ──────────────────────────────────────────────────
  {
    id: 81,
    perspective: "Naturschutz",
    length: "kurz",
    betreff: "Feldlerche und Co., das Feld ist ein Stadtbiotop",
    nachricht: `Sehr geehrte Damen und Herren,

auf dem Tempelhofer Feld brüten Feldlerchen, eine der am stärksten bedrohten Vogelarten Deutschlands. Dieses Biotop mitten in der Stadt ist einzigartig und irreversibel. Einmal bebaut, ist es dauerhaft verloren.

Bitte stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 82,
    perspective: "Naturschutz",
    length: "kurz",
    betreff: "Keine Versiegelung: Das Feld schützt vor Überschwemmungen",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist eine der letzten großen unversiegelten Flächen im Süden Berlins. Bei Starkregen nimmt das Feld Wasser auf und entlastet die Kanalisation. Beton kann das nicht. Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 83,
    perspective: "Naturschutz",
    length: "kurz",
    betreff: "Urbane Artenvielfalt schützen, kurze Bitte",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld beherbergt Arten, die in Berlins bebauten Teilen keine Chance hätten. Dieser ökologische Wert wurde wissenschaftlich belegt. Bitte schützen Sie ihn. Stimmen Sie gegen die Bebauung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 84,
    perspective: "Naturschutz",
    length: "kurz",
    betreff: "Einmal versiegelt, nie zurück",
    nachricht: `Sehr geehrte Damen und Herren,

ein bebautes Grundstück lässt sich nicht einfach rückgängig machen. Das Ökosystem Tempelhofer Feld ist das Ergebnis jahrzehntelanger natürlicher Entwicklung. Kein Ausgleichsprojekt kann das ersetzen.

Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 85,
    perspective: "Naturschutz",
    length: "kurz",
    betreff: "Naturschutz ist kein Luxus, bitte nein sagen",
    nachricht: `Sehr geehrte Damen und Herren,

in einer sich erwärmenden Stadt ist jede unversiegelte Fläche ein Gewinn. Das Tempelhofer Feld ist nicht nur Natur, es ist Klimainfrastruktur. Bitte stimmen Sie gegen seine Bebauung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Persönlich (lang) ───────────────────────────────────────────────────
  {
    id: 86,
    perspective: "Persönlich",
    betreff: "Eine persönliche Bitte: Das Tempelhofer Feld muss frei bleiben",
    nachricht: `Sehr geehrte Damen und Herren,

ich wohne seit vielen Jahren in Berlin, und das Tempelhofer Feld ist für mich mehr als ein Freizeitort. Es ist der Ort, an dem ich nach langen Wochen Abstand gewinne, Freunde treffe und mich an die Größe dieser Stadt erinnere. Auf 355 Hektar, ohne Eintritt, ohne Anmeldung, für alle.

Ich weiß, dass Wohnraum gebraucht wird. Aber ich weiß auch: Es gibt in Berlin laut Stadtentwicklungsplan Flächen für über 249.000 Wohneinheiten, ohne das Feld anzutasten. 2014 haben fast 750.000 Berliner*innen genau das gewählt: das Feld zu erhalten. Das Beteiligungsverfahren des Senats bestätigte diesen Willen erneut.

Der Verlust dieses Ortes ist nicht aufzuholen. Einmal bebaut, ist er weg, für Generationen. Ich bitte Sie als Abgeordnete*r, gegen die Änderung des Tempelhofer-Feld-Gesetzes zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 87,
    perspective: "Persönlich",
    betreff: "Ich war 2014 dabei, bitte respektieren Sie unsere Entscheidung",
    nachricht: `Sehr geehrte Damen und Herren,

ich habe 2014 beim Volksentscheid zum Tempelhofer Feld abgestimmt. Es war eines der wenigen Male, bei denen ich das Gefühl hatte, dass meine Stimme wirklich etwas bewirkt. Das Ergebnis, das Tempelhofer-Feld-Gesetz, war der Beweis: Direkte Demokratie funktioniert.

Wenn CDU und SPD dieses Gesetz jetzt ändern, um Bauvorhaben zu ermöglichen, verliere ich dieses Vertrauen. Es ist nicht nur ein Angriff auf das Feld, es ist ein Angriff auf das Versprechen, das Volksabstimmungen darstellen. Und das Beteiligungsverfahren des Senats bestätigte erneut: Die Mehrheit will keine Bebauung.

Ich glaube nicht, dass das die Botschaft ist, die Sie an Ihre Wähler*innen senden wollen. Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 88,
    perspective: "Persönlich",
    betreff: "Als Berliner*in schreibe ich Ihnen direkt",
    nachricht: `Sehr geehrte Damen und Herren,

ich schreibe Ihnen nicht im Namen einer Organisation, sondern als Mensch, der diese Stadt liebt und das Tempelhofer Feld regelmäßig nutzt.

Das Feld ist für mich kein abstraktes politisches Thema. Es ist der Ort, an dem ich Drachen steigen lasse, mit dem Fahrrad trainiere und manchmal einfach in der Mitte der Stadt stehe und Stille höre. Diese Erfahrung ist für Hunderttausende Berliner*innen dieselbe, egal ob sie 2014 mitgestimmt haben oder erst danach hierher gezogen sind.

CDU und SPD wollen das Tempelhofer-Feld-Gesetz ändern. Baustart auf der Grillwiese ist für Juli 2026 geplant. Solche Orte entstehen nicht neu. Sie müssen erhalten werden. Bitte stimmen Sie gegen die Bebauung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 89,
    perspective: "Persönlich",
    betreff: "Das Feld hat mich in Berlin willkommen geheißen",
    nachricht: `Sehr geehrte Damen und Herren,

als ich nach Berlin gezogen bin, war das Tempelhofer Feld einer der ersten Orte, die mich wirklich ankommen ließen. Es ist der demokratischste öffentliche Raum der Stadt: kostenlos, barrierefrei, für alle, zu jeder Jahreszeit.

Hier treffen sich Menschen aus allen Teilen der Stadt und der Welt. Grillende Familien neben Kite-Fliegern, Rentner*innen neben Studierenden, Kinder neben Hunden. Das passiert ohne Plan und ohne Hierarchie, weil der Raum groß genug für alle ist.

Dass fast 750.000 Menschen 2014 für den Schutz dieses Ortes gestimmt haben, überrascht mich nicht. Es wäre falsch, diese Entscheidung jetzt durch eine Gesetzesänderung zu umgehen. Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 90,
    perspective: "Persönlich",
    betreff: "Eine Bitte von jemandem, der das Feld liebt",
    nachricht: `Sehr geehrte Damen und Herren,

ich bin kein Aktivist. Ich bin ein normaler Berliner, der das Tempelhofer Feld regelmäßig besucht. Ich gehe dorthin, wenn ich Abstand brauche. Ich gehe dorthin mit Freunden, mit meiner Familie, manchmal allein, einfach um zu gehen.

Was mich über die persönliche Verbundenheit hinaus bewegt, ist der Gedanke, dass 750.000 Menschen 2014 klar gesagt haben, was sie wollen. Und dass dieser Wille nun durch eine Gesetzesänderung übergangen werden soll, die eine kleine Anzahl Wohneinheiten bringt, die das Wohnungsproblem nicht löst.

Der Stadtentwicklungsplan weist über 249.000 alternative Bauplätze in Berlin aus. Es gibt einen anderen Weg. Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Persönlich (kurz) ───────────────────────────────────────────────────
  {
    id: 91,
    perspective: "Persönlich",
    length: "kurz",
    betreff: "Ich bitte Sie persönlich: Stimmen Sie dagegen",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist für mich und viele andere Berliner*innen kein abstraktes Politikthema. Es ist der Ort, an dem wir unsere Stadt erleben. Bitte bebauen Sie ihn nicht. Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 92,
    perspective: "Persönlich",
    length: "kurz",
    betreff: "2014 habe ich abgestimmt, bitte respektieren Sie das",
    nachricht: `Sehr geehrte Damen und Herren,

ich habe 2014 beim Volksentscheid abgestimmt. Wenn dieser Beschluss jetzt parlamentarisch korrigiert wird, verliere ich das Vertrauen, dass meine Stimme zählt. Bitte stimmen Sie gegen die Änderung des Tempelhofer-Feld-Gesetzes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 93,
    perspective: "Persönlich",
    length: "kurz",
    betreff: "Das Feld gehört zu Berlin, und zu mir",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist der einzige Ort in Berlin, an dem ich inmitten einer Großstadt Weite spüre. Kein Park, kein Grünstreifen ersetzt das. Bitte stimmen Sie gegen seine Bebauung.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 94,
    perspective: "Persönlich",
    length: "kurz",
    betreff: "Mein Berlin, mein Feld, bitte schützen Sie es",
    nachricht: `Sehr geehrte Damen und Herren,

Berlin ist für mich auch das Tempelhofer Feld. Es ist zugänglich, kostenlos und für alle da. Solche Orte entstehen nicht zweimal. Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 95,
    perspective: "Persönlich",
    length: "kurz",
    betreff: "Als Bürger*in dieser Stadt bitte ich Sie",
    nachricht: `Sehr geehrte Damen und Herren,

ich bin kein Aktivist, sondern ein Mensch, dem dieses Stück Stadt etwas bedeutet. Bitte stimmen Sie gegen die Bebauung des Tempelhofer Feldes und zeigen Sie, dass demokratische Entscheidungen in Berlin Bestand haben.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Demokratie (8 weitere Templates) ────────────────────────────────────
  {
    id: 96,
    perspective: "Demokratie",
    betreff: "Volksentscheide müssen bindend sein, bitte stimmen Sie Nein",
    nachricht: `Sehr geehrte Damen und Herren,

in der Schweiz gelten Volksabstimmungen als unumkehrbar bindend. Deutschland hat dieses Modell nicht vollständig übernommen, aber der Berliner Volksentscheid von 2014 war genau das: ein verbindlicher Auftrag der Bevölkerung, das Tempelhofer Feld dauerhaft zu schützen. Fast 750.000 Menschen haben dafür gestimmt.

Wenn dieses Gesetz nun durch eine parlamentarische Mehrheit geändert wird, stellt sich die Frage: Wofür stehen Volksentscheide dann noch? Wenn Ergebnisse direkt demokratischer Beteiligung revidiert werden, sobald sie politischen Zielen im Weg stehen, verliert das Instrument seinen Kern.

Ich bitte Sie, dieser Logik entgegenzutreten und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 97,
    perspective: "Demokratie",
    betreff: "Rechtsstaat und Volksentscheid, bitte keine Aushöhlung",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer-Feld-Gesetz ist kein Programmpapier. Es ist geltendes Recht, das durch einen Volksentscheid mit fast 750.000 Stimmen Gesetzeskraft erlangt hat. Es zu ändern, nur weil eine Koalitionsmehrheit andere Pläne hat, ist rechtlich möglich. Ob es einem Rechtsstaat würdig ist, ist eine andere Frage.

Gesetze, die aus direkter Demokratie entstammen, haben eine besondere Legitimität. Sie zu übergehen, ohne Not, ohne Notstand, ohne neue Fakten, sendet ein erschütterndes Signal: dass Parlament und Volksentscheid im Widerspruch stehen können, wenn es politisch opportun ist.

Ich bitte Sie dringend, dieser Entwicklung entgegenzuwirken und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 98,
    perspective: "Demokratie",
    betreff: "Kein Mandat für Bebauung des Tempelhofer Feldes",
    nachricht: `Sehr geehrte Damen und Herren,

bei der letzten Wahl haben CDU und SPD nicht mit dem Versprechen geworben, den Volksentscheid von 2014 zu revidieren und das Tempelhofer Feld zu bebauen. Ein Wahlprogramm ist zwar kein Vertrag, aber es beschreibt den Rahmen, für den man ein Mandat erhält.

Wer nun ohne breite gesellschaftliche Debatte und trotz nahezu einhelliger Ablehnung im senatsbegleitenden Beteiligungsverfahren Baurecht auf dem Feld schafft, handelt weit jenseits des Wählerwillens. Das ist kein Regieren im Sinne der Bürgerinnen und Bürger.

Bitte nutzen Sie Ihre Stimme im Abgeordnetenhaus, um diesen Kurs zu korrigieren, und stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 99,
    perspective: "Demokratie",
    betreff: "Direkte Demokratie darf kein Ablaufdatum haben",
    nachricht: `Sehr geehrte Damen und Herren,

ein Volksentscheid ist kein Empfehlungsschreiben. Er ist ein direkter Gesetzgebungsakt der Bevölkerung. Das Tempelhofer-Feld-Gesetz von 2014, getragen von fast 750.000 Stimmen, ist das Ergebnis genau eines solchen Akts.

Wenn dieses Gesetz jetzt, zwölf Jahre später, durch eine parlamentarische Mehrheit aufgehoben wird, stellt sich die Frage: Wie lange gilt ein Volksentscheid? Zehn Jahre? Fünf? Oder nur, bis eine neue Koalition andere Pläne hat?

Die Antwort auf diese Frage prägt das Verhältnis der Bürgerinnen und Bürger zur politischen Beteiligung für eine Generation. Ich bitte Sie: Setzen Sie ein klares Zeichen und stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 100,
    perspective: "Demokratie",
    betreff: "Warnung vor dem Präzedenzfall Tempelhofer Feld",
    nachricht: `Sehr geehrte Damen und Herren,

die Entscheidung, die das Berliner Abgeordnetenhaus zum Tempelhofer-Feld-Gesetz trifft, ist kein isolierter Fall. Sie schafft einen Präzedenzfall dafür, wie direkte Demokratie in dieser Stadt behandelt wird.

Wenn der Volksentscheid von 2014 durch einfachen Parlamentsbeschluss revidiert werden kann, werden künftige Volksinitiativen auf weniger Unterstützung stoßen. Warum Unterschriften sammeln, wenn das Ergebnis später ohnehin geändert werden kann? Diese Demotivierung von Bürgerbeteiligung ist ein langfristiger Schaden für unsere Demokratie.

Ich bitte Sie deshalb, heute weiterzudenken als bis zum nächsten Bauprojekt, und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 101,
    perspective: "Demokratie",
    betreff: "Bürgerbeteiligung ernst nehmen, bitte gegen den Gesetzentwurf stimmen",
    nachricht: `Sehr geehrte Damen und Herren,

das senatsbegleitende Beteiligungsverfahren zur Zukunft des Tempelhofer Feldes hat ein eindeutiges Ergebnis gebracht: nahezu alle Teilnehmenden lehnen eine Bebauung ab. Dieses Verfahren wurde nicht von Aktivisten organisiert, es war ein offizielles Instrument des Berliner Senats.

Wenn ein solches Verfahren stattfindet und sein Ergebnis anschließend ohne erkennbare Konsequenzen bleibt, ist das kein Zeichen von Dialogbereitschaft. Es ist ein Zeichen, dass Beteiligung als Legitimationsritual verstanden wird, nicht als echte Einflussnahme.

Ich bitte Sie: Nehmen Sie die Stimmen der Berliner Bevölkerung ernst. Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 102,
    perspective: "Demokratie",
    betreff: "2014 haben Berliner*innen entschieden, diese Entscheidung gilt noch",
    nachricht: `Sehr geehrte Damen und Herren,

zwölf Jahre mögen in der Tagespolitik wie eine lange Zeit erscheinen. Aber ein Gesetz, das durch direkten Volkswillen entstanden ist, verliert seine Legitimität nicht durch Zeitablauf. Das Tempelhofer-Feld-Gesetz wurde nicht auf zehn Jahre befristet. Es wurde als dauerhafter Schutz verabschiedet.

Die gesellschaftliche Lage hat sich seit 2014 nicht grundlegend verändert. Es gibt keine Notlage, die eine Aufhebung des Volksentscheids rechtfertigen würde. Was sich geändert hat, ist die politische Mehrheit. Das allein ist kein ausreichender Grund, eine demokratisch legitimierte Entscheidung der Bevölkerung rückgängig zu machen.

Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 103,
    perspective: "Demokratie",
    betreff: "Vier von sechs Architekturbüros sagten Nein, ich auch",
    nachricht: `Sehr geehrte Damen und Herren,

es gibt ein Detail im Planungsprozess zur Bebauung des Tempelhofer Feldes, das ich bemerkenswert finde: Vier von sechs eingeladenen Architekturbüros lehnten eine Teilnahme am Wettbewerb ab, weil sie das Vorhaben grundsätzlich ablehnen. Das sind Fachleute, keine Aktivisten.

Dieses Signal kommt auf top der nahezu einstimmigen Ablehnung im Beteiligungsverfahren und auf top des Volksentscheids von 2014. Wenn selbst jene, die eingeladen werden, den Bau zu planen, Nein sagen, sollte das zu denken geben.

Ich bitte Sie, diese breite Ablehnung in Ihrer Abstimmung zu berücksichtigen und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Klimaschutz (8 weitere Templates) ───────────────────────────────────
  {
    id: 104,
    perspective: "Klimaschutz",
    betreff: "Keine Versiegelung auf dem Tempelhofer Feld, bitte Nein stimmen",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist eine der letzten großen unversiegelten Flächen im Berliner Innenstadtbereich. Jeder Quadratmeter, der bebaut wird, ist dauerhaft verloren für die natürliche Regenwasserversickerung. In Zeiten zunehmender Starkregenereignisse und Überschwemmungen in städtischen Gebieten ist das keine abstrakte Gefahr.

Versiegelte Böden können kein Regenwasser aufnehmen. Stattdessen fließt es ungefiltert in die Kanalisation oder überschwemmt tiefer liegende Gebiete. Das Tempelhofer Feld erfüllt heute eine natürliche Pufferfunktion für den Berliner Wasserhaushalt, die durch Bebauung unwiederbringlich verloren geht.

Bitte schützen Sie diese Fläche und stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 105,
    perspective: "Klimaschutz",
    betreff: "Tempelhofer Feld als Kühlinsel, bitte erhalten",
    nachricht: `Sehr geehrte Damen und Herren,

Berlins Sommer werden wärmer. Hitzewellen treffen städtische Bevölkerungen härter als ländliche, weil Beton, Asphalt und dichte Bebauung Wärme speichern und nachts nicht abgeben. Das Tempelhofer Feld wirkt diesem Effekt entgegen.

Als große, offene Grasfläche absorbiert das Feld weniger Sonnenwärme als versiegelte Flächen und gibt in der Nacht Kühle ab. Es wirkt wie eine Klimaanlage für angrenzende Wohngebiete in Tempelhof, Neukölln und Kreuzberg. Bebauung würde diesen Effekt erheblich reduzieren und die Wärmebelastung für hunderttausende Anwohnerinnen und Anwohner erhöhen.

Ich bitte Sie, diese klimatische Funktion des Feldes zu schützen und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 106,
    perspective: "Klimaschutz",
    betreff: "Kohlenstoffspeicher Tempelhofer Feld, bitte erhalten",
    nachricht: `Sehr geehrte Damen und Herren,

Böden speichern Kohlenstoff. Das ist besonders relevant für unberührte, gewachsene Böden wie jene des Tempelhofer Feldes. Wenn diese Fläche bebaut wird, wird der im Boden gebundene Kohlenstoff freigesetzt, zusätzlich zu den Emissionen durch den Bauprozess selbst.

Berlin hat klimapolitische Ziele gesetzt. Eine der einfachsten Maßnahmen, diese Ziele nicht zu gefährden, ist: bestehende natürliche Kohlenstoffspeicher nicht zu zerstören. Die geplante Bebauung würde genau das tun.

Ich bitte Sie, Berlins Klimaziele ernst zu nehmen und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 107,
    perspective: "Klimaschutz",
    betreff: "Grundwasserneubildung schützen, bitte gegen den Bau stimmen",
    nachricht: `Sehr geehrte Damen und Herren,

Berlins Trinkwasser stammt zu einem großen Teil aus dem Grundwasser. Dieses Grundwasser wird durch natürliche Versickerung von Regenwasser durch unversiegelte Böden gebildet. Das Tempelhofer Feld ist eine der wenigen verbliebenen großflächigen Versickerungsflächen im dicht besiedelten Innenstadtbereich.

Eine Bebauung der Grillwiese würde diesen natürlichen Kreislauf dauerhaft unterbrechen. Bebauung bedeutet Versiegelung, Versiegelung bedeutet weniger Versickerung, und weniger Versickerung bedeutet langfristig Druck auf Berlins Trinkwasserversorgung. In einem Jahrzehnt zunehmender Trockenphasen ist das keine Kleinigkeit.

Bitte stimmen Sie gegen den Gesetzentwurf und schützen Sie Berlins Wasserhaushalt.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 108,
    perspective: "Klimaschutz",
    betreff: "Luftqualität und Feinstaubfilter, bitte Tempelhofer Feld erhalten",
    nachricht: `Sehr geehrte Damen und Herren,

Pflanzen filtern Feinstaub und binden Luftschadstoffe. In einer Millionenstadt wie Berlin, mit hohem Verkehrsaufkommen und dichter Bebauung, sind große Grünflächen ein wesentlicher Beitrag zur Luftqualität. Das Tempelhofer Feld ist mit seiner Größe und seiner Lage mitten in der Stadt ein besonders wirksamer natürlicher Filter.

Jede Bebauung auf dieser Fläche reduziert diesen Effekt. Für die Bevölkerung der angrenzenden Bezirke, darunter viele Menschen, die ohnehin unter erhöhter Lärmbelastung und Luftverschmutzung durch Hauptstraßen leiden, ist das eine spürbare Verschlechterung.

Ich bitte Sie, diese ökologische Schutzfunktion des Feldes nicht zu opfern und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 109,
    perspective: "Klimaschutz",
    betreff: "Berlins Klimaplan und das Tempelhofer Feld, bitte konsistent handeln",
    nachricht: `Sehr geehrte Damen und Herren,

Berlin hat sich ambitionierte Klimaschutzziele gesetzt und öffentlich kommuniziert. Dazu gehört der Erhalt und die Erweiterung von Stadtgrün als Teil der Anpassungsstrategie an den Klimawandel. Das Tempelhofer Feld ist eine der größten innerstädtischen Freiflächen und entspricht genau dem, was diese Strategie schützen will.

Es wäre nicht konsequent, einerseits Klimaschutz und Klimaanpassung als Ziele zu benennen und andererseits eine der bedeutendsten unversiegelten Grünflächen der Stadt zu bebauen. Das Tempelhofer Feld zu erhalten ist kein Widerspruch zur Wohnraumpolitik. Es ist ein Beitrag zur Klimaresilenz Berlins.

Ich bitte Sie: Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 110,
    perspective: "Klimaschutz",
    betreff: "Steppengrasland als seltenes Ökosystem, bitte nicht bebauen",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld hat sich in den vergangenen Jahrzehnten zu einem seltenen innerstädtischen Steppenökosystem entwickelt. Trockenrasen dieser Art sind in Deutschland selten und ökologisch wertvoll, nicht nur als Lebensraum für Tiere und Pflanzen, sondern auch als klimaresistentes Vegetationsmodell für eine wärmer werdende Stadt.

Dieses Ökosystem ist nicht planbar. Es ist über Jahrzehnte gewachsen und kann nicht anderswo neu geschaffen werden. Eine Bebauung zerstört es unwiederbringlich.

Ich bitte Sie, diesen einzigartigen Naturraum zu schützen und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 111,
    perspective: "Klimaschutz",
    betreff: "Nachtkühlung durch Freiflächen schützen, bitte Nein stimmen",
    nachricht: `Sehr geehrte Damen und Herren,

in heißen Stadtnächten ist der Temperaturunterschied zwischen begrünten Freiflächen und versiegelten Straßen messbar. Das Tempelhofer Feld kühlt in der Nacht ab und ermöglicht kühlere Luftströme in die angrenzenden Wohngebiete. Für ältere Menschen, Kinder und Menschen mit Herz-Kreislauf-Erkrankungen ist diese Kühlung in Hitzesommern keine Nebensächlichkeit.

Bebauung und Versiegelung unterbrechen diesen natürlichen Kühleffekt. Angesichts der prognostizierten Zunahme von Hitzewellen in Berlin ist das ein reales Gesundheitsrisiko für die Stadtbevölkerung.

Ich bitte Sie, diese Funktion des Tempelhofer Feldes zu schützen und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Familie (7 weitere Templates) ───────────────────────────────────────
  {
    id: 112,
    perspective: "Familie",
    betreff: "Was wir unseren Kindern hinterlassen, bitte Tempelhofer Feld erhalten",
    nachricht: `Sehr geehrte Damen und Herren,

wenn wir über das Tempelhofer Feld diskutieren, diskutieren wir auch darüber, was wir der nächsten Generation hinterlassen. Urbane Freiflächen dieser Größe entstehen nicht neu. Sie wachsen über Jahrzehnte, werden von Generationen geprägt und sind, einmal bebaut, unwiederbringlich verloren.

Meine Kinder kennen das Tempelhofer Feld als einen Ort, der ihnen gehört, ohne Eintritt, ohne Konsumzwang, ohne Zugangsregeln. Das ist selten in einer Großstadt. Solche Orte prägen, wie Kinder eine Stadt erleben und ob sie sich in ihr zu Hause fühlen.

Ich bitte Sie: Erhalten Sie diesen Ort für kommende Generationen und stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 113,
    perspective: "Familie",
    betreff: "Natur für Kinder in der Stadt, bitte nicht bebauen",
    nachricht: `Sehr geehrte Damen und Herren,

Studien zeigen, dass regelmäßige Naturerfahrungen für Kinder wichtig sind: für ihre Konzentrationsfähigkeit, ihre psychische Gesundheit und ihre Entwicklung. In einer Großstadt wie Berlin sind solche Erfahrungen nicht selbstverständlich. Viele Kinder wachsen ohne Garten auf und sind auf öffentliche Freiflächen angewiesen.

Das Tempelhofer Feld bietet genau das: Weite, Natur, Offenheit. Es ist kein gestalteter Spielplatz, sondern ein echter Naturraum mitten in der Stadt. Bebauung würde diesen Raum für Kinder dauerhaft verkleinern.

Ich bitte Sie, diese Ressource für Familien zu schützen und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 114,
    perspective: "Familie",
    betreff: "Ein Ort für alle Familien, bitte Tempelhofer Feld frei halten",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist eines der wenigen Freizeitangebote in Berlin, das wirklich für alle Familien zugänglich ist, unabhängig von Einkommen, Herkunft oder Sprache. Es kostet nichts, es ist gut mit öffentlichen Verkehrsmitteln erreichbar und bietet Platz für sehr unterschiedliche Aktivitäten nebeneinander.

Familien aus Neukölln, Tempelhof und Kreuzberg, Bezirken mit einem hohen Anteil einkommensschwächerer Haushalte, sind besonders darauf angewiesen. Private Parks, kostenpflichtige Freizeitangebote und weit entfernte Ausflugsziele sind keine gleichwertigen Alternativen.

Ich bitte Sie: Schützen Sie diesen Ort und stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 115,
    perspective: "Familie",
    betreff: "Kostenfreier Raum für einkommensschwache Familien, bitte erhalten",
    nachricht: `Sehr geehrte Damen und Herren,

Berlins Mietpreise sind in den letzten Jahren stark gestiegen. Viele Familien leben auf engem Raum und können sich keine aufwendigen Freizeitaktivitäten leisten. Das Tempelhofer Feld ist für diese Familien nicht nur ein Freizeitort, es ist der erweiterte Wohnraum, den ihre Wohnung nicht bietet.

Draußen spielen, grillen, Drachen steigen lassen, Fahrrad fahren: Das alles ist auf dem Tempelhofer Feld kostenlos und ohne Konsumzwang möglich. Diese Art von Angebot gibt es in Berlin nicht in dieser Kombination aus Größe, Lage und Zugänglichkeit ein zweites Mal.

Ich bitte Sie, diesen Raum zu erhalten und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 116,
    perspective: "Familie",
    betreff: "Barrierefreiheit und Inklusion, bitte Tempelhofer Feld erhalten",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist eine der barriereärmsten Freiflächen Berlins. Die breiten, glatten Wege eignen sich für Rollstühle, Rollatoren und Kinderwagen. Die Weitläufigkeit ermöglicht auch Kindern und Erwachsenen mit besonderen Bedürfnissen, sich frei zu bewegen, ohne auf enge Wege oder überfüllte Spielplätze beschränkt zu sein.

Bebauung bedeutet nicht nur weniger Platz. Sie bedeutet neue Hindernisse, Zäune, Baustellen, veränderte Wege. Für Menschen, die auf bestimmte Gegebenheiten angewiesen sind, ist das keine Kleinigkeit.

Ich bitte Sie, diesen inklusiven Ort zu schützen und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 117,
    perspective: "Familie",
    betreff: "Drei Generationen auf einer Fläche, bitte erhalten",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist einer der seltenen Orte, an dem Großeltern, Eltern und Kinder gleichzeitig etwas erleben können, jede Generation auf ihre Weise. Während Kinder Fahrrad fahren und spielen, sitzen Ältere auf Bänken oder spazieren ruhig. Niemand stört den anderen.

Diese Art von Generationenort ist in einer verdichteten Stadt keine Selbstverständlichkeit. Er entsteht nicht durch Planung, sondern durch Größe und Offenheit. Beides würde durch Bebauung dauerhaft eingeschränkt.

Ich bitte Sie: Stimmen Sie gegen den Gesetzentwurf und erhalten Sie diesen Ort für alle Generationen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 118,
    perspective: "Familie",
    betreff: "Kein Ersatz für das Tempelhofer Feld, bitte dagegen stimmen",
    nachricht: `Sehr geehrte Damen und Herren,

wer Familien mit Kindern fragt, was sie am Tempelhofer Feld schätzen, bekommt immer wieder dieselben Antworten: die Weite, die Freiheit, der Platz. Das sind keine Eigenschaften, die sich durch einen kleineren Spielplatz oder eine andere Grünanlage ersetzen lassen.

Berlin hat viele Parks. Aber es hat kein zweites Tempelhofer Feld. Und es wird keines schaffen, wenn dieses bebaut wurde. Was einmal verloren ist, ist verloren.

Ich bitte Sie, diese Einzigartigkeit anzuerkennen und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Sport & Freizeit (7 weitere Templates) ──────────────────────────────
  {
    id: 119,
    perspective: "Sport & Freizeit",
    betreff: "Berlins größte Radstrecke, bitte Tempelhofer Feld erhalten",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld bietet Radfahrerinnen und Radfahrern etwas Einzigartiges in Berlin: eine breite, autofreie Ringbahn ohne Kreuzungen, Ampeln oder parkende Fahrzeuge. Für Familien mit Kindern, die das Radfahren lernen, ist das ideal. Für geübte Fahrer ist der Rundkurs eine tägliche Trainingsfläche.

Bebauung schränkt diese Nutzung dauerhaft ein. Wege werden kürzer oder enger, das charakteristische Freiheitsgefühl auf dem Rad in der offenen Weite geht verloren. Ein Ersatz existiert in vergleichbarer Lage und Größe nicht.

Ich bitte Sie: Stimmen Sie gegen den Gesetzentwurf und erhalten Sie diesen Ort für den Radsport.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 120,
    perspective: "Sport & Freizeit",
    betreff: "Drachenfliegen und Windsport, bitte Tempelhofer Feld freihalten",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist einer der wenigen Orte in Berlin, an dem Drachenfliegen, Kite-Surfen auf Rollen und vergleichbare Windsportarten möglich sind. Die Kombination aus großer offener Fläche, konstantem Wind durch die ehemalige Startbahn und fehlender Bebauung ringsherum ist in dieser Form einzigartig in der Stadt.

Diese Sportarten sind ohne ausreichend Platz und Wind schlicht nicht möglich. Es gibt keine Alternative in vergleichbarer Stadtnähe. Bebauung auf der Grillwiese würde die Fläche verkleinern und das Windfeld verändern.

Bitte erhalten Sie diesen Ort und stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 121,
    perspective: "Sport & Freizeit",
    betreff: "Outdoor-Fitness und Yoga auf dem Tempelhofer Feld, bitte erhalten",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist längst ein lebendiger Outdoor-Fitnessort. Menschen trainieren dort täglich: Laufen, Calisthenics, Yoga in der Gruppe, Stretching, Teamtraining. Diese spontane, kostenfreie Form von Bewegung im Freien ist für viele Menschen ein wesentlicher Teil ihres Alltags.

Was das Feld dafür besonders macht, ist seine Kombination aus Größe, ebenen Flächen und dem Gefühl von Weite. Ein kleineres Grün- oder Sportareal ist kein funktionaler Ersatz für diesen Raum.

Ich bitte Sie: Schützen Sie diesen Ort und stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 122,
    perspective: "Sport & Freizeit",
    betreff: "Spontane Freizeit ist planlos und das ist gut so",
    nachricht: `Sehr geehrte Damen und Herren,

nicht jede Freizeitnutzung lässt sich in Sportanlagen, Buchungssysteme oder geplante Programme fassen. Das Tempelhofer Feld lebt davon, dass Menschen kommen, ohne Plan, ohne Reservierung, ohne Eintritt. An einem Nachmittag im Frühling sind dort Hunderte verschiedener Aktivitäten gleichzeitig zu beobachten.

Dieses Modell, offen, kostenlos, selbstorganisiert, ist eine besondere Form von urbanem Leben. Es ist nicht ersetzbar durch ein Sportzentrum mit festen Öffnungszeiten oder einen gestalteten Freizeitpark.

Ich bitte Sie, diesen einzigartigen Freiraum zu erhalten und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 123,
    perspective: "Sport & Freizeit",
    betreff: "Großveranstaltungen brauchen Platz, bitte Tempelhofer Feld erhalten",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist Austragungsort für Berliner Großveranstaltungen: Marathons, Open-Air-Events, Festivals und Sportveranstaltungen. Diese Nutzungen sind nur möglich, weil das Feld so groß und zusammenhängend ist.

Bebauung auf der Grillwiese verkleinert nicht nur die verfügbare Fläche. Sie zerschneidet das Feld und schafft neue Hindernisse, die solche Veranstaltungen erschweren oder unmöglich machen. Berlin verliert damit ein bedeutendes Veranstaltungsgelände mitten in der Stadt.

Ich bitte Sie: Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 124,
    perspective: "Sport & Freizeit",
    betreff: "Hundespaziergang und Gemeinschaft, bitte Tempelhofer Feld frei lassen",
    nachricht: `Sehr geehrte Damen und Herren,

das klingt vielleicht klein, ist es aber nicht: Das Tempelhofer Feld ist für viele Berliner Hundebesitzerinnen und Hundebesitzer das Herzstück ihres Alltags. Nicht nur weil die Fläche groß ist, sondern weil dort eine Gemeinschaft entsteht. Man trifft sich, redet, kennt sich. Das Feld ist ein sozialer Ort.

Für ältere Menschen, die alleine leben, ist dieser tägliche Austausch bei einem Spaziergang oft ein wesentlicher sozialer Kontakt. Solche informellen Gemeinschaften entstehen nicht geplant. Sie entstehen durch Raum, Zeit und Regelmäßigkeit.

Ich bitte Sie: Schützen Sie diesen Ort und stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 125,
    perspective: "Sport & Freizeit",
    betreff: "Rollstuhlsport und Inklusion im Freien, bitte erhalten",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld bietet auch Menschen mit körperlichen Einschränkungen ungewöhnlich gute Bedingungen für Sport und Bewegung im Freien. Die breiten, befestigten Wege sind für Rollstuhlfahrerinnen und Handbiker zugänglich. Die offene Fläche lässt Bewegung in alle Richtungen zu.

In vielen anderen Berliner Parks ist diese Zugänglichkeit nicht gegeben. Das Tempelhofer Feld ist in dieser Hinsicht besonders. Bebauung und die damit einhergehenden Veränderungen an Wegen und Fläche würden diese Qualität beeinträchtigen.

Ich bitte Sie: Stimmen Sie gegen den Gesetzentwurf und erhalten Sie diesen inklusiven Sportraum.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Stadtentwicklung (7 weitere Templates) ───────────────────────────────
  {
    id: 126,
    perspective: "Stadtentwicklung",
    betreff: "Wohnraum entsteht anderswo, bitte Tempelhofer Feld erhalten",
    nachricht: `Sehr geehrte Damen und Herren,

Berlin hat tatsächlich einen Wohnraummangel. Aber dieser Mangel rechtfertigt nicht zwingend die Bebauung jeder verfügbaren Fläche, schon gar nicht einer, die durch Volksentscheid unter Schutz gestellt wurde.

In Berlin gibt es zahlreiche Brachflächen, untergenutzte Gewerbegebiete und Potenzialflächen entlang von S-Bahn-Trassen, die für Wohnbebauung erschlossen werden könnten, ohne historisch schützenswerte oder demokratisch geschützte Flächen anzutasten. Die Bebauung des Tempelhofer Feldes ist keine Notwendigkeit, sie ist eine politische Entscheidung.

Ich bitte Sie, diese Entscheidung zu überdenken und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 127,
    perspective: "Stadtentwicklung",
    betreff: "Berlins Brachflächen zuerst erschließen, bitte Tempelhofer Feld schonen",
    nachricht: `Sehr geehrte Damen und Herren,

wer Wohnungsmangel in Berlin lösen will, muss nicht zwingend auf den Volksentscheid von 2014 verzichten. Berlin hat eine Reihe von Brachflächen, ehemaligen Industriegeländen und unterausgelasteten Bahnarealen, die für Wohnbebauung geeignet wären, ohne naturnahe Freiflächen zu opfern.

Das Tempelhofer Feld ist keine Verlegenheitsfläche. Es ist eine bewusst und per Volksabstimmung geschützte Fläche. Wenn Stadtentwicklung bedeutet, dass jede offene Fläche irgendwann bebaut werden kann, verliert das Konzept des dauerhaften Schutzes seine Grundlage.

Ich bitte Sie: Stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 128,
    perspective: "Stadtentwicklung",
    betreff: "Bauen auf dem Tempelhofer Feld ist keine Lösung für Berlins Wohnungsnot",
    nachricht: `Sehr geehrte Damen und Herren,

die Wohnungsnot in Berlin ist real, aber die Bebauung der Grillwiese auf dem Tempelhofer Feld löst sie nicht. Die geplante Anzahl an Wohneinheiten ist im Vergleich zum Gesamtbedarf marginal. Der symbolische und ökologische Preis ist dagegen enorm.

Es wäre nachvollziehbar, das Tempelhofer Feld zu bebauen, wenn es die einzige Möglichkeit wäre, Berlin aus einer Wohnungsnot zu retten. Das ist nicht der Fall. Es ist eine von mehreren politischen Optionen, und es ist diejenige mit dem höchsten demokratischen und ökologischen Kollateralschaden.

Ich bitte Sie: Wählen Sie eine andere Option und stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 129,
    perspective: "Stadtentwicklung",
    betreff: "Infrastrukturkosten durch Bebauung, bitte abwägen",
    nachricht: `Sehr geehrte Damen und Herren,

Bebauung auf dem Tempelhofer Feld bedeutet nicht nur neue Wohngebäude. Sie bedeutet neue Infrastruktur: Straßen, Leitungen, Kanalisation, öffentliche Verkehrsmittel, Schulen, Kitas. Diese Kosten trägt am Ende die Allgemeinheit.

Eine nüchterne stadtplanerische Abwägung müsste zeigen, ob es nicht wirtschaftlicher wäre, bestehende Infrastruktur in anderen Stadtteilen besser auszulasten, statt auf einer Freifläche mit aufwendiger neuer Erschließung zu beginnen. Ich zweifle daran, dass diese Abwägung stattgefunden hat.

Ich bitte Sie: Fordern Sie eine sachliche Kosten-Nutzen-Analyse und stimmen Sie zunächst gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 130,
    perspective: "Stadtentwicklung",
    betreff: "Dauerschäden durch temporäre Baumaßnahmen, bitte nicht riskieren",
    nachricht: `Sehr geehrte Damen und Herren,

Baustellen auf dem Tempelhofer Feld sind nicht temporär in dem Sinne, dass danach wieder der Ausgangszustand hergestellt werden kann. Jede Bebauung ist dauerhaft. Boden, der versiegelt wird, ist kein Freiraum mehr. Wege, die verändert werden, verändern die Nutzbarkeit der verbleibenden Fläche.

Die Formulierung "Bebauung der Grillwiese" klingt nach einer kleinen, isolierten Maßnahme. In Wirklichkeit beginnt damit eine Entwicklung, die das Feld als Ganzes verändert und die nicht rückgängig zu machen ist.

Ich bitte Sie: Denken Sie in langen Zeithorizonten und stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 131,
    perspective: "Stadtentwicklung",
    betreff: "Alternative Konzepte für das Tempelhofer Feld wurden nicht geprüft",
    nachricht: `Sehr geehrte Damen und Herren,

es gibt vielfältige Konzepte für die Nutzung und Weiterentwicklung des Tempelhofer Feldes, die ohne Bebauung auskommen: temporäre Nutzungen, innovative Gemeinschaftsprojekte, Klimaadaptionsmaßnahmen, naturnahe Bildungsangebote. Viele davon wurden von der Zivilgesellschaft entwickelt und vorgeschlagen.

Diese Alternativen verdienen eine ernsthafte Auseinandersetzung, bevor eine Bebauung beschlossen wird. Das Verfahren, das zur geplanten Gesetzesänderung geführt hat, legt nicht nahe, dass diese Abwägung stattgefunden hat.

Ich bitte Sie, auf eine solche Abwägung zu bestehen und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 132,
    perspective: "Stadtentwicklung",
    betreff: "Stadtentwicklung ohne Bürgerwillen ist schlechte Planung",
    nachricht: `Sehr geehrte Damen und Herren,

gute Stadtplanung bindet die Bevölkerung ein. Das Beteiligungsverfahren des Senats zur Zukunft des Tempelhofer Feldes hat ergeben, dass nahezu alle Teilnehmenden gegen Bebauung sind. Anstatt darauf aufzubauen, wird das Verfahren übergangen.

Stadtentwicklung, die gegen den erklärten Willen der Betroffenen durchgesetzt wird, mag kurzfristig politische Ziele erfüllen. Langfristig untergräbt sie das Vertrauen in Planungsprozesse und schafft Stadtquartiere, die von der Bevölkerung nicht als ihr eigene empfunden werden.

Ich bitte Sie: Setzen Sie auf echte Beteiligung und stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Naturschutz (7 weitere Templates) ───────────────────────────────────
  {
    id: 133,
    perspective: "Naturschutz",
    betreff: "Feldlerche auf dem Tempelhofer Feld, bitte schützen",
    nachricht: `Sehr geehrte Damen und Herren,

die Feldlerche (Alauda arvensis) brütet auf dem Tempelhofer Feld. Das ist bemerkenswert, denn diese Vogelart ist in Deutschland auf der Roten Liste gefährdeter Arten und in städtischen Gebieten nahezu verschwunden. Das Tempelhofer Feld ist durch seinen offenen Charakter einer der letzten innerstädtischen Brutplätze.

Bebauung auf der Grillwiese stört den Brutbereich und verkleinert den Aktionsradius dieser Art. Der Verlust eines innerstädtischen Brutplatzes für eine bedrohte Art ist nicht durch Ausgleichsmaßnahmen andernorts zu kompensieren.

Ich bitte Sie: Schützen Sie diesen Lebensraum und stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 134,
    perspective: "Naturschutz",
    betreff: "Feldhase im Stadtgebiet, bitte Lebensraum erhalten",
    nachricht: `Sehr geehrte Damen und Herren,

auf dem Tempelhofer Feld lebt der Feldhase (Lepus europaeus). Auch er ist in Deutschland eine Art, deren Bestände rückläufig sind. Das offene Feld mit seinen langen Sichtlinien und dem Fehlen von Bebauung bietet ihm die Bedingungen, die er zum Überleben braucht.

Ein solcher Lebensraum mitten in Berlin ist außergewöhnlich und schützenswert. Er zeigt, was möglich ist, wenn Stadtentwicklung Natur nicht verdrängt, sondern ihr Raum lässt. Bebauung würde diesen Lebensraum dauerhaft zerstören.

Ich bitte Sie, diesen Naturraum zu schützen und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 135,
    perspective: "Naturschutz",
    betreff: "Seltene Steppenflora, bitte Tempelhofer Feld erhalten",
    nachricht: `Sehr geehrte Damen und Herren,

das Tempelhofer Feld ist Heimat einer außergewöhnlichen Steppenvegetation. Pflanzenarten, die in Berlin und Brandenburg selten geworden sind, haben sich auf dem nährstoffarmen Boden des ehemaligen Flughafens angesiedelt. Dieses Biotop ist nicht geplant, es ist gewachsen, über Jahrzehnte, auf einer Fläche, die man einfach ließ.

Solche Trockenrasen und Steppenvegetationstypen sind in einer Großstadt kaum zu finden. Sie können nicht künstlich wiederhergestellt werden. Bebauung vernichtet sie unwiederbringlich.

Ich bitte Sie, dieses einzigartige Biotop zu erhalten und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 136,
    perspective: "Naturschutz",
    betreff: "Dunkelhimmel und Insekten, bitte Tempelhofer Feld schützen",
    nachricht: `Sehr geehrte Damen und Herren,

Lichtverschmutzung ist ein unterschätztes Naturschutzproblem. Künstliches Licht in der Nacht stört Insekten, Vögel und Fledermäuse in ihrer Orientierung und ihrem Verhalten. Das Tempelhofer Feld, weitgehend unbeleuchtet und offen, ist eine der dunkelsten Flächen im Berliner Innenstadtbereich.

Diese relative Dunkelheit ist ein Naturschutzwert. Bebauung bringt Straßenbeleuchtung, Wohnungslicht und Gewerbehelligkeit. Das verändert das ökologische Mikroklima der Fläche und der angrenzenden Bereiche dauerhaft.

Ich bitte Sie: Erhalten Sie diesen Naturraum und stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 137,
    perspective: "Naturschutz",
    betreff: "Bodenökologie schützen, bitte keine Versiegelung",
    nachricht: `Sehr geehrte Damen und Herren,

der Boden des Tempelhofer Feldes ist ökologisch wertvoll. Über Jahrzehnte hat sich dort ein komplexes Bodenleben entwickelt: Mikroorganismen, Pilznetzwerke, Wirbellose, die alle Teil eines funktionierenden Ökosystems sind. Dieser Boden filtert Wasser, speichert Kohlenstoff und trägt zur Fruchtbarkeit der Vegetation bei.

Bebauung und Versiegelung zerstören dieses Bodenleben dauerhaft. Ein versiegelter Boden ist biologisch tot. Das ist ein Verlust, der weit über die sichtbare Oberfläche hinausgeht und nicht rückgängig gemacht werden kann.

Bitte schützen Sie diesen Boden und stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 138,
    perspective: "Naturschutz",
    betreff: "Lärmschutz durch Freiflächen, bitte Tempelhofer Feld erhalten",
    nachricht: `Sehr geehrte Damen und Herren,

Freiflächen reduzieren Lärm. Offene Grasflächen absorbieren Schall und schaffen Pufferzonen zwischen lärmintensiven Bereichen. Das Tempelhofer Feld wirkt als natürlicher Lärmschutz für angrenzende Wohngebiete.

Bebauung hebt diesen Effekt auf. Neue Gebäude können Schall reflektieren, neue Straßen und Zufahrten erzeugen zusätzlichen Verkehrslärm. Der Lärmpegel in den angrenzenden Wohngebieten wird sich verändert, zum Nachteil der Menschen, die dort leben.

Ich bitte Sie, diesen natürlichen Lärmschutz zu erhalten und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 139,
    perspective: "Naturschutz",
    betreff: "Biotopverbund und Wanderkorridore schützen",
    nachricht: `Sehr geehrte Damen und Herren,

Naturschutz funktioniert nicht durch isolierte Schutzgebiete allein. Tiere und Pflanzen brauchen Korridore, die verschiedene Lebensräume miteinander verbinden. Das Tempelhofer Feld spielt als offene Fläche inmitten der Stadt eine wichtige Rolle im Biotopverbund des Berliner Stadtgebietes.

Bebauung zerschneidet diesen Verbund. Artenreiche Lebensräume, die heute miteinander vernetzt sind, werden isoliert. Das schwächt die Artenvielfalt langfristig, weil genetischer Austausch und Ausbreitung erschwert werden.

Ich bitte Sie, diese ökologische Verbundfunktion zu schützen und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },

  // ─── Persönlich (6 weitere Templates) ────────────────────────────────────
  {
    id: 140,
    perspective: "Persönlich",
    betreff: "Dieser Ort bedeutet mir persönlich sehr viel",
    nachricht: `Sehr geehrte Damen und Herren,

ich schreibe Ihnen nicht als Expertin oder Experte für Stadtplanung oder Demokratietheorie. Ich schreibe Ihnen als Mensch, dem das Tempelhofer Feld etwas bedeutet.

Ich erinnere mich an Abende auf dem Feld, die eines gemeinsam hatten: das Gefühl, dass diese Stadt mir gehört. Nicht wegen Geld, Herkunft oder Status, sondern einfach weil dieser Ort für alle offen ist. Das ist selten. Das ist schützenswert.

Ich bitte Sie: Stimmen Sie gegen die Bebauung des Tempelhofer Feldes.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 141,
    perspective: "Persönlich",
    betreff: "Berlin hat mich auch wegen dem Tempelhofer Feld überzeugt",
    nachricht: `Sehr geehrte Damen und Herren,

ich bin nicht in Berlin aufgewachsen. Als ich hierher gezogen bin, war das Tempelhofer Feld einer der Orte, der mir gezeigt hat, was diese Stadt besonders macht. Eine Freifläche dieser Größe, mitten in der Stadt, für alle zugänglich, ohne Kommerz, das gibt es anderswo nicht.

Das Feld ist Teil dessen, was Berlin zu Berlin macht. Wenn es bebaut wird, verliert die Stadt etwas, das man nicht einfach mit einem anderen Projekt ersetzen kann. Ich sage das als jemand, der sich bewusst für diese Stadt entschieden hat.

Bitte stimmen Sie gegen den Gesetzentwurf.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 142,
    perspective: "Persönlich",
    betreff: "Ich würde über meine Zukunft in Berlin nachdenken",
    nachricht: `Sehr geehrte Damen und Herren,

ich lebe gerne in Berlin. Aber ich mache mir Sorgen über eine Stadt, in der demokratische Entscheidungen rückgängig gemacht werden und in der die letzten großen Freiflächen nach und nach verschwinden.

Das Tempelhofer Feld zu bebauen würde für mich nicht nur einen schönen Ort weniger bedeuten. Es würde bedeuten, dass sich die Stadt in eine Richtung entwickelt, in der ich mich weniger zu Hause fühle. Ich bin sicher, dass ich nicht alleine so denke.

Ich bitte Sie, dieses Signal ernst zu nehmen und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 143,
    perspective: "Persönlich",
    betreff: "Solidarität mit denen, die nach uns kommen",
    nachricht: `Sehr geehrte Damen und Herren,

ich denke oft daran, was die Menschen, die in zwanzig oder dreißig Jahren in Berlin leben werden, über unsere heutigen Entscheidungen denken werden. Das Tempelhofer Feld zu erhalten ist eine Entscheidung für sie, nicht nur für uns.

Sie werden keine Möglichkeit haben, diesen Ort zurückzubekommen, wenn er einmal bebaut ist. Wir haben diese Möglichkeit noch. Das verpflichtet uns, verantwortungsvoll zu handeln.

Ich bitte Sie: Stimmen Sie gegen den Gesetzentwurf und treffen Sie eine Entscheidung, die auch kommende Generationen gutheißen können.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 144,
    perspective: "Persönlich",
    betreff: "Das Tempelhofer Feld habe ich spät entdeckt, aber nicht vergessen",
    nachricht: `Sehr geehrte Damen und Herren,

ich habe das Tempelhofer Feld erst relativ spät für mich entdeckt. Aber seitdem ist es ein fester Teil meines Berliner Lebens. Der erste Abend dort hat mir auf Anhieb gezeigt, warum Menschen für diesen Ort abstimmen, demonstrieren und Briefe schreiben.

Es gibt Orte, die man einmal besucht und sofort versteht, warum sie schützenswert sind. Das Tempelhofer Feld ist so ein Ort. Ich bitte Sie, ihm diesen Schutz zu lassen und gegen den Gesetzentwurf zu stimmen.

Mit freundlichen Grüßen,
[Ihr Name]`,
  },
  {
    id: 145,
    perspective: "Persönlich",
    betreff: "Dieser Brief ist mein politisches Engagement für das Feld",
    nachricht: `Sehr geehrte Damen und Herren,

ich bin keine politisch aktive Person im klassischen Sinne. Ich gehe selten auf Demonstrationen, ich bin in keiner Partei. Aber das Tempelhofer Feld bewegt mich so sehr, dass ich Ihnen schreibe.

Das liegt nicht nur am Feld selbst, so sehr mir dieser Ort bedeutet. Es liegt auch daran, dass ich glaube, dass die Art, wie hier mit dem Volksentscheid von 2014 umgegangen wird, falsch ist. Demokratische Entscheidungen sollten nicht zur Verhandlungsmasse werden.

Bitte hören Sie auf Menschen wie mich, die sich nicht oft zu Wort melden, es dieses eine Mal aber tun. Stimmen Sie gegen den Gesetzentwurf.

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
  "Naturschutz",
  "Persönlich",
];

export function getRandomTemplate(length?: EmailLength): EmailTemplate {
  const pool = length ? templates.filter((t) => (t.length ?? "lang") === length) : templates;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function getTemplatesByPerspective(p: Perspective, length?: EmailLength): EmailTemplate[] {
  return templates.filter(
    (t) => t.perspective === p && (length === undefined || (t.length ?? "lang") === length)
  );
}

export function getTemplatesByLength(length: EmailLength): EmailTemplate[] {
  return templates.filter((t) => (t.length ?? "lang") === length);
}
