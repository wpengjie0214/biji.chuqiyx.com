import { navbar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
//专题话题的路径需在尾部添加 /，否则有可能出现链接错误。比如下方「生活」中的 baby/
export default navbar([
  { text: "绘画教程", icon: "blog", link: "https://www.chuqiyx.com/" },
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
            icon: "folder",
            link: "apps/mianfeiaigc/",
          },
          {
            text: "付费AIGC资料",
            icon: "folder",
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
    text: "关于我们",
    icon: "tool",
    children: [
      {
        text: "官方网站",
        icon: "home",
        link: "/Aboutus.html#官方网站",
      },
      { text: "服务内容", icon: "categoryselected", link: "/Aboutus.html#服务内容" },
      { text: "课程介绍", icon: "discover", link: "/Aboutus.html#课程介绍" },
      {
        text: "联系方式",
        icon: "call",
        link: "/Aboutus.html#联系方式",
      },
    ],
  },
]);
