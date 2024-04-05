---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "mtest文档站"
  text: '<span style="color:green;background-image:-webkit-linear-gradient(top, #bc2f08,#d75d10,#de6912);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">宁静致远~</span>'
  tagline: '{{ Vitepress }}'
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - icon:
      src: /vitepress-logo-mini.svg
    title: 构建
    details: 该文档站使用 <span style="color:RoyalBlue">Vitepress</span> 构建
    link: "https://vitepress.dev/"
    linkText: "Learn more"
  - icon:
      dark: /dark-github-icon.svg
      light: /light-github-icon.svg
    title: 项目托管
    details: 该文档站于 <span style="color:RoyalBlue">GitHub Pages</span> 部署。
    link: "https://pages.github.com/"
    linkText: "Learn more"
---
