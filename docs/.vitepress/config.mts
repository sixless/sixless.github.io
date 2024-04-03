import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-cn",
  title: "深秋",
  description: "这只是个普通VitePress Site -> github pages 测试",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.svg',
    siteTitle: 'My Custom Title',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '关于', link: '/usr/about' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sixless' }
    ]
  }
})
