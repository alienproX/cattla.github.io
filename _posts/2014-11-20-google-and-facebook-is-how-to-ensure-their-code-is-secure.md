---
layout: default
title: 像FB或者Google这样的公司，是如何保证他们的代码安全？
via: http://www.quora.com/How-do-Google-and-Facebook-keep-their-source-codes-secure-when-hundreds-of-staff-members-have-access-to-it
category: notes
---

曾经在Facebook当过工程师。

在工作的时候，如果想拷贝这些代码并存档到自己的设备，几乎没有什么难度。但是从法律和职业生涯的角度来讲，这是一件会造成严重后果的事情。

再说，拷贝这些代码其实并没有多大用处，并不是说你拷贝了这些代码就等于可以去克隆一个Facebook，除了代码，你还需要基础数据，基础配置，等等这些。

还有一些如其他人所说的，有一部分关键代码是锁定状态的（既加密），很多员工（包括工程师）是没办法接触到这些代码的。此外，对FB代码库的代码编写，是在你个人的工作电脑上完成的。于此，好像也没有足够的理由会保证这些代码不会“泄漏”出去。

打个比方说，如果你去搜索的话，你很可能会在 Stackoverflow 这样的网站上发现FB的代码，因为有些FB的工程师会在那边提问问题。但是过一段时间，那些提问问题的工程师，很快就会意识到，他们必须将这些代码匿名起来。以至于不让别人看出这是FB的代码。

曾经在我刚开始为FB学习编写代码的时候，我也在 Stackoverflow 上贴出一些代码片段，但结果是有些人问，这到底是什么PHP？

原来我贴的部分代码是属于“Hack”部分，在当时这还是一种秘密语言。

至于什么是 Hack 请电梯至 [https://code.facebook.com/posts/2645…](https://code.facebook.com/posts/264544830379293/hack-a-new-programming-language-for-hhvm/)
