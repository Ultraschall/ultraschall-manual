> [][zurück zum Inhaltsverzeichnis...](https://pad.gwdg.de/t3uoZPBsTyigArO0yHq8jw#)

# Installation

## Reaper installieren

Um Ultraschall zu installieren, muss vorher REAPER installiert werden. Die Installationsanleitung für REAPER findest Du unter [REAPER Handbuch](http://reaper.fm/userguide.php)

## Ultraschall installieren

Ultraschall ist für Windows, macOS und Linux verfügbar, die Installationsschritte sind aber für jedes Betriebssystem unterschiedlich. Aktuelle Hinweise zur Installation findest du auf der [Ultraschall Webseite](https://ultraschall.fm/install/).

### macOS

### Windows

### Linux

### Installation unter Windows

#### 1. REAPER 6.27 aktualisieren / installieren

:::info
[REAPER 6.2.7 herunterladen](https://www.reaper.fm/files/6.x/reaper627_x64-install.exe)
:::

Das Projekt Ultraschall erweitert die Musiksoftware REAPER. Ultraschall 5 läuft nur mit der Version REAPER 6.27.

Die .exe laden und starten, dann REAPER installieren bzw. auf die Version 6.27 aktualisieren. Achtung: Bitte unbedingt in das empfohlene Standard-Verzeichnis installieren. Ändert man den Zielort der Installation, wird Ultraschall nicht funktionieren!
:::warning
Der Einsatz jeder anderen Version von REAPER führt dazu, dass das Ultraschall-Plugin nicht gestartet wird. Von einem manuellen Update von REAPER auf eine andere Version als 6.27 ist daher zwingend abzusehen
:::

#### 2. Ultraschall laden und den Ultraschall-Installer starten

Unsere Ultraschall 5.1.0 Distribution laden und das .msi starten:
:::info
[Ultraschall 5.0.3 herunterladen](http://url.ultraschall-podcast.de/us503win)
:::
Den Installer starten und durchlaufen lassen.

<!-- TODO Verschieben nach Einrichtung und erste Schritte -->
#### 3. StudioLink und das Ultraschall-Soundboard verbinden

Unser integriertes Soundboard zum Einspielen von Jingles und Ähnlichem, sowie StudioLink (als Alternative zu Skype-Remoterecordings) und StudioLink OnAir wird automatisch installiert. Man muss dies jedoch REAPER einmalig nach der Installation mitteilen:

Im Menü Options | Preferences… | Plug-ins | VST anwählen. Nun links oben den Button Re-scan... drücken und im Dropdown Re-scan VST paths for new/modified Plug-ins anwählen. Wenn eigene – etwa dazugekaufte – Effekte fehlen sollten, den Butten rechts Edit path list... wählen und dann Add system VST paths. Danach wieder den Re-scan nutzen.

#### 4. Erfolg der Installation kontrollieren

* Bei Fehlermeldungen bitte prüfen, ob wirklich die Version 6.27 von REAPER 64-Bit installiert wurde (Schritt 1). Im Zweifel REAPER noch einmal installieren.
* Es kann weiterhin helfen, den Rechner neu zu starten.
* Sollten sämtliche dieser Maßnahmen nicht zum Erfolg führen, kann man Hilfe in unserem Anwender-Forum erbitten: Ultraschall im Sendegate
* Zur Handhabung der neuen Funktionen empfehlen wir die Release-Screencast in unserem Tutorial Bereich.
* In unserem FAQ-Bereich werden häufig gestellte Fragen zu Installation und Anwendung beantwortet.
<!-- </details> -->

### Installation unter Mac OS

<!-- <details>
<summary>Anleitung aufklappen...</summary> -->

#### 1. Reaper 6.27 installieren
Ultraschall 5 läuft nur mit der Version REAPER 6.27.
Seit Version 6 wird für REAPER eine spezielle Version angeboten, die für alle MacOS ab Catalina zusätzliche Lizensierungen enthält. Es ist unbedingt die passende Version zu wählen:
[REAPER Version v6.27 OS X 64-bit herunterladen](https://www.reaper.fm/files/6.x/reaper627_x86_64.dmg)
[REAPER Version v6.27 OS X 64-bit Catalina/Big Sur herunterladen](https://www.reaper.fm/files/6.x/reaper627_x86_64_catalina.dmg)
[REAPER Version v6.27 OS X 64-bit ARM für Apple Silicon herunterladen](https://www.reaper.fm/files/6.x/reaper627-beta_arm64.dmg)
:::warning
Der Einsatz jeder anderen Version von REAPER führt dazu, dass das Ultraschall-Plugin nicht gestartet wird. Von einem manuellen Update von REAPER auf eine andere Version als **6.27** ist daher zwingend abzusehen.
:::

Eine Testversion von REAPER ist uneingeschränkt 60 Tage lauffähig, danach fallen einmalig 52 € Kosten an.

#### 2. Ultraschall laden

Unsere Ultraschall 5.0.3 Distribution laden und das .dmg mit einem Rechtsklick und Öffnen starten:

:::info
[Ultraschall 5.0.3 herunterladen](http://url.ultraschall-podcast.de/us503mac)
:::

Für den unwahrscheinlichen Fall, dass die Datei nicht geladen wird, probieren Sie bitte einen anderen Webbrowser aus.

#### Den Ultraschall-Installer starten
Im sich öffnenden Fenster unser Installationsprogramm Ultraschall-5.0.pkg mit der rechten Maustaste anklicken und Öffnen auswählen. Starten und durchlaufen lassen. Falls Warnhinweise bzgl. der Vertrauenswürdigkeit der Software erscheinen sollten:

![](https://pad.gwdg.de/uploads/upload_10e210dac2db5a0d663311b8d5f9d3fa.png)

bitte in den Systemeinstellungen von MacOS im Bereich Sicherheit & Datenschutz im Reiter Allgemein unten das Öffnen der .pkg Datei erlauben. Dies ist ein einmaliger Vorgang.

Danach die REAPER.app aus dem Programmverzeichnis starten – Ultraschall 5 startet.

:::warning
Sollte die Installation am Ende eine Fehlermeldung ausgeben, bitte einmal macOS neu booten und den Installer erneut durchlaufen lassen.
:::

#### 4. Erfolg der Installation kontrollieren

* REAPER starten.
* Bei weiteren Fehlermeldungen bitte prüfen, ob wirklich die Version 6.27 64-Bit von REAPER installiert wurde (Schritt 1). Im Zweifel REAPER noch einmal installieren.
* Zur Handhabung der neuen Funktionen empfehlen wir die Release-Screencast in unserem Tutorial Bereich.
* In unserem FAQ-Bereich werden häufig gestellte Fragen zu Installation und Nutzung beantwortet.

<!--</details> -->
### Linux
Ultraschall für Linux befindet sich noch in der Beta-Phase. Ein paar von uns nutzen es aber schon für ihre Podcastaufnahmen und haben bis auf bekannt Einschränkungen keine Probleme.

#### bekannte Einschränkungen
* kleine GUI-Probleme mit unlesbarer Schrift (kann angepasst werden)
* der Ultraschall-Exportdialog funktioniert noch nicht, stattdessen kann der von Reaper verwendet werden
* Kapitelmarken können nicht in die Datei integiert werden. Exportiert werden können Sie über das Menü „Extensions -> Marker utilites -> Marker List“ und dann Rechtsklick auf das Fenster und „Export formatted marker list to file“ exportieren. Das Format kann unter „Export format...“ festgelegt werden. Podlove nimmt da „ap d“ oder „aT d“. Auphonic nimmt nur „aT d“.
* Das Soundboard und StudioLink müssen extra als VST Plugin installiert werden. Dazu die Dateien herunterladen und unter ```~.vst3``` ablegen.


#### Voraussetzung
Für die Installation von Ultraschall muss Reaper installiert werden. Dazu Reaper [HIER](https://www.reaper.fm/download.php) herunterladen. Wahrscheinlich brauchen Sie die Version für  ```Linux x86-64/AMD64 64-bit ```. Das heruntergeladene Archive *.tar.xz* mit einem rechtsklickt entpacken. (je nach Betriebssystem unterschiedlich). In dem entpackten Ordner finden Sie in der Datei **readme-linux.txt** alle weiteren Informationen. Um Reaper fest zu installieren das script ```install-reaper.sh``` im Terminal mit:


## Updates

## Fehlerbehebung

### Windows

Aus Kostengründen können wir das Installer-Paket nicht signieren. Es ist daher wahrscheinlich, dass eine Sicherheitswarnung angezeigt wird:
Den Installer starten und durchlaufen lassen.

![alt_text](https://pad.gwdg.de/uploads/upload_4b56d355964204e8eaa8aa08397122bc.png)

Über den Link „Weitere Informationen“ erhält man die zu wählende Option „Trotzdem ausführen“.


### macOS

* Wenn man auf einem Apple Silicon M1 Rechner keinen Ton über das Mikrofon einfangen kann, bitte diese Schritte ausführen:
    * Die „klassische“ Version von REAPER laden: Download
    * Das DMG öffnen und einmal direkt die REAPER.app starten (muss nicht in den Applications-Ordner gezogen werden)
    * Aus dem Podcast-Menü den Eintrag „Insert and arm new audio track“ auswählen. Es sollte jetzt ein Dialog erscheinen, der die Rechtefreigabe von Mikrofonen für REAPER ermöglicht.
    * REAPER schließen, das DMG kann wieder gelöscht werden, die Freigabe sollte nun auch für die ARM-Version funktionieren. Für weitere Fragen bitte die FAQ im Sendegate konsultieren.
* Falls immer noch Probleme auftreten oder eine sehr alte Installation (vor 3.0) aktualisiert werden soll, empfiehlt es sich, die im .dmg liegenden Skripte Uninstall.command sowie Remove legacy audio devices.command durchlaufen zu lassen und den Rechner neu zu starten. Danach die Schritte 1 bis 3 wiederholen.
* Sollten sämtliche dieser Maßnahmen nicht zum Erfolg führen, kann man Hilfe in unserem Anwender-Forum erbitten: Ultraschall im Sendegate
