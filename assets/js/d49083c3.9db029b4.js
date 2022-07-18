"use strict";(self.webpackChunkultraschall_manuel=self.webpackChunkultraschall_manuel||[]).push([[362],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=o(n),c=r,h=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var o=2;o<i;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8765:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],l={id:"export",title:"Export",lektorat:[{Lektorat:"27.4.2022 @MirUnauffaellig"},{Schlusskorrektur:null}]},d=void 0,o={unversionedId:"export",id:"export",title:"Export",description:"\x3c!--",source:"@site/docs/Export.md",sourceDirName:".",slug:"/export",permalink:"/ultraschall-manual/docs/export",draft:!1,editUrl:"https://github.com/Ultraschall/ultraschall-manual/edit/main/docs/Export.md",tags:[],version:"current",frontMatter:{id:"export",title:"Export",lektorat:[{Lektorat:"27.4.2022 @MirUnauffaellig"},{Schlusskorrektur:null}]},sidebar:"tutorialSidebar",previous:{title:"Post-Produktion",permalink:"/ultraschall-manual/docs/postproduction"},next:{title:"\xdcber",permalink:"/ultraschall-manual/docs/about"}},p={},m=[{value:"Einleitung",id:"einleitung",level:2},{value:"Der Workflow",id:"der-workflow",level:2},{value:"1. Marker Dashboard",id:"1-marker-dashboard",level:3},{value:"2. Render-Assistent",id:"2-render-assistent",level:3},{value:"3. Export-Assistent",id:"3-export-assistent",level:3},{value:"1. Export MP3",id:"1-export-mp3",level:4},{value:"2. Chapter Markers",id:"2-chapter-markers",level:4},{value:"3. ID3 Metadata",id:"3-id3-metadata",level:4},{value:"4. Podcast Episode Image",id:"4-podcast-episode-image",level:4},{value:"5. Finalize MP3",id:"5-finalize-mp3",level:4},{value:"Export-Dateiformate",id:"export-dateiformate",level:3},{value:"Video",id:"video",level:2}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/0-banner-export.png",alt:"export-banner"})),(0,i.kt)("h2",{id:"einleitung"},"Einleitung"),(0,i.kt)("p",null,"Wenn dein Projekt geschnitten und abgemischt ist, kannst du deine fertige Audiodatei exportieren. In diesem Kapitel lernst du, wie du eine Podcast-Episode exportierst und welche wichtigen Punkte du von Kapitelmarken bis Episoden-Cover dabei beachten solltest."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Video")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Zu diesem Thema gibt es ein sehr gutes ",(0,i.kt)("a",{parentName:"p",href:"#video"},"Tutorial-Video"),"."))),(0,i.kt)("h2",{id:"der-workflow"},"Der Workflow"),(0,i.kt)("p",null,"Der Export-Workflow in Ultraschall wird durch vier links am Rand platzierte Icons begleitet ",(0,i.kt)("a",{parentName:"p",href:"GUI-overview"},"[19-22]"),". Sie f\xfchren dich durch alle wichtigen Schritte, sodass du am Ende eine fertige Audiodatei hast. Am besten folgst du diesen vier Icons und den zugeh\xf6rigen Arbeitsschritten von oben nach unten."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/0-export-dialogues.png",alt:"export-icons"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1. Marker Dashboard \xf6ffnen")," ",(0,i.kt)("a",{parentName:"li",href:"GUI-overview"},"[19]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"2. Render-Assistent \xf6ffnen")," ",(0,i.kt)("a",{parentName:"li",href:"GUI-overview"},"[20]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"3. Export-Assistent \xf6ffnen")," ",(0,i.kt)("a",{parentName:"li",href:"GUI-overview"},"[21]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"4. Arbeitsverzeichnis \xf6ffnen")," ",(0,i.kt)("a",{parentName:"li",href:"GUI-overview"},"[22]"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Hinweis")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Du kannst auch direkt zum dritten Schritt springen, weil dort nochmal eine \xdcbersicht \xfcber alle notwendigen Export-Schritte enthalten ist."))),(0,i.kt)("p",null,"Auch hierzu gibt es eine Video-Erkl\xe4rung von Ralf Stockmann:"),(0,i.kt)("iframe",{width:"560",height:"315",src:"../youtube/?url=vdLpynu1ixE?start=3911",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:""}),(0,i.kt)("h3",{id:"1-marker-dashboard"},"1. Marker Dashboard"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/1-marker-dashboard.png",alt:"Marker Dashboard"})," ",(0,i.kt)("strong",{parentName:"p"},"Marker Dashboard:")," ",(0,i.kt)("em",{parentName:"p"},"So kann das Marker-Dashboard in einem fertigen Projekt aussehen.")),(0,i.kt)("p",null,"Das Marker-Dashboard gibt dir eine gute \xdcbersicht \xfcber alle bereits gesetzten Kapitelmarken",(0,i.kt)("a",{parentName:"p",href:"GUI-overview"},"[28]")," \u2013 und es hilft dir, sie mit weiteren Informationen wie einer URL oder einem Kapitelmarken-Bild anzureichern (das nicht von allen, aber von den meisten Podcatchern angezeigt wird, wenn die H\xf6renden die Stelle beim Abspielen erreichen)."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tipp")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Kapitelmarken verbessern die H\xf6rerfahrung, sie sind aber komplett optional. Nicht jedes Podcast-Format braucht Kapitelmarken, nicht alle Abspielprogramme unterst\xfctzen sie und nur wenige H\xf6rende nutzen sie regelm\xe4\xdfig \u2013 aber: Sie helfen auch dir, gerade bei l\xe4ngeren Aufnahmen den \xdcberblick zu behalten."))),(0,i.kt)("p",null,"Wenn die Status-Anzeige bei allen gesetzten Markern gr\xfcn ist, ist alles in Ordnung und du kannst mit dem n\xe4chsten Schritt fortfahren. Bei roter Anzeige hilft dir ein Klick auf das Fragezeichen rechts neben dem Status mit einer Erkl\xe4rung zu den fehlenden oder falschen Informationen. Rot markierte Eintr\xe4ge werden in der Regel ",(0,i.kt)("em",{parentName:"p"},"nicht")," mit exportiert, sie f\xfchren aber dazu, dass der Check im ",(0,i.kt)("a",{parentName:"p",href:"#3-Export-Assistent"},"3. Export-Assistenten fehlschl\xe4gt"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/1-marker-missing.png",alt:"Marker missing"})," ",(0,i.kt)("strong",{parentName:"p"},"Fehlende Markerbezeichnung:")," ",(0,i.kt)("em",{parentName:"p"},"Marker brauchen immer einen Namen.")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Achtung!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Nicht alle Podcatcher gehen gleich (gut) mit Kapitelmarken um. F\xfcr maximale Kompatibilit\xe4t empfehlen wir, immer einen Marker am Anfang der Aufnahme \u2013 also an der Position 00:00:00 \u2013 zu setzen."))),(0,i.kt)("h3",{id:"2-render-assistent"},"2. Render-Assistent"),(0,i.kt)("p",null,"Einmal kurz durchatmen, bevor du den Render-Assistenten",(0,i.kt)("a",{parentName:"p",href:"GUI-overview"},"[20]")," \xf6ffnest, denn der gibt dir ",(0,i.kt)("em",{parentName:"p"},"sehr")," viele Einstellm\xf6glichkeiten, von denen wir dir hier nur die wichtigsten erkl\xe4ren. Die meisten anderen sind entweder f\xfcr die Musikproduktion mit REAPER gedacht und/oder haben einen sinnvollen Default-Wert, den du nur \xe4ndern solltest, wenn du ganz genau wei\xdft, was du tust."),(0,i.kt)("p",null,"Dr\xfcckst du links unten in Ultraschall auf das Render-Icon",(0,i.kt)("a",{parentName:"p",href:"GUI-overview"},"[20]")," (oder w\xe4hlst den Punkt ",(0,i.kt)("inlineCode",{parentName:"p"},"Start Export Assistant")," \xfcber das Men\xfc ",(0,i.kt)("inlineCode",{parentName:"p"},"Podcast"),">",(0,i.kt)("inlineCode",{parentName:"p"},"Export"),"), pr\xfcft Ultraschall, ob alle vorhandenen Spuren auch h\xf6rbar sein werden. Hast du einzelne Spuren absichtlich oder unabsichtlich stummgeschaltet, erh\xe4ltst du auf dem Weg zum Render-Assistenten folgende Warnung:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/2-warning.png",alt:"Warning-muted-tracks"})," ",(0,i.kt)("strong",{parentName:"p"},"Warning muted tracks:")," ",(0,i.kt)("em",{parentName:"p"},"Ultraschall warnt dich, wenn du ein Projekt exportieren willst, in dem eine oder mehrere Spuren stumm sind.")),(0,i.kt)("p",null,"Klickst du hier ",(0,i.kt)("inlineCode",{parentName:"p"},"No"),", landest du wieder im Arbeitsbereich, wo du nochmal checken kannst, welche Spuren mit in den Export einbezogen werden sollen."),(0,i.kt)("p",null,"Klickst du stattdessen auf ",(0,i.kt)("inlineCode",{parentName:"p"},"Yes"),", \xf6ffnet sich der Assistent \u2013 in diesem Fall werden die gemuteten Spuren ",(0,i.kt)("em",{parentName:"p"},"nicht")," in den Export mit eingeschlossen und sp\xe4ter damit auch ",(0,i.kt)("em",{parentName:"p"},"nicht")," zu h\xf6ren sein."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Die wichtigsten Elemente des Render-Assistenten:"),"\n",(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/2-render-assistant.png",alt:"export-render-to-file"})," ",(0,i.kt)("strong",{parentName:"p"},"Der Render-Assistent:")," ",(0,i.kt)("em",{parentName:"p"},"Der Render-Assistent gibt dir viele Freiheiten, um dein Projekt mit individuellen Einstellungen zu rendern.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Source:")," Hier legst du fest, welche Spuren der Export beinhalten soll. Der Standard-Wert ",(0,i.kt)("inlineCode",{parentName:"p"},"Master mix")," f\xfchrt alle h\xf6rbaren Spuren in eine Datei zusammen. ",(0,i.kt)("inlineCode",{parentName:"p"},"Stems (selected tracks)")," sorgt daf\xfcr, dass jede Spur als eigene Datei exportiert wird. ",(0,i.kt)("strong",{parentName:"p"},"Vorsicht:")," Es werden nur die Tracks exportiert, die auch ausgew\xe4hlt sind \u2013 du erkennst ausgew\xe4hlte Spuren im Spurenbereich an dem etwas helleren Grau. Du kannst bei ge\xf6ffnetem Render-Assistenten Spuren im ",(0,i.kt)("a",{parentName:"p",href:"GUI-overview"},"Spuren-Bereich [23]")," an- und abw\xe4hlen, indem du mit gehaltener ",(0,i.kt)("kbd",null,"Cmd"),"/",(0,i.kt)("kbd",null,"Ctrl"),"-Taste draufklickst. Mit ",(0,i.kt)("inlineCode",{parentName:"p"},"Master mix + Stems")," erh\xe4ltst du nach dem Export sowohl die zusammengef\xfchrte Datei als auch die einzelnen (ausgew\xe4hlten) Spuren.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Bounds:")," Diese Auswahl bestimmt, ob dein Projekt von Anfang bis Ende (",(0,i.kt)("inlineCode",{parentName:"p"},"Entire project"),") gerendert wird. Brauchst du nur einen Ausschnitt, weil du etwa einen kleinen Teaser aus einer l\xe4ngeren Episode exportieren m\xf6chtest, w\xe4hlst du hier zum Beispiel ",(0,i.kt)("inlineCode",{parentName:"p"},"Time selection")," \u2013 dann wird nur der im ",(0,i.kt)("a",{parentName:"p",href:"GUI-overview"},"Timeline-Arbeitsbereich [25]")," ausgew\xe4hlte Abschnitt exportiert. Andere Optionen, die du hier verwenden kannst, sind: ",(0,i.kt)("inlineCode",{parentName:"p"},"Custom time range"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Project regions")," oder ",(0,i.kt)("inlineCode",{parentName:"p"},"Selected regions"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Presets:")," Einmal getroffene Optionen im Render-Assistenten kannst du dir \u2013 am besten bevor du auf ",(0,i.kt)("inlineCode",{parentName:"p"},"Rendern")," klickst \u2013  auch als ",(0,i.kt)("inlineCode",{parentName:"p"},"Preset")," abspeichern, sodass du sie beim n\xe4chsten Mal einfach hier ausw\xe4hlen kannst, statt sie ein zweites Mal alle einzeln festzulegen. Ultraschall bringt eine Handvoll sinnvolle Presets bereits mit.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Output:")," Hier legst du fest, wo in deinem Dateisystem Ultraschall die gerenderten Dateien ablegt. Du kannst hier \xfcber ",(0,i.kt)("inlineCode",{parentName:"p"},"Browse"),' das Verzeichnis oder auch direkt den gew\xfcnschten Dateinamen angeben. Was sich in vielen F\xe4llen aber stattdessen empfiehlt (vor allem, wenn du mit Presets und/oder mit Stems arbeitest): den Dateinamen mit sogenannten Wildchars (zu deutsch etwa "Platzhalter") dynamisch zusammenzusetzen. Als Wildchars stehen dir einen Haufen Variablen zur Auswahl, (siehe Screenshot), sinnvoll sind unter anderem ',(0,i.kt)("inlineCode",{parentName:"p"},"$track")," f\xfcr den Namen der Spur oder ",(0,i.kt)("inlineCode",{parentName:"p"},"$region"),", falls du in einem Exportvorgang mehrere Regions renderst. Hast du bei deinem letzten Export kein Preset angelegt, kannst du \xfcber die Auswahl ",(0,i.kt)("inlineCode",{parentName:"p"},"Recent patterns")," auf die zuletzt verwendeten Dateinamen mitsamt Wildchars zugreifen.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Options:")," Im Bereich Options kannst du wahrscheinlich mit den Voreinstellungen sehr gut leben \u2013 und falls nicht, dann wei\xdft du sicher auch, wo du hingreifen musst. Wichtig ist hier eigentlich nur, dass die ",(0,i.kt)("inlineCode",{parentName:"p"},"Sample rate")," hier zur Sample Rate passt, so wie du sie auch in den Einstellungen f\xfcr dein Audio-Interface getroffen hast.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Primary output format"),": Hier legst du fest, in welchem Format du das Ergebnis rendern lassen m\xf6chtest. Alle Details zu den einzelnen Dateiformaten findest du weiter unten in diesem Kapitel unter ",(0,i.kt)("a",{parentName:"p",href:"#Export-Dateiformate"},"Export-Dateiformate"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Secondary output format"),": Willst du in einem Rendervorgang Dateien in zwei unterschiedliche Formate exportieren, w\xe4hlst du in diesem Reiter hier das zweite Format aus.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Render X file(s):")," Der ",(0,i.kt)("inlineCode",{parentName:"p"},"Render"),"-Button informiert dich zur Kontrolle nochmal dar\xfcber, wie viele Dateien am Ende aus Ultraschall herauspurzeln werden \u2013 gerade bei gemuteten oder ausgew\xe4hlten Tracks/Stems beziehungsweise Mehrfachexporten ist diese Angabe hilfreich, um Fehler vorzubeugen. Ein Klick auf den Button \xf6ffnet ein weiteres Programmfenster, das dir den Fortschritt des Render-Vorgangs zeigt. Nach Abschluss des Exports schlie\xdfen sich alle Dialoge automatisch und du landest zur\xfcck in der Arbeitsansicht."))),(0,i.kt)("h3",{id:"3-export-assistent"},"3. Export-Assistent"),(0,i.kt)("p",null,"Der Export-Assistent",(0,i.kt)("a",{parentName:"p",href:"GUI-overview"},"[21]")," hilft dir dabei, dein Projekt nun fertigzustellen. Ein Ampelsystem zeigt dir an, was deinem Projekt noch fehlt. Sollten Metadaten g\xe4nzlich fehlen, zeigt die Ampel rot und rechts daneben steht ",(0,i.kt)("inlineCode",{parentName:"p"},"Missing"),"; falls Metadaten vorliegen, diese aber unvollst\xe4ndig sind, zeigt die Ampel gelb und ",(0,i.kt)("inlineCode",{parentName:"p"},"Incomplete")," oder ",(0,i.kt)("inlineCode",{parentName:"p"},"Unknown")," an. Wenn alle Ampeln auf gr\xfcn stehen, hast du alles richtig gemacht."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/3-export-assistant.png",alt:"export-icons"})," ",(0,i.kt)("strong",{parentName:"p"},"Export-Assistent"),": ",(0,i.kt)("em",{parentName:"p"},"Der Assistent hilft dir dabei, dein Projekt fertigzustellen.")),(0,i.kt)("h4",{id:"1-export-mp3"},"1. Export MP3"),(0,i.kt)("p",null,"Falls du diesen Schritt nach der Anleitung weiter oben bereits durchlaufen hast, sollte die Ampel hier auf gr\xfcn stehen. Falls nicht, \xf6ffnest du den Render-Assistenten \xfcber den entsprechenden Button",(0,i.kt)("a",{parentName:"p",href:"GUI-overview"},"[20]"),"."),(0,i.kt)("h4",{id:"2-chapter-markers"},"2. Chapter Markers"),(0,i.kt)("p",null,"Auch diese Ampel steht wahrscheinlich bereits auf gr\xfcn, falls du der Anleitung oben gefolgt bist. Zeigt die Ampel gelb oder rot, \xf6ffnet der Button ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit Chapters"),(0,i.kt)("a",{parentName:"p",href:"GUI-overview"},"[19]")," den Kapitelmarken-Dialog, wo du alle Marken noch einmal kontrollieren kannst."),(0,i.kt)("h4",{id:"3-id3-metadata"},"3. ID3 Metadata"),(0,i.kt)("p",null,"Metadaten sind zwar optional, aber trotzdem wichtig f\xfcr die Weiterverarbeitung und Ver\xf6ffentlichung deines Podcasts. Falls alle Metadaten richtig gesetzt sind, k\xf6nnen die MP3 auch unabh\xe4ngig von deinem RSS-Feed korrekt ausgelesen werden. Somit ist es etwa f\xfcr die Langzeitarchivierung sinnvoll, diese Metadaten direkt mit in die Datei zu schreiben. Die Metadaten werden dort im ",(0,i.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/ID3-Tag"},"ID3")," Format gespeichert. Der Ultraschall-MP3-Metadaten-Dialog",(0,i.kt)("a",{parentName:"p",href:"GUI-overview"},"[21]")," zeigt dir dabei nur die f\xfcr Podcasts relevanten Tags. F\xfcr die Podcast-Kategorie kannst du dich beispielsweise an dieser ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Ultraschall/ultraschall-manual/blob/Export/assets/Apple-Podcast-Kategorien-Ids.csv"},"Liste")," orientieren \u2013 ansonsten hast du freie Hand. Einzig die Zeichen ",(0,i.kt)("inlineCode",{parentName:"p"},"("),",",(0,i.kt)("inlineCode",{parentName:"p"},")")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"'"),"  und ",(0,i.kt)("inlineCode",{parentName:"p"},'"')," solltest du vermeiden."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/3-edit-mp3-metadata.png",alt:"Edit MP3 Metadaten"})," ",(0,i.kt)("strong",{parentName:"p"},"Edit MP3 Metadata:")," ",(0,i.kt)("em",{parentName:"p"},"F\xfcll hier die Metadaten f\xfcr deinen Podcast aus.")),(0,i.kt)("h4",{id:"4-podcast-episode-image"},"4. Podcast Episode Image"),(0,i.kt)("p",null,"Das hier hinterlegte Bild wird sp\xe4ter in den meisten Podcatchern als Bild zur Episode angezeigt. Zieh per Drag-and-Drop dein Episoden-Cover einfach in den Export-Dialog. Das Bild landet dann automatisch mit im Projektordner. Unterst\xfctzte Formate sind ",(0,i.kt)("inlineCode",{parentName:"p"},".JPG"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".JPEG")," und ",(0,i.kt)("inlineCode",{parentName:"p"},".PNG"),". Ultraschall merkt sich die vier zuletzt benutzten Episoden-Bilder und bietet sie dir zur schnellen Auswahl hier an. Das jeweils ausgew\xe4hlte Bild wird links davon gro\xdf angezeigt."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"F\xfcr Linux-Nutzende: Aktuell muss die Dateiendung tats\xe4chlich gro\xdf geschrieben werden. ",(0,i.kt)("inlineCode",{parentName:"p"},".png")," funktioniert also nicht. Das wird in der Zukunft korrigiert und dieser Hinweis dann verschwinden."))),(0,i.kt)("h4",{id:"5-finalize-mp3"},"5. Finalize MP3"),(0,i.kt)("p",null,"F\xfcr den letzten Schritt klickst du einmal auf die Schaltfl\xe4che ",(0,i.kt)("inlineCode",{parentName:"p"},"Finalize MP3!"),". Falls noch Probleme vorliegen, zeigt dir der Assistent einen Dialog mit einer entsprechenden Warnung an. Falls der Assistent deine MP3-Datei nicht automatisch gefunden hat, musst du diese jetzt noch einmal manuell angeben. Hat alles geklappt, erscheint eine Erfolgsmeldung \u2013 deine Podcast-Episode wurde erfolgreich exportiert!"),(0,i.kt)("h3",{id:"export-dateiformate"},"Export-Dateiformate"),(0,i.kt)("p",null,"Ultraschall (Reaper) ist mit sehr vielen Audioformaten kompatibel. F\xfcr die Ausgabe werden dir jedoch nur eine geringe Anzahl von Formaten angeboten. Die wichtigsten f\xfcr Ultraschall:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"WAV")," ist ein Format, um Audiodateien unkomprimiert mit einem Puls-Code-Modulations-Verfahren zu speichern.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"AIFF")," (Audio Interchange File Format) dient zum Speichern von Linear-PCM-Audiodaten (haupts\xe4chlich f\xfcr Apple-Betriebssysteme).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"FLAC")," (Free Lossless Audio Codec) ist ein verlustfreier Codec, der Projekte in Containern inklusive Metadaten sichert.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"MP3")," ist ein verlustbehaftetes Audioformat. Der Ansatz: nur die f\xfcr den Menschen h\xf6rbaren Informationen zu speichern, um m\xf6glichst gute Audioqualit\xe4t bei m\xf6glichst geringer Dateigr\xf6\xdfe zu erreichen. Mittlerweile ist dieser Audio-Standard frei verf\xfcgbar.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"OGG Vorbis")," ist ein freies verlustbehaftetes Audioformat als lizenzfreie Alternative zum (vormals propriet\xe4ren) MP3-Format. Seit MP3 patentfrei geworden ist, hat dieses Format an Bedeutung verloren."))),(0,i.kt)("p",null,"Am h\xe4ufigsten wird f\xfcr Ultraschall-Projekte das ",(0,i.kt)("strong",{parentName:"p"},"MP3"),"-Format verwendet. Der Ultraschall-Workflow sieht vor, under anderem auch Kapitelmarken und Kapitelbilder in ",(0,i.kt)("strong",{parentName:"p"},"MP3"),"-Dateien zu speichern. Andere Formate unterst\xfctzen diese Funktionen nicht oder nicht ausreichend. Wie im Bild gezeigt ist die Verwendung von MP3 bei einer Bitrate von zum Beispiel 128 kBps sinnvoll."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/2-formats.png",alt:"Exportformate"})," ",(0,i.kt)("strong",{parentName:"p"},"Exportformate:")," ",(0,i.kt)("em",{parentName:"p"},"Mit Ultraschall kannst du deine Podcast-Episoden in verschiedene Formaten exportieren. Der Standard ist MP3.")),(0,i.kt)("h2",{id:"video"},"Video"),(0,i.kt)("iframe",{width:"560",height:"315",src:"../youtube/?url=VSqAM5ur4M4",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:""}))}c.isMDXComponent=!0}}]);