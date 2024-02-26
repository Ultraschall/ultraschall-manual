---
id: bitfocus
title:  Räuspertasten mit dem Streamdeck und der Bitfocus-Companion-Software 
erstellt: 14.9.22
---

Der [Bitfocus Companion](https://bitfocus.io/companion/) ist eine Software-Alternative, um die großartigen [Streamdecks](https://www.elgato.com/de/stream-deck) von Elgato nicht mit der (beschränkten) mitgelieferten Software zu betreiben – und die ist nicht nur open source, sondern hat auch noch einen Haufen Schnittstellen (und sie lässt sich als Plugin sogar zusammen mit der Elgato-Software verwenden). 

Die Companion-Konfiguration, um ein Streamdeck etwa als Räuspertaste zu verwenden, hat ein paar Fallstricke, mit dieser Anleitung ist sie aber kein Problem:

## 1. Bitfocus-Software einrichten

Startest du die Software, erscheint ein Splashscreen, der dir Zugriff auf die grundlegende Netzwerkkonfiguration gibt. Bei dir steht da vermutlich als Port `8000` (um möglichen Konflikten mit anderen Programmen vorzubeugen, ändern wir das für dieses Tutorial auf  `8888` – du kannst es aber auch auf `8000` belassen). Das `GUI-Interface` lassen wir auf  `localhost: 127.0.0.1`  stehen; falls du aber Ultraschall und das Streamdeck *nicht* auf demselben Rechner verwenden willst, trägst du hier die Adresse des Netzwerkinterfaces ein, an dem **Bitfocus Companion** im Netzwerk erreichbar sein soll. 

![](@site/assets/images/Tutorials/Bitfocus/launch-gui.png)

Unter: [http://127.0.0.1:8888](http://127.0.0.1:8888) (dieser Link geht natürlich nur, falls du denselben Port verwendet hast wie hier im Beispiel) läuft nach einem Klick auf `Launch GUI` nun die grafische Oberfläche der Companion-Software – und wird praktischerweise direkt in deinem Standardbrowser geöffnet. 

:::info:Info
Macos-Nutzende aufgepasst: Die Software läuft nur in der Menubar, nicht aber im Dock (= sie hat kein Icon unten in der Programmleiste) – verliert das Programm einmal den Fokus, musst du es über das Icon in der Menüleiste wieder in den Vordergrund holen. 
:::

Damit haben wir die grafische Bedienoberfläche eingerichtet – es fehlt noch die Konfiguration in Richtung Ultraschall: Dazu wechselst du in die GUI unter http://127.0.0.1:8888.

![](@site/assets/images/Tutorials/Bitfocus/welcome.png)

Klick dich einmal durch den Wizard und wechsel dann auf den Reiter `Connections`. Rechts über die Suche unter `Add connection` fügst du einmal die Reaper-Integration hinzu – und, falls du auch etwas ausgefallenere Kommandos über das Streamdeck an Ultraschall schicken willst, außerdem auch noch die generische OSC-Integration. Danach sollte der `Connections`-Tab ungefähr so aussehen:

![](@site/assets/images/Tutorials/Bitfocus/connections.png)

Für Reaper benötigst du folgende Einstellungen, die du nach einem Klick auf `Edit` einträgst:

- `Target IP`: `127.0.0.1` (für den Fall, dass Bitfocus und Ultraschall auf demselben Rechner laufen)
- `Target Port`: `8002` (hier hast du freie Wahl, aber merk dir den Port, den brauchen wir gleich nochmal)
- `Feedback Port`: `9001` (damit Reaper auch Informationen an das Streamdeck zurückschicken kann; bitte ebenfalls gut merken)

![](@site/assets/images/Tutorials/Bitfocus/reaper-config.png)

Für die (optionale) OSC-Integration brauchst du ebenfalls die (lokale) IP und einen Port (ja, denselben wie für Reaper):

- `Target IP`: `127.0.0.1` (siehe oben)
- `Target Port`: `8002` (siehe oben)

![](@site/assets/images/Tutorials/Bitfocus/osc-config.png)

So. Alles einmal speichern und dann ab nach Ultraschall!

## 2. Ultraschall einrichten

In Ultraschall öffnest du die Einstellungen und gehst dort auf `Control/OSC/Web`. Die Liste rechts ist bei dir entweder leer oder hat schon ein `Web browser interface` eingerichtet – das kannst du getrost ignorieren, wir nutzen das hier in diesem Tutorial nicht (es stört uns aber auch nicht).

![](@site/assets/images/Tutorials/Bitfocus/ultraschall-config.png)

Klick hier auf `Add` und wähl im Dropdown bei `Control surface mode` die Einstellung `OSC (Open Sound Control)`.

Den `Mode` stellst du auf `Configure device IP+local port` – das gibt dir Zugriff auf die relevanten Felder für die Netzwerk-Konfiguration. Als `Device port` setzt du den `Feedback port` aus der [Bitfocus-Konfiguration](#1-bitfocus-software-einrichten), als `Device IP` lässt du einfach die `0.0.0.0` stehen (= steht für alle IP-Adressen dieses Rechners). Der `Local listen port` entspricht dem `Target port` aus der OSC- beziehungsweise der Reaper-Einstellung in Bitfocus. Die lokale IP ist vorausgefüllt und passt – du könntest hier aber auch das lokale Alias `127.0.0.1` eintragen.

![](@site/assets/images/Tutorials/Bitfocus/ultraschall-config-2.png)

Praktisch: Du kannst die Einstellungen direkt testen, wenn du auf `Listen` klickst und dir dann deine Fenster so hinschiebst, dass du sowohl das eben aufgepoppte `Listen`-Fenster von Ultraschall siehst als auch die Oberfläche des Companion. (Dort fehlt uns allerdings noch die Tastenbelegung aus Schritt 3.). 

## 3. Tasten belegen

Wir wechseln in der [Bitfocus-GUI](http://127.0.0.1:8888/buttons) auf den Reiter `Buttons`. Dort klickst du auf eines der schwarzen, leeren Felder und legst dir dort zum Test einen `Regular button` drauf. Vergib einen Text und such dir dann unter `Press actions` zum Beispiel `Track mute` und als `Release actions` ein `Track unmute`. Tada, so einfach hast du eine Mute-Taste mit Push-to-Mute-Funktionalität gebaut!

![](@site/assets/images/Tutorials/Bitfocus/buttons-2.png)

Über den Button `Test actions` kannst du die Belegung direkt ausprobieren (oder du drückst auf einem angeschlossenen Streamdeck auf den entspprechenden Knopf) – woraufhin im `Listen`-Fenster drüben in Ultraschall die entsprechende Aktion auftauchen sollte. Hier nochmal die Ultraschall-Konfiguration und der Test als Video:

![](@site/assets/images/Tutorials/Bitfocus/ultraschall-bitfocus.gif)

Der Rest ist im Grunde selbsterklärend und hängt von deiner Aufnahmesituation und deinen Streamdecks ab – jetzt solltest du aber keine Schwierigkeiten haben, für mehrere Tracks mehrere Mute-Tasten anzulegen. Bei mehreren Streamdecks gilt es aber noch ein Problem zu lösen ... 

## 4. Aufnehmen!

Das Bedienkonzept bei Bitfocus ist ein anderes als bei Elgato: Hast du mehr als ein Streamdeck angeschlossen, läuft auf allen dieselbe Konfiguration (falls du einen Weg kennst, unterschiedliche Konfifurationen laufen zu lassen, meld dich gerne!). Das hat den Vorteil, dass du nicht aufzupassen brauchst, wer bei der Aufnahme welches Gerät in die Hand nimmt – kommt dafür aber mit dem Nachteil, dass alle bei der Aufnahme darauf achten müssen, dass sie auf die richtige Mute-Taste für genau ihre jeweilige Spur drücken.

Immerhin kannst du aber in den `Surface`-Einstellungen (mehrere Streamdecks tauchen neben dem Webinterface als mehrere `Surfaces` im GUI auf) festlegen, welches Gerät welche Seite nach dem Anschließen anzeigen soll:

![](@site/assets/images/Tutorials/Bitfocus/screens.png)

**Von daher folgende Empfehlung**: Leg dir für jedes Streamdeck und damit jede Person eine eigene Seite an. Dort kannst du neben weiteren Shortcuts beispielsweise auch Buttons hinzufügen, um während der Aufnahme Marker zu setzen – oder eben einen Knopf, um die Spur der zugehörigen Person stummzuschalten. 

Alternativ behilfst du dir mit einer Weiche mitsamt Sprungmarken, um vom Startbildschirm aus die individuellen Seiten aufzurufen. Das kann beispielsweise so aussehen:

![](@site/assets/images/Tutorials/Bitfocus/shortcut.png)

![](@site/assets/images/Tutorials/Bitfocus/shortcut-2.png)

## Vorteile gegenüber der Software von Elgato

Die Software von Bitfocus ist insgesamt umfangreicher als die von Elgato – und leichter zu individualisieren. Über die  `Custom Action` der Reaper-Integration kannst du beispielsweise alles triggern, was in der `Action List` in Ultraschall auftaucht; und das ist so ziemlich jede Programmfunktion bis hin zur Ausführung von eigenen Lua-Skripten. Die zu einer Action passenden `Action Command ID` findest du heraus, indem du nach einem Rechtsklick auf die betreffende Action den entsprechenden Menüpunkt aus dem Kontextmenü auswählst:

![](@site/assets/images/Tutorials/Bitfocus/action-id.png)

Gibt es eine Funktion nicht vorgefertigt in der Reaper-Integration (die Liste im Bitfocus Companion ist tatsächlich eher übersichtlich), kannst du immer noch einfach die OSC-Schnittstelle nutzen, die wir vorhin in diesem Tutorial mit angelegt haben. Was die OSC-Schnittstelle nämlich bietet, das die `reaper: Custom Action` nicht bietet: Zusätzlich zu einem Befehl auch noch einen Wert mitschicken. Im Zusammenspiel mit den Variablen-Funktion im Bitfocus Companion kannst du so etwa Marker mit Beschriftung setzen oder anderes abgefahrenes Zeug zusammenbauen. Dazu dann beizeiten an anderer Stelle mehr.
