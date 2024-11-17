---
id: firststeps
title: Ultraschall 上手
tags:
  - keyboard
  - shortcuts
  - basic knowlegde
proofreading:
    - Proofreading: 3/13/2022 @MirUnauffaellig, minor corrections and formatting on 3/27/2022.
    - Final correction:
---

<!-- @todo: Add captions -->

![schritte-banner](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Erste-Schritte-mit-Ultraschall/0-banner-firststeps.png)

## 总览

现在，你可以开始播客制作啦！

根据 Ultraschall 的理念，播客制作分为三个阶段：

1. **前期准备**：这包括设置 Ultraschall 项目、配置音频设备和设置轨道。
2. **录制**：这包括录制本身，以及诸如声音板、章节标记、通过 Studio Link 加入人员或将节目实时流式传输到互联网等内容。
3. **后期处理**：后期制作包括编辑、音频制作（混音、正常化、音频处理等）、丰富的元数据和导出。

您还可以在 Ultraschall 的“播客”菜单中以及软件的其他一些地方找到这种结构。为了更好地了解软件及其可能性，建议逐个浏览结构化的菜单项目。

![Podcast menu](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Erste-Schritte-mit-Ultraschall/podcast-menu.png)

**播客菜单：** 工作流程分为三个部分：1. 设置，2. 录制和 3. 制作。*

## 1. 准备

### 创建轨道

在启动 Ultraschall 后，您现在可以创建必要的轨道了。为每位发言者创建一个单独的轨道 - 可以通过在[轨道区域 [23]](GUI-overview#area-workspace)双击或右键单击并从上下文菜单中选择“插入新轨道”选项来实现。

[了解更多...](recording#tracks-create)

### 选择设备

在偏好设置中选择您的录音设备（在菜单中依次选择 `Preferences` > `Device`），在 `Audio Devices` 下选择。在 [混音器 [24]](GUI-overview#area-workspace) 中左键单击每个轨道，并选择 'Input: Mono'，将相应的来源分配给每个轨道。

## 2. 录制

只要您正确设置了一切，录制本身并不是太大的问题。然而，在按下 `Record`[[35]](GUI-overview#buttons-playback)后，您还是有一些事情可以和应该考虑，这样以后就不会出现令人不愉快的意外或可避免的额外工作。第一个也是最重要的提示：不时地查看您的录音软件（最好在录制期间停用屏幕保护程序）。然后您将立即看到任何错误或警告消息 - 例如，如果您尚未激活轨道或保存项目，Ultraschall 就会发出警告。如果轨道设置有问题或者某人削波，您也会收到通知。

通过互联网联系其他录制者的方法在章节 [录音](recording#recording-with-studiolink)中有更详细的说明。如何使用声音板在节目中集成音效、音乐和其他插播的方法在[这里](recording#using-the-soundboard)有详细说明。在录制过程中保持对音量的关注并根据需要直接设置章节和编辑标记也非常有用。

[阅读更多...](recording)

## 3. 后续处理

在许多情况下，播客制作仅包括编辑、音频制作和导出。然而，这并不意味着像复杂的广播剧制作这样的更复杂情景在 Ultraschall 中不可能实现 - 您将在相应的[后续章节](Aufnahme-fuer-Fortgeschrittene.md)中找到详细信息。

:::danger 注意！
 在录制结束并进行编辑之前，从“播客”菜单中必须调用“准备所有轨道进行编辑”。在此之后，轨道和 Studio Link 连接被停用，路由被调整 - 并且界面被预设，以使您几乎没有错误的风险，但最大程度地方便使用。
:::

### 剪辑

首先，Ultraschall 中的编辑是非破坏性的，可以随时撤销。因此，不要担心在任何时候删除太多内容 - 您的录音将始终保持其原始形式（您可以在项目目录[[22]](GUI-overview#buttons-export)的“Recordings”文件夹中找到它们）。

要在所有轨道上删除内容（例如，在录音开头和结尾），请在[时间轴工作区 [25]](GUI-overview#area-workspace)中通过拖动并选择（按住鼠标按钮），或者通过按下

<kbd>I</kbd>

- 分别按下

<kbd>O</kbd>

-键来为当前选择设置“入点”和“出点”。

使用键盘快捷键

<kbd>Cmd</kbd> + <kbd>X</kbd>

（Mac 系统）

<kbd>Ctrl</kbd> + <kbd>X</kbd>

（Windows、Linux 系统）来删除所选区域，或者点击剪切按钮[[12]](GUI-overview#buttons-views)。

默认情况下，您界面右侧的所有内容都将自动“滑动”到之前的内容，创建无缝的过渡效果。

[阅读更多...](cut#1-cut-over-all-tracks-ripple-cut)

### 后期制作

每个后期制作都是独一无二的，取决于麦克风、录音条件、对效果和音乐的特殊要求、演讲规则等等。

如果您希望所有发言者的声音听起来相同，整体音量保持在合理水平，并尽量减少噪音甚至自动消除噪音，请务必查看 Ultraschall 第 5 版中新增的 [AMP（自动混音管道）](postproduction#ultraschall-amp-automated-mixing-pipeline)。这将一些有用的音频插件和设置结合起来，为大部分播客制作产生合理的结果，而无需您进行音频工程师培训。

[阅读更多...](postproduction)

### 导出

导出助手通过引导您完成必要的步骤来简化项目的导出过程。可以通过菜单中的 `Podcast`>`Export` 和 `Start Export Assistant` 或者左侧的相应按钮[[21]](GUI-overview#buttons-export)来访问。

![导出助手](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/Export_Assistent_Button.jpg)

导出向导将引导您完成导出过程中重要的各个步骤：

1. MP3 的导出（实际音频文件）
2. 章节标记
3. ID3 元数据（这是音频文件的元数据：剧集标题、作者、播客标题、出版年份、播客类别、描述）
4. 播客剧集图片（播客剧集封面）
5. 最终确认 MP3（导出的最终确认）

![导出向导-绿色](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/Export_Assistent_alles_gruen.jpg)
**导出向导：** *当一切准备就绪进行最终确认时，每个项目都会显示 `OK`。*

随着您逐步完成各个步骤，颜色会从黄色或红色变为绿色（OK）。目标应该是给所有方面都标记为“OK”（绿色）- 但是对于您和您的播客项目来说，各个步骤的重要性可能会因人而异。完成的音频文件和可能的章节标记现在在您的项目文件夹中。您现在可以处理和发布它们了。恭喜，您已成功录制、编辑和导出了您的第一集播客！

[阅读更多...](export)