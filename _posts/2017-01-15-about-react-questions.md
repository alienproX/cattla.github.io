---
layout: default
title: 关于 React 的若干问题
category: notes
via: https://tylermcginnis.com/react-interview-questions/
---

### 调用 setState 的时候内部发生了什么？

第一件事就是 React 会先把传入的对象和组件当前的对象先合并（merge）。由于状态的改变，极有可能需要更新视图，所以在 React 内部会创建一棵新的 React 元素树（当前状态所对应的元素），然后为了区分新的状态传进来之后，有哪些视图需要更新，React 会将这棵元素树跟上一次的做比较，这样一来，React 就知道哪些需要变化了，于是可以用最小的改动进行视图更新。其实这就是虚拟 DOM 的原理，更详细的可以看我之前的一篇文章《<a href="https://mblur.com/notes/2016/08/28/react-why-virtual-dom.html" target="_blank">React 为什么要使用虚拟 DOM，什么是虚拟 DOM ？</a>》。

### 该如何选择类组件（Class Component）和函数式组件（Functional Component）？

如果组件里有需要改变状态或者有生命周期，那么使用类组件，其余则使用函数式组件。

### 什么是 ref，为何重要？

ref 来源于 reference，“引用”的意思。通过 ref 可以访问 React 生成的元素或组件。使用方法，在元素或组件添加一个 `ref` 属性，它的值是一个回调函数，当该组件挂载实例的时候触发，第一个参数是该实例。如下：

{% highlight javascript %}
class UnControlledForm extends Component {
  handleSubmit = () => {
    console.log("Input Value: ", this.input.value)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          ref={(input) => this.input = input} />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
{% endhighlight %}

在上面的代码，我们可以看到 `input` 有个 `ref` 属性，并且是个函数，该函数将 input 这个节点挂到 `this.input` 上面，在 `handleSubmit` 这个函数里，可以通过 `this.input` 访问到 `input` 节点。并不是一定要类组件（class component）的方式才能使用 `ref`，使用函数式组件（functional component）也可以，如下：

{% highlight javascript %}
function CustomForm ({handleSubmit}) {
  let inputElement
  return (
    <form onSubmit={() => handleSubmit(inputElement.value)}>
      <input
        type='text'
        ref={(input) => inputElement = input} />
      <button type='submit'>Submit</button>
    </form>
  )
}
{% endhighlight %}

### React 里面的 key 是什么？有何作用？

简单来说，`key` 的作用主要是用来跟踪在一个列表（同级同标签）里哪些节点需要更新或删除。

{% highlight javascript %}
render () {
  return (
    <ul>
      {this.state.todoItems.map(({task, uid}) => {
        return <li key={uid}>{task}</li>
      })}
    </ul>
  )
}
{% endhighlight %}

在同级元素里，每个 `key` 必须是不相同的。上面提到的虚拟 DOM，每次状态的改变，虚拟元素树都会对上一次的进行对比，给每一个元素加上 key 就是为了方便创建虚拟元素树，避免混淆。
