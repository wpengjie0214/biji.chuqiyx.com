import { copyrightPlugin } from '@vuepress/plugin-copyright'

module.exports = {
  plugins: [
    [
      copyrightPlugin,
      {
        global: true, // 让插件全局生效
        triggerLength: 150, // 设置触发追加版权信息的长度阈值
        author: "Your Name", // 设置全局作者信息
        license: "CC BY-NC-SA 4.0", // 设置全局协议信息
        // 可以添加其他选项进行定制
      },
    ],
  ],
};