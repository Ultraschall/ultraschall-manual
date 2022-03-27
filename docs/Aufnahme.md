---
id: recording
title: Aufnahme
tags:
  - x
  - x
---

<!-- @todo: Links auf Git main umziehen --> <!-- @todo: Die Nummern die im Kapitel "Übersicht über die Bedienelemente und Bereiched" verwedet werden sollten sich duch alle Dokumente ziehen --> <!-- @todo: Screenshotgröße anpassen --> <!-- @todo: entscheiden was damit passiert. https://www.youtube.com/watch?v=p5kYH-YheN0 -->

 # Einleitung

Jetzt kann die eigentliche Aufnahme beginnen. In diesem Kapitel lernst du wie du Spuren anlegst, deine Audioquellen wählst und dann mit der eigentlichen Aufnahme beginnst.

# Neues Projekt anlegen

REAPER öffnet beim Starten immer das zuletzt bearbeitete Projekt. Findet REAPER kein letztes Projekt, öffnet REAPER ein neues leeres Projekt. Dieses Projekt kannst du über das Menü `File -> save project` oder mit `STRG+S` speichern. Nimmst du etwas auf, bevor du das Projekt gespeichert hast, werden die Audiodateien im Ordner 'Dokumente/REAPER Media' gespeichert. Ein neues Projekt kannst du über `File -> New Project` oder `CONTROL+N` anlegen.

:::info

**Tipp:** Du solltest immer vor der Aufnahme dein Projekt abspeichern, das erspart dir hinterher Datenchaos. Der [Soundcheck](https://pad.gwdg.de/AfIRFYAlQ5mM1PvSHIZCvg?both#Soundcheck) hilft dir dabei, das nicht zu vergessen.

:::

# Project Templates

Um nicht immer wieder von Neuem dein Aufnahme-Projekt anlegen zu müssen, kannst du dir einmal ein Projekt einrichten und dann über `File -> Project Templates -> save project as template` als Vorlage speichern. Diese Vorlage kannst du vor jeder neuen Aufnahme über `File -> Project templates -> $Name-der-Vorlage` öffnen.

# Spuren anlegen

Um später alle Sprechenden, die Musik und beispielsweise Soundeffekte bequem zu bearbeiten, legst du für jede Audioquelle eine eigene Spur im Bereich [Spuren [23]](GUI-overview) an.

In Ultraschall gibt es im Wesentlichen drei Arten von Spuren:

- **Track** – zum Beispiel für einen lokalen Sprecher
- **StudioLink Track** – etwa für einen Interview-Gast, den du übers Internet per StudioLink zuschaltest (siehe auch unten "Aufnehmen mit StudioLink")
- **Ultraschall-Soundboard Track** – für Einspieler, die du während der Aufnahme über das Soundboard abspielst (siehe auch unten "[Das Soundboard verwenden](#das-soundboard-verwenden)")

Reguläre Tracks, denen du im nächsten Schritt einzelne Sprechende beziehungsweise Spuren deines Multi-Track-Recorders (wie beispielsweise Zoom H6) zuordnest, legst du entweder mit einem Doppelklick in den [Spuren-Bereich [23]](GUI-overview)-Bereich an (siehe Screenshot) per Tastatur-Befehl `COMMAND+T` (Mac) beziehungsweise `CONTROL+T` (Windows/Mac) oder mit einem Rechtsklick in den [Spuren-Bereich [23]](GUI-overview) und dann ein Klick auf "Insert new track".

![insert-new-track](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/insert-new-track.jpg) **Neuen Track einfügen:** _Das Einfügen neuer Tracks ermöglicht die Aufnahme der einzelen Tonspruren_

Mit einem Klick in den noch leeren, aber bereits eingefärbten Bereich vergibst du am besten direkt einen Namen für deine Spur – so verlierst du auch in größeren Projekten nicht den Überblick.

![track-renaming](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/i mages/Aufnahme/track-renaming.png?=650x) **Track benennen** _Lege für deine Tracks sinnvolle Namen an, dass erleichtert dir später die Zuordnung_ Seit Version 5 von Ultraschall werden Spuren nicht nur automatisch in ihrer Höhe an die Fenstergröße angepasst, sondern zur Übersicht auch automatisch eingefärbt. Klickst du mit der rechten Maustaste auf den Track (oder per Tastenkürzel `ALT+C` bei ausgewählter Spur) kannst du im Color Picker die Farbe auch nachträglich ändern.

So sieht das in einem Projekt mit zwei Sprechenden, einer Studio-Link-Spur und einem Soundboard aus: ![example-project](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/project-with-4-tracks.png?=650x) **Beispielprojekt** _So sieht ein Projekt mit zwei Sprechenden, einer Studio-Link-Spur und einem Soundboard aus_

**Das Ganze nochmal als Video-Erklärung:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/p5kYH-YheN0?start=846" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
</iframe>

# Eingänge wählen

## Audio Device auswählen

Das Audio Device (Gerät), mit dem die Aufnahme erfolgen soll, wird über das Menü "Preferences" `CONTROL+","` ausgewählt. Dort findet sich unter "Audio" der Unterpunkt "Device". Die Auswahl erfolgt im Feld "Audio Device". In diesem Beispiel ist es ein Zoom H6.

![Audio-Device-auswählen](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/Audiodevice_auswaehlen.jpg?=650x) **Audiogerät wählen:** _In den Einstellungen kannst du dein Audio auswählen_

Ein Audio Device kann mehrere Eingänge haben, die unterschiedlichen Spuren zugeordnet werden können. Beispielsweise hat das Zoom H6 ohne Erweiterung vier Eingänge. Du kannst also mit vier Mikrofonen gleichzeitig aufnehmen. Die Zählweise der Eingänge ist gerätespezifisch.

## Spuren auswählen und zuordnen

Wenn du für alle Sprechenden, alle über StudioLink Zugeschalteten und für die Soundeffekte (im Soundboard) jeweils eigene Spuren angelegt hast, ist der nächste Schritt die Zuordnung von Spuren zu den Aufnahmekanälen – also zu den verschiedenen Mikrofonen, die an deinem Aufnahmegerät hängen. <!-- @TODO: Der Satz ist ein bisschen lang - kürzen? -->

Alle Spuren, die du im Hauptfenster von Ultraschall angelegt hast, findest du im [Mixer-Bereich [24]](GUI-overview) wieder. Die Zuordnung erfolgt über die Track-Namen, die angezeigten Track-Nummern oder die Sortierung (im [Spuren-Bereich [23]](GUI-overview) von oben nach unten, was im [Mixer-Bereich [24]](GUI-overview) von links nach rechts entspricht): <!-- @TODO: Noch näher auf den Mixerbereich eingehen? -->

![tracks](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/tracks.png?=450x) **Spuren und Mixer:** _Jede Spur hat einen Mixer_

Ultraschall versucht, alle Tracks und Aufnahme-Kanäle automatisch zuzuordnen. Sobald du aber feststellst, dass die Stimmen nicht korrekt auf den in Schritt "Spuren anlegen" benannten Tracks landen, kannst du im [Mixer [24]](GUI-overview) über die entsprechenden "Input"-Dropdown-Menüs die Zuordnungen manuell vornehmen oder korrigieren. Am besten gewöhnst du dir an, vor der Aufnahme alle lokalen Mikrofon-Tracks einmal kurz zu kontrollieren – **die StudioLink- und die Soundboard-Spuren werden immer automatisch korrekt zugeordnet**, sie brauchen keinen physikalischen Eingang und bleiben auf "Input: None" stehen.

![track-assignment](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/track-assignment.png?=450x) **Eingänge zuweisen:** _Über das Dropdown-Menü kannst du den Eingang auswählen_

**Das Ganze nochmal als Video-Erklärung:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/p5kYH-YheN0?start=911" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
</iframe>



<iframe width="560" height="315" src="https://www.youtube.com/embed/vdLpynu1ixE?start=4970" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
</iframe>

# Routing

Das Routing dient dazu, dass die jeweiligen Teilnehmer:innen sich gegenseitig hören und auch ein Soundboard von allen gehört werden kann (auch über eine Internetverbindung mittels StudioLink!).

## Magic Routing

Mit der Version 5 haben wir das Magic Routing eingeführt. Dadurch wird dir das Routing komplett abgenommen. Ultraschall erkennt automatisch, ob du gerade schneidest oder aufnimmst, und schaltet dementsprechend das Routing um. Links am Rand des Bildschirms findest du die [Routing-Buttons [14-18]](GUI-overview) für folgenden Routing-Einstellungen:

![Magic Routing](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/magic-routing.png)

- **MagicRouting (ein/aus)** [[14]](GUI-overview): Wenn eingeschaltet, kümmert sich Ultraschall automatisch um das richtig Routing. Du musst dabei nichts mehr machen.
- **Preshow Routing** [[15]](GUI-overview): Wenn du über StudioLink-on-Air deinen Podcast live streamst, kannst du hiermit einstellen, dass im Stream zwar schon dein Soundboard zu hören ist, aber noch keine Sprecherinnen oder Sprecher. <!-- @todo: richtig so? -->
- **Aufnahme Routing** [[16]](GUI-overview): Zum eigentlichen Aufnehmen deines Podcasts.
- **Schnitt Routing** [[17]](GUI-overview): Zum Schneiden der Aufnahme (siehe "Prepare all tracks for editing" (XX)).
- **StudioLink-on-Air (ein/aus)** [[18]](GUI-overview): Passt das Routing für deinen "StudioLink-on-Air"-Stream (XX) an.

<!-- @todo: entscheiden was mit den Links passiert https://youtu.be/ND4AG43wSPQ (US 4 irgendwo) https://www.youtube.com/watch?v=vdLpynu1ixE&t=91m https://www.youtube.com/watch?v=vdLpynu1ixE&t=5437s -->

 ### Manuelles Routing

Wenn du lieber manuell das Routing einstellen willst, kannst du das über die Einstellungen unter Menü "View -> Routing Matrix" oder mit `OPTION+R` machen.

In der [Routing-Matrix [27]](GUI-overview) wird grafisch angezeigt, welche Personen sich gegenseitig hören. Dies lässt sich auch manuell verändern, ist aber seit der Einführung von Magic Routing nur noch selten notwendig (und wird nicht empfohlen).

**Video:** _Ab Minute 49 wird in dem Video unten erklärt, wie das Routing in älteren Versionen angepasst wurde._

<iframe width="560" height="315" src="https://www.youtube.com/embed/p5kYH-YheN0?start=2917" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
</iframe>

# Soundcheck

Der Soundcheck hilft dir dabei, die häufigsten Fehler beim Podcasten zu vermeiden. Der Soundcheck öffnet sich mit einer Warnung, wenn Ultraschall einen potenziellen Fehler erkannt hat. Die einzelnen Soundchecks können in den Einstellungen ein- und ausgeschaltet werden. Der Soundcheck prüft dabei die folgenden Sachen:

- **Ungesichertes Projekt (Unsaved Project):** Warnt dich, wenn du etwas aufnehmen möchtest, aber das Projekt noch nicht gespeichert hast. Das beugt Datenchaos vor.
- **Spuren für Bearbeitung vorbereiten (Prepare all tracks for editing):** Warnt dich, wenn du nach der Aufnahme mit dem Bearbeiten beginnen möchtest, aber die Spuren noch nicht dafür vorbereitet sind. <!-- genauer erklären -->
- **Prüfe 48 KHz Abtastrate (Check for 48 KHz sample rate):** Wenn du StudioLink bzw. StudioLink-on-Air verwenden möchtest, musst du als Abtastrate 48 KHz verwenden. (mehr zu dem Thema in Kapitel XX)
- **Internes Mikrofon verwendet (Check if internal mic is selected):** Prüft, ob du aus Versehen statt deines guten Mikrofons das interne Mikrofon deines Laptops zum Aufnehmen verwendest.
- **Nur am Ende aufnehmen (Start recording only at the end):** Verhindert, dass du ungewollt in der Mitte deines Projektes aufnimmst.
- **Unbekanntes Soundinterface (Unknown sound interface):** Prüft, ob du ein neues Soundinterface angeschlossen hast, für das du noch keine Einstellung zum Direkt-Monitoring getroffen hast.
- **Echo- und Verzerrungsvorsorge (Echo and distortion prevention):** Wenn dein Interface kein Direkt-Monitoring hat, solltest du die richtige Blockgröße wählen. <!-- @TODO: richtiger name? --> Eine Blockgröße von 128 Samples führt zu Latenz und Echos, eine Blockgröße von 32 Samples zu Instabilität. Wir empfehlen eine Blockgröße von 512 Samples für Direkt-Monitoring und 64 Samples ohne Direkt-Monitoring.
- **Eingangs-Zauberer (Input Wizard):** Prüft, ob du einen Eingang mehrmals benutzt hast, oder ob du einen austauschbaren Eingang an einem Zoom benutzt.

![soundcheck](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/soundcheck.png) **Soundcheck:** _Soundcheck-Beispiel für ein ungesichertes Projekt_

Du kannst die Warnmeldungen links mit dem Button entweder auf `ignorieren` schalten, oder mit dem Button rechts das Problem beheben. In der Mitte wird dir in einem Textfeld das Problem immer noch einmal genauer erklärt. Wenn du das Soundcheck-Fenster schließt, ohne dass du die Probleme behoben hast, werden automatisch alle Warnungen auf `ignorieren` geschaltet. Zum Schließen kannst Du auch `esc` drücken.

Im Dashboard siehst du jederzeit den Status des Soundchecks. Ein Klick auf die Soundcheck-Leiste im Dashboard öffnet die Soundcheck-Übersicht.

![](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/Dashboard.png) **Dashboard:** _Dashboard mit einer Warnung in der Soundcheck-Leiste_

<!-- @todo: was passiert mit den Videos? https://www.youtube.com/watch?v=vdLpynu1ixE&t=4771s (US 5) https://www.youtube.com/watch?v=ND4AG43wSPQ&t=433s (US 4) -->

 # Aufnehmen mit Studiolink

[StudioLink](https://studio-link.de) ist eine eigenständige Software, die dir die Möglichkeit bietet dich remote zu einer Ultraschall-Aufnahme zuzuschalten oder andere Personen zuzuschalten.

StudioLink gibt es in zwei Fassungen. Einmal die _Standalone-Version_ (für deine Gäste) und einmal als _Plugin_ (für dich zum Aufnehmen in Ultraschall). Das StudioLink-Plugin wird direkt mit Ultraschall ausgeliefert. <!-- @TODO: ausgeliefert? Wie ist das mit Updates? --> Eine ausführliche Dokumentation findest du hier: [StudioLink-Doku](https://doku.studio-link.de/)

Eine StudioLink-Spur lässt sich über das Menü `Podcast -> Insert StudioLink and Soundboard Tracks -> Insert StudioLink track` einfügen.

<!-- @TODO: Es gibt bestimmt noch eine Tastenkombi(?) -->

 ![isert-new-studiolink-track](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/studiolink_insert_track.png) **Screenshot:** _Einfügen einer StudioLink-Spur über das Menü_

:::caution

Die StudioLink-Spuren erscheinen in Ultraschall als normale Spuren im [Spuren-Bereich [23]](GUI-overview) beziehungsweise im [Mixer-Bereich [24]](GUI-overview). Es öffnet sich aber ein Browserfenster im Standardbrowser, in dem die eigentliche Verbindung aufgebaut wird. Wenn du Windows verwendest, darfst du das Terminalfenster nicht schließen, sonst kannst du keine Verbindung aufbauen. <!-- @TODO: Mit Sebastian abklären wie die Anleitung von StudioLink aktuell gehalten werden soll. ! -->

:::

## Studiolinkfenster

In folgenden Bild ist eine StudioLink-Track in Ultraschall dargestellt.

![StudioLink Track](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/studiolink_track.jpg?=650x) **StudioLink Track einfügen:** _Über das Podcast-Menü kanns du eine StudioLink Spur einfügen_

Das Browserfenster öffnet sich seperat. (Bitte folge hierfür der Anleitung auf [StudioLink](https://studio-link.de)!)

![Studio-Link](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/studiolink_browser.jpg) **StudioLink:** _Studio-Link im Browser_

Das Terminalfenster bei Winwows darf nicht geschlossen werden.

<!-- @todo: Link stimmt nicht --> ![Windows Terminal Fenster](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/aufnahme/studiolink_konsole.png?=750x) **Windows Terminal Fenster:** _Das Terminalfenster nicht schließen, sonst funktioniert StuidoLink nicht_ ## Das Soundboard verwenden ### Soundboard-Spur einfügen Ultraschall kommt mit einem eigenen Soundboard, über das du während der Aufnahme Musik und Klangeffekte einspielen kannst, z. B. dein Intro, Trenner oder andere Audioschnipsel. Eine Soundboard-Spur fügst du über das Menü "Podcast -> Insert StudioLink and Soundboard tracks -> Insert Ultraschall-Soundboard track" ein. Alternativ kannst du auch mit der rechten Maustaste in den [Spuren-Bereich [23]](GUI-overview) klicken und dort die entsprechende Option auswählen. <!-- @TODO: einheitliche Begriffe für Programm-Bereiche und Funktionen? -->

 ### Möglichkeit 1: über das Podcast-Menü

![soundboard-track](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/insert-soundboard-track.png) **Screenshot:** _Soundboard hinzufügen_ **Soundboard einfügen:** _Über das Podcast-Menü kannst du eine soundboard Spur einfügen_

### Möglichkeit 2: per Rechtsklick in den Spurenbereich

![alternative-soundboard-track](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/add-soundboard-2.png) **Soundboard einfügen:** _Mit einem Rechtsklick kannst du ebenfalls eine soundboard Spur einfügen_

:::caution

Wir empfehlen, pro Projekt nur eine Soundboard-Spur anzulegen. Sounds für ein Projekt sollten also vor der Aufnahme aus unterschiedlichen Verzeichnissen in einem Soundboard zusammengestellt werden.

:::

## Bedienung

Um dem Soundboard beizubringen, wo die entsprechenden Sound-Dateien liegen, wählst du die entsprechende Spur und wechselst mittels Klick auf den zugehörigen FX-Button der Spur im [Mixer-Bereich [24]](GUI-overview) in die Ansicht für die Plugin-Liste. Dort stellst du sicher, dass das Soundboard-Plugin aktiviert ist (Haken ist gesetzt). Über das Ordner-Symbol oben links im Plugin-Bereich legst du das Verzeichnis fest, in dem du die Sound-Dateien fürs Soundboard abgespeichert hast.

![soundboard-activation](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/aufnahme/soundboard-activation_new.png) **Soundboard Aktivierung**: _So aktivierst du ein Soundboard_

So sieht ein mit diversen Clips belegtes Soundboard aus.

:::info

**Tipp**: Die Dateien werden hier immer alphabetisch sortiert angezeigt. Willst du lieber eine Sortierung in der Reihenfolge, wie du sie vielleicht auch in deiner Aufnahme verwendest, stellst du am besten dem Dateinamen eine Zahl voran.

:::

![soundboard-filled](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/aufnahme/soundboard-filled.png) **Soundboard**: _So sieht ein gefülltes Soundboard aus_

### Die Soundboard-Bedienelemente im Einzelnen:

1. **Dateiname des Audioclips** (ohne die Dateiendung)
2. **Loop-Funktion**: Wenn aktiviert, spielt der Clip nach dem Drücken des Wiedergabe-Buttons [4] in einer Endlosschleife
3. **Restzeitanzeige**: Zeigt an, wie lange der Clip noch spielt – vor der Wiedergabe zeigt sie also die Gesamtlaufzeit des Clips
4. **Wiedergabe-Button**: Startet die Wiedergabe des Einspielers
5. **Stopp-Button**: Bricht die Wiedergabe des Einspielers ab
6. **Softer Fade-in**: Startet wie auch [4] die Wiedergabe – beginnt stumm, die Lautstärke nimmt über circa fünf Sekunden hinweg zu; der restliche Clip wird in der eingestellten Lautstärke wiedergegeben
7. **Lautstärke**: Individuelle Lautstärkeeinstellung für den jeweiligen Clip

### Und auch das Soundboard nochmal als Video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/vdLpynu1ixE?start=3008" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
</iframe>
