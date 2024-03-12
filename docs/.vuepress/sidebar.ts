import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar({
  "": [
    "/Social",
    "/NewGuy",
    // 读书笔记架构更换到 docsify，不能使用相对链接
    //{ text: "读书笔记", icon: "read", link: "/reading/" },
    // 指定显示页面
    //Ai工具-应用手册
    {
      text: "✅Ai手册-工具资料",
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
          text: "📁免费AIGC资料",
          icon: "",
          prefix: "mianfeiaigc/",
          link: "",
          collapsible: true,
          children: "structure",
        },
        {
          text: "📁付费AIGC资料",
          icon: "",
          prefix: "fufeiaigc/",
          link: "",
          collapsible: true,
          children: "structure",
        },
      ],

    },
    //Ai魔法-提示词

    {
      text: "✅Ai魔法-提示词",
      icon: "",
      prefix: "/tsc/",
      link: "",
      collapsible: true,
      children: [
    //ai写作
     {
      text: "Ai写作",
      icon: "folder",
      prefix: "writing/",
      link: "",
      collapsible: true,
      children: "structure",
     },
     //SD提示词
     {
      text: "SD提示词",
      icon: "folder",
      prefix: "sd/",
      link: "",
      collapsible: true,
      children: "structure",
     },
      //MJ提示词
     {
      text: "MJ提示词",
      icon: "folder",
      prefix: "mj/",
      link: "",
      collapsible: true,
      children: "structure",
     },
      ],
    },

    //Ai绘画-Stable difussion

    {
      text: "✅Ai绘画-Stable difussion",
      icon: "",
      prefix: "/aisd/",
      link: "",
      collapsible: true,
      children: [
        //教程前言【必看】
        "bikan1.md",
        {
          text: " 初学者小画家",
          icon: "folder",
          prefix: "sdxhj/",
          link: "",
          collapsible: true,
          children: "structure",
        },
        {
          text: "进阶者狂想家",
          icon: "folder",
          prefix: "sdkxj/",
          link: "",
          collapsible: true,
          children: "structure",
        },
        {
          text: "专家级魔法师",
          icon: "folder",
          prefix: "sdmfs/",
          link: "",
          collapsible: true,
          children: "structure",
        },
        {
          text: " 大模型合集啦",
          icon: "folder",
          prefix: "sddamoxing/",
          link: "",
          collapsible: true,
          children: "structure",
        },
      ],

    },

    //Ai绘画-Midjourney

    {
      text: "✅Ai绘画-Midjourney",
      icon: "",
      prefix: "/aimj/",
      link: "",
      collapsible: true,
      children: [
        //教程前言【必看】
        "bikan1.md",

         {
          text: " 初学者小画家",
          icon: "folder",
          prefix: "mjxhj/",
          link: "",
          collapsible: true,
          children: "structure",
        },
        {
          text: "进阶者狂想家",
          icon: "folder",
          prefix: "mjkxj/",
          link: "",
          collapsible: true,
          children: "structure",
        },
        {
          text: "专家级魔法师",
          icon: "folder",
          prefix: "mjmfs/",
          link: "",
          collapsible: true,
          children: "structure",
        },
      ],

    },

    //Ai项目-精品案例
    {
      text: "✅Ai项目-精品案例",
      icon: "",
      prefix: "/aixm/",
      link: "",
      collapsible: true,
      children: [
        //测试1
        "bikan1.md",
        {
          text: " 📁项目1",
          icon: "",
          prefix: "xiangmu1/",
          link: "",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    //Ai绘画-常见问题
    {
      text: "✅Ai绘画-常见问题",
      icon: "",
      prefix: "/aiwenti/",
      link: "",
      collapsible: true,
      children: "structure",
    
    },

    //Ai直播-获取渠道
    {
      text: "✅Ai直播-获取渠道",
      icon: "",
      prefix: "/aizhibo/",
      link: "",
      collapsible: true,
      children: [
        //获取方式【必看】
        "bikan1.md",
        {
          text: " 📁直播内容",
          icon: "",
          prefix: "neirong/",
          link: "",
          collapsible: true,
          children: "structure",
        },
      ],
    },

    //Ai教程-实用教程
    /*
    {
      text: "✅Ai副业-变现教程",
      //icon: "blog",
      prefix: "/_posts/",
      link: "/blog",
      collapsible: true,
      children: "structure",

    },
    */
  ],
  // 独立功能区
  "/services/dockers-on-nas/": "structure",
  "/family/baby/": "structure",


});
