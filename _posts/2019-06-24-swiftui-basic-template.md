---
layout: default
title: 2.1 SwiftUI 的基础项目模版
category: swiftui-text-images
---

首先我们先在 Xcode 创建一个 SwiftUI 项目，步骤如下：

步骤一：打开 Xcode（必须11及以上版本） 并点击 **Create a new Xcode project**，或者在菜单栏选择 **File > New > Project**。

![Create a new Xcode project](/files/swiftUI/1.jpg)

步骤二：在模版选择器选择 **Single View App**，然后点击下一步。

![Single View App](/files/swiftUI/2.jpg)

步骤三：给项目命名，然后勾选 **Use SwiftUI** 选项，最后找个路径保存项目。

![Use SwiftUI](/files/swiftUI/3.jpg)

至此一个项目就算有基础模版了，也可以看到对应的文件结构。

![SwiftUI](/files/swiftUI/4.jpg)

下面简单介绍下各个文件的作用：

* 1. AppDelegate.swift 主要是负责监听程序的生命周期，比如启动，闲置，进入后台，返回前台，退出应用程序，或者有其它应用程序试图调用本程序等动作。
* 2. SceneDelegate.swift 主要是负责应用程序的视图显示。
* 3. ContentView.swift 这是应用程序的初始化界面，如果是一个 UIKit 项目，Xcode 则是给一个 ViewController.swift 的文件。
* 4. Assets.xcassets 这是一个静态资源目录，用于放置项目中需要使用到的图片，颜色，数据等资源。
* 5. LaunchScreen.storyboard 打开程序，加载时所显示的内容，国产的应用程序通常用来放置广告。
* 6. Info.plist 一个属性列表文件，比如设置应用的显示名称，需要获取的系统权限（定位，通讯录，摄像机...）。
* 7. Preview Content 包含一个 Preview Assets.xcassets 的资源目录。
