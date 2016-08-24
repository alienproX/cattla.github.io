---
layout: default
title: 在乌班图 Ubuntu 16.04 上安装 Node.js 6.X 和 npm
category: notes
---

不管是白猫黑猫，拍照好看的都是好猫....

### 官方提供的安装方法

目前为止根据 Node.js 的<a href="https://nodejs.org/en/download/package-manager/#arch-linux" target="_blank">官方指示</a>，并没有提供如何在 Ubuntu 16.04 上安装 Node.js 6.X ，提供最晚的版本是，Ubuntu 15.04，按照步骤如下：

{% highlight haskell %}
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y npm
{% endhighlight %}

但是最终结果不如人意，首先是命令变成了 `nodejs` 而不是普遍的 `node` ，再者输入 `nodejs -v` 输出的是 `v4.2.6`。活力妈了...其实要在 Ubuntu 16.04 上安装 Node.js 6.X 和 npm 很简单，只需两步骤。

__第一步__

{% highlight haskell %}
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
{% endhighlight %}

__第二步__

{% highlight haskell %}
sudo apt-get install -y nodejs
{% endhighlight %}

等完成之后，就算装好了，可以输入下面两个命令检测一下：

{% highlight haskell %}
node -v
npm -v
{% endhighlight %}
