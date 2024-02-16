import { navbar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
//专题话题的路径需在尾部添加 /，否则有可能出现链接错误。比如下方「生活」中的 baby/
export default navbar([
  { text: "绘画教程", icon: "blog", link: "/blog" },
  {
    text: "工具资料",
    icon: "app",
    prefix: "/",
    children: [
      {
        text: "电脑必备工具",
        icon: "chrome",
        link: "apps/computertool.html",
      },
      {
        text: "AIGC精品导航",
        icon: "chrome",
        link: "apps/navigation.html",
      },
      {
        text: "AIGC/全网资料整合",
        icon: "any",
        prefix: "",
        children: [
          {
            text: "免费AIGC资料",
            icon: "quote",
            link: "apps/mianfeiaigc/",
          },
          {
            text: "付费AIGC资料",
            icon: "process",
            link: "apps/fufeiaigc/",
          },
        ],
      },
    ],
  },
  {
    text: "Ai工作流",
    icon: "emmet",
    prefix: "/family/",
    children: ["Diet", "Shoppinglist", "Coupon", "baby/"],
  },
  {
    text: "联系我们",
    icon: "tool",
    children: [
      {
        text: "ChatGPT SC",
        icon: "creative",
        link: "https://www.aishort.top/",
      },
      { text: "IMGPrompt", icon: "pic", link: "https://prompt.newzone.top/" },
      { text: "文字处理", icon: "others", link: "https://tools.newzone.top/json-translate" },
      {
        text: "工具收藏",
        icon: "categoryselected",
        link: "https://nav.newzone.top/",
      },
    ],
  },
]);
