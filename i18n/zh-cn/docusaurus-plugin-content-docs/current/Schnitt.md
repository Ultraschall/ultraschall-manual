---
id: cut
title: 剪辑
tags:
  - cut
  - non-destructive
  - chaptermarks
EDIT:
    - Proofreading: 5/4/2022 @MirUnauffaellig
    - Final edit:
---

<!-- @todo: The numbers used in the chapter "Overview of controls and areas" should be used in all documents -->
<!-- @todo: Start gif loops only when needed (change gif) -->

![edit-banner](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/0-banner-edit.png)

## 简介

完成录制后,通常下一步是编辑您的播客剧集。在本章中,您将学习如何从录音中删除不需要的部分,以及如何为您的播客添加章节标记。

:::info 信息
关于这个主题有一个非常好的[教学视频](#video)。
:::

## 重要须知

Reaper进行[无损编辑](https://de.wikipedia.org/wiki/Nicht-destruktive_Bearbeitung)。这意味着您的音频文件不会被直接编辑,而是保持不变。因此在编辑时,您不会出错或损坏任何内容。如果出现紧急情况,您只需进行备份 - 或者如果情况确实很糟糕,您可以重新开始。从第5版开始,Ultraschall每10分钟就会备份您的项目文件(不包括音频文件),并将其保存在项目文件夹中。

:::tip 提示
**恢复备份:** 如果您现在需要这个功能,请不要惊慌。Ultraschall会定期全自动备份您的项目。这些备份位于您的项目文件夹中的"Backup"文件夹下,命名方式为:"$项目名称-$日期_$小时$分钟"。要恢复这样的备份,请先关闭Ultraschall。然后在Finder或资源管理器中打开您的项目,并从"Backup"文件夹中复制带有相应时间戳的备份文件到项目目录(即向上一级)。最好直接重命名该文件并使用Ultraschall打开它。完成!
:::

<!--[备份](https://github.com/Ultraschall/ultraschall-portable/wiki/Ultraschall-5-Release-Notes#user-interface)-->

## 准备编辑 ("准备所有音轨供编辑")

在开始编辑之前,您需要做一些准备工作。请确保录制已完成,而不是只是暂停。为了尽可能减轻您后续的工作,Ultraschall提供了"准备所有音轨供编辑"功能。您可以在菜单"播客" > "准备所有音轨供编辑"中找到它 - 如果您在编辑前忘记准备音轨,音频检查最终会提醒您这一点。"准备所有音轨供编辑"会执行以下步骤:

- 所有音轨或包络的自动化模式<!-- @Todo: 看看这实际上是什么 -->改为"修剪/读取"。
- 所有音轨和包络都被停用录音。
- 移除所有与StudioLink的连接(如果有)。
- 移除所有StudioLink效果器(如果有)。 
- 移除所有声卡(如果存在)。
- 停止StudioLink在线流(如果存在)。
- 所有连接都路由到主音轨。
- 路由切换到编辑模式。

:::info 信息
请记住,"准备所有音轨供编辑"会终止与您对话者的所有StudioLink连接!如果您以后想要录制其他内容,可以将音轨切换回录音模式并重新录制。然后您可以再次运行"准备所有音轨供编辑"。
:::

作为准备编辑的最后一步,您现在可以切换到编辑视图。为此,您可以在`视图`下的左侧边距中找到剪刀按钮[[17]](GUI-overview) - 或者在菜单中选择`播客` > `屏幕设置编辑`或按<kbd>F9</kbd>。这种视图可以改善您在项目中的概览 - 例如,通过屏幕顶部的快速导航。

## 单个剪切

Ultraschall为您提供了两种非常高效的剪切工具,您可以用它们完成90%的工作。首先学习这两种方法,然后再进行高级工具的微调:

### 跨所有音轨剪切(ripple剪切)

通过所谓的ripple剪切,您可以同时剪切所有音轨。这可以防止内容发生偏移,并且音轨不会再正确地重叠。要使用该功能,请在[时间线[23]](GUI-overview)上拖动选择范围,选中您要剪切的区域。然后点击[Ripple剪切按钮[7]](GUI-overview)或<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>X</kbd>。

### 静音干扰段落(静音)

<!-- @TODO 插入屏幕截图 -->
如果您不想从音轨中剪切某些序列,但仍然不希望它们可听,最好的方式是使用静音功能:为此,选择要编辑的音轨,然后按<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Y</kbd>。如果尚不存在,则会在所选音轨下方出现一个静音包络。静音包络的橙色线在您之前选择的点处呈现出波谷形态。该包络遵循二进制原理:如果线条在上方,则可以听到相应的音轨;如果静音线在下方,则分配的音轨将无声。

您还可以在包络线上添加更多点,并在所需点使用鼠标将它们静音或取消静音。双击可创建更多编辑点,然后您只需将它们上下拖动即可。

:::tip 提示
使用鼠标编辑静音包络是最快的方式:如果您想在某个点从"可听"切换到"静音",只需在包络的下半部分单击一下。前提是在该点线条位于顶部(而且在那里还没有编辑点是有意义的)。从"静音"切换到"可听"的过程类似,但当然您需要单击包络的上半部分。
:::

## 高级剪切

### 拆分项目

使用此功能,您可以将一个项目拆分为两个项目。为此,请将编辑光标置于您想要拆分项目的位置,然后单击拆分按钮[[5]](GUI-overview) - 或按下<kbd>S</kbd>键。

<!-- Sendegate贡献 Ralf https://sendegate.de/t/faq-einfacher-schnitt-aller-spuren/6911 -->

### 柔和淡入和淡出

如果您想在项目的开头或结尾柔和地淡入或淡出音量,请将鼠标悬停在[时间线区域[23]](GUI-overview)中项目的左上角。然后您会看到鼠标指针变成一条曲线。现在您可以单击并拖动 - 从而确定淡入淡出或其持续时间。您也可以在每个项目的右上角执行相同操作。
<!-- 插入 @TODO 动态图像 -->

### 章节标记

<!-- @todo: 如何处理这个视频? https://www.youtube.com/watch?v=vdLpynu1ixE&t=5080s -->
在Ultraschall中,您只需设置章节标记,这样以后(在大多数播客客户端中)可以让您的听众更容易在剧集内导航。为了制作,Ultraschall区分两种类型的标记:章节标记和编辑标记。您可以通过<kbd>M</kbd>键或相应的按钮[[3]](GUI-overview)设置章节标记 - 这些标记以后也将出现在播客客户端中。但您也应该为标记命名。无论是稍后在[标记仪表板](#marker-dashboard)还是通过<kbd>Shift</kbd> + <kbd>M</kbd>直接设置命名标记并分配一个标题。

您可以使用[[4]](GUI-overview)按钮或<kbd>E</kbd>键设置编辑标记。它们仅在编辑期间对您可见和相关,以便您可以在项目中标记某些位置,并在以后轻松找到它们。它们不会被导出。

:::info 信息
区域在播客导出中也会被忽略。但是,您可以使用它们将音频材料划分为不同的部分(例如,如果您要从一个长录音中剪辑出多个剧集),然后使用导出助手将这些部分或区域导出为单个文件。
:::

#### 标记仪表板

<!-- @TODO: 插入照片 -->
使用<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd>或按相应的按钮[[19]](GUI-overview)打开标记仪表板。在那里,您可以管理、命名和导出您的章节标记。

#### 区域/标记管理器

您可以在右下角的[章节标记区域[28]](GUI-overview)中找到"区域/标记管理器"。此区域由[路由矩阵[27]](GUI-overview)、[过滤器[26]](GUI-overview)和[章节标记管理器[28]](GUI-overview)共享。在标记管理中,您可以看到所有标记 - 包括章节标记和编辑标记。您可以通过双击名称字段进行编辑 - 您可以通过双击最后一列中的字段设置标记的颜色。

#### 照片

此外,您还可以选择性地为章节标记添加照片,只要播客客户端支持,这些照片就会与当前播放的章节相匹配显示。支持的格式为.png和.jpg。您只需将照片拖放到项目的单独一个音轨上的所需位置即可。每张图片都会自动添加一个章节标记,但您之后仍需要对其命名。

#### 网址

另外(也是可选的),您还可以为每个章节标记提供一个网址。您也可以在标记仪表板中执行此操作。注意:只有当章节标记也有名称时,相应字段中添加网址的"+"号才会出现。未命名和因此不完整的标记无法添加网址。

### 按钮概览

<!-- [ ]todo: 这真的放在合适的位置了吗? -->
![buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons.png) 左上角的按钮[[1-8]](GUI-overview)影响当您在音轨区域单击鼠标并按住鼠标按钮拖动时会发生什么:与其他编辑程序一样,默认设置是选择一个范围。但是,您可以通过按下按钮更改此行为并使其适应您的工作方式 - 或者通过按住<kbd>Alt</kbd>或<kbd>Cmd</kbd>/<kbd>Ctrl</kbd>键只为当前操作更改行为。

#### [1]和[2]: Ripple编辑

![buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-ripple-per-track.png)

Ripple行为决定了在编辑期间移动(或删除)音轨上的项目时究竟会发生什么 - 以及这是否会及如何影响同一音轨和其他音轨上的其他项目:

- 无Ripple**: 按钮[1]和[2]未激活(灰色);如果您移动一个音轨上的项目,这不会影响其他项目或音轨。
- 每个音轨Ripple**: 按钮[1]激活(橙色);如果您移动一个项目,同一音轨上所有后续项目也将移动 - 如果您在不同音轨上选择了多个项目,则所有受影响音轨上的后续项目都将移动。
- 所有音轨Ripple**: 按钮[2]激活(橙色 - 此时按钮[1]被忽略);如果您在一个音轨上移动项目,则所有音轨上的所有后续项目也将移动。默认情况下,所有音轨的Ripple都被禁用(按钮为灰色)。

![Ripple: 按钮](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/ripple-buttons.gif) **Ripple编辑:** _按钮[1]和[2]影响移动音频部分时的Ripple行为。

#### [3]和[4]: 标记

![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-markers.png)

按钮[[3]](GUI-overview)在当前播放光标位置设置一个(未命名的)章节标记 - 按钮[[4]](GUI-overview)设置一个编辑标记。您可以在[章节标记](#Chapter markers)部分找到更多关于标记的信息。

#### [5]: 拆分

![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-split.png)

按钮[[5]](GUI-overview)在当前光标位置拆分一个项目。更多信息请参见[拆分项目](#Split-Items)部分。

#### [6]: 鼠标选择

![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-selection.png)

按钮[[6]](GUI-overview)激活或停用鼠标选择模式,从而影响鼠标行为:

- **激活**: 如果您单击一个项目,按住鼠标按钮,然后拖动鼠标,您会选择受影响的区域。
- **停用**: 如果您单击一个项目,按住鼠标按钮,然后拖动鼠标,您会移动所选项目。

<!-- @todo: 在这里插入GIF以便更好地理解 -->

##### [7]: Ripple剪切

![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-ripple-cut.png)

按钮[[7]](GUI-overview)对应于键盘快捷键<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>X</kbd> - 使用它可以跨所有音轨从录音中剪切出所选区域。所有后续项目都会向左移动以填补产生的空白。

#### [8]: 显示静音包络

![Buttons](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/edit-buttons-show-mute-envelopes.png)

按钮[[8]](GUI-overview)显示或隐藏所有音轨的静音包络。更多信息请参见[静音](#Mute)部分。

### 移动项目(音轨内容)

:::caution 注意
如果您想在[时间线[25]](GUI-overview)中移动您的音轨上的单个元素("项目"),请非常小心 - 同步录制的音轨因此很容易"滑移"。在收听时,您会注意到时间不再匹配:发言者会相互打断,出现录音中原本没有的暂停等。
:::

当移动项目时,单个项目的行为由[Ripple设置](#Ripple Editing)决定。但是,您可以暂时仅影响当前操作的Ripple行为,方法是在执行操作时按下<kbd>Alt</kbd>或<kbd>Cmd</kbd>/<kbd>Ctrl</kbd>键:

- **按住<kbd>Alt</kbd>(Mac/Windows/Linux)并移动项目**: 您只移动所选项目。

![Ripple: Alt](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/ripple-key-alt.gif)
<!-- todo: 缺少视频 -->

- 按住**<kbd>Cmd</kbd>(Mac)或<kbd>Ctrl</kbd>(Windows/Linux)并移动项目**: 您移动所选项目以及其后的所有项目。

![Ripple: Cmd](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/ripple-key-cmd.gif)
<!-- todo: 缺少视频 -->

## 事后将音频内容插入项目

要在录制后向您的项目添加更多声音或录音,只需将所需文件拖放到您的项目中。如果您将文件拖放到[时间线区域[25]](GUI-overview)中没有音轨的项目位置,Ultraschall会自动创建一个新音轨,并在其中包含文件内容(并以文件名命名)。这样您还可以将整个Ultraschall项目(`.rpp`)嵌入到其他项目中。

:::caution 注意
在菜单项`编辑` > `项目设置`中,您可以设置Ultraschall应如何处理添加的媒体文件。在这里,我们无论如何都建议使用"将媒体复制到项目"设置。最好直接在全局REAPER设置中的`选项` > `首选项`下的"媒体"项中勾选"将导入的媒体复制到项目媒体目录"。否则可能会发生您无意中在项目中引用了不在项目文件夹中的文件的情况 - 这至少在移动或复制项目时会导致问题。
:::

### 剪切、复制和粘贴

要在您的项目内剪切或复制音频,请选择要复制的项目或设置一个时间标记。然后,如果您右键单击所选区域(或打开"编辑"菜单),您可以复制整个项目(标准行为;也可通过<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>C</kbd>)或项目内的所选区域。剪切的操作方式相同。

要粘贴复制或剪切的内容,请单击左侧[音轨区域[23]](GUI-overview)并选择要将内容放置到的音轨。然后将光标置于所需位置,并通过"编辑"或上下文菜单选择"粘贴" - 或使用键盘快捷键<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>V</kbd>。

![复制和粘贴](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Schnitt/copy-and-cut.png) _上下文菜单提供了各种复制和剪切模式。_

### 双端录音

如果您的同事通过不稳定的互联网连接与您通过StudioLink连接,为了预防万一,最好让他们在StudioLink独立客户端中运行本地录音。为此,他们可以在StudioLink浏览器窗口中点击"录音"按钮。稍后必须发送给编辑人员的文件可以在您自己的文件中的`studiolink`文件夹中找到,该文件夹中有一个带有录音时间戳的子目录,其中包含文件名为`local.flac`的文件。

<!-- ### Swapping and aligning tracks (for example after double-ender recordings) -->
<!--@todo: 这一部分怎么办? -->

<!-- https://www.youtube.com/watch?v=vdLpynu1ixE&t=1853s -->

<!-- ## Tips for successful pruning -->

## Video
<div class="youTubeContainer">
<iframe src="https://ultraschall.github.io/ultraschall-manual/youtube/?url=h3uv4P9td7g" title="YouTube 视频播放器"
frameborder="0" allowfullscreen="allowfullscreen"  class="video"></iframe>
</div>