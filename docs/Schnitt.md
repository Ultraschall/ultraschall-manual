---
id: cut
title: Schnitt
tags:
  - schnitt
lektorat:
    - Lektorat: 4.5.2022 @MirUnauffaellig
    - Schlusskorrektur: 
---

<!-- @todo: Die Nummern die im Kapitel "Übersicht über die Bedienelemente und Bereiched" verwedet werden sollten sich duch alle Dokumente ziehen -->
<!-- @todo: Gif loops nur bei Bedarf starten (Gif verändern) -->

## Einleitung

Wenn die Aufnahme beendet ist, steht als Nächstes in der Regel der Schnitt deiner Podcast-Episode an. In diesem Kapitel lernst du, wie aus deiner Aufnahme ungewollte Stellen entfernst und deinen Podcast mit Kapitelmarken versiehst.

:::info Info
Zu diesem Thema gibt es ein sehr gutes [Tutorial-Video](#video).
:::

## Wichtig zu wissen

Reaper schneidet [nicht-destruktiv](https://de.wikipedia.org/wiki/Nicht-destruktive_Bearbeitung). Das heißt, deine Audiodateien werden nicht direkt bearbeitet, sondern bleiben unverändert erhalten. Du kannst beim Schnitt also gar nichts falsch oder kaputt machen. Im Notfall spielst du einfach ein Backup ein – oder wenn es mal ganz schlimm kommt, fängst du noch einmal von vorne an. Ultraschall macht seit der Version 5 alle 10 Minuten ein Backup deiner Projektdatei (nicht der Audiodateien) und speichert diese im Projektordner. 

:::tip  Tipp
**Backup wiederherstellen:** Falls du diese Funktion jetzt gerade brauchst, dann keine Panik. Ultraschall macht regelmäßig und vollautomatisch Backups deines Projekts. Diese liegen in deinem Projekt-Ordner unter `Backup` und sind nach dem folgenden Schema benannt: `$Projektname-$Datum_$Stunden$Minuten`. Um ein solches Backup wiederherzustellen, schließe erst mal Ultraschall. Öffne dann dein Projekt im Finder oder Explorer und kopier dir die Backup-Datei mit dem passenden Zeitstempel aus dem Ordner `Backup` in das Projektverzeichnis (also eine Ebene nach oben). Am besten benennst du diese Datei direkt um und öffnest sie mit Ultraschall. Fertig!
:::

<!--[Backup](https://github.com/Ultraschall/ultraschall-portable/wiki/Ultraschall-5-Release-Notes#user-interface)-->

## Vorbereitung zum Schneiden. ("Prepare all tracks for editing")

Bevor du mit dem Schneiden richtig loslegen kannst, musst du zunächst ein paar Vorbereitungen treffen. Stell vorab am besten sicher, dass die Aufnahme beendet und nicht etwa nur pausiert ist. Um dir die nachfolgenden Arbeitsschritte weitestgehend abzunehmen, bietet Ultraschall die Funktion `Prepare all tracks for editing`. Du findest sie im Menü unter `Podcast`>`Prepare all tracks for editing` – spätestens erinnert dich aber der Soundcheck daran, falls du vor dem Schnitt vergessen haben solltest, die Spuren vorzubereiten. `Prepare all tracks for editing` führt die folgenden Schritte aus:

- Der Automatisierungsmodus <!-- @Todo: schauen was das eigentlich ist --> wechselt für alle Spuren beziehungsweise Envelopes auf `Trimmen/Lesen`.
- Alle Spuren und Envelopes werden für die Aufnahme deaktiviert.
- Alle Verbindungen zu StudioLink (falls vorhanden) werden entfernt.
- Alle StudioLink-FX-Effekte (fall vorhanden) werden entfernt.
- Alle Soundboards (falls vorhanden) werden entfernt.
- Das StudioLink-on-Air-Streaming (falls vorhanden) wird beendet.
- Alle Verbindungen werden auf den Master Track geroutet.
- Das Routing wird in den Schnitt-Modus umgeschalten.

:::info Info
Denk daran, dass durch `Prepare all tracks for editing` alle StudioLink-Verbindungen zu deinen Gesprächspartnerinnen und -partnern beendet werden! Falls du später doch noch etwas aufnehmen möchtest, kannst du die Spur wieder auf Aufnahme schalten und so etwas neu aufnehmen. Danach kannst du erneut `Prepare all tracks for editing` ausführen.
:::

Als letzten Schritt in der Schnittvorbereitung kannst du jetzt noch in die Schnittansicht wechseln. Dafür findest du links am Rand unter `Views` die Schaltfläche mit der Schere [[17]](GUI-overview) – oder du wählst im Menü `Podcast`>`Screenset editing` oder drückst <kbd>F9</kbd>. Diese Ansicht verbessert die Übersicht in deinem Projekt – etwa durch eine Schnellnavigation am oberen Bildschirmrand.

## Einfacher Schnitt

Für den Schnitt bietet dir Ultraschall zwei extrem effiziente Werkzeuge, mit denen du 90 Prozent der Arbeit erledigen kannst. Lerne erst diese beiden Methoden, bevor du dich dem Feinschliff mit den erweiterten Werkzeugen widmest:

### Schnitt über alle Spuren (Ripple cut)

Mit dem sogenannten Ripple Cut schneidest du alle Spuren gleichzeitig. Das verhindert, dass sich Inhalte verschieben und die Spuren nicht mehr richtig übereinander liegen. Um die Funktion zu nutzen, ziehst du in der [Timeline [23]](GUI-overview) eine Auswahl über den Bereich auf, den du schneiden möchtest. Anschließend klickst du auf den [Ripple-Cut-Button [7]](GUI-overview) oder <kbd>Cmd</kbd>/<kbd>Strg</kbd> + <kbd>X</kbd>.

### Stummschalten störender Passagen (Mute)

<!-- @TODO Screenshots einfügen -->
Falls du Sequenzen aus deinen Spuren nicht herausschneiden willst, sie aber trotzdem nicht hörbar sein sollen, benutzt du dafür am besten die Mute-Funktion: Dafür selektierst du die Spur(en) die du bearbeiten willst und drückst <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Y</kbd>. Falls noch nicht vorhanden erscheint daraufhin ein Mute-Envelope unter der gewählten Spur. Die orangenfarbene Linie des Mute-Envelopes zeigt ein Tal in der Verlaufsform an der Stelle, die du vorher selektiert hast. Dieser Envelope funktioniert nach dem Binärprinzip: Ist die Linie oben, ist die zugehörige Spur zu hören; ist die Mute-Linie unten, ist auf der zugeordneten Spur nichts zu hören.

Du kannst der Linie im Envelope auch weitere Punkte hinzufügen und mit der Maus an den gewünschten Stellen stummschalten – beziehungsweise die Stummschaltung aufheben. Ein Doppelklick erzeugt weitere Editierpunkte, die du dann nur noch hoch- oder runterziehen musst. 

:::tip Tipp
Am schnellsten geht das Bearbeiten des Mute-Envelopes mit der Maus: Möchtest du an einer Stelle von "hörbar" zu "nicht hörbar" wechseln, brauchst du lediglich in den Mute-Envelope in die untere Hälfte des Envelopes zu klicken. Das geht nur, wenn an dieser Stelle die Linie oben ist (und sinnvollerweise ist dort auch noch kein Editierpunkt vorhanden). Für den Wechsel von "nicht hörbar" zu "hörbar" ist das Vorgehen analog, wobei du natürlich in den oberen Bereich des Envelopes klicken musst.
:::

## Schnitt für Fortgeschrittene

### Split Items

Über diese Funktion teilst du ein Item in zwei Items auf. Dafür setzt du den Edit-Curser an die Stelle, an der du eine Trennung vornehmen willst, und klickst dann auf den Split-Button[[5]](GUI-overview) – oder drückst die Taste <kbd>S</kbd>.

<!-- Sendegate-Beitrag von Ralf https://sendegate.de/t/faq-einfacher-schnitt-aller-spuren/6911 -->

### Softer Fade-in und Fade-out

Wenn du gern am Anfang und oder Ende eines Items die Lautstärke sanft ein- oder ausblenden möchtest, geh mit der Maus über den linken oberen Rand des Items im [Timeline-Bereich [23]](GUI-overview). Dann siehst du schon, dass sich dein Mauszeiger in eine Kurve verändert. Jetzt kannst du klicken und ziehen – und so die Blende beziehungsweise ihre Dauer bestimmen. Das gleiche kannst du freilich analog auch an jedem Item-Ende rechts oben machen.
<!-- @TODO Gif einfügen -->

### Kapitelmarken

<!-- @todo: Was passiert mit dem video? https://www.youtube.com/watch?v=vdLpynu1ixE&t=5080s -->
In Ultraschall setzt du ganz einfach Kapitelmarken, die deinen Hörenden dann später (in den meisten Podcatchern) die Navigation innerhalb deiner Episoden vereinfachen. Für die Produktion unterscheidet Ultraschall zwischen zwei Markenarten unterschieden: Kapitelmarken und Editmarken. Die Kapitelmarken setzt du über die Taste <kbd>M</kbd> oder den entsprechenden Button [[3]](GUI-overview) – das sind die Marken die später auch im Podcatcher auftauchen. Dazu solltest du die Marken aber auch noch benennen. Entweder später im [Marker-Dashboard](#marker-dashboard) oder, indem du direkt per <kbd>Shift</kbd> + <kbd>M</kbd> eine benannte Marke setzt und einen Titel vergibst.

Die Editmarken setzt du mit dem Button [[4]](GUI-overview) oder der Taste <kbd>E</kbd>. Sie sind nur für dich während des Schnitts relevant und sichtbar, damit du Stellen im Projekt markieren und später einfach wiederfinden kannst. Sie werden nicht mit exportiert. 

:::info Info
Regions (auch "Regionen") werden beim Podcast-Export ebenfalls ignoriert. Du kannst sie aber dazu verwenden, dein Audio-Material in verschiedene Abschnitte zu unterteilen (zum Beispiel, wenn du aus einer langen Aufnahme mehrere Episoden schneidest) und diese Abschnitt beziehungsweise Regionen dann über den Export-Assistenten als einzelne Dateien exportieren.
:::

#### Marker-Dashboard

<!-- @TODO: Fotos einfügen -->
Das Marker-Dashboard öffnest du mit <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> oder einem Druck auf den entsprechenden Button [[19]](GUI-overview). Dort verwaltest, benennst und exportierst du deine gesetzten Kapitelmarken.

#### Region/Marker Manager

Den `Region/Marker Manager` findest du im [Kapitelmarken-Bereich [28]](GUI-overview) unten rechts. Diesen Bereich teilen sich die [Routing Matrix [27]](GUI-overview), die [Filter [26]](GUI-overview) und der [Kapitelmarken-Manager [28]](GUI-overview). In der Markenverwaltung siehst du alle Marken - also sowohl Kapitel- als auch Editmarken. Mit einem Doppelklick auf das Namensfeld, kannst du diese bearbeiten – über das Feld in der jeweils letzten Spalte legst du per Doppelklick die Farbe des Markers fest.

#### Fotos

Optional kannst du Kapitelmarken auch Fotos hinzufügen, die dann – sofern der Podcatcher das unterstützt – passend zum aktuell abgespielten Kapitel angezeigt werden. Unterstütze Formate sind `.png` und `.jpg`. Die Fotos ziehst du einfach per Drag-and-Drop in dein Projekt auf eine eigene Spur und legst sie dort an der gewünschten Stelle ab. Zu jedem Bild wird automatisch eine Kapitelmarke hinzugefügt, die du im Anschluss aber noch benennen musst.

#### URLs

Ergänzend (und ebenfalls optional) kannst du außerdem jede Kapitelmarke mit einer URL versehen. Auch dafür nutzt du das Marker-Dashboard. Achtung: Das `+`, um eine URL im entsprechenden Feld hinzuzufügen, taucht nur auf, falls die Kapitelmarke auch einen Namen hat. Unbenannten und damit unvollständigen Marken können keine URL hinzugefügt werden.

### Button-Übersicht

<!-- [ ]todo: ist das hier wirklich an der richtigen Stelle? -->
![buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons.png) Die Buttons [[1-8]](GUI-overview) links oben beeinflussen, was passiert, wenn du mit der Maus in den Spurenbereich klickst und bei gedrückter Maustaste ziehst: Wie auch in einem Textverarbeitungs- oder in einem anderen Schnittprogramm ist die Standardeinstellung, dass du dadurch einen Bereich selektierst beziehungsweise auswählst. Du kannst dieses Verhalten jedoch per Knopfdruck ändern und an deine Arbeitsweise anpassen – oder auch mit gedrückter <kbd>Alt</kbd>- oder <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>-Taste das Verhalten nur für die aktuelle Aktion ändern.

#### [1] und [2]: Ripple Editing

![buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-ripple-per-track.png)

Das Ripple-Verhalten bestimmt, was genau passiert, wenn du während der Bearbeitung ein Item auf einer Spur verschiebst (oder entfernst) – und ob und wie sich das auf andere Items auf demselben und den anderen Tracks auswirkt:

- **Kein Ripple**: Die Buttons [1] und [2] sind nicht aktiv (grau); verschiebst du ein Item auf einer Spur, so hat das keine Auswirkungen auf andere Items oder Spuren.
- **Ripple per Track**: Der Button [1] ist aktiv (orange); verschiebst du ein Item, so verschieben sich auch alle nachfolgenden Items auf derselben Spur – hast du mehr als ein Item auf unterschiedlichen Spuren selektiert, so verschieben sich alle nachfolgenden Items auf allen betroffenen Spuren.
- **Ripple all Tracks**: Der Button [2] ist aktiv (orange – Button [1] wird an dieser Stelle ignoriert); verschiebst du ein Item auf einer Spur, so verschieben sich auch alle nachfolgenden Items auf allen Spuren. Standardmäßig ist Ripple für alle Spuren deaktiviert (Buttons sind grau).

![Ripple: Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/ripple-buttons.gif) **Ripple Editing:** _Die Buttons [1] und [2] beeinflussen das Ripple-Verhalten beim Verschieben von Audio-Teilen._

#### [3] und [4]: Marken

![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-markers.png)

Button [[3]](GUI-overview) setzt eine (unbenannte) Kapitelmarke an die aktuelle Position des Play-Cursors – Button [[4]](GUI-overview) setzt eine Editmarke. Mehr zum Thema Marken findest du im Abschnitt [Kapitelmarken](#Kapitelmarken).

#### [5]: Split

![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-split.png)

Button [[5]](GUI-overview) teilt ein Item an der aktuellen Cursor-Position. Mehr dazu findest du im Abschnitt [Split Items](#Split-Items).

#### [6]: Mouse Selection

![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-selection.png)

Die Schaltfläche [[6]](GUI-overview) aktiviert beziehungsweise deaktiviert den Maus-Selektionsmodus und beeinflusst so das Mausverhalten: 

- **aktiviert**: Klickst du auf ein Item, hältst die Maustaste gedrückt und ziehst dann die Maus, selektierst du den betroffenen Bereich.
- **deaktiviert**: Klickst du auf ein Item, hältst die Maustaste gedrückt und ziehst dann die Maus, verschiebst du das ausgewählte Item.

<!-- @todo: Hier noch GIFs fürs bessere Verständnis einfügen -->

##### [7]: Ripple Cut

![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-ripple-cut.png)

Button [[7]](GUI-overview) entspricht der Tastenkombination <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>X</kbd> – damit schneidest du den selektierten Bereich über alle Spuren hinweg aus deiner Aufnahme heraus. Alle nachfolgenden Items verschieben sich nach links, um die entstandene Lücke zu schließen.

#### [8]: Show Mute Envelopes

![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-show-mute-envelopes.png)

Button [[8]](GUI-overview) zeigt beziehungsweise versteckt die Mute-Envelopes aller Spuren. Im Abschnitt [Mute](#Mute) findest du mehr dazu.

### Verschieben von Items (Spurinhalten)

:::caution Achtung
Willst du in der [Timeline [25]](GUI-overview) einzelne Elemente ("Items") auf deinen Spuren verschieben, solltest du extrem vorsichtig vorgehen – es passiert dabei sehr schnell, dass synchron aufgenommene Spuren dadurch "verrutschen". Beim Anhören wirst du feststellen, dass das Timing nicht mehr passt: Die Sprechenden fallen sich ins Wort, es entstehen Pausen, die in der Aufnahme nicht da waren, und so weiter.
:::

Das Verhalten der einzelnen Items beim Verschieben wird durch die [Ripple-Einstellung](#Ripple-Editing) festgelegt. Du kannst jedoch das Ripple-Verhalten temporär nur für die aktuelle Aktion beeinflussen, indem du die Aktion mit gedrückter <kbd>Alt</kbd>- beziehungsweise <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>-Taste ausführst:

- **<kbd>Alt</kbd> (Mac/Windows/Linux) gedrückt halten und Item verschieben**: Du verschiebst nur das oder die selektierten Items.

![Ripple: Alt](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/ripple-key-alt.mp4)
<!-- todo: videos fehlen -->

- **<kbd>Cmd</kbd> (Mac) beziehungsweise <kbd>Ctrl</kbd> (Windows/Linux) gedrückt halten und Item verschieben**: Du verschiebst das oder die selektierten Items und ALLE Items dahinter.

![Ripple: Cmd](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/ripple-key-cmd.mp4)
<!-- todo: videos fehlen -->

## Audio-Inhalte nachträglich in das Projekt einfügen

Um nach einer Aufnahme weitere Sounds oder Aufnahmen in dein Projekt einzufügen, ziehst du einfach die gewünschten Dateien per Drag-and-Drop in dein Projekt. Wenn du die Datei in den [Timeline-Bereich [25]](GUI-overview) an eine Stelle im Projekt ziehst, an der keine Spur ist, erstellt Ultraschall automatisch eine neue Spur mit dem Inhalt der Datei (und benennt diese nach dem Dateinamen). Auf diesem Weg kannst du auch ganze Ultraschall-Projekte (`.rpp`) in andere Projekte einbetten.

:::caution Achtung
Unter dem Menüpunkt `Edit`>`Project Settings` stellst du ein, wie Ultraschall mit hinzugefügten Mediendateien umgehen soll. Hier empfehlen wir auf jeden Fall die Einstellung `Copy media to project`. Am besten setzt du direkt in den globalen REAPER-Einstellungen unter `Options`> `Preferences` unter dem Punkt `Media` das Kreuz bei `Copy imported media to project media directory`. Sonst kann es passieren, dass du ungewollt Referenzen auf Dateien in deinem Projekt hast, die nicht mit im Projektordner liegen – und spätestens beim Verschieben oder Kopieren des Projekts dann Probleme bereiten.
:::

### Ausschneiden, kopieren und einfügen

Um Audio innerhalb deines Projekts auszuschneiden oder zu kopieren, wählst du das zu kopierende Item oder setzt eine Zeit-Markierung. Klickst du dann mit der rechten Maustaste auf den gewählten Bereich (oder öffnest das `Edit`-Menü), kannst du entweder das ganze Item kopieren (Standardverhalten; auch per <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>C</kbd>) oder den ausgewählten Bereich innerhalb eines Items. Ausschneiden funktioniert analog.

Um kopierte oder ausgeschnittene Inhalte wieder einzufügen, wählst du mit einem Klick in den linken [Spuren-Bereich [23]](GUI-overview) die Spur, auf der die Inhalte landen sollen. Anschließend setzt du den Cursor an die gewünschte Stelle und wählst `Paste` entweder über das `Edit`- oder das Kontext-Menü – oder via Tastenkombination <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>V</kbd>.

![Copy and Paste](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/copy-and-cut.png)**Copy and Paste:** _Das Kontextmenü kennt diverse Kopier- und Ausschneide-Modi._

### Double-Ender-Aufnahmen

Falls deine Mitpodcastenden über eine schlechte oder instabile Internetverbindung via StudioLink mit dir verbunden sind, ist es sinnvoll, wenn sie in ihren StudioLink-Standalone-Clients sicherheitshalber eine lokale Aufnahme mitlaufen lassen. Dafür klicken sie im Browser-Fenster von StudioLink auf den `Record`-Button. Die Datei, die später an die Cutterin oder den Cutter übermittelt werden muss, findet sich in den Eigenen Dateien in einem `studiolink`-Ordner und dort in einem Unterverzeichnis mit Aufnahme-Zeitstempel unter dem Dateinamen `local.flac`.

<!-- ### Austauschen und Ausrichten von Spuren (zum Beispiel nach Double-Ender-Aufnahmen) -->
<!--@todo: Was ist mit diesem Abschnitt? -->

<!-- https://www.youtube.com/watch?v=vdLpynu1ixE&t=1853s -->

<!-- ## Tipps für erfolgreichen Schnitt -->

## Video
<iframe width="560" height="315" src="../youtube/?url=RnkHsQp2Mbw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="">
</iframe> 