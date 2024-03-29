import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  // 主题选项：https://theme-hope.vuejs.press/zh/config/theme/layout.html
  hostname: "http://biji.chuqiyx.com",

  iconAssets: "iconfont",

  author: {
    name: "小柒",
    url: "https://blog.17xueai.top",
  },

  logo: "/logo.svg",


  //密码登录访问
  encrypt: {
      config: {
        // 这会加密整个 guide 目录，并且两个密码都是可用的
        "/apps/": ["wpj1234", "wpj5678"],
        // 这只会加密 config/page.html
        "/posts/2024-02-15-Learning-materials.html": "1234",
      },
    },

  // 是否全局启用路径导航
  breadcrumb: false,

  // 页面元数据：贡献者，最后修改时间，编辑链接
  contributors: false,
  lastUpdated: true,
  editLink: false,

  // 深色模式配置
  darkmode: "switch",
  // 全屏按钮
  fullscreen: true,

  // 默认为 GitHub. 同时也可以是一个完整的 URL
  repo: "rockbenben/LearnData",
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为 "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "GitHub",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: false,
  // 文档存放路径
  docsDir: "docs",

  // navbar
  navbar: navbar,
  // 导航栏布局
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["SocialLink", "Repo", "Outlook", "Search"],
  },
  // 是否在向下滚动时自动隐藏导航栏
  // navbarAutoHide: "always",

  // sidebar
  sidebar: sidebar,
  // 侧边栏排序规则
  // sidebarSorter: ['readme', 'order', 'title'],

  // copyright 默认为 Copyright © <作者>
  copyright: `Copyright © 2024-小柒带你学Ai <a href="http://biji.chuqiyx.com" target="_blank" rel="noopener noreferrer">小柒笔记</a>｜<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">晋ICP备2020014275号-1</a>`,
  displayFooter: true,
  // 页脚，支持使用 HTMLString 以显示备案信息等
  // footer: `MIT Licensed`,

  // 页面布局 Frontmatter 配置：https://theme-hope.vuejs.press/zh/config/frontmatter/layout.html#pageinfo
  pageInfo: ["Category", "Tag", "Word", "ReadingTime", "PageView"],

  // 主题功能选项：https://theme-hope.vuejs.press/zh/config/theme/feature.html
  blog: {
    articleInfo: ["Date", "PageView", "Category", "Tag", "ReadingTime"],
    name: "小柒",
    avatar: "/avatar_self.webp",
    description: "迷信新工具，热衷于研究开源软件、心理学理论，定期分享探索成果",
    intro: "/intro.html",
    roundAvatar: true,
    medias: {
      
      Zhihu: "https://www.zhihu.com/people/qingwhat",
      少数派: ["https://sspai.com/u/zqj05i4v/posts", "./docs/.vuepress/icons/sspai.svg"],
      Wechat: "https://img.newzone.top/wechat.svg",
      Email: "mailto:learndata@newzone.top",
      Discord: "https://discord.gg/PZTQfJ4GjX",
      RSS: "/rss.xml",
    },
  },

  // 隐藏打印按钮
    //print: true,



  plugins: {
    blog: true,


    // 评论配置（仅做样例，记得更换）

   

    // 组件库
    components: {
      components: ["Badge", "BiliBili", "VidStack"],
    },

    // 禁用不需要的配置
    // https://plugin-md-enhance.vuejs.press/zh/guide/
    mdEnhance: {
      sub: true, // 上下角标
      sup: true,
      tasklist: true, // 任务列表
      figure: true, // 启用 figure
      imgLazyload: true, // 启用图片懒加载
      // imgMark: true, // 启用图片标记
      imgSize: true, // 启用图片大小
      include: true, //导入文件
      component: true, // 使用 component 代码块来在 Markdown 中添加组件
      footnote: true,
      // tabs: true, // 选项卡
      alert: true, // GFM 警告
      attrs: true, // 使用特殊标记为 Markdown 元素添加属性
      hint: true, // 提示容器
      mark: true, // 使用 == == 进行标记。请注意两边需要有空格。
      align: true, // 启用自定义对齐
      // codetabs: true, // 代码块分组
      // demo: true, //代码演示
    },

    // Algolia 全文搜索：需要自己设置爬虫并生成下方配置，如不会自己设置，启用下方本地搜索
    docsearch: {
      indexName: "newzone",
      appId: "M4EXXEZIEG",
      apiKey: "fd8891a9c4cc21e0ef4f11bf44f7a11e",
    },
    // 本地搜索，和上方二选一
    /* searchPro: {
      // 索引全部内容
      indexContent: true,
    }, */

    feed: {
      rss: true,
      count: 10,
    },
  },

  // 开发模式下是否启动热更新，显示所有更改并重新渲染
  hotReload: true,
});
