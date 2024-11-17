---
id: export
title: 导出
tags:
  - export
  - chapter marks
  - rendering
  - workflow
  - meta data
  - file formats
proofreading:
    - Proofreading: 27.4.2022 @MirUnauffaellig
    - Final Correction:
---
<!-- tags for docusaurus -->

<!-- @todo: Move links to Git main -->
<!-- @todo: The numbers used in the chapter "Overview of controls and areas" should be used throughout all documents.

@todo: What happens to the video?
https://www.youtube.com/watch?v=vdLpynu1ixE&t=4104s

@todo: decide whether we still write this or not?

## Export chapter marks, further processing

## Meta data (id3tags)
which ones are there?
why?

## Render chapters as individual files
https://sendegate.de/t/faq-kapitel-als-einzelne-dateien-rendern/4824
-->
![export-banner](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/0-banner-export.png)

## 简介

一旦您的项目已编辑和混音完成,您就可以导出最终的音频文件了。在本章中,您将学习如何导出播客剧集,以及从章节标记到剧集封面,您应该注意哪些重要点。

:::info 提示
关于这个主题有一个 [非常好的教程视频](#video)。
:::

## 工作流程

Ultraschall 中的导出工作流程由放置在左侧边距上的四个图标 [[19-22]](GUI-overview) 引导完成。它们将引导您完成所有重要步骤,以便最终得到一个完整的音频文件。最好按照这四个图标及其对应的步骤从上到下执行。

![导出图标](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/0-export-dialogues.png)

* **1. 打开标记仪表板** [[19]](GUI-overview)
* **2. 打开渲染向导** [[20]](GUI-overview) 
* **3. 打开导出向导** [[21]](GUI-overview)
* **4. 打开工作目录** [[22]](GUI-overview)

:::note 注意
您也可以直接跳至第三步,因为在那里您将找到所有必要导出步骤的概览。
:::

Ralf Stockmann 也提供了一个视频解释:

<iframe width="560" height="315" src="https://ultraschall.github.io/ultraschall-manual/youtube/?url=vdLpynu1ixE?start=3911" title="YouTube 视频播放器" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen">
</iframe>

**备注:**
此视频为德语。请不要忘记打开自动生成的字幕。

### 1. 标记仪表板

![标记仪表板](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/1-marker-dashboard.png) **标记仪表板:** *在一个已完成的项目中,标记仪表板可能看起来像这样。*

标记仪表板为您提供了已设置的所有章节标记 [[28]](GUI-overview) 的良好概览 - 并且它可以帮助您用进一步的信息(如URL或章节标记图片)来丰富它们(并非所有播客采集器都会显示,但大多数在播放期间到达该位置时会显示)。

:::tip 提示
章节标记可以改善收听体验,但它们是完全可选的。并非每种播客格式都需要章节标记,并非所有播放程序都支持它们,而且只有少数听众经常使用它们 - 但:它们也可以帮助您跟踪较长的录音。
:::

如果所有已设置的标记状态指示器都为绿色,那就一切正常,您可以继续进行下一步。如果显示为红色,单击状态右侧的问号将为您解释缺少或不正确的信息。红色标记的条目通常 _不会_ 被导出,但它们会导致 [第 3 步导出向导](#3-Export-Wizard)检查失败。

![缺少标记](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/1-marker-missing.png) **缺少标记名称:** *标记始终需要一个名称。*

:::danger 注意!
并非所有播客采集器对章节标记的处理都一样好。为获得最大兼容性,我们建议始终在录音开始位置 - 即 00:00:00 处设置一个标记。
<!-- @TODO: 阐明这真的还有必要吗。! -->
:::

### 2. 渲染向导

在打开渲染助手 [[20]](GUI-overview) 之前,请先深呼吸,因为它为您提供了 *很多* 设置选项,我们在这里只解释最重要的选项。大多数其他选项要么适用于使用REAPER进行音乐制作,要么具有合理的默认值,除非您确切知道自己在做什么,否则不应更改。

如果您在 Ultraschall 左下角按下渲染图标 [[20]](GUI-overview)(或通过菜单"播客" > "导出"选择"启动导出助手"项目),Ultraschall 将检查所有现有轨道是否都会被听到。如果您有意或无意中将某些轨道静音,您将在前往渲染助手的途中收到以下警告:

![静音轨道警告](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/2-warning.png) **静音轨道警告:** *如果您想导出一个项目,而其中一个或多个轨道被静音,Ultraschall 会发出警告。*

如果在这里单击"否",您将返回到工作区,在那里您可以再次检查应包含在导出中的轨道。

如果您改为单击"是",向导将打开 - 在这种情况下,静音轨道将 *不会* 包含在导出中,因此后续 *不会* 听到它们。

**渲染助手的最重要信息:**
![导出渲染到文件](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/2-render-assistant.png) **渲染助手:** *渲染助手使您可以自由地使用个性化设置渲染您的项目。*
<!--@TODO: 用数字/图例扩展屏幕截图 -->

**源:** 在这里您定义导出应包含哪些轨道。默认值 `主混音` 将所有可听轨道合并为一个文件。Stems(选定轨道)确保每个轨道被导出为单独的文件。**注意:只有选定的轨道才会被导出 - 您可以在 [音轨区 [23]](GUI-overview) 中通过略亮的灰色识别选定的轨道。在渲染向导打开的情况下,您可以按住 <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> 键并单击来选择和取消选择音轨。使用 `主混音 + Stems` 选项,您将在导出后获得合并文件和单个(选定)轨道文件。

* 此选择决定了您的项目是从头到尾渲染 (`整个项目`)。如果您只需要一个部分,例如想从一个较长的剧集中导出一个小预告片,请在此处选择 `时间选择` - 那么只有在 [时间线工作区 [25]](GUI-overview) 中选定的部分才会被导出。您可以在此使用的其他选项包括:"自定义时间范围"、"项目区域"或"选定区域"。

* 一旦您在渲染向导中做出选择,您可以将其保存为"预设" - 最好在单击"渲染"之前完成,这样下次您就可以直接在此处选择它,而不必再次逐个指定。Ultraschall 附带了一些有用的预设。

* 在这里您定义 Ultraschall 在文件系统中存储渲染文件的位置。您可以通过 `浏览` 指定目录或直接指定所需的文件名。但是,在许多情况下,使用所谓的通配符动态组合文件名是明智的(尤其是在使用预设和/或stems时)。作为通配符,您可以从许多变量中进行选择(请参阅屏幕截图);有用的包括 `$track` 用于音轨名称,或者如果您在一个导出过程中渲染多个区域,则可使用 `$region`。如果您在上次导出时没有创建预设,您可以通过选择 `最近使用的模式` 访问包括通配符在内的最后使用的文件名。

* 在"选项"部分,您可能会对默认设置感到非常满意 - 如果不是,那你肯定知道在哪里可以进行调整。这里唯一重要的是,此处的"采样率"与您在音频接口设置中设置的采样率相匹配。

* 主输出格式**: 在这里您定义要将结果渲染为哪种格式。您可以在本章后面的 [导出文件格式](#Export-file-formats) 部分找到有关各个文件格式的所有详细信息。

* 辅助输出格式**: 如果您希望在一个渲染过程中导出两种不同格式的文件,请在此选项卡中选择第二种格式。

* 渲染 X 个文件**: "渲染"按钮会告知您最终将从 Ultraschall 渲染多少个文件 - 尤其是在静音或选择了轨道/stems或多重导出时,这一信息很有帮助,可防止出错。单击该按钮将打开另一个程序窗口,显示渲染过程的进度。导出完成后,所有对话框将自动关闭,您将返回到工作视图。

### 3. 导出向导  

导出助手 [[21]](GUI-overview) 可帮助您完成项目。一个交通信号灯系统向您显示您的项目还缺少什么。如果完全缺少元数据,交通信号灯会显示红色,并在右侧显示"缺失";如果有元数据但不完整,交通信号灯会显示黄色,并显示"不完整"或"未知"。如果所有交通信号灯都是绿色,就说明您做对了。

![导出图标](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/3-export-assistant.png) **导出向导**: _该向导可帮助您完成项目。_

#### 1. 导出 MP3

如果您已按照上述说明执行了此步骤,此处的交通信号灯应该是绿色的。如果不是,请通过相应的按钮 [[20]](GUI-overview) 打开渲染助手。

#### 2. 章节标记

如果您已按照上述说明操作,此交通信号灯可能已经是绿色的。如果交通信号灯是黄色或红色,则按钮 `编辑章节` [[19]](GUI-overview) 会打开章节标记对话框,您可以在其中再次检查所有标记。

#### 3. ID3 元数据  

元数据是可选的,但对于播客的进一步处理和发布仍然很重要。如果所有元数据设置正确,则即使不依赖于您的 RSS 源,MP3 也可以被正确读取。因此,为了长期存档,直接将此元数据写入文件是有意义的。元数据以 [ID3](https://de.wikipedia.org/wiki/ID3-Tag) 格式存储在那里。Ultraschall MP3 元数据对话框 [21](GUI-overview) 只向您显示与播客相关的标签。例如,对于播客类别,您可以使用此 [列表](https://github.com/Ultraschall/ultraschall-manual/blob/Export/assets/Apple-Podcast-Kategorien-Ids.csv) 作为指南 - 否则您可以自由选择。只是应避免使用字符 `(`、`)`、`'` 和 `"`。

<!-- @todo: 改正屏幕截图中的排版错误?-->
![编辑 MP3 元数据](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/3-edit-mp3-metadata.png) **编辑 MP3 元数据:** *在这里填写您的播客元数据。*

#### 4. 播客剧集图像

这里存储的图像将在大多数播客采集器中显示为该剧集的图像。只需将您的剧集封面拖放到导出对话框中。图像将自动进入项目文件夹。支持的格式为 `.JPG`、`.JPEG` 和 `.PNG`。Ultraschall 会记住最近使用的四个剧集图像,并在这里为您提供快速选择。所选图片将在左侧以大尺寸显示。

:::info 提示
对于 Linux 用户:目前,文件扩展名必须大写。因此 `.png` 不起作用。将来会修复这一点,届时此提示将消失。
:::

#### 5. 最终处理 MP3

对于最后一步,单击"最终处理 MP3"按钮!如果仍有问题,助手将显示一个带有相应警告的对话框。如果助手无法自动找到您的 MP3 文件,您必须再次手动输入它。如果一切顺利,将显示成功消息 - 您的播客剧集已成功导出!

<!--
@todo: 仍然必要或已经解答
### 编辑和导出元数据
https://sendegate.de/t/faq-metadaten-was-traegt-man-wo-ein/13562 -->

<!-- todo: ### 4. 打开工作目录 -->

### 导出文件格式

Ultraschall (Reaper) 与许多音频格式兼容。但是,只有少数格式提供用于输出。对于 ultraschall 最重要的格式有:

* **WAV** 是一种使用脉码调制方法存储无损音频文件的格式。

* **AIFF** (音频交换文件格式)用于存储线性 PCM 音频数据(主要用于 Apple 操作系统)。

* **FLAC** (免费无损音频编解码器)是一种无损编解码器,可将项目以包含元数据的容器格式保存。

* **MP3** 是一种有损音频格式。其方法是:只存储人类可听到的信息,以实现在尽可能小的文件大小下获得最佳音频质量。目前,此音频标准已可免费使用。

* **OGG Vorbis** 是一种免费有损音频格式,作为(曾经的专有)MP3 格式的免版税替代品。由于 MP3 已成为免费,因此该格式已失去重要性。

**MP3** 格式最常用于 Ultraschall 项目。Ultraschall 工作流允许在 **MP3** 文件中保存章节标记和章节图像等内容。其他格式不支持这些功能或支持不足。如图所示,以 128 kBps 的比特率使用 MP3 是有意义的。

![导出格式](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Export/2-formats.png) **导出格式:** *使用 Ultraschall,您可以将播客剧集导出为各种格式。默认为 MP3。*

值得注意的是,MP3 格式的音质损失主要发生在人耳无法感知的高频和低频区域。对于大多数应用场合(如播客),MP3 的音质已经足够好,而且由于较小的文件大小,MP3 更加方便传输和存储。

总的来说,在导出播客剧集时,MP3 格式通常是最佳选择,它在音频质量和文件大小之间达到了适当的平衡。但如果您对音质要求极高,也可以考虑无损格式如 WAV 或 FLAC。

## Video
<div class="youTubeContainer">
<iframe src="https://ultraschall.github.io/ultraschall-manual/youtube/?url=qd2su0OB7YY" title="YouTube video player"
frameborder="0" allowfullscreen="allowfullscreen" class="video"></iframe>
</div>
