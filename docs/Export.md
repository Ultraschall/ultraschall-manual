---
id: export
title: Export
tags:
  - export
  - kapitelmarken
  - rendern
  - workflow
  - metadaten
lektorat:
    - Lektorat: 27.4.2022 @MirUnauffaellig
    - Schlusskorrektur: 
---
<!-- 

@todo: Was passiert mit dem Video?
https://www.youtube.com/watch?v=vdLpynu1ixE&t=4104s

@todo: entscheiden ob wir das noch schreiben oder nicht?

## Export Kapitelmarken, Weiterverarbeitung

## Meta-Daten (id3tags)
welche gibt's?
warum?

## Kapitel als einzelene Dateien rendern
https://sendegate.de/t/faq-kapitel-als-einzelne-dateien-rendern/4824
-->

![export-banner](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/0-banner-export.png)

## Einleitung

Wenn dein Projekt geschnitten und abgemischt ist, kannst du deine fertige Audiodatei exportieren. In diesem Kapitel lernst du, wie du eine Podcast-Episode exportierst und welche wichtigen Punkte du von Kapitelmarken bis Episoden-Cover dabei beachten solltest.


:::info Video
Zu diesem Thema gibt es ein sehr gutes [Tutorial-Video](#video).
:::

## Der Workflow

Der Export-Workflow in Ultraschall wird durch vier links am Rand platzierte Icons begleitet [[19-22]](GUI-overview). Sie führen dich durch alle wichtigen Schritte, sodass du am Ende eine fertige Audiodatei hast. Am besten folgst du diesen vier Icons und den zugehörigen Arbeitsschritten von oben nach unten.

![export-icons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/0-export-dialogues.png)

* **1. Marker Dashboard öffnen** [[19]](GUI-overview)
* **2. Render-Assistent öffnen** [[20]](GUI-overview)
* **3. Export-Assistent öffnen** [[21]](GUI-overview)
* **4. Arbeitsverzeichnis öffnen** [[22]](GUI-overview)

:::note Hinweis
Du kannst auch direkt zum dritten Schritt springen, weil dort nochmal eine Übersicht über alle notwendigen Export-Schritte enthalten ist.
:::

Auch hierzu gibt es eine Video-Erklärung von Ralf Stockmann:
<iframe width="560" height="315" src="../youtube/?url=vdLpynu1ixE?start=3911" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="">
</iframe> 

### 1. Marker Dashboard

![Marker Dashboard](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/1-marker-dashboard.png) **Marker Dashboard:** *So kann das Marker-Dashboard in einem fertigen Projekt aussehen.*

Das Marker-Dashboard gibt dir eine gute Übersicht über alle bereits gesetzten Kapitelmarken[[28]](GUI-overview) – und es hilft dir, sie mit weiteren Informationen wie einer URL oder einem Kapitelmarken-Bild anzureichern (das nicht von allen, aber von den meisten Podcatchern angezeigt wird, wenn die Hörenden die Stelle beim Abspielen erreichen).

:::tip Tipp
Kapitelmarken verbessern die Hörerfahrung, sie sind aber komplett optional. Nicht jedes Podcast-Format braucht Kapitelmarken, nicht alle Abspielprogramme unterstützen sie und nur wenige Hörende nutzen sie regelmäßig – aber: Sie helfen auch dir, gerade bei längeren Aufnahmen den Überblick zu behalten.
:::

Wenn die Status-Anzeige bei allen gesetzten Markern grün ist, ist alles in Ordnung und du kannst mit dem nächsten Schritt fortfahren. Bei roter Anzeige hilft dir ein Klick auf das Fragezeichen rechts neben dem Status mit einer Erklärung zu den fehlenden oder falschen Informationen. Rot markierte Einträge werden in der Regel _nicht_ mit exportiert, sie führen aber dazu, dass der Check im [3. Export-Assistenten fehlschlägt](#3-Export-Assistent).

![Marker missing](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/1-marker-missing.png) **Fehlende Markerbezeichnung:** *Marker brauchen immer einen Namen.*

:::danger Achtung!
Nicht alle Podcatcher gehen gleich (gut) mit Kapitelmarken um. Für maximale Kompatibilität empfehlen wir, immer einen Marker am Anfang der Aufnahme – also an der Position 00:00:00 – zu setzen.
<!-- @TODO: Klären, ob das wirklich noch so in der Form notwendig ist. ! -->
:::

### 2. Render-Assistent

Einmal kurz durchatmen, bevor du den Render-Assistenten[[20]](GUI-overview) öffnest, denn der gibt dir *sehr* viele Einstellmöglichkeiten, von denen wir dir hier nur die wichtigsten erklären. Die meisten anderen sind entweder für die Musikproduktion mit REAPER gedacht und/oder haben einen sinnvollen Default-Wert, den du nur ändern solltest, wenn du ganz genau weißt, was du tust.

Drückst du links unten in Ultraschall auf das Render-Icon[[20]](GUI-overview) (oder wählst den Punkt `Start Export Assistant` über das Menü `Podcast`>`Export`), prüft Ultraschall, ob alle vorhandenen Spuren auch hörbar sein werden. Hast du einzelne Spuren absichtlich oder unabsichtlich stummgeschaltet, erhältst du auf dem Weg zum Render-Assistenten folgende Warnung:

![Warning-muted-tracks](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/2-warning.png) **Warning muted tracks:** *Ultraschall warnt dich, wenn du ein Projekt exportieren willst, in dem eine oder mehrere Spuren stumm sind.*

Klickst du hier `No`, landest du wieder im Arbeitsbereich, wo du nochmal checken kannst, welche Spuren mit in den Export einbezogen werden sollen.

Klickst du stattdessen auf `Yes`, öffnet sich der Assistent – in diesem Fall werden die gemuteten Spuren *nicht* in den Export mit eingeschlossen und später damit auch *nicht* zu hören sein.

**Die wichtigsten Elemente des Render-Assistenten:**
![export-render-to-file](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/2-render-assistant.png) **Der Render-Assistent:** *Der Render-Assistent gibt dir viele Freiheiten, um dein Projekt mit individuellen Einstellungen zu rendern.*
<!--@TODO: Screenshot um Zahlen/Legende erweitern -->

* **Source:** Hier legst du fest, welche Spuren der Export beinhalten soll. Der Standard-Wert `Master mix` führt alle hörbaren Spuren in eine Datei zusammen. `Stems (selected tracks)` sorgt dafür, dass jede Spur als eigene Datei exportiert wird. **Vorsicht:** Es werden nur die Tracks exportiert, die auch ausgewählt sind – du erkennst ausgewählte Spuren im Spurenbereich an dem etwas helleren Grau. Du kannst bei geöffnetem Render-Assistenten Spuren im [Spuren-Bereich [23]](GUI-overview) an- und abwählen, indem du mit gehaltener <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>-Taste draufklickst. Mit `Master mix + Stems` erhältst du nach dem Export sowohl die zusammengeführte Datei als auch die einzelnen (ausgewählten) Spuren.

* **Bounds:** Diese Auswahl bestimmt, ob dein Projekt von Anfang bis Ende (`Entire project`) gerendert wird. Brauchst du nur einen Ausschnitt, weil du etwa einen kleinen Teaser aus einer längeren Episode exportieren möchtest, wählst du hier zum Beispiel `Time selection` – dann wird nur der im [Timeline-Arbeitsbereich [25]](GUI-overview) ausgewählte Abschnitt exportiert. Andere Optionen, die du hier verwenden kannst, sind: `Custom time range`, `Project regions` oder `Selected regions`.

* **Presets:** Einmal getroffene Optionen im Render-Assistenten kannst du dir – am besten bevor du auf `Rendern` klickst –  auch als `Preset` abspeichern, sodass du sie beim nächsten Mal einfach hier auswählen kannst, statt sie ein zweites Mal alle einzeln festzulegen. Ultraschall bringt eine Handvoll sinnvolle Presets bereits mit.

* **Output:** Hier legst du fest, wo in deinem Dateisystem Ultraschall die gerenderten Dateien ablegt. Du kannst hier über `Browse` das Verzeichnis oder auch direkt den gewünschten Dateinamen angeben. Was sich in vielen Fällen aber stattdessen empfiehlt (vor allem, wenn du mit Presets und/oder mit Stems arbeitest): den Dateinamen mit sogenannten Wildchars (zu deutsch etwa "Platzhalter") dynamisch zusammenzusetzen. Als Wildchars stehen dir einen Haufen Variablen zur Auswahl, (siehe Screenshot), sinnvoll sind unter anderem `$track` für den Namen der Spur oder `$region`, falls du in einem Exportvorgang mehrere Regions renderst. Hast du bei deinem letzten Export kein Preset angelegt, kannst du über die Auswahl `Recent patterns` auf die zuletzt verwendeten Dateinamen mitsamt Wildchars zugreifen.

* **Options:** Im Bereich Options kannst du wahrscheinlich mit den Voreinstellungen sehr gut leben – und falls nicht, dann weißt du sicher auch, wo du hingreifen musst. Wichtig ist hier eigentlich nur, dass die `Sample rate` hier zur Sample Rate passt, so wie du sie auch in den Einstellungen für dein Audio-Interface getroffen hast.

* **Primary output format**: Hier legst du fest, in welchem Format du das Ergebnis rendern lassen möchtest. Alle Details zu den einzelnen Dateiformaten findest du weiter unten in diesem Kapitel unter [Export-Dateiformate](#Export-Dateiformate).

* **Secondary output format**: Willst du in einem Rendervorgang Dateien in zwei unterschiedliche Formate exportieren, wählst du in diesem Reiter hier das zweite Format aus.

* **Render X file(s):** Der `Render`-Button informiert dich zur Kontrolle nochmal darüber, wie viele Dateien am Ende aus Ultraschall herauspurzeln werden – gerade bei gemuteten oder ausgewählten Tracks/Stems beziehungsweise Mehrfachexporten ist diese Angabe hilfreich, um Fehler vorzubeugen. Ein Klick auf den Button öffnet ein weiteres Programmfenster, das dir den Fortschritt des Render-Vorgangs zeigt. Nach Abschluss des Exports schließen sich alle Dialoge automatisch und du landest zurück in der Arbeitsansicht.

### 3. Export-Assistent

Der Export-Assistent[[21]](GUI-overview) hilft dir dabei, dein Projekt nun fertigzustellen. Ein Ampelsystem zeigt dir an, was deinem Projekt noch fehlt. Sollten Metadaten gänzlich fehlen, zeigt die Ampel rot und rechts daneben steht `Missing`; falls Metadaten vorliegen, diese aber unvollständig sind, zeigt die Ampel gelb und `Incomplete` oder `Unknown` an. Wenn alle Ampeln auf grün stehen, hast du alles richtig gemacht.

![export-icons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/3-export-assistant.png) **Export-Assistent**: _Der Assistent hilft dir dabei, dein Projekt fertigzustellen._

#### 1. Export MP3

Falls du diesen Schritt nach der Anleitung weiter oben bereits durchlaufen hast, sollte die Ampel hier auf grün stehen. Falls nicht, öffnest du den Render-Assistenten über den entsprechenden Button[[20]](GUI-overview).

#### 2. Chapter Markers

Auch diese Ampel steht wahrscheinlich bereits auf grün, falls du der Anleitung oben gefolgt bist. Zeigt die Ampel gelb oder rot, öffnet der Button `Edit Chapters`[[19]](GUI-overview) den Kapitelmarken-Dialog, wo du alle Marken noch einmal kontrollieren kannst.

#### 3. ID3 Metadata

Metadaten sind zwar optional, aber trotzdem wichtig für die Weiterverarbeitung und Veröffentlichung deines Podcasts. Falls alle Metadaten richtig gesetzt sind, können die MP3 auch unabhängig von deinem RSS-Feed korrekt ausgelesen werden. Somit ist es etwa für die Langzeitarchivierung sinnvoll, diese Metadaten direkt mit in die Datei zu schreiben. Die Metadaten werden dort im [ID3](https://de.wikipedia.org/wiki/ID3-Tag) Format gespeichert. Der Ultraschall-MP3-Metadaten-Dialog[[21]](GUI-overview) zeigt dir dabei nur die für Podcasts relevanten Tags. Für die Podcast-Kategorie kannst du dich beispielsweise an dieser [Liste](https://github.com/Ultraschall/ultraschall-manual/blob/Export/assets/Apple-Podcast-Kategorien-Ids.csv) orientieren – ansonsten hast du freie Hand. Einzig die Zeichen `(`,`)` , `'`  und `"` solltest du vermeiden.

<!-- @todo: Tippfehler im Screenshot noch verbessern?-->
![Edit MP3 Metadaten](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/3-edit-mp3-metadata.png) **Edit MP3 Metadata:** *Füll hier die Metadaten für deinen Podcast aus.*

#### 4. Podcast Episode Image

Das hier hinterlegte Bild wird später in den meisten Podcatchern als Bild zur Episode angezeigt. Zieh per Drag-and-Drop dein Episoden-Cover einfach in den Export-Dialog. Das Bild landet dann automatisch mit im Projektordner. Unterstützte Formate sind `.JPG`, `.JPEG` und `.PNG`. Ultraschall merkt sich die vier zuletzt benutzten Episoden-Bilder und bietet sie dir zur schnellen Auswahl hier an. Das jeweils ausgewählte Bild wird links davon groß angezeigt.

:::info Info
Für Linux-Nutzende: Aktuell muss die Dateiendung tatsächlich groß geschrieben werden. `.png` funktioniert also nicht. Das wird in der Zukunft korrigiert und dieser Hinweis dann verschwinden.
:::

#### 5. Finalize MP3

Für den letzten Schritt klickst du einmal auf die Schaltfläche `Finalize MP3!`. Falls noch Probleme vorliegen, zeigt dir der Assistent einen Dialog mit einer entsprechenden Warnung an. Falls der Assistent deine MP3-Datei nicht automatisch gefunden hat, musst du diese jetzt noch einmal manuell angeben. Hat alles geklappt, erscheint eine Erfolgsmeldung – deine Podcast-Episode wurde erfolgreich exportiert!

<!--
@todo: immer noch notwendig oder schon beantwortet
### Metadaten bearbeiten und exportieren
https://sendegate.de/t/faq-metadaten-was-traegt-man-wo-ein/13562 -->

<!-- todo: ### 4. Arbeitsverzeichnis öffnen -->

### Export-Dateiformate

Ultraschall (Reaper) ist mit sehr vielen Audioformaten kompatibel. Für die Ausgabe werden dir jedoch nur eine geringe Anzahl von Formaten angeboten. Die wichtigsten für Ultraschall:

* **WAV** ist ein Format, um Audiodateien unkomprimiert mit einem Puls-Code-Modulations-Verfahren zu speichern.

* **AIFF** (Audio Interchange File Format) dient zum Speichern von Linear-PCM-Audiodaten (hauptsächlich für Apple-Betriebssysteme).

* **FLAC** (Free Lossless Audio Codec) ist ein verlustfreier Codec, der Projekte in Containern inklusive Metadaten sichert.

* **MP3** ist ein verlustbehaftetes Audioformat. Der Ansatz: nur die für den Menschen hörbaren Informationen zu speichern, um möglichst gute Audioqualität bei möglichst geringer Dateigröße zu erreichen. Mittlerweile ist dieser Audio-Standard frei verfügbar.

* **OGG Vorbis** ist ein freies verlustbehaftetes Audioformat als lizenzfreie Alternative zum (vormals proprietären) MP3-Format. Seit MP3 patentfrei geworden ist, hat dieses Format an Bedeutung verloren.

Am häufigsten wird für Ultraschall-Projekte das **MP3**-Format verwendet. Der Ultraschall-Workflow sieht vor, under anderem auch Kapitelmarken und Kapitelbilder in **MP3**-Dateien zu speichern. Andere Formate unterstützen diese Funktionen nicht oder nicht ausreichend. Wie im Bild gezeigt ist die Verwendung von MP3 bei einer Bitrate von zum Beispiel 128 kBps sinnvoll.

![Exportformate](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/2-formats.png) **Exportformate:** *Mit Ultraschall kannst du deine Podcast-Episoden in verschiedene Formaten exportieren. Der Standard ist MP3.*

## Video
<iframe width="560" height="315" src="../youtube/?url=VSqAM5ur4M4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="">
</iframe> 
