---
id: x
title: Schnitt
tags:
  - x
  - x
---

[zurück zum Inhaltsverzeichnis...](https://pad.gwdg.de/t3uoZPBsTyigArO0yHq8jw#)
<!-- @todo: Blder auf  Git main umziehen -->
<!-- @todo: Links auf  Git main umziehen -->
<!-- @todo: Bildunterschrifen hinzufügen-->
<!-- @todo: Die Nummern die im Kapitel "Übersicht über die Bedienelemente und Bereiched" verwedet werden sollten sich duch alle Dokumente ziehen -->
<!-- @todo: Gif loops nur bei Bedarf starten (Gif verändern) -->

# Schnitt

## Einleitung
<!-- @todo: kurze Zusammenfassung schreiben-->

## Wichtig zu wissen
Reaper schneidet [nicht-destruktiv](https://de.wikipedia.org/wiki/Nicht-destruktive_Bearbeitung). Das heißt, deine Audiodateien werden nicht direkt bearbeitet, sondern bleiben unverändert erhalten. Du kannst beim Schnitt also gar nichts falsch oder kaputt machen. Im Notfall einfach ein Backup einspielen oder wenn es ganz schlimm kommt, noch mal von vorne anfangen. Ultraschall macht seit der Version 5 alle 10 Minuten ein Backup deiner Projektdatei (nicht der Audiodateien) und speichert diese im Projektordner. Um diese wieder herzustellen, siehe: ([Backup wieder herstellen](https://pad.gwdg.de/sLRAFF9eS0OwYFuobe_wZw?both#Ein-Backup-wieder-einspielen)).

<!--[Backup](https://github.com/Ultraschall/ultraschall-portable/wiki/Ultraschall-5-Release-Notes#user-interface)-->

## Vorbereitung zum Schneiden. ("Prepare all tracks for editing")
Bevor du mit dem Schneiden richtig loslegen kannst, musst du zunächst ein paar Vorbereitungen treffen. Um dir diese Arbeit weitestgehend abzunehmen, bietet Ultraschall die Funktion `Prepare all tracks for editing` an. Diese Funktion kann entweder über das Menü `Podcast -> Prepare all tracks for editing` aufgerufen werden, oder der Soundcheck errinnert dich daran, falls du es vergessen haben solltest. `Prepare all tracks for editing` macht dabei die folgenden Dinge:
* Der Automatisierungsmodus <!--@Todo: schauen was das eigentlich ist --> für alle Spuren ist auf "Trimmen/Lesen" eingestellt.
* Alle Spuren und [Envelopes](https://pad.gwdg.de/XYgv66gbQwSYvFCMQm0WPA#Envelope) sind für die Aufnahme deaktiviert.
* Alle Verbindungen zu StudioLink (falls vorhanden) werden entfernt.
* Alle StudioLink FX (fall vorhanden) werden entfernt.
* Alle Soundboards (falls vorhanden) werden entfernt.
* StudioLink on Air (falls vorhanden) Streaming werden beendet.
* Alle Verbindungen zum Master Track werden eingeschaltet.
* das Routing wird auf den Schnitt-Modus geschaltet.

Beende vor dem Ausführen deine Aufnahme per [Stopp-Taste [30]](GUI-Gesamtuebersicht) und denk daran, dass durch Prepare for editing alle StudioLink Verbindungen beendet werden! Wenn du später doch noch etwas aufnehmen möchtest, kannst du die Spur wieder auf Aufnahme schalten und so etwas neu aufnehmen. Danach kannst du erneut `Prepare all tracks for editing` ausführen.

Zuätzlich kannst du jetzt noch in die Schnittansicht zu wechseln. Dafür kannst du Links am Rand unter `Views` auf die Schere [[17]](GUI-Gesamtuebersicht) drücken, im Menü `Podcast -> screenset editing` aufrufen oder `F9` drücken. Diese Ansicht bietet dir eine zusätzliche Übersicht über dein Projekt.

## Einfacher Schnitt
Wenn alles soweit vorbereitet ist, kannst du jetzt deine Aufnahmen schneiden. Dazu bietet dir Ultraschall zwei extrem effiziente Werkzeuge, mit denen du 90 % der Arbeit erledigen kannst. Lerne erst diese beiden Methoden, bevor zu die Reste mit den erweiterten Werkzeugen optimierst:

### 1. Schnitt über alle Spuren (Ripple cut)
<!-- @todo: (siehe XX) benennen -->
Mit dem Ripple Cut schneidest du über alle Spuren gleichzeitig. So verhinderst du, dass durch einen Schnitt die Spuren nicht mehr richtig übereinander liegen und sich verschoben haben. Um die Funktion zu nutzen, ziehst du im [Timeline-Bereich [23]](GUI-Gesamtuebersicht) eine Auswahl(siehe XX) über den Bereich auf den du schneiden möchtest, und klickst dann auf den Ripple-Cut-Button[[7]](GUI-Gesamtuebersicht) oder `STRG + X` beziehungsweise `CMD + X`.



### 2. Stummschalten störender Passagen (Mute)
<!--@TODO Screenshots einfügen -->
Wenn du Sequenzen aus deinen Spuren nicht herausschneiden willst, aber sie trotzdem nicht hörbar sein sollen, kannst du auch die Mute-Funktion nutzen. Dafür selektierst du die Spur(en) die du bearbeiten willst und klickst auf den Button Nummer XX. Damit öffnet sich unter der Spur die `Mute envelopes`. Die orangefarbene Verlaufsspur kannst du mit der Maus hoch oder runter ziehen. Mit einem Doppelklick erzeugst du weitere Editierpunkte. Alternativ kannst du eine Selektion über einen odere mehrere Tracks hinweg treffen und mit der Tastenkombination `STRG + Y` beziehungsweise `CMD + Y`, den ausgewählten Bereich muten.


Hältst du `STRG` gedrückt, kannst du statt mit einem Doppelklick, entweder mit einem einfachen Klick Editierpunkte erzeugen oder mit *drücken und halten* deine Verlaufsspur malen. Allerdings entstehen so sehr viele Verlaufspunkte die später nur schwer zu bearbeiten sind.

## Schnitt für Fortgeschrittene

### Split Items
Wie der Name schon sagt, kannst du hiermit ein Item in zwei Items aufteilen. Dafür setzt du den Edit-Curser<!-- @Todo name prüfen--> an die Stelle, an der du eine Trennung vornehmen willst und klickst dann auf den Split-Button[[5]](GUI-Gesamtuebersicht). Alernativ kannst du die Taste `S` drücken.
https://sendegate.de/t/faq-einfacher-schnitt-aller-spuren/6911

### Softer Fade-in und Fade-out
Wenn du gern am Anfang und oder Ende eine Sanfte Ein/abblenden der Lautstärken haben möchtest, kannst du mit der Maus über den Linken-oberen Rand des Items im [Timeline-Bereich [23]](GUI-Gesamtuebersicht) gehen. Dann siehst du schon, dass sich dein Mauszeiger in eine Kurve verändert hat. Jetzt kannst du mit der Maus klicken und halten und so eine Einblende ziehen. Diese kann beliebig lang sein. Das gleiche kannst du auch an jedem Item-Ende machen. Rechts oben mit der Maus und dann klicken und ziehen.
<!--@TODO Gif einfügen -->

### Kapitelmarken
<!-- @todo: Was passiert mit dem video?
https://www.youtube.com/watch?v=vdLpynu1ixE&t=5080s -->
In Ultraschall kannst du ganz einfach Kapitelmarken setzen, die dann später auch in den meisten Podcatchern auftauchen. In Ultraschall wird zwischen zwei Markenarten unterschieden: Kapitelmarker und Editmarker. Die Kapitelmarker können mit dem entsprechenden Button [[3]](GUI-Gesamtuebersicht) oder der Taste `m` gesetzt werden, diese sind die Marken die später im Podcatcher auftauchen. Zusätzlich gibt es noch die Editmarker, diese können mit dem Button [[4]](GUI-Gesamtuebersicht) oder `e` gesetzt werden. Diese sind nur für den Schnitt gedacht, um sich Stellen im Projekt zu markieren und werden nicht mit exportiert.

#### Markerdashbord
<!--@TODO: Fotos einfügen -->
Das Markerdashbord kannst du mit `alt+shift+m` oder einem Druck auf den entsprechenden Button [[19]](GUI-Gesamtuebersicht) links öffnen. Dort kannst du deine gesetzten Kapitelmarker verwalten und exportieren.

#### Region/Markermanager
Den Region- und Markermanager findest du im [Kapitelmarken-Bereich [28]](GUI-Gesamtuebersicht) unten rechts. Dort kannst du zwischen der [Routing Matrix [27]](GUI-Gesamtuebersicht), den [Filtern [26]](GUI-Gesamtuebersicht) und dem [Kapitelmarken-Manager [28]](GUI-Gesamtuebersicht) wechseln. Dort werden dir alle Marker - auch die Editmarker angezeigt. Mit einem Doppelklick auf den Namen, kannst du diese bearbeiten. In der lezten Spalte kannst du mit einem Doppelklick die Farbe des Markers auswählen.

#### Fotos
Du kannst zu Kapitelmarken zusätzlich Fotos hinzufügen die dann, wenn der Potcatcher das unterstützt, zum Kapitel angezeigt werden. Unterstütze Formate sind `.png` und `.jpg`. Die Fotos kannst du einfach per Drag & Drop in dein Projekt reinziehen und an der gewünschten Stelle ablegen. Zu jedem Bild musst du dann einen Kapitelmarker hinzufügen. Im Markerdashoard wirst du auch darauf hingewiesen, dass du noch einen Marker hinzufügen musst.

#### URLs
Analog zu Fotos kannst du auch URL hinzufügen. Dafür kannst du im Markerdashboard über das `+` unter `URL` eine Internetadresse einfügen.

### Button-Übersicht
![buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons.png)

Die Buttons [[1-8]](GUI-Gesamtuebersicht) links oben beeinflussen, was passiert, wenn du mit der Maus in den Spurenbereich klickst und bei gedrückter Maustaste ziehst: Wie auch in einem Textverarbeitungs- oder in einem anderen Schnittprogramm ist die Standardeinstellung, dass du dadurch einen Bereich selektierst. Du kannst dieses Verhalten jedoch ganz einfach ändern und an deine Arbeitsweise anpassen – oder auch mit gedrückter `ALT`- oder `CTRL`/`CMD`-Taste das Verhalten nur für die aktuelle Aktion ändern.

#### [1] und [2]: Ripple Editing
![buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-ripple-per-track.png)

Das Ripple-Verhalten bestimmt, was genau passiert, wenn du während der Bearbeitung ein Item auf einer Spur verschiebst (oder entfernst) – und ob und wie sich das auf andere Items auf demselben und den Tracks auswirkt:
- **Kein Ripple**: Die Buttons [1] und [2] sind nicht aktiv (grau); verschiebst du ein Item auf einer Spur, so hat das keine Auswirkungen auf andere Items oder Spuren.
- **Ripple per Track**: Der Button [1] ist aktiv (orange); verschiebst du ein Item, so verschieben sich auch alle nachfolgenden Items auf derselben Spur – hast du mehr als ein Item auf unterschiedlichen Spuren selektiert, so verschieben sich alle nachfolgenden Items auf allen betroffenen Spuren.
- **Ripple all Tracks**: Der Button [2] ist aktiv (orange – Button 1 wird an dieser Stelle ignoriert); verschiebst du ein Item auf einer Spur, so verschieben sich auch alle nachfolgenden Items auf allen Spuren.

Standardmäßig ist Ripple für alle Spuren deaktiviert (Buttons sind grau).

![Ripple Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/ripple-buttons.mp4)
**Screenshot** Audioteile verschieben


#### [3] und [4]: Marker

![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-markers.png)


Button [[3]](GUI-Gesamtuebersicht) setzt eine (unbenannte) Kapitelmarke an die aktuelle Position des Play-Cursors – Button [[4]](GUI-Gesamtuebersicht) setzt eine Edit-Marke. Mehr zum Thema Marken findest du im Abschnitt [Kapitelmarken](#Kapitelmarken).

#### [5]: Split
![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-split.png)

Button [[5]](GUI-Gesamtuebersicht) teilt ein Item an der aktuellen Cursor-Position. Mehr dazu findest du im Abschnitt [Split Items](#Split-Items).

#### [6]: Mouse Selection
![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-selection.png)

Der Umschalter [[6]](GUI-Gesamtuebersicht) aktiviert beziehungsweise deaktiviert den Maus-Selektionsmodus und beeinfluss so das Mausverhalten:
- **aktiviert**: Klickst du auf ein Item, hältst die Maustaste gedrückt und ziehst dann die Maus, selektierst du den betroffenen Bereich.
- **deaktiviert**: Klickst du auf ein Item, hältst die Maustaste gedrückt und ziehst dann die Maus, verschiebst du das ausgewählte Item.
<!-- @todo: Hier noch GIFs fürs bessere Verständnis einfügen -->

#### [7]: Ripple Cut
![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-ripple-cut.png)

Button [[7]](GUI-Gesamtuebersicht) entspricht der Tastenkombination `CMD`/`CTRL` + `X` – damit schneidest du den selektierten Bereich über alle Spuren hinweg aus deiner Aufnahme heraus. Alle nachfolgenden Items verschieben sich nach links, um die entstandene Lücke zu schließen.

#### [8]: Show Mute Envelopes
![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-show-mute-envelopes.png)

Button [[8]](GUI-Gesamtuebersicht) zeigt beziehungsweise versteckt die Mute-Envelopes aller Spuren. Im Abschnitt [Mute](#Mute) findest du mehr dazu.



### Verschieben von Items (Spurinhalten)
___
![Achtung](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/Aufnahme/assets/images/allgemein/Achtung.png =20x20)


**Achtung**: Willst du in der [Timeline [25]](GUI-Gesamtuebersicht) einzelne Elemente ("Items") auf deinen Spuren verschieben, solltest du extrem vorsichtig vorgehen – es passiert dabei sehr schnell, dass snychron aufgenommene Spuren dadurch "verrutschen". Beim Anhören wirst du feststellen, dass das Timing nicht mehr passt: Die Sprechenden fallen sich ins Wort, es entstehen Pausen, die in der Aufnahme nicht da waren, und so weiter.
___

Das Verhalten der einzelnen Items beim Verschieben wird durch die [Ripple-Einstellung](#Ripple-Editing) festgelegt. Du kannst jedoch das Ripple-Verhalten temporär nur für die aktuelle Aktion beeinflussen, indem du dabei `ALT`, `CTRL`oder `CMD` gedrückt hältst:
- **`ALT` (Mac/Windows/Linux) gedrückt halten und Item verschieben**: Du verschiebst nur das oder die selektierten Items.
-
![Ripple: Alt](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/ripple-key-alt.mp4)

- **`CMD` (Mac) beziehungsweise `CTRL` (Windows/Linux) gedrückt halten und Item verschieben**: Du verschiebst das oder die selektierten Items und ALLE Items dahinter.


![Ripple: Cmd](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/ripple-key-cmd.mp4)


### Audio-Inhalte nachträglich in das Projekt einfügen
Um weitere Sounds oder Aufnahmen in dein Projekt einzufügen, kannst du einfach die gewünschten Dateien per Drag & Drop in dein Projekt ziehen. Wenn du die Datei in den [Timeline-Bereich [25]](GUI-Gesamtuebersicht) an eine Stelle im Projekt ziehst, an der keine Spur ist, erstellt Reaper eine neue Spur mit dem Inhalt der Datei und benennt diese dann nach dem Dateinamen.


![Achtung](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Allgemein/Achtung.png?=20x20) **Achtung**:  Unter dem Menüpunkt `Edit -> Project Settings` kannst du einstellen wie Reaper mit diesen Mediendateien umgehen soll. Hier empfehlen wir auf jeden Fall die Einstllung `Copy media to project`. Am besten in den globalen Reaper Einstellungen unter `Options -> preferences` unter dem Punkt `Media`  das Kreuz bei `Copy imported media to project media directory` setzten. Sonst kann es passieren, dass du ungewollt Abhängigkeiten erschaffst, die dir später Probleme bereiten können.

### Ausschneiden, kopieren und einfügen
Um Audio innerhalb deines Projekts auszuschneiden oder zu kopieren, wählst du das zu kopierende Item oder setzt eine Zeit-Markierung. Klickst du dann mit der rechten Maustaste auf den gewählten Bereich (oder öffnest das `Edit`-Menü), kannst du entweder das Item kopieren (Standardverhalten; auch per `CTRL+C`oder `CMD+C`) oder den ausgewählten Bereich innerhalb eines Items. Ausschneiden funktioniert analog.

Um kopierte oder ausgeschnittene Inhalte wieder einzufügen, wählst du mit einem Klick in den linken [Spuren-Bereich [23]](GUI-Gesamtuebersicht) die Spur, auf der die Inhalte landen sollen. Anschließend setzt du den Cursor an die gewünschte Stelle und wählst `Paste` entweder über das `Edit` oder das Kontext-Menü oder via Tastenkombination `CTRL+V` beziehungsweise `CMD+V`.


![Copy and Paste](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/copy-and-cut.png)

### Double-Ender-Aufnahmen
Wenn deine Mitpodcastenden eine schlechte oder instabile Internetverbindung haben, ist es sinnvoll, in StudioLink sicherheitshalber eine lokale Spur mitlaufen zu lassen. Dafür klickst du in StudioLink auf den `Record` Button klicken. Die Spur die die Person für den Schnitt braucht ist heißt dann `local.flac`.

### Austauschen und Ausrichten von Spuren (zum Beispiel nach Double-Ender-Aufnahmen)


https://www.youtube.com/watch?v=vdLpynu1ixE&t=1853s

<!--## Tipps für erfolgreichen Schnitt -->
