import { defineConfig } from 'vitepress'
import nav from './nav.mjs'
import sidebar from './sidebar.mjs'

export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  srcDir: "src",
  themeConfig: {
    // 导航栏配置
    nav: nav,
    // 侧边栏配置
    sidebar: sidebar,
    // 右侧大纲配置
    outlineTitle: "页面导航",
    outline: [2, 6],
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cn-luyang' }
    ],
    // 页脚配置
    footer: {
      //  message: '基于 VitePress 构建',
      copyright: 'Copyright © 2025-2026 码上钓台. All rights reserved'
    },
    // 编辑链接 - 显示"编辑此页"按钮
    editLink: {
      pattern: 'https://github.com/cn-luyang/luyang-docs/main/docs/:path',  // 编辑链接模板
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
        dateStyle: 'short',
        timeStyle: 'short'
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
  }
})
