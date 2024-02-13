"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[3744],{9720:(e,t)=>{t.c=(e,t)=>{const a=e.__vccOpts||e;for(const[e,n]of t)a[e]=n;return a}},6320:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>g,data:()=>l});var n=a(3968);const i=(0,n.IL)('<p>飞书曾经展现出极大的开放性，然而在一次改版后，它取消了对免费用户的支持，限制越来越多，促使我将各项内容从飞书迁移出来。以下是我的飞书迁移记录和替代方案。</p><h2 id="飞书文档" tabindex="-1"><a class="header-anchor" href="#飞书文档"><span>飞书文档</span></a></h2><h3 id="知识库" tabindex="-1"><a class="header-anchor" href="#知识库"><span>知识库</span></a></h3><p>我的早期笔记都保存在为知笔记，而随着飞书的出现，我将大多数存档性资料迁移到飞书知识库。尽管我原本计划完全弃用飞书，但由于时间和精力的有限，我并没有再次进行一次全面的迁移。幸运的是，我并没有将重要知识点笔记存放在飞书上，所以剩余的说明书等次要文档将继续保留在这个平台上。</p><figure><img src="https://img.newzone.top/2023-12-11-10-56-52.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="表格" tabindex="-1"><a class="header-anchor" href="#表格"><span>表格</span></a></h3><p>相较于 Excel，飞书表格更加方便实用，同时在线文档编辑也更为便捷。例如，我的作息时间表就采用了飞书表格，并不时地进行更新。</p><figure><img src="https://img.newzone.top/2023-12-11-10-52-56.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="收集表" tabindex="-1"><a class="header-anchor" href="#收集表"><span>收集表</span></a></h3><p>在数据收集方面，飞书多维表格非常方便，而且支持嵌入网页，每月还提供 200 次的自定义推送通知。我打算继续在飞书上使用这一功能，不过机器人通知会转移到 Discord 客户端。</p><figure><img src="https://img.newzone.top/2023-12-11-10-55-18.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="飞书邮箱" tabindex="-1"><a class="header-anchor" href="#飞书邮箱"><span>飞书邮箱</span></a></h2><p>飞书邮箱简单易用且功能强大，支持设置多个别名邮箱，还能为第三方邮箱客户端生成专用密码，并统计创建和最后使用的时间。</p><figure><img src="https://img.newzone.top/2023-12-10-15-45-44.png?imageMogr2/format/webp" alt="飞书邮箱设置" tabindex="0" loading="lazy"><figcaption>飞书邮箱设置</figcaption></figure><p>目前，我的飞书邮箱是博客和自托管服务的联系邮箱。因为这部分的使用频率较低，我设置了邮件自动转发到主力邮箱，避免需要登录查看。需要注意的是，自动转发功能需要在管理后台进行设置开启，否则该选项将不可见。</p><p>如果你的域名邮箱不需要大量发送邮件，我仍然推荐使用飞书邮箱。毕竟，大多数国外域名邮箱需要付费，而国内其他邮箱的体验也相当一般。比如阿里邮箱，它连免费额度限制也不公开，客服回复「阿里邮箱对发件人所发邮件有一定的频率和数量上的限制，包括每分钟、每小时、每日，若超过相应的发信量限制，系统会拒发并报错。其中，以上频率或数量的限制数值属于阿里云阿里邮箱保密数据，因为安全原因无法对外提供。」</p><h2 id="飞书捷径" tabindex="-1"><a class="header-anchor" href="#飞书捷径"><span>飞书捷径</span></a></h2><p>打开飞书捷径，却发现名称显示「飞书机器人助手」，不清楚两者到底是什么关系。改版后，飞书捷径不再支持海外链接，同时对第三方服务的支持也减少了。</p><figure><img src="https://img.newzone.top/2023-12-11-14-10-37.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>不过，飞书捷径仍然支持个人免费使用。与之前的流程不同的是，你需要先建立机器人应用并发布，然后才能创建机器人指令。务必确保应用已发布，否则相关指令将无法触发。</p><p>原计划中，我打算通过飞书捷径将国内服务的通知转发到 Discord，以实现统一的通知管理。然而，在测试中发现，飞书捷径机器人无法将群消息作为触发节点。虽然飞书群组机器人能接收通知，但捷径机器人却无法读取这些通知，从而无法继续转发。</p><p>目前，我只能将飞书捷径用于轻量表格记录，例如，在接收通知消息后，通过触发飞书捷径的 webhook，将消息添加到飞书表格中。然而，添加这个功能时发现，只有企业版才能修改表格内容，并需要企业版管理员开通“飞书机器人助手”应用。但飞书捷径的名称不是显示为“飞书机器人助手”吗？对于个人用户来说，这个逻辑相当奇怪。</p><figure><img src="https://img.newzone.top/2023-12-11-14-03-25.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption>未开通机器人助手会提示错误</figcaption></figure><h2 id="webhook-通知" tabindex="-1"><a class="header-anchor" href="#webhook-通知"><span>Webhook 通知</span></a></h2><p>我之前的 Webhook 通知是通过飞书群组机器人实现的。替代方法非常简单，只需将飞书的 webhook 替换为其他服务的链接即可。大多数通知机器人都支持 webhook，如 Telegram、Slack、Discord 等。</p><p>以 Discord 通知为例，只需将链接 <code>https://open.feishu.cn/open-apis/bot/v2/hook/*******</code> 替换为 <code>https://discord.com/api/webhooks/***/******</code>。</p>',26),o={href:"https://newzone.top/services/dockers-on-nas/n8n.html",target:"_blank",rel:"noopener noreferrer"},p=(0,n.IL)('<figure><img src="https://img.newzone.top/2023-12-10-15-11-15.png?imageMogr2/format/webp?imageMogr2/format/webp/thumbnail/400x" alt="n8n 转接 webhook 消息" tabindex="0" loading="lazy"><figcaption>n8n 转接 webhook 消息</figcaption></figure><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2><ul><li>飞书 OKR：由于我之前使用较少，直接放弃。</li><li>飞书妙记：妙计用于音视频转文字，而妙记在桌面端已经被 Whisper 替代，我偶尔还会在手机端使用它进行语音转文字。</li></ul><h2 id="更多" tabindex="-1"><a class="header-anchor" href="#更多"><span>更多</span></a></h2><p>飞书在产品设计和体验方面表现相当不错。然而，飞书的改版使其产品逻辑全面向企业用户，要求所有接口均需企业管理员授权，导致免费和轻度企业用户流失严重。</p><p>飞书最初依靠免费和轻度企业用户的口碑打响了名声，很难说改版会大幅改良它的营收状况。我最初完全投入飞书是从少数派社群开始的。然而，社群停止后，我对飞书的使用频率也在下降。当然，个人认为少数派飞书社群的关闭是一个双输。虽然飞书节省了免费用户的开销，但流失了大量早期用户和口碑。而自从少数派迁移到内部社群后，少数派的会员对我来说变得不那么重要，会员社区的访问也大大减少了。少数派会员的价值只剩每周一次的会员社区通讯。</p><p>Hummer 评论称，「浪费这么多时间，还不如省下来时间多赚钱，继续用飞书提高效率」。这一观点方向上无疑没错的。然而，飞书的问题不仅在于其收费方案，而在于功能限制和不合理的功能削减。在我实际使用中，从未超出免费额度，但现在一些实用功能已被移除。想通过飞书提高效率、节约时间并增加收入，前提是这些功能需要存在。</p>',7),r={},g=(0,a(9720).c)(r,[["render",function(e,t){const a=(0,n.E1)("ExternalLinkIcon");return(0,n.Wz)(),(0,n.An)("div",null,[i,(0,n.QD)("p",null,[(0,n.mY)("如果你的服务器或容器不支持发送海外链接，可以使用部署在海外服务器上的 "),(0,n.QD)("a",o,[(0,n.mY)("n8n"),(0,n.K2)(a)]),(0,n.mY)(" 来转接 webhook 消息。")]),p])}]]),l=JSON.parse('{"path":"/apps/tutorials/feishu.html","title":"飞书迁移记录","lang":"zh-CN","frontmatter":{"article":true,"title":"飞书迁移记录","date":"2023-12-11T00:00:00.000Z","category":["工具"],"order":201,"description":"飞书曾经展现出极大的开放性，然而在一次改版后，它取消了对免费用户的支持，限制越来越多，促使我将各项内容从飞书迁移出来。以下是我的飞书迁移记录和替代方案。 飞书文档 知识库 我的早期笔记都保存在为知笔记，而随着飞书的出现，我将大多数存档性资料迁移到飞书知识库。尽管我原本计划完全弃用飞书，但由于时间和精力的有限，我并没有再次进行一次全面的迁移。幸运的是，我...","head":[["meta",{"property":"og:url","content":"https://newzone.top/apps/tutorials/feishu.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"飞书迁移记录"}],["meta",{"property":"og:description","content":"飞书曾经展现出极大的开放性，然而在一次改版后，它取消了对免费用户的支持，限制越来越多，促使我将各项内容从飞书迁移出来。以下是我的飞书迁移记录和替代方案。 飞书文档 知识库 我的早期笔记都保存在为知笔记，而随着飞书的出现，我将大多数存档性资料迁移到飞书知识库。尽管我原本计划完全弃用飞书，但由于时间和精力的有限，我并没有再次进行一次全面的迁移。幸运的是，我..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.newzone.top/2023-12-11-10-56-52.png?imageMogr2/format/webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-13T06:51:48.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"飞书迁移记录"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:published_time","content":"2023-12-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-13T06:51:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"飞书迁移记录\\",\\"image\\":[\\"https://img.newzone.top/2023-12-11-10-56-52.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2023-12-11-10-52-56.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2023-12-11-10-55-18.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2023-12-10-15-45-44.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2023-12-11-14-10-37.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2023-12-11-14-03-25.png?imageMogr2/format/webp \\\\\\"未开通机器人助手会提示错误\\\\\\"\\",\\"https://img.newzone.top/2023-12-10-15-11-15.png?imageMogr2/format/webp?imageMogr2/format/webp/thumbnail/400x\\"],\\"datePublished\\":\\"2023-12-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-13T06:51:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清顺\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"飞书文档","slug":"飞书文档","link":"#飞书文档","children":[{"level":3,"title":"知识库","slug":"知识库","link":"#知识库","children":[]},{"level":3,"title":"表格","slug":"表格","link":"#表格","children":[]},{"level":3,"title":"收集表","slug":"收集表","link":"#收集表","children":[]}]},{"level":2,"title":"飞书邮箱","slug":"飞书邮箱","link":"#飞书邮箱","children":[]},{"level":2,"title":"飞书捷径","slug":"飞书捷径","link":"#飞书捷径","children":[]},{"level":2,"title":"Webhook 通知","slug":"webhook-通知","link":"#webhook-通知","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]},{"level":2,"title":"更多","slug":"更多","link":"#更多","children":[]}],"git":{"createdTime":1707807108000,"updatedTime":1707807108000,"contributors":[{"name":"wpengjie0214","email":"159807936+wpengjie0214@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":5.68,"words":1704},"filePathRelative":"apps/tutorials/feishu.md","localizedDate":"2023年12月11日","excerpt":"<p>飞书曾经展现出极大的开放性，然而在一次改版后，它取消了对免费用户的支持，限制越来越多，促使我将各项内容从飞书迁移出来。以下是我的飞书迁移记录和替代方案。</p>\\n<h2>飞书文档</h2>\\n<h3>知识库</h3>\\n<p>我的早期笔记都保存在为知笔记，而随着飞书的出现，我将大多数存档性资料迁移到飞书知识库。尽管我原本计划完全弃用飞书，但由于时间和精力的有限，我并没有再次进行一次全面的迁移。幸运的是，我并没有将重要知识点笔记存放在飞书上，所以剩余的说明书等次要文档将继续保留在这个平台上。</p>\\n<figure><img src=\\"https://img.newzone.top/2023-12-11-10-56-52.png?imageMogr2/format/webp\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}')}}]);