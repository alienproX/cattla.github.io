---
layout: default
title: 在 Node JS 里把 XML 转换成 JSON 格式
---

虽然现在使用XML格式的已经不多了，但是很多网站的API 还是会提供两种格式，XML 和 JSON。 那么在 Node JS 服务器这两种格式要怎么互相转换？

在 Node JS 里有很多的模块支持该功能，本文使用 __xml2js__ 模块。

__第一步：__ 安装

使用 npm 安装，在命令行使用以下命令。

    npm install xml2js

__第二步：__ 创建一个 test.xml 测试文件

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
{% endhighlight %}

__第三步：__ 编写脚本

编写一个 Node JS 文件，代码如下：

{% highlight javascript %}
var fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();
fs.readFile(__dirname + '/test.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.dir(result);
        console.log('Done');
    });
});
{% endhighlight %}

将以上代码储存为 xml2json.js。

__第四步：__ 运行

一切都准备好了，在命令行输入：

    node xml2json.js

你就可以在终端窗口看到转换后输出的 JSON 格式了。

{% highlight javascript %}
{
    note : {
        to: ['Tove'],
        from: ['Jani'],
        heading: ['Reminder'],
        body: ['Don\'t forget me this weekend!']
    }
}
{% endhighlight %}
