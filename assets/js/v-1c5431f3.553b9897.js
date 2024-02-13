"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[6704],{9720:(e,r)=>{r.c=(e,r)=>{const t=e.__vccOpts||e;for(const[e,n]of r)t[e]=n;return t}},8540:(e,r,t)=>{t.r(r),t.d(r,{comp:()=>U,data:()=>W});var n=t(3968);const o=(0,n.QD)("p",null,"代码编程的学习路径：",-1),a={href:"https://www.typescriptlang.org/zh/",target:"_blank",rel:"noopener noreferrer"},s={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",target:"_blank",rel:"noopener noreferrer"},l=(0,n.QD)("li",null,[(0,n.QD)("p",null,"相关基础知识：HTML，Markdown，MySQL，正则表达式")],-1),p=(0,n.QD)("li",null,[(0,n.QD)("p",null,"脚本/开发工具：AutoHotkey，Electron")],-1),i={href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},c={href:"https://zh-hans.react.dev/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://ant-design.antgroup.com/index-cn",target:"_blank",rel:"noopener noreferrer"},h={href:"https://element-plus.gitee.io/zh-CN/guide/quickstart.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://stylus-lang.com/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://sass.bootcss.com/documentation",target:"_blank",rel:"noopener noreferrer"},g={href:"http://lesscss.cn/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.tailwindcss.cn/docs",target:"_blank",rel:"noopener noreferrer"},b={href:"https://v2.vuepress.vuejs.org/zh/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://docusaurus.io/zh-CN/docs",target:"_blank",rel:"noopener noreferrer"},D={href:"https://nextjs.org/docs",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://www.midwayjs.org/docs/intro",target:"_blank",rel:"noopener noreferrer"},_={href:"https://axios-http.com/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://typicode.github.io/husky/#/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer"},Y={href:"http://editorconfig.org",target:"_blank",rel:"noopener noreferrer"},y={href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/airbnb/javascript#translation",target:"_blank",rel:"noopener noreferrer"},w={href:"http://commitizen.github.io/cz-cli/",target:"_blank",rel:"noopener noreferrer"},K={href:"https://commitlint.js.org/#/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://next.vue-test-utils.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/vuejs/vue-jest",target:"_blank",rel:"noopener noreferrer"},E={href:"https://kulshekhar.github.io/ts-jest/",target:"_blank",rel:"noopener noreferrer"},H={href:"https://docs.github.com/cn/actions/learn-github-actions",target:"_blank",rel:"noopener noreferrer"},L=(0,n.IL)('<h2 id="visual-studio-code" tabindex="-1"><a class="header-anchor" href="#visual-studio-code"><span>Visual Studio Code</span></a></h2><p>本地代码编辑器使用 Visual Studio Code，其插件生态成熟，能实现大部分的需求。</p><p>GitHub Copilot，CodeGeeX，Tabnine，aiXcoder 插件均可以辅助补全代码。Tabnine 和 aiXcoder 有免费版，可以预测一到两行的代码。CodeGeeX 由清华大学开发，提供完整补全功能。</p><h3 id="修改快捷键" tabindex="-1"><a class="header-anchor" href="#修改快捷键"><span>修改快捷键</span></a></h3><p>选择「菜单栏」&gt;「文件」&gt;「首选项」&gt;「键盘快捷方式」，修改或解绑快捷键。</p><p>以 PicGo 图床为例，其默认配置放置于 <code>%AppData%\\picgo\\data.json</code>，推荐快捷键为</p><ul><li>剪贴板图片上传：<code>ctrlOrCmd+alt+q</code></li><li>打开文件管理器上传：<code>ctrlOrCmd+alt+e</code></li><li>打开输入框输入路径上传：<code>ctrlOrCmd+alt+x</code></li></ul><p>另外，右键对应快捷方式，点击「重置按键绑定」，即可将快捷键设为默认。</p><h3 id="排除文件夹" tabindex="-1"><a class="header-anchor" href="#排除文件夹"><span>排除文件夹</span></a></h3><p>在 VS Code 中点击快捷键 Ctrl/Command+Shift+P，输入「setting」，在设置中添加排除文件夹选项。注意：排除文件夹不能使用全路径，只能使用规则排除。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;files.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">&quot;**/blog&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//隐藏指定文件夹</span>\n  <span class="token property">&quot;**/[Pp]lugins&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//使用中括号时表示不区分大小写</span>\n  <span class="token property">&quot;**/*.pyc&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//隐藏所有 pyc 文件</span>\n  <span class="token property">&quot;**/*.d.ts&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//隐藏所有 d.ts 文件</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在线-ide" tabindex="-1"><a class="header-anchor" href="#在线-ide"><span>在线 IDE</span></a></h2><p>在线 IDE 最大的优势是开箱即用，无需搭建环境，避免本地环境错误导致的各类 bug。</p>',13),P={href:"https://stackblitz.com/",target:"_blank",rel:"noopener noreferrer"},A=(0,n.QD)("sup",{class:"footnote-ref"},[(0,n.QD)("a",{href:"#footnote1"},"[1]"),(0,n.QD)("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),M={href:"https://codepen.io/pen/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://codesandbox.io/s/",target:"_blank",rel:"noopener noreferrer"},G=(0,n.QD)("hr",{class:"footnotes-sep"},null,-1),N={class:"footnotes"},V={class:"footnotes-list"},J={id:"footnote1",class:"footnote-item"},I={href:"https://www.51cto.com/article/718302.html",target:"_blank",rel:"noopener noreferrer"},R=(0,n.QD)("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),O={},U=(0,t(9720).c)(O,[["render",function(e,r){const t=(0,n.E1)("ExternalLinkIcon");return(0,n.Wz)(),(0,n.An)("div",null,[o,(0,n.QD)("ul",null,[(0,n.QD)("li",null,[(0,n.QD)("p",null,[(0,n.mY)("编程语言："),(0,n.QD)("a",a,[(0,n.mY)("TypeScript"),(0,n.K2)(t)]),(0,n.mY)("，"),(0,n.QD)("a",s,[(0,n.mY)("JavaScript"),(0,n.K2)(t)])])]),l,p,(0,n.QD)("li",null,[(0,n.QD)("p",null,[(0,n.mY)("前端框架："),(0,n.QD)("a",i,[(0,n.mY)("Vue.js"),(0,n.K2)(t)]),(0,n.mY)("，"),(0,n.QD)("a",c,[(0,n.mY)("React"),(0,n.K2)(t)])])]),(0,n.QD)("li",null,[(0,n.QD)("p",null,[(0,n.mY)("UI 框架："),(0,n.QD)("a",u,[(0,n.mY)("Ant Design"),(0,n.K2)(t)]),(0,n.mY)("，"),(0,n.QD)("a",h,[(0,n.mY)("Element Plus"),(0,n.K2)(t)])]),(0,n.QD)("ul",null,[(0,n.QD)("li",null,[(0,n.mY)("CSS 预编译："),(0,n.QD)("a",d,[(0,n.mY)("Stylus"),(0,n.K2)(t)]),(0,n.mY)(" / "),(0,n.QD)("a",m,[(0,n.mY)("Sass"),(0,n.K2)(t)]),(0,n.mY)(" / "),(0,n.QD)("a",g,[(0,n.mY)("Less"),(0,n.K2)(t)])]),(0,n.QD)("li",null,[(0,n.mY)("CSS 后处理器：PostCSS，"),(0,n.QD)("a",f,[(0,n.mY)("tailwindcss"),(0,n.K2)(t)])])])]),(0,n.QD)("li",null,[(0,n.QD)("p",null,[(0,n.mY)("网站生成工具："),(0,n.QD)("a",b,[(0,n.mY)("VuePress"),(0,n.K2)(t)]),(0,n.mY)("，"),(0,n.QD)("a",k,[(0,n.mY)("Docusaurus"),(0,n.K2)(t)]),(0,n.mY)("，"),(0,n.QD)("a",D,[(0,n.mY)("Next.js"),(0,n.K2)(t)])])]),(0,n.QD)("li",null,[(0,n.QD)("p",null,[(0,n.mY)("Node.js 框架："),(0,n.QD)("a",Q,[(0,n.mY)("Midway"),(0,n.K2)(t)])])]),(0,n.QD)("li",null,[(0,n.QD)("p",null,[(0,n.mY)("HTTP 工具："),(0,n.QD)("a",_,[(0,n.mY)("Axios"),(0,n.K2)(t)])]),(0,n.QD)("ul",null,[(0,n.QD)("li",null,[(0,n.mY)("Git Hook 工具："),(0,n.QD)("a",S,[(0,n.mY)("husky"),(0,n.K2)(t)]),(0,n.mY)(" + "),(0,n.QD)("a",v,[(0,n.mY)("lint-staged"),(0,n.K2)(t)])]),(0,n.QD)("li",null,[(0,n.mY)("代码规范："),(0,n.QD)("a",Y,[(0,n.mY)("EditorConfig"),(0,n.K2)(t)]),(0,n.mY)(" + "),(0,n.QD)("a",y,[(0,n.mY)("Prettier"),(0,n.K2)(t)]),(0,n.mY)(" + "),(0,n.QD)("a",C,[(0,n.mY)("ESLint"),(0,n.K2)(t)]),(0,n.mY)(" + "),(0,n.QD)("a",j,[(0,n.mY)("Airbnb JavaScript Style Guide"),(0,n.K2)(t)])]),(0,n.QD)("li",null,[(0,n.mY)("提交规范："),(0,n.QD)("a",w,[(0,n.mY)("Commitizen"),(0,n.K2)(t)]),(0,n.mY)(" + "),(0,n.QD)("a",K,[(0,n.mY)("Commitlint"),(0,n.K2)(t)])]),(0,n.QD)("li",null,[(0,n.mY)("单元测试："),(0,n.QD)("a",z,[(0,n.mY)("vue-test-utils"),(0,n.K2)(t)]),(0,n.mY)(" + "),(0,n.QD)("a",x,[(0,n.mY)("jest"),(0,n.K2)(t)]),(0,n.mY)(" + "),(0,n.QD)("a",T,[(0,n.mY)("vue-jest"),(0,n.K2)(t)]),(0,n.mY)(" + "),(0,n.QD)("a",E,[(0,n.mY)("ts-jest"),(0,n.K2)(t)])]),(0,n.QD)("li",null,[(0,n.mY)("自动部署："),(0,n.QD)("a",H,[(0,n.mY)("GitHub Actions"),(0,n.K2)(t)])])])])]),L,(0,n.QD)("p",null,[(0,n.QD)("a",P,[(0,n.mY)("StackBlitz"),(0,n.K2)(t)]),(0,n.mY)("：StackBlitz 界面类似 Visual Studio Code，可以直接 push 和拉取 GitHub 仓库的代码进行查看和编辑，项目支持离线开发，同时所有应用程序会自动部署在其服务器上。"),A]),(0,n.QD)("p",null,[(0,n.QD)("a",M,[(0,n.mY)("CodePen"),(0,n.K2)(t)]),(0,n.mY)("：CodePen 是一个在线的 HTML、CSS 和 JavaScript 代码编辑器，能够编写代码并即时预览效果，便于项目分享预览。CodePen 也一个庞大的前端社区，上面有来自全球开发者分享的各种各样炫酷的效果，并且这些代码都是开源和共享的。")]),(0,n.QD)("p",null,[(0,n.QD)("a",q,[(0,n.mY)("CodeSandbox"),(0,n.K2)(t)]),(0,n.mY)("：CodeSandbox 编辑体验与 VSCode 类似，并支持 GitHub 导出、静态文件托管、本地项目导入等。缺点：不能直接导入 GitHub 项目。")]),G,(0,n.QD)("section",N,[(0,n.QD)("ol",V,[(0,n.QD)("li",J,[(0,n.QD)("p",null,[(0,n.QD)("a",I,[(0,n.mY)("六个好用的在线代码编辑器，你选哪个？"),(0,n.K2)(t)]),(0,n.mY)(),R])])])])])}]]),W=JSON.parse('{"path":"/code/","title":"Coding","lang":"zh-CN","frontmatter":{"article":false,"title":"Coding","icon":"code","description":"代码编程的学习路径： 编程语言：TypeScript，JavaScript 相关基础知识：HTML，Markdown，MySQL，正则表达式 脚本/开发工具：AutoHotkey，Electron 前端框架：Vue.js，React UI 框架：Ant Design，Element Plus CSS 预编译：Stylus / Sass / Less C...","head":[["meta",{"property":"og:url","content":"https://newzone.top/code/"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Coding"}],["meta",{"property":"og:description","content":"代码编程的学习路径： 编程语言：TypeScript，JavaScript 相关基础知识：HTML，Markdown，MySQL，正则表达式 脚本/开发工具：AutoHotkey，Electron 前端框架：Vue.js，React UI 框架：Ant Design，Element Plus CSS 预编译：Stylus / Sass / Less C..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-13T06:51:48.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-13T06:51:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Coding\\",\\"description\\":\\"代码编程的学习路径： 编程语言：TypeScript，JavaScript 相关基础知识：HTML，Markdown，MySQL，正则表达式 脚本/开发工具：AutoHotkey，Electron 前端框架：Vue.js，React UI 框架：Ant Design，Element Plus CSS 预编译：Stylus / Sass / Less C...\\"}"]]},"headers":[{"level":2,"title":"Visual Studio Code","slug":"visual-studio-code","link":"#visual-studio-code","children":[{"level":3,"title":"修改快捷键","slug":"修改快捷键","link":"#修改快捷键","children":[]},{"level":3,"title":"排除文件夹","slug":"排除文件夹","link":"#排除文件夹","children":[]}]},{"level":2,"title":"在线 IDE","slug":"在线-ide","link":"#在线-ide","children":[]}],"git":{"createdTime":1707807108000,"updatedTime":1707807108000,"contributors":[{"name":"wpengjie0214","email":"159807936+wpengjie0214@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.52,"words":756},"filePathRelative":"code/README.md","localizedDate":"2024年2月13日","excerpt":"<p>代码编程的学习路径：</p>\\n<ul>\\n<li>\\n<p>编程语言：<a href=\\"https://www.typescriptlang.org/zh/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">TypeScript</a>，<a href=\\"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JavaScript</a></p>\\n</li>\\n<li>\\n<p>相关基础知识：HTML，Markdown，MySQL，正则表达式</p>\\n</li>\\n<li>\\n<p>脚本/开发工具：AutoHotkey，Electron</p>\\n</li>\\n<li>\\n<p>前端框架：<a href=\\"https://cn.vuejs.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Vue.js</a>，<a href=\\"https://zh-hans.react.dev/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">React</a></p>\\n</li>\\n<li>\\n<p>UI 框架：<a href=\\"https://ant-design.antgroup.com/index-cn\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Ant Design</a>，<a href=\\"https://element-plus.gitee.io/zh-CN/guide/quickstart.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Element Plus</a></p>\\n<ul>\\n<li>CSS 预编译：<a href=\\"https://stylus-lang.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Stylus</a>&nbsp;/&nbsp;<a href=\\"https://sass.bootcss.com/documentation\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Sass</a>&nbsp;/&nbsp;<a href=\\"http://lesscss.cn/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Less</a></li>\\n<li>CSS 后处理器：PostCSS，<a href=\\"https://www.tailwindcss.cn/docs\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">tailwindcss</a></li>\\n</ul>\\n</li>\\n<li>\\n<p>网站生成工具：<a href=\\"https://v2.vuepress.vuejs.org/zh/guide/getting-started.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">VuePress</a>，<a href=\\"https://docusaurus.io/zh-CN/docs\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Docusaurus</a>，<a href=\\"https://nextjs.org/docs\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Next.js</a></p>\\n</li>\\n<li>\\n<p>Node.js 框架：<a href=\\"https://www.midwayjs.org/docs/intro\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Midway</a></p>\\n</li>\\n<li>\\n<p>HTTP 工具：<a href=\\"https://axios-http.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Axios</a></p>\\n<ul>\\n<li>Git Hook 工具：<a href=\\"https://typicode.github.io/husky/#/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">husky</a>&nbsp;+&nbsp;<a href=\\"https://github.com/okonet/lint-staged\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">lint-staged</a></li>\\n<li>代码规范：<a href=\\"http://editorconfig.org\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">EditorConfig</a>&nbsp;+&nbsp;<a href=\\"https://prettier.io/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Prettier</a>&nbsp;+&nbsp;<a href=\\"https://eslint.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ESLint</a>&nbsp;+&nbsp;<a href=\\"https://github.com/airbnb/javascript#translation\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Airbnb JavaScript Style Guide</a></li>\\n<li>提交规范：<a href=\\"http://commitizen.github.io/cz-cli/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Commitizen</a>&nbsp;+&nbsp;<a href=\\"https://commitlint.js.org/#/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Commitlint</a></li>\\n<li>单元测试：<a href=\\"https://next.vue-test-utils.vuejs.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">vue-test-utils</a>&nbsp;+&nbsp;<a href=\\"https://jestjs.io/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">jest</a>&nbsp;+&nbsp;<a href=\\"https://github.com/vuejs/vue-jest\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">vue-jest</a>&nbsp;+&nbsp;<a href=\\"https://kulshekhar.github.io/ts-jest/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ts-jest</a></li>\\n<li>自动部署：<a href=\\"https://docs.github.com/cn/actions/learn-github-actions\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">GitHub Actions</a></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}')}}]);