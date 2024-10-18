"use strict";(self.webpackChunkultraschall_manuel=self.webpackChunkultraschall_manuel||[]).push([[7450],{5802:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var t=i(4848),r=i(8453);const s={id:"cut",title:"Schnitt",tags:["schnitt","nicht-destruktiv","kapitelmarken"],lektorat:[{Lektorat:"4.5.2022 @MirUnauffaellig"},{Schlusskorrektur:"6.7.2022 @MirUnauffaellig"}]},d=void 0,a={id:"cut",title:"Schnitt",description:"edit-banner",source:"@site/docs/Schnitt.md",sourceDirName:".",slug:"/cut",permalink:"/ultraschall-manual/docs/next/cut",draft:!1,unlisted:!1,editUrl:"https://github.com/Ultraschall/ultraschall-manual/edit/main/docs/Schnitt.md",tags:[{inline:!0,label:"schnitt",permalink:"/ultraschall-manual/docs/next/tags/schnitt"},{inline:!0,label:"nicht-destruktiv",permalink:"/ultraschall-manual/docs/next/tags/nicht-destruktiv"},{inline:!0,label:"kapitelmarken",permalink:"/ultraschall-manual/docs/next/tags/kapitelmarken"}],version:"current",frontMatter:{id:"cut",title:"Schnitt",tags:["schnitt","nicht-destruktiv","kapitelmarken"],lektorat:[{Lektorat:"4.5.2022 @MirUnauffaellig"},{Schlusskorrektur:"6.7.2022 @MirUnauffaellig"}]},sidebar:"tutorialSidebar",previous:{title:"Aufnahme",permalink:"/ultraschall-manual/docs/next/recording"},next:{title:"Post-Produktion",permalink:"/ultraschall-manual/docs/next/postproduction"}},l={},h=[{value:"Einleitung",id:"einleitung",level:2},{value:"Wichtig zu wissen",id:"wichtig-zu-wissen",level:2},{value:"Vorbereitung zum Schneiden. (&quot;Prepare all tracks for editing&quot;)",id:"vorbereitung-zum-schneiden-prepare-all-tracks-for-editing",level:2},{value:"Einfacher Schnitt",id:"einfacher-schnitt",level:2},{value:"Schnitt \xfcber alle Spuren (Ripple cut)",id:"schnitt-\xfcber-alle-spuren-ripple-cut",level:3},{value:"Stummschalten st\xf6render Passagen (Mute)",id:"stummschalten-st\xf6render-passagen-mute",level:3},{value:"Schnitt f\xfcr Fortgeschrittene",id:"schnitt-f\xfcr-fortgeschrittene",level:2},{value:"Split Items",id:"split-items",level:3},{value:"Softer Fade-in und Fade-out",id:"softer-fade-in-und-fade-out",level:3},{value:"Kapitelmarken",id:"kapitelmarken",level:3},{value:"Marker-Dashboard",id:"marker-dashboard",level:4},{value:"Region/Marker Manager",id:"regionmarker-manager",level:4},{value:"Fotos",id:"fotos",level:4},{value:"URLs",id:"urls",level:4},{value:"Import von Kapitelmarken",id:"import-von-kapitelmarken",level:4},{value:"Button-\xdcbersicht",id:"button-\xfcbersicht",level:3},{value:"[1] und [2]: Ripple Editing",id:"1-und-2-ripple-editing",level:4},{value:"[3] und [4]: Marken",id:"3-und-4-marken",level:4},{value:"[5]: Split",id:"5-split",level:4},{value:"[6]: Mouse Selection",id:"6-mouse-selection",level:4},{value:"[7]: Ripple Cut",id:"7-ripple-cut",level:5},{value:"[8]: Show Mute Envelopes",id:"8-show-mute-envelopes",level:4},{value:"Verschieben von Items (Spurinhalten)",id:"verschieben-von-items-spurinhalten",level:3},{value:"Audio-Inhalte nachtr\xe4glich in das Projekt einf\xfcgen",id:"audio-inhalte-nachtr\xe4glich-in-das-projekt-einf\xfcgen",level:2},{value:"Ausschneiden, kopieren und einf\xfcgen",id:"ausschneiden-kopieren-und-einf\xfcgen",level:3},{value:"Double-Ender-Aufnahmen",id:"double-ender-aufnahmen",level:3},{value:"Video",id:"video",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/0-banner-edit.png",alt:"edit-banner"})}),"\n",(0,t.jsx)(n.h2,{id:"einleitung",children:"Einleitung"}),"\n",(0,t.jsx)(n.p,{children:"Wenn die Aufnahme beendet ist, steht als N\xe4chstes in der Regel der Schnitt deiner Podcast-Episode an. In diesem Kapitel lernst du, wie aus deiner Aufnahme ungewollte Stellen entfernst und deinen Podcast mit Kapitelmarken versiehst."}),"\n",(0,t.jsx)(n.admonition,{title:"Info",type:"info",children:(0,t.jsxs)(n.p,{children:["Zu diesem Thema gibt es ein sehr gutes ",(0,t.jsx)(n.a,{href:"#video",children:"Tutorial-Video"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"wichtig-zu-wissen",children:"Wichtig zu wissen"}),"\n",(0,t.jsxs)(n.p,{children:["Reaper schneidet ",(0,t.jsx)(n.a,{href:"https://de.wikipedia.org/wiki/Nicht-destruktive_Bearbeitung",children:"nicht-destruktiv"}),". Das hei\xdft, deine Audiodateien werden nicht direkt bearbeitet, sondern bleiben unver\xe4ndert erhalten. Du kannst beim Schnitt also gar nichts falsch oder kaputt machen. Im Notfall spielst du einfach ein Backup ein \u2013 oder wenn es mal ganz schlimm kommt, f\xe4ngst du noch einmal von vorne an. Ultraschall macht seit der Version 5 alle 10 Minuten ein Backup deiner Projektdatei (nicht der Audiodateien) und speichert diese im Projektordner."]}),"\n",(0,t.jsx)(n.admonition,{title:"Tipp",type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Backup wiederherstellen:"})," Falls du diese Funktion jetzt gerade brauchst, dann keine Panik. Ultraschall macht regelm\xe4\xdfig und vollautomatisch Backups deines Projekts. Diese liegen in deinem Projekt-Ordner unter ",(0,t.jsx)(n.code,{children:"Backup"})," und sind nach dem folgenden Schema benannt: ",(0,t.jsx)(n.code,{children:"$Projektname-$Datum_$Stunden$Minuten"}),". Um ein solches Backup wiederherzustellen, schlie\xdfe erst mal Ultraschall. \xd6ffne dann dein Projekt im Finder oder Explorer und kopier dir die Backup-Datei mit dem passenden Zeitstempel aus dem Ordner ",(0,t.jsx)(n.code,{children:"Backup"})," in das Projektverzeichnis (also eine Ebene nach oben). Am besten benennst du diese Datei direkt um und \xf6ffnest sie mit Ultraschall. Fertig!"]})}),"\n",(0,t.jsx)(n.h2,{id:"vorbereitung-zum-schneiden-prepare-all-tracks-for-editing",children:'Vorbereitung zum Schneiden. ("Prepare all tracks for editing")'}),"\n",(0,t.jsxs)(n.p,{children:["Bevor du mit dem Schneiden richtig loslegen kannst, musst du zun\xe4chst ein paar Vorbereitungen treffen. Stell vorab am besten sicher, dass die Aufnahme beendet und nicht etwa nur pausiert ist. Um dir die nachfolgenden Arbeitsschritte weitestgehend abzunehmen, bietet Ultraschall die Funktion ",(0,t.jsx)(n.code,{children:"Prepare all tracks for editing"}),". Du findest sie im Men\xfc unter ",(0,t.jsx)(n.code,{children:"Podcast"}),">",(0,t.jsx)(n.code,{children:"Prepare all tracks for editing"})," \u2013 sp\xe4testens erinnert dich aber der Soundcheck daran, falls du vor dem Schnitt vergessen haben solltest, die Spuren vorzubereiten. ",(0,t.jsx)(n.code,{children:"Prepare all tracks for editing"})," f\xfchrt die folgenden Schritte aus:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Der Automatisierungsmodus  wechselt f\xfcr alle Spuren beziehungsweise Envelopes auf ",(0,t.jsx)(n.code,{children:"Trimmen/Lesen"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Alle Spuren und Envelopes werden f\xfcr die Aufnahme deaktiviert."}),"\n",(0,t.jsx)(n.li,{children:"Alle Verbindungen zu StudioLink (falls vorhanden) werden entfernt."}),"\n",(0,t.jsx)(n.li,{children:"Alle StudioLink-FX-Effekte (fall vorhanden) werden entfernt."}),"\n",(0,t.jsx)(n.li,{children:"Alle Soundboards (falls vorhanden) werden entfernt."}),"\n",(0,t.jsx)(n.li,{children:"Das StudioLink-on-Air-Streaming (falls vorhanden) wird beendet."}),"\n",(0,t.jsx)(n.li,{children:"Alle Verbindungen werden auf den Master Track geroutet."}),"\n",(0,t.jsx)(n.li,{children:"Das Routing wird in den Schnitt-Modus umgeschaltet."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Info",type:"info",children:(0,t.jsxs)(n.p,{children:["Denk daran, dass durch ",(0,t.jsx)(n.code,{children:"Prepare all tracks for editing"})," alle StudioLink-Verbindungen zu deinen Gespr\xe4chspartnerinnen und -partnern beendet werden! Falls du sp\xe4ter doch noch etwas aufnehmen m\xf6chtest, kannst du die Spur wieder auf Aufnahme schalten und so etwas neu aufnehmen. Danach kannst du erneut ",(0,t.jsx)(n.code,{children:"Prepare all tracks for editing"})," ausf\xfchren."]})}),"\n",(0,t.jsxs)(n.p,{children:["Als letzten Schritt in der Schnittvorbereitung kannst du jetzt noch in die Schnittansicht wechseln. Daf\xfcr findest du links am Rand unter ",(0,t.jsx)(n.code,{children:"Views"})," die Schaltfl\xe4che mit der Schere ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"[17]"})," \u2013 oder du w\xe4hlst im Men\xfc ",(0,t.jsx)(n.code,{children:"Podcast"}),">",(0,t.jsx)(n.code,{children:"Screenset editing"})," oder dr\xfcckst ",(0,t.jsx)("kbd",{children:"F9"}),". Diese Ansicht verbessert die \xdcbersicht in deinem Projekt \u2013 etwa durch eine Schnellnavigation am oberen Bildschirmrand."]}),"\n",(0,t.jsx)(n.h2,{id:"einfacher-schnitt",children:"Einfacher Schnitt"}),"\n",(0,t.jsx)(n.p,{children:"F\xfcr den Schnitt bietet dir Ultraschall zwei extrem effiziente Werkzeuge, mit denen du 90 Prozent der Arbeit erledigen kannst. Lerne erst diese beiden Methoden, bevor du dich dem Feinschliff mit den erweiterten Werkzeugen widmest:"}),"\n",(0,t.jsx)(n.h3,{id:"schnitt-\xfcber-alle-spuren-ripple-cut",children:"Schnitt \xfcber alle Spuren (Ripple cut)"}),"\n",(0,t.jsxs)(n.p,{children:["Mit dem sogenannten Ripple Cut schneidest du alle Spuren gleichzeitig. Das verhindert, dass sich Inhalte verschieben und die Spuren nicht mehr richtig \xfcbereinander liegen. Um die Funktion zu nutzen, ziehst du in der ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"Timeline [23]"})," eine Auswahl \xfcber den Bereich auf, den du schneiden m\xf6chtest. Anschlie\xdfend klickst du auf den ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"Ripple-Cut-Button [7]"})," oder ",(0,t.jsx)("kbd",{children:"Cmd"}),"/",(0,t.jsx)("kbd",{children:"Strg"})," + ",(0,t.jsx)("kbd",{children:"X"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"stummschalten-st\xf6render-passagen-mute",children:"Stummschalten st\xf6render Passagen (Mute)"}),"\n",(0,t.jsxs)(n.p,{children:["Falls du Sequenzen aus deinen Spuren nicht herausschneiden willst, sie aber trotzdem nicht h\xf6rbar sein sollen, benutzt du daf\xfcr am besten die Mute-Funktion: Daf\xfcr selektierst du die Spur(en) die du bearbeiten willst und dr\xfcckst ",(0,t.jsx)("kbd",{children:"Cmd"}),"/",(0,t.jsx)("kbd",{children:"Ctrl"})," + ",(0,t.jsx)("kbd",{children:"Y"}),". Falls noch nicht vorhanden erscheint daraufhin ein Mute-Envelope unter der gew\xe4hlten Spur. Die orangenfarbene Linie des Mute-Envelopes zeigt ein Tal in der Verlaufsform an der Stelle, die du vorher selektiert hast. Dieser Envelope funktioniert nach dem Bin\xe4rprinzip: Ist die Linie oben, ist die zugeh\xf6rige Spur zu h\xf6ren; ist die Mute-Linie unten, ist auf der zugeordneten Spur nichts zu h\xf6ren."]}),"\n",(0,t.jsx)(n.p,{children:"Du kannst der Linie im Envelope auch weitere Punkte hinzuf\xfcgen und mit der Maus an den gew\xfcnschten Stellen stummschalten \u2013 beziehungsweise die Stummschaltung aufheben. Ein Doppelklick erzeugt weitere Editierpunkte, die du dann nur noch hoch- oder runterziehen musst."}),"\n",(0,t.jsx)(n.admonition,{title:"Tipp",type:"tip",children:(0,t.jsx)(n.p,{children:'Am schnellsten geht das Bearbeiten des Mute-Envelopes mit der Maus: M\xf6chtest du an einer Stelle von "h\xf6rbar" zu "nicht h\xf6rbar" wechseln, brauchst du lediglich in den Mute-Envelope in die untere H\xe4lfte des Envelopes zu klicken. Das geht nur, wenn an dieser Stelle die Linie oben ist (und sinnvollerweise ist dort auch noch kein Editierpunkt vorhanden). F\xfcr den Wechsel von "nicht h\xf6rbar" zu "h\xf6rbar" ist das Vorgehen analog, wobei du nat\xfcrlich in den oberen Bereich des Envelopes klicken musst.'})}),"\n",(0,t.jsx)(n.h2,{id:"schnitt-f\xfcr-fortgeschrittene",children:"Schnitt f\xfcr Fortgeschrittene"}),"\n",(0,t.jsx)(n.h3,{id:"split-items",children:"Split Items"}),"\n",(0,t.jsxs)(n.p,{children:["\xdcber diese Funktion teilst du ein Item in zwei Items auf. Daf\xfcr setzt du den Edit-Curser an die Stelle, an der du eine Trennung vornehmen willst, und klickst dann auf den Split-Button",(0,t.jsx)(n.a,{href:"GUI-overview",children:"[5]"})," \u2013 oder dr\xfcckst die Taste ",(0,t.jsx)("kbd",{children:"S"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"softer-fade-in-und-fade-out",children:"Softer Fade-in und Fade-out"}),"\n",(0,t.jsxs)(n.p,{children:["Wenn du gern am Anfang und oder Ende eines Items die Lautst\xe4rke sanft ein- oder ausblenden m\xf6chtest, geh mit der Maus \xfcber den linken oberen Rand des Items im ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"Timeline-Bereich [23]"}),". Dann siehst du schon, dass sich dein Mauszeiger in eine Kurve ver\xe4ndert. Jetzt kannst du klicken und ziehen \u2013 und so die Blende beziehungsweise ihre Dauer bestimmen. Das gleiche kannst du freilich analog auch an jedem Item-Ende rechts oben machen."]}),"\n",(0,t.jsx)(n.h3,{id:"kapitelmarken",children:"Kapitelmarken"}),"\n",(0,t.jsxs)(n.p,{children:["In Ultraschall setzt du ganz einfach Kapitelmarken, die deinen H\xf6renden dann sp\xe4ter (in den meisten Podcatchern) die Navigation innerhalb deiner Episoden vereinfachen. F\xfcr die Produktion unterscheidet Ultraschall zwischen zwei Markenarten: Kapitelmarken und Editmarken. Die Kapitelmarken setzt du \xfcber die Taste ",(0,t.jsx)("kbd",{children:"M"})," oder den entsprechenden Button ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"[3]"})," \u2013 das sind die Marken die sp\xe4ter auch im Podcatcher auftauchen. Dazu solltest du die Marken aber auch noch benennen. Entweder sp\xe4ter im ",(0,t.jsx)(n.a,{href:"#marker-dashboard",children:"Marker-Dashboard"})," oder indem du direkt per ",(0,t.jsx)("kbd",{children:"Shift"})," + ",(0,t.jsx)("kbd",{children:"M"})," eine benannte Marke setzt und einen Titel vergibst."]}),"\n",(0,t.jsxs)(n.p,{children:["Die Editmarken setzt du mit dem Button ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"[4]"})," oder der Taste ",(0,t.jsx)("kbd",{children:"E"}),". Wie bei Kapitelmarken kannst du mit ",(0,t.jsx)("kbd",{children:"Shift"})," + ",(0,t.jsx)("kbd",{children:"E"})," einen Editmarker setzen und direkt eine Kurzbeschreibung setzen. So wei\xdft du auch sp\xe4ter noch, wof\xfcr du den Editmarker gesetzt hattest. Sie sind nur f\xfcr dich w\xe4hrend des Schnitts relevant und sichtbar, damit du Stellen im Projekt markieren und sp\xe4ter einfach wiederfinden kannst. Sie werden nicht mit exportiert."]}),"\n",(0,t.jsx)(n.admonition,{title:"Info",type:"info",children:(0,t.jsx)(n.p,{children:'Regions (auch "Regionen") werden beim Podcast-Export ebenfalls ignoriert. Du kannst sie aber dazu verwenden, dein Audio-Material in verschiedene Abschnitte zu unterteilen (zum Beispiel, wenn du aus einer langen Aufnahme mehrere Episoden schneidest) und diese Abschnitte beziehungsweise Regionen dann \xfcber den Export-Assistenten als einzelne Dateien exportieren.'})}),"\n",(0,t.jsx)(n.h4,{id:"marker-dashboard",children:"Marker-Dashboard"}),"\n",(0,t.jsxs)(n.p,{children:["Das Marker-Dashboard \xf6ffnest du mit ",(0,t.jsx)("kbd",{children:"Alt"})," + ",(0,t.jsx)("kbd",{children:"Shift"})," + ",(0,t.jsx)("kbd",{children:"M"})," oder einem Druck auf den entsprechenden Button ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"[19]"}),". Dort verwaltest, benennst und exportierst du deine gesetzten Kapitelmarken."]}),"\n",(0,t.jsx)(n.h4,{id:"regionmarker-manager",children:"Region/Marker Manager"}),"\n",(0,t.jsxs)(n.p,{children:["Den ",(0,t.jsx)(n.code,{children:"Region/Marker Manager"})," findest du im ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"Kapitelmarken-Bereich [28]"})," unten rechts. Diesen Bereich teilen sich die ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"Routing Matrix [27]"}),", die ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"Filter [26]"})," und der ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"Kapitelmarken-Manager [28]"}),". In der Markenverwaltung siehst du alle Marken - also sowohl Kapitel- als auch Editmarken. Mit einem Doppelklick auf das Namensfeld kannst du diese bearbeiten \u2013 \xfcber das Feld in der jeweils letzten Spalte legst du per Doppelklick die Farbe des Markers fest."]}),"\n",(0,t.jsx)(n.h4,{id:"fotos",children:"Fotos"}),"\n",(0,t.jsxs)(n.p,{children:["Optional kannst du Kapitelmarken auch Fotos hinzuf\xfcgen, die dann \u2013 sofern der Podcatcher das unterst\xfctzt \u2013 passend zum aktuell abgespielten Kapitel angezeigt werden. Unterst\xfctzte Formate sind ",(0,t.jsx)(n.code,{children:".png"})," und ",(0,t.jsx)(n.code,{children:".jpg"}),". Die Fotos ziehst du einfach per Drag-and-Drop in dein Projekt auf eine eigene Spur und legst sie dort an der gew\xfcnschten Stelle ab. Zu jedem Bild wird automatisch eine Kapitelmarke hinzugef\xfcgt, die du im Anschluss aber noch benennen musst."]}),"\n",(0,t.jsx)(n.h4,{id:"urls",children:"URLs"}),"\n",(0,t.jsxs)(n.p,{children:["Erg\xe4nzend (und ebenfalls optional) kannst du au\xdferdem jede Kapitelmarke mit einer URL versehen. Auch daf\xfcr nutzt du das Marker-Dashboard. Achtung: Das ",(0,t.jsx)(n.code,{children:"+"}),", um eine URL im entsprechenden Feld hinzuzuf\xfcgen, taucht nur auf, falls die Kapitelmarke auch einen Namen hat. Unbenannten und damit unvollst\xe4ndigen Marken k\xf6nnen keine URL hinzugef\xfcgt werden."]}),"\n",(0,t.jsx)(n.h4,{id:"import-von-kapitelmarken",children:"Import von Kapitelmarken"}),"\n",(0,t.jsxs)(n.p,{children:["Ultraschall erlaubt es dir, Kapitelmarken aus verschiedenen Audio-Dateiformaten zu importieren. Klicke daf\xfcr im ",(0,t.jsx)(n.code,{children:"Podcast Men\xfc"})," auf ",(0,t.jsx)(n.code,{children:"Chapter Markers"})," -> ",(0,t.jsx)(n.code,{children:"import chapter markers from file"}),". Es \xf6ffnet sich ein Dateidialog, in dem du deine Audiodatei ausw\xe4hlen kannst. Es werden aktuell alle Audio-Formate unterst\xfctzt, die auch Reaper importieren kann. Darunter z.B. ",(0,t.jsx)(n.code,{children:"WAV"}),", ",(0,t.jsx)(n.code,{children:"OGG"}),", ",(0,t.jsx)(n.code,{children:"OPUS"}),", ",(0,t.jsx)(n.code,{children:"MP3"})," etc."]}),"\n",(0,t.jsx)(n.h3,{id:"button-\xfcbersicht",children:"Button-\xdcbersicht"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons.png",alt:"buttons"})," Die Buttons ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"[1-8]"})," links oben beeinflussen, was passiert, wenn du mit der Maus in den Spurenbereich klickst und bei gedr\xfcckter Maustaste ziehst: Wie auch in einem Textverarbeitungs- oder in einem anderen Schnittprogramm ist die Standardeinstellung, dass du dadurch einen Bereich selektierst beziehungsweise ausw\xe4hlst. Du kannst dieses Verhalten jedoch per Knopfdruck \xe4ndern und an deine Arbeitsweise anpassen \u2013 oder auch mit gedr\xfcckter ",(0,t.jsx)("kbd",{children:"Alt"}),"- oder ",(0,t.jsx)("kbd",{children:"Cmd"}),"/",(0,t.jsx)("kbd",{children:"Ctrl"}),"-Taste das Verhalten nur f\xfcr die aktuelle Aktion \xe4ndern."]}),"\n",(0,t.jsx)(n.h4,{id:"1-und-2-ripple-editing",children:"[1] und [2]: Ripple Editing"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-ripple-per-track.png",alt:"buttons"})}),"\n",(0,t.jsx)(n.p,{children:"Das Ripple-Verhalten bestimmt, was genau passiert, wenn du w\xe4hrend der Bearbeitung ein Item auf einer Spur verschiebst (oder entfernst) \u2013 und ob und wie sich das auf andere Items auf demselben und den anderen Tracks auswirkt:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Kein Ripple"}),": Die Buttons [1] und [2] sind nicht aktiv (grau); verschiebst du ein Item auf einer Spur, so hat das keine Auswirkungen auf andere Items oder Spuren."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ripple per Track"}),": Der Button [1] ist aktiv (orange); verschiebst du ein Item, so verschieben sich auch alle nachfolgenden Items auf derselben Spur \u2013 hast du mehr als ein Item auf unterschiedlichen Spuren selektiert, so verschieben sich alle nachfolgenden Items auf allen betroffenen Spuren."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ripple all Tracks"}),": Der Button [2] ist aktiv (orange \u2013 Button [1] wird an dieser Stelle ignoriert); verschiebst du ein Item auf einer Spur, so verschieben sich auch alle nachfolgenden Items auf allen Spuren. Standardm\xe4\xdfig ist Ripple f\xfcr alle Spuren deaktiviert (Buttons sind grau)."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/ripple-buttons.gif",alt:"Ripple: Buttons"})," ",(0,t.jsx)(n.strong,{children:"Ripple Editing:"})," ",(0,t.jsx)(n.em,{children:"Die Buttons [1] und [2] beeinflussen das Ripple-Verhalten beim Verschieben von Audio-Teilen."})]}),"\n",(0,t.jsx)(n.h4,{id:"3-und-4-marken",children:"[3] und [4]: Marken"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-markers.png",alt:"Buttons"})}),"\n",(0,t.jsxs)(n.p,{children:["Button ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"[3]"})," setzt eine (unbenannte) Kapitelmarke an die aktuelle Position des Play-Cursors \u2013 Button ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"[4]"})," setzt eine Editmarke. Mehr zum Thema Marken findest du im Abschnitt ",(0,t.jsx)(n.a,{href:"#Kapitelmarken",children:"Kapitelmarken"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"5-split",children:"[5]: Split"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-split.png",alt:"Buttons"})}),"\n",(0,t.jsxs)(n.p,{children:["Button ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"[5]"})," teilt ein Item an der aktuellen Cursor-Position. Mehr dazu findest du im Abschnitt ",(0,t.jsx)(n.a,{href:"#Split-Items",children:"Split Items"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"6-mouse-selection",children:"[6]: Mouse Selection"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-selection.png",alt:"Buttons"})}),"\n",(0,t.jsxs)(n.p,{children:["Die Schaltfl\xe4che ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"[6]"})," aktiviert beziehungsweise deaktiviert den Maus-Selektionsmodus und beeinflusst so das Mausverhalten:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"aktiviert"}),": Klickst du auf ein Item, h\xe4ltst die Maustaste gedr\xfcckt und ziehst dann die Maus, selektierst du den betroffenen Bereich."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"deaktiviert"}),": Klickst du auf ein Item, h\xe4ltst die Maustaste gedr\xfcckt und ziehst dann die Maus, verschiebst du das ausgew\xe4hlte Item."]}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"7-ripple-cut",children:"[7]: Ripple Cut"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-ripple-cut.png",alt:"Buttons"})}),"\n",(0,t.jsxs)(n.p,{children:["Button ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"[7]"})," entspricht der Tastenkombination ",(0,t.jsx)("kbd",{children:"Cmd"}),"/",(0,t.jsx)("kbd",{children:"Ctrl"})," + ",(0,t.jsx)("kbd",{children:"X"})," \u2013 damit schneidest du den selektierten Bereich \xfcber alle Spuren hinweg aus deiner Aufnahme heraus. Alle nachfolgenden Items verschieben sich nach links, um die entstandene L\xfccke zu schlie\xdfen."]}),"\n",(0,t.jsx)(n.h4,{id:"8-show-mute-envelopes",children:"[8]: Show Mute Envelopes"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-show-mute-envelopes.png",alt:"Buttons"})}),"\n",(0,t.jsxs)(n.p,{children:["Button ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"[8]"})," zeigt beziehungsweise versteckt die Mute-Envelopes aller Spuren. Im Abschnitt ",(0,t.jsx)(n.a,{href:"#Mute",children:"Mute"})," findest du mehr dazu."]}),"\n",(0,t.jsx)(n.h3,{id:"verschieben-von-items-spurinhalten",children:"Verschieben von Items (Spurinhalten)"}),"\n",(0,t.jsx)(n.admonition,{title:"Achtung",type:"caution",children:(0,t.jsxs)(n.p,{children:["Willst du in der ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"Timeline [25]"}),' einzelne Elemente ("Items") auf deinen Spuren verschieben, solltest du extrem vorsichtig vorgehen \u2013 es passiert dabei sehr schnell, dass synchron aufgenommene Spuren dadurch "verrutschen". Beim Anh\xf6ren wirst du feststellen, dass das Timing nicht mehr passt: Die Sprechenden fallen sich ins Wort, es entstehen Pausen, die in der Aufnahme nicht da waren, und so weiter.']})}),"\n",(0,t.jsxs)(n.p,{children:["Das Verhalten der einzelnen Items beim Verschieben wird durch die ",(0,t.jsx)(n.a,{href:"#Ripple-Editing",children:"Ripple-Einstellung"})," festgelegt. Du kannst jedoch das Ripple-Verhalten tempor\xe4r nur f\xfcr die aktuelle Aktion beeinflussen, indem du die Aktion mit gedr\xfcckter ",(0,t.jsx)("kbd",{children:"Alt"}),"- beziehungsweise ",(0,t.jsx)("kbd",{children:"Cmd"}),"/",(0,t.jsx)("kbd",{children:"Ctrl"}),"-Taste ausf\xfchrst:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)("kbd",{children:"Alt"})," (Mac/Windows/Linux) gedr\xfcckt halten und Item verschieben"]}),": Du verschiebst nur das oder die selektierten Items."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/ripple-key-alt.gif",alt:"Ripple: Alt"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)("kbd",{children:"Cmd"})," (Mac) beziehungsweise ",(0,t.jsx)("kbd",{children:"Ctrl"})," (Windows/Linux) gedr\xfcckt halten und Item verschieben"]}),": Du verschiebst das oder die selektierten Items und ALLE Items dahinter."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/ripple-key-cmd.gif",alt:"Ripple: Cmd"})}),"\n",(0,t.jsx)(n.h2,{id:"audio-inhalte-nachtr\xe4glich-in-das-projekt-einf\xfcgen",children:"Audio-Inhalte nachtr\xe4glich in das Projekt einf\xfcgen"}),"\n",(0,t.jsxs)(n.p,{children:["Um nach einer Aufnahme weitere Sounds oder Aufnahmen in dein Projekt einzuf\xfcgen, ziehst du einfach die gew\xfcnschten Dateien per Drag-and-Drop in dein Projekt. Wenn du die Datei in den ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"Timeline-Bereich [25]"})," an eine Stelle im Projekt ziehst, an der keine Spur ist, erstellt Ultraschall automatisch eine neue Spur mit dem Inhalt der Datei (und benennt diese nach dem Dateinamen). Auf diesem Weg kannst du auch ganze Ultraschall-Projekte (",(0,t.jsx)(n.code,{children:".rpp"}),") in andere Projekte einbetten."]}),"\n",(0,t.jsx)(n.admonition,{title:"Achtung",type:"caution",children:(0,t.jsxs)(n.p,{children:["Unter dem Men\xfcpunkt ",(0,t.jsx)(n.code,{children:"Edit"}),">",(0,t.jsx)(n.code,{children:"Project Settings"})," stellst du ein, wie Ultraschall mit hinzugef\xfcgten Mediendateien umgehen soll. Hier empfehlen wir auf jeden Fall die Einstellung ",(0,t.jsx)(n.code,{children:"Copy media to project"}),". Am besten setzt du direkt in den globalen REAPER-Einstellungen unter ",(0,t.jsx)(n.code,{children:"Options"}),"> ",(0,t.jsx)(n.code,{children:"Preferences"})," unter dem Punkt ",(0,t.jsx)(n.code,{children:"Media"})," das Kreuz bei ",(0,t.jsx)(n.code,{children:"Copy imported media to project media directory"}),". Sonst kann es passieren, dass du ungewollt Referenzen auf Dateien in deinem Projekt hast, die nicht mit im Projektordner liegen \u2013 und sp\xe4testens beim Verschieben oder Kopieren des Projekts dann Probleme bereiten."]})}),"\n",(0,t.jsx)(n.h3,{id:"ausschneiden-kopieren-und-einf\xfcgen",children:"Ausschneiden, kopieren und einf\xfcgen"}),"\n",(0,t.jsxs)(n.p,{children:["Um Audio innerhalb deines Projekts auszuschneiden oder zu kopieren, w\xe4hlst du das zu kopierende Item oder setzt eine Zeit-Markierung. Klickst du dann mit der rechten Maustaste auf den gew\xe4hlten Bereich (oder \xf6ffnest das ",(0,t.jsx)(n.code,{children:"Edit"}),"-Men\xfc), kannst du entweder das ganze Item kopieren (Standardverhalten; auch per ",(0,t.jsx)("kbd",{children:"Cmd"}),"/",(0,t.jsx)("kbd",{children:"Ctrl"})," + ",(0,t.jsx)("kbd",{children:"C"}),") oder den ausgew\xe4hlten Bereich innerhalb eines Items. Ausschneiden funktioniert analog."]}),"\n",(0,t.jsxs)(n.p,{children:["Um kopierte oder ausgeschnittene Inhalte wieder einzuf\xfcgen, w\xe4hlst du mit einem Klick in den linken ",(0,t.jsx)(n.a,{href:"GUI-overview",children:"Spuren-Bereich [23]"})," die Spur, auf der die Inhalte landen sollen. Anschlie\xdfend setzt du den Cursor an die gew\xfcnschte Stelle und w\xe4hlst ",(0,t.jsx)(n.code,{children:"Paste"})," entweder \xfcber das ",(0,t.jsx)(n.code,{children:"Edit"}),"- oder das Kontext-Men\xfc \u2013 oder via Tastenkombination ",(0,t.jsx)("kbd",{children:"Cmd"}),"/",(0,t.jsx)("kbd",{children:"Ctrl"})," + ",(0,t.jsx)("kbd",{children:"V"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/copy-and-cut.png",alt:"Copy and Paste"}),(0,t.jsx)(n.strong,{children:"Copy and Paste:"})," ",(0,t.jsx)(n.em,{children:"Das Kontextmen\xfc kennt diverse Kopier- und Ausschneide-Modi."})]}),"\n",(0,t.jsx)(n.h3,{id:"double-ender-aufnahmen",children:"Double-Ender-Aufnahmen"}),"\n",(0,t.jsxs)(n.p,{children:["Falls deine Mitpodcastenden \xfcber eine schlechte oder instabile Internetverbindung via StudioLink mit dir verbunden sind, ist es sinnvoll, wenn sie in ihren StudioLink-Standalone-Clients sicherheitshalber eine lokale Aufnahme mitlaufen lassen. Daf\xfcr klicken sie im Browser-Fenster von StudioLink auf den ",(0,t.jsx)(n.code,{children:"Record"}),"-Button. Die Datei, die sp\xe4ter an die Cutterin oder den Cutter \xfcbermittelt werden muss, findet sich in den Eigenen Dateien in einem ",(0,t.jsx)(n.code,{children:"studiolink"}),"-Ordner und dort in einem Unterverzeichnis mit Aufnahme-Zeitstempel unter dem Dateinamen ",(0,t.jsx)(n.code,{children:"local.flac"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"video",children:"Video"}),"\n",(0,t.jsx)("div",{class:"youTubeContainer",children:(0,t.jsx)("iframe",{src:"https://ultraschall.github.io/ultraschall-manual/youtube/?url=3ML-Nw5TEfE",title:"YouTube video player",frameborder:"0",allowfullscreen:"allowfullscreen",class:"video"})})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>a});var t=i(6540);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);