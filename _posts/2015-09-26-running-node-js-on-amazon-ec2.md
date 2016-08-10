---
layout: default
title: 在亚马逊 AWS 云服务 Amazon EC2 运行 Node.js
---

由于 Amazon AWS云服务 EC2 有一年的免费服务，想试试云服务的朋友还是很可尝试的。云服务就不多介绍了，说人话一点就是，一台远程计算机。本文开始教导大家，如何在Amazon EC2 上运行Node.js。

__步骤1: 注册__

建立一个亚马逊账户，国内的 amazon.cn 账户不行，必须是国际的 amazon.com。在这就不多介绍了。必须绑定一张信用卡才能使用一年的免费服务。

__步骤2: 配置__

登陆到控制台，可以看到如下界面，有中文版的。选择 Compute（计算）下的 EC2，也就是最左上角。

![](/files/2015/aws1.png)

进入 EC2 页面之后，点击 Launch Instances （启动实例），接着就开始配置了。系统选择 Amazon Linux，接着硬件选择，一路 Next 下去。在第六步的时候，要添加一个 http 规则，选择 80 端口，如图。

![](/files/2015/aws2.png)

配置好的 EC2 实例是这样子，然后点击 launch 启动。

![](/files/2015/aws3.png)

由于安全问题，需要下载 key pair（密钥对），新建并下载。如图，是一个 pem 文件。

![](/files/2015/aws4.png)

__步骤3: 远程登录__

机器启动之后，下面就开始需要使用 ssh 远程登录。

先把刚才下载的 pem 权限设置成400，为了方便，可以把 pem 文件放在跟目录，然后执行如下命令：

    sudo chmod 400 <your private key file>

接着就可以开始使用 ssh 登录了，命令格式如下：（详细命令可以在左上角点击 Connect （连接）按钮弹出）。

    sudo ssh -i <your key file> ec2-user@<your public DNS>

登录成功之后，效果如下：

![](/files/2015/aws5.png)

__步骤4: 安装 Node.js__

一切已就绪，现在可以安装 Node.js 了。使用下面命令切换到跟目录。并升级 yum 包管理。

    cd /home/ec2-user/
    sudo yum update

安装 GCC++ 并编译

    sudo yum install gcc-c++ make

安装 openssl-dev

    sudo yum install openssl-devel

安装 git

    sudo yum install git

使用 git 下载 Node.js

    git clone git://github.com/joyent/node.git

完成之后，进入 node 文件夹

    cd node

选择版本，这里以 V0.12.7 为例。

    git checkout v0.12.7

在逐个执行下列命令

    ./configure
    make
    sudo make install

这个过程比较耗时，大约需要10几分钟。

__步骤5: 安装NPM__

在系统上安装任何 Node 模块，必须先添加 path。所以必须先修改 sudoers 文件。逐个执行以下命令：

    sudo su
    vi /etc/sudoers

打开 sudoers 文件之后，找到这一行：

    Defaults    secure_path = /sbin:/bin:/usr/sbin:/usr/bin

输入i进入编辑模式，把这行替换成

    Defaults    secure_path = /sbin:/bin:/usr/sbin:/usr/bin:/usr/local/bin

然后按 esc 并输入 `:wq!` 退出并保存。

开始安装NPM

    git clone https://github.com/isaacs/npm.git
    cd npm
    sudo make install

这个过程有点缓慢，同样需要一段时间。

__步骤6: 打印 Hello World__

恭喜！已经安装完成了，接下去就开始 Hello World 的项目。

建立一个文件夹，并进入：

    mkdir hello && cd hello

建议 package.json 文件。

    vi package.json

输入以下内容：

{% highlight json %}
{
  "name": "sample",
  "version": "0.0.1",
  "dependencies": {
    "express": "^4.12.3"
  }
}
{% endhighlight %}

按 `esc` 键并输入 `:wq` 退出并保存。运行依赖安装：

    npm install

使用刚才创建 package.json 的方式创建另一个文件，app.js。内容如下：

{% highlight javascript %}
var express = require("express");
var app = express();
app.get("/",function(req,res){
        res.send("<h1>Hello from EC2</h1>");
});
app.listen(80);
{% endhighlight %}

完成之后，运行它：

    sudo node app.js

要确定必须使用 sudo ，然后访问 公有DNS 就可以看到输入内容了，如图：

![](/files/2015/aws6.png)

公有DNS 其实包含了IP地址，在上述截图中，直接访问 `52.24.27.130` 也可以看到一样的效果。
