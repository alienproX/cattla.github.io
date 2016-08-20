---
layout: default
title: 七个升级到 Node.js V4.0 的理由
category: notes
---

距离 Node.js 4.0 版本的发布已经有一段时间了，这是 io.js 与 Node.js 合并后的第一个稳定版，上一个 Node 版本还是 `V0.12.7` 呢！新的版本使用了 ES6，下面就介绍一下几个升级的理由。

### 1，模板字符串（Template Strings）

至于什么是模板字符串，请移步到这里 ，简单理解就是可以在字符串里包含语法。在之前的 Javascript 里，如果你想创建一个多行文本的字符串，也许你会使用下列方法：

    var message = [
        'The quick brown fox',
        'jumps over',
        'the lazy dog'
    ].join('\n');

这种方法虽然可以生效，但是毕竟有点奇技淫巧的味道，而且不适用于大量文本。但是在 ES6 中自带了输出多行文本的方法，既使用反撇号 ｀ ，不知道的可以在键盘上找好，一般是在键盘 1 左侧。以下是实用 ES6 输出多行文本的范例：

    var message = `
        The quick brown fox
            jumps over
            the lazy dog
    `;

关于模板语法，如果在字符串中包含变量，按传统方法是这样的：

{% highlight javascript %}
var name = 'Schroedinger';

var message = 'Hello ' + name + ', how is your cat?';
var message = ['Hello ', name, ', how is your cat?'].join('');
var message = require('util').format('Hello %s, how is your cat?', name);
{% endhighlight %}

但是使用 ES6 你可以这样：

    var message = `Hello ${name}, how is your cat?`;

怎么样？很任性吧！！！

### 2，类（Classes）

在之前的 Javascript 里，严格上说，是没有“类”这一概念的，因为它不能像 PHP 一样直接通过 Class 定义，而实现方法只能通过构造函数和原型，像下面：

{% highlight javascript %}
var Pet = function (name) {
    this._name = name;
};

Pet.prototype.sayHello = function () {
    console.log('*scratch*');
};

Object.defineProperty(Pet.prototype, 'name', {
  get: function () {
    return this._name;
  }
});


var Cat = function (name) {
    Pet.call(this, name);
};

require('util').inherits(Cat, Pet);

Cat.prototype.sayHello = function () {
    Pet.prototype.sayHello.call(this);
    console.log('miaaaauw');
};
{% endhighlight %}

幸运的是，在 ES6 中大大简化了这种难看的写法，因为引入了 Class 的概念。如下：

{% highlight javascript %}
class Pet {
    constructor(name) {
        this._name = name;
    }
    sayHello() {
        console.log('*scratch*');
    }
    get name() {
        return this._name;
    }
}

class Cat extends Pet {
    constructor(name) {
        super(name);
    }
    sayHello() {
        super.sayHello();
        console.log('miaaaauw');
    }
}
{% endhighlight %}

如果你懂得 PHP 或者其它有 Class 的语言，那么就会很熟悉这种写法了。如想了解更多关于 ES6 的 Class 请移步：这里。

### 3，箭头函数（Arrow Functions）

如果对 Javascript 掌握不是很好的朋友，也许会觉得 JS 里的 this 到底是指向哪里，很没把握，而且容易引起混乱。而箭头函数的概念，首先它是一个匿名函数，是简写的函数表达式，重要一点是它可以指定 this 值。语法如下：

{% highlight javascript %}
([param] [, param]) => {
   statements
}
{% endhighlight %}

param => expression
箭头左边是若干个参数，如果没有参数需要使用 () 来表示，如果只有一个参数，那么括号可以省略，比如：foo => 1。下面看一个例子：

{% highlight javascript %}
var simple = a => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10
{% endhighlight %}

如果把它拆成传统方式，则是：

{% highlight javascript %}
var simple = function (a) {
    if (a > 15) {
        return 15;
    } else {
        return a;
    }
}
{% endhighlight %}

关于箭头函数的 this 部分，传统方式：

{% highlight javascript %}
Cat.prototype.notifyListeners = function () {
    var self = this;
    this._listeners.forEach(function (listener) {
        self.notifyListener(listener);
    });
};
{% endhighlight %}

使用箭头函数：

{% highlight javascript %}
Cat.prototype.notifyListeners = function () {
    this._listeners.forEach((listener) => {
        this.notifyListener(listener);
    });
};
{% endhighlight %}

### 4，对象字面量（Object Literals）

传统方式：

{% highlight javascript %}
var age = 10, name = 'Petsy', size = 32;
var cat = {
    age: age,
    name: name,
    size: size
};
{% endhighlight %}

用 ES6 方式：

{% highlight javascript %}
var cat = {
    age,
    name,
    size
};
{% endhighlight %}

两者输出的对象 cat 是一样的。

### 5，Promises 形式

Javascript 中 Promises 这个词在中文里不能翻译成 “承若”，而应该是普罗米修斯，意指有先见之明的意思。在 ES6 中已经有提供原生方法了，而不需要去模拟。

{% highlight javascript %}
var p1 = new Promise(function (resolve, reject) {});
var p2 = Promise.resolve(20);
var p3 = Promise.reject(new Error());
var p4 = Promise.all(p1, p2);
var p5 = Promise.race(p1, p2);

// and obviously
p1.then(() => {}).catch(() => {});
{% endhighlight %}

### 6，字符串新方法

{% highlight javascript %}
// replace `indexOf()` in a number of cases
name.startsWith('a')
name.endsWith('c');
name.includes('b');

// repeat the string three times
name.repeat(3);
{% endhighlight %}


### 7，let 和 const

先看下面这段代码：

{% highlight javascript %}
var x = 20;
(function () {
    if (x === 20) {
        var x = 30;
    }
    return x;
}()); // -> undefined
{% endhighlight %}

至于为什么会返回 undefined 无需解释了，但是把 var 换成 let 会返回 20 :)

{% highlight javascript %}
let x = 20;
(function () {
    if (x === 20) {
        let x = 30;
    }
    return x;
}()); // -> 20
{% endhighlight %}

var 与 let 这两者的区别是，let 允许把变量的作用域限制在块级域中。与 var 不同处是：var 申明变量要么是全局的，要么是函数级的，而无法是块级的。

除此之外，Node.js 还支持 const ，声明的是一个只读常量，不能重新赋值，如果声明时没有赋值，则一直是 undefined。

由于 Node.js 是运行在服务器的，无需担心浏览器之间的兼容问题，所以建议升级，享受新方法带来的便捷。
