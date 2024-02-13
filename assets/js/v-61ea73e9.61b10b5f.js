"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[5576],{9720:(t,e)=>{e.c=(t,e)=>{const i=t.__vccOpts||t;for(const[t,n]of e)i[t]=n;return i}},7140:(t,e,i)=>{i.r(e),i.d(e,{comp:()=>p,data:()=>r});var n=i(3968);const a=[(0,n.IL)('<p>宽带升级到千兆网络后，电信全面更新了光猫，关闭了的光猫管理地址，只能通过官方 APP「网络管家」管理光猫。</p><h2 id="电信「网络管家」功能" tabindex="-1"><a class="header-anchor" href="#电信「网络管家」功能"><span>电信「网络管家」功能</span></a></h2><ul><li>重启光猫；</li><li>开启 UPnp；</li><li>开启 DMZ 主机，建立端口映射；</li><li>建立虚拟服务器，内网穿透访问。</li></ul><h2 id="开启光猫端口映射、内网穿透" tabindex="-1"><a class="header-anchor" href="#开启光猫端口映射、内网穿透"><span>开启光猫端口映射、内网穿透</span></a></h2><ol><li><p>登录路由器管理地址 192.168.X.X。这里以梅林 AC5300 为图例。</p><figure><img src="https://img.newzone.top/20180608183159.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>打开电信官方 APP「网络管家」，依次点击中间的「路由器图标」→「高级设置」→「DMZ 主机」，启用 DMZ 主机并绑定刚刚获得的路由器 WAN IP 地址 - 192.168.1.X 。</p><figure><img src="https://img.newzone.top/20180608185618.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p><strong>光猫内网穿透</strong>：当外网要访问局域网（192.168.1.3:1194）时，进入网络管家中「高级设置」→「虚拟服务器」，添加内部 IP 192.168.1.3、内部端口号 1194 和服务器端口号。服务器端口号可根据需求设置。假设光猫 IP 为 180.154.109.143，外网只需访问「180.154.109.143:12345」就可以计入局域网（192.168.1.3:1194）。</p><figure><img src="https://img.newzone.top/20190330175000.png?imageMogr2/auto-orient/strip|imageView2/2/h/600" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p><strong>路由端口转发</strong>：进入路由器「高级设置」-「外部网络（WAN）」-「端口转发」，按要求设置端口。我这是 eMule TCP 和 UDP 转发，设置完成后，变成 High ID。</p></li></ol><p>PS. 新版光猫<strong>不需要管理员权限</strong>就可以获取端口映射、DMZ、UPnp 等权限，但光猫桥接功能也很难破解了。</p>',6)],o={},p=(0,i(9720).c)(o,[["render",function(t,e){return(0,n.Wz)(),(0,n.An)("div",null,a)}]]),r=JSON.parse('{"path":"/posts/2018-06-08-baizhuo_gp1700.html","title":"光猫改造 篇三：百卓 GP1700 进阶设置 - 端口映射","lang":"zh-CN","frontmatter":{"title":"光猫改造 篇三：百卓 GP1700 进阶设置 - 端口映射","date":"2018-06-08T00:00:00.000Z","category":["网络"],"tag":["GP1700","光猫"],"order":-19,"description":"宽带升级到千兆网络后，电信全面更新了光猫，关闭了的光猫管理地址，只能通过官方 APP「网络管家」管理光猫。 电信「网络管家」功能 重启光猫； 开启 UPnp； 开启 DMZ 主机，建立端口映射； 建立虚拟服务器，内网穿透访问。 开启光猫端口映射、内网穿透 登录路由器管理地址 192.168.X.X。这里以梅林 AC5300 为图例。 打开电信官方 AP...","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2018-06-08-baizhuo_gp1700.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"光猫改造 篇三：百卓 GP1700 进阶设置 - 端口映射"}],["meta",{"property":"og:description","content":"宽带升级到千兆网络后，电信全面更新了光猫，关闭了的光猫管理地址，只能通过官方 APP「网络管家」管理光猫。 电信「网络管家」功能 重启光猫； 开启 UPnp； 开启 DMZ 主机，建立端口映射； 建立虚拟服务器，内网穿透访问。 开启光猫端口映射、内网穿透 登录路由器管理地址 192.168.X.X。这里以梅林 AC5300 为图例。 打开电信官方 AP..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.newzone.top/20180608183159.png?imageMogr2/format/webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-13T06:51:48.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"光猫改造 篇三：百卓 GP1700 进阶设置 - 端口映射"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:tag","content":"GP1700"}],["meta",{"property":"article:tag","content":"光猫"}],["meta",{"property":"article:published_time","content":"2018-06-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-13T06:51:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"光猫改造 篇三：百卓 GP1700 进阶设置 - 端口映射\\",\\"image\\":[\\"https://img.newzone.top/20180608183159.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/20180608185618.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/20190330175000.png?imageMogr2/auto-orient/strip%7CimageView2/2/h/600\\"],\\"datePublished\\":\\"2018-06-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-13T06:51:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清顺\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"电信「网络管家」功能","slug":"电信「网络管家」功能","link":"#电信「网络管家」功能","children":[]},{"level":2,"title":"开启光猫端口映射、内网穿透","slug":"开启光猫端口映射、内网穿透","link":"#开启光猫端口映射、内网穿透","children":[]}],"git":{"createdTime":1707807108000,"updatedTime":1707807108000,"contributors":[{"name":"wpengjie0214","email":"159807936+wpengjie0214@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.3,"words":391},"filePathRelative":"_posts/2018-06-08-baizhuo_gp1700.md","localizedDate":"2018年6月8日","excerpt":"<p>宽带升级到千兆网络后，电信全面更新了光猫，关闭了的光猫管理地址，只能通过官方 APP「网络管家」管理光猫。</p>\\n<h2>电信「网络管家」功能</h2>\\n<ul>\\n<li>重启光猫；</li>\\n<li>开启 UPnp；</li>\\n<li>开启 DMZ 主机，建立端口映射；</li>\\n<li>建立虚拟服务器，内网穿透访问。</li>\\n</ul>\\n<h2>开启光猫端口映射、内网穿透</h2>\\n<ol>\\n<li>\\n<p>登录路由器管理地址 192.168.X.X。这里以梅林 AC5300 为图例。</p>\\n<figure><img src=\\"https://img.newzone.top/20180608183159.png?imageMogr2/format/webp\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n<li>\\n<p>打开电信官方 APP「网络管家」，依次点击中间的「路由器图标」→「高级设置」→「DMZ 主机」，启用 DMZ 主机并绑定刚刚获得的路由器 WAN IP 地址 - 192.168.1.X 。</p>\\n<figure><img src=\\"https://img.newzone.top/20180608185618.png?imageMogr2/format/webp\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n<li>\\n<p><strong>光猫内网穿透</strong>：当外网要访问局域网（192.168.1.3:1194）时，进入网络管家中「高级设置」→「虚拟服务器」，添加内部 IP 192.168.1.3、内部端口号 1194 和服务器端口号。服务器端口号可根据需求设置。假设光猫 IP 为 180.154.109.143，外网只需访问「180.154.109.143:12345」就可以计入局域网（192.168.1.3:1194）。</p>\\n<figure><img src=\\"https://img.newzone.top/20190330175000.png?imageMogr2/auto-orient/strip|imageView2/2/h/600\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n<li>\\n<p><strong>路由端口转发</strong>：进入路由器「高级设置」-「外部网络（WAN）」-「端口转发」，按要求设置端口。我这是 eMule TCP 和 UDP 转发，设置完成后，变成 High ID。</p>\\n</li>\\n</ol>","autoDesc":true}')}}]);