"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[9320],{9720:(n,a)=>{a.c=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}},1472:(n,a,s)=>{s.r(a),s.d(a,{comp:()=>v,data:()=>m});var e=s(3968);const t={href:"https://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"},i={href:"https://jkchao.github.io/typescript-book-chinese/",target:"_blank",rel:"noopener noreferrer"},l=(0,e.IL)('<h2 id="es6" tabindex="-1"><a class="header-anchor" href="#es6"><span>ES6</span></a></h2><p><code>sayHi(){console.log(&quot;Hi&quot;);}</code> 等同于 <code>sayHi:function(){console.log(&quot;Hi&quot;);}</code>。</p><p><code>let</code> 声明的变量只在 let 命令所在的代码块内有效，尤其适合用于 <code>for</code> 循环的计数器。</p><p><code>const</code> 声明一个只读的常量，一旦声明，常量的值就不能改变。</p><p><code>=&gt;</code> 是指箭头函数，是一种函数的简写方式，语法为 <code>(参数)=&gt;{函数体};</code>。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>x =&gt; 2x\n//等于下方函数\nfunction (x) {\n return 2x;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构"><span>数据结构</span></a></h2><p><code>Set</code> 类似于数组，但是成员的值都是唯一的，没有重复的值。向 Set 加入值的时候，不会发生类型转换。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>// 例一\nconst set = new Set([1, 2, 3, 4, 4]);\n[...set]\n// [1, 2, 3, 4]\n\n// 例二\nconst items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);\nitems.size // 5\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Map</code> 类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。</p><p>Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。因此有时看起来是针对同一个键，但实际上这是两个不同的数组实例，内存地址是不一样的，因此 get 方法无法读取该键，返回 undefined。</p><h2 id="常用函数" tabindex="-1"><a class="header-anchor" href="#常用函数"><span>常用函数</span></a></h2><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>document.getElementById()\ndocument.getElementsByClassName(&quot;v-modal&quot;)[0]\ndocument.getElementsByTagName(&quot;body&quot;)[0].remove();   //通过 Tagname 获取元素，删除指定元素\nfor (var i=0;i&lt;cars.length;i++) {document.write(cars[i] + &quot;&lt;br&gt;&quot;);}   //循环语句，i++会在代码被执行后增加一个值\nbreak; //跳出当前循环但继续函数\n\n//js 暂停\nwhile (true){\n    //100 毫秒延时\n    setTimeout(f1,100)\n    //直接跳出循环和函数\n    return;\n}\n\n//截取中间的字符串，A 有多少字符就需要加多少位置\nstr = str.substring(str.indexOf(&quot;A&quot;) + 1,str.indexOf(&quot;B&quot;))\n\n//取特定字符前后的字符串\nvar ture_tkl01 = taokouling.value.trim().split(&#39;打&#39;)[0];\n//取第 4 位后的字符串 (4 代表开始位置，相当于从 5 开始截取到尾部)\nvar ture_tkl = ture_tkl01.substring(4);\n\n//报错处理\nfunction f1(){\n    try{\n        if (document.getElementById(&quot;pro-operation&quot;).getElementsByClassName(&quot;product-button02 disabled&quot;)[0].innerHTML.indexOf(&quot;立即申购&quot;)!=-1) {\n            window.location.reload();\n        }else{\n            window.location.reload();\n        }\n    }catch(e){\n        //下单\n        document.getElementById(&quot;product-operation&quot;).getElementsByClassName(&quot;product-button02&quot;)[0].click();\n    }\n}\n\n//js 函数为同步处理，只有 if else、setTimeour、for each 等函数才能按序运行\n\n//setInterval 不要包含多个函数，否则 clearInterval 容易出错\n\n//替换，不添加/g，则替换只发生一次\ntext.value = text.value.replace(&quot; &quot;, &quot;----&quot;);\n//全局替换，如果使用/\\s/g，则换行符也会被替换\ntext.value = text.value.replace(/ /g, &quot;----&quot;);\n\n//载入完成后，自动或取焦点。textSour 为元素 id，需配合 jquery\nwindow.onload = function(){\n textSour.focus();\n};\n//按钮点击后使用函数\n$(&quot;#clearEmoji&quot;).click(function () {\n}\n\n//去除每行首尾空格，支持特殊字符，首尾的空格、制表符、特殊字符的组合都倍清除\nstrResult += split_result[i].replace(/(^[\\t\\s]*)|([\\t\\s]*$)/g, &quot;&quot;) + &#39;\\n&#39;;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript-对象" tabindex="-1"><a class="header-anchor" href="#javascript-对象"><span>JavaScript 对象</span></a></h2><p>对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。 对象一定要用<strong>英文冒号</strong>来注明，否则整段代码失效。属性由逗号分隔：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>var person={firstname:&quot;John&quot;, lastname:&quot;Doe&quot;, id:5566};\n//对象属性有两种寻址方式\nname=person.lastname;\nname=person[&quot;lastname&quot;];\n\n//对象的方法定义了一个函数，并作为对象的属性存储。对象方法通过添加 () 调用 (作为一个函数)。\n&lt;p id=&quot;对象&quot;&gt;&lt;/p&gt;\n&lt;script&gt;\n var person ={\n  firstname:&quot;名&quot;,\n  lastname:&quot;姓&quot;,\n  fullname:function()\n  {\n   return this.lastname+this.firstname\n  },       //不同属性间需要加逗号隔开\n  eyecolor:&quot;blue&quot;};\n document.getElementById(&quot;对象&quot;).innerHTML=\n person.fullname()+&quot;眼睛颜色是&quot;+person.eyecolor  ;\n&lt;/script&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量"><span>全局变量</span></a></h3><p>js 的全部变量要用 <code>window.</code> 来定义。如果变量在函数内没有声明（没有使用 var），该变量为全局变量。</p><p>局部变量：在函数中通过 var 声明的变量。全局变量：在函数外通过 var 声明的变量。</p><p>没有声明就使用的变量，默认为全局变量，不论这个变量在哪被使用。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>&lt;p id=&quot;demo&quot;&gt;&lt;/p&gt;\n&lt;script&gt;\nmyFunction();\ndocument.getElementById(&quot;demo&quot;).innerHTML = &quot;我可以显示 &quot; + carName;\nfunction myFunction()\n{\n    carName = &quot;Volvo&quot;;   //如果在这添加 var，声明变量，则变为局部变量，无法调用\n}\n&lt;/script&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量类型" tabindex="-1"><a class="header-anchor" href="#变量类型"><span>变量类型</span></a></h3><p>当您声明新变量时，可以使用关键词 &quot;new&quot; 来声明其类型：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>var carname = new String();\n字符串;\nvar x = new Number();\n数字;\nvar y = new Boolean();\n布尔;\nvar cars = new Array();\n数组;\nvar person = new Object();\n对象;\nvar y = new String(&quot;John&quot;);\n对象;\n\n// 数据赋值\nvar length = 16; // Number 通过数字字面量赋值\nvar points = x * 10; // Number 通过表达式字面量赋值\nvar lastName = &quot;Johnson&quot;; // String 通过字符串字面量赋值\nvar cars = [&quot;Saab&quot;, &quot;Volvo&quot;, &quot;BMW&quot;]; // Array  通过数组字面量赋值\nvar person = { firstName: &quot;John&quot;, lastName: &quot;Doe&quot; }; // Object 通过对象字面量赋值\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符"><span>运算符</span></a></h2><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>//后置++是将自身的值赋给新变量，然后才自身加 1.\n//前置++是将自身加 1 的值赋值给新变量，同时自身也加 1；\nint a;\na=i++;//将 i 的值赋值给 a，即 a=i；然后再执行 i=i+1；也就是【a=i++;】与【a=i; i=i+1;】等价。\na=++i;//将 i+1 的值赋给 a，即 a=i+1;然后再执行 i=i+1；也就是【a=++i;】与【a=i+1;i=i+1;】等价。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>// 描述 (x=5) 比较\n// == 等于\nx==8 false\nx==5 true\n// === 绝对等于（值和类型均相等）\nx===&quot;5&quot; false\nx===5 true\n// != 不等于\nx!=8 true\n// !== 不绝对等于（值和类型有一个不相等，或两个都不相等）\nx!==&quot;5&quot; true\nx!==5 false\n\n&amp;&amp; 且\n|| 或\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript-应用" tabindex="-1"><a class="header-anchor" href="#javascript-应用"><span>JavaScript 应用</span></a></h2><h3 id="取随机值" tabindex="-1"><a class="header-anchor" href="#取随机值"><span>取随机值</span></a></h3><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>//[任意随机值](https://www.runoob.com/w3cnote/js-random.html)\nMath.floor(Math.random() * (max - min + 1) + min);\n\n//\nvar arr01 = textSour.value.split(&quot;\\n&quot;);\n//分割字符数组，主要用于淘口令网\nvar arr01 = [&quot;打&quot;, &quot;哒&quot;, &quot;达&quot;];\n//循环语句，i++会在代码被执行后增加一个值\nfor (var x = 0; x &lt; arr01.length; x++) {\n  //存在循环后分割，并跳出循环\n  if (taokouling.value.indexOf(arr01[x]) != -1) {\n    ture_tkl01 = taokouling.value.trim().split(arr01[x])[0];\n    break;\n  }\n}\n\n// https://segmentfault.com/q/1010000006819233 //不重复获取\nfor (var i = 0; i &lt; rn; ++i) {\n  var index = ~~(Math.random() * count) + i;\n  result[i] = split_result[index];\n  split_result[index] = split_result[i];\n  count--;\n  strResult = strResult + result[i] + &quot;\\n&quot;;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本框清空" tabindex="-1"><a class="header-anchor" href="#文本框清空"><span>文本框清空</span></a></h3><p>input 文本框获取焦点后，自动清空内容。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>onfocus = &quot;this.value=&#39;&#39;&quot;;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="内部文件读取" tabindex="-1"><a class="header-anchor" href="#内部文件读取"><span>内部文件读取</span></a></h3><p>以下代码用于服务器读取文档，本地无法直接使用。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>$.ajax({\n  url: &quot;./xx.txt&quot;,\n  success: function (result) {\n    var strs = result.split(&quot;\\n&quot;);\n    addTableTR(strs, true);\n  },\n});\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选择框状态" tabindex="-1"><a class="header-anchor" href="#选择框状态"><span>选择框状态</span></a></h3><p>调用 attr 给选择框 radio、checkbox 添加 checked 属性和移调，并不能真实改变不能单选和选中框的真实状态，可用下方代码改变。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>//取消导航项的 checked，同类名称都会取消 checked 状态\n$(&quot;input[name=daoruRadio]&quot;).prop(&quot;checked&quot;, false);\n//点击对映 id 的单选框\n$(&quot;input[id=Radio1]&quot;).prop(&quot;checked&quot;, true);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复制隐藏内容" tabindex="-1"><a class="header-anchor" href="#复制隐藏内容"><span>复制隐藏内容</span></a></h3><p>clipboardjs 可复制隐藏区域内容。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>//新设将粘贴板设在特定按钮上，#copyresult 为按钮 id，#CopyValue 为区域 id\nvar clipboard2 = new ClipboardJS(&quot;#copyresult&quot;, {\n  text: function () {\n    return $(&quot;#CopyValue&quot;).val();\n  },\n});\n\nclipboard2.on(&quot;success&quot;, function (e) {\n  toastr[&quot;success&quot;](&quot;复制成功！&quot;);\n});\n\nclipboard2.on(&quot;error&quot;, function (e) {\n  toastr[&quot;error&quot;](&quot;复制失败，请手动重新复制！&quot;);\n});\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引入-html-页面" tabindex="-1"><a class="header-anchor" href="#引入-html-页面"><span>引入 html 页面</span></a></h3><p>利用 link 标签的 rel=import 引入 html 页面</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>import<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header.html<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="视频全屏弹窗" tabindex="-1"><a class="header-anchor" href="#视频全屏弹窗"><span>视频全屏弹窗</span></a></h3><p>品牌首页经常需要在动加载视频，可将下方代码放入首页源码的 body 区。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.staticfile.org/layer/3.5.1/theme/default/layer.min.css<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/jquery/3.6.0/jquery.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.staticfile.org/layer/3.5.1/layer.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//页面一打开就执行，放入 reay 是为了 Layer 所需配件（css、扩展模块）加载完毕</span>\n    layer<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">//iframe 层 - 多媒体</span>\n      layer<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token comment">//type 值为 1 时，则可直接套用视频</span>\n        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">area</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;630px&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;360px&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">shade</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">closeBtn</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">shadeClose</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">//视频链接</span>\n        <span class="token literal-property property">content</span><span class="token operator">:</span>\n          <span class="token string">&quot;https://iluminage-cdn.oss-cn-shanghai.aliyuncs.com/brand-video.MP4&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插入视频代码</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">line-height</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token property">font-size</span><span class="token punctuation">:</span>0</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span>\n    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>controls<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">autoplay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>autoplay<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">autobuffer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>autobuffer<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://iluminage-cdn.oss-cn-shanghai.aliyuncs.com/brand-video.MP4<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">',51),c={class:"footnotes"},r={class:"footnotes-list"},p={id:"footnote1",class:"footnote-item"},o={href:"https://www.cnblogs.com/jimloveq/p/10602060.html",target:"_blank",rel:"noopener noreferrer"},u=(0,e.QD)("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),d={},v=(0,s(9720).c)(d,[["render",function(n,a){const s=(0,e.E1)("ExternalLinkIcon");return(0,e.Wz)(),(0,e.An)("div",null,[(0,e.QD)("p",null,[(0,e.mY)("JavaScript 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言，最新标准是 "),(0,e.QD)("a",t,[(0,e.mY)("ECMAScript 6.0"),(0,e.K2)(s)]),(0,e.mY)("。虽然它是作为开发 Web 页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，并长年居于最受欢迎编程语言排行榜榜首。")]),(0,e.QD)("p",null,[(0,e.mY)("推荐学习流程：「JavaScript」>「ES6」>「"),(0,e.QD)("a",i,[(0,e.mY)("TypeScript"),(0,e.K2)(s)]),(0,e.mY)("」。")]),l,(0,e.QD)("section",c,[(0,e.QD)("ol",r,[(0,e.QD)("li",p,[(0,e.QD)("p",null,[(0,e.QD)("a",o,[(0,e.mY)("radio、checkbox 选中状态研究"),(0,e.K2)(s)]),(0,e.mY)(),u])])])])])}]]),m=JSON.parse('{"path":"/code/Javascript.html","title":"JavaScript","lang":"zh-CN","frontmatter":{"article":false,"title":"JavaScript","icon":"javascript","order":2,"description":"JavaScript 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言，最新标准是 ECMAScript 6.0。虽然它是作为开发 Web 页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，并长年居于最受欢迎编程语言排行榜榜首。 推荐学习流程：「JavaScript」>「ES6」>「TypeScript」。 ES6 sayHi(){co...","head":[["meta",{"property":"og:url","content":"https://newzone.top/code/Javascript.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"JavaScript"}],["meta",{"property":"og:description","content":"JavaScript 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言，最新标准是 ECMAScript 6.0。虽然它是作为开发 Web 页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，并长年居于最受欢迎编程语言排行榜榜首。 推荐学习流程：「JavaScript」>「ES6」>「TypeScript」。 ES6 sayHi(){co..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-13T06:51:48.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-13T06:51:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"JavaScript\\",\\"description\\":\\"JavaScript 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言，最新标准是 ECMAScript 6.0。虽然它是作为开发 Web 页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，并长年居于最受欢迎编程语言排行榜榜首。 推荐学习流程：「JavaScript」>「ES6」>「TypeScript」。 ES6 sayHi(){co...\\"}"]]},"headers":[{"level":2,"title":"ES6","slug":"es6","link":"#es6","children":[]},{"level":2,"title":"数据结构","slug":"数据结构","link":"#数据结构","children":[]},{"level":2,"title":"常用函数","slug":"常用函数","link":"#常用函数","children":[]},{"level":2,"title":"JavaScript 对象","slug":"javascript-对象","link":"#javascript-对象","children":[{"level":3,"title":"全局变量","slug":"全局变量","link":"#全局变量","children":[]},{"level":3,"title":"变量类型","slug":"变量类型","link":"#变量类型","children":[]}]},{"level":2,"title":"运算符","slug":"运算符","link":"#运算符","children":[]},{"level":2,"title":"JavaScript 应用","slug":"javascript-应用","link":"#javascript-应用","children":[{"level":3,"title":"取随机值","slug":"取随机值","link":"#取随机值","children":[]},{"level":3,"title":"文本框清空","slug":"文本框清空","link":"#文本框清空","children":[]},{"level":3,"title":"内部文件读取","slug":"内部文件读取","link":"#内部文件读取","children":[]},{"level":3,"title":"选择框状态","slug":"选择框状态","link":"#选择框状态","children":[]},{"level":3,"title":"复制隐藏内容","slug":"复制隐藏内容","link":"#复制隐藏内容","children":[]},{"level":3,"title":"引入 html 页面","slug":"引入-html-页面","link":"#引入-html-页面","children":[]},{"level":3,"title":"视频全屏弹窗","slug":"视频全屏弹窗","link":"#视频全屏弹窗","children":[]}]}],"git":{"createdTime":1707807108000,"updatedTime":1707807108000,"contributors":[{"name":"wpengjie0214","email":"159807936+wpengjie0214@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":6.79,"words":2038},"filePathRelative":"code/Javascript.md","localizedDate":"2024年2月13日","excerpt":"<p>JavaScript 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言，最新标准是 <a href=\\"https://es6.ruanyifeng.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ECMAScript 6.0</a>。虽然它是作为开发 Web 页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，并长年居于最受欢迎编程语言排行榜榜首。</p>\\n<p>推荐学习流程：「JavaScript」&gt;「ES6」&gt;「<a href=\\"https://jkchao.github.io/typescript-book-chinese/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">TypeScript</a>」。</p>","autoDesc":true}')}}]);