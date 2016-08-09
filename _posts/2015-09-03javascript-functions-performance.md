---
layout: default
title: 评估 Javascript 函数的性能
---

不管在任何时候，性能都是一个离不开的话题，只是在不同的阶段有不同的重要优先级。在前端方面，每个网站都希望给用户提供最快的速度，而不是缓慢的加载。作为一名工程师，当你的能力水平进化到一定阶段的时候，性能就必须时时刻刻在考虑范围内。提高性能的传统方式有很多，比如减少请求，使用CDN，不写会阻塞网页渲染的代码….. 当然这些今天仍然适用。而现在，Javascript 已成为一个页面非常重要的一部分，除了使用传统方式提高加载性能，客户端的 Javascript 代码是否足够的快，性能足够高，也必须纳入考量范围。

假设你有一段 Javascript 代码，工作是正常的，但是你怀疑它的速度不够快，没有达到应有的性能，并尝试去改变它。那首先要做的是，先去证明它的速度确实可以更快。那么怎么证明？通常的做法是，使用内置的 `performance.now()` 方法，来计算函数从开始执行到结束的时间。

{% highlight javascript %}
performance.now()
{% endhighlight %}

Performance 对象，是 ES5 新增加的一个接口，高精度的时间戳，`performance.now()` 返回的是当前页面从 `performance.timing.navigationStart` 到当前时间的时间差，精度为微秒，毫秒的千分之一，秒的百万分之一，精度很高啊！！！

下面介绍一下如何使用，以及如何避免跨入陷阱，在此我们定义一个函数 `makeHash()` :

{% highlight javascript %}
function makeHash(source) {
  var hash = 0;
  if (source.length === 0) return hash;
  for (var i = 0; i < source.length; i++) {
    var char = source.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash; // 转换成32位整数
  }
  return hash;
}
{% endhighlight %}

检测时间的方法如下：

{% highlight javascript %}
var t0 = performance.now();
var result = makeHash('Peter');
var t1 = performance.now();
console.log('耗时', (t1 - t0).toFixed(4), '微秒用来生成结果：', result);
{% endhighlight %}

在浏览器中运行该代码，你会看到如下结果：

>耗时 0.2730 微秒用来生成结果： 77005292

由于每个计算机/浏览器 的性能不一样，所以看到的耗时是不同的，而相同软硬件条件下，每次的耗时也不同。关于性能检测，有哪些是容易犯错的？

避免犯错#1 检测了非重要部分

在上面的代码中，在 t0 和 t1 之间执行了函数 `makeHash('Peter’)`，然后获得结果 result，如果加上一个 `console.log()` 会怎么样？

{% highlight javascript %}
var t0 = performance.now();
console.log(makeHash('Peter'));  // bad idea!
var t1 = performance.now();
console.log('耗时', (t1 - t0).toFixed(4), '微秒');
{% endhighlight %}

结果：

>耗时 5.0160 微秒

从打印出来的时间可以看出，耗时多了好几微秒。这不是重要的，重要的是我们不知道执行 `makeHash('Peter')` 耗费了多少时间，而又有多少时间浪费在打印到控制台上。同样的，如果在执行时间段内，执行多个函数：

{% highlight javascript %}
var t0 = performance.now();
var name = 'Peter';
var result = makeHash(name.toLowerCase()).toString();
var t1 = performance.now();
console.log('耗时', (t1 - t0).toFixed(4), '微秒用来生成结果：', result);
{% endhighlight %}

结果：

>耗时 0.1220 微秒用来生成结果： 106557964

同样的，这样虽然结果与原来的并无多少差异，但是也并不清楚 `toLowerCase()` 与 `toString()` 各自消耗了多少时间。

避免犯错#2 只检测一次

从上面的检测就可以看出，每次执行的结果都是不一样的，甚至差别都较大。而执行一段函数所需时间，取决于多个因素：

* 编译器的预热（比如：先把代码转成二进制）
* 我们并不知道主线程是否在忙着处理其它事情
* 也并不清楚浏览器是否因为 CPU 的忙碌而被拖慢了
* 如果重复执行 `makeHash('Peter’)` 会怎么样？

{% highlight javascript %}
var t0 = performance.now();
for (var i = 0; i < 10; i++) {
  makeHash('Peter');
}
var t1 = performance.now();
console.log('耗时', (t1 - t0).toFixed(4), '微秒用来生成结果');
{% endhighlight %}

结果：

>耗时 0.1210 微秒用来生成结果

一次执行10次，耗时并没有成倍的增加，而只是象征性地增加了一点点。那把每次的都打印出来呢？

{% highlight javascript %}
for (var i=0; i < 10; i++) {
  var t0 = performance.now();
  var result = makeHash('Peter');
  var t1 = performance.now();
  console.log('第'+(i+1)+'次耗时', (t1 - t0).toFixed(4), '微秒');
}
{% endhighlight %}

结果：

>第1次耗时 0.1110 微秒
>第2次耗时 0.0220 微秒
>第3次耗时 0.0030 微秒
>第4次耗时 0.0020 微秒
>第5次耗时 0.0030 微秒
>第6次耗时 0.0020 微秒
>第7次耗时 0.0030 微秒
>第8次耗时 0.0020 微秒
>第9次耗时 0.0020 微秒
>第10次耗时 0.0020 微秒

可以很明显看出。执行时间依此减少，直到最后的极限 0.002 微秒。这是因为浏览器的 Javascript 引擎的优化关系，简单说就是当第二次执行相同函数相同参数的时候，引擎并没有去重新计算一次，而是调用了第一次的结果。
