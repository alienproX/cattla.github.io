---
layout: default
title: 2.5 使用 Image 视图绘制图片
category: swiftui-text-images
---

使用 `Image` 视图渲染图片，图片来源可以是本地，系统图标，或者 `UIImage` 等比较常见的来源途径。

加载本地图片的代码如下，跟 `Text` 差不多：

{% highlight swift %}
var body: some View {
    Image("example-image")
}
{% endhighlight %}

*example-image* 是图片名称，放置在 `Assets.xcassets` 文件夹里。在这，再次重温下 `some View` 这个关键字，之前学习的 `body` 里都是 `Text`，现在变成了 `Image`，一样正常工作。

使用 `Image(systemName:)` 可以加载 Apple 的  San Francisco 字体图标，只需传入图标名称的字符串，如下：

{% highlight swift %}
Image(systemName: "cloud.heavyrain.fill")
{% endhighlight %}

由于是字体，所以可以使用 `foregroundColor()` 和 `.font()` 来定义图标的颜色和大小：

{% highlight swift %}
var body: some View {
    Image(systemName: "cloud.heavyrain.fill")
        .foregroundColor(.red)
        .font(.largeTitle)
}
{% endhighlight %}

如果要自定义尺寸则可以使用 `.font(.system(size: 64))` 传入字号大小。更多图标可以参考 <a href="https://developer.apple.com/design/human-interface-guidelines/sf-symbols/overview/" target="_blank">SF Symbols</a>

你也可以载入已经存在的 `UIImage` 视图，记得使用 `return` 关键字：

{% highlight swift %}
var body: some View {
    guard let img = UIImage(named: "example-image") else {
        fatalError("Unable to load image")
    }
    return Image(uiImage: img)
}
{% endhighlight %}
