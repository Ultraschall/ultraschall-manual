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

Ultraschall is a project run by people in their spare time. The active team currently consists of only a handful of people. We are therefore always looking for new people who would like to join the project and bring new ideas. We want to give you an insight into the best way to get started with Ultraschall.

Ultraschall consists of several components that require different techniques and therefore different knowledge. Roughly speaking, there are the following areas:
- Ultraschall Plugin
    - includes the entire development of the plugin for Reaper. Almost everything is written in the Lua scripting language. Lua is a programming language that is quite easy to learn.  
    - Currently mainly [Ralf](https://github.com/rstockm) and [Mesopotine](https://github.com/mespotine) are working on it
    - Link to the Github repository](https://github.com/Ultraschall/ultraschall-portable)
- Ultraschall Installer
    - The plugin has to be installed on the computer somehow. There has been a separate installer for this for some time. The installer is different for each operating system and therefore requires different techniques, mostly shell scripts, but also others. 
    - Currently [Heiko](https://github.com/heikopanjas) is mainly working on this
    - [Link to the Github Repository](https://github.com/Ultraschall/ultraschall-installer)
- Ultraschall Soundboard
    - The soundboard is a separate plugin. With the soundboard, sounds can be played at the touch of a button during the podcast. The soundboard is developed in C++
    - The soundboard was developed by [Daniel](https://github.com/danlin). 
    [Link to the Github Repository](https://github.com/Ultraschall/ultraschall-soundboard)
- Ultraschall Manual
    - How do you learn to use new software? We'll try to teach you. If you're reading this, you've probably already read our manual. We have implemented the manual with Docusaurus. The texts are formatted in Markdown and Docusaurus does the rest. 
    - You can find the list of contributors [here](partcipants) 
    - [Link to the Github repository](https://github.com/Ultraschall/ultraschall-manual)


### Ultraschall Manual
You have various options for contributing to the manual: 
- **quite simple**: You write texts and send them to one of us, we take a look at it and add the texts
- **Medium**: You fork the repository and edit texts in a text editor of your choice and create a pull request
- **Advanced**: You fork the repository and install Dokusaurus and start the developer environment
- **Community**: You become part of the team and can create branches in the repository

Basically, you don't need much to get started. A simple text editor is enough to edit Markdown documents. If you are not yet part of the team, you can simply fork the manual and then clone it. Then you can start editing. 

However, Docusaurus also offers even more convenience by providing a developer server. To use it, you need to install a few things. You have to install `Node` and `npm`. How this works depends on your operating system. Once this is installed, you can install all other dependencies in the manual folder, `npm install`. Then you can start the developer server with `npm run start`. As soon as you save a file, it will be reloaded and you can see the changes directly in the browser. 

When you have finished editing, you can create a pull request and we will then take a look at what you have done and whether we can accept your edits. If everything fits, we will merge your pull request and your changes will appear in the manual.

Our online manual is always automatically built and published by a Github workflow. As soon as your contribution is in the main branch, it will also appear online a few minutes later. 
