---
id: firststeps
title: Erste Schritte mit Ultraschall
---

<!-- @todo: Links und Bildeinbettungen für docusaurus anpassen; aktuell sind Bilder mit expliziter Größenangabe so eingebunden: <img title="" alt="" src="" width="" style="display: block" /> -->

 # Übersicht

Jetzt kann es mit dem Podcasten richtig losgehen!

Nach der Ultraschall-Philosophie gliedert sich Podcasting in drei Phasen:

1. **Vorbereitung (Setup)**: Dazu gehört das Einrichten des Ultraschall-Projekts, die Konfiguration der Audio-Geräte und das Setup der Spuren.
2. **Aufzeichnung (Recording)**: Das umfasst die Aufnahme an sich, aber auch Dinge wie das Soundboard, Kapitelmarken, die Einbindung von Personen via Studio-Link oder ein Live-Streaming der Sendung ins Internet.
3. **Nachbereitung (Production)**: Zur Nachbereitung gehören unter anderem der Schnitt, die Audio-Produktion (Mischen, Normalisieren, Klang aufbereiten und so weiter), das Anreichern mit Meta-Daten und der Export.

Diese Gliederung findest du so auch im `Podcast`-Menü von Ultraschall und an einigen weiteren Stellen innerhalb der Software. Um die Software und ihre Möglichkeiten etwas besser kennenzulernen, ist es ohnehin eine ganz gute Idee, die (chrono-)logisch aufgebauten Menüpunkte der Reihe nach durchzugehen.

![Podcast-Menü](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Erste-Schritte-mit-Ultraschall/podcast-menu.png)

**Das Podcast Menü:** _Der Workflow ist in die drei Teile: 1.Setup, 2\. Recording und 3\. Production aufgeteilt_

# 1\. Vorbereitung

## Spuren anlegen

Nachdem du Ultraschall gestartet hast, kannst du nun die benötigten Spuren anlegen. Leg für jede Sprecherin und jeden Sprecher jeweils eine eigene Spur (auch "Track") an – wahlweise per Doppelklick in den [Spuren-Bereich [23]](GUI-Gesamtuebersicht.md) oder mit einem Rechtsklick und der Option `Insert new track` aus dem Kontextmenü.

[Erfahre mehr ...](Aufnahme.md#Spuren-anlegen)

## Geräte auswählen

Wähl dein Aufnahmegerät in den Einstellungen (im Menü unter `Preferences`>`Device`) im Punkt `Audio Devices`. Mit einem Linksklick auf jede Spur und dann `Input: Mono` im [Mixer [24]](GUI-Gesamtuebersicht.md) weist du jeder Spur die entsprechende Quelle zu.

[Erfahre mehr...](Aufnahme.md)

# 2\. Aufzeichnung

Sofern du alles korrekt eingerichtet hast, ist die Aufnahme selbst keine allzu große Sache mehr. Trotzdem gibt es ein paar Dinge, die du nach Druck auf `Record`[[35]](GUI-Gesamtuebersicht.md) noch beachten kannst und solltest, damit es später für dich keine bösen Überraschungen oder vermeidbare Mehrarbeit gibt. Der erste und wichtigste Tipp: Wirf ab und an einen Blick in deine Aufnahmesoftware (am besten deaktivierst du für die Aufnahme den Bildschirmschoner). Dann siehst du direkt etwaige Fehler- oder Hinweismeldungen – zum Beispiel warnt dich Ultraschall, wenn du die Spuren nicht aktiviert oder das Projekt noch nicht gespeichert hast. Und du bekommst auch mit, falls mit den Spureinstellungen etwas nicht passt oder eine Person übersteuert.

Die Einbindung von weiteren Sprechenden über das Internet ist im Kapitel [Aufnahme](Aufnahme.md#aufnehmen-mit-studiolink) näher erklärt. Wie du ein Soundboard verwendest, um während der Sendung Soundeffekte, Musik und andere Einspieler zu integrieren, erklären wir dir [hier](Aufnahme.md#das-soundboard-verwenden). Es ist außerdem sinnvoll, während der Aufnahme die [Pegel im Auge zu behalten](Aufnahme-fuer-Fortgeschrittene.md) sowie bei Bedarf direkt [Kapitel- und Editiermarken](Aufnahme-fuer-Fortgeschrittene.md) zu setzen.

[Erfahre mehr...](Aufnahme.md)

# 3\. Nachbereitung

In vielen Fällen besteht die Podcast-Produktion lediglich aus Schnitt, Audioproduktion und Export. Das heißt aber nicht, dass mit Ultraschall nicht auch komplexere Szenarien wie zum Beispiel aufwändige Hörspielproduktionen möglich wären – die Details hierzu findest du in den entsprechenden [späteren Kapiteln](Aufnahme-fuer-Fortgeschrittene.md).

:::danger Nach Ende deiner Aufnahme und vor dem Schnitt solltest unbedingt aus dem `Podcast`-Menü `Prepare all tracks for editing` aufrufen. Danach sind Spuren und Studio-Link-Verbindungen deaktiviert, das Routing angepasst – und die Oberfläche insgesamt so voreingestellt, dass du kaum Fehlerrisiko, dafür aber maximalen Bedienkomfort hast. :::

## Schnitt

Eines vorweg: Schnitt ist in Ultraschall nicht-destruktiv und jederzeit reversibel. Hab also keine Angst, dass du an irgendeiner Stelle mal zu viel entfernst – deine Aufnahmen bleiben immer im Original erhalten (du findest sie in deinem Projektverzeichnis [[22]](GUI-Gesamtuebersicht.md#buttons-export) im Ordner `Recordings`).

Um Inhalte über alle Spuren hinweg zu entfernen (zum Beispiel am Anfang und Ende der Aufnahme), selektierst du den gewünschten Abschnitt im [Timeline-Arbeitsbereich [25]](GUI-Gesamtuebersicht.md), indem du mit gedrückter Maustaste ziehst und auswählst oder indem mit

<kbd>I</kbd>

- beziehungsweise

<kbd>O</kbd>

-Taste einen In- und einen Out-Point für die aktuelle Auswahl setzt. Den selektierten Bereich entfernst du mit dem Tastenkürzel

<kbd>Cmd</kbd>

 +

<kbd>X</kbd>

 (Mac) beziehungsweise

<kbd>Ctrl</kbd>

 +

<kbd>X</kbd>

 (Windows, Linux) oder per Klick auf den Schnitt-Button [[12]](GUI-Gesamtuebersicht.md#buttons-views).

<!-- ![Schnitt](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-ripple-cut.png) -->

 Standardmäßig "rutschen" alle Inhalte, die rechts von deiner Schnittstelle folgen, automatisch an die Inhalte davor ran, sodass ein nahtloser Übergang entsteht.

[Erfahre mehr...](Schnitt.md#1-schnitt-über-alle-spuren-ripple-cut)

## Produktion

Jede Produktion ist einzigartig und unterscheidet sich je nach Mikrofon, Aufnahmebedingungen, Sonderwünschen an Effekten und Musik, Sprechdisziplin, und, und, und.

Willst du, dass alle Sprechenden gleich laut klingen, die Gesamtlautstärke auf einem vernünftigen Niveau ist und Störgeräusche minimiert oder gar automatisch entfernt werden, sieh dir unbedingt die in Version 5 von Ultraschall neu hinzugekommene [AMP, die _Automated Mixing Pipeline_](Post-Produktion.md#ultraschall-amp-automated-mixing-pipeline) an. Die vereint einige sinnvolle Audio-Plugins und Einstellungen, um für einen Großteil der Podcast-Produktionen ein vernünftiges Ergebnis zu produzieren, ohne dass du dafür eine Ausbildung zum Sound Engineer durchlaufen musst.

[Erfahre mehr...](Post-Produktion.md)

## Export

Der Exportassistent vereinfacht das Exportieren deines Projekts, indem er dich durch die notwendigen Schritte führt. Er ist aus dem Menü über `Podcast`>`Export` und `Start Export Assistant` oder über den entsprechenden Button [[21]](GUI-Gesamtuebersicht.md#buttons-export) links zu erreichen.

<!-- ![Exportassistent](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/Export_Assistent_Button.jpg) -->

 Der Exportassistent führt dich durch die einzelnen Schritte, die für den Export wichtig sind:

1. Export des MP3 (die eigentliche Audiodatei)
2. Chapter Markers (Kapitelmarken)
3. ID3 Metadata (Hier handelt es sich um die Metadaten der Audiodatei: Episoden-Titel, Autor, Podcast-Titel, Erscheinungsjahr, Podcast-Kategorie, Beschreibung)
4. Podcast Episode Image (Podcast-Episodencover)
5. Finalize MP3 (Fertigstellung des Exports)

<!-- ![Exportassistent grün](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/Export_Assistent_alles_gruen.jpg) --> **Exportassistent:** _Wenn alles bereit zum Finalisieren ist, steht bei jedem Punkt: `OK`._

Während du die einzelnen Schritte durchläufst, wechselt die Farbe von Gelb oder Rot auf Grün (OK). Ziel sollte es sein, alle Aspekte mit einem `OK` (grün) zu versehen – wie relevant die einzelnen Schritte aber für dich und dein Podcast-Projekt sind, ist individuell mitunter sehr unterschiedlich. Die fertige Audiodatei und eventuell auch deine Kapitelmarken liegen im Anschluss in deinem Projektordner. Diese kann du jetzt weiterverarbeiten und veröffentlichen. Glückwunsch, du hast erfolgreich deine erste Podcast-Episode aufgenommen, geschnitten und exportiert!

[Erfahre mehr...](Export.md)
