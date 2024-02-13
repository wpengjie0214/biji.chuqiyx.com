"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[9620],{9720:(e,n)=>{n.c=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}},164:(e,n,s)=>{s.r(n),s.d(n,{comp:()=>V,data:()=>Z});var a=s(3968);const l=(0,a.QD)("h2",{id:"静态托管",tabindex:"-1"},[(0,a.QD)("a",{class:"header-anchor",href:"#静态托管"},[(0,a.QD)("span",null,"静态托管")])],-1),i=(0,a.QD)("p",null,[(0,a.mY)("如果在国内静态资源库找不到所需的静态包，建议使用 "),(0,a.QD)("code",null,"npm i"),(0,a.mY)(" 命令将其下载到本地，然后部署到阿里云/七牛云的国内服务器上，以避免因 UNPKG 和 jsDelivr 等静态节点被屏蔽而导致网页样式显示出错。")],-1),t=(0,a.QD)("p",null,"静态资源库：",-1),r={href:"https://www.staticfile.org/",target:"_blank",rel:"noopener noreferrer"},o={href:"https://cdn.bytedance.com/",target:"_blank",rel:"noopener noreferrer"},c=(0,a.QD)("p",null,"emoji 等可以使用静态资源库上的项目，比如 twemoji，上面有集成 png 图片。",-1),p=(0,a.QD)("h3",{id:"npm-包",tabindex:"-1"},[(0,a.QD)("a",{class:"header-anchor",href:"#npm-包"},[(0,a.QD)("span",null,"NPM 包")])],-1),d=(0,a.QD)("strong",null,"有墙风险且不稳定",-1),u=(0,a.QD)("code",null,"@latest",-1),m={href:"https://segmentfault.com/a/1190000023075167",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},b=(0,a.QD)("code",null,"https://unpkg.com/",-1),h={href:"https://npmmirror.com/",target:"_blank",rel:"noopener noreferrer"},D=(0,a.QD)("code",null,"https://registry.npmmirror.com/项目名/版本号",-1),f=(0,a.QD)("li",null,[(0,a.mY)("UNPKG 镜像：有资源可以用服务器自建服务，反向代理 unpkg。 "),(0,a.QD)("ul",null,[(0,a.QD)("li",null,[(0,a.QD)("s",null,[(0,a.mY)("饿了么 CDN（已关）：国内唯一能用的 npm 镜像，2022.07.13 发现外部访问被拒绝。之前饿了么并没说支持对外，可能已经彻底取消了。使用饿了么 CDN 时，注意 "),(0,a.QD)("code",null,"https://npm.elemecdn.com/react@latest/"),(0,a.mY)(" 需要时间更新，具体频率未知，可固定大版本号来获取更新 "),(0,a.QD)("code",null,"https://npm.elemecdn.com/react@^18/"),(0,a.mY)("。")])])])],-1),g={href:"https://statically.io/",target:"_blank",rel:"noopener noreferrer"},k=(0,a.QD)("li",null,[(0,a.QD)("s",null,[(0,a.mY)("jsDelivr（已墙）：速度最快，原本是最稳的，但域名暴雷后，经常断开，2022.06.01 彻底打不开。配合 Github action，更新后自动访问 jsdelivr CDN 缓存刷新链接，保持页面常新。刷新命令参考 "),(0,a.QD)("code",null,"curl https://purge.jsdelivr.net/gh/username/project/file"),(0,a.mY)("。")])],-1),Q=(0,a.QD)("p",null,"由于第三方托管过于不稳定，目前我使用自托管 oss.newzone.top。",-1),y=(0,a.QD)("h3",{id:"部署平台",tabindex:"-1"},[(0,a.QD)("a",{class:"header-anchor",href:"#部署平台"},[(0,a.QD)("span",null,"部署平台")])],-1),S=(0,a.QD)("li",null,"Pages：部署简单，外网速度很快，但国内速度不稳，而且 page.dev 域名有时会被墙，可购买便宜的临时域名（一年）来解决该问题。",-1),Y=(0,a.QD)("li",null,"Netlify：国内速度慢点，图片容易卡死，但还算稳定。",-1),P=(0,a.QD)("li",null,"Vercel：推荐使用 GitHub 账户登录，需绑定手机号（不支持 Voice），支持国内手机号。2022.08.26，「*.vercel.app」域名被 DNS 污染，需要绑定自定义域名。",-1),w=(0,a.QD)("li",null,"AWS: 邮箱注册，不过需要信用卡认证。",-1),_=(0,a.QD)("li",null,"国内平台：Gitee、WuliHub、CODING，都需要实名认证。",-1),N=(0,a.QD)("h3",{id:"ipfs",tabindex:"-1"},[(0,a.QD)("a",{class:"header-anchor",href:"#ipfs"},[(0,a.QD)("span",null,"IPFS")])],-1),C=(0,a.QD)("p",null,[(0,a.mY)("IPFS 无需服务器就可建立静态网站，号称永不失效，但"),(0,a.QD)("strong",null,"国内稳定性成疑问，实用性一般"),(0,a.mY)("。IPFS 托管在一个网关上，并不会自动复制到所有网关。")],-1),F={href:"https://pinata.cloud/",target:"_blank",rel:"noopener noreferrer"},K=(0,a.QD)("sup",{class:"footnote-ref"},[(0,a.QD)("a",{href:"#footnote1"},"[1]"),(0,a.QD)("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),G=(0,a.QD)("p",null,"上传 ipfs 到 pinata 之后，cloudflare 等其他网关不一定会完全复制文件，php 无法抓取加载，所以不建议使用 cloudflare 网关。",-1),x=(0,a.QD)("p",null,[(0,a.mY)("cloudflare 接管 pinata 后，ipfs 域名需通过「pinata 托管」>「cloudflare DNS」>「cloudflare SSL」。如果中途将 DNS 指向 "),(0,a.QD)("code",null,"http://gateway.pinata.cloud"),(0,a.mY)(" 等非 cloudflare ipfs 网关域名，cloudflare SSL 证书将失效。即便把链接改为非加密的 http，pinata 依然会视之为无效链接而拒绝访问。")],-1),T={href:"https://www.cloudflare.com/zh-cn/distributed-web-gateway/",target:"_blank",rel:"noopener noreferrer"},j=(0,a.IL)('<ol><li>添加 CNAME 记录，将你的 IPFS 域名 <code>xxx.example.com</code> 指向 <code>cloudflare-ipfs.com</code>。</li><li><code>_dnslink.xxx.example.com</code> 设置为 <code>dnslink=/ipfs/&lt;your_ipfs_hash_here&gt;</code>。</li></ol><h2 id="github-同步到-vps" tabindex="-1"><a class="header-anchor" href="#github-同步到-vps"><span>GitHub 同步到 VPS</span></a></h2><p>代码、文章推送到 GitHub 后，会自动生成可访问的网页，但国内访问 GitHub Pages 的速度极不稳定，为了确保网站能被正常访问，必须增加国内的访问节点。</p><p>很多人选择 Gitee Pages 作为国内节点，GitHub Actions 将新文档同步到 Gitee，生成位于国内的静态页面 Gitee Pages。但是，Gitee Pages 的限制非常多，免费版无法自定义域名，必须实名验证，更别提近期的下架风波。因此，我没选 Gitee，而是把文档同步到国内服务器（域名需备案）。</p><div class="hint-container tip"><p class="hint-container-title">文件夹名称请勿使用大写字母，否则在同步时容易产生错误。</p></div><h3 id="同步到-ftp" tabindex="-1"><a class="header-anchor" href="#同步到-ftp"><span>同步到 FTP</span></a></h3>',6),H={href:"https://github.com/SamKirkland/FTP-Deploy-Action",target:"_blank",rel:"noopener noreferrer"},I=(0,a.IL)('<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>on: push\nname: 🚀 Deploy website on push\njobs:\n  web-deploy:\n    name: 🎉 Deploy\n    runs-on: ubuntu-latest\n    steps:\n    - name: 🚚 Get latest code\n      uses: actions/checkout@v3\n\n    - name: 📂 Sync files\n      uses: SamKirkland/FTP-Deploy-Action@4.3.3\n      with:\n        server: <span class="token variable">${{ secrets.ftp_host }</span><span class="token punctuation">}</span>\n        username: <span class="token variable">${{ secrets.ftp_username }</span><span class="token punctuation">}</span>\n        password: <span class="token variable">${{ secrets.ftp_password }</span><span class="token punctuation">}</span>\n        port: <span class="token variable">${{ secrets.ftp_port }</span><span class="token punctuation">}</span> <span class="token comment"># 建议更改默认的 21 端口</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建 FTP 时，需在云服务商的安全组和服务器上开放 FTP 端口，并临时暂停宝塔系统加固等安全插件（新建 FTP 容易与安全插件冲突）。</p><p>如果出现 <code>FTPError: 530 Login authentication failed</code>，则说明 FTP 密码错误或账号不存在，需用 FileZilla 测试 FTP 的有效性。确认 FTP 无效后，检查 FTP 密码是否填写正确，是否只有大小写字母和数字。如果密码错误，则在 github secrets 重新 update 密钥。如果密码正确，则进入 <code>/www/server/pure-ftpd/etc/pureftpd.passwd</code>，检查是否有该 FTP 账户。没有 FTP 账户的话，<strong>暂停宝塔系统加固</strong>等安全插件后，重新新建 FTP。</p><p>如果出现 <code>Error: Timeout (control socket)</code>，则说明同步服务器超时，可进入 Actions 页面点击右侧按钮「Re-run all jobs」，重新进行部署。如果错误连续出现，可以尝试关闭防火墙，测试是否 GitHub 服务器被拉黑了。</p><h3 id="ssh-同步" tabindex="-1"><a class="header-anchor" href="#ssh-同步"><span>SSH 同步</span></a></h3>',5),E={href:"https://github.com/SamKirkland/web-deploy",target:"_blank",rel:"noopener noreferrer"},A=(0,a.QD)("code",null,"Permission denied (publickey,password)",-1),L=(0,a.IL)('<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>on: push\nname: Publish Website\njobs:\n  web-deploy:\n    name: 🚀 Deploy Website Every Commit\n    runs-on: ubuntu-latest\n    steps:\n    - name: 🚚 Get Latest Code\n      uses: actions/checkout@v3\n\n    - name: 📂 Sync Files\n      uses: SamKirkland/web-deploy@v1\n      with:\n        source-path: docs/.vuepress/dist/\n        target-server: <span class="token variable">${{ secrets.host }</span><span class="token punctuation">}</span>\n        remote-user: <span class="token variable">${{ secrets.ssh_username }</span><span class="token punctuation">}</span>\n        private-ssh-key: <span class="token variable">${{ secrets.SSH_KEY }</span><span class="token punctuation">}</span>\n        destination-path: <span class="token variable">${{ secrets.destination_folder }</span><span class="token punctuation">}</span>\n        ssh-port: <span class="token variable">${{ secrets.ssh_port }</span><span class="token punctuation">}</span> <span class="token comment"># 建议更改默认的 22 端口</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果出现报错 <code>error in libcrypto</code>，说明 SSH 密钥错误，需要登陆服务器终端，运行以下命令。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-m</span> PEM <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span>\n<span class="token function">cat</span> id_rsa.pub <span class="token operator">&gt;&gt;</span> authorized_keys\n<span class="token function">cat</span> id_rsa\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同步到-oss" tabindex="-1"><a class="header-anchor" href="#同步到-oss"><span>同步到 oss</span></a></h3>',4),$={href:"https://github.com/marketplace/actions/aliyun-oss-website-action",target:"_blank",rel:"noopener noreferrer"},W=(0,a.IL)('<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>name: deploy md to oss\non:\n  push:\n    branches: <span class="token punctuation">[</span> <span class="token string">&quot;main&quot;</span> <span class="token punctuation">]</span>\n  pull_request:\n    branches: <span class="token punctuation">[</span> <span class="token string">&quot;main&quot;</span> <span class="token punctuation">]</span>\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    <span class="token comment"># load repo to /github/workspace</span>\n    - uses: actions/checkout@v3\n    - name: Use Node.js\n      uses: actions/setup-node@v3\n      with:\n        node-version: <span class="token string">&#39;14.x&#39;</span>\n    <span class="token comment"># 打包文档命令</span>\n    <span class="token comment"># - run: npm install yarn@1.22.4 -g</span>\n    <span class="token comment"># - run: yarn install</span>\n    <span class="token comment"># - run: yarn docs:build #需要配合 yarn 的 package.json</span>\n    - name: aliyun-oss-website-action\n      uses: fangbinwei/aliyun-oss-website-action@v1.3.0\n      with:\n          accessKeyId: <span class="token variable">${{ secrets.ACCESS_KEY_ID }</span><span class="token punctuation">}</span>\n          accessKeySecret: <span class="token variable">${{ secrets.ACCESS_KEY_SECRET }</span><span class="token punctuation">}</span>\n          bucket: learndata-notes\n          <span class="token comment"># use your own endpoint</span>\n          endpoint: oss-cn-shanghai.aliyuncs.com\n          <span class="token comment"># 全目录上传</span>\n          folder: <span class="token builtin class-name">.</span>\n          <span class="token comment"># 不上传的文件</span>\n          exclude: <span class="token operator">|</span>\n            .github/\n            .gitattributes\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">',2),z={class:"footnotes"},U={class:"footnotes-list"},M={id:"footnote1",class:"footnote-item"},R={href:"https://medium.com/pinata/how-to-easily-host-a-website-on-ipfs-9d842b5d6a01",target:"_blank",rel:"noopener noreferrer"},q=(0,a.QD)("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),O={},V=(0,s(9720).c)(O,[["render",function(e,n){const s=(0,a.E1)("ExternalLinkIcon"),O=(0,a.E1)("RouteLink");return(0,a.Wz)(),(0,a.An)("div",null,[l,i,t,(0,a.QD)("ul",null,[(0,a.QD)("li",null,[(0,a.QD)("a",r,[(0,a.mY)("Staticfile CDN"),(0,a.K2)(s)]),(0,a.mY)("：国内维护最稳定的 CDN。")]),(0,a.QD)("li",null,[(0,a.QD)("a",o,[(0,a.mY)("字节 CDN"),(0,a.K2)(s)]),(0,a.mY)("：测速表现不错，缓存过期时间最长设置一年，而自 2022 年 3 月起，静态资源已不再更新。")])]),c,p,(0,a.QD)("ul",null,[(0,a.QD)("li",null,[(0,a.mY)("UNPKG："),d,(0,a.mY)("，默认为最新版本，无需 "),u,(0,a.mY)(" 标签。 "),(0,a.QD)("ul",null,[(0,a.QD)("li",null,[(0,a.mY)("将静态文件发布为 npm 包，参考"),(0,a.QD)("a",m,[(0,a.mY)("一分钟教你发布 npm 包"),(0,a.K2)(s)]),(0,a.mY)("。")]),(0,a.QD)("li",null,[(0,a.mY)("加速：在 "),(0,a.QD)("a",v,[(0,a.mY)("npm 官方源"),(0,a.K2)(s)]),(0,a.mY)("中搜索包位置，然后使用前缀 "),b,(0,a.mY)("。")])])]),(0,a.QD)("li",null,[(0,a.QD)("a",h,[(0,a.mY)("NPM MIRROR"),(0,a.K2)(s)]),(0,a.mY)("：NPM 项目的国内镜像镜像，不能做静态托管用途。"),D,(0,a.mY)(" 可以看见项目的各种信息，但看不了里面的文件。")]),f,(0,a.QD)("li",null,[(0,a.mY)("GitHub：基于 GitHub 公共仓库的资源托管，资源不会失效，但有时需要根据 CDN 服务商而更换域名。 "),(0,a.QD)("ul",null,[(0,a.QD)("li",null,[(0,a.QD)("s",null,[(0,a.QD)("a",g,[(0,a.mY)("Statically"),(0,a.K2)(s)]),(0,a.mY)("：jsDeliver 的替代品，在中国大陆所有地区连接异常。")])]),k])])]),Q,y,(0,a.QD)("ul",null,[(0,a.QD)("li",null,[(0,a.mY)("Cloudflare：Pages 和 Workers 两类部署方式。 "),(0,a.QD)("ul",null,[(0,a.QD)("li",null,[(0,a.K2)(O,{to:"/deploy/Cloudflare.html#%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86"},{default:(0,a.Ql)((()=>[(0,a.mY)("Workers")])),_:1}),(0,a.mY)("：复制镜像网站，可直接访问，但反向代理稳定性成疑。")]),S])]),Y,P,w,_]),N,C,(0,a.QD)("p",null,[(0,a.QD)("a",F,[(0,a.mY)("pinata"),(0,a.K2)(s)]),(0,a.mY)(" 上传网站构建的目录文件夹，上传后，即可通过 IPFS Hash 访问。网站目录中必须有 index.html，否则网页中将显示网站目录。即使有 index.html，其他人在拥有 CID 后，可以通过 IPFS Desktop 来获取网站的完整目录。为确保私密性，建议只上传单文件。使用单文件 CID 视为单一网站，不可调用原目录中的文件。"),K]),G,x,(0,a.QD)("p",null,[(0,a.mY)("对于文件较少且链接有效的域名，可按 "),(0,a.QD)("a",T,[(0,a.mY)("Cloudflare IPFS"),(0,a.K2)(s)]),(0,a.mY)(" 页面说明来设置 DNS，提交 IPFS 域名 30 分钟后，即可获取 SSL 证书。")]),j,(0,a.QD)("p",null,[(0,a.mY)("如果你有 FTP 服务器，可使用 "),(0,a.QD)("a",H,[(0,a.mY)("FTP-Deploy-Action"),(0,a.K2)(s)]),(0,a.mY)(" 将 github 代码推送到服务器上。Actions 步骤参考 "),(0,a.K2)(O,{to:"/deploy/GitHub.html"},{default:(0,a.Ql)((()=>[(0,a.mY)("GitHub 说明")])),_:1}),(0,a.mY)("。")]),I,(0,a.QD)("p",null,[(0,a.mY)("如果你有服务器的 SSH 权限，可以使用 "),(0,a.QD)("a",E,[(0,a.mY)("web-deploy"),(0,a.K2)(s)]),(0,a.mY)(" 以 SSH 同步方式发布页面。但与 FTP 相比，不确定安全性、速度、时间是否会区别。我尝试连接一直报错 "),A,(0,a.mY)("。（有可能是服务器需要非 root 用户，adduser 一直加不上。）")]),L,(0,a.QD)("p",null,[(0,a.mY)("如果没有服务器，可以把文件部署在云运营商的云存储上。比如用 "),(0,a.QD)("a",$,[(0,a.mY)("aliyun-oss-website-action"),(0,a.K2)(s)]),(0,a.mY)("，将 repo 文件 build 成网站文件，然后同步到阿里云 oss 并运行网站。")]),W,(0,a.QD)("section",z,[(0,a.QD)("ol",U,[(0,a.QD)("li",M,[(0,a.QD)("p",null,[(0,a.QD)("a",R,[(0,a.mY)("How to Easily Host a Website on IPFS"),(0,a.K2)(s)]),(0,a.mY)(),q])])])])])}]]),Z=JSON.parse('{"path":"/deploy/Static.html","title":"静态部署","lang":"zh-CN","frontmatter":{"article":false,"title":"静态部署","icon":"generic","order":1,"description":"静态托管 如果在国内静态资源库找不到所需的静态包，建议使用 npm i 命令将其下载到本地，然后部署到阿里云/七牛云的国内服务器上，以避免因 UNPKG 和 jsDelivr 等静态节点被屏蔽而导致网页样式显示出错。 静态资源库： Staticfile CDN：国内维护最稳定的 CDN。 字节 CDN：测速表现不错，缓存过期时间最长设置一年，而自 20...","head":[["meta",{"property":"og:url","content":"https://newzone.top/deploy/Static.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"静态部署"}],["meta",{"property":"og:description","content":"静态托管 如果在国内静态资源库找不到所需的静态包，建议使用 npm i 命令将其下载到本地，然后部署到阿里云/七牛云的国内服务器上，以避免因 UNPKG 和 jsDelivr 等静态节点被屏蔽而导致网页样式显示出错。 静态资源库： Staticfile CDN：国内维护最稳定的 CDN。 字节 CDN：测速表现不错，缓存过期时间最长设置一年，而自 20..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-13T06:51:48.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-13T06:51:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"静态部署\\",\\"description\\":\\"静态托管 如果在国内静态资源库找不到所需的静态包，建议使用 npm i 命令将其下载到本地，然后部署到阿里云/七牛云的国内服务器上，以避免因 UNPKG 和 jsDelivr 等静态节点被屏蔽而导致网页样式显示出错。 静态资源库： Staticfile CDN：国内维护最稳定的 CDN。 字节 CDN：测速表现不错，缓存过期时间最长设置一年，而自 20...\\"}"]]},"headers":[{"level":2,"title":"静态托管","slug":"静态托管","link":"#静态托管","children":[{"level":3,"title":"NPM 包","slug":"npm-包","link":"#npm-包","children":[]},{"level":3,"title":"部署平台","slug":"部署平台","link":"#部署平台","children":[]},{"level":3,"title":"IPFS","slug":"ipfs","link":"#ipfs","children":[]}]},{"level":2,"title":"GitHub 同步到 VPS","slug":"github-同步到-vps","link":"#github-同步到-vps","children":[{"level":3,"title":"同步到 FTP","slug":"同步到-ftp","link":"#同步到-ftp","children":[]},{"level":3,"title":"SSH 同步","slug":"ssh-同步","link":"#ssh-同步","children":[]},{"level":3,"title":"同步到 oss","slug":"同步到-oss","link":"#同步到-oss","children":[]}]}],"git":{"createdTime":1707807108000,"updatedTime":1707807108000,"contributors":[{"name":"wpengjie0214","email":"159807936+wpengjie0214@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":6.56,"words":1968},"filePathRelative":"deploy/Static.md","localizedDate":"2024年2月13日","excerpt":"<h2>静态托管</h2>\\n<p>如果在国内静态资源库找不到所需的静态包，建议使用 <code>npm i</code> 命令将其下载到本地，然后部署到阿里云/七牛云的国内服务器上，以避免因 UNPKG 和 jsDelivr 等静态节点被屏蔽而导致网页样式显示出错。</p>\\n<p>静态资源库：</p>\\n<ul>\\n<li><a href=\\"https://www.staticfile.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Staticfile CDN</a>：国内维护最稳定的 CDN。</li>\\n<li><a href=\\"https://cdn.bytedance.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">字节 CDN</a>：测速表现不错，缓存过期时间最长设置一年，而自 2022 年 3 月起，静态资源已不再更新。</li>\\n</ul>","autoDesc":true}')}}]);