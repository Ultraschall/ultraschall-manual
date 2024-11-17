---
id: postproduction
title: 后期制作
tags:
  - produktion
  - fx
  - workflow
proofreading:
    - Proofreading: 27.4.2022 or 4.5.2022 @MirUnauffaellig.
    - Final proofreading:
---

<!-- Tags for Docusaurus -->
<!-- @todo: maybe split into two chapters -->

![mastering-banner](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Post-Produktion/o-banner-mastering.png)

## 简介

如果您的播客已经录制和编辑完成,那么是进行后期制作的时候了。本章节的目的是提高您播客的音质 - 即使它已经听起来不错。在这里,您将了解到 Ultraschall 效果以及如何使用它们。

:::info 提示
关于这个主题有一个 [非常好的教程视频](#video)。
:::

## 为什么后期制作很有意义 - 以及它的局限性在哪里

首先要说明的是:**您的录音质量越好,在后期制作中您就需要付出的工作就越少**。因此,一开始就值得注意环境噪音和干扰、消除电源嗡嗡声、微调说话距离和录音电平,并确保总体最佳的录音条件是非常重要的。尽管如此,为获得最佳效果,后期制作始终是必要和有用的。

后期制作的目标是(按重要性递减排列):

1. **混合各个音轨**: 在录音中,不同的声音和音轨听起来音量不同。在混音中,这些差异会被缩小,从而形成和谐的整体。
2. **将播客的响度提高到 -16 LUFS(或其他所需值)**: 播客在各种不同的环境中被收听 - 不仅仅在家里,例如在地铁中也会收听。为了使每一个细节都能听清楚,整个混音必须达到一定的音量。-16 LUFS 在播客领域已成为一种标准。
3. **降低噪音**: 根据录音情况,音轨包含的干扰程度不尽相同 - 例如噪音、房间声音、回声、来自其他麦克风的串音或电源嗡嗡声。通过合理的努力,这些噪音可以部分减少。
4. **优化声音图像**: 根据个人口味,通过使用均衡器(EQ)等进一步的音效调整,可以获得所需的最终声音效果。

Ultraschall 为您提供了自由裁量权和手动后期制作的所有选择 - 但如果需要,它也可以通过 _自动化混音管道 (AMP)_ 来引导您完成最重要的步骤(另见 [自动化混音管道 (AMP)](#Ultraschall-AMP-自动混音管道) 部分)。

此外, Ultraschall 为您提供了每个音轨的 [预选效果](#Pre-selected%C3%A4effects-and-plug-ins),您可以在 [混音区 [24]](GUI-overview) 中按下所需音轨上的 `FX` 按钮后,在 [滤波器区 [26]](GUI-overview) 的右下角找到它们:

* **去噪 (DeNoise)** (ReaFir 噪音滤波器,用于通过学习背景干扰模型来减少噪音或嗡嗡声)。

* **去嘶 (DeEsser)** (多波段压缩器,用于减少声音中的嘶嘶声)。

* **ReaEQ** (多波段均衡器,带有各种预设 - 例如"电话音质")

* **环境 (Ambience)** (房间模拟器,带有不同的预设 - 如工作室或教堂)

* **Ultraschall Dynamics 2** (调节音轨的响度、降低背景噪音和扩展器)。

在 "Best of Breed" 插件目录中,您还可以找到一些其他免费但非常强大的效果:

* **ReEQ** (基于知名的 _Fabfilter_ 的均衡器)

* **Smooth Limiter** (顶级限制器,能够清晰可视化其干预程度,并内置于新的 LUFS 响度测量效果中 - 纯音频黄金)。

* **Spectrum Matcher** (具有学习功能的 EQ,用于匹配麦克风的音质)。

* **TriLeveler2** (我们的 Dynamics 2 效果的不错替代品)

* **ReaXcomp** (顶级图形多波段压缩器)

尽管有许多可能性来增强录音,但老的音频理念依然有效: _输入垃圾,输出垃圾。_ 如果录音中回声、噪音、丢帧、嗡嗡声、串音或其他无数可能的干扰因素太多,那么后期制作只能带来有限的改善。对于任何效果插件,"过度使用"都很容易导致声音失真。因此,成功的后期制作的先决条件是细致入微且质量上乘的录音。

## Ultraschall AMP (自动化混音管道)

自动化混音管道是一种简单且免费的替代在线音频增强服务(如 [Auphonic](https://auphonic.com/))的方式。通过合理的 _预设_,您在大多数情况下都能获得出色的音质结果 - 无需任何音频经验或"金耳朵"。不过, Ultraschall 也为您提供了足够的可能性来根据个人情况进行微调。

在"播客"菜单下的"工作流程" -> "Ultraschall AMP - 自动化混音管道"中,您可以找到各个步骤。灰色的菜单条目只是为了帮助您思考;您必须"手动"完成那里提到的步骤。省略步骤或更改顺序将导致糟糕的结果,因此请严格按顺序执行工作流程。

![Ultraschall AMP - 自动化混音管道](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Post-Produktion/amp-menu-entry.png "Ultraschall AMP - 自动化混音管道") **Ultraschall AMP:** _自动化混音管道为您简化了许多复杂的后期制作步骤。_

AMP 的各个步骤按顺序如下:

**步骤 1: 选择所有要进行混音的项目**: 在 [时间线区域 [25]](GUI-overview) 中选择您希望通过混音管道增强的所有音轨上的所有项目。在大多数情况下,这将是您项目中的所有项目(请记住:项目是您音轨上的各个独立块)- 为此,请单击 [音轨区域 [23]](GUI-overview) 中的任意位置,然后选择 <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>A</kbd> 全选。或者,从菜单中选择 `项目` > `全选`。

:::danger 注意!
AMP 专为 **人声音轨** 而设计。录音音轨(尤其是音乐)不应通过 AMP,而应在最后根据听觉进行混音。
:::  

要快速选择一个音轨中的所有项目,可以双击音轨名称上方或下方的灰色区域。

**步骤 2: 将所选项目的响度归一化到 -23 LUFS**: 直接在菜单 `播客` > `工作流程` > `Ultraschall AMP - 自动化混音管道` 中选择此步骤。Ultraschall 将自动将步骤 1 中选择的所有项目 [归一化](#标准化) 到 -23 LUFS。这对于实际发布来说太安静了,但是对于以下步骤来说是完美的基础。此操作的键盘快捷键是 <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd>。

**步骤 3: 为 AMP 选择音轨**: 现在在 [音轨区域 [23]](GUI-overview) 中选择要在混音管道中考虑的所有音轨。要选择单个音轨,只需单击音轨名称字段上方或下方的灰色区域。要选择多个音轨,请按住 <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> 键并单击。

**步骤 4: 在选定的音轨上设置 AMP (自动化混音管道) 效果**: 您也可以直接在菜单"播客" -> "工作流程" -> "Ultraschall AMP - 自动化混音管道"中选择此步骤。然后,您应该会在预先选择的每个音轨上找到一个启用的"JS: Ultraschall Dynamics (Ultraschall)"效果。它将使您的音轨响度均衡到 -20 LUFS。

**步骤 5: 在主效果 FX 上选择 LUFS 目标值(播客应为 16 LUFS)**: 在上一步骤中,通过一个音轨效果,将主音轨提高到播客常用的 -16 LUFS。您也可以更改此目标值;您可以在主音轨的效果区域中找到相应的设置。

## 校正可能性

如果最终结果听起来不令人信服,可能是个别音轨的信噪比存在问题 - 也就是说,噪音或混响被放大而非减少。您可以通过移动相应的"噪音底噪"滑块来为每个音轨单独修复 - 直到人声保持响亮,但噪音消失为止:

![Ultraschall Dynamics Noisefloor](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Post-Produktion/Ultrasschall_Dynamics.png) **Ultraschall Dynamics - 噪音底噪**: _噪音底噪决定了相关音轨的信噪比。_

**以下视频展示了 AMP 的精确步骤。**

<iframe width="560" height="315" src="https://ultraschall.github.io/ultraschall-manual/youtube/?url=vdLpynu1ixE?start=2877" title="YouTube 视频播放器" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen">
</iframe>

**备注:**
此视频为德语。请不要忘记打开自动生成的字幕。

## 高级后期制作

<!-- todo: 这里仍然缺少内容 - 在其当前形式下,它与上面已写的内容完全相同。

### 预选效果和插件

#### 去噪 (DeNoise)  

(ReaFir 噪音滤波器,用于学习噪音特征)

#### 去嘶 (DeEsser)

(多波段压缩器,用于减少人声中的嘶嘶声) 

#### ReaEQ  

(带有不同预设的多波段均衡器,例如"电话音质")

#### 环境 (Ambience)

(房间模拟器,带有不同的预设,如工作室或教堂)。

#### Ultraschall Dynamics 2

(调节音轨响度和扩展器)

### 其他推荐的缺陷和插件

<iframe width="560" height="315" src="https://www.youtube.com/embed/vdLpynu1ixE?start=3678" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
</iframe> 

#### ReEQ

(基于著名的 _Fabfilter_ 的均衡器)  

#### Smooth Limiter

(顶级限制器,能够非常清晰地可视化其干预程度,并内置于新的 LUFS 响度测量效果中 - 纯音频黄金)。

#### Spectrum Matcher  

(具有学习功能的 EQ,用于匹配麦克风的音色)。

#### TriLeveler2  

(我们的 Dynamics 2 效果的不错替代品)

#### ReaXcomp

(顶级图形多波段压缩器)
-->

### 标准化

#### 技术概述

在音频工程中,术语 [标准化](https://de.wikipedia.org/wiki/Normalisierung_(Audio)) 指的是以固定增益提高或降低模拟或数字音频材料的振幅的过程,使结果在指定范围内。

响度可以客观测量。测量单位是"分贝",单位符号为"dB"。问题是即使测量的响度相同,不同的声音听起来感知也不同;因此,信号会加权,使用"dbA"作为单位。为此,根据听觉感知对声压级进行加权 - [另见维基百科](https://en.wikipedia.org/wiki/Decibel)。

然而,这种(加权)主观量并不总是提供足够的信息;因此,[LUFS](https://de.wikipedia.org/wiki/EBU-Empfehlung_R_128) ("相对于全尺度的响度单位")已成为公认的测量单位。它量化了一种标准化的响度测量。

要确定 LUFS 响度,需要将人类感知和电信号强度相结合。LUFS 与之前使用的 [RMS](https://de.wikipedia.org/wiki/Quadratisches_Mittel) 方法的唯一区别在于,在 RMS 中,整个频率范围被等同考虑,但在 LUFS 中,各个频率被单独加权。

根据预期用途,不同的 LUFS 值会更有用。例如,在广播中,-23 LUFS 已成为标准。但是,由于这对于播客来说通常听起来太安静,许多播客制作者会以 -16 LUFS 作为目标值。Ultraschall 也将 [-16 LUFS](#ultraschall-amp-automated-mixing-pipeline) 设置为最终渲染的音频文件的目标值。在录音链路中之前使用的LUFS值应该始终低于此值。

#### 使用 _Ultraschall Dynamics 2_ 效果进行标准化

`Ultraschall Dynamics 2` 效果允许将所有音频轨道的平均音量提高到建议的播客 -16 LUFS(或其他值)。  

#### 如果所需音轨的效果区域中没有出现该效果,如何启用它?

对于所有新创建的音轨,该效果应该已按上述方式设置好,但尚未启用。在这种情况下,您只需手动添加即可:选择效果窗口底部的"添加"按钮。出现的窗口列出了REAPER/Ultraschall中可用的所有效果。在左侧,我们已将一些对播客有用的效果标记为"收藏夹"。单击此菜单项,在右侧选择 `JS: Ultraschall Dynamics` 效果,并用 `OK` 确认 - 该效果(已启用)就会添加到所选音轨上。

**这里有一个视频解释**
![启用效果](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Post-Produktion/LUFS_002.gif) **Ultraschall Dynamics:** _这就是如何在音频轨道上启用一个效果。_

#### 标准化设置  

要将您录音中的所有源归一化到 -23 LUFS,只需选择所有项目,然后从"播客"菜单中选择"工作流程" > "Ultraschall AMP - 自动化混音管道" > "步骤 2:将所选项目的响度归一化到 -23 LUFS"。

或者,如需使用 -23 LUFS 以外的目标值,可以在效果插件 `JS: Ultraschall Dynamics (Ultraschall.fm)` 中更改相应的 `目标值 (LUFS)` 滑块。但在大多数情况下,预设值是理想选择。  

![Ultraschall Dynamics Target](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Post-Produktion/ULDynamics.jpg) **Ultraschall Dynamics:** _在这里您可以为选定的音频轨道设置个性化的LUFS值。_

您可以通过主音轨上的效果插件"JS: LUFS_Loudness _Meter"设置最终音频混音的标准化值。

![-16 LUFS](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Post-Produktion/minus16LUFS-1.gif) **Ultraschall Dynamics:** _同样在大多数情况下无需更改设置。_  

<!-- ### 混响降低 -->

<!-- @todo: 决策: 尚未编辑。也许我们应该将此移到常见问题解答部分,而不是在这里编辑。-->

### 使用 Ultraschall Dynamics 2 效果去除噪音

`Ultraschall Dynamics 2` 效果包括一个可调的软噪声门 - 它可以帮助您在音轨上分离噪音和语音。

"噪音底噪"控制对音量有最大影响:在这里您确定一个信号被视为要放大的内容还是要衰减的噪音或干扰信号的限制。诀窍是为每个音轨找到精确的设置,使即使较轻的语音也仍然被放大,但噪音和呼吸声(就像达斯·维达一样)被降低。建议的值通常适用于像DT297或HMC660这样的好的头戴式耳机,在录制期间(范围在-6到-12 dB之间)保守调制。然而,这只是一个起点;对此进行微调通常是值得的。

为此,请按以下步骤操作:您在所讨论的音轨中寻找一个包含静音(可能带有嘶嘶声和呼吸)以及安静和正常大声语音的片段。这可能并不总是很容易找到,但您只需要大约30秒的片段就能获得良好的效果。在这个部分上,您使用选择工具设置一个时间选区,切换到"重复"模式,并将音轨切换到"Solo"模式,以便该片段仅在所需音轨上无限循环播放。现在非常仔细地倾听,开始稍微前后移动滑块 - 一开始可以移动得更多一些,这样您就能感受到变化和效果。然后调整直到满意为止。

然而,这只有在您在录制期间没有调整增益的情况下才有效。如果您在录制期间改变了输入电平 - 例如一开始录音很轻,后来却比较响亮 - 那么混音就会变得更加复杂一些。要么在适当的点将音轨分割成两个具有各自效果设置的轨道,要么使用自动音频增强服务,如 [Auphonic](https://auphonic.com/)。

**这里也有一个相关视频:** <!-- @todo 我们需要重新制作这个 gif -->
![调整噪声门](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Post-Produktion/LUFS_004.gif) **Ultraschall Dynamics:** _如何更改噪音减少的阈值。_


## Video
<div class="youTubeContainer">
<iframe src="https://ultraschall.github.io/ultraschall-manual/youtube/?url=pegvJr9As8U" title="YouTube video player"
frameborder="0" allowfullscreen="allowfullscreen"  class="video"></iframe>
</div>
