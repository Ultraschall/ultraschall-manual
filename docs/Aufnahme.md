---
id: recording
title: Aufnahme
tags:
  - aufnahme
  - einsteiger
  - setup
  - vorbereitung
  - interface
  - projekt
  - spuren
  - studio-link
  - soundboard
lektorat:
    - Lektorat: 24.4.2022 @MirUnauffaellig
    - Schlusskorrektur: 6.7.2022 @MirUnauffaellig
---

<!-- @todo: Links auf Git main umziehen -->
<!-- @todo: Die Nummern die im Kapitel "Übersicht über die Bedienelemente und Bereiche" verwendet werden sollten sich durch alle Dokumente ziehen -->
<!-- @todo: Screenshotgröße anpassen -->
<!-- @todo: entscheiden was damit passiert. https://www.youtube.com/watch?v=p5kYH-YheN0 -->

## Einleitung

Jetzt kann die eigentliche Aufnahme beginnen. In diesem Kapitel lernst du, wie du Spuren anlegst, deine Audioquellen wählst und dann mit der eigentlichen Aufnahme beginnst.

:::info Video
Zu diesem Thema gibt es ein sehr gutes [Tutorial-Video](#video).
:::

## Neues Projekt anlegen

REAPER öffnet beim Starten immer das zuletzt bearbeitete Projekt. Findet REAPER kein letztes Projekt, öffnet REAPER ein neues, leeres Projekt. Dieses Projekt kannst du über das Menü `File`>`Save project` oder mit <kbd>Cmd</kbd>/<kbd>Strg</kbd> + <kbd>S</kbd> speichern. Nimmst du etwas auf, bevor du das Projekt gespeichert hast, werden die Audiodateien im Ordner 'Dokumente/REAPER Media' auf deiner Festplatte abgelegt. Ein neues Projekt kannst du über `File`>`New Project` oder <kbd>Cmd</kbd>/<kbd>Strg</kbd> + <kbd>N</kbd> anlegen.

:::info
Du solltest dein Projekt immer vor der Aufnahme speichern; das erspart dir hinterher Datenchaos. Der [Soundcheck](#Soundcheck) hilft dir dabei, das nicht zu vergessen.
:::

## Projekt-Templates

Um nicht bei jeder Aufnahme immer wieder von Neuem ein Projekt anlegen und konfigurieren zu müssen, kannst du dir einmal ein Projekt einrichten und es dann über `File`>`Project Templates`>`Save project as template` als Vorlage abspeichern. Diese Vorlage kannst du vor jeder neuen Aufnahme über `File`>`Project Templates`>`$NAME_DER_VORLAGE` öffnen.

## Spuren anlegen

Um später alle Sprechenden, die Musik und beispielsweise Soundeffekte bequem zu bearbeiten, legst du für jede Audioquelle eine eigene Spur im Bereich [Spuren [23]](GUI-overview) an. In Ultraschall gibt es dafür im Wesentlichen drei Arten von Spuren:

- **Track** – zum Beispiel für einen lokalen Sprecher
- **StudioLink Track** – etwa für einen Interview-Gast, den du übers Internet per StudioLink zuschaltest (siehe auch unten "[Aufnehmen mit StudioLink](#aufnehmen-mit-studiolink)")
- **Ultraschall-Soundboard Track** – für Einspieler, die du während der Aufnahme über das Soundboard abspielst (siehe auch unten "[Das Soundboard verwenden](#das-soundboard-verwenden)")

Reguläre Tracks, denen du im nächsten Schritt einzelne Sprechende beziehungsweise Spuren deines Multi-Track-Recorders (wie beispielsweise Zoom H6) zuordnest, legst du entweder mit einem Doppelklick in den [Spuren-Bereich [23]](GUI-overview)-Bereich an, per Tastatur-Befehl <kbd>Cmd</kbd>/<kbd>Strg</kbd> + <kbd>T</kbd> oder mit einem Rechtsklick in den [Spuren-Bereich [23]](GUI-overview) und dann einem Klick auf `Insert new track`.

![insert-new-track](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/insert-new-track.jpg) **Neuen Track einfügen:** _Das Einfügen neuer Tracks ermöglicht die Aufnahme der einzelnen Tonspuren._

Mit einem Klick in den noch leeren, aber bereits eingefärbten Bereich vergibst du am besten direkt einen Namen für deine Spur – so verlierst du auch in größeren Projekten nicht den Überblick.

![track-renaming](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/track-renaming.png?=650x) **Track benennen:** _Leg für deine Tracks sinnvolle Namen fest, das erleichtert dir später die Zuordnung._

Seit Version 5 von Ultraschall werden Spuren nicht nur automatisch in ihrer Höhe an die Fenstergröße angepasst, sondern zur Übersicht auch automatisch eingefärbt. Klickst du mit der rechten Maustaste auf den Track (oder per Tastenkürzel <kbd>Alt</kbd> + <kbd>C</kbd> bei ausgewählter Spur) kannst du im Color Picker die Farbe auch nachträglich ändern.

![example-project](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/project-with-4-tracks.png?=650x) **Beispielprojekt:** _So sieht ein Projekt mit zwei Sprechenden, einer StudioLink-Spur und einem Soundboard aus._

**Das Ganze nochmal als Video-Erklärung:**

<iframe width="560" height="315" src="https://ultraschall.github.io/ultraschall-manual/youtube/?url=p5kYH-YheN0?start=846" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="">
</iframe>



## Eingänge wählen

### Audio Device auswählen

Das Audio Device (typischerweise ein Mikrofon oder ein Audio-Interface), mit dem die Aufnahme erfolgen soll, wird über das Menü `REAPER`>`Preferences` (oder <kbd>Cmd</kbd> + <kbd>,</kbd>) ausgewählt. Dort findest du `Audio`>`Device` das Feld `Audio Device`. In diesem Beispiel ist es ein Zoom H6.

![Audio-Device-auswählen](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/Audiodevice_auswaehlen.jpg?=650x) **Audiogerät wählen:** _In den Einstellungen kannst du dein Audio-Gerät auswählen._

Ein Audio Device kann mehrere Eingänge haben (muss es aber nicht), die unterschiedlichen Spuren zugeordnet werden können. Wenn wir bei unserem Beispiel mit einem Zoom H6 bleiben, stehen uns hier vier (plus zwei) Eingänge zur Verfügung. Du kannst mit vier – oder mit einer entsprechenden Erweiterung mit sechs – Mikrofonen gleichzeitig aufnehmen.

:::note Hinweis
Die Zählweise der Eingänge ist gerätespezifisch, in Ultraschall lautet die Kanalbezeichnung unter Umständen also anders als auf deinem Gerät angegeben (Kanal 1 auf dem Zoom H6 wird in Ultraschall zum Beispiel als Kanal 3 aufgeführt).
:::

### Spuren auswählen und zuordnen

Alle Sprechenden, alle über StudioLink Zugeschalteten und die Soundeffekte (im Soundboard) haben nun jeweils eine eigene Spur. Der nächste Schritt ist nun die Zuordnung dieser Spuren zu den Aufnahmekanälen – also zu den verschiedenen Mikrofonen, die an deinem Aufnahmegerät hängen.

Alle Spuren, die du im Hauptfenster von Ultraschall angelegt hast, findest du auch im [Mixer-Bereich [24]](GUI-overview) wieder. Die Zuordnung erfolgt über die Track-Namen, die angezeigten Track-Nummern oder die Sortierung (im [Spuren-Bereich [23]](GUI-overview) von oben nach unten, was im [Mixer-Bereich [24]](GUI-overview) einer Sortierung von links nach rechts entspricht):

![tracks](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/tracks.png?=450x) **Spuren und Mixer:** _Jede Spur hat einen eigenen Mixer._

Ultraschall versucht, alle Tracks und Aufnahme-Kanäle automatisch zuzuordnen. Solltest du aber feststellen, dass die Stimmen nicht korrekt auf den in Schritt "[Spuren anlegen](#spuren-anlegen) benannten Tracks landen, kannst du im [Mixer [24]](GUI-overview) über die entsprechenden `Input`-Dropdown-Menüs die Zuordnungen manuell vornehmen. Am besten gewöhnst du dir an, vor der Aufnahme alle lokalen Mikrofon-Tracks einmal kurz zu kontrollieren – **die StudioLink- und die Soundboard-Spuren werden immer automatisch korrekt zugeordnet**, sie brauchen keinen physikalischen Eingang und bleiben auf `Input: None` stehen.

![track-assignment](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/track-assignment.png?=450x) **Eingänge zuweisen:** _Über das Dropdown-Menü kannst du den Eingang auswählen._

**Das Ganze nochmal als Video-Erklärung:**

<iframe width="560" height="315" src="https://ultraschall.github.io/ultraschall-manual/youtube/?url=p5kYH-YheN0?start=911" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="">
</iframe>

<iframe width="560" height="315" src="https://ultraschall.github.io/ultraschall-manual/youtube/?url=vdLpynu1ixE?start=4970" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="">
</iframe>


## Routing

Das Routing dient dazu, dass die jeweiligen Teilnehmer und Teilnehmerinnen sich gegenseitig hören – und auch ein eventuell vorhandenes Soundboard von allen gehört werden kann (auch über eine Internetverbindung mittels StudioLink).

### Magic Routing

Seit Version 5 gibt es in Ultraschall das sogenannte Magic Routing, das dir das manuelle Routen komplett abnimmt. Ultraschall erkennt automatisch, ob du gerade schneidest oder aufnimmst, und schaltet dementsprechend das Routing um. Links am Rand des Bildschirms findest du die [Routing-Buttons [14-18]](GUI-overview) für folgenden Routing-Einstellungen:

![Magic Routing](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/magic-routing.png)

- **Magic Routing (ein/aus)** [[14]](GUI-overview): Wenn das eingeschaltet ist, kümmert sich Ultraschall automatisch um das richtige Routing. Du musst nichts weiter tun.
- **Preshow Routing** [[15]](GUI-overview): Wenn du deine Podcast-Aufnahme über StudioLink-on-Air live streamst, kannst du hier einstellen, dass im Stream zwar schon dein Soundboard zu hören ist, aber noch keine Sprecherinnen oder Sprecher. <!-- [ ] @todo: richtig so? -->
- **Aufnahme-Routing** [[16]](GUI-overview): Das ist die Einstellung für die eigentliche Aufnahme deines Podcasts.
- **Schnitt-Routing** [[17]](GUI-overview): Diese Einstellung ist für den Schnitt deiner Aufnahme gedacht.
- **StudioLink-on-Air (ein/aus)** [[18]](GUI-overview): Diese Schaltfläche passt das Routing für deinen "StudioLink-on-Air"-Stream an.

<!-- @todo: entscheiden was mit den Links passiert https://youtu.be/ND4AG43wSPQ (US 4 irgendwo) https://www.youtube.com/watch?v=vdLpynu1ixE&t=91m https://www.youtube.com/watch?v=vdLpynu1ixE&t=5437s -->

### Manuelles Routing

Falls du das Routing lieber manuell festlegst, kannst du das über die Einstellungen `View`>`Routing Matrix` oder mit <kbd>Alt</kbd> + <kbd>R</kbd> machen. Die [Routing-Matrix [27]](GUI-overview) zeigt dir eine Übersicht an, welche Personen sich gegenseitig hören. Die Zuordnung kannst du zwar hier manuell verändern, seit der Einführung des Magic Routing raten wir davon allerdings ab.

<iframe width="560" height="315" src="https://ultraschall.github.io/ultraschall-manual/youtube/?url=p5kYH-YheN0?start=2917" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="">
</iframe>

**Video:** _Ab Minute 49 wird in dem Video unten erklärt, wie das Routing in älteren Versionen angepasst wurde._

## Soundcheck

Der Soundcheck hilft dir dabei, die häufigsten Fehler beim Podcasten mit Ultraschall zu vermeiden. Der Soundcheck gibt eine Warnung aus, wenn Ultraschall einen potenziellen Fehler erkannt hat. Die einzelnen Bestandteile des Soundchecks kannst du in den Einstellungen nach Bedarf ein- oder ausschalten. Im Einzelnen prüft der Soundcheck:

- **Ungesichertes Projekt (Unsaved Project):** Warnt dich, wenn du etwas aufnehmen möchtest, aber das Projekt noch nicht gespeichert hast. Das beugt Datenchaos vor.
- **Spuren für die Bearbeitung vorbereiten (Prepare all tracks for editing):** Warnt dich, wenn du nach der Aufnahme mit dem Bearbeiten beginnen möchtest, aber die Spuren noch nicht dafür vorbereitet sind.
- **Prüfe 48-KHz-Abtastrate (Check for 48 KHz sample rate):** Wenn du StudioLink oder StudioLink-on-Air verwenden möchtest, musst du als Abtastrate 48 KHz verwenden.
- **Internes Mikrofon verwendet (Check if internal mic is selected):** Prüft, ob du aus Versehen statt deines guten Mikrofons das interne Mikrofon deines Laptops zum Aufnehmen verwendest.
- **Nur am Ende aufnehmen (Start recording only at the end):** Verhindert, dass du ungewollt in der Mitte deines Projektes aufnimmst.
- **Unbekanntes Soundinterface (Unknown sound interface):** Prüft, ob du ein neues Soundinterface angeschlossen hast, für das du noch keine Einstellung zum Direkt-Monitoring getroffen hast.
- **Echo- und Verzerrungsvorsorge (Echo and distortion prevention):** Wenn dein Interface kein Direkt-Monitoring hat, solltest du die richtige Blockgröße wählen. <!-- @TODO: richtiger name? --> Eine Blockgröße von 128 Samples führt zu Latenz und Echos, eine Blockgröße von 32 Samples zu Instabilität. Wir empfehlen eine Blockgröße von 512 Samples für Direkt-Monitoring und 64 Samples ohne Direkt-Monitoring.
- **Eingangs-Assistent (Input Wizard):** Prüft, ob du einen Eingang mehrfach zugeordnet oder ob du einen austauschbaren Eingang an einem Zoom benutzt. <!-- @TODO: verständlichere Bezeichnung? -->

![soundcheck](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/soundcheck.png) **Soundcheck:** _So sieht ein Beispiel-Soundcheck in einem ungesicherten Projekt aus._

Du kannst die Warnmeldungen links mit dem Button `Ignore` entweder ignorieren oder mit dem Button rechts das Problem beheben. In der Mitte wird dir in einem Textfeld das Problem immer noch einmal genauer erklärt. Falls du das Soundcheck-Fenster schließt, ohne dass du die Probleme behoben hast, werden automatisch alle Warnungen ignoriert. Zum Schließen kannst Du auch <kbd>Esc</kbd> drücken. Im Dashboard (unten, Mitte) siehst du jederzeit den Status deines Soundchecks – ein Klick auf diese Soundcheck-Leiste öffnet die Soundcheck-Übersicht erneut.

![Soundcheck-Dashboard](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/Dashboard.png) **Dashboard:** _Das Dashboard mit etwaigen Warnungen findest du in der Soundcheck-Leiste am unteren Fensterrand._

<!-- @todo: was passiert mit den Videos? https://www.youtube.com/watch?v=vdLpynu1ixE&t=4771s (US 5) https://www.youtube.com/watch?v=ND4AG43wSPQ&t=433s (US 4) -->

## Aufnehmen mit Studiolink

[StudioLink](https://studio-link.de) ist eine eigenständige Software, die dir die Möglichkeit bietet, dich remote zu einer anderen Ultraschall-Aufnahme hinzuzuschalten oder andere Personen über das Internet in deine Aufnahme zu integrieren.

StudioLink gibt es in zwei Versionen: Einmal die *Standalone-Version* (für deine Gäste) und einmal als *Plugin* (für dich zum Aufnehmen in Ultraschall). Das StudioLink-Plugin ist in Ultraschall bereits vorinstalliert. Updates von StudioLink kommen immer zusammen mit Ultraschall-Updates. <!-- @TODO: ausgeliefert? -->Eine ausführliche Dokumentation zu StudioLink selbst findest du hier: [StudioLink-Doku](https://doku.studio-link.de/).

Eine StudioLink-Spur fügst du über das Menü `Podcast`>`Insert StudioLink and Soundboard Tracks`>`Insert StudioLink track` in dein Projekt ein. Alternativ kannst du auch mit der rechten Maustaste in den [Spuren-Bereich [23]](GUI-overview) klicken und dort die entsprechende Option auswählen.

<!-- @TODO: Es gibt bestimmt noch eine Tastenkombi(?) -->

 ![insert-new-studiolink-track](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/studiolink_insert_track.png) **Screenshot:** *So fügst du eine StudioLink-Spur über das Menü ein.*

:::danger Achtung!
Die StudioLink-Spuren erscheinen in Ultraschall als normale Spuren im [Spuren-Bereich [23]](GUI-overview#bereich-arbeitsflächew) beziehungsweise im [Mixer-Bereich [24]](GUI-overview#bereich-arbeitsfläche). Es öffnet sich gleichzeitig aber ein Browserfenster in deinem Standardbrowser, über das die eigentliche Verbindung aufgebaut und später auch wieder beendet wird. Falls du Windows verwendest, darfst du das ebenfalls erscheinende Konsolen-Fenster nicht schließen, sonst kannst du keine Verbindung aufbauen. <!-- @TODO: Mit Sebastian abklären wie die Anleitung von StudioLink aktuell gehalten werden soll. ! -->
:::

Das Browserfenster öffnet sich separat. (Bitte folge hierfür der Anleitung auf [StudioLink](https://studio-link.de)!)

![Studio-Link](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/studiolink_browser.jpg) **StudioLink:** *Studio-Link im Browser*

![Windows Konsolen-Fenster](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/studiolink_konsole.png) **Windows-Konsole:** *Dieser Fenster bitte nicht schließen, sonst funktioniert StudioLink nicht!*

## Das Soundboard verwenden

### Soundboard-Spur einfügen
Ultraschall kommt mit einem eigenen Soundboard, über das du während der Aufnahme Musik und Klangeffekte einspielen kannst, zum Beispiel dein Intro, Trenner oder andere Audioschnipsel. Eine Soundboard-Spur fügst du über das Menü `Podcast`>`Insert StudioLink and Soundboard tracks`>`Insert Ultraschall-Soundboard track` ein. Alternativ kannst du auch mit der rechten Maustaste in den [Spuren-Bereich [23]](GUI-overview) klicken und dort die entsprechende Option auswählen.

![soundboard-track](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/insert-soundboard-track.png) **Soundboard einfügen – Möglichkeit 1:** _Über das Podcast-Menü kannst du eine Soundboard-Spur einfügen._

![alternative-soundboard-track](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/add-soundboard-2.png) **Soundboard einfügen – Möglichkeit 2:** _Mit einem Rechtsklick in den Spuren-Bereich kannst du ebenfalls eine Soundboard-Spur einfügen._

:::danger Achtung!
Wir empfehlen, pro Projekt nur eine Soundboard-Spur anzulegen. Sounds für ein Projekt sollten also vor der Aufnahme aus unterschiedlichen Verzeichnissen in einem Soundboard zusammengefasst werden.
:::

### Bedienung

Um dem Soundboard beizubringen, wo deine Sound-Dateien liegen, wählst du die entsprechende Spur und wechselst mittels Klick auf den zugehörigen `FX`-Button der Spur im [Mixer-Bereich [24]](GUI-overview) in die Ansicht für die Plugin-Liste. Dort stellst du sicher, dass das `Soundboard`-Plugin aktiviert ist (Haken ist gesetzt). Über das Ordner-Symbol oben links im Plugin-Bereich legst du das Verzeichnis fest, in dem du die Sound-Dateien fürs Soundboard abgespeichert hast.

![soundboard-activation](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/soundboard-activation_new.png)
**Soundboard-Aktivierung**: _So aktivierst du ein Soundboard._

:::tip Tipp
Die Dateien werden hier immer alphabetisch sortiert angezeigt. Willst du lieber eine Sortierung in der Reihenfolge, wie du sie vielleicht auch in deiner Aufnahme verwendest, stellst du am besten dem Dateinamen eine Zahl voran.
:::

![soundboard-filled](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/soundboard-filled.png)

**Soundboard**: _So sieht ein gefülltes Soundboard aus._

### Die Soundboard-Bedienelemente im Einzelnen

1. **Dateiname des Audioclips** (ohne Dateiendung)
2. **Loop-Funktion**: wenn aktiviert, spielt der Clip nach dem Drücken des Wiedergabe-Buttons [4] in einer Endlosschleife
3. **Restzeitanzeige**: zeigt an, wie lange der Clip noch spielt – vor der Wiedergabe zeigt sie also die Gesamtlaufzeit des Clips
4. **Wiedergabe-Button**: startet die Wiedergabe des Einspielers
5. **Stopp-Button**: bricht die Wiedergabe des Einspielers ab
6. **Softer Fade-in**: startet wie auch [4] die Wiedergabe – beginnt stumm, die Lautstärke nimmt über circa fünf Sekunden hinweg zu; der restliche Clip wird in der eingestellten Lautstärke wiedergegeben
7. **Lautstärke**: individuelle Lautstärkeeinstellung für den jeweiligen Clip

<!-- **Und auch das Soundboard nochmal als Video:**
<iframe width="560" height="315" src="https://www.youtube.com/embed/vdLpynu1ixE?start=3008" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
</iframe> -->


## Video
<div class="youTubeContainer">
<iframe src="https://ultraschall.github.io/ultraschall-manual/youtube/?url=TkI0ThRj_GE" title="YouTube video player"
frameborder="0" allowfullscreen class="video"></iframe>
</div>
