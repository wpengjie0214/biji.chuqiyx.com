import { sidebar } from "vuepress-theme-hope";
import { copyrightPlugin } from '@vuepress/plugin-copyright';

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar({
  "": [
    "/DailyRoutine",
    "/Fitness",
    // 读书笔记架构更换到 docsify，不能使用相对链接
    //{ text: "读书笔记", icon: "read", link: "/reading/" },
    // 指定显示页面
    //Ai工具-应用手册
    {
      text: "Ai手册-工具资料",
      icon: "",
      prefix: "/apps/",
      link: "",
      collapsible: true,
      children: [
        //电脑必备工具
        "computertool.md",
        //电脑必备插件
        "Plugin.md",
        //AI提效率工具
        "aitixiaolv.md",
        //绘画软件合集
        "install.md",
        //AIGC精品导航
        "navigation.md",
        {
          text: " 免费AIGC资料",
          icon: "plugin",
          prefix: "mianfeiaigc/",
          link: "",
          collapsible: true,
          children: "structure",
        },
        {
          text: " 付费AIGC资料",
          icon: "load",
          prefix: "fufeiaigc/",
          link: "",
          collapsible: true,
          children: "structure",
        },
      ],

    },
    //Ai写作-ChatGPT

    {
      text: "Ai写作-ChatGPT",
      icon: "",
      prefix: "/gpt/",
      link: "",
      collapsible: true,
      children: [
    //ChatGPT从入门到精通
     {
      text: "ChatGPT从入门到精通",
      icon: "",
      prefix: "beginner/",
      link: "",
      collapsible: true,
      children: "structure",
     },
     //ChatGPT高质量提示词
     {
      text: "ChatGPT高质量提示词",
      icon: "",
      prefix: "callword/",
      link: "",
      collapsible: true,
      children: "structure",
     },
      //ChatGPT实用场景案例
     {
      text: "ChatGPT实用场景案例",
      icon: "",
      prefix: "gptcase/",
      link: "",
      collapsible: true,
      children: "structure",
     },
      ],
    },

    //Ai绘画-Stable difussion

    {
      text: "Ai绘画-Stable difussion",
      icon: "",
      prefix: "/aisd/",
      link: "",
      collapsible: true,
      children: [
        //教程前言【必看】
        "bikan1.md",
        {
          text: " Win系统本地部署教程",
          icon: "plugin",
          prefix: "sdwindows/",
          link: "",
          collapsible: true,
          children: "structure",
        },
        {
          text: " Mac系统本地部署教程",
          icon: "load",
          prefix: "sdmacos/",
          link: "",
          collapsible: true,
          children: "structure",
        },
        {
          text: " 云端电脑部署安装教程",
          icon: "load",
          prefix: "sdyunduan/",
          link: "",
          collapsible: true,
          children: "structure",
        },
        {
          text: " 干货&入门教程【免费】",
          icon: "load",
          prefix: "sdrumenmf/",
          link: "",
          collapsible: true,
          children: "structure",
        },
        {
          text: " 入门到精通教程【付费】",
          icon: "load",
          prefix: "sdjingtongsf/",
          link: "",
          collapsible: true,
          children: "structure",
        },
        {
          text: " 强烈推荐大模型合集",
          icon: "load",
          prefix: "sddamoxing/",
          link: "",
          collapsible: true,
          children: "structure",
        },
      ],

    },

    //Ai绘画-Midjourney

    {
      text: "Ai绘画-Midjourney",
      icon: "",
      prefix: "/aimj/",
      link: "",
      collapsible: true,
      children: [
        //教程前言【必看】
        "bikan1.md",
        {
          text: " Win系统本地部署教程",
          icon: "plugin",
          prefix: "mjwindows/",
          link: "",
          collapsible: true,
          children: "structure",
        },
        {
          text: " Mac系统本地部署教程",
          icon: "load",
          prefix: "mjmacos/",
          link: "",
          collapsible: true,
          children: "structure",
        },
        {
          text: " 干货&入门教程【免费】",
          icon: "load",
          prefix: "mjrumenmf/",
          link: "",
          collapsible: true,
          children: "structure",
        },
        {
          text: " 入门到精通教程【付费】",
          icon: "load",
          prefix: "mjjingtongsf/",
          link: "",
          collapsible: true,
          children: "structure",
        },
      ],

    },

    //Ai项目-落地案例
    {
      text: "Ai项目-落地案例",
      icon: "",
      prefix: "/aixm/",
      link: "",
      collapsible: true,
      children: [
        //测试1
        "bikan1.md",
        {
          text: " 项目1",
          icon: "plugin",
          prefix: "xiangmu1/",
          link: "",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    //Ai绘画-常见问题
    {
      text: "Ai绘画-常见问题",
      icon: "",
      prefix: "/aiwenti/",
      link: "",
      collapsible: true,
      children: "structure",
    
    },
    //Ai教程-实用教程
    {
      text: "Ai教程-实用教程",
      icon: "blog",
      prefix: "/_posts/",
      link: "/blog",
      collapsible: true,
      children: "structure",

    },
  ],
  // 独立功能区
  "/services/dockers-on-nas/": "structure",
  "/family/baby/": "structure",


 



});
