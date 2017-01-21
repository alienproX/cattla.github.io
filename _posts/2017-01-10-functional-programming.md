---
layout: default
title: 什么是函数式编程 ？
category: notes
---

不小心一眨眼，2017已过去了10天。呵呵....

这几年来，在 JavaScript 领域函数式编程变得很流行。遥想当年，很多人还不知道什么是函数式编程呢，当然了，现在也很多人不知道。随时开始学习，永远不晚。

提到函数式编程，必须得提到另一个名词：纯函数（pure functions）。什么是纯函数？简单讲就是：

纯函数是这样一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。

举个例子：

// 纯的
var checkAge = function(age) {
  var minimum = 21
  return age >= minimum
}


// 不纯的
var minimum = 21

var checkAge = function(age) {
  return age >= minimum
}

第二个函数之所以不纯，是因为有个变量在函数外部，变量的变化将直接影响到函数返回的结果，无法保证，相同的输入永远都是相同的输出。
