---
layout: default
title: React 组件生命周期方法图解
category: notes
thumbnail_image: '/files/react-logo.png'
---

![React 装载组件流程图](/files/201608/react-lifecycle-diagram-mount.png)

先从一个空元素开始：

1. `getDefaultProps()`， 如果父级没有传入 `props`，则可以用此设置默认值。

2. `getInitialState()`，初始化 `state` 的值。

3. `componentWillMount()`，组件渲染之前执行，只执行一次。

4. `render()`，开始渲染。

5. `componentDidMount()`，渲染完成触发，只执行一次。

注意，在 ES 6 环境中，`getDefaultProps()` 和 `getInitialState()` 不能使用 ES 6 class 的语法。
