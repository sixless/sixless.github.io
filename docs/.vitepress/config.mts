import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-cn",
  title: "深秋",
  description: "这只是个普通VitePress Site -> github pages 测试",
  srcDir: 'src',
  srcExclude: ['**/README.md', '**/TODO.md'],
  metaChunk: true, //页面元数据分离
  cleanUrls: true, //清除.html扩展名
  lastUpdated: true, //时间戳
  rewrites: {
    'packages/:pkg/(.*)': ':pkg/index.md'
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.svg',
    siteTitle: '深秋blog\'s',

    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回至顶部",
    externalLinkIcon: true,
    search: {
      //搜索框
      provider: 'local',
      
    },

    nav: [
      { text: '文章', link: '/markdown-examples' },
      { text: '关于', link: '/user/about'},
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sixless' }
    ],

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },

    outline: {
      level: [2, 6],
      label: '页面导航'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
    /*
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    }
    */
  }
})
