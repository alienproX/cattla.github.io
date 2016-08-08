---
layout: default
title: 关于前端开发 MEAN 组合框架的简介
---
PHP 里的 LAMP（Linux ＋ Apache＋ MySql ＋ PHP）组合框架已经存在很长时间了，曾经风靡全球，当然了现在也很流行。目前还有另外一个组合框架也在慢慢变得流行，MEAN 。MEAN 指的是 `MongoDB`，`Express`，`AngularJS` 和 `Node.js` 的组合。这四项既包含前端也包含后端，运用这四项工具就可以开发出一个完整的网站或者 Web App，所用的语言全部都是 javascript。如果你对这四项不是全部熟悉，可以看看以下的介绍。

__MEAN 名词解释__

__M__ 代表的是 `MongoDB`，世上 NoSQL 数据库的领航者，要注意一点，NoSQL 不是没有 SQL，而是 Not Only SQL，俗称非关系形数据库。MongoDB 是一个介于关系数据库和非关系数据库之间的产品。他支持的数据结构非常松散，是类似 json 的 bson 格式，因此可以存储比较复杂的数据类型。Mongo最大的特点是他支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。

__E__ 代表的是 `Express`，是 Node.js 里的一个轻量级框架，通常用在 Web App 或者创建 API 。通俗理解，它是一个 HTTP Server 框架。

__A__ 代表的是 `AngularJS`，Google 打造的一款著名的 MVC 框架，最大亮点是数据双向同步。在 MEAN 组合里面属于客户端，其它三者都是服务端。AngularJS 同时也对移动端做了很好的优化，以确保最大减少了和桌面端的表现区别。

__N__ 代表的是 Node.js，运行在服务端，使用的是 Google 的 V8 引擎，单线程，特点是擅长异步调用，I/O 操作，适用于大并发。

在 MEAN 运行前，必须先确保已经安装了 `MongoDB` 和 `Node.js`。 `Node.js` 安装的时候附带了 npm，一个包管理工具， node.js package management，就相当于 PHP 里面的 composer，composer 默认包的源是 https://packagist.org/ ，npm 默认的是 http://npmjs.org/ ，但是建议第三国家的开发人员把默认源改成淘宝，具体过程情 Google 之，噢！不，是百度一下。

以下运行环境均指在 Linux 或者 Mac 平台。

__第一个 Express 服务__

第一步：建立一个文件夹，然后进入并运行：

	npm init

运行时，需要回答一些问题（比如name，version，description，main …），这些是用来创建一个叫做 `package.json` 文件，该文件的作用是定义依赖的 Node.js 模块，可以通过 npm install 安装这些依赖，以此来保证你的项目正常运行。如果要将开发的模块发布到 http://npmjs.org/ ，这个文件也是必须的。一个 package.json 参考如下：

{% highlight json %}
{
  "name": "sp-mean",
  "version": "0.1.0",
  "description": "An introduction to MEANstack for SitePoint",
  "main": "server.js",
  "scripts": {
    "start": "node ./server"
  },
  "author": "Aldo Ziflaj",
  "license": "None"
}
{% endhighlight %}

`"main": “server.js"` 这一句是用来声明，运行在服务器的主要文件是 server.js。`"start": "node ./server”` 这句意思是，可以通过命令 `node ./server` 来运行 server.js 这个文件。

第二步：通过运行命令，添加 express 依赖。

{% highlight javascript %}
npm install express —save
{% endhighlight %}

运行结束后，就可以看到，在刚才创建的文件里多了一个 `node_modules` 的文件夹。

接着开始编写 server.js ， 如下代码：

{% highlight javascript %}
var express = require('express'),
    app = express();

app.get('/', function(req, res) {
    res.send("Hello from Express");
});

app.listen(3000, function() {
    console.log("Server ready. Listening on port 3000");
});
{% endhighlight %}

保存之后，然后在命令行运行 npm start，通过 http://localhost:3000 就可以看到以上代码输出的 Hello from Express 。除了用 `npm start`，还可以使用 `node server` ，`node server.js`， `node ./server` 来启动该服务。

__使用 MongoDB 数据库__

开始之前首先确保安装了 `MongoDB`，具体可以访问其官网 http://mongodb.org 。要在 Express 和 MongoDB 之间建立连接，必须安装个依赖，相关的依赖有很多，比如 mongodb，monk，mongoose。在此我们用 `monk` 做示范，开始执行以下命令：

{% highlight javascript %}
npm install monk —save
{% endhighlight %}

这段可能需要比较长的时间才能安装完成，完成之后就会发现，在 node_modules 目录多了一个 monk 的文件夹。接着在命令行输入：

	mongo

接着开始创建一个数据库，星球大战，并填入数据，执行以下代码：

{% highlight javascript %}
use starwars;

db.character.insert({
    name: "Luke",
    surname: "Skywalker",
    side: "Light",
    weapon: "Lightsaber"
});

db.character.insert({
    name: "Yoda",
    side: "Light",
    weapon: "Lightsaber"
});

db.character.insert({
    sith_name: "Vader",
    side: "Dark",
    weapon: "Lightsaber"
});

db.character.insert({
    sith_name: "Sidious",
    side: "Dark",
    weapon: "Force lightning"
});
{% endhighlight %}

我们可以看出，在所有记录中，并没有相同的 key，Luke 和 Yoda 也没有 sith_name 这个字段。这在 MongoDB 中是不会报错的，只要插入的是合法的 Javascript 对象。

接着使用 monk 连接数据库，并输出数据。在 server.js 的头部添加一个依赖：

{% highlight javascript %}
	var monk = require('monk');
{% endhighlight %}

接着再连接到刚才创建的数据库：

{% highlight javascript %}
	var swChars = monk('localhost:27017/starwars').get('character');
{% endhighlight %}

或者可以使用以下写法，表达更直观：

{% highlight javascript %}
	var db = monk('localhost:27017/starwars');
	var swChars = db.get(‘character');
{% endhighlight %}

第一行的作用是，连接到数据库 starwars，一个数据库里可以有多个集合，mongoDB 中多个文档构成集合，多个集合构成数据库。第二行的作用是，指定连接到 character 这个集合。

一个完整的集合读取代码如下：

{% highlight javascript %}
var monk = require('monk');

var db = monk('localhost:27017/starwars');
var swChars = db.get('character');

var express = require('express'),
  app = express();

app.get('/character', function(req, res) {
  swChars.find({}, function(err, docs) {
    if (err == null) {
      res.json(docs);
    } else {
      console.log(err);
    }
  });
});

app.listen(3000, function() {
  console.log("Server ready. Listening on port 3000");
});
{% endhighlight %}

运行 `node server` 后可以浏览 http://localhost:3000/character ，就可以看到输出的一个 JSON 字符串。上面是使用 find() 这个函数来查询 swChars，第一个参数是查询规则（上面为空），是一个 javascript 对象，第二个参数是一个回调函数，查询完成后调用。

__在前端布置 AngularJS__

通过上面的后端三个组合，运行起来，其实已经是个简单的 API 了。单有接口还不够，必须将数据 “可视化” ，于是我们使用 AngularJS。

使用 Bower 安装 AngularJS：

	bower init

先用 bower init 先创建一个 bower.json 文件，原理同上面的 package.json 类似。接着执行：

	bower install angular#1.4.3 —save

可以在目录文件夹里看到，AngularJS 已经被下载到本地了，在 bower_components 文件夹里。接着创建以下文件（夹）。

* assets/js/ngapp.js
* assets/js/controllers
* assets/js/services

第一个文件 ngapp.js 用来定义 AngularJS 应用，第二个文件夹是用来存放 AngularJS 控制器的地方，第三个文件夹是用来存放 AngularJS 服务（比如：factory）的地方。在第一个文件 ngapp.js 的代码为：

{% highlight javascript %}
var app = angular.module('starwars', []);
{% endhighlight %}

接着创建一个 Angular 工厂，用来读取刚才创建的 API，路径为：assets/js/services/StarWarsFactory.js。代码如下：

{% highlight javascript %}
app.factory('StarWarsFactory', function ($http) {
  return {
    characters: function () {
      return $http.get('/character');
    },

    jedi: function () {
      return $http.get('/jedi');
    }
  }
});
{% endhighlight %}

接着创建控制器，MainCtrl.js，至于文件夹 controllers 中。代码如下：

{% highlight javascript %}
app.controller('MainCtrl',function(StarWarsFactory) {
  var self = this;
  StarWarsFactory.characters().success(function(data) {
    self.charList = data;
  });
});
{% endhighlight %}

接着创建一个 index.html 的文件至于跟文件目录：

{% highlight html %}
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <script src="bower_components/angular/angular.js"></script>
    <script src="assets/js/ngapp.js"></script>
    <script src="assets/js/services/StarWarsFactory.js"></script>
    <script src="assets/js/controllers/MainCtrl.js"></script>
  </head>
  <body ng-app="starwars">
    <div ng-controller="MainCtrl as m">
      <ul>
        <li ng-repeat="item in m.charList">
          <span ng-if="item.side === 'Light'">
            {{item.name}}
            {{item.surname}}
            uses
            #{{item.weapon}}
          </span>
          <span ng-if="item.side === 'Dark'">
            Darth
            {{item.sith_name}}
            uses
            {{item.weapon}}
          </span>
        </li>
      </ul>
    </div>
  </body>
</html>
{% endhighlight %}

最后，把 index.html 嵌入到 Express 里面，采用读取文本的方式。

{% highlight javascript %}
app.use('/', express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
{% endhighlight %}

此时重运行 server.js 然后访问 http://localhost:3000 就可以看到从 mongoDB 输出的内容。

总结

本文简单地介绍 MEAN 框架组合，并入如何打造出一个简单的 Web App，前后端通过 API 传输数据。

最后祝大家学习进步。
