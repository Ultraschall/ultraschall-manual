---
id: mithelfen-und-community
title: Mithelfen und Community
lektorat:
    - Lektorat: todo
    - Schlusskorrektur: todo
tags:
    - mithelfen
    - community
---

Ultraschall ist ein Projekt von Leuten in ihrer Freizeit. Das aktive Team beteht aktuell nur aus einer Handvoll an Leuten. Daher sind wir immer auch der Suche nach neuen Leuten, die Lust haben, in das Projekt einzusteigen und neue Ideen mitbringen. Wir wollen hier einen Einblick darüber geben, wie man am besten loslegt mit Ultraschall.

Ultraschall besteht aus mehreren Komponenten, die unterschiedliche Techniken und daher auch unterschiedliche Kenntnisse brauchen. Grob gesagt gibt es die folgenden Bereiche: 
- Ultraschall Plugin
    - beinhaltet die ganze Entwicklung des Plugins für Reaper. Hier wird sogut wie alles in der Skriptsprache Lua geschrieben. Lua ist eine recht gut erlernbare Programmiersprache.  
    - aktuell arbeiten hauptsächlich [Ralf](https://github.com/rstockm) und [Mesopotine](https://github.com/mespotine) daran
    - [Link zum Github Repository](https://github.com/Ultraschall/ultraschall-portable)
- Ultraschall Installer
    - Das Plugin muss irgendwie auf den Rechner kommen. Dafür gibt es seit einiger Zeit einen eigenen Installer. Der Installert ist für jedes Betriebssystem anders und braucht daher unterschiedliche Techniken größtenteils Shell-Skripte, aber auch anderes. 
    - aktuell arbeitet hier hauptsächlich [Heiko](https://github.com/heikopanjas) dran
    - [Link zum Github Repository](https://github.com/Ultraschall/ultraschall-installer)
- Ultraschall Soundboard
    - Das Soundboard ist ein eigenes Plugin. Mit dem Soundboard können Sounds auf Knopfdruck während des Podcasts abgespielt werden. Das Soundboard ist in C++ entwickelt
    - Das Soundboard wurde von [Daniel](https://github.com/danlin) entwickelt. 
    [Link zum Github Repository](https://github.com/Ultraschall/ultraschall-soundboard)
- Ultraschall Handbuch
    - Wie lernt man, eine neue Software zu bedienen? Wir versuchen es dir beizubringen. Wenn du das hier liest, hast du vermutlich auch schon etwas in unser Handbuch reingelesen. Das Handbuch haben wir mit Docusaurus umgesetzt. Die Texte sind dabei jeweils in Markdown formatiert und Docusaurus macht den Rest. 
    - Die Liste an Mitwirkenden findest du [hier](partcipants) 
    - [Link zum Github Repository](https://github.com/Ultraschall/ultraschall-manual)


### Ultraschall Handbuch
Um beim Handbuch mitzuwirken, hast du verschiedene Möglichkeiten: 
- **ganz einfach**: Du schreibst Texte und schickst sie einem von uns, wir schauen uns das an und fügen die Texte ein
- **Mittel** Du forkst das Repository und editiert in einem Texteditor deiner Wahl Texte und erstellst einen Pull-Request
- **Forgeschritten**: Du forkst das Repository und installierst Dokusaurus und startest die Entwicklerumgebung
- **Community**: Du wirst Teil des Teams und kannst Branches in dem Repository erstellen

Um damit loszulegen braucht es im Grunde genommen nicht viel. Ein einfacher Texteditor reicht Um Markdown-Dokumente zu bearbeiten. Wenn du noch nicht Teil des Teams bist, kannst du einfach das Handbuch forken und dann klonen. Danach kannst mit deiner Bearbeitung beginnen. 

Docusaurus bietet allerdings auch noch mehr Komfort in dem es einen Entwicklerserver anbietet. Um den zu nutzen, musst du ein paar Sachen installieren. Du musst `Node` und `npm` installieren. Wie das funktioniert hängt von deinem Betriebssystem ab. Wenn das installiert ist, kannst du im Handbuch Ordner, `npm install` alle weiteren Abhängigkeiten installieren. Danach kannst du mit `npm run start` den Entwicklerserver starten. Sobald du eine Datei speichert, wird diese dann neu geladen und man sieht im Browser direkt die Änderungen. 

Wenn du mit der Bearbeitung fertig ist, kannst du einen Pull-Request erstellen und wir schauen uns dann an, was du gemacht hast und ob wir deine Bearbeitung so übernehmen können. Wenn alles passt, mergen wir deinen Pull-Request und deine Änderungen tauchen im Handbuch auf. 

Unser online einsehbares Handbuch wird immer automatisch von einem Github-Workflow gebaut und veröffentlicht. Sobald dein Beitrag als im Main-Branch ist, taucht er wenige Minuten später auch online auf. 