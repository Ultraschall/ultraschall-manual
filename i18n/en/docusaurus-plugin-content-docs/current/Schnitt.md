---
id: cut
title: Cut
tags:
  - cut
EDIT:
    - Proofreading: 5/4/2022 @MirUnauffaellig
    - Final edit:
---

<!-- @todo: The numbers used in the chapter "Overview of controls and areas" should be used in all documents -->
<!-- @todo: Start gif loops only when needed (change gif) -->

## Introduction

Once you have finished recording, the next step is usually to edit your podcast episode. In this chapter you will learn how to remove unwanted parts from your recording and how to add chapter marks to your podcast.

:::info Info
There is a very good [tutorial video](#video) on this topic.
:::

## Important to know

Reaper cuts [non-destructive](https://de.wikipedia.org/wiki/Nicht-destruktive_Bearbeitung). This means that your audio files are not directly edited, but remain unchanged. So you can't do anything wrong or break anything when editing. In an emergency, you simply make a backup - or if things get really bad, you start all over again. Since version 5, Ultraschall makes a backup of your project file (not the audio files) every 10 minutes and saves it in the project folder.

:::tip Tip
**Restore backup:** If you need this function right now, don't panic. Ultraschall makes regular and fully automatic backups of your project. These are located in your project folder under 'Backup' and are named according to the following scheme: '$Project name-$Date_$Hours$Minutes'. To restore such a backup, first close Ultraschall. Then open your project in the Finder or Explorer and copy the backup file with the appropriate timestamp from the folder 'Backup' into the project directory (i.e. one level up). It is best to rename this file directly and open it with Ultraschall. Done!
:::

<!--[Backup](https://github.com/Ultraschall/ultraschall-portable/wiki/Ultraschall-5-Release-Notes#user-interface)-->

## Prepare for editing. ("Prepare all tracks for editing")

Before you can start editing, you need to make a few preparations. Make sure that the recording is finished and not just paused. In order to relieve you of the following steps as far as possible, Ultraschall offers the function 'Prepare all tracks for editing'. You will find it in the menu under 'Podcast' > 'Prepare all tracks for editing' - at the latest, the sound check will remind you of this if you forget to prepare the tracks before editing. Prepare all tracks for editing' performs the following steps:

- The automation mode <!-- @Todo: see what that actually is --> changes to 'Trim/Read' for all tracks or envelopes.
- All tracks and envelopes are deactivated for recording.
- All connections to StudioLink (if any) are removed.
- All StudioLink FX effects (if any) are removed.
- All soundboards (if present) are removed.
- StudioLink on-air streaming (if present) is stopped.
- All connections are routed to the master track.
- Routing is switched to edit mode.

:::info Info
Remember that 'Prepare all tracks for editing' terminates all StudioLink connections to your interlocutors! If you want to record something later, you can switch the track back to record and re-record something. Then you can run 'Prepare all tracks for editing' again.
:::

As the last step in preparing the edit, you can now switch to the edit view. To do this, you will find the button with the scissors [[17]](GUI-overview) in the left margin under `Views` - or you select `Podcast`>`Screenset editing` in the menu or press <kbd>F9</kbd>. This view improves the overview in your project - for example, through quick navigation at the top of the screen.

## Single cut

Ultraschall offers you two extremely efficient tools for cutting, with which you can do 90 percent of the work. Learn these two methods first before moving on to fine-tuning with the advanced tools:

### Cut across all tracks (ripple cut)

With the so-called ripple cut, you cut all tracks at the same time. This prevents content from shifting and the tracks from no longer lying correctly on top of each other. To use the function, drag a selection in the [Timeline [23]](GUI-overview) over the area you want to cut. Then click on the [Ripple Cut Button [7]](GUI-overview) or <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>X</kbd>.

### Mute disturbing passages (Mute)

<!-- @TODO Insert screenshots -->
If you don't want to cut sequences from your tracks, but you still don't want them to be audible, the best way to do this is to use the mute function: To do this, select the track(s) you want to edit and press <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Y</kbd>. If not already present, a mute envelope will appear under the selected track. The orange line of the mute envelope shows a valley in the progression form at the point you selected before. This envelope works according to the binary principle: If the line is up, the corresponding track can be heard; if the mute line is down, nothing can be heard on the assigned track.

You can also add further points to the line in the envelope and mute - or unmute - them with the mouse at the desired points. A double-click creates further editing points, which you then only have to drag up or down.

:::tip Tip
The fastest way to edit the mute envelope is with the mouse: If you want to change from "audible" to "inaudible" at a certain point, you only have to click in the mute envelope in the lower half of the envelope. This is only possible if the line is at the top at this point (and it makes sense that there is no editing point there yet). For the change from "not audible" to "audible" the procedure is analogous, but of course you have to click into the upper part of the envelope.
:::

## Advanced cut

### Split Items

With this function you split an item into two items. To do this, place the edit cursor where you want to split the item and click on the split button[[5]](GUI-overview) - or press the <kbd>S</kbd> key.

<!-- Sendegate contribution by Ralf https://sendegate.de/t/faq-einfacher-schnitt-aller-spuren/6911 -->

### Soft fade-in and fade-out

If you would like to gently fade in or out the volume at the beginning or end of an item, go with the mouse over the upper left edge of the item in the [timeline area [23]](GUI-overview). Then you will see that your mouse pointer changes into a curve. Now you can click and drag - and thus determine the fade or its duration. You can also do the same at the top right of each item.
<!-- Insert @TODO Gif -->

### Chapter marks

<!-- @todo: What happens to the video? https://www.youtube.com/watch?v=vdLpynu1ixE&t=5080s -->
In Ultraschall, you simply set chapter markers, which later (in most podcatchers) make it easier for your listeners to navigate within your episodes. For production, Ultraschall distinguishes between two types of markers: chapter markers and edit markers. You set the chapter markers via the <kbd>M</kbd> key or the corresponding button [[3]](GUI-overview) - these are the markers that will also appear later in the podcatcher. But you should also name the markers. Either later in the [marker dashboard](#marker-dashboard) or by directly setting a named marker with <kbd>Shift</kbd> + <kbd>M</kbd> and assigning a title.

You set the edit marks with the [[4]](GUI-overview) button or the <kbd>E</kbd> key. They are only relevant and visible to you during the edit so that you can mark places in the project and easily find them again later. They are not exported.

:::info Info
Regions are also ignored in the podcast export. However, you can use them to divide your audio material into different sections (for example, if you are cutting several episodes from a long recording) and then export these sections or regions as individual files using the export assistant.
:::

#### Marker Dashboard

<!-- @TODO: Insert photos -->
Open the marker dashboard with <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> or by pressing the corresponding button [[19]](GUI-overview). There you manage, name and export your chapter markers.

#### Region/Marker Manager

You will find the 'Region/Marker Manager' in the [Chapter Marker Area [28]](GUI-overview) at the bottom right. This area is shared by the [Routing Matrix [27]](GUI-overview), the [Filter [26]](GUI-overview) and the [Chapter Marker Manager [28]](GUI-overview). In the marker management you see all markers - both chapter and edit markers. You can edit them by double-clicking on the name field - you can set the colour of the marker by double-clicking on the field in the last column.

#### Photos

Optionally, you can also add photos to chapter markers, which are then displayed to match the currently playing chapter, provided the podcatcher supports this. Supported formats are .png and .jpg. You simply drag and drop the photos into your project onto a separate track and place them there at the desired location. A chapter marker is automatically added to each picture, but you still have to name it afterwards.

#### URLs

In addition (and also optional), you can also provide each chapter marker with a URL. You can also use the marker dashboard for this. Note: The '+' to add a URL in the corresponding field only appears if the chapter marker also has a name. Unnamed and therefore incomplete markers cannot have a URL added.

### Button overview

<!-- [ ]todo: is this really in the right place? -->
![buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons.png) The buttons [[1-8]](GUI-overview) in the top left-hand corner influence what happens when you click the mouse in the track area and drag it while holding down the mouse button: As in a word processing or other editing programme, the default setting is that you select a range. However, you can change this behaviour at the touch of a button and adapt it to your way of working - or by holding down the <kbd>Alt</kbd> or <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> key you can change the behaviour for the current action only.

#### [1] and [2]: Ripple Editing

![buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-ripple-per-track.png)

The ripple behaviour determines what exactly happens when you move (or remove) an item on a track during editing - and whether and how this affects other items on the same and the other tracks:

- No ripple**: The buttons [1] and [2] are not active (grey); if you move an item on a track, this has no effect on other items or tracks.
- Ripple per Track**: Button [1] is active (orange); if you move an item, all subsequent items on the same track will also move - if you have selected more than one item on different tracks, all subsequent items on all affected tracks will move.
- Ripple all Tracks**: Button [2] is active (orange - button [1] is ignored at this point); if you move an item on a track, all subsequent items on all tracks will also move. By default, ripple is deactivated for all tracks (buttons are grey).

![Ripple: Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/ripple-buttons.gif) **Ripple Editing:** _The buttons [1] and [2] influence the ripple behaviour when moving audio parts.

#### [3] and [4]: Marks

![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-markers.png)

Button [[3]](GUI-overview) sets an (unnamed) chapter marker at the current position of the play cursor - Button [[4]](GUI-overview) sets an edit marker. You can find more on the topic of markers in the section [Chapter markers](#Chapter markers).

#### [5]: Split

![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-split.png)

Button [[5]](GUI-overview) splits an item at the current cursor position. For more information, see the section [Split Items](#Split-Items).

#### [6]: Mouse Selection

![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-selection.png)

The button [[6]](GUI-overview) activates or deactivates the mouse selection mode and thus influences the mouse behaviour:

- **activated**: If you click on an item, hold down the mouse button and then drag the mouse, you select the affected area.
- **deactivated**: If you click on an item, keep the mouse button pressed and then drag the mouse, you move the selected item.

<!-- @todo: Insert GIFs here for better understanding -->

##### [7]: Ripple Cut

![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-ripple-cut.png)

Button [[7]](GUI-overview) corresponds to the key combination <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>X</kbd> - with this you cut the selected area out of your recording across all tracks. All subsequent items move to the left to close the resulting gap.

#### [8]: Show Mute Envelopes

![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-show-mute-envelopes.png)

Button [[8]](GUI-overview) shows or hides the mute envelopes of all tracks. See the section [Mute](#Mute) for more information.

### Moving items (track contents)

:::caution Caution
If you want to move individual elements ("items") on your tracks in the [Timeline [25]](GUI-overview), you should proceed extremely carefully - it happens very quickly that synchronously recorded tracks "slip" as a result. When listening, you will notice that the timing no longer fits: The speakers interrupt each other, pauses occur that were not there in the recording, and so on.
:::

The behaviour of the individual items when they are moved is determined by the [Ripple Setting](#Ripple Editing). However, you can temporarily influence the ripple behaviour only for the current action by performing the action with the <kbd>Alt</kbd> or <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> key pressed:

- **<kbd>Alt</kbd> (Mac/Windows/Linux) Hold down and move the item**: You move only the selected item(s).

![Ripple: Alt](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/ripple-key-alt.mp4)
<!-- todo: videos missing -->

- Press and hold **<kbd>Cmd</kbd> (Mac) or <kbd>Ctrl</kbd> (Windows/Linux) and move the item**: You move the selected item(s) and ALL items behind it.

![Ripple: Cmd](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/ripple-key-cmd.mp4)
<!-- todo: videos missing -->

## Insert audio content into the project afterwards

To add more sounds or recordings to your project after a recording, simply drag and drop the desired files into your project. If you drag the file into the [timeline area [25]](GUI-overview) to a place in the project where there is no track, Ultraschall automatically creates a new track with the contents of the file (and names it after the file name). This way you can also embed whole Ultraschall projects (`.rpp`) into other projects.

:::caution Attention
Under the menu item `Edit`>`Project Settings` you set how Ultraschall should handle added media files. Here we recommend the setting 'Copy media to project' in any case. It is best to check the box `Copy imported media to project media directory` directly in the global REAPER settings under `Options`> `Preferences` under the item `Media`. Otherwise it can happen that you unintentionally have references to files in your project that are not in the project folder - and then cause problems at the latest when moving or copying the project.
:::

### Cut, copy and paste

To cut or copy audio within your project, select the item to be copied or set a time marker. If you then right-click on the selected area (or open the 'Edit' menu), you can either copy the whole item (standard behaviour; also via <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>C</kbd>) or the selected area within an item. Cutting works in the same way.

To paste copied or cut content, click in the left [track area [23]](GUI-overview) and select the track where you want the content to end up. Then place the cursor at the desired position and select 'Paste' either via the 'Edit' or the context menu - or via the key combination <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>V</kbd>.

![Copy and Paste](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/copy-and-cut.png) _The context menu has various copy and cut modes._

### Double-ender recordings

If your fellow cast members are connected to you via StudioLink via a poor or unstable internet connection, it makes sense for them to run a local recording in their StudioLink standalone clients as a precaution. To do this, they click on the 'Record' button in the StudioLink browser window. The file that must later be sent to the editor can be found in your own files in a `studiolink` folder and there in a subdirectory with a recording time stamp under the file name `local.flac`.

<!-- ### Swapping and aligning tracks (for example after double-ender recordings) -->
<!--@todo: What about this section? -->

<!-- https://www.youtube.com/watch?v=vdLpynu1ixE&t=1853s -->

<!-- ## Tips for successful pruning -->

## Video
<iframe width="560" height="315" src="../youtube/?url=RnkHsQp2Mbw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="">
</iframe>
