import { defineConfig,useData } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-cn",
  title: "mtest文档",
  description: "这只是个普通VitePress Site -> github pages 测试",
  srcDir: 'src',
  srcExclude: ['**/README.md', '**/TODO.md'],
  metaChunk: true, //页面元数据分离
  cleanUrls: true, //清除.html扩展名
  lastUpdated: true, //时间戳
  head: [
	  ['link', { rel: 'icon', href: '/favicon.svg' }],
	  ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
	  [ 'link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
	  ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }]
  ],
  rewrites: {
    'packages/:pkg/(.*)': ':pkg/index.md'
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.svg',
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
      { text: '关于', link: '/user/about' },
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
      { icon: 'github', link: 'https://github.com/sixless' },
      {
        icon: {
          svg: '<svg t="1712242632330" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="702" data-darkreader-inline-fill="" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="703" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #9f171c;"></path></svg>'
        },
        
        link: 'https://gitee.com/sixless',
        ariaLabel: 'gitee link'
      }
    ],

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    footer: {
      //message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present oh-my-six'
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
