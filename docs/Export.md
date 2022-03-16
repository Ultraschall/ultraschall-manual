---
id: export
title: Export
tags:
  - x
  - x
---
<!-- Tags für Docusaurus -->


<!-- @todo: Links auf  Git main umziehen -->
<!-- @todo: Die Nummern die im Kapitel "Übersicht über die Bedienelemente und Bereiched" verwedet werden sollten sich duch alle Dokumente ziehen -->

## Einleitung
Wenn dein Projekt jetzt fertig geschnitten und abgemischt ist, kannst du jetzt deine fertig Audiodatei exportieren. In diesem Kapitel lernst du wie du deinen fertigen Podacst exportierst und welche wichtigen Punkte von Kapitelmarken bis Eposiodenbilder du dabei beachten solltest.

## Der Workflow
Der Export-Workflow in Ultraschall ist durch die links am Rand pazierten vier Icons begleitet [[19-22]](GUI-Gesamtuebersicht). Diese führen dich durch alle wichtigen Schritte, sodass du am Ende eine fertige Audiodatei hast. Arbeite die Icons von oben herab ab.

![export-icons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/0-export-dialogues.png)


* **1. Marker Dashboard öffnen** [[19]](GUI-Gesamtuebersicht)
* **2. Render-Assistent öffnen** [[20]](GUI-Gesamtuebersicht)
* **3. Export-Assistent öffnen** [[21]](GUI-Gesamtuebersicht)
* **4. Arbeitsverzeichnis öffnen** [[22]](GUI-Gesamtuebersicht)

**Anmerkung:** Du kannst aber auch direkt zum dritten Schritt springen, weil dort nochmal eine Übersicht über alle notwendigen Export-Schritte enthalten ist.

Auch hierzu gibt es eine Video-Erklärung von Ralf Stockmann:
<iframe width="560" height="315" src="https://www.youtube.com/embed/vdLpynu1ixE?start=3911" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 1. Marker Dashboard

![Marker Dashboard](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/1-marker-dashboard.png) **Marker Dashboard:** *So kann das Markerdashbaord bei einem fertigen Projekt aussehen.*

Das Marker-Dashboard gibt dir eine gute Übersicht über alle bereits gesetzten Kapitelmarken[[28]](GUI-Gesamtuebersicht) – und es hilft dir, sie mit weiteren Informationen wie einer URL oder einem Kapitelmarken-Bild (das dann von den meisten Podcatchern angezeigt wird, wenn die Hörenden die Stelle beim Abspielen erreichen) anzureichern.

:::info
**Tipp:** Kapitelmarken verbessern die Hörerfahrung, sie sind aber komplett optional. Nicht jedes Podcast-Format braucht Kapitelmarken, nicht alle Abspielprogramme unterstützen sie und nur wenige Hörende nutzen sie regelmäßig – aber: Sie können auch dir helfen, gerade bei längeren Aufnahmen den Überblick zu behalten.
:::

Wenn die Status-Anzeige bei allen gesetzten Markern grün ist, ist alles in Ordnung und du kannst mit dem nächsten Schritt fortfahren. Bei roter Anzeige hilft dir ein Klick auf das Fragezeichen rechts neben dem Status mit einer Erklärung zu den fehlenden oder falschen Informationen. Rote markierte Einträge werden in der Regel einfach nicht mit exportiert, sie führen aber dazu, dass der Check im [3. Export-Assistenten fehlschlägt](#3-Export-Assistent).

![Marker missing](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/1-marker-missing.png) **Fehlende Markerbezeichnung:** *Marker brauchen immer einen Namen*

:::caution
Nicht alle Podcatcher gehen gleich (gut) mit Kapitelmarken um. Für maximal kompatibilität empfehlen wir, immer einen Marker am Anfang deiner Aufnahme – also an der Position 00:00:00 – zu setzen.
<!-- @TODO: Klären, ob das wirklich noch so in der Form notwendig ist. ! -->
:::

## 2. Render-Assistent
Einmal kurz durchatmen, bevor du den Render-Assistenten[[20]](GUI-Gesamtuebersicht) öffnest, denn der gibt dir SEHR(!) viele Einstellmöglichkeiten, von denen wir dir hier nur die wichtigsten erklären werden. Die meisten anderen sind entweder für die Musikproduktion mit REAPER gedacht und/oder haben einen sinnvollen Default-Wert, den du nur ändern solltest, wenn du ganz genau weißt, was du tust.

Drückst du links unten in Ultraschall auf das Render-Icon[[20]](GUI-Gesamtuebersicht) (oder wählst den Punkt `Start Export Assistant` über das Menü `Podcast`->`Export`), checkt Ultraschall, ob alle vorhandenen Spuren auch hörbar sein werden. Hast du einzelne Spuren absichtlich oder unabsichtlich gemuted, erhältst du auf dem Weg zum Render-Assistenten folgende Warnung:

![Warning-muted-tracks](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/2-warning.png) **Warning muted tracks:** *Ultraschall warnt dich, wenn du dein Projekt exportieren willst, aber eine oder mehrere Spuren stummgeschaltet sind.*

Klickst du hier `No`, landest du wieder im Arbeitsbereich, wo du nochmal checken kannst, welche Spuren mit in den Export einbezogen werden sollen.

Klickst du hier auf `Yes` öffnet sich der Assistent – in diesem Fall werden die gemuteten Spuren nicht in den Export mit eingeschlossen, später also NICHT zu hören sein.

**Die wichtigsten Elemente des Render-Assistenten:**
![export-render-to-file](https://raw.githubusercontent.com/Ultraschall/ultraschall-manualmain/assets/images/Export/2-render-assistant.png) **Der Render Assistent:** *Der Render Assistent gibt die viel Freiheit wie du dein Projekt rendern kannst.*
<!--@TODO: Screenshot um Zahlen/Legende erweitern -->

- **Source:** Hier legst du fest, welche Spuren der Export beinhalten soll. Der Standard-Wert `Master mix` führt alle hörbaren Spuren in eine Datei zusammen. `Stems (selected tracks)` sorgt dafür, dass jede Spur als eigene Datei exportiert wird. **Vorsicht:** Es werden nur die Tracks exportiert, die auch ausgewählt sind – du erkennst ausgewählte Spuren im Spurenbereich an dem etwas helleren Grau. Du kannst bei geöffnetem Render-Assistenten Spuren im [Spuren-Bereich [23]](GUI-Gesamtuebersicht) an- und abwählen, indem du mit gehaltener `CTRL`- beziehungsweise `CMD`-Taste draufklickst. Mit `Master mix + Stems` erhältst du nach dem Export sowohl die zusammengeführte Datei als auch die einzelnen (ausgewählten) Spuren.
- **Bounds:** Diese Auswahl bestimmt, ob dein Projekt von Anfang bis Ende (`Entire project`) gerendert wird. Brauchst du nur einen Ausschnitt, weil du etwa einen kleinen Teaser aus einer längeren Episode exportieren möchtest, wählst du hier zum Beispiel `Time selection` – dann wird nur der im [Timeline-Arbeitsbereich [25]](GUI-Gesamtuebersicht) ausgewählte Abschnitt exportiert. Andere Optionen, die du hier verwenden kannst sind `Custom time range`, `Project regions` oder `Selected regions`.
- **Presets:** Einmal getroffene Optionen im Render-Assistenten kannst du dir – am besten bevor du auf `Rendern` klickst –  auch als `Preset` abspeichern, sodass du sie beim nächsten Mal einfach hier auswählen kannst statt sie ein zweites Mal alle einzeln festzulegen. Ultraschall bringt eine Handvoll sinnvolle Presets bereits mit.
- **Output:** Hier legst du fest, wohin Ultraschall die gerenderten Dateien ablegen soll. Du kannst hier über `Browse` das Verzeichnis oder auch direkt den gewünschten Dateinamen angeben. Was sich in vielen Fällen aber stattdessen empfiehlt (vor allem, wenn du mit Presets und/oder mit Stems arbeitest): den Dateinamen mit sogenannten Wildchars (zu deutsch etwa "Platzhalter") dynamisch zusammenzusetzen. Als Wildchars stehen dir einen Haufen Variablen zur Auswah, (siehe Screenshot), sinnvoll sind unter anderem `$track`für den Namen der Spur oder `$region`, falls du in einem Exportvorgang mehrere Regions renderst. Hast du bei deinem letzten Export kein Preset angelegt, kannst du dir über die Auswahl `Recent patterns` auf die zuletzt verwendeten Dateinamen mitsamt Wildchars zugreifen.
- **Options:** Im Bereich Options kannst du wahrscheinlich mit den Voreinstellungen sehr gut leben – und falls nicht, dann weißt du sicher auch, wo du hingreifen musst. Wichtig ist hier eigentlich nur, dass die `Sample rate` hier zur Sample rate passt, so wie du sie auch in den Einstellungen für dein Audio-Interface getroffen hast.
- **Primary output format**: Hier legst du fest, in welchem Format du das Ergebnis rendern lassen möchtest. Alle Details zu den einzelnen Dateiformaten findest du weiter unten in diesem Kapitel unter [Export-Dateiformate](#Export-Dateiformate).
- **Secondary output format**: Willst du in einem Rendervorgang Dateien in zwei unterschiedlichen Formaten exportieren, wählst du in diesem Reiter hier das zweite Format aus.
- **Render X file(s):** Der `Render`-Button informiert dich zur Kontrolle nochmal darüber, wie viele Dateien am Ende aus Ultraschall herauspurzeln werden – gerade bei gemuteten oder ausgewählten Tracks/Stems oder Mehrfachexporten ist diese Angabe mitunter ganz hilfreich, um Fehlern vorzubeugen. Ein Klick auf den Button öffnet ein weiteres Programmfenster, das dir den Fortschritt des Render-Vorgangs zeigt. Nach Abschluss des Exports schließen sich alle Dialoge wieder und du landest zurück in der Arbeitsansicht.

## 3. Export-Assistent
Der Export-Assistent[[21]](GUI-Gesamtuebersicht) hilft dir dabei, dein Projekt nun fertigzustellen. Ein Apelsystem zeigt dir dabei immer an, ob noch Metadaten zu deinem Projekt fehlen. Wenn noch Metadaten fehlen, zeigt die Ampel rechts rot und daneben steht `Missing`, wenn zwar Metadaten vorliegen, diese aber unvollständig sind, zeigt die Ampfel gelb und `Incomplete` oder, wenn der Assistent es nicht weiß, `Unknown` an. Wenn alle Ampeln auf grün stehen, hast du alles richtig gemacht.
![export-icons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/3-export-assistant.png) **Export Assistent**: hilft dir dabei dein Projekt fertigzustellen.

#### 1. Export MP3
Wenn du oben bereits den Schritt durchlaufen hast, sollte die Ampel hier auf grün stehen. Wenn nicht, kannst du den Render-Assistenten mit dem Button[[20]](GUI-Gesamtuebersicht) nochmal öffnen.
#### 2. Kapitelmarken (Chapter Marks)
Auch hier sollte die Ampel auf grün stehen, wenn du oben bereits den Schritt durchlaufen hast. Wenn die Ampel trotzdem auf gelb oder rot zeigt, kannst du mit dem Button `Edit Chapters`[[19]](GUI-Gesamtuebersicht) den Kapitelmarkendialog nochmal öffnen und kontrollieren.
#### 3. ID3 Metadaten
<!-- @todo: Vielleicht noch einen Satz mehr dazu-->
Metadaten sind zwar optional, aber trotzdem wichtig für die Weiterverarbeitung und Veröffentlichung deines Podcasts. Wenn die Metadaten richtig gesetzt sind, können die MP3s auch unabhängig von dem RSS-Feed richtig ausgelesen werden. Somit ist es in Punkto Langzeitarchivierung sehr sinnvoll diese Metadaten direkt in die Datei mit rein zu schreien. Die Metadaten werden im [ID3](https://de.wikipedia.org/wiki/ID3-Tag) Format bearbeitet. Der Ultraschall-MP3-Metadaten-Dialog[[21]](GUI-Gesamtuebersicht) ist reduziert auf die für Podcasts relevanten Tags. Für die Podcast Kategorie kannst du dich bspw. an dieser [Liste](https://github.com/Ultraschall/ultraschall-manual/blob/Export/assets/Apple-Podcast-Kategorien-Ids.csv) orientieren ansonsten hast du freie Hand. Einzig und allein die Zeichen `(`,`)` , `'` , oder `"` darfst du nicht verwenden.

<!-- @todo: Tippfehler im Screenshot noch verbessern?-->
![Edit MP3 Metadaten](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/3-edit-mp3-metadata.png) **Edit MP3 Metadaten:** *Fülle die Metadaten für deinen Postcast aus.*

#### 4. Podcast Episoden Bild
Das hier hinterlegte Bild wird später beim Abspielen angezeigt. Ziehe per Drag and Drop dein Episodenbild einfach in den Export Dialog. Das Bild wird dann in den Projektordner kopiert. Untersützte Formate sind `.JPG`, `.PNG` und `.JPEG`. Ultraschall merkt sich immer die vier zuletzt benutzen Episodenbilder und bietet diese zur schnellen Auswahl an. Das groß angezeigte Bild ist das dann Ausgewählte.
*(**Notiz an Linuxnutzer**: Momentan muss die Dateiendung tatsächlich groß geschrieben werden. `.png` funktioniert momentan nicht. Das wird in der Zukunft gefixt und dieser Hinweis dann verschwinden.)*

#### 5. Finalisieren
Für den letzten Schritt, musst du nur einmal auf dem Buttton `Finalize MP3!` klicken. Wenn noch Probleme vorliegen zeigt dir der Assistent einen Dialog mit einer Warnung an. Wenn der Assistent deine MP3 Datei nicht automatisch gefunden hat, musst du diese jetzt nochmal einmal auswählen. Wenn dann alles geklapt hat, erscheint eine Erfolgsmeldung. Dein Podcast wurde jetzt erfolreich exportiert und du hast den Schritt `Export`erfolgreich abgeschlossen.

<!--
@todo: immer noch notwendig oder schon beantwortet
### Metadaten bearbeiten und exportieren
https://sendegate.de/t/faq-metadaten-was-traegt-man-wo-ein/13562 -->

### Export Dateiformate
Ultraschall (Reaper) importiert sehr viele Audioformate. Es werden jedoch eine relativ geringe Anzahl von Ausgabeformaten angeboten. Für die Anwendung in Ultraschall sind hier die wichtigsten Formate aufgeführt:

- **WAV** ist ein unkomprimierte Puls Code Modulation, PCM Verfahren zum speichern von Audiodatein.

- **AIFF** (Audio Interchange File Format) dient zum speichern von Linear-PCM-Audiodaten. (hauptsächlich Apple).

- **FLAC** (Free Lossless Audio Codec)ist ein verlustloser Codec der Projete in Containern inklusive Metadaten sichtert.

- **mp3** ist ein verlustbehaftestes Audioformat. Die Idee ist es nur für den Menschen hörbare Informationen zu speichern, um eine möglichst gute Audioqualität bei möglichst geringer Dateigröße zu erreichen. (Mitlerweile handelt es sich um einen frei verfügbaren Standard)

- **OGG Vorbis** ist ein freies verlustbehaftetes Autiofomat. Das Format ist als lizensfreie Alternative zum mp3 Format entwickelt worden. (Anmerkung: Nachdem mp3 patentfrei geworden ist hat dieses Format an Bedeutung verloren)

An häufingsten wird für Ultraschall Projekte das **mp3** Format verwendet, da der Workflow von Ultraschall under anderm auch Kapitelmarken und Kapitelbilder für **mp3** Dateien ermöglicht. Andere Formate unterstützen diese Fonktionen nicht. Wie im Bild gezeigt ist die Verwendung von mp3 bei einer Bitrate von z.B. 128 kBps sinnvoll.


![Exportformate](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/2-formats.png) **Exportformate:** *Mit Ultraschall kannst du deinen Podcast in verschiedenen Formaten exportieren. Standartmäßig ist MP3 aufgewählt.*

<!--
 @todo: Was passiert mit dem Video?
https://www.youtube.com/watch?v=vdLpynu1ixE&t=4104s

@todo: entscheiden ob wir das noch schreiben oder nicht?

## Export Kapitelmarkten, Weiterverarbeitung

## Meta-Daten (id3tags)
welche gibts?
warum?

## Kapitel als einzelene Dateien rendern
https://sendegate.de/t/faq-kapitel-als-einzelne-dateien-rendern/4824

-->
