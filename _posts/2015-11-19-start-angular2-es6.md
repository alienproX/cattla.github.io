---
layout: default
title: Angular2 + ES6 项目起步
category: notes
---

想开始使用 Angular 2 ，又不知从何下手？到底和 Angular 1.X 有什么不同呢？

不用担心太多，只要有一颗想学习的心，已经完成 60% 了。本文将简单介绍，如何着手开始 Angular 2 。

强调下，npm 版本和 node.js 版本必须是新一点的。

__1，安装 Yeoman 脚手架__

安装一个 Yeoman Angular 2 生成器，打开终端，输入如下命令。

    $ npm install -g yo generator-angular2

__2，创建一个项目__

建立一个文件夹 ng2-sandbox ， 然后用 cd 进入文件夹，运行 yo 命令来生成应用的脚手架。

    $ mkdir ng2-sandbox && cd ng2-sandbox
    $ yo angular2

之后运行 `npm install` 安装依赖，依据不同的网络情况和所在国家，这个步骤耗时会介于 30秒 到 1年 之间。

__3，打包运行__

运行下列命令

    $ gulp dev

该命令会打包文件，并弹出一个浏览器窗口，地址为 http://localhost:8000 ， 你会看到你刚创建项目 ng2-sandbox 的文件结构。

__4，探索应用结构__

这时你会看到你刚创建项目 ng2-sandbox 的文件结构。打包前是 ES6 ，打包后变成了 ES5。主要文件结构如下：

    src
    ├── index.html
    ├── index.js
    ├── ng-2-sandbox.html
    └── ng-2-sandbox.js

__index.html__
注意到这个文件引入了 angular2.js 这个文件，然后使用了 `System.import('index')` 的方法引入了 index.js 。

__index.js__
定义了组件 Main 的地方，可以注意到第五行 `selector: 'main'` 意思是匹配了 index.html DOM 里面的 <main>...</main>

__ng-2-sandbox.html / ng-2-sandbox.js__
只是参考了 index.html / index.js 重写了一遍。

XX引进门，修行在个人….. :)
