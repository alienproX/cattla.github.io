(function(t){function e(e){for(var o,i,s=e[0],l=e[1],c=e[2],d=0,h=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/xialong/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},1837:function(t,e,n){},"45db":function(t,e,n){"use strict";n("1837")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Home",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.done,expression:"done"}],attrs:{id:"done"}},[n("div",{attrs:{id:"doneImage"}}),n("div",{staticClass:"bottomAction"},[n("p",[t._v("长按红色图片分享到群里")]),n("button",{on:{click:function(e){return t.cancel()}}},[t._v("取消")])])]),n("div",{attrs:{id:"doc"}},[n("div",{staticClass:"header"},[n("p",[t._v(t._s(t.title))]),n("h2",[t._v("2020捐献名单")]),n("h6",[t._v("(按事件顺序排序)")])]),n("table",{class:{before:!t.done}},[n("thead",[n("tr",[n("th",{attrs:{width:"20"}},[t._v("#")]),n("th",[t._v("姓名")]),n("th",[t._v("现金")]),n("th",{attrs:{width:"40",center:""}},[t._v("拱门")]),n("th",{attrs:{width:"40",center:""}},[t._v("龙柱")]),n("th",{attrs:{width:"40",center:""}},[t._v("气球")]),t.done?t._e():n("th",{attrs:{width:"80",center:""}},[t._v("操作")])])]),n("tbody",[t._l(t.list,(function(e,o){return n("tr",{key:o},[n("td",[t._v(t._s(o+1))]),n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.cash))]),n("td",{attrs:{center:""}},[t._v(t._s(e.door))]),n("td",{attrs:{center:""}},[t._v(t._s(e.balloon))]),n("td",{attrs:{center:""}},[t._v(t._s(e.column))]),t.done?t._e():n("td",{attrs:{center:""}},[n("a",{attrs:{href:"javascript: void(0);"},on:{click:function(e){return t.edit(o,!0)}}},[t._v("编辑")]),t._v(" "),n("a",{attrs:{href:"javascript: void(0);"},on:{click:function(e){return t.remove(o)}}},[t._v("删除")])])])})),n("tr",[n("td"),t._m(0),n("td",[n("b",[t._v(t._s(t.totalCash))])]),n("td",{attrs:{center:""}},[n("b",[t._v(t._s(t.totalDoor))])]),n("td",{attrs:{center:""}},[n("b",[t._v(t._s(t.totalBalloon))])]),n("td",{attrs:{center:""}},[n("b",[t._v(t._s(t.totalColumn))])]),t.done?t._e():n("td",{attrs:{center:""}})])],2)]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.done,expression:"!done"}],staticStyle:{height:"200px"}})]),n("div",{staticClass:"bottomAction"},[n("button",{on:{click:function(e){return t.edit()}}},[t._v("新增捐款")]),n("button",{on:{click:function(e){return t.creat()}}},[t._v("生成截图")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showNew,expression:"showNew"}],attrs:{id:"new"}},[n("ul",[n("li",[n("b",[t._v("姓名")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newName,expression:"newName"}],attrs:{type:"text"},domProps:{value:t.newName},on:{input:function(e){e.target.composing||(t.newName=e.target.value)}}})]),n("li",[n("b",[t._v("现金")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newCash,expression:"newCash"}],attrs:{type:"number"},domProps:{value:t.newCash},on:{input:function(e){e.target.composing||(t.newCash=e.target.value)}}})]),n("li",[n("b",[t._v("拱门")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newDoor,expression:"newDoor"}],attrs:{type:"number"},domProps:{value:t.newDoor},on:{input:function(e){e.target.composing||(t.newDoor=e.target.value)}}})]),n("li",[n("b",[t._v("气球")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newBalloon,expression:"newBalloon"}],attrs:{type:"number"},domProps:{value:t.newBalloon},on:{input:function(e){e.target.composing||(t.newBalloon=e.target.value)}}})]),n("li",[n("b",[t._v("柱子")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newColumn,expression:"newColumn"}],attrs:{type:"number"},domProps:{value:t.newColumn},on:{input:function(e){e.target.composing||(t.newColumn=e.target.value)}}})])]),n("div",{staticClass:"bottomAction"},[n("button",{on:{click:function(e){return t.save()}}},[t._v("保存")]),n("button",{on:{click:function(e){return t.cancelNew()}}},[t._v("取消")])])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("总计：")])])}],l=(n("99af"),n("4160"),n("a434"),n("b0c0"),n("ac1f"),n("466d"),n("5319"),n("159b"),n("c0e9")),c=n.n(l),u=function(){var t=function(){var t=document.createElement("canvas"),e=t.getContext("2d");return{canvas:!!e,imageData:!!e.getImageData,dataURL:!!t.toDataURL,btoa:!!window.btoa}}(),e="image/octet-stream";function n(t,e,n){var o=t.width,a=t.height;void 0==e&&(e=o),void 0==n&&(n=a);var r=document.createElement("canvas"),i=r.getContext("2d");return r.width=e,r.height=n,i.drawImage(t,0,0,o,a,0,0,e,n),r}function o(t,e,o,a){return t=n(t,o,a),t.toDataURL(e)}function a(t){document.location.href=t}function r(t){var e=document.createElement("img");return e.src=t,e}function i(t){t=t.toLowerCase().replace(/jpg/i,"jpeg");var e=t.match(/png|jpeg|bmp|gif/)[0];return"image/"+e}function s(t){if(!window.btoa)throw"btoa undefined";var e="";if("string"==typeof t)e=t;else for(var n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function l(t){var e=t.width,n=t.height;return t.getContext("2d").getImageData(0,0,e,n)}function c(t,e){return"data:"+e+";base64,"+t}var u=function(t){var e=t.width,n=t.height,o=e*n*3,a=o+54,r=[66,77,255&a,a>>8&255,a>>16&255,a>>24&255,0,0,0,0,54,0,0,0],i=[40,0,0,0,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,1,0,24,0,0,0,0,0,255&o,o>>8&255,o>>16&255,o>>24&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],l=(4-3*e%4)%4,c=t.data,u="",d=e<<2,h=n,m=String.fromCharCode;do{for(var v=d*(h-1),f="",p=0;p<e;p++){var w=p<<2;f+=m(c[v+w+2])+m(c[v+w+1])+m(c[v+w])}for(var g=0;g<l;g++)f+=String.fromCharCode(0);u+=f}while(--h);var b=s(r.concat(i))+s(u);return b},d=function(r,s,d,h){if(t.canvas&&t.dataURL)if("string"==typeof r&&(r=document.getElementById(r)),void 0==h&&(h="png"),h=i(h),/bmp/.test(h)){var m=l(n(r,s,d));a(c(u(m),e))}else a(o(r,h,s,d).replace(h,e))},h=function(e,a,s,d){if(t.canvas&&t.dataURL){if("string"==typeof e&&(e=document.getElementById(e)),void 0==d&&(d="png"),d=i(d),/bmp/.test(d)){var h=l(n(e,a,s));return r(c(u(h),"image/bmp"))}return r(o(e,d,a,s))}};return{saveAsImage:d,saveAsPNG:function(t,e,n){return d(t,e,n,"png")},saveAsJPEG:function(t,e,n){return d(t,e,n,"jpeg")},saveAsGIF:function(t,e,n){return d(t,e,n,"gif")},saveAsBMP:function(t,e,n){return d(t,e,n,"bmp")},convertToImage:h,convertToPNG:function(t,e,n){return h(t,e,n,"png")},convertToJPEG:function(t,e,n){return h(t,e,n,"jpeg")},convertToGIF:function(t,e,n){return h(t,e,n,"gif")},convertToBMP:function(t,e,n){return h(t,e,n,"bmp")}}}(),d=[{name:"李海明",cash:1200,door:0,balloon:0,column:0},{name:"游建海",cash:1200,door:0,balloon:0,column:0},{name:"李炜",cash:1200,door:0,balloon:0,column:0},{name:"李彩芸",cash:300,door:0,balloon:0,column:0},{name:"李惠清",cash:200,door:0,balloon:0,column:0},{name:"游永强",cash:300,door:0,balloon:0,column:0},{name:"游志昌",cash:600,door:0,balloon:0,column:0},{name:"李龙铭",cash:1200,door:0,balloon:0,column:0},{name:"李海盛",cash:888,door:0,balloon:0,column:0},{name:"李俊勇",cash:600,door:0,balloon:0,column:0}],h={name:"Home",data:function(){return{title:"下垅龙胜宫，址立要穴，威灵显赫，庇佑社里四季平安、风调雨顺，近几年来，在众乡亲和众贤士的精心呵护下，龙胜宫不断完善，香火鼎盛，荫佑四方。2020年龙胜宫庙会又已临近，望众乡亲及众贤士一如既往、慷慨解囊、踊跃捐献。",done:!1,totalCash:0,totalDoor:0,totalBalloon:0,totalColumn:0,isEdit:!1,editIndex:0,newName:"",newCash:0,newDoor:0,newBalloon:0,newColumn:0,showNew:!1,list:[]}},methods:{creat:function(){var t=this;this.done=!0,setTimeout((function(){c()(document.querySelector("#doc")).then((function(e){document.querySelector("#doneImage").appendChild(u.convertToImage(e,750,2*(350+30*t.list.length),"png"))}))}),200)},cancel:function(){this.done=!1,document.querySelector("#doneImage").innerHTML=""},setTotal:function(){var t=this;this.totalCash=0,this.totalDoor=0,this.totalBalloon=0,this.totalColumn=0,this.list.forEach((function(e){t.totalCash=t.totalCash+ +e.cash,t.totalDoor=t.totalDoor+ +e.door,t.totalBalloon=t.totalBalloon+ +e.balloon,t.totalColumn=t.totalColumn+ +e.column}))},remove:function(t){this.list.splice(t,1),this.updateLocalVal()},edit:function(t,e){this.showNew=!0,console.log(t),this.isEdit=e,this.editIndex=t,this.newName=e?this.list[t].name:"",this.newCash=e?this.list[t].cash:0,this.newDoor=e?this.list[t].door:0,this.newBalloon=e?this.list[t].balloon:0,this.newColumn=e?this.list[t].column:0},save:function(){this.newName&&(this.newCash=+this.newCash||0,this.newDoor=+this.newDoor||0,this.newBalloon=+this.newBalloon||0,this.newColumn=+this.newColumn||0,this.isEdit?(this.list[this.editIndex].name=this.newName,this.list[this.editIndex].cash=this.newCash,this.list[this.editIndex].door=this.newDoor,this.list[this.editIndex].balloon=this.newBalloon,this.list[this.editIndex].column=this.newColumn):this.list.push({name:this.newName,cash:this.newCash,door:this.newDoor,balloon:this.newBalloon,column:this.newColumn}),this.showNew=!1,this.updateLocalVal())},updateLocalVal:function(){localStorage.setItem("list",JSON.stringify(this.list)),this.setTotal()},cancelNew:function(){this.showNew=!1}},mounted:function(){localStorage.getItem("list")?this.list=JSON.parse(localStorage.getItem("list")):(localStorage.setItem("list",JSON.stringify(d)),this.list=d),this.setTotal()}},m=h,v=(n("45db"),n("f421"),n("2877")),f=Object(v["a"])(m,i,s,!1,null,"2e0d8f00",null),p=f.exports,w={name:"App",components:{Home:p}},g=w,b=(n("034f"),Object(v["a"])(g,a,r,!1,null,null,null)),_=b.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(_)}}).$mount("#app")},"85ec":function(t,e,n){},b3be:function(t,e,n){},f421:function(t,e,n){"use strict";n("b3be")}});
//# sourceMappingURL=app.3325bd54.js.map