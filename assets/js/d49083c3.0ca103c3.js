"use strict";(self.webpackChunkultraschall_manuel=self.webpackChunkultraschall_manuel||[]).push([[9681],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>h});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),o=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=o(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(t),g=a,h=u["".concat(d,".").concat(g)]||u[g]||m[g]||i;return t?r.createElement(h,l(l({ref:n},p),{},{components:t})):r.createElement(h,l({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1831:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=t(8168),a=(t(6540),t(5680));const i={id:"export",title:"Export",tags:["export","kapitelmarken","rendern","workflow","metadaten","dateiformate"],lektorat:[{Lektorat:"27.4.2022 @MirUnauffaellig"},{Schlusskorrektur:null}]},l=void 0,s={unversionedId:"export",id:"export",title:"Export",description:"\x3c!--",source:"@site/docs/Export.md",sourceDirName:".",slug:"/export",permalink:"/ultraschall-manual/docs/next/export",draft:!1,editUrl:"https://github.com/Ultraschall/ultraschall-manual/edit/main/docs/Export.md",tags:[{label:"export",permalink:"/ultraschall-manual/docs/next/tags/export"},{label:"kapitelmarken",permalink:"/ultraschall-manual/docs/next/tags/kapitelmarken"},{label:"rendern",permalink:"/ultraschall-manual/docs/next/tags/rendern"},{label:"workflow",permalink:"/ultraschall-manual/docs/next/tags/workflow"},{label:"metadaten",permalink:"/ultraschall-manual/docs/next/tags/metadaten"},{label:"dateiformate",permalink:"/ultraschall-manual/docs/next/tags/dateiformate"}],version:"current",frontMatter:{id:"export",title:"Export",tags:["export","kapitelmarken","rendern","workflow","metadaten","dateiformate"],lektorat:[{Lektorat:"27.4.2022 @MirUnauffaellig"},{Schlusskorrektur:null}]},sidebar:"tutorialSidebar",previous:{title:"Post-Produktion",permalink:"/ultraschall-manual/docs/next/postproduction"},next:{title:"R\xe4uspertasten mit dem Streamdeck und der Bitfocus-Companion-Software",permalink:"/ultraschall-manual/docs/next/tutorials/bitfocus"}},d={},o=[{value:"Einleitung",id:"einleitung",level:2},{value:"Der Workflow",id:"der-workflow",level:2},{value:"1. Marker Dashboard",id:"1-marker-dashboard",level:3},{value:"2. Render-Assistent",id:"2-render-assistent",level:3},{value:"3. Export-Assistent",id:"3-export-assistent",level:3},{value:"1. Export MP3",id:"1-export-mp3",level:4},{value:"2. Chapter Markers",id:"2-chapter-markers",level:4},{value:"3. ID3 Metadata",id:"3-id3-metadata",level:4},{value:"4. Podcast Episode Image",id:"4-podcast-episode-image",level:4},{value:"5. Finalize MP3",id:"5-finalize-mp3",level:4},{value:"6. Export Video Audiogram",id:"6-export-video-audiogram",level:4},{value:"Export-Dateiformate",id:"export-dateiformate",level:3},{value:"Video",id:"video",level:2}],p={toc:o},u="wrapper";function m(e){let{components:n,...i}=e;return(0,a.yg)(u,(0,r.A)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/0-banner-export.png",alt:"export-banner"})),(0,a.yg)("h2",{id:"einleitung"},"Einleitung"),(0,a.yg)("p",null,"Wenn dein Projekt geschnitten und abgemischt ist, kannst du deine fertige Audiodatei exportieren. In diesem Kapitel lernst du, wie du eine Podcast-Episode exportierst und welche wichtigen Punkte du von Kapitelmarken bis Episoden-Cover dabei beachten solltest."),(0,a.yg)("admonition",{title:"Video",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Zu diesem Thema gibt es ein sehr gutes ",(0,a.yg)("a",{parentName:"p",href:"#video"},"Tutorial-Video"),".")),(0,a.yg)("h2",{id:"der-workflow"},"Der Workflow"),(0,a.yg)("p",null,"Der Export-Workflow in Ultraschall wird durch vier links am Rand platzierte Icons begleitet ",(0,a.yg)("a",{parentName:"p",href:"GUI-overview"},"[19-22]"),". Sie f\xfchren dich durch alle wichtigen Schritte, sodass du am Ende eine fertige Audiodatei hast. Am besten folgst du diesen vier Icons und den zugeh\xf6rigen Arbeitsschritten von oben nach unten."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/0-export-dialogues.png",alt:"export-icons"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"1. Marker Dashboard \xf6ffnen")," ",(0,a.yg)("a",{parentName:"li",href:"GUI-overview"},"[19]")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"2. Render-Assistent \xf6ffnen")," ",(0,a.yg)("a",{parentName:"li",href:"GUI-overview"},"[20]")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"3. Export-Assistent \xf6ffnen")," ",(0,a.yg)("a",{parentName:"li",href:"GUI-overview"},"[21]")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"4. Arbeitsverzeichnis \xf6ffnen")," ",(0,a.yg)("a",{parentName:"li",href:"GUI-overview"},"[22]"))),(0,a.yg)("admonition",{title:"Hinweis",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Du kannst auch direkt zum dritten Schritt springen, weil dort nochmal eine \xdcbersicht \xfcber alle notwendigen Export-Schritte enthalten ist.")),(0,a.yg)("p",null,"Auch hierzu gibt es eine Video-Erkl\xe4rung von Ralf Stockmann:"),(0,a.yg)("iframe",{width:"560",height:"315",src:"https://ultraschall.github.io/ultraschall-manual/youtube/?url=vdLpynu1ixE?start=3911",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:"allowfullscreen"}),(0,a.yg)("h3",{id:"1-marker-dashboard"},"1. Marker Dashboard"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/1-marker-dashboard.png",alt:"Marker Dashboard"})," ",(0,a.yg)("strong",{parentName:"p"},"Marker Dashboard:")," ",(0,a.yg)("em",{parentName:"p"},"So kann das Marker-Dashboard in einem fertigen Projekt aussehen.")),(0,a.yg)("p",null,"Das Marker-Dashboard gibt dir eine gute \xdcbersicht \xfcber alle bereits gesetzten Kapitelmarken",(0,a.yg)("a",{parentName:"p",href:"GUI-overview"},"[28]")," \u2013 und es hilft dir, sie mit weiteren Informationen wie einer URL oder einem Kapitelmarken-Bild anzureichern (das nicht von allen, aber von den meisten Podcatchern angezeigt wird, wenn die H\xf6renden die Stelle beim Abspielen erreichen)."),(0,a.yg)("admonition",{title:"Tipp",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Kapitelmarken verbessern die H\xf6rerfahrung, sie sind aber komplett optional. Nicht jedes Podcast-Format braucht Kapitelmarken, nicht alle Abspielprogramme unterst\xfctzen sie und nur wenige H\xf6rende nutzen sie regelm\xe4\xdfig \u2013 aber: Sie helfen auch dir, gerade bei l\xe4ngeren Aufnahmen den \xdcberblick zu behalten.")),(0,a.yg)("p",null,"Wenn die Status-Anzeige bei allen gesetzten Markern gr\xfcn ist, ist alles in Ordnung und du kannst mit dem n\xe4chsten Schritt fortfahren. Bei roter Anzeige hilft dir ein Klick auf das Fragezeichen rechts neben dem Status mit einer Erkl\xe4rung zu den fehlenden oder falschen Informationen. Rot markierte Eintr\xe4ge werden in der Regel ",(0,a.yg)("em",{parentName:"p"},"nicht")," mit exportiert, sie f\xfchren aber dazu, dass der Check im ",(0,a.yg)("a",{parentName:"p",href:"#3-Export-Assistent"},"3. Export-Assistenten fehlschl\xe4gt"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/1-marker-missing.png",alt:"Marker missing"})," ",(0,a.yg)("strong",{parentName:"p"},"Fehlende Markerbezeichnung:")," ",(0,a.yg)("em",{parentName:"p"},"Marker brauchen immer einen Namen.")),(0,a.yg)("admonition",{title:"Achtung!",type:"danger"},(0,a.yg)("p",{parentName:"admonition"},"Nicht alle Podcatcher gehen gleich (gut) mit Kapitelmarken um. F\xfcr maximale Kompatibilit\xe4t empfehlen wir, immer einen Marker am Anfang der Aufnahme \u2013 also an der Position 00:00:00 \u2013 zu setzen.")),(0,a.yg)("h3",{id:"2-render-assistent"},"2. Render-Assistent"),(0,a.yg)("p",null,"Einmal kurz durchatmen, bevor du den Render-Assistenten",(0,a.yg)("a",{parentName:"p",href:"GUI-overview"},"[20]")," \xf6ffnest, denn der gibt dir ",(0,a.yg)("em",{parentName:"p"},"sehr")," viele Einstellm\xf6glichkeiten, daher sind die h\xe4ufigsten Formate (MP3, M4A, Auphonic Multichannel) als Voreinstellungen verf\xfcgbar. Wenn du eigene Voreinstellungen bereits erstellt und gespeichert hast, sind diese ebenfalls unter ",(0,a.yg)("inlineCode",{parentName:"p"},"Render using preset")," erreichbar."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/render-preset.png",alt:"Reder preset Auswahl"})," ",(0,a.yg)("strong",{parentName:"p"},"Warning muted tracks:")," ",(0,a.yg)("em",{parentName:"p"},"Ultraschall hat einige n\xfctziche Voreinstellungen f\xfcr den Export zur Auswahl: MP3, M4A, Auphonic Multichannel .")),(0,a.yg)("p",null," von denen wir dir hier nur die wichtigsten erkl\xe4ren. Die meisten anderen sind entweder f\xfcr die Musikproduktion mit REAPER gedacht und/oder haben einen sinnvollen Default-Wert, den du nur \xe4ndern solltest, wenn du ganz genau wei\xdft, was du tust."),(0,a.yg)("p",null,"Dr\xfcckst du links unten in Ultraschall auf das Render-Icon",(0,a.yg)("a",{parentName:"p",href:"GUI-overview"},"[20]")," (oder w\xe4hlst den Punkt ",(0,a.yg)("inlineCode",{parentName:"p"},"Start Export Assistant")," \xfcber das Men\xfc ",(0,a.yg)("inlineCode",{parentName:"p"},"Podcast"),">",(0,a.yg)("inlineCode",{parentName:"p"},"Export"),"), pr\xfcft Ultraschall, ob alle vorhandenen Spuren auch h\xf6rbar sein werden. Hast du den Mastertrack oder einzelne Spuren absichtlich oder unabsichtlich stummgeschaltet, erh\xe4ltst du auf dem Weg zum Render-Assistenten folgende Warnung:"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/2-warning.png",alt:"Warning-muted-tracks"})," ",(0,a.yg)("strong",{parentName:"p"},"Warning muted tracks:")," ",(0,a.yg)("em",{parentName:"p"},"Ultraschall warnt dich, wenn du ein Projekt exportieren willst, in dem eine oder mehrere Spuren stumm sind.")),(0,a.yg)("p",null,"Klickst du hier ",(0,a.yg)("inlineCode",{parentName:"p"},"No"),", landest du wieder im Arbeitsbereich, wo du nochmal checken kannst, welche Spuren mit in den Export einbezogen werden sollen."),(0,a.yg)("p",null,"Klickst du stattdessen auf ",(0,a.yg)("inlineCode",{parentName:"p"},"Yes"),", \xf6ffnet sich der Assistent \u2013 in diesem Fall werden die gemuteten Spuren ",(0,a.yg)("em",{parentName:"p"},"nicht")," in den Export mit eingeschlossen und sp\xe4ter damit auch ",(0,a.yg)("em",{parentName:"p"},"nicht")," zu h\xf6ren sein."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Die wichtigsten Elemente des Render-Assistenten:"),"\n",(0,a.yg)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/2-render-assistant.png",alt:"export-render-to-file"})," ",(0,a.yg)("strong",{parentName:"p"},"Der Render-Assistent:")," ",(0,a.yg)("em",{parentName:"p"},"Der Render-Assistent gibt dir viele Freiheiten, um dein Projekt mit individuellen Einstellungen zu rendern.")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Source:")," Hier legst du fest, welche Spuren der Export beinhalten soll. Der Standard-Wert ",(0,a.yg)("inlineCode",{parentName:"p"},"Master mix")," f\xfchrt alle h\xf6rbaren Spuren in eine Datei zusammen. ",(0,a.yg)("inlineCode",{parentName:"p"},"Stems (selected tracks)")," sorgt daf\xfcr, dass jede Spur als eigene Datei exportiert wird. ",(0,a.yg)("strong",{parentName:"p"},"Vorsicht:")," Es werden nur die Tracks exportiert, die auch ausgew\xe4hlt sind \u2013 du erkennst ausgew\xe4hlte Spuren im Spurenbereich an dem etwas helleren Grau. Du kannst bei ge\xf6ffnetem Render-Assistenten Spuren im ",(0,a.yg)("a",{parentName:"p",href:"GUI-overview"},"Spuren-Bereich [23]")," an- und abw\xe4hlen, indem du mit gehaltener ",(0,a.yg)("kbd",null,"Cmd"),"/",(0,a.yg)("kbd",null,"Ctrl"),"-Taste draufklickst. Mit ",(0,a.yg)("inlineCode",{parentName:"p"},"Master mix + Stems")," erh\xe4ltst du nach dem Export sowohl die zusammengef\xfchrte Datei als auch die einzelnen (ausgew\xe4hlten) Spuren.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Bounds:")," Diese Auswahl bestimmt, ob dein Projekt von Anfang bis Ende (",(0,a.yg)("inlineCode",{parentName:"p"},"Entire project"),") gerendert wird. Brauchst du nur einen Ausschnitt, weil du etwa einen kleinen Teaser aus einer l\xe4ngeren Episode exportieren m\xf6chtest, w\xe4hlst du hier zum Beispiel ",(0,a.yg)("inlineCode",{parentName:"p"},"Time selection")," \u2013 dann wird nur der im ",(0,a.yg)("a",{parentName:"p",href:"GUI-overview"},"Timeline-Arbeitsbereich [25]")," ausgew\xe4hlte Abschnitt exportiert. Andere Optionen, die du hier verwenden kannst, sind: ",(0,a.yg)("inlineCode",{parentName:"p"},"Custom time range"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"Project regions")," oder ",(0,a.yg)("inlineCode",{parentName:"p"},"Selected regions"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Presets:")," Einmal getroffene Optionen im Render-Assistenten kannst du dir \u2013 am besten bevor du auf ",(0,a.yg)("inlineCode",{parentName:"p"},"Rendern")," klickst \u2013  auch als ",(0,a.yg)("inlineCode",{parentName:"p"},"Preset")," abspeichern, sodass du sie beim n\xe4chsten Mal einfach hier ausw\xe4hlen kannst, statt sie ein zweites Mal alle einzeln festzulegen. Ultraschall bringt eine Handvoll sinnvolle Presets bereits mit.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Output:")," Hier legst du fest, wo in deinem Dateisystem Ultraschall die gerenderten Dateien ablegt. Du kannst hier \xfcber ",(0,a.yg)("inlineCode",{parentName:"p"},"Browse"),' das Verzeichnis oder auch direkt den gew\xfcnschten Dateinamen angeben. Was sich in vielen F\xe4llen aber stattdessen empfiehlt (vor allem, wenn du mit Presets und/oder mit Stems arbeitest): den Dateinamen mit sogenannten Wildchars (zu deutsch etwa "Platzhalter") dynamisch zusammenzusetzen. Als Wildchars stehen dir einen Haufen Variablen zur Auswahl, (siehe Screenshot), sinnvoll sind unter anderem ',(0,a.yg)("inlineCode",{parentName:"p"},"$track")," f\xfcr den Namen der Spur oder ",(0,a.yg)("inlineCode",{parentName:"p"},"$region"),", falls du in einem Exportvorgang mehrere Regions renderst. Hast du bei deinem letzten Export kein Preset angelegt, kannst du \xfcber die Auswahl ",(0,a.yg)("inlineCode",{parentName:"p"},"Recent patterns")," auf die zuletzt verwendeten Dateinamen mitsamt Wildchars zugreifen.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Options:")," Im Bereich Options kannst du wahrscheinlich mit den Voreinstellungen sehr gut leben \u2013 und falls nicht, dann wei\xdft du sicher auch, wo du hingreifen musst. Wichtig ist hier eigentlich nur, dass die ",(0,a.yg)("inlineCode",{parentName:"p"},"Sample rate")," hier zur Sample Rate passt, so wie du sie auch in den Einstellungen f\xfcr dein Audio-Interface getroffen hast.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Primary output format"),": Hier legst du fest, in welchem Format du das Ergebnis rendern lassen m\xf6chtest. Alle Details zu den einzelnen Dateiformaten findest du weiter unten in diesem Kapitel unter ",(0,a.yg)("a",{parentName:"p",href:"#Export-Dateiformate"},"Export-Dateiformate"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Secondary output format"),": Willst du in einem Rendervorgang Dateien in zwei unterschiedliche Formate exportieren, w\xe4hlst du in diesem Reiter hier das zweite Format aus.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Render X file(s):")," Der ",(0,a.yg)("inlineCode",{parentName:"p"},"Render"),"-Button informiert dich zur Kontrolle nochmal dar\xfcber, wie viele Dateien am Ende aus Ultraschall herauspurzeln werden \u2013 gerade bei gemuteten oder ausgew\xe4hlten Tracks/Stems beziehungsweise Mehrfachexporten ist diese Angabe hilfreich, um Fehler vorzubeugen. Ein Klick auf den Button \xf6ffnet ein weiteres Programmfenster, das dir den Fortschritt des Render-Vorgangs zeigt. Nach Abschluss des Exports schlie\xdfen sich alle Dialoge automatisch und du landest zur\xfcck in der Arbeitsansicht."))),(0,a.yg)("h3",{id:"3-export-assistent"},"3. Export-Assistent"),(0,a.yg)("p",null,"Der Export-Assistent",(0,a.yg)("a",{parentName:"p",href:"GUI-overview"},"[21]")," hilft dir dabei, dein Projekt nun fertigzustellen. Ein Ampelsystem zeigt dir an, was deinem Projekt noch fehlt. Sollten Metadaten g\xe4nzlich fehlen, zeigt die Ampel rot und rechts daneben steht ",(0,a.yg)("inlineCode",{parentName:"p"},"Missing"),"; falls Metadaten vorliegen, diese aber unvollst\xe4ndig sind, zeigt die Ampel gelb und ",(0,a.yg)("inlineCode",{parentName:"p"},"Incomplete")," oder ",(0,a.yg)("inlineCode",{parentName:"p"},"Unknown")," an. Wenn alle Ampeln auf gr\xfcn stehen, hast du alles richtig gemacht."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"export-icons",src:t(6339).A,width:"988",height:"768"})," ",(0,a.yg)("strong",{parentName:"p"},"Export-Assistent"),": ",(0,a.yg)("em",{parentName:"p"},"Der Assistent hilft dir dabei, dein Projekt fertigzustellen.")),(0,a.yg)("h4",{id:"1-export-mp3"},"1. Export MP3"),(0,a.yg)("p",null,"Falls du diesen Schritt nach der Anleitung weiter oben bereits durchlaufen hast, sollte die Ampel hier auf gr\xfcn stehen. Falls nicht, \xf6ffnest du den Render-Assistenten \xfcber den entsprechenden Button",(0,a.yg)("a",{parentName:"p",href:"GUI-overview"},"[20]"),"."),(0,a.yg)("h4",{id:"2-chapter-markers"},"2. Chapter Markers"),(0,a.yg)("p",null,"Auch diese Ampel steht wahrscheinlich bereits auf gr\xfcn, falls du der Anleitung oben gefolgt bist. Zeigt die Ampel gelb oder rot, \xf6ffnet der Button ",(0,a.yg)("inlineCode",{parentName:"p"},"Edit Chapters"),(0,a.yg)("a",{parentName:"p",href:"GUI-overview"},"[19]")," den Kapitelmarken-Dialog, wo du alle Marken noch einmal kontrollieren kannst."),(0,a.yg)("h4",{id:"3-id3-metadata"},"3. ID3 Metadata"),(0,a.yg)("p",null,"Metadaten sind zwar optional, aber trotzdem wichtig f\xfcr die Weiterverarbeitung und Ver\xf6ffentlichung deines Podcasts. Falls alle Metadaten richtig gesetzt sind, k\xf6nnen die MP3 auch unabh\xe4ngig von deinem RSS-Feed korrekt ausgelesen werden. Somit ist es etwa f\xfcr die Langzeitarchivierung sinnvoll, diese Metadaten direkt mit in die Datei zu schreiben. Die Metadaten werden dort im ",(0,a.yg)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/ID3-Tag"},"ID3")," Format gespeichert. Der Ultraschall-MP3-Metadaten-Dialog",(0,a.yg)("a",{parentName:"p",href:"GUI-overview"},"[21]")," zeigt dir dabei nur die f\xfcr Podcasts relevanten Tags. F\xfcr die Podcast-Kategorie kannst du dich beispielsweise an dieser ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Ultraschall/ultraschall-manual/blob/Export/assets/Apple-Podcast-Kategorien-Ids.csv"},"Liste")," orientieren \u2013 ansonsten hast du freie Hand. Einzig die Zeichen ",(0,a.yg)("inlineCode",{parentName:"p"},"("),",",(0,a.yg)("inlineCode",{parentName:"p"},")")," , ",(0,a.yg)("inlineCode",{parentName:"p"},"'"),"  und ",(0,a.yg)("inlineCode",{parentName:"p"},'"')," solltest du vermeiden."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/3-edit-mp3-metadata.png",alt:"Edit MP3 Metadaten"})," ",(0,a.yg)("strong",{parentName:"p"},"Edit MP3 Metadata:")," ",(0,a.yg)("em",{parentName:"p"},"F\xfcll hier die Metadaten f\xfcr deinen Podcast aus.")),(0,a.yg)("h4",{id:"4-podcast-episode-image"},"4. Podcast Episode Image"),(0,a.yg)("p",null,"Das hier hinterlegte Bild wird sp\xe4ter in den meisten Podcatchern als Bild zur Episode angezeigt. Zieh per Drag-and-Drop dein Episoden-Cover einfach in den Export-Dialog. Das Bild landet dann automatisch mit im Projektordner. Unterst\xfctzte Formate sind ",(0,a.yg)("inlineCode",{parentName:"p"},".jpg"),", ",(0,a.yg)("inlineCode",{parentName:"p"},".jpeg")," und ",(0,a.yg)("inlineCode",{parentName:"p"},".png"),". Ultraschall merkt sich die vier zuletzt benutzten Episoden-Bilder und bietet sie dir zur schnellen Auswahl hier an. Das jeweils ausgew\xe4hlte Bild wird links davon gro\xdf angezeigt."),(0,a.yg)("admonition",{title:"Info",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"F\xfcr Linux-Nutzende: Aktuell muss die Dateiendung tats\xe4chlich klein geschrieben werden. ",(0,a.yg)("inlineCode",{parentName:"p"},".PNG")," funktioniert also nicht. Das wird in der Zukunft korrigiert und dieser Hinweis dann verschwinden. In einer fr\xfcheren Version war das genau anders herum. Jetzt gehen nur noch kleingeschriebene Dateiendungen. ")),(0,a.yg)("h4",{id:"5-finalize-mp3"},"5. Finalize MP3"),(0,a.yg)("p",null,"F\xfcr den letzten Schritt klickst du einmal auf die Schaltfl\xe4che ",(0,a.yg)("inlineCode",{parentName:"p"},"Finalize MP3!"),". Falls noch Probleme vorliegen, zeigt dir der Assistent einen Dialog mit einer entsprechenden Warnung an. Falls der Assistent deine MP3-Datei nicht automatisch gefunden hat, musst du diese jetzt noch einmal manuell angeben. Hat alles geklappt, erscheint eine Erfolgsmeldung \u2013 deine Podcast-Episode wurde erfolgreich exportiert!"),(0,a.yg)("h4",{id:"6-export-video-audiogram"},"6. Export Video Audiogram"),(0,a.yg)("p",null,"Diese Option ist rein optional. Ultraschall bietet dir hier die M\xf6glichkeit, ein kurzes Video zu rendern, mit dem du deinen Podcast z.B. auf Social Media bewerben kannst. W\xe4hle daf\xfcr zun\xe4chst in deiner Audiospur ein Segment aus, das du gerne in dem Video haben m\xf6chtest. Vervollst\xe4ndige jetzt noch deine Metadaten und f\xfcge ein Episoden Bild ein. Sind alle Voraussetzungen erf\xfcllt, erscheint rechts der Button: ",(0,a.yg)("inlineCode",{parentName:"p"},"Export MP4 Audiogram")," mit dem du das Video exportieren kannst. Das fertige Video findest du dann im Projektordner als ",(0,a.yg)("inlineCode",{parentName:"p"},"Audiogram.mp4"),"."),(0,a.yg)("h3",{id:"export-dateiformate"},"Export-Dateiformate"),(0,a.yg)("p",null,"Ultraschall (Reaper) ist mit sehr vielen Audioformaten kompatibel. F\xfcr die Ausgabe werden dir jedoch nur eine geringe Anzahl von Formaten angeboten. Die wichtigsten f\xfcr Ultraschall:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"WAV")," ist ein Format, um Audiodateien unkomprimiert mit einem Puls-Code-Modulations-Verfahren zu speichern.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"AIFF")," (Audio Interchange File Format) dient zum Speichern von Linear-PCM-Audiodaten (haupts\xe4chlich f\xfcr Apple-Betriebssysteme).")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"FLAC")," (Free Lossless Audio Codec) ist ein verlustfreier Codec, der Projekte in Containern inklusive Metadaten sichert.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"MP3")," ist ein verlustbehaftetes Audioformat. Der Ansatz: nur die f\xfcr den Menschen h\xf6rbaren Informationen zu speichern, um m\xf6glichst gute Audioqualit\xe4t bei m\xf6glichst geringer Dateigr\xf6\xdfe zu erreichen. Mittlerweile ist dieser Audio-Standard frei verf\xfcgbar.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"OGG Vorbis")," ist ein freies verlustbehaftetes Audioformat als lizenzfreie Alternative zum (vormals propriet\xe4ren) MP3-Format. Seit MP3 patentfrei geworden ist, hat dieses Format an Bedeutung verloren."))),(0,a.yg)("p",null,"Am h\xe4ufigsten wird f\xfcr Ultraschall-Projekte das ",(0,a.yg)("strong",{parentName:"p"},"MP3"),"-Format verwendet. Der Ultraschall-Workflow sieht vor, under anderem auch Kapitelmarken und Kapitelbilder in ",(0,a.yg)("strong",{parentName:"p"},"MP3"),"-Dateien zu speichern. Andere Formate unterst\xfctzen diese Funktionen nicht oder nicht ausreichend. Wie im Bild gezeigt ist die Verwendung von MP3 bei einer Bitrate von zum Beispiel 128 kBps sinnvoll."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/2-formats.png",alt:"Exportformate"})," ",(0,a.yg)("strong",{parentName:"p"},"Exportformate:")," ",(0,a.yg)("em",{parentName:"p"},"Mit Ultraschall kannst du deine Podcast-Episoden in verschiedene Formaten exportieren. Der Standard ist MP3.")),(0,a.yg)("h2",{id:"video"},"Video"),(0,a.yg)("div",{class:"youTubeContainer"},(0,a.yg)("iframe",{src:"https://ultraschall.github.io/ultraschall-manual/youtube/?url=VSqAM5ur4M4",title:"YouTube video player",frameBorder:"0",allow:"accelerometer",allowFullScreen:"allowfullscreen",class:"video"})))}m.isMDXComponent=!0},6339:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/3-export-assistent-bf393540f1b7fbb2a6109478ee54a17f.png"}}]);