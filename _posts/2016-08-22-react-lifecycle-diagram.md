---
layout: default
title: React 组件生命周期方法图解
category: notes
thumbnail_image: '/files/react-logo.png'
---

### 装载(Mount)组件

![React 装载组件流程图](/files/201608/react-lifecycle-diagram-mount.png)

先从一个空元素开始：

1. `getDefaultProps()`， 如果父级没有传入 `props`，则可以用此设置默认值。

2. `getInitialState()`，初始化 `state` 的值。

3. `componentWillMount()`，组件渲染之前执行，只执行一次。

4. `render()`，开始渲染。

5. `componentDidMount()`，渲染完成触发，只执行一次。

注意，在 ES 6 环境中，`getDefaultProps()` 和 `getInitialState()` 不能使用 ES 6 class 的语法。

### 卸载(Unmount)组件

![React 卸载组件流程图](/files/201608/react-lifecycle-diagram-unmount.png)

`componentWillUnmount()` 在组件从DOM 卸载后立即执行.

### 更新(update)组件

![React 更新组件流程图](/files/201608/react-lifecycle-diagram-update.png)

2. `componentWillReceiveProps()`，已装载的组件，收到新的 `props` 时被触发。

3. `shouldComponentUpdate()`，判断是否需要更新 DOM 时被触发，会返回一个布尔值，返回 `false` 则跳过此次触发不更新，默认 `false。`

4. `componentWillUpdate()`，如果上面的 `shouldComponentUpdate()` 返回 `true`，该方法会在更新前被触发。

5. `componentDidupdate()`，更新后触发。
