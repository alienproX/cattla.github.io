---
layout: default
title: 用 node.js 打造一个命令行的应用
---

在网页上开发应用或者原生应用，已经满足不了某些人的屌丝心理需求。下面简单介绍一下如何开发一个命令行的应用，也就是一切操作都在终端。

这个应用叫做 <a href="https://www.npmjs.com/package/weatherx" target="_blank">weatherX</a>, 感兴趣的可以试装下

    sudo npm install weather -g

装完之后，在命令行输入：

    weather shanghai

就可以看到上海的天气预报了。

总体逻辑：先获取命令行输入的参数，比如城市名，然后用 node.js 用该参数请求天气预报 API 的数据，格式化后显示在终端上。

想在终端打印出文本，只需用到 `console.log()` ，假如有一个 index.js 的文件如下：

    console.log("Hello World");

保存之后，运行

    node index.js

就可以看到终端输出 Hello World 了，但这并不是我们想要的，我们想要的是：

    node index.js Hello World

然后输出：

>Hello World

步骤

使用 nam init 这个命令创建 `package.json` 文件，或者你可以手动创建，JSON 内容如下：

{% highlight json %}
{
	"name": "weatherx",
	"version": "0.1.1",
	"description": "use command line view weather",
	"main": "index.js",
	"bin": {
		"weather": "index.js"
	},
	"author": "cattla",
	"license": "ISC"
}
{% endhighlight %}

这段 JSON 重点是：

    "bin": {
    	"weather": "index.js"
    }

这相当于告诉 node.js 运行 weather 命令，即运行了 index.js

然后修改 index.js 的代码内容

    console.log(process.argv[2]);

保存并运行，

    node index.js HelloWorld

就会输出

>HelloWorld

process.argv 可以获取到用户输入的参数，一个数组形式。具体可以参考 node.js 的文档。https://nodejs.org/docs/latest/api/process.html#process_process_argv

为了可以用终端命令来运行 node.js， 还需要在 index.js 文件的第一行添加以下代码

    #!/usr/bin/env node

完整代码如下：

    #!/usr/bin/env node
    console.log(process.argv[2]);

第一段代码的作用，是告诉系统当前脚本应该运行在 node 环境。之后在本机上进行全局安装：

    npm install -g

安装完成之后，你在命令行输入 `weather shanghai` 就可以看到输出 shanghai 了。

接下去的步骤，就是用根据输入的城市名称去调用 API , 然后显示天气数据。不多讨论，没什么高招精华。

完整代码： <a href="https://github.com/cattla/weatherX" target="_blank">https://github.com/cattla/weatherX</a> :)
