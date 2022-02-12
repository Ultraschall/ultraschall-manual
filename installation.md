> [zurück zum Inhaltsverzeichnis...](https://pad.gwdg.de/t3uoZPBsTyigArO0yHq8jw#)

# 1. Installation

## Reaper installieren

Ultraschall setzt die Installation der Digital Audio Workstation (DAW) REAPER voraus. Die Installationsanleitung für REAPER findest du im [REAPER-Handbuch](http://reaper.fm/userguide.php). Weil Ultraschall immer nur auf eine bestimmte Porgrammversion von REAPER hin optimiert ist, beachte bitte unbedingt die aktuellen Versionshinweise in der Installationsanleitung von Ultraschall! 

:::info
Diese Installationsanleitung bezieht sich auf die Version 5 von Ultraschall – sie setzt REAPER in der Version 6.27 voraus!
:::

## Ultraschall installieren

Ultraschall ist für Windows, macOS und Linux verfügbar, die Installationsschritte sind aber für jedes Betriebssystem unterschiedlich. Aktuelle Hinweise zur Installation findest du auf der [Ultraschall-Webseite](https://ultraschall.fm/install/).

- [Installation unter Windows](#installation-unter-windows)
- [Installation unter macOS](#installation-unter-macOS)
- [Installation unter Linus](#installation-unter-linux)
- [Update](#updates)
- [Fehlerbehebung](#fehlerbehebung)

### Installation unter Windows

#### 1. REAPER 6.27 installieren beziehungsweise aktualisieren

:::info
[REAPER 6.2.7 herunterladen](https://www.reaper.fm/files/6.x/reaper627_x64-install.exe)
:::

Lad dir den Installer in der richtigen Version von der Cockos-Webseite herunter und führe ihn aus. 

:::warning
Der Einsatz jeder anderen Version von REAPER führt dazu, dass das Ultraschall-Plugin nicht gestartet wird. Ein manuelles Update von REAPER auf eine andere Version als **6.27** ist daher auf keinen Fall empfohlen!
:::

:::warning
Achtung: Bitte verwende unbedingt das empfohlene Standard-Verzeichnis. Änderst du den Zielort der Installation, wird Ultraschall nicht funktionieren!
:::

Die Testversion von REAPER ist uneingeschränkt 60 Tage lang lauffähig, danach fallen einmalig 60 US-Dollar für private beziehungsweise 225 US-Dollar für kommerzielle Nutzung an.

#### 2. Ultraschall laden und den Ultraschall-Installer starten

:::info
[Ultraschall 5.0.3 herunterladen](http://url.ultraschall-podcast.de/us503win)
:::

Lad dir Ultraschall in Version 5.0.3 herunter, starte den Installer und lass ihn einmal komplett durchlaufen.

<!-- [ ] ToDo: Verschieben nach Einrichtung und erste Schritte -->

#### 3. StudioLink und das Ultraschall-Soundboard verbinden

Unser integriertes Soundboard zum Einspielen von Jingles und anderen Tönen sowie StudioLink (als Alternative zu Skype-Remote-Aufnahmen) und StudioLink OnAir werden automatisch mitinstalliert. Nach der Installation musst du das deiner REAPER-Installation jedoch einmalig beibringen.

Wähl im Menü `REAPER` oder `Options` die Option `Preferences...` und dort den Punkt `Plug-ins`>`VST`. Drück anschließend links oben den Button `Re-scan...` und wähl im Dropdown-Feld `Re-scan VST paths for new/modified Plug-ins`. 

Falls eigene – zum Beispiel dazugekaufte – Effekte fehlen, nutz den Butten rechts `Edit path list...` und wähl dort `Add system VST paths`. Nach einem nochmaligen Klick auf `Re-scan...` sollten die Effekte vollständig sein.

#### 4. Erfolg der Installation kontrollieren

* Prüf bitte bei Fehlermeldungen, ob in Schritt 1 wirklich die Version 6.27 von REAPER (64-Bit) installiert wurde. Im Zweifel entfern REAPER noch einmal und installier es neu.
* Have you tried turning it off and on again? Es kann tatsächlich helfen, den Rechner neuzustarten.
* Im Abschnitt [Fehlerbehebung](#Fehlerbehebung) findest du weitere Schritte, die du unternehmen kannst.
* Sollte keine dieser Maßnahmen zum Erfolg führen, bitte gerne im Anwender-Forum um Hilfe: [Ultraschall im Sendegate](https://sendegate.de/c/ultraschall/5).
* Zur Handhabung der neuen Funktionen empfehlen wir dir den Release-Screencast im [Tutorial-Bereich](https://ultraschall.fm/tutorials/) der Ultraschall-Webseite.

<!-- [ ] ToDo: Wo soll der sein?? => 
* Im FAQ-Bereich werden häufig gestellte Fragen zu Installation und Anwendung beantwortet.
-->

### Installation unter macOS

#### 1. Reaper 6.27 installieren beziehungsweise aktualisieren
Ultraschall 5 läuft nur mit REAPER in der Version 6.27. Seit Version 6 wird für REAPER eine spezielle Version angeboten, die für alle macOS-Systeme ab Catalina zusätzliche Lizenzen enthält. Achte also bitte darauf, die für dein System passende Version zu wählen:

- [REAPER Version v6.27 OS X 64-bit herunterladen](https://www.reaper.fm/files/6.x/reaper627_x86_64.dmg)
- [REAPER Version v6.27 OS X 64-bit Catalina/Big Sur herunterladen](https://www.reaper.fm/files/6.x/reaper627_x86_64_catalina.dmg)
- [REAPER Version v6.27 OS X 64-bit ARM für Apple Silicon herunterladen](https://www.reaper.fm/files/6.x/reaper627-beta_arm64.dmg)

:::warning
Der Einsatz jeder anderen Version von REAPER führt dazu, dass das Ultraschall-Plugin nicht gestartet wird. Ein manuelles Update von REAPER auf eine andere Version als **6.27** ist daher auf keinen Fall empfohlen!
:::

Die Testversion von REAPER ist uneingeschränkt 60 Tage lang lauffähig, danach fallen einmalig 60 US-Dollar für private beziehungsweise 225 US-Dollar für kommerzielle Nutzung an.

#### 2. Ultraschall laden
:::info
[Ultraschall 5.0.3 herunterladen](http://url.ultraschall-podcast.de/us503mac)
:::

Lad dir Ultraschall in Version 5.0.3 herunter, starte den Installer und lass ihn einmal komplett durchlaufen. Für den unwahrscheinlichen Fall, dass die Datei nicht über den obigen Link geladen werden kann, versuch es bitte mit einem anderen Webbrowser.

#### Den Ultraschall-Installer starten
Klick im sich öffnenden Fenster unser Installationsprogramm Ultraschall-5.0.pkg mit der rechten Maustaste an und wähle `Öffnen` aus – folg anschließend den Anweisungen auf dem Bildschirm. Falls Warnhinweise bezüglich der Vertrauenswürdigkeit der Software erscheinen sollten, erlaub bitte in den Systemeinstellungen deines macOS im Bereich `Sicherheit & Datenschutz` im Reiter `Allgemein` unten das Öffnen der .pkg-Datei erlauben. Dies ist ein einmaliger Vorgang.

![](https://pad.gwdg.de/uploads/upload_10e210dac2db5a0d663311b8d5f9d3fa.png)

Starte danach `REAPER.app` aus dem Programmverzeichnis.

:::warning
Sollte die Installation am Ende eine Fehlermeldung ausgeben, boote bitte einmal macOS neu und lass den Installer ein weiteres Mal durchlaufen.
:::

#### 4. Erfolg der Installation kontrollieren

* Starte REAPER.
* Kommt es zu Fehlermeldungen, prüf bitte, ob du wirklich die Version 6.27 64-Bit von REAPER installiert hast (Schritt 1). Im Zweifel installier REAPER noch einmal neu.
* Im Abschnitt [Fehlerbehebung](#Fehlerbehebung) findest du weitere Schritte, die du unternehmen kannst.
* Sollten die Maßnahmen nicht zum Erfolg führen, bitte gerne im Anwender-Forum um Hilfe: [Ultraschall im Sendegate](https://sendegate.de/c/ultraschall/5).
* Zur Handhabung der neuen Funktionen empfehlen wir dir den Release-Screencast im [Tutorial-Bereich](https://ultraschall.fm/tutorials/) der Ultraschall-Webseite.

### Installation unter Linux
Ultraschall für Linux befindet sich offiziell noch in der Beta-Phase. Einige, dem Ultraschall-Projekt Nahestehende nutzen es aber schon für ihre Podcastaufnahmen und haben bis auf einige wenige bekannte Einschränkungen keine Probleme:

#### bekannte Einschränkungen
* wenige Stellen mit unlesbarer Schrift im GUI – das kann aber angepasst werden
* streikender  Ultraschall-`Export`-Dialog – verwende stattdessen einfach den `Export`-Dialog von REAPER
* Fehler bei der Übernahme der Kapitelmarken in die Audiodatei – die Kapitelmarken können nur über das Menü `Extensions`>`Marker utilites`>`Marker List` und dann einen Rechtsklick auf das Fenster und Auswahl von `Export formatted marker list to file` exportiert werden. Unter `Export format...` wählst du das gewünschte Exportformat (Hinweis: Podlove verwendet `ap d` oder `aT d`, Auphonic nur `aT d`).
* Soundboard und StudioLink erforden eine Extrainstallation als VST-Plugin – lad dir dazu die entsprechenden Dateien herunter und leg sie unter ```~.vst3``` ab.

<!-- [ ] Wo lädt man die herunter? Stimmt der Pfad zum Ablegen? Ode rmüsste das ~/.vst3 heißen? -->

#### Voraussetzung
Ultraschall setzt die Installation von REAPER voraus. Lad dir dazu die Linux-Version von [REAPER](https://www.reaper.fm/download.php) herunter (wahrscheinlich `Linux x86-64/AMD64 64-bit`). Entpack das heruntergeladene Archiv und folge den Installationsanweisungen, die du im eben entpackten Ordner in der Datei `readme-linux.txt`findest. Führ das Skripts `install-reaper.sh` im Terminal aus, um die Installation zu starten. Folg dann den Anweisungen auf dem Bildschirm.

## Updates
<!-- [ ] ToDo: ergänzen -->

## Fehlerbehebung

### Windows

Aus Kostengründen signieren wir das Installer-Paket nicht. Daher wird dir sehr wahrscheinlich bei der Installation folgende Sicherheitswarnung angezeigt wird:

![Sicherheitswarnung-Windows](https://pad.gwdg.de/uploads/upload_4b56d355964204e8eaa8aa08397122bc.png)

Du kannst den Installer trotzdem starten und durchlaufen lassen, indem du erst auf den Link `Weitere Informationen` klickst und dort die Option `Trotzdem ausführen` wählst.

### macOS

* Wenn du auf einem Rechner mit Apples Silicon-M1-Prozessor keinen Ton über das Mikrofon einfangen kannst, führ diese Schritte aus:
    1. Lad dir die "klassische" Version von [REAPER](https://www.reaper.fm/download.php) herunter.
    2. Öffne die .dmg-Datei und starte direkt einmal `REAPER.app` (du brauchst die Datei dafür nicht in deinen Programm-Ordner zu verschieben).
    3. Wähl aus dem `Podcast`-Menü den Eintrag `Insert and arm new audio track`. Es sollte jetzt ein Dialog erscheinen, der die Rechtefreigabe von Mikrofonen für REAPER ermöglicht.
    4. Schließ REAPER. Du kannst die .dmg-Datei wieder löschen – die Mikrofon-Freigabe sollte nun auch für die ARM-Version dauerhaft funktionieren. Falls nicht, helfen dir vielleicht die FAQ im [Sendegate](https://sendegate.de/c/ultraschall/5) weiter.
* Falls immer noch Probleme auftreten oder eine sehr alte Installation (vor 3.0) aktualisiert werden soll, führ am besten vorher das `Uninstall.commande`-Skript aus, das dem Installationsarchiv (.dmg) beiliegt. Bitte lass außerdem auch das Skript `Remove legacy audio devices.command` einmal durchlaufen. Starte anschließend den Rechner neu. Danach wiederhol bitte die Schritte 1 bis 4.
* Sollte keine dieser Maßnahmen zum Erfolg führen, bitte gerne im Anwender-Forum um Hilfe: [Ultraschall im Sendegate](https://sendegate.de/c/ultraschall/5).
* Zur Handhabung der neuen Funktionen empfehlen wir dir den Release-Screencast im [Tutorial-Bereich](https://ultraschall.fm/tutorials/) der Ultraschall-Webseite.
