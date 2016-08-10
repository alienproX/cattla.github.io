---
layout: default
title: 使用 Javascript 创建和保存文件
---

Javascript 可以把 JSON 文本保存成一个文件，前提是你在点击下载的时候。本文会介绍到 Javascript 是怎么创建文件的，怎么把 JSON 文本保存到文件里。

我们可以使用 Javascript 的 `Blob` 对象来创建文件，以下是一个简单的例子：

{% highlight javascript %}
var file = new Blob(["Hello World"], {type: type})
{% endhighlight %}

Blob 对象有两个参数，第一个参数是一个数组，包含了要把哪些数据添加到文件里，第二个参数是一个对象，主要用来设置 Blob 对象的属性。

那单有这行还是不够的，要怎么保存成文件？使用浏览器下载的方法。代码如下：

__html__
{% highlight html %}
<a href="" id="a">Lets download file</a>
<button onclick="download('file text', 'myfilename.txt', 'text/plain')">Create file</button>
{% endhighlight %}

__javascript__
{% highlight javascript %}
function download(text, name, type) {
  var a = document.getElementById("a")
  var file = new Blob([text], {type: type})
  a.href = URL.createObjectURL(file)
  a.download = name
}
{% endhighlight %}

但是把下载直接写在 html 并不是一个美观的做法，让我们使用 jQuery 来实现同样的功能。

{% highlight javascript %}
function download(text, name, type) {
  var file = new Blob([text], {type: type})
  var a = $('<a id="download-it">Download it</a>').appendTo('body')
  a[0].href = URL.createObjectURL(file)
  a[0].download = name
  a[0].click()
}

download('file text', 'myfilename.txt', 'text/plain')
{% endhighlight %}

这块代码，理念是用 Javascript 模拟了一个下载行为。但是文件内容只有一段文本。如果想是一段 JSON，那要怎么操作？比如这段 JSON 是一组视频下载链接。

{% highlight javascript %}
var videos = [
  {
    link:"/watch?v=YlUKcNNmywk",
    title:"Red Hot Chili Peppers - Californication [Official Music Video]",
    views:"1,286,283",
    date:"Oct 26, 2009"
  },
  {
    link:"/watch?v=SBjQ9tuuTJQ",
    title:"Foo Fighters - The Pretender",
    views:"752,533",
    date:"Oct 2, 2009"
  }
]
{% endhighlight %}

还是可以使用刚才写的 `download()` 函数，只是要先把 JSON 变成数组格式。

{% highlight javascript %}
download(JSON.stringify(videos), 'videos.json', 'text/json')
{% endhighlight %}

使用 `JSON.stringify()` 的方法，把 JSON 文本变成数组。想象力是无限，动动脑子，这个功能也可以说是挺丰富的。毕竟互联网上的一切都可以说基于文本。
