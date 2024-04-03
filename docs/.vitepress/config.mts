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
    siteTitle: 'My Custom Title',
   
    

    

    search: {
      //搜索框
      provider: 'local',
      
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'About', link: 'user/about'}
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
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    /*
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    }
    */
  }
})