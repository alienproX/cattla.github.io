---
layout: default
title: Branka与Bon Jovi的故事
---

![](/files/2015/google-old-logo.png)

旧版的 Google Logo 使用的是复杂的衬线字体，只能使用贝塞尔曲线来创建。它有100个锚点，如果是使用 SVG 的话，一个文件约为 6KB（6,380 bytes） 大小，压缩后为 2KB（2,145 bytes）。

而新版的 Logo，变得更加简洁了，可以看作是若干个圆形和矩形组成，除了小写 g 下半部的钩部分。

![](/files/2015/google-new-logo.png)

整个标志的组成部分包含：

* 10个圆形（G o o g e 各包含两个，于此组成了一个圆圈）
*	5个矩形（两个在大写的 G，一个在小写的 l，两个在小写的 e）
* 1个有7个锚点的形状（即小写的 g 钩部分）
* 谷歌 Google 没有说明新的 Logo 矢量需要多少的字节，但实际是可以压缩到 305 字节。

为了验证这一点，使用 SVG 来重绘大写的字母 G，如下：

{% highlight html %}
<svg xmlns="http://www.w3.org/2000/svg">
<circle r="100" cy="100" cx="100" fill="#4885ed"/>
<circle r="70" cy="100" cx="100" fill="#ffffff"/>
<rect transform="rotate(-40 166,67)" height="78" width="99" y="27" x="117" fill="#ffffff"/>
<rect height="30" width="88" y="87" x="111" fill="#4885ed"/>
</svg>
{% endhighlight %}

在线预览： <a href="/demos/google-G.html" target="_blank">google-G</a>

该 SVG 使用了 302 个字节，压缩后为 195 个字节。绘制原理如下：

![](/files/2015/google-G.jpg)

另有人指出，不一定要用填充的方法来绘制，还可以使用描边的方法，而描边的方法是没办法使用在旧版 Logo 的，新版可以 :)

整个 Logo 完整的 SVG 描边如下：

{% highlight html %}
<svg xmlns="SVG namespace" width="600" height="250">
<g stroke-width="16" fill="none">
 <path d="M173 102a51 51 0 1 1-13-30m20 37h-53" stroke="#4a87ee"/>
 <circle cx="227" cy="128" r="32" stroke="#d83038"/>
 <circle cx="313" cy="128" r="32" stroke="#f4c022"/>
 <path d="M401 160a31 31 0 1 1 0-61m-4 0a24 29 0 1 1 0 61m26-67v79m-1-12a20 20 0 1 1-52 17" stroke="#4a87ee"/>
 <path stroke="#4ab95a" d="M449 51v115"/>
 <path d="M529 118a30 30 0 1 0-2 24m5-32l-62 28" stroke="#d83038"/>
</g>
</svg>
{% endhighlight %}

在线预览：<a href="/demos/google-new-logo.html" target="_blank">google-new-logo</a>

该方法使用了 209 个字节，使用该方法，整个 Logo 绘制了两个圆圈（两个小写的 o ）和4个路径（大写的 G，小写的 g l e）。

![](/files/2015/google-G2.jpg)
