import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: "文章目录",
    outline: [2, 6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'markdown', link: '/markdown-examples' },
      { text: '自动生成侧边栏', link: '/front-end/react' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    // sidebar: { "/front-end/react": set_sidebar("front-end/react") },
    sidebar: false,
    aside: "left",

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cn-luyang' }
    ],

    footer:{
      copyright: 'Copyright © 2025-2026 码上钓台. All rights reserved'
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    }
  }
})
