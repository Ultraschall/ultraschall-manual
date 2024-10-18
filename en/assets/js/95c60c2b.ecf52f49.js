"use strict";(self.webpackChunkultraschall_manuel=self.webpackChunkultraschall_manuel||[]).push([[557],{3708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(4848),r=t(8453);const a={id:"recording",title:"Recording",tags:["recording","beginner","setup","preparation","interface","projekt","tracks","studio-link","soundboard"],editing:[{Proofreading:"24.4.2022 @MirUnauffaellig"},{"Final correction":null},{translated:"8.5.22"}]},s=void 0,o={id:"recording",title:"Recording",description:"recording-banner",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Aufnahme.md",sourceDirName:".",slug:"/recording",permalink:"/ultraschall-manual/en/docs/next/recording",draft:!1,unlisted:!1,editUrl:"https://github.com/Ultraschall/ultraschall-manual/edit/main/docs/Aufnahme.md",tags:[{inline:!0,label:"recording",permalink:"/ultraschall-manual/en/docs/next/tags/recording"},{inline:!0,label:"beginner",permalink:"/ultraschall-manual/en/docs/next/tags/beginner"},{inline:!0,label:"setup",permalink:"/ultraschall-manual/en/docs/next/tags/setup"},{inline:!0,label:"preparation",permalink:"/ultraschall-manual/en/docs/next/tags/preparation"},{inline:!0,label:"interface",permalink:"/ultraschall-manual/en/docs/next/tags/interface"},{inline:!0,label:"projekt",permalink:"/ultraschall-manual/en/docs/next/tags/projekt"},{inline:!0,label:"tracks",permalink:"/ultraschall-manual/en/docs/next/tags/tracks"},{inline:!0,label:"studio-link",permalink:"/ultraschall-manual/en/docs/next/tags/studio-link"},{inline:!0,label:"soundboard",permalink:"/ultraschall-manual/en/docs/next/tags/soundboard"}],version:"current",frontMatter:{id:"recording",title:"Recording",tags:["recording","beginner","setup","preparation","interface","projekt","tracks","studio-link","soundboard"],editing:[{Proofreading:"24.4.2022 @MirUnauffaellig"},{"Final correction":null},{translated:"8.5.22"}]},sidebar:"tutorialSidebar",previous:{title:"Navigations, shortcuts, settings and co.",permalink:"/ultraschall-manual/en/docs/next/adaption"},next:{title:"Cut",permalink:"/ultraschall-manual/en/docs/next/cut"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Create new project",id:"create-new-project",level:2},{value:"Project templates",id:"project-templates",level:2},{value:"Create tracks",id:"create-tracks",level:2},{value:"Select inputs",id:"select-inputs",level:2},{value:"Select Audio Device",id:"select-audio-device",level:3},{value:"Select and assign tracks",id:"select-and-assign-tracks",level:3},{value:"Routing",id:"routing",level:2},{value:"Magic Routing",id:"magic-routing",level:3},{value:"Manual routing",id:"manual-routing",level:3},{value:"Soundcheck",id:"soundcheck",level:2},{value:"Recording with Studiolink",id:"recording-with-studiolink",level:2},{value:"Using the soundboard",id:"using-the-soundboard",level:2},{value:"Insert soundboard track",id:"insert-soundboard-track",level:3},{value:"Operation",id:"operation",level:3},{value:"The Soundboard controls in detail",id:"the-soundboard-controls-in-detail",level:3},{value:"Video",id:"video",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/0-banner-recording.png",alt:"recording-banner"})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Now the actual recording can begin. In this chapter you will learn how to create tracks, select your audio sources and then start recording."}),"\n",(0,i.jsx)(n.admonition,{title:"Video",type:"info",children:(0,i.jsxs)(n.p,{children:["There is a very good ",(0,i.jsx)(n.a,{href:"#video",children:"tutorial video"})," on this topic."]})}),"\n",(0,i.jsx)(n.h2,{id:"create-new-project",children:"Create new project"}),"\n",(0,i.jsxs)(n.p,{children:["REAPER always opens the last edited project when it is started. If REAPER does not find a last project, REAPER opens a new, empty project. You can save this project via the menu ",(0,i.jsx)(n.code,{children:"File"}),">",(0,i.jsx)(n.code,{children:"Save project"})," or with ",(0,i.jsx)("kbd",{children:"Cmd"}),"/",(0,i.jsx)("kbd",{children:"Ctrl"})," + ",(0,i.jsx)("kbd",{children:"S"}),". If you record something before you have saved the project, the audio files are stored in the folder 'Documents/REAPER Media' on your hard disk. You can create a new project via ",(0,i.jsx)(n.code,{children:"File"}),">",(0,i.jsx)(n.code,{children:"New Project"})," or ",(0,i.jsx)("kbd",{children:"Cmd"}),"/",(0,i.jsx)("kbd",{children:"Ctrl"})," + ",(0,i.jsx)("kbd",{children:"N"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["You should always save your project before recording; this saves you data chaos afterwards. The ",(0,i.jsx)(n.a,{href:"#Soundcheck",children:"Soundcheck"})," helps you not to forget this."]})}),"\n",(0,i.jsx)(n.h2,{id:"project-templates",children:"Project templates"}),"\n",(0,i.jsxs)(n.p,{children:["To avoid having to create and configure a project every time you record, you can set up a project once and then save it as a template via ",(0,i.jsx)(n.code,{children:"File"}),">",(0,i.jsx)(n.code,{children:"Project Templates"}),">",(0,i.jsx)(n.code,{children:"Save project as template"}),". You can open this template before each new recording via ",(0,i.jsx)(n.code,{children:"File"}),">",(0,i.jsx)(n.code,{children:"Project Templates"}),">",(0,i.jsx)(n.code,{children:"$NAME_of_the_template"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"create-tracks",children:"Create tracks"}),"\n",(0,i.jsxs)(n.p,{children:["In order to conveniently edit all speakers, music and, for example, sound effects later, you create a separate track for each audio source in the ",(0,i.jsx)(n.a,{href:"GUI-overview",children:"Tracks [23]"})," area. In Ultraschall there are essentially three types of tracks:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Track** - for example for a local speaker"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"StudioLink Track"}),' - for example, for an interview guest that you connect via the Internet using StudioLink (see also below "',(0,i.jsx)(n.a,{href:"#record-with-studiolink",children:"Recording with StudioLink"}),'")']}),"\n",(0,i.jsxs)(n.li,{children:['Ultraschall Soundboard Track** - for recordings that you play back via the soundboard during the recording (see also below "',(0,i.jsx)(n.a,{href:"#use-the-soundboard",children:"Use the soundboard"}),'").']}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Regular tracks, to which you assign individual speakers or tracks of your multi-track recorder (such as Zoom H6) in the next step, are created either by double-clicking in the ",(0,i.jsx)(n.a,{href:"GUI-overview",children:"track area [23]"})," area, with the keyboard command ",(0,i.jsx)("kbd",{children:"Cmd"}),"/",(0,i.jsx)("kbd",{children:"Ctrl"})," + ",(0,i.jsx)("kbd",{children:"T"})," or with a right-click in the ",(0,i.jsx)(n.a,{href:"GUI-overview",children:"track area [23]"})," and then a click on ",(0,i.jsx)(n.code,{children:"Insert new track"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/insert-new-track.jpg",alt:"insert-new-track"})," ",(0,i.jsx)(n.strong,{children:"Insert new track:"})," ",(0,i.jsx)(n.em,{children:"Inserting new tracks enables the recording of the individual audio tracks."})]}),"\n",(0,i.jsx)(n.p,{children:"With a click in the still empty, but already coloured area, it is best to directly assign a name to your track - this way you will not lose the overview even in larger projects."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/track-renaming.png?=650x",alt:"track-renaming"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Name track:"})," ",(0,i.jsx)(n.em,{children:"Set meaningful names(SINNVOLLER NAME) for your tracks, this will make it easier for you to assign them later."})]}),"\n",(0,i.jsxs)(n.p,{children:["Since version 5 of Ultraschall, tracks are not only automatically adjusted in height to the size of the window, but also automatically coloured for clarity. If you right-click on the track (or use the keyboard shortcut ",(0,i.jsx)("kbd",{children:"Alt"})," + ",(0,i.jsx)("kbd",{children:"C"})," with the track selected), you can change the colour in the colour picker afterwards."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/project-with-4-tracks.png?=650x",alt:"example-project"})," ",(0,i.jsx)(n.strong,{children:"Example project:"})," ",(0,i.jsx)(n.em,{children:"This is what a project with two speakers, a StudioLink track and a soundboard looks like."})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"The whole thing again as a video explanation:"})}),"\n",(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://ultraschall.github.io/ultraschall-manual/youtube/?url=p5kYH-YheN0?start=846",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:"allowfullscreen"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Remark:"}),"\nThis video is in German. Please do not forget to turn on auto-generated subtitles."]}),"\n",(0,i.jsx)(n.h2,{id:"select-inputs",children:"Select inputs"}),"\n",(0,i.jsx)(n.h3,{id:"select-audio-device",children:"Select Audio Device"}),"\n",(0,i.jsxs)(n.p,{children:["The audio device (typically a microphone or an audio interface) with which the recording is to be made is selected via the menu ",(0,i.jsx)(n.code,{children:"REAPER"}),">",(0,i.jsx)(n.code,{children:"Preferences"})," (or ",(0,i.jsx)("kbd",{children:"Cmd"})," + ",(0,i.jsx)("kbd",{children:","}),"). There you will find ",(0,i.jsx)(n.code,{children:"Audio"}),">",(0,i.jsx)(n.code,{children:"Device"})," the field ",(0,i.jsx)(n.code,{children:"Audio Device"}),". In this example it is a Zoom H6."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/Audiodevice_auswaehlen.jpg?=650x",alt:"Select audio device"})," ",(0,i.jsx)(n.strong,{children:"Select audio device:"})," ",(0,i.jsx)(n.em,{children:"In the settings you can select your audio device."})]}),"\n",(0,i.jsx)(n.p,{children:"An audio device can have several inputs (but it does not have to), which can be assigned to different tracks. If we stick to our example with a Zoom H6, we have four (plus two) inputs available here. You can record with four - or with a corresponding extension with six - microphones at the same time."}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"note",children:(0,i.jsx)(n.p,{children:"The way the inputs are counted is device-specific, so in Ultraschall the channel designation may be different from the one given on your device (for example, channel 1 on the Zoom H6 is listed as channel 3 in Ultraschall)."})}),"\n",(0,i.jsx)(n.h3,{id:"select-and-assign-tracks",children:"Select and assign tracks"}),"\n",(0,i.jsx)(n.p,{children:"All speakers, all those connected via StudioLink and the sound effects (in the soundboard) now each have their own track. The next step is to assign these tracks to the recording channels - that is to the various microphones attached to your recording device."}),"\n",(0,i.jsxs)(n.p,{children:["All tracks that you have created in the main window of Ultraschall can also be found in the ",(0,i.jsx)(n.a,{href:"GUI-overview",children:"Mixer area [24]"}),". The assignment is made via the track names, the displayed track numbers or the sorting (in the ",(0,i.jsx)(n.a,{href:"GUI-overview",children:"track area [23]"})," from top to bottom, which corresponds to a sorting from left to right in the ",(0,i.jsx)(n.a,{href:"GUI-overview",children:"mixer area [24]"}),"):"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/tracks.png?=450x",alt:"tracks"})," ",(0,i.jsx)(n.strong,{children:"Tracks and mixers:"})," ",(0,i.jsx)(n.em,{children:"Each track has its own mixer."})]}),"\n",(0,i.jsxs)(n.p,{children:['Ultraschall tries to assign all tracks and recording channels automatically. However, if you notice that the voices do not land correctly on the tracks named in step "',(0,i.jsx)(n.a,{href:"#track-create",children:"Create tracks"}),", you can make the assignments manually in the ",(0,i.jsx)(n.a,{href:"GUI-overview",children:"Mixer [24]"})," via the corresponding 'Input' drop-down menus. It is best to get into the habit of briefly checking all local microphone tracks before recording - ",(0,i.jsx)(n.strong,{children:"the StudioLink and Soundboard tracks are always automatically assigned correctly"}),", they do not need a physical input and remain set to ",(0,i.jsx)(n.code,{children:"Input: None"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/track-assignment.png?=450x",alt:"track-assignment"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Assign inputs:"})," ",(0,i.jsx)(n.em,{children:"Use the drop-down menu to select the input."})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"The same explaination in a video."})}),"\n",(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://ultraschall.github.io/ultraschall-manual/youtube/?url=p5kYH-YheN0?start=911",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:"allowfullscreen"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Remark:"}),"\nThis video is in German. Please do not forget to turn on auto-generated subtitles."]}),"\n",(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://ultraschall.github.io/ultraschall-manual/youtube/?url=vdLpynu1ixE?start=4970",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:"allowfullscreen"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Remark:"}),"\nThis video is in German. Please do not forget to turn on auto-generated subtitles."]}),"\n",(0,i.jsx)(n.h2,{id:"routing",children:"Routing"}),"\n",(0,i.jsx)(n.p,{children:"The routing serves to ensure that the respective participants can hear each other - and also that any soundboard that may be present can be heard by all (also via an internet connection using StudioLink)."}),"\n",(0,i.jsx)(n.h3,{id:"magic-routing",children:"Magic Routing"}),"\n",(0,i.jsxs)(n.p,{children:["Since version 5, Ultraschall has a so-called magic routing that completely relieves you of manual routing. Ultraschall automatically recognises whether you are cutting or recording and switches the routing accordingly. On the left side of the screen you will find the ",(0,i.jsx)(n.a,{href:"GUI-overview",children:"routing buttons [14-18]"})," for the following routing settings:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/magic-routing.png",alt:"Magic Routing"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Magic Routing (on/off)** ",(0,i.jsx)(n.a,{href:"GUI-overview",children:"[14]"}),": If this is switched on, Ultraschall automatically takes care of the correct routing. You don't have to do anything else."]}),"\n",(0,i.jsxs)(n.li,{children:["Preshow Routing** ",(0,i.jsx)(n.a,{href:"GUI-overview",children:"[15]"}),": If you stream your podcast recording live via StudioLink-on-Air, you can set this in such a way that your soundboard can already be heard in the stream, but no speakers can be heard yet. "]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Recording-Routing"})," ",(0,i.jsx)(n.a,{href:"GUI-overview",children:"[16]"}),": This is the setting for the actual recording of your podcast."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Editing routing"})," ",(0,i.jsx)(n.a,{href:"GUI-overview",children:"[17]"}),": This setting is for editing your recording."]}),"\n",(0,i.jsxs)(n.li,{children:["StudioLink-on-Air (on/off)** ",(0,i.jsx)(n.a,{href:"GUI-overview",children:"[18]"}),": This button adjusts the routing for your StudioLink-on-Air stream."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"manual-routing",children:"Manual routing"}),"\n",(0,i.jsxs)(n.p,{children:["If you prefer to set the routing manually, you can do this via the settings ",(0,i.jsx)(n.code,{children:"View"}),">",(0,i.jsx)(n.code,{children:"Routing Matrix"})," or with ",(0,i.jsx)("kbd",{children:"Alt"})," + ",(0,i.jsx)("kbd",{children:"R"}),". The ",(0,i.jsx)(n.a,{href:"GUI-overview",children:"Routing Matrix [27]"})," shows you an overview of which people can hear each other. You can change the assignment manually here, but since the introduction of Magic Routing we do not recommend it."]}),"\n",(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://ultraschall.github.io/ultraschall-manual/youtube/?url=p5kYH-YheN0?start=2917",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:"allowfullscreen"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Video:"})," ",(0,i.jsx)(n.em,{children:"From minute 49 onwards, the video below explains how routing was adjusted in older versions."})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Remark:"}),"\nThis video is in German. Please do not forget to turn on auto-generated subtitles."]}),"\n",(0,i.jsx)(n.h2,{id:"soundcheck",children:"Soundcheck"}),"\n",(0,i.jsx)(n.p,{children:"Soundcheck helps you avoid the most common mistakes when podcasting with Ultraschall. The sound check issues a warning when Ultraschall has detected a potential error. You can switch the individual components of the sound check on or off as required in the settings. The sound check checks in detail:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Unsaved Project:"})," Warns you when you want to record something but have not yet saved the project. This prevents data chaos."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Prepare all tracks for editing:"})," Warns you if you want to start editing after recording but the tracks are not yet prepared."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Check for 48 KHz sample rate:"})," If you want to use StudioLink or StudioLink-on-Air, you must use 48 KHz as the sample rate."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Internal mic used (Check if internal mic is selected):"})," Checks if you are accidentally using your laptop's internal mic to record instead of your good mic."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Start recording only at the end:"})," Prevents you from unintentionally recording in the middle of your project."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Unknown sound interface:"})," Checks if you have connected a new sound interface for which you have not yet made a direct monitoring setting."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Echo and distortion prevention:"})," If your interface does not have direct monitoring, you should select the correct block size.  A block size of 128 samples leads to latency and echoes, a block size of 32 samples leads to instability. We recommend a block size of 512 samples for direct monitoring and 64 samples without direct monitoring."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Input Wizard:"})," Checks if you are assigning an input multiple times or if you are using an interchangeable input on a Zoom. "]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/soundcheck.png",alt:"soundcheck"})," ",(0,i.jsx)(n.strong,{children:"Soundcheck:"})," ",(0,i.jsx)(n.em,{children:"This is what a sample soundcheck looks like in an unsecured project."})]}),"\n",(0,i.jsxs)(n.p,{children:["You can either ignore the warning messages on the left with the 'Ignore' button or correct the problem with the button on the right. In the middle, a text field explains the problem in more detail. If you close the sound check window without having fixed the problem, all warnings are automatically ignored. You can also press ",(0,i.jsx)("kbd",{children:"Esc"})," to close it. In the dashboard (bottom, centre) you can see the status of your sound check at any time - a click on this sound check bar opens the sound check overview again."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/Dashboard.png",alt:"Soundcheck Dashboard"})," ",(0,i.jsx)(n.strong,{children:"Dashboard:"})," ",(0,i.jsx)(n.em,{children:"The dashboard with any warnings can be found in the soundcheck bar at the bottom of the window."})]}),"\n",(0,i.jsx)(n.h2,{id:"recording-with-studiolink",children:"Recording with Studiolink"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://studio-link.de",alt:"StudioLink"})," is a stand-alone software that allows you to remotely join another Ultraschall recording or integrate other people into your recording via the internet."]}),"\n",(0,i.jsxs)(n.p,{children:["StudioLink is available in two versions: One is the ",(0,i.jsx)(n.em,{children:"Standalone version"})," (for your guests) and the other is a ",(0,i.jsx)(n.em,{children:"Plugin"})," (for you to record in Ultraschall). The StudioLink plug-in is pre-installed in Ultraschall. Updates of StudioLink always come together with Ultraschall updates. You can find detailed documentation on StudioLink itself here: ",(0,i.jsx)(n.a,{href:"https://doku.studio-link.de/",children:"StudioLink doc"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You insert a StudioLink track into your project via the menu 'Podcast' -> 'Insert StudioLink and Soundboard Tracks' -> 'Insert StudioLink track'. Alternatively, you can right-click in the ",(0,i.jsx)(n.a,{href:"GUI-overview",children:"Tracks section [23]"})," and select the appropriate option."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/studiolink_insert_track.png",alt:"insert-new-studiolink-track"})," ",(0,i.jsx)(n.strong,{children:"Screenshot:"})," ",(0,i.jsx)(n.em,{children:"This is how you insert a StudioLink track via the menu."})]}),"\n",(0,i.jsx)(n.admonition,{title:"Attention!",type:"danger",children:(0,i.jsxs)(n.p,{children:["The StudioLink tracks appear in Ultraschall as normal tracks in the ",(0,i.jsx)(n.a,{href:"GUI-overview#area-workspaceew",children:"Track Area [23]"})," or in the ",(0,i.jsx)(n.a,{href:"GUI-overview#area-workspace",children:"Mixer Area [24]"}),". At the same time, however, a browser window opens in your standard browser, through which the actual connection is established and later also terminated. If you are using Windows, you must not close the console window that also appears, otherwise you will not be able to establish a connection. "]})}),"\n",(0,i.jsxs)(n.p,{children:["The browser window opens separately. (Please follow the instructions on ",(0,i.jsx)(n.a,{href:"https://studio-link.de",children:"StudioLink"}),"!)"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/studiolink_browser.jpg",alt:"Studio-Link"})," ",(0,i.jsx)(n.strong,{children:"StudioLink:"})," ",(0,i.jsx)(n.em,{children:"Studio-Link in the Browser"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/studiolink_konsole.png",alt:"Windows Console Window"})," ",(0,i.jsx)(n.strong,{children:"Windows Console:"})," ",(0,i.jsx)(n.em,{children:"Please do not close this window or StuidoLink will not work!"})]}),"\n",(0,i.jsx)(n.h2,{id:"using-the-soundboard",children:"Using the soundboard"}),"\n",(0,i.jsx)(n.h3,{id:"insert-soundboard-track",children:"Insert soundboard track"}),"\n",(0,i.jsxs)(n.p,{children:["Ultraschall comes with its own soundboard, which you can use to insert music and sound effects during the recording, for example your intro, dividers or other audio snippets. You insert a soundboard track via the menu 'Podcast' -> 'Insert StudioLink and Soundboard tracks' -> 'Insert Ultraschall soundboard track'. Alternatively, you can right-click in the ",(0,i.jsx)(n.a,{href:"GUI-overview",children:"Tracks section [23]"})," and select the appropriate option."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/insert-soundboard-track.png",alt:"soundboard-track"})," ",(0,i.jsx)(n.strong,{children:"Insert soundboard - option 1:"})," ",(0,i.jsx)(n.em,{children:"Use the podcast menu to insert a soundboard track."})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/add-soundboard-2.png",alt:"alternative-soundboard-track"})," ",(0,i.jsx)(n.strong,{children:"Insert soundboard - option 2:"})," ",(0,i.jsx)(n.em,{children:"You can also insert a soundboard track by right-clicking in the track area."})]}),"\n",(0,i.jsx)(n.admonition,{title:"Attention!",type:"danger",children:(0,i.jsx)(n.p,{children:"We recommend creating only one soundboard track per project. Sounds for a project should therefore be combined from different directories into one soundboard before recording."})}),"\n",(0,i.jsx)(n.h3,{id:"operation",children:"Operation"}),"\n",(0,i.jsxs)(n.p,{children:["To teach the soundboard where your sound files are located, select the corresponding track and switch to the view for the plug-in list by clicking on the corresponding ",(0,i.jsx)(n.code,{children:"FX"})," button of the track in the ",(0,i.jsx)(n.a,{href:"GUI-overview",children:"mixer area [24]"}),". There you make sure that the 'Soundboard' plug-in is activated (tick is set). Use the folder symbol at the top left of the plug-in area to define the directory, in which you have saved the sound files for the soundboard."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/soundboard-activation_new.png",alt:"soundboard-activation"}),"\n",(0,i.jsx)(n.strong,{children:"Soundboard activation"}),": ",(0,i.jsx)(n.em,{children:"This is how you activate a soundboard."})]}),"\n",(0,i.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,i.jsx)(n.p,{children:"The files are always displayed here in alphabetical order. If you prefer to sort the files in the same order as you might use them in your recording, it is best to put a number in front of the file name."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/soundboard-filled.png",alt:"soundboard-filled"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Soundboard"}),": ",(0,i.jsx)(n.em,{children:"This is what a filled soundboard looks like."})]}),"\n",(0,i.jsx)(n.h3,{id:"the-soundboard-controls-in-detail",children:"The Soundboard controls in detail"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"File name of the audio clip"})," (without file extension)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Loop function"}),": if activated, the clip plays in an endless loop after pressing the play button [4]."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Remaining time display"}),": shows how long the clip will continue to play - before playback, it therefore shows the total running time of the clip."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Play button"}),": starts the playback of the player"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Stop button"}),": interrupts the playback of the player"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Soft fade-in"}),": starts playback like [4] - starts mute, volume increases over about five seconds; the rest of the clip plays at the set volume"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Volume"}),": individual volume setting for the respective clip."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"video",children:"Video"}),"\n",(0,i.jsx)("div",{class:"youTubeContainer",children:(0,i.jsx)("iframe",{src:"https://ultraschall.github.io/ultraschall-manual/youtube/?url=JzrngeaXQdE",title:"YouTube video player",frameborder:"0",allowfullscreen:"allowfullscreen",class:"video"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(6540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);