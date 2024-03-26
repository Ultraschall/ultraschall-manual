---
id: recording
title: 录音
tags:
  - recording
  - beginner
  - setup
  - preparation
  - interface
  - projekt
  - tracks
  - studio-link
  - soundboard
editing:
    - Proofreading: 24.4.2022 @MirUnauffaellig
    - Final correction:
    - translated: 8.5.22
---

<!-- @todo: Adjust screenshot size -->
<!-- @todo: decide what to do with it. https://www.youtube.com/watch?v=p5kYH-YheN0 -->

![recording-banner](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/0-banner-recording.png)

## 简介

现在可以开始实际录制了。在本章中,您将学习如何创建音轨、选择音频源并开始录制。

:::info 视频
关于这个主题有一个非常好的[教学视频](#video)。
:::

## 创建新项目

REAPER启动时总是打开上次编辑的项目。如果REAPER找不到上次的项目,则会打开一个新的空项目。您可以通过菜单`文件` > `保存项目`或<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>S</kbd>来保存该项目。如果您在保存项目之前录制了内容,则音频文件将存储在硬盘上的"文档/REAPER媒体"文件夹中。您可以通过`文件` > `新建项目`或<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>N</kbd>创建新项目。

:::info
在录制之前,您应该始终保存项目;这可以避免事后出现数据混乱。[音频检查](#Soundcheck)有助于不会忘记这一步。
:::

## 项目模板

为了避免每次录制时都必须创建和配置项目,您可以先设置一个项目,然后通过`文件` > `项目模板` > `将项目另存为模板`将其保存为模板。您可以在每次新录制之前通过`文件` > `项目模板` > `$模板名称`打开该模板。

## 创建音轨

为了方便后续编辑所有发言者、音乐以及例如音效,您在[音轨[23]](GUI-overview)区域为每个音频源创建一个单独的音轨。在Ultraschall中基本上有三种类型的音轨:

- **常规音轨** - 例如用于本地发言者
- **StudioLink音轨** - 例如,用于通过网络连接的远程采访嘉宾(使用StudioLink,见下文"[使用StudioLink录制](#record-with-studiolink)")
- **Ultraschall Soundboard音轨** - 用于在录制过程中通过声卡播放的录音(见下文"[使用声卡](#use-the-soundboard)")。

常规音轨将在下一步分配给单个发言者或您的多轨录音机(如Zoom H6)的轨道,可以通过双击[音轨区域[23]](GUI-overview)、键盘命令<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>T</kbd>或在[音轨区域[23]](GUI-overview)右键单击然后点击`插入新音轨`来创建。

![insert-new-track](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/insert-new-track.jpg) **插入新音轨:** _插入新音轨可以录制单个音频轨道。_

最好直接在尚未命名但已着色的区域中单击,为您的音轨指定一个名称 - 这样即使在较大的项目中,您也不会失去概览。

![track-renaming](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/track-renaming.png?=650x)

**命名音轨:** _为您的音轨设置有意义的名称,这将有助于您后续分配它们。_

从Ultraschall 5版本开始,不仅音轨高度会自动调整以适应窗口大小,而且也会自动为清晰起见给音轨着色。如果您右键单击音轨(或在选择音轨时使用键盘快捷键<kbd>Alt</kbd> + <kbd>C</kbd>),您可以在颜色选择器中后续更改颜色。

![example-project](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/project-with-4-tracks.png?=650x) **示例项目:** _这就是一个包含两个发言者、一个StudioLink音轨和一个声卡的项目的样子。_

**以下是视频解释:**

<iframe width="560" height="315" src="https://ultraschall.github.io/ultraschall-manual/youtube/?url=p5kYH-YheN0?start=846" title="YouTube 视频播放器" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen">
</iframe>

**注意:**
这个视频是德语的。请不要忘记打开自动生成的字幕。

## 选择输入源

### 选择音频设备

要用于录制的音频设备(通常是麦克风或音频接口)通过菜单`REAPER` > `首选项`(或<kbd>Cmd</kbd> + <kbd>,</kbd>)进行选择。在那里,您可以在`音频` > `设备`字段中找到`音频设备`。在这个例子中,它是一个Zoom H6。

![选择音频设备](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/Audiodevice_auswaehlen.jpg?=650x) **选择音频设备:** _在设置中您可以选择音频设备。_

一个音频设备可以有多个输入源(但也可能没有),这些输入源可以分配给不同的音轨。如果我们以Zoom H6为例,我们在这里有四个(加上两个)可用的输入源。您可以同时使用四个 - 或在相应扩展的情况下使用六个 - 麦克风进行录制。

:::note 注意
输入源的计数方式因设备而异,因此在Ultraschall中,通道名称可能与您设备上给出的名称不同(例如,Zoom H6上的通道1在Ultraschall中列为通道3)。
:::

### 选择并分配音轨

现在所有发言者、所有通过StudioLink连接的人以及声效(在声卡中)都各自拥有一个音轨。下一步是将这些音轨分配给录制通道 - 也就是分配给连接到您录制设备的各种麦克风。

您在Ultraschall主窗口中创建的所有音轨也可以在[混音器区域[24]](GUI-overview)中找到。分配通过音轨名称、显示的音轨编号或排序(在[音轨区域[23]](GUI-overview)中从上到下,对应于[混音器区域[24]](GUI-overview)中从左到右的排序)进行:

![tracks](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/tracks.png?=450x) **音轨和混音器:** _每个音轨都有自己的混音器。_

Ultraschall会尝试自动分配所有音轨和录制通道。但是,如果您注意到声音没有正确落在"[创建音轨](#track-create)"一步中命名的音轨上,您可以在[混音器[24]](GUI-overview)中通过相应的"输入"下拉菜单手动进行分配。最好养成在录制前快速检查所有本地麦克风音轨的习惯 - **StudioLink和Soundboard音轨始终会自动正确分配**,它们不需要物理输入源,并保持设置为"输入:无"。

![track-assignment](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/track-assignment.png?=450x)

**分配输入源:** _使用下拉菜单选择输入源。_

**以下是视频解释。**

<iframe width="560" height="315" src="https://ultraschall.github.io/ultraschall-manual/youtube/?url=p5kYH-YheN0?start=911" title="YouTube视频播放器" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen">
</iframe>

**注意:**
这个视频是德语的。请不要忘记打开自动生成的字幕。

<iframe width="560" height="315" src="https://ultraschall.github.io/ultraschall-manual/youtube/?url=vdLpynu1ixE?start=4970" title="YouTube视频播放器" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen">
</iframe>

**注意:**
这个视频是德语的。请不要忘记打开自动生成的字幕。

## 路由

路由的目的是确保各参与者能够互相听到 - 并且任何可能存在的声卡也可以通过StudioLink的互联网连接被所有人听到。

### 魔术路由

从第5版开始,Ultraschall就有了所谓的"魔术路由",它完全免去了手动路由的麻烦。Ultraschall会自动识别您是否在剪辑或录制,并相应地切换路由。在屏幕左侧,您会找到以下路由设置的[路由按钮[14-18]](GUI-overview):

![魔术路由](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/magic-routing.png)

- **魔术路由(开/关)** [[14]](GUI-overview):如果启用此选项,Ultraschall会自动处理正确的路由。您不需要做任何其他操作。
- **预演路由** [[15]](GUI-overview):如果您通过StudioLink-on-Air实时播流您的播客录制,您可以设置使声卡已经可以在流中听到,但发言者还无法听到。<!-- [ ] @todo: right? -->
- **录制路由** [[16]](GUI-overview):这是实际录制播客时的设置。
- **编辑路由** [[17]](GUI-overview):这个设置用于编辑您的录音。
- **StudioLink-on-Air (开/关)** [[18]](GUI-overview):此按钮调整您的StudioLink-on-Air流的路由。

<!-- @todo: 决定如何处理这些链接 https://youtu.be/ND4AG43wSPQ (US 4 某处) https://www.youtube.com/watch?v=vdLpynu1ixE&t=91m https://www.youtube.com/watch?v=vdLpynu1ixE&t=5437s -->

### 手动路由

如果您更喜欢手动设置路由,可以通过设置`视图` > `路由矩阵`或使用<kbd>Alt</kbd> + <kbd>R</kbd>。[路由矩阵[27]](GUI-overview)向您显示了谁能听到谁的概览。您可以在此手动更改分配,但自从引入魔术路由后,我们不推荐这样做。

<iframe width="560" height="315" src="https://ultraschall.github.io/ultraschall-manual/youtube/?url=p5kYH-YheN0?start=2917" title="YouTube 视频播放器" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen">
</iframe>

**视频:** _从第49分钟开始,下面的视频解释了如何在旧版本中调整路由。_

**注意:**
这个视频是德语的。请不要忘记打开自动生成的字幕。

## 音频检查

音频检查可帮助您避免在使用Ultraschall录制播客时出现最常见的错误。如果Ultraschall检测到潜在错误,音频检查会发出警告。您可以根据需要在设置中打开或关闭音频检查的各个组件。音频检查具体检查:

- **未保存的项目:** 当您想要开始录制但尚未保存项目时会发出警告。这可以防止数据混乱。
- **准备所有音轨以进行编辑:** 如果您想在录制后立即开始编辑,但音轨尚未准备就绪,会发出警告。
- **检查48 KHz采样率:** 如果您想使用StudioLink或StudioLink-on-Air,则必须使用48 KHz作为采样率。
- **使用内部麦克风(检查是否选择了内部麦克风):** 检查您是否意外使用了笔记本电脑的内部麦克风进行录音,而不是您的好麦克风。
- **仅在最后开始录制:** 防止您在项目中间无意中开始录制。
- **未知声音接口:** 检查您是否连接了新的声音接口,但尚未为其进行直接监听设置。
- **回声和失真预防:** 如果您的接口没有直接监听功能,您应该选择正确的块大小。<!-- @TODO: 正确的名称? -->128个样本的块大小会导致延迟和回声,32个样本的块大小会导致不稳定。我们建议直接监听时使用512个样本的块大小,不使用直接监听时使用64个样本的块大小。
- **输入向导:** 检查您是否多次分配了输入源,或者您是否在Zoom上使用了可互换的输入源。<!-- @TODO: 更易理解的名称? -->

![soundcheck](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/soundcheck.png) **音频检查:** _这就是一个未保存项目中的示例音频检查情况。_

您可以使用左侧的"忽略"按钮忽略警告消息,或使用右侧的按钮修复问题。中间的好的,让我继续翻译剩余部分:

文本字段会更详细地解释问题所在。如果您在未修复问题的情况下关闭音频检查窗口,所有警告将自动被忽略。您也可以按<kbd>Esc</kbd>键将其关闭。在仪表板(窗口底部中央)中,您随时可以看到音频检查的状态 - 单击这个音频检查栏会再次打开音频检查概览。

![Soundcheck 仪表板](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/Dashboard.png) **仪表板:** _任何警告都可以在窗口底部的音频检查栏中找到。_

<!-- @todo: 如何处理这些视频? https://www.youtube.com/watch?v=vdLpynu1ixE&t=4771s (US 5) https://www.youtube.com/watch?v=ND4AG43wSPQ&t=433s (US 4) -->

## 使用StudioLink录制

![StudioLink](https://studio-link.de) 是一款独立软件,允许您远程加入另一个Ultraschall录音或通过互联网将其他人集成到您的录音中。

StudioLink有两个版本:一个是*独立版*(供您的嘉宾使用),另一个是*插件*(供您在Ultraschall中进行录制使用)。StudioLink插件预装在Ultraschall中。StudioLink的更新始终随Ultraschall的更新一同提供。<!-- @TODO: delivered? -->您可以在这里找到关于StudioLink本身的详细文档:[StudioLink文档](https://doku.studio-link.de/)。

您可以通过菜单"播客"-> "插入StudioLink和Soundboard音轨"-> "插入StudioLink音轨"将StudioLink音轨插入到您的项目中。或者,您也可以在[音轨区域[23]](GUI-overview)中右键单击,然后选择相应的选项。

<!-- @TODO: 是否还有其他快捷键组合? -->

![insert-new-studiolink-track](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/studiolink_insert_track.png) **屏幕截图:** *这就是如何通过菜单插入StudioLink音轨。*

:::danger 注意!
StudioLink音轨会在Ultraschall中显示为[音轨区域[23]](GUI-overview#area-workspaceew)或[混音器区域[24]](GUI-overview#area-workspace)中的普通音轨。但同时,一个浏览器窗口也会在您的默认浏览器中打开,通过该窗口实际建立并终止连接。如果您使用Windows,则不得关闭也出现的控制台窗口,否则您将无法建立连接。<!-- @TODO: 与Sebastian核实如何保持StudioLink手册的最新状态。! -->
:::

浏览器窗口会单独打开。(请遵循[StudioLink](https://studio-link.de)上的说明!)

![Studio-Link](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/studiolink_browser.jpg) **StudioLink:** *浏览器中的Studio-Link*。

![Windows 控制台窗口](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/studiolink_konsole.png) **Windows 控制台:** *请不要关闭此窗口,否则StudioLink将无法工作!*

## 使用声卡

### 插入声卡音轨
Ultraschall自带一个声卡,您可以在录制过程中使用它插入音乐和音效,例如您的开场白、分隔符或其他音频片段。您可以通过菜单"播客"-> "插入StudioLink和Soundboard音轨"-> "插入Ultraschall声卡音轨"插入一个声卡音轨。或者,您也可以在[音轨区域[23]](GUI-overview)中右键单击,然后选择相应的选项。

![soundboard-track](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/insert-soundboard-track.png) **插入声卡 - 选项1:** _使用播客菜单插入声卡音轨。_

![alternative-soundboard-track](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/add-soundboard-2.png) **插入声卡 - 选项2:** _您也可以通过在音轨区域中右键单击来插入声卡音轨。_

:::danger 注意!
我们建议每个项目只创建一个声卡音轨。因此,项目的声音应该在录制前从不同目录合并到一个声卡中。
:::

### 操作

要告诉声卡您的声音文件所在的位置,请选择相应的音轨,并通过单击该音轨在[混音器区域[24]](GUI-overview)中的相应`FX`按钮切换到插件列表视图。在那里,确保"声卡"插件已激活(勾选框已选中)。使用插件区域左上角的文件夹符号定义您保存声音文件的目录,以便在声卡中使用。

![soundboard-activation](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/soundboard-activation_new.png)
**声卡激活**: _这就是如何激活声卡。_

:::tip 提示
这些文件总是按字母顺序显示。如果您希望以与您可能在录音中使用的顺序相同的方式对文件进行排序,最好在文件名前加上数字编号。
:::

![soundboard-filled](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Aufnahme/soundboard-filled.png)

**声卡**: _这就是一个已填充的声卡的样子。_

### 声卡控件详解

1. **音频剪辑的文件名**  (不包含文件扩展名)。
2. **循环功能**: 如果激活,则在按下播放按钮[4]后,剪辑会无限循环播放。
3. **剩余时间显示**: 显示剪辑还将播放多长时间 - 在播放前,因此显示了剪辑的总运行时间。
4. **播放按钮**: 开始播放器的播放
5. **停止按钮**: 中断播放器的播放
6. **柔和淡入**: 像[4]一样开始播放 - 以静音开始,音量在大约五秒内增大;剪辑的其余部分以设置的音量播放
7. **音量**: 为各个剪辑单独设置音量。

<!-- **以及下面是声卡的视频解释:**
<iframe width="560" height="315" src="https://www.youtube.com/embed/vdLpynu1ixE?start=3008" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
</iframe> -->


## Video
<div class="youTubeContainer">
<iframe src="https://ultraschall.github.io/ultraschall-manual/youtube/?url=JzrngeaXQdE" title="YouTube 视频播放器"
frameborder="0" allowfullscreen="allowfullscreen" class="video"></iframe>
</div>