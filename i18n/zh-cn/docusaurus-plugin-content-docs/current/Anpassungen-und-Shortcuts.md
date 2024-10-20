---
id: adaption
title: '导航，快捷键，设置'
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

## 介绍

为了加快您的录制和编辑工作，Ultraschall 提供了许多快捷键，使您的工作更加轻松。在本章中，您将学习如何使用已提供的快捷键 - 以及如何设置您自己的快捷键。

## Ultraschall 预设

:::info 信息
**针对 Ultraschall 老手的说明：**与以前版本不同，现在许多键盘快捷键现在是全局可用的。以前，键盘快捷键取决于在某个时间点具有焦点的程序区域，自第 5 版以来，许多快捷键被设置为始终有效。这应该解决典型问题 - 例如，在按下 <kbd>M</kbd> 后未设置标记，因为您最后单击了声音板上的某个内容。
:::

**所有快捷键的概览：**在新的菜单项 `Podcast`>`帮助和文档` 中，您将找到一个自动生成的、按照顺序排列的所有活动快捷键和鼠标修改器的列表。

**更新的键盘模板：**所有相关的快捷键都可以在[此方便的 PDF](http://url.ultraschall-podcast.de/keymap5) 中找到：
[![键盘模板](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Anpassungen-und-Shortcuts/keymap.jpg)](http://url.ultraschall-podcast.de/keymap5)

**关闭当前项目选项卡：**在 Mac 上，默认情况下使用 <kbd>Cmd</kbd> + <kbd>W</kbd> 关闭当前打开的项目选项卡。

**动态拆分项目：**功能 `Dynamic Split Items` 现在可以通过键盘快捷键 <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd> 直接访问。

**标准化：**使用 <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> 将所有选定的项目标准化为 -23 LUFS。使用 <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> 取消任何标准化。

## 导航

**触摸板/鼠标滚轮功能：**不幸的是，触摸板和鼠标滚轮有时会相互干扰。鼠标滚轮现在具有以下分配，这些分配也可以在几乎所有其他编辑程序中找到：

- **滚动**：垂直滚动[时间轴工作区[25]](GUI-overview#area-workspace)。
- **按住 <kbd>Shift</kbd> 键滚动**：水平滚动[时间轴工作区[25]](GUI-overview#space-workspace)。
- **按住 <kbd>Opt</kbd>/<kbd>Alt</kbd> 键滚动**：水平缩放。
- **按住 <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> 键滚动** - 垂直缩放。
- **单击**：设置编辑光标而不选择轨道或项目。
- **单击并拖动**：自由移动[时间轴工作区[25]](GUI-overview#area-workspace) <!-- [ ] ToDo: check and correct if necessary -->

**检查切割：**快捷键 <kbd>Alt</kbd> + <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>←</kbd> 和 <kbd>Alt</kbd> + <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>→</kbd> 将播放光标设置为下一个项目边缘（仅在选定轨道上）；然后，光标将根据 Ultraschall 设置中用于预览和启动播放的值向后跳跃 - 这样可以快速检查项目中的所有切割。

**缩放到选择并返回：**快捷键 <kbd>Shift</kbd> + <kbd>Z</kbd> 将视图缩放到时间选择或选定的项目。然后，选择将被取消。再次按下它将将视图返回到原始缩放级别。

**缩放到编辑光标：**<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + **轨道上的固定**不会将视图缩放到鼠标指针的位置，而是将其缩放到编辑光标的位置。

## 使用您自己的快捷键

要访问快捷键菜单，请从菜单“操作" > "显示操作列表" 中打开“操作”对话框。在此处，如果默认的 Ultraschall 设置不合适，您可以自定义快捷键。

### 全局快捷键

在此示例中，我们创建新的快捷键 <kbd>Alt</kbd> + <kbd>Input</kbd>，它应该打开项目设置。为此，找到相应的操作 - 在示例中为 `Project Settings` - 并单击 `Add...` 按钮，以调用用于指定快捷键的 `Keyboard/MIDI/OSC Input` 对话框。首先在未来要使用的快捷键中键入快捷键，然后从 'Scope' 下拉列表中选择 'Global'。确认后，您的新快捷键在 Ultraschall 中的任何地方都可用。(当在快捷键列表底部的快捷键名称后出现关键字“(global)”时，您会知道它是全局的)。

### 创建和使用您自己的快捷键

在此示例中，我们更改了刚刚设置的 <kbd>Alt</kbd> + <kbd>Enter</kbd> 快捷键，以便它不是全局设置，而是仅在焦点位于 [轨道 [23]](GUI-overview) 或 [混音器 [24]](GUI-overview) 时起作用。为此，在“操作”对话框中找到便捷按钮“查找快捷方式”。在那里输入您的快捷键，然后您就会进入与之关联的操作。然后，您基本上执行与分配相同的操作：单击 `Add...`，然后再次输入快捷键，即此处为 <kbd>Alt</kbd> + <kbd>Enter</kbd>。请确保在 `Scope` 下拉列表中选择了 `Normal`。然后确认。

您可以通过快捷键列表底部的快捷键名称后没有“(global)”来判断您的快捷键是否设置正确。

## Ultraschall 设置

通过播客菜单或键盘快捷键 <kbd>;</kbd> 显示 Ultraschall 设置。这些通过标签分为三个区域：<kbd>GENERAL</kbd>、<kbd>SOUNDCHECK</kbd> 和 <kbd>INTERFACES</kbd>。

### 一般设置

![soundcheck-settings](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Anpassungen-und-Shortcuts/settings_general.png)

可以进行以下设置：

- 显示启动屏幕
  - 启动时显示 Ultraschall 启动屏幕
- 检查更新
  - 启动时检查 Ultraschall 更新。仅显示消息，不传输其他数据。
- 预览的预卷时间
  - 设置按下 <kbd>p</kbd> 键时程序向后跳转的秒数，以预览切割。
- 录制的预卷时间
  - 设置为预先录制回滚的秒数。
- Preshow 音乐混音
  - 在预先节目中播放一些 Ultraschall 声音板中的音乐，以娱乐直播。如果选择了预先设置的路由方案，您可以将音乐中的一些或全部（1）混合到您的耳机混音中。
- 录制时声音板淡入
  - 在录制期间激活声音板的淡入。如果有人开始对麦克风说话，声音板轨道的音量将轻轻降低。
- 编辑时声音板淡入
  - 在编辑期间激活声音板的淡入。如果有人开始对麦克风说话，声音板轨道的音量将轻轻降低。
- 在回放时标记引发声音
  - 在回放期间播放章节或编辑标记时播放声音。
- 引发声音的音量
  - 设置 ping 声音的音量。
- 跟随模式自动检测
  - 当单击排列视图时关闭跟随模式。如果遇到跟随模式的问题，请禁用此选项。
- Graceful Soundcheck
  - 通过关闭声音检查窗口，将所有打开的声音检查警告设置为 _ignore_ 状态。
- 录制安全模式
  - 在按下 <kbd>SPACE</kbd> 或 <kbd>RETURN</kbd> 后警告录制意外停止。
- 自动着色轨道 - 音速彩虹
  - 新轨道将获得独特的颜色。本地轨道以蓝色开始，远程轨道（StudioLink）将为橙色，声音板为灰色。
- 自动排列轨道高度
  - 如果添加新的轨道或包络，则将轨道放大或缩小以适应排列视图。
- 大型标记管理器
  - 在右侧为标记管理器提供更多空间。

### 声音检查设置

![soundcheck-settings](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Anpassungen-und-Shortcuts/settings_soundcheck.png)

### 直接监控的接口设置

![interfaces-settings](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Anpassungen-und-Shortcuts/settings_interfaces.png)