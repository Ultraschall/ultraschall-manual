---
id: GUI-overview
title: Übersicht über die Bedienelemente und Bereiche
---

<!-- @todo: Links auf Git main umziehen --> <!-- @todo: Bildunterschrifen hinzufügen --> <!-- @todo: Die Nummern die im Kapitel "Übersicht über die Bedienelemente und Bereiche" verwedet werden sollten sich duch alle Dokumente ziehen -->

![Übersicht der Bedienelemente](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/GUI-Gesamtuebersicht/Uebersichta.png) **Übersicht**: Bedienelemente und Bereiche | [Copyright © Leonid Lezner CC-BY 2.0](https://raw.githubusercontent.com/leonidlezner/ultraschall-tutorial/main/docs/downloads/Quick-Info-Ultraschall.pdf)

# Funktionen der Bedienelemente:

## Buttons: Schnitt

(Eine ausführliche Beschreibung der Funktionen findest du im [Kapitel Schnitt](./Schnitt.md).)

1. Hält die Elemente in einer Spur zusammen, wenn ein Element verschoben wird.
2. Hält die Elemente über alle Spuren zusammen, wenn ein Element verschoben wird.
3. Setzt eine unbenannte Kapitelmarke an der Cursorposition. Alternativ die Taste

  <kbd>M</kbd>

   oder

  <kbd>shift</kbd>

  +

  <kbd>M</kbd>

   für sofortige Eingabe des Namens.
4. Setzt eine Editier-Marke an der Cursorposition. Alternativ die Taste

  <kbd>E</kbd>

  .
5. Trennt die ausgewählte Spur an der aktuellen Cursor-Position. Alternativ die Taste

  <kbd>S</kbd>

  .
6. Schaltet zwischen Auswahl (Button aktiv) und Verschiebewerkzeug (Button deaktiviert) um.
7. Schneidet die Auswahl heraus und schließt die Lücke. Alternativ die Tasten

  <kbd>Strg</kbd>

  +

  <kbd>X</kbd>

   (Win) oder

  <kbd>Cmd</kbd>

  +

  <kbd>X</kbd>

   (Mac).
8. Zeigt (Button aktiv) oder versteckt (Button deaktiviert) die Mute-Spuren.

## Buttons: Zoom

1. Vollständig herauszoomen und das Projekt zeigen.
2. Horizontale Scrollposition der Timeline automatisch der Zeitposition beim Abspielen oder Aufnahme nachführen (wenn aktiv).

## Buttons: Views

1. Ansicht "Aufnahme". Es werden die Steuerelemente eingeblendet, die für eine Aufnahme wichtig sind.
2. Ansicht "Schnitt". Es werden die Steuerelemente eingeblendet, die für den Schnitt wichtig sind.
3. Ansicht "Storyboard" für gebaute Beiträge.

## Buttons: Routing

1. Automatisches Routing zwischen den Ein-/Ausgängen und Spuren (wenn aktiv). Wenn deaktiviert, werden die Buttons 15-17 ignoriert.
2. Routing auf "Pre-Show" setzen. Sinnvoll für Live Streaming, lokale Signale werden nicht über den Stream übertragen.
3. Routing auf "Aufnahme" setzen. Alle Spuren gehen auf den Master.
4. Routing auf "Schnitt" setzen.
5. Live Streaming über Studio-Link starten.

## Buttons: Export

1. Übersicht der Kapitelmarken einbelenden.
2. Dialog für Audio Rendering einblenden.
3. Podcastexport Assistenten einblenden.
4. Projektordner öffnen.

## Bereich: Arbeitsfläche

1. In diesem Bereich werden die verschiedenen Spuren des Projektes dargestellt.
2. Der Mixer-Bereich stellt für jede Spur einen eigenen Regler dar. Über den Regler kann man auch die Filter aktivieren. Zusätzlich befindet sich in dem Bereich auch der Master-Regler, der den Mixpegel steuert.
3. Das Kernstück des Projekts: Die Timeline mit den einzelnen Spuren.
4. Hier kann der Bereich mit Filter aktiviert werden.
5. Über die Routing Matrix werden die Eingänge und Ausgänge mit einzelnen spuren verbunden.
6. Die mit den Punkten 3) und 4) gesetzten Kapitelmarken erscheinen in diesem Bereich als Liste und können hier bearbeitet oder entfernt werden.

## Buttons: Wiedergabe

1. Zum Anfang des Projektes springen.
2. Anhalten. Die aktuelle Position kehrt zum Cursor zurück.
3. Abspielen. Solange der Button aktiv ist, kann man die Ausgabeschnittstelle nicht verändern.
4. Pausieren. Position bleibt erhalten, beim erneuten Klick auf Abspielen läuft die Zeitposition weiter.
5. Zum Ende des Projektes springen.
6. Die Auswahl in einer Schleife abspielen.
7. Aufnahme starten.
8. Darstellung der aktuellen Abspielposition. Mit einem Doppelklick auf die Anzeige kann man die Zeit einstellen zu der man springen möchte.
9. Die Abspielgeschwindigkeit einstellen. 1-fache Geschwindigkeit ist voreingestellt, kann auf 1.5 umgestellt werden, um 50 % schneller abzuspielen.

## Bereich: Spuren

1. Eine Spur (Track) kannentweder Audiodaten enthalten oder auch Metainformationen (z.B. Lautstärke). Jede Spur hat einen einen Namen. Mit dem Button `M` kann man die Spur lautlos stellen (Mute) oder mit dem Button `S` als einzige (single) Spur abspielen lassen. Seit Ultraschall 5 werden den Spuren automatisch verschiedene Farben zugeordnet.
2. In diesem Bereich werden die Kapitelmarken dargestellt. Man kann sie mit den Buttons 3) oder 4) bzw. mit entsprechenden Tastenkürzeln setzen. Die Kapitelmarken lassen sich einfach mit der Maus an die gewünschte Position verschieben.
3. Die Wellenform einer Aufnahme sieht man für jede einzelne Spur. Die Wellenform lässt sich z.B. mit der Taste 5) schneiden.
4. Um während eine Aufnahme tatsächlich ein Audiosignal in einer Spur zuspeichern, muss diese für die Aufnahme aktiviert sein. Ob die Spur für die Aufnahme aktiviert ist, erkennt man am kleinen roten Indikator neben dem Spurnamen. Ist das Projekt fertig aufgenommen, sollten alle Spuren wieder für die Aufnahme deaktiviert sein, um keine Aufnahme unabsichtlich zu überschreiben. Dies lässt sich schnell mit dem Menüpunkt `Podcast`>`Prepare all tracks for editing erledigen.`

:::info Die meisten der hier aufgelisteten Punkte werden im Rahmen dieser Dokumentation in den jeweiligen Kapiteln nochmals genauer erläuter. :::
