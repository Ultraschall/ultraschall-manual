---
id: x
title: Aufnahme
tags:
  - x
  - x
---

[zurück zum Inhaltsverzeichnis...](https://pad.gwdg.de/t3uoZPBsTyigArO0yHq8jw#)

<!-- @todo: Blder auf  Git main umziehen -->
<!-- @todo: Links auf  Git main umziehen -->
<!-- @todo: Bildunterschrifen hinzufügen-->
<!-- @todo: Die Nummern die im Kapitel "Übersicht über die Bedienelemente und Bereiched" verwedet werden sollten sich duch alle Dokumente ziehen -->
<!-- @todo: Screenshotgröße anpassen -->
<!-- @todo: Bildunterschrifen hinzufügen/ verbessern-->

# Aufnahme
<!-- @todo: entscheiden was damit passiert. https://www.youtube.com/watch?v=p5kYH-YheN0 -->

## Einleitung
<!-- @todo:  kurze Kapitelzusammenfassung schreiben. -->

## Neues Projekt anlegen
REAPER öffnet beim Starten immer das zuletzt bearbeitete Projekt. Findet REAPER kein letztes Projekt, öffnet REAPER ein neues leeres Projekt.  Dieses Projekt kannst du über das Menü `File -> save project` oder mit `STRG+S` speichern. Nimmst du etwas auf, bevor du das Projekt gespeichert hast, werden die Audiodateien im Ordner 'Dokumente/REAPER Media' gespeichert. Ein neues Projekt kannst du über `File -> New Project` oder  `CONTROL+N` anlegen.

:::info
**Tipp:** Du solltest immer vor der Aufnahme dein Projekt abspeichern, das erspart dir hinterher Datenchaos. Der [Soundcheck](https://pad.gwdg.de/AfIRFYAlQ5mM1PvSHIZCvg?both#Soundcheck) hilft dir dabei, das nicht zu vergessen.
:::

## Project Templates
Um nicht immer wieder von Neuem dein Aufnahme-Projekt anlegen zu müssen, kannst du dir einmal ein Projekt einrichten und dann über `File -> Project Templates -> save project as template` als Vorlage speichern. Diese Vorlage kannst du vor jeder neuen Aufnahme über `File -> Project templates -> $Name-der-Vorlage` öffnen.

## Spuren anlegen
Um später alle Sprechenden, die Musik und beispielsweise Soundeffekte bequem zu bearbeiten, legst du für jede Audioquelle eine eigene Spur an.

In Ultraschall gibt es im Wesentlichen drei Arten von Spuren:
* **Track** – zum Beispiel für einen lokalen Sprecher
* **StudioLink Track** – etwa für einen Interview-Gast, den du übers Internet per StudioLink zuschaltest (siehe auch unten "Aufnehmen mit StudioLink")
* **Ultraschall-Soundboard Track** – für Einspieler, die du während der Aufnahme über das Soundboard abspielst (siehe auch unten "Das Soundboard verwenden")

Reguläre Tracks, denen du im nächsten Schritt einzelne Sprechende beziehungsweise Spuren deines Multi-Track-Recorders (wie beispielsweise Zoom H6) zuordnest, legst du entweder mit einem Doppelklick in den Spuren-Bereich an (siehe Screenshot) per Tastatur-Befehl `COMMAND+T` (Mac) beziehungsweise `CONTROL+T` (Windows/Mac) oder mit einem Rechtsklick in den Spur-Bereich und dann ein Klick auf "Insert new track".

![insert-new-track](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/insert-new-track.jpg)

Mit einem Klick in den noch leeren, aber bereits eingefärbten Bereich vergibst du am besten direkt einen Namen für deine Spur – so verlierst du auch in größeren Projekten nicht den Überblick.

![track-renaming](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/track-renaming.png =650x)

Seit Version 5 von Ultraschall werden Spuren nicht nur automatisch in ihrer Höhe an die Fenstergröße angepasst, sondern zur Übersicht auch automatisch eingefärbt. Klickst du mit der rechten Maustaste auf den Track (oder per Tastenkürzel `ALT+C` bei ausgewählter Spur) kannst du im Color Picker die Farbe auch nachträglich ändern.

So sieht das in einem Projekt mit zwei Sprechenden, einer Studio-Link-Spur und einem Soundboard aus:
![example-project](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/project-with-4-tracks.png =650x)

**Das Ganze nochmal als Video-Erklärung:**
<iframe width="560" height="315" src="https://www.youtube.com/embed/p5kYH-YheN0?start=846" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Eingänge wählen

### Audio Device auswählen
Das Audio Device (Gerät), mit dem die Aufnahme erfolgen soll, wird über das Menü "Preferences" `CONTROL+","` ausgewählt. Dort findet sich unter "Audio" der Unterpunkt "Device". Die Auswahl erfolgt im Feld "Audio Device". In diesem Beispiel ist es ein Zoom H6.

![Audio-Device-auswählen](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/Audiodevice_auswaehlen.jpg =650x)

Ein Audio Device kann mehrere Eingänge haben die unterschiedlichen Spuren zugeordnet werden können. Beispielsweise hat das Zoom H6 ohne Erweiterung vier Eingänge. Du kannst also mit vier Mikrofonen gleichzeitig aufnehmen. Die Zählweise der Eingänge ist gerätespezifisch.

### Spuren auswählen und zuordnen
Wenn du für alle Sprechenden, alle über StudioLink Zugeschalteten und für die Soundeffekte (im Soundboard) jeweils eigene Spuren angelegt hast, ist der nächste Schritt die Zuordnung von Spuren zu den Aufnahmekanälen – also zu den verschiedenen Mikrofonen, die an deinem Aufnahmegerät hängen. <!--@TODO: Der Satz ist ein bisschen lang - kürzen? -->

Alle Spuren, die du im Hauptfenster von Ultraschall angelegt hast, findest du im Mixer-Bereich wieder. Die Zuordnung erfolgt über die Track-Namen, die angezeigten Track-Nummern oder die Sortierung (im Spurenbereich von oben nach unten, was im Mixer-Bereich von links nach rechts entspricht):
<!-- @TODO: Noch näher auf den Mixerbereich eingehen?-->

![tracks](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/tracks.png =450x)
**Screenshot:** Spuren

Ultraschall versucht, alle Tracks und Aufnahme-Kanäle automatisch zuzuordnen. Sobald du aber feststellst, dass die Stimmen nicht korrekt auf den in Schritt "Spuren anlegen" benannten Tracks landen, kannst du im Mixer über die entsprechenden "Input"-Dropdown-Menüs die Zuordnungen manuell vornehmen oder korrigieren. Am besten gewöhnst du dir an, vor der Aufnahme alle lokalen Mikrofon-Tracks einmal kurz zu kontrollieren – **die StudioLink- und die Soundboard-Spuren werden immer automatisch korrekt zugeordnet**, sie brauchen keinen physikalischen Eingang und bleiben auf "Input: None" stehen.

![track-assignment](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/track-assignment.png =450x)
**Screenshot:** Eingänge zuweisen

**Das Ganze nochmal als Video-Erklärung:**
<iframe width="560" height="315" src="https://www.youtube.com/embed/p5kYH-YheN0?start=911" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/vdLpynu1ixE?start=4970" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Routing
Das Routing dient dazu, dass die jeweiligen Teilnehmer:innen sich gegenseitig hören und auch ein Soundboard von allen gehört werden kann (auch über eine Internetverbindung mittels StudioLink!).

### Magic Routing
Mit der Version 5 haben wir das Magic Routing eingeführt. Dadurch wird dir das Routing komplett abgenommen. Ultraschall erkennt automatisch, ob du gerade schneidest oder aufnimmst, und schaltet dementsprechend das Routing um. Links am Rand des Bildschirms findest du die folgenden Routing-Einstellungen:

![Magic Routing](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/magic-routing.png)

* **MagicRouting (ein/aus):** Wenn eingeschaltet, kümmert sich Ultraschall automatisch um das richtig Routing. Du musst dabei nichts mehr machen.
* **Preshow Routing:** Wenn du über StudioLink-on-Air deinen Podcast live streamst, kannst du hiermit einstellen, dass im Stream zwar schon dein Soundboard zu hören ist, aber noch keine Sprecherinnen oder Sprecher. <!-- @todo: richtig so? -->
* **Aufnahme Routing:** Zum eigentlichen Aufnehmen deines Podcasts.
* **Schnitt Routing:** Zum Schneiden der Aufnahme (siehe "Prepare all tracks for editing" (XX)).
* **StudioLink-on-Air (ein/aus):** Passt das Routing für deinen "StudioLink-on-Air"-Stream (XX) an.

<!-- @todo: entscheiden was mit den Links passiert
https://youtu.be/ND4AG43wSPQ (US 4 irgendwo)
https://www.youtube.com/watch?v=vdLpynu1ixE&t=91m
https://www.youtube.com/watch?v=vdLpynu1ixE&t=5437s
-->

#### Manuelles Routing
Wenn du lieber manuell das Routing einstellen willst, kannst du das über die Einstellungen unter Menü "View -> Routing Matrix" oder mit `OPTION+R` machen.

In der Routing Matrix wird grafisch angezeigt, welche Personen sich gegenseitig hören. Dies lässt sich auch manuell verändern, ist aber seit der Einführung von Magic Routing nur noch selten notwendig (und wird nicht empfohlen).

**Video:** *Ab Minute 49 wird in dem Video unten erklärt, wie das Routing in älteren Versionen angepasst wurde.*

<iframe width="560" height="315" src="https://www.youtube.com/embed/p5kYH-YheN0?start=2917" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Soundcheck
Der Soundcheck hilft dir dabei, die häufigsten Fehler beim Podcasten zu vermeiden. Der Soundcheck öffnet sich mit einer Warnung, wenn Ultraschall einen potenziellen Fehler erkannt hat. Die einzelnen Soundchecks können in den Einstellungen ein- und ausgeschaltet werden. Der Soundcheck prüft dabei die folgenden Sachen:

* **Ungesichertes Projekt (Unsaved Project):** Warnt dich, wenn du etwas aufnehmen möchtest, aber das Projekt noch nicht gespeichert hast. Das beugt Datenchaos vor.
* **Spuren für Bearbeitung vorbereiten (Prepare all tracks for editing):** Warnt dich, wenn du nach der Aufnahme mit dem Bearbeiten beginnen möchtest, aber die Spuren noch nicht dafür vorbereitet sind. <!-- genauer erklären -->
* **Prüfe 48 KHz Abtastrate (Check for 48 KHz sample rate):** Wenn du StudioLink bzw. StudioLink-on-Air verwenden möchtest, musst du als Abtastrate 48 KHz verwenden. (mehr zu dem Thema in Kapitel XX)
* **Internes Mikrofon verwendet (Check if internal mic is selected):** Prüft, ob du aus Versehen statt deines guten Mikrofons das interne Mikrofon deines Laptops zum Aufnehmen verwendest.
* **Nur am Ende aufnehmen (Start recording only at the end):** Verhindert, dass du ungewollt in der Mitte deines Projektes aufnimmst.
* **Unbekanntes Soundinterface (Unknown sound interface):** Prüft, ob du ein neues Soundinterface angeschlossen hast, für das du noch keine Einstellung zum Direkt-Monitoring getroffen hast.
*  **Echo- und Verzerrungsvorsorge (Echo and distortion prevention):** Wenn dein Interface kein Direkt-Monitoring hat, solltest du die richtige Blockgröße wählen.<!-- @TODO: richtiger name? --> Eine Blockgröße von 128 Samples führt zu Latenz und Echos, eine Blockgröße von 32 Samples zu Instabilität. Wir empfehlen eine Blockgröße von 512 Samples für Direkt-Monitoring und 64 Samples ohne Direkt-Monitoring.
* **Eingangs-Zauber (Input Wizard):** Prüft, ob du einen Eingang mehrmals benutzt hast, oder ob du einen austauschbaren Eingang an einem Zoom benutzt.

![soundcheck](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/soundcheck.png)
**Screenshot:** *Soundcheck-Beispiel für ein ungesichertes Projekt*

Du kannst die Warnmeldungen links mit dem Button entweder auf `ignorieren` schalten, oder mit dem Button rechts das Problem beheben. In der Mitte wird dir in einem Textfeld das Problem immer noch einmal genauer erklärt. Wenn du das Soundcheck-Fenster schließt, ohne dass du die Probleme behoben hast, werden automatisch alle Warnungen auf `ignorieren` geschaltet. Zum Schließen kannst Du auch `esc` drücken.

Im Dashboard siehst du jederzeit den Status des Soundchecks. Ein Klick auf die Soundcheck-Leiste im Dashboard öffnet die Soundcheck-Übersicht.

![](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/Dashboard.png)
**Screenshot:** *Dashboard mit einer Warnung in der Soundcheck-Leiste*

<!-- @todo: was passiert mit den Videos?
https://www.youtube.com/watch?v=vdLpynu1ixE&t=4771s (US 5)
https://www.youtube.com/watch?v=ND4AG43wSPQ&t=433s (US 4)
-->

## Aufnehmen mit Studiolink
[StudioLink](https://studio-link.de) ist eine eigenständige Software, die dir die Möglichkeit bietet dich remote zu einer  Ultraschall-Aufnahme zuzuschalten oder andere Personen zuzuschalten.
StudioLink gibt es in zwei Fassungen. Einmal die *Standalone-Version* (für deine Gäste) und einmal als *Plugin* (für dich zum Aufnehmen in Ultraschall). Das StudioLink-Plugin wird direkt mit Ultraschall ausgeliefert. <!--@TODO: ausgeliefert? Wie ist das mit Updates? --> Eine ausführliche Dokumentation findest du hier: [StudioLink-Doku](https://doku.studio-link.de/)

Eine StudioLink-Spur lässt sich über das Menü `Podcast -> Insert StudioLink and Soundboard Tracks -> Insert StudioLink track` einfügen.

<!-- @TODO: Es gibt bestimmt noch eine Tastenkombi(?)-->

![isert-new-studiolink-track](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/studiolink_insert_track.png)
**Screenshot:** *Einfügen einer StudioLink-Spur über das Menü*
___
![Achtung](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/Aufnahme/assets/images/allgemein/Achtung.png =20x20) **Achtung**: Die StudioLink-Spuren erscheinen in Ultraschall als normale Spuren. Es öffnet sich aber ein Browserfenster im Standardbrowser, in dem die eigentliche Verbindung aufgebaut wird. Wenn du Windows verwendest, darfst du das Terminalfenster nicht schließen, sonst kannst du keine Verbindung aufbauen.
<!-- @TODO: Mit Sebastian abklären wie die Anleitung von StudioLink aktuell gehalten werden soll. ! -->
___

### Studiolinkfenster
In folgenden Bild ist eine StudioLink-Track in Ultraschall dargestellt.

![StudioLink Track](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/studiolink_track.jpg =650x) **Screenshot:** Studio-Link Spur

Das Browserfenster öffnet sich seperat. (Bitte folge hierfür der Anleitung auf [StudioLink](https://studio-link.de)!)

![Studio-Link](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/studiolink_browser.jpg) **Screenshot:** *Studio-Link im Browser*

Das Terminalfenster bei Winwows darf nicht geschlossen werden.

<!-- @todo: Link stimmt nicht-->
![Windows Terminal Fenster](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/aufnahme/studiolink_konsole.png =750x) **Screenshot:** *Das Terminalfenster nicht schließen*

## Das Soundboard verwenden
### Soundboard-Spur einfügen
Ultraschall kommt mit einem eigenen Soundboard, über das du während der Aufnahme Musik und Klangeffekte einspielen kannst, z. B. dein Intro, Trenner oder andere Audioschnipsel. Eine Soundboard-Spur fügst du über das Menü "Podcast -> Insert StudioLink and Soundboard tracks -> Insert Ultraschall-Soundboard track" ein. Alternativ kannst du auch mit der rechten Maustaste in den Spurenbereich klicken und dort die entsprechende Option auswählen.
<!-- @TODO: einheitliche Begriffe für Programm-Bereiche und Funktionen? -->

#### Möglichkeit 1: über das Podcast-Menü
![soundboard-track](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/insert-soundboard-track.png) **Screenshot:** *Soundboard hinzufügen*

#### Möglichkeit 2: per Rechtsklick in den Spurenbereich
![alternative-soundboard-track](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/add-soundboard-2.png)
**Screenshot:** *Soundboard hinzufügen*
___
![Achtung](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Allgemein/Achtung.png =20x20) **Achtung**: Wir empfehlen, pro Projekt nur eine Soundboard-Spur anzulegen. Sounds für ein Projekt sollten also vor der Aufnahme aus unterschiedlichen Verzeichnissen in einem Soundboard zusammengestellt werden.

___

### Bedienung
Um dem Soundboard beizubringen, wo die entsprechenden Sound-Dateien liegen, wählst du die entsprechende Spur und wechselst mittels Klick auf den zugehörigen FX-Button in die Ansicht für die Plugin-Liste. Dort stellst du sicher, dass das Soundboard-Plugin aktiviert ist (Haken ist gesetzt). Über das Ordner-Symbol oben links im Plugin-Bereich legst du das Verzeichnis fest, in dem du die Sound-Dateien fürs Soundboard abgespeichert hast.

![soundboard-activation](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/aufnahme/soundboard-activation_new.png) **Screenshot**: *Soundboard Aktivierung*

So sieht ein mit diversen Clips belegtes Soundboard aus.
:::info
**Tipp**: Die Dateien werden hier immer alphabetisch sortiert angezeigt. Willst du lieber eine Sortierung in der Reihenfolge, wie du sie vielleicht auch in deiner Aufnahme verwendest, stellst du am besten dem Dateinamen eine Zahl voran.
:::

![soundboard-filled](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/aufnahme/soundboard-filled.png) **Screenshot**: *Das Soundboard*

#### Die Soundboard-Bedienelemente im Einzelnen:
1. **Dateiname des Audioclips** (ohne die Dateiendung)
2. **Loop-Funktion**: Wenn aktiviert, spielt der Clip nach dem Drücken des Wiedergabe-Buttons \[4\] in einer Endlosschleife
3. **Restzeitanzeige**: Zeigt an, wie lange der Clip noch spielt – vor der Wiedergabe zeigt sie also die Gesamtlaufzeit des Clips
4. **Wiedergabe-Button**: Startet die Wiedergabe des Einspielers
5. **Stopp-Button**: Bricht die Wiedergabe des Einspielers ab
6. **Softer Fade-in**: Startet wie auch \[4\] die Wiedergabe – beginnt stumm, die Lautstärke nimmt über circa fünf Sekunden hinweg zu; der restliche Clip wird in der eingestellten Lautstärke wiedergegeben
7. **Lautstärke**: Individuelle Lautstärkeeinstellung für den jeweiligen Clip

#### Und auch das Soundboard nochmal als Video:
<iframe width="560" height="315" src="https://www.youtube.com/embed/vdLpynu1ixE?start=3008" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
