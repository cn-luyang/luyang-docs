import { defineConfig } from 'vitepress'
import nav from './nav.mjs'
import sidebar from './sidebar.mjs'

export default defineConfig({
  title: "Kicent",
  description: "A VitePress Site",
  srcDir: "src",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    // 网站Logo
    logo: {
      light: '/logo-light.svg',    // 亮色主题使用的logo
      dark: '/logo-dark.svg',      // 暗色主题使用的logo
      alt: 'Logo',                 // alt文本

    },
    // 设置默认主题为暗黑模式
    appearance: 'dark',  // 可选值: 'dark' | 'light' | false
    // 导航栏配置
    nav: nav,
    // 侧边栏配置
    sidebar: sidebar,
    // 右侧大纲配置
    outline: {
      level: [2, 6],  // 显示 h2 到 h6 标题
      label: '页面导航' // 大纲标题
    },
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cn-luyang' }
    ],
    // 页脚配置
    footer: {
      // message: '简单 · 专注',
      copyright: 'Copyright © 2025-2026 · 湘ICP备2025102812号'
    },
    // 编辑链接 - 显示"编辑此页"按钮
    editLink: {
      pattern: 'https://github.com/cn-luyang/luyang-docs/tree/main/src/:path',  // 编辑链接模板
      text: '在 GitHub 上编辑此页'  // 按钮文字
    },
    // 上一页/下一页链接
    docFooter: {
      prev: '上一篇',                 // 上一篇按钮文字
      next: '下一篇'                  // 下一篇按钮文字
    },
    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',              // 更新时间文字
      formatOptions: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }
    },
    // 返回顶部按钮
    returnToTop: true,               // 滚动时显示返回顶部按钮
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
  },
  vite: {
    // 静态资源处理
    publicDir: '../public'  // 相对于src目录的路径
  }
})
