---
layout: default
title: var, let, const 该如何选择 ？
category: notes
---

要成为一个优秀码农，也许最重要的事情是让自己的代码保持简约。ES6 之后在 JavaScript  里有几种标识符：`var`, `let`, `const`。那么有什么区别？要如何选择？

`var` 在之前的版本就有了 ，后面为了弥补 `var` 的缺陷，多了 `let` 和 `const` 以补充。

如果是我，我会更加偏向于使用 `const`，因为 const 声明创建一个只读的常量。这不意味着常量指向的值不可变，而是变量标识符的值只能赋值一次。什么意思？

{% highlight javascript %}
//正确
const obj = {a: 1}
obj.a = 2

//报错
const obj = {a: 1}
obj = {a: 2}
{% endhighlight %}

如果某个变量从头到尾都不需要重新赋值，那么 `const` 就是默认选择了，因为这样可以让代码保持更佳清晰。当一个变量需要重新赋值，则使用 `let` 声明。至于 `var` 在 ES6 环境中就不要使用了，但是有一种情况可能例外，在循环区块内，用 `let` 和 `var` 表现是不一样，如下例子：

{% highlight javascript %}
var a = []
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}
a[6]() //   输出10


var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}
a[6]()  // 输出6
{% endhighlight %}

综上，选择顺序是 `const` > `let` > `var`，有一点要注意的是，`var` 存在变量提升，其它两个则没有。
