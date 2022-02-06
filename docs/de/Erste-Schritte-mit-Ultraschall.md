---
id: x
title: Erste Schritte mit Ultraschall
tags:
  - x
  - x
---

[zurück zum Inhaltsverzeichnis...](https://pad.gwdg.de/t3uoZPBsTyigArO0yHq8jw#)

<!-- @todo: Blder auf  Git main umziehen -->
<!-- @todo: Links auf  Git main umziehen -->
<!-- @todo: Bildunterschrifen hinzufügen-->

# Erste Schritte mit Ultraschall

## Übersicht
Jetzt kann es mit dem Podcasten richtig losgehen.
In der Ultraschall-Philosophie gliedert sich Podcasting in drei Phasen:
1. **Vorbereitung (Setup)**: Dazu gehört das Einrichten des Ultraschall-Projekts, die Konfiguration der Aduio-Geräte und das Setup der Spuren.
2. **Aufzeichnung (Recording)**: Das umfasst die Aufnahme an sich, aber auch Dinge wie das Soundboard, Kapitelmarken, die Einbindung von <!-- es gibt doch keinen weblichen Gast? Gästinnen und --> Gästen via Studio-Link oder das Live-Streaming der Sendung ins Internet.
3. **Nachbereitung (Production)**: Zur Nachbereitung gehören unter anderem der Schnitt, die Audio-Produktion (Mischen, Normalisieren, Klang aufbereiten und so weiter), das Anreichern mit Meta-Daten und der Export.

Diese Gliederung findest du so auch im `Podcast`-Menü von Ultraschall und an einigen weiteren Stellen innerhalb der Software. Um die Software und ihre Möglichkeiten etwas besser kennenzulernen, ist es ohnehin eine ganz gute Idee, die (chrono-)logisch aufgebauten Menüpunkte der Reihe nach durchzugehen.

![Podcast-Menü](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Erste-Schritte-mit-Ultraschall/podcast-menu.png =400x)

## 1. Vorbereitung
### Spuren anlegen
Nachdem du Ultraschall gestartet hast, kannst du nun die benötigten Spuren anlegen. Lege für jede/n Sprecher/in eine eigene Spur(Track) an. Spuren kannst du entweder mit einem Doppelklick in den Spurenbereicht oder mit einem Rechtsklick und `Insert new track` erstellen.
[Erfahre mehr...](https://pad.gwdg.de/AfIRFYAlQ5mM1PvSHIZCvg#Spuren-anlegen)

### Geräte auswählen
Wähle dein Aufnahmegerät im Menü unter `Preferences -> Device` unter `Audio Devices`. Mit einem Linksklick auf jede Spur und dann `Input: Mono` kannst du für jede Spur die Quelle auswählen.
[Erfahre mehr...](https://pad.gwdg.de/AfIRFYAlQ5mM1PvSHIZCvg#Eing%C3%A4nge-w%C3%A4hlen)

## 2. Aufzeichnung
Sofern du alles korrekt eingerichtet hast, ist die Aufnahme selbst keine große Sache mehr. Trotzdem gibt es ein paar Dinge, die du nach dem Druck von `Record` noch beachten kannst und solltest, damit es später für dich keine bösen Überraschungen oder vermeidbare Mehrarbeit gibt. Der erste und wichtigste Tipp: Wirf ab und an einen Blick in deine Aufnahmesoftware (am besten deaktivierst du für die Aufnahme den Bildschirmschoner). Dann siehst du direkt etwaige Fehler- oder Hinweismeldungen – zum Beispiel warnt dich Ultraschall, wenn du die Spuren nicht aktiviert oder das Projekt noch nicht gespeichert hast –, und du bekommst auch mit, wenn mit den Spureinstellungen etwas nicht passt oder eine Person übersteuert.

Die Einbindung von weiteren Sprechenden über das Internet ist im Kapitel [XXXX]() näher erklärt. Wie du ein Soundboard verwendest, um während der Sendung Soundeffekte, Musik und andere Einspieler zu integrieren, erklären wir dir [hier](). Es ist außerdem sinnvoll, während der Aufnahme die [Pegel im Auge zu behalten]() sowie bei Bedarf direkt [Kapitel- und Editiermarken]() zu setzen.
[Erfahre mehr...](t)

## 3. Nachbereitung
In vielen Fällen besteht die Podcastproduktion lediglich aus Schnitt, Audioproduktion und Export. Das heißt aber nicht, dass mit Ultraschall nicht auch komplexere Szenarien wie zum Beispiel aufwändige Hörspielproduktionen möglich wären – die Details hierzu findest du in den entsprechenden späteren Kapiteln.

___
![Achtung](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/Aufnahme/assets/images/allgemein/Achtung.png =20x20) **Achtung**: Nach Ende deiner Aufnahme und vor dem Schnitt solltest unbedingt aus dem `Podcast`-Menü `Prepare all tracks for editing` aufrufen. Danach sind Spuren und Studio-Link-Verbindungen deaktiviert, das Routing angepasst – und die Oberfläche insgesamt so angepasst, dass du kaum Fehlerrisiko, dafür aber maximalen Bedienkomfort hast.

---
[Erfahre mehr...]()
### Schnitt
Eines vorweg: Schnitt ist in Ultraschall nicht-destruktiv und jederzeit reversibel – hab also keine Angst, dass du an irgendeiner Stelle mal zu viel entfernst.

Um Inhalte über alle Spuren hinweg zu entfernen (zum Beispiel am Anfang und Ende der Aufnahme), selektierst du a) indem du mit gedrückter Maustaste ziehst und auswählst oder b) indem mit `I`- beziehungsweise `O`-Taste einen In- und einen Out-Point für die aktuelle Auswahl setzt. Den selektierten Bereich entfernst du mit dem tastenkürzel `COMMAND`+`X` (Mac) oder `CONTROL`+`X` (Windows, Linux) oder per Klick auf den Schnitt-Button.

![Schnitt](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-ripple-cut.png)

Standardmäßig "rutschen" alle Inhalte, die rechts von deiner Schnittstelle folgen, automatisch an die Inhalte davor ran, sodass ein nahtloser Übergang entsteht.
[Erfahre mehr...](https://pad.gwdg.de/NuE2l9jCSF-3wnP_ekP-Bw#Schnit)


### Produktion
Jede Produktion ist einzigartig und unterscheidet sich je nach Mikrofon, Aufnahmebedingungen, Sonderwünschen an Effekten und Musik, Sprechdisziplin, und, und, und.

Willst du, dass alle Sprechenden gleichlaut klingen, die Gesamtlautstärke auf einem vernünftigen Niveau ist und Störgeräusche minimiert oder gar automatisch entfernt werden, sieh dir unbedingt die in Version 5 von Ultraschall neu hinzugekommene [AMP, die *Automated Mixing Pipeline*]() an. Die vereint einige sinnvolle Audio-Plugins und Einstellungen, um für einen Großteil der Podcast-Produktionen ein vernünftiges Ergebnis zu produzieren, ohne dass du dafür eine Ausbildung zum Sound Engineer durchlaufen musst.
[Erfahre mehr...](https://pad.gwdg.de/KqKfJ7WQSHaBFTvKqFetcg#Post-Produktion)

### Export
Der Exportassistent vereinfacht das Exportieren deines Projekts indem er dich durch die notwendigen Schritte führt. Er ist aus dem Menü über `Podcast`,, `Export` und `Start Export Assistent` zu erreichen. Einfacher ist die Auswahl über den `Export Assistent Button`

![Export Assistent](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/Export_Assistent_Button.jpg)

Der Exportassistent führt durch die einzelnen Schritte die für den Export wichtig sind.
Diese bestehen aus:
* Export des MP3 (di eigentliche Audiodatei)
* Chapter Markers (Kapitelmarken)
* ID3 Metadata (Hier handelt es sich um die Metadaten der Audiodatei: Episoden Titel, Author, Podcastname, Year, Podcast Category, Discription )
* Podcast Episode Image (Podcast Bildt Bild)
* Finalize MP3 (Fertigsstellung des Exports )


![Export Assistent Gruen](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/Export_Assistent_alles_gruen.jpg)

Wenn die einzelen Schritte durchlaufen werden ändert die Farbe von gelb oder rot auf grün (OK). Ziel ist es, dass alle Schritte OK sind (grün). Die fertige Audiodatei und evtl. deine Kapitelmarken liegen jetzt in deinem Projektordner. Diese kann du jetzt weiterverarbeiten und veröffentlichen. Damit hast du erfolgreich deinen ersten Podcast aufgenommen, geschnitten und exportiert.
[Erfahre mehr...](https://pad.gwdg.de/S8CYlinKR0iKuDRUplXFXQ#Export)
