---
layout: default
title: 几个 ES6 函数式编程的小技巧
category: notes
via: https://medium.com/@peterchang_82818/es6-function-programming-cheatsheet-update-spread-note-example-tutorial-26f265b0ddf1
---

### 更新对象


{% highlight javascript %}

let state = {
    id: 1,
    points: 100,
    name: "Goran"
};

let newState = {
    ...state, //重点在这
    points: 120
}

/*
  {
    id: 1,
    points: 120,
    name: "Goran"
  }
*/

{% endhighlight %}


### 更新数组
原始数组为 `[1, 1, 1, 1]` ,现在需要改变第三个元素，使其 +1 ,最终结果 `[1,1,2,1]`
{% highlight javascript %}
let state = [1, 1, 1, 1]

let index = 2
let newState = [
    ...state.slice(0, index),
    state[index] + 1,
    ...state.slice(index + 1)
]

{% endhighlight %}

### 过滤器

一个
