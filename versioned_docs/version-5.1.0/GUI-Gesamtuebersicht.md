---
id: GUI-overview
title: Übersicht über die Bedienelemente und Bereiche
lektorat:
    - Lektorat: 27.3.2022 @MirUnauffaellig
    - Schlusskorrektur: 6.7.2022 @MirUnauffaellig
tags:
    - übersicht
    - erste schritte
    - gui
---

<!-- @todo: Links auf  Git main umziehen -->
<!-- @todo: Links auf die entsprechenden Kapitel hinzufügen Git main umziehen -->

![Übersicht der Bedienelemente](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/GUI-Gesamtuebersicht/Uebersichta.png) **Übersicht**: *Bedienelemente und Bereiche | [Copyright © Leonid Lezner CC-BY 2.0](https://raw.githubusercontent.com/leonidlezner/ultraschall-tutorial/main/docs/downloads/Quick-Info-Ultraschall.pdf)*


## Funktionen der Bedienelemente

### Buttons: Schnitt

(Eine ausführliche Beschreibung der Funktionen findest du im [Kapitel Schnitt](./Schnitt.md).)

1. hält die Elemente in einer Spur zusammen, wenn ein Element verschoben wird
2. hält die Elemente über alle Spuren zusammen, wenn ein Element verschoben wird
3. setzt eine unbenannte Kapitelmarke an der Cursorposition – alternativ: Taste <kbd>M</kbd> beziehungsweise <kbd>Shift</kbd>+<kbd>M</kbd>, um eine benannte Kapitelmarke hinzuzufügen
4. setzt eine Editier-Marke an der aktuellen Cursorposition – alternativ: Taste <kbd>E</kbd>
5. trennt die ausgewählte Spur an der aktuellen Cursor-Position – alternativ: Taste <kbd>S</kbd>
6. schaltet zwischen Auswahl (Button aktiv) und Verschiebewerkzeug (Button deaktiviert) um
7. schneidet die Auswahl über alle Spuren hinweg aus und schließt die Lücke – alternativ: Tasten <kbd>Strg</kbd>+<kbd>X</kbd> (Win) beziehungsweise <kbd>Cmd</kbd>+<kbd>X</kbd> (Mac)
8. zeigt (Button aktiv) oder versteckt (Button deaktiviert) die Mute-Envelopes

### Buttons: Zoom

9. zoomt vollständig heraus, um das ganze Projekt zu zeigen
10. führt horizontale Scroll-Position der Timeline automatisch nach (wenn aktiv) – orientiert sich an der Zeitposition beim Abspielen oder Aufnehmen

### Buttons: Views

11. aktiviert Ansicht "Aufnahme" – Fokus auf die Steuerelemente, die für eine Aufnahme wichtig sind
12. aktiviert Ansicht "Schnitt" – Fokus auf die Steuerelemente, die für den Schnitt wichtig sind
13. aktiviert Ansicht "Storyboard" – Fokus auf die Steuerelemente, die für "gebaute" Beiträge wichtig sind

### Buttons: Routing

14. aktiviert oder deaktiviert das automatische Routing zwischen den Ein-/Ausgängen und Spuren (wenn deaktiviert, werden die Buttons 15-17 ignoriert)
15. setzt Routing auf "Pre-Show" – sinnvoll für Live-Streaming (lokale Signale werden nicht über den Stream übertragen)
16. setzt Routing auf "Aufnahme" – alle Spuren landen im Master-Track
17. setzt Routing auf "Schnitt"
18. startet Live-Stream über Studio-Link

### Buttons: Export

19.  blendet die Übersicht über die Kapitelmarken ein
20.  blendet den Dialog für Audio-Rendering ein
21.  blendet den Podcast-Exportassistenten ein
22.  öffnet den Projektordner

### Bereich: Arbeitsfläche

23. **Spuren-Bereich**: zeigt die verschiedenen Spuren des Projektes an
24. **Mixer-Bereich**: zeigt für jede Spur einen eigenen Regler (über den Regler gelangst du schnell auch zu den Filtern für den jeweiligen Track) – zusätzlich findet sich hier auch der Master-Regler, der den Mix-Pegel steuert
25. **Timeline-Bereich**: das Kernstück des Projekts; hier siehst du die Wellenformen deiner Spuren, aber auch Schnitte, Marken, Envelope-Bearbeitungen und einiges mehr
26. **Filter-Bereich**: taucht auf, sobald du den FX-Knopf einer Spur drückst
27. **Routing-Matrix**: verbindet die Eingänge und Ausgänge mit einzelnen Spuren und legt damit exakt fest, was von welchem Teilnehmenden oder auf welchem Stream gehört wird 
28. **Kapitelmarken-Bereich**: zeigt die mit den Buttons 3) und 4) gesetzten Kapitelmarken als Liste an und ermöglicht die übersichtliche Verwaltung und Bearbeitung

### Buttons: Wiedergabe

29. **Zurück-Button**: springt zum Anfang des Projekts
30. **Stopp-Button**: hält die Aufnahme oder Wiedergabe an und setzt den Abspiel-Cursor zurück zum Edit-Cursor
31. **Wiedergabe-Button**: spielt ab – solange der Button aktiv ist, kannst du die Ausgabeschnittstelle nicht verändern <!-- @todo. Was ist mit "Ausgabeschnittstelle gemeint? -->
32. **Pause-Button**: hält die Aufnahme oder Wiedergabe (vorrübergehend) an, lässt den Abspiel-Cursor aber an der aktuellen Abspielposition, sodass direkt von dieser Stelle fortgesetzt werden kann
33. **Vorwärts-Button**: springt zum Ende des Projekts
34. **Loop-Button**: spielt den ausgewählten Bereich der Timeline in einer Endlos-Schleife ab
35. **Aufnahme-Button**: startet die Aufnahme
36. **Timecode-Anzeige**: spiegelt die aktuelle Abspielposition wieder – per Doppelklick auf die Anzeige stellst du exakt die Zeit ein, an die du den Wiedergabe-Cursor setzen möchtest
37. **Regler für die Abspielgeschwindigkeit**: stellt die Geschwindigkeit für die Wiedergabe ein – voreingestellt ist `1`-fache Geschwindigkeit, stellst du hier beispielsweise `1,5` ein, läuft dein Audio 50 Prozent schneller

:::danger Achtung!
Nach Beendigung des Schnitts solltest du hier zurück auf 1-fache Geschwindigkeit stellen, damit dein Audio mit der korrekten Geschwindigkeit exportiert wird. <!-- @todo: verifizieren, ob das in der aktuellen Version auch noch so ist. -->
:::

### Detailansicht: Spuren

1.   Eine Spur kann entweder Audiodaten enthalten oder auch Metainformationen (zum Beispiel die Lautstärke). Jede Spur hat einen Namen. Mit der Schaltfläche `M` ("Mute") stellst du die Spur stumm – und mit der Schaltfläche `S` ("Solo") stellst du alle anderen Spuren stumm, sodass nur die ausgewählte Spur zu hören ist. Seit Version 5 von Ultraschall wird jeder Spur automatisch eine eigene Farbe zugeordnet.
2.   Direkt über den Wellenformen in der Timeline-Ansicht findest du die Kapitelmarken an ihren jeweiligen Abspielpositionen. Mit der Maus verschiebst du die Kapitelmarken komfortabel an die gewünschte Position, ein Rechtsklick und `Edit marker...` lässt dich den Namen und die Farbe bearbeiten, `Remove marker...` entfernt die jeweilige Marke. (Trifft auch auf Editiermarken zu.)
3.   Hier siehst du die Wellenformen der einzelnen Spuren.
4.   Um während eine Aufnahme tatsächlich ein Audiosignal in einer Spur zu speichern, muss diese für die Aufnahme aktiviert oder "scharf" sein. Ob die Spur für die Aufnahme aktiviert ist, erkennst du am kleinen roten Aufnahme-Indikator (rund, weißer Kreis auf rotem Hintergrund; leuchtet, wenn aktiv) neben der Spurbezeichnung. Hast du die Aufnahme beendet, solltest du alle Spuren wieder deaktivieren, damit du deine Aufnahme nicht unabsichtlich überschreibst und beim Schneiden keine Signale über die angeschlossenen Mikrofone zu hören sind. Der einfachste Weg ist, dafür im `Podcast`-Menü den Punkt `Prepare all tracks for editing` auszuwählen, der alle Spuren für die Aufnahme deaktiviert, zudem aber noch weitere sinnvolle Einstellungen vornimmt (etwa das Routing umstellt oder Live-Streams beendet).

:::info Info
Viele der hier aufgelisteten Punkte werden im Rahmen dieser Dokumentation in den jeweiligen Kapiteln nochmals genauer erläutert.
:::
