---
id: adaption
title: 'Adaptations, shortcuts and co.'
tags:
  - keyboard
  - shortcuts
  - basic knowlegde 
proofreading:
    - Proofreading: 24.4.2022 @MirUnauffaellig.
    - Final Correction: 
---

<!-- @todo: Start gif loops only when needed (change gif) -->

![customizing-banner](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Anpassungen-und-Shortcuts/0-banner-custom.png)

## Introduction

To speed up your recording and editing work, Ultraschall provides numerous shortcuts that make your work easier. In this chapter you will learn how to use the shortcuts already provided - and how to set up your own shortcuts.

## Ultraschall presets

:::info Info
**Note for Ultraschall veterans:** Unlike in previous versions, quite a few keyboard shortcuts are now globally available. Where keyboard shortcuts used to depend on which programme area had the focus at the time, since version 5 many shortcuts are set to always work. This should solve typical problems - such as no marker being set after pressing <kbd>M</kbd> because you last clicked on something in the soundboard.
:::

**Overview of all shortcuts:** In the new menu item `Podcast`>`Help and Documentation` you will find an automatically generated, sorted list of all active shortcuts and mouse modifiers.

**Updated keyboard template:** All relevant shortcuts can be found in [this handy PDF](http://url.ultraschall-podcast.de/keymap5):
[![Keymap](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Anpassungen-und-Shortcuts/keymap.jpg)](http://url.ultraschall-podcast.de/keymap5)

**Close current project tab:** On the Mac, close the tab of the currently open project by default with <kbd>Cmd</kbd> + <kbd>W</kbd>.

**Dynamic Split Items:** The function `Dynamic Split Items` is now again directly accessible via the keyboard shortcut <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd>.

**Normalisation:** Use <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> to normalise all selected items to -23 LUFS. With <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> you cancel any normalisation.

## Navigation

**Trackpad/mouse wheel functions:** Unfortunately, trackpads and the mouse wheel sometimes get in each other's way. The mouse wheel now has the following assignments, which can also be found in almost all other editing programmes:

- **Scroll**: vertical scrolling of the [timeline-workspace [25]](GUI-overview#area-workspace).
- **Scroll** while holding <kbd>Shift</kbd> key: horizontal scrolling of the [timeline-workspace [25]](GUI-overview#space-workspace)
- **Scroll** while holding <kbd>Opt</kbd>/<kbd>Alt</kbd> key: horizontal zoom.
- **Scroll** while holding <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> key - vertical zoom.
- **Click**: sets the edit cursor without selecting tracks or items.
- **Click** and **Drag**: freely move the [timeline workspace [25]](GUI-overview#area-workspace) <!-- [ ] ToDo: check and correct if necessary -->

**Check cuts:** The shortcuts <kbd>Alt</kbd> + <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>←</kbd> and <kbd>Alt</kbd> + <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>→</kbd> set the playbackcursor to the next item edge (on selected tracks only); the cursor then jumps back by the value specified in the Ultraschall settings for previews and starts the playback process - perfect for quickly checking all cuts in a project.

**Zoom to selection and back:** The shortcut <kbd>Shift</kbd> + <kbd>Z</kbd> zooms the view to a time selection or to the selected items. The selection is then cancelled. Pressing it again returns the view to the original zoom level.

**Zoom to edit cursor: <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + **pin** on the trackpad does not zoom to the position of the mouse pointer, but to that of the edit cursor.

## Use your own shortcuts

To access the menu for the shortcuts, open the 'Actions' dialogue from the menu 'Actions' > 'Show action list'. Here you can customise the shortcuts if the default Ultraschall settings do not suit you for some reason.

### Global shortcuts

In this example, we create the new shortcut <kbd>Alt</kbd> + <kbd>Input</kbd>, which should open the Project Settings. To do this, find the corresponding action - in the example `Project Settings` - and click the `Add...` button to call up the `Keyboard/MIDI/OSC Input` dialogue for specifying a shortcut. First type in the shortcut you want to use in the future and then select 'Global' from the 'Scope' drop-down list. After confirming with `OK`, your new shortcut is available everywhere in Ultraschall. (You will know it is global when the keyword "(global)" appears after the shortcut at the bottom of the list).



![Shortcuts Global](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Anpassungen-und-Shortcuts/globale_shortcuts.gif)

:::note Note
It is important to make sure that you do NOT select 'Global + text fields' in the scope selection list, otherwise your shortcut will be triggered even if you type in text somewhere (for example, when naming chapter markers). And that is usually not what you want.
:::

### Create and use your own shortcuts

In this example, we change the shortcut <kbd>Alt</kbd> + <kbd>Enter</kbd> we have just set so that it is not set globally, but only works when the keyboard focus is on the [Tracks [23]](GUI-overview) or the [Mixer [24]](GUI-overview). For this purpose you will find the handy button 'Find shortcut' in the 'Actions' dialogue. There you enter the shortcut and land in the action linked to it. There you basically do the same as before with the assignment: You click on `Add...` and enter the shortcut again, i.e. here <kbd>Alt</kbd> + <kbd>Enter</kbd>. Please make sure that `Normal` is selected in the `Scope` drop-down list. Then confirm with `OK`.

![Shortcuts Local](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Anpassungen-und-Shortcuts/lokale_shortcuts.gif)

You can tell that your shortcut is set correctly when there is NO "(global)" after the shortcut name in the shortcut list at the bottom.

## Ultraschall Settings

The Ultraschall  Settings are displayed via the podcast menu or the keyboard shortcut <kbd>;</kbd>. These are divided into three areas via tabs: <kbd>GENERAL</kbd>, <kbd>SOUNDCHECK</kbd> sowie <kbd>INTERFACES</kbd>.

### General Settings

![general-settings](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Anpassungen-and-Shortcuts/settings_general.png))

Following settings can be made:

* Show the start screen
  * Show Ultraschall start screen on launch
* Check for updates
  * Check for Ultraschall updates on launch. Only a message is displayed. No further data is transferred.
* Preroll time preview
  * Set the time in seconds by which the program jumps back when the <kbd>p</kbd> key is used to preview cuts.
* Preroll time recording
  * Set the time in seconds by which the program jumps back for a preroll recording.
* Preshow music mix
  * Play some music from the Ultraschall-Soundboard in your preshow to entertain the livestream. If you choose the preshow routing preset, you can mix none (0) some or all (1) of the music to your headphones mix.
* Soundboard ducking during recording
  * Activate ducking of the soundboard during recording. If anyone starts to talk to a microphone, the Soundboard track will be gently reduced in volume.
* Soundboard ducking during editing
  * Activate ducking of the soundboard during editing. If anyone starts to talk to a microphone, the Soundboard track will be gently reduced in volume.
* Marker ping sound during playback
  * Play a sound if a chapter- oder edit-marker is passed during playback
* Volume of Ping-Sound
  * Set volume of the ping sound
* Followmode auto detection
  * Turns off Follow Mode when clicking into Arrange View. Disable this if you encounter problems with the Followmode.
* Graceful Soundcheck
  * Set all open soundcheck warnings to the _ignore_ state by closing the soundcheck window.
* Recording safemode
  * Warn about an unwanted stop of the recording after hitting <kbd>SPACE</kbd> or <kbd>RETURN</kbd>.
* Autocolor tracks - Sonic Rainboom
  * New tracks get a unique color. Local tracks start with blue, remote tracks (StudioLink) will be orange and the Soundboard grey.
* Autoarrange track height
  * Zoom or shrink tracks to fit the arrangeview|if new tracks or envelopes are added.    
* Large marker manager
  * Give way more space to the marker manager on the right.  

### Soundcheck Settings

![soundcheck-settings](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Anpassungen-und-Shortcuts/settings_soundcheck.png)

### Interfaces Settings for Direct Monitoring

![interfaces-settings](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Anpassungen-und-Shortcuts/settings_interfaces.png)

<!-- [ ] ToDo for V2: the chapter does not yet exist.
## Use control devices (Midi, OSC, etc.)

:::info Info
You can also control all shortcuts via Midi and OSC. Information on this can be found in the chapter [Miscellaneous](https://pad.gwdg.de/sLRAFF9eS0OwYFuobe_wZw#).
:::
-->
