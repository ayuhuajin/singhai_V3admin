// vitepress/config.js
module.exports = {
  title: "Singhai's Blog", // 网站标题
  description: '我的vitepress博客.', //网站描述
  // ignoreDeadLinks: true, // 最好加上，构建时会忽略md中的外链
  // markdown: {
  //   theme: 'material-palenight', //md主题
  //   lineNumbers: true //md 加行号
  // },
  // lastUpdated: true, //显示最近更新时间
  // appearance: true, //可以选择深浅主题
  base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
  // lang: 'en-US', //语言

  repo: 'vuejs/vitepress',
  head: [
    // 改变title的图标
    [
      'link',
      {
        rel: 'icon',
        href: '/img/logo.svg' //图片放在public文件夹下
      }
    ]
  ],
  // 主题配置
  themeConfig: {
    // socialLinks: [
    //   //右上角图标和链接，icon 可用svg 配置
    //   { icon: 'github', link: 'https://github.com/Yinzhuo19970516/vue-template' },
    //   { icon: 'slack', link: 'https://juejin.cn/user/1011206428301774' }
    // ],
    // lastUpdatedText: '更新时间',
    // siteTitle: 'vue3',
    //   头部导航
    nav: [
      { text: '首页', link: '/pages/' },
      { text: '项目简介', link: '/pages/' },
      { text: '百度', link: 'http://www.baidu.com' }
    ],
    //   侧边导航
    sidebar: [
      {
        text: 'Vue3快速开始',
        items: [
          { text: 'vue3', link: 'pages/vue3/index' },
          { text: 'ts', link: 'pages/vue3/lesson1' }
        ]
      },
      {
        text: 'TS快速开始',
        items: [
          { text: 'ts第一课', link: '/pages/Ts/index' },
          { text: 'ts', link: '/pages/Ts/lesson1' }
        ]
      }
    ],
    smoothScroll: true
  }
}
