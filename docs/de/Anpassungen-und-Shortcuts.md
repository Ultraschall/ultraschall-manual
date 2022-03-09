---
id: x
title: Anpassungen, Shortcuts und co.
tags:
  - x
  - x
---

[zurück zum Inhaltsverzeichnis...](https://pad.gwdg.de/t3uoZPBsTyigArO0yHq8jw#)
<!-- @todo: Blder auf  Git main umziehen -->
<!-- @todo: Links auf  Git main umziehen -->
<!-- @todo: Link auf Kapitel "Sonstiges" korrigieren -->
<!-- @todo: Bildunterschrifen hinzufügen-->
<!-- @todo: Die Nummern die im Kapitel "Übersicht über die Bedienelemente und Bereiched" verwedet werden sollten sich duch alle Dokumente ziehen -->
<!-- @todo: Gif loops nur bei Bedarf starten (Gif verändern) -->

# Anpassungen und Shortcuts
## Übersicht
Um deine Arbeitsweise zu beschleunigen, gibt es in Ultraschall zahlreiche Tastenkombinationen die dir das das Arbeiten vereinfachen können. Neben den bereits mitgelieferten, kannst du aber auch beliebige eigene Tastenkombinationen einrichten.

### Ultraschall Voreinstellungen
**Etliche Tastaturshortcuts sind nun auf global gesetzt**
Je nach Tastaturfokus konnte es sein, dass Tastaturshortcuts nicht reagiert haben oder anders reagiert haben, als man es gewohnt war. Jetzt sind viele Shortcuts so eingestellt, dass sie auch dann funktionieren, wenn man z.B. etwas im Soundboard angeklickt hat. Dies sollte typische Probleme lösen, wie das nicht reagieren von Shortcuts fürs Marker setzen.

**Übersicht sämtlicher Shortcuts**
Im neuen Menüpunkt „Help and Documentation“ im Podcast-Menü ist eine automatisch generierte, durchsortierte Liste sämtlicher (!) aktiver Shortcuts und Maus-Modifier zu finden

**Aktualisierte Tastaturschablone**
alle relevanten Shortcuts sind in einem praktischen PDF zu finden: http://url.ultraschall-podcast.de/keymap5
<!-- @todo: es gibt unterschiedliche Keymaps für die mac und win - Wir müssten die andere noch raussuchen  Anmerkung Gero: Win & Mac Tasten sind eingezeichnet die Befhele sind für mich eindeutig. Müssen wir wirklich noch etwas machen? -->

![Keymap](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Anpassungen-und-Shortcuts/keymap.jpg)

**Aktuellen Projekttab schließen**
ist auf dem Mac nun mit `cmd` + `w`

**Dynamic Split Items**
Die Funktion Dynamic Split Items ist nun wieder direkt über den Shortcut `cmd/strg` + `shift` + `d` zu erreichen

**Normalisierung**
Der Shortcut `opt` + `shift` + `n` normalisiert selektierte Items auf -23 LUFS.
Mit `cmd` + `shift` + `n`  wird jegliche Normalisierung aufgehoben.

### Navigation

**Trackpad-/Mausradfunktionen**
Trackpads und Mausrad kommen sich leider in den Belegungen in die Quere. Das Mausrad hat nun folgende Belegungen, die so auch in nahezu allen anderen Schnittprogrammen zu finden sind:

`Scroll` – Verikales Scrollen des [Timeline-Arbeitsbereichs [25]](GUI-Gesamtuebersicht)
`Scroll` + `Shift` – Horizontales Scrollen des [Timeline-Arbeitsbereichs [25]](GUI-Gesamtuebersicht)
`Scroll` + `Alt` – Horizontaler Zoom
`Scroll` + `cmd/strg` – Vertikaler Zoom
`Klick` + `Drag` – Freies Verschieben des [Timeline-Arbeitsbereichs [25]](GUI-Gesamtuebersicht)
`Klick` – Setzt den Edit-Cursor ohne Auswahl von Spuren/items

**Schnitte Prüfen**
Die Shortcuts `alt`+ `cmd`+ `left` und `alt` + `cmd` + `right` springen zur nächsten Itemkante (bei ausgewählten Tracks nur auf ebendiesen), springen dann noch um den in den Ultraschall-Settings angegebenen Wert des Previews zurück und spielen den Schnitt dann ab. Perfekt zum schnellen Kontrollieren aller Schnitte in einem Projekt.

**Zoom auf Auswahl und zurück**
Der Shortcut `shift` + `z` zoomt den Arrangeview auf eine Zeitauswahl oder auf selektierte Items. Die Auswahl wird dann aufgehoben. Bei nochmaligem Drücken wird auf die ursprüngliche Zoomstufe zurück gesprungen.

**Zoom auf Edit-Cursor**
Mit `cmd/strg` + `Pinch` auf dem Trackpad wird nicht an die Position des Mauszeigers gezoomt, sondern an die des Edit-Cursors.


### Eigene Shortcuts verwenden
(Dank an Mespotine mespotine.de für den Text und die Bilder)
<!-- @todo: Bei Mesopotine bob dieser Hweis entfallen kann-->

Um an das Menü für die Shortcuts zu gelangen, musst Du den Actions-Dialog öffnen, der im Menü `Actions` -> `Show Action list` zu finden ist.

Damit kannst Du die Shortcuts noch etwas individualisieren, wenn die Ultraschall-Standardeinstellungen für Shortcuts für Dich nicht ganz passen.

#### Global Shortcuts:
In diesem Beispiel wird ein neuer Shortcut( `Alt`+ `Eingabe`) erstellt, um die Project-Settings zu öffnen.
Suche hierfür die Action die Du anpassen möchtes in diesem Beispiel die „Project Settings“,
klicke den `Add…-Button` an und ein Dialog erscheint.

Im „Keyboard/MIDI/OSC Input“-Dialog tippe dann zuerst den Shortcut ein und wähle dann in der Scope-Dropdownliste „Global“ aus. Dann Ok, und der Shortcut ist gesetzt.

Du erkennst, dass dieser global ist, wenn unten in der Liste (global) neben dem Shortcut steht.

![Shortcuts Global](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Anpassungen-und-Shortcuts/globale_shortcuts.gif)

Wichtig ist hierbei darauf zu achten, dass Ihr in der Scope-Auswahlliste NICHT Global + text fields auswählt, sonst werden Eure Shortcuts auch dann ausgelöst, wenn Ihr irgendwo Texte eintippt. Und das wollt Ihr nicht.

#### Eigene Shortcuts anlegen und benutzen
In diesem Beispiel ist zu sehen wie der eben gesetzte Shortcut(`Alt`+ `Eingabe`) so geändet wird, dass er auf nicht-global gesetzt ist, also nur dann funktioniert, wenn der Tastaturfokus auf den [Spuren [23]](GUI-Gesamtuebersicht) oder dem [Mixer [24]](GUI-Gesamtuebersicht) liegt.

Im Actions-Dialog gibts oben einen praktischen Button `Find shortcut`.
Wenn Du diesen anklickst, kannst Du dort den Shortcut eingeben und Du wirst zu der Action weitergeleitet, die mit dem Shortcut verknüpft ist.

Im Beispiel also die `Alt`+ `Eingabe`, welches mit dem Öffnen der Project Settings verknüpft ist.

Danach machst Du im Prinzip das Gleiche wie eben:
Du klickst auf `Add…`
und gibst den Shortcut nochmal ein, also hier `Alt`+`Eingabe`.

Und dann achte darauf, dass in der Scope-Dropdownliste „Normal“ ausgewählt ist. Danach musst Du noch auf  `OK` klicken.

![Shortcuts Local](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Anpassungen-und-Shortcuts/lokale_shortcuts.gif)

Du erkennst ob der Shortcut richtig gesetzt ist, wenn in der Shortcut-Liste unten KEIN (global) mehr steht.

## Kontrollgeräte verwenden (Midi, OSC, etc.)
:::info
**Hinweis:** Alle Shortcuts können auch per Midi und OSC angesteuert werden. Hinweise dazu sind im Kapitel [Sonstiges](https://pad.gwdg.de/sLRAFF9eS0OwYFuobe_wZw#) zu finden:
:::
