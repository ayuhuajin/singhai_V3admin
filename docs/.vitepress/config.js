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
    logo: '/img/logo.svg',
    search: {
      provider: 'local'
    },
    socialLinks: [
      //右上角图标和链接，icon 可用svg 配置
      { icon: 'github', link: 'https://github.com/Yinzhuo19970516/vue-template' },
      { icon: 'slack', link: 'https://juejin.cn/user/1011206428301774' }
    ],
    lastUpdatedText: '更新时间',
    //   头部导航
    siteTitle: 'singHai',
    outline: 30,
    nav: [
      { text: '首页', link: '/pages/' },

      {
        text: '项目简介',
        // link: '/pages/',
        items: [
          //这种格式是有下拉菜单的版本
          { text: '基础', link: '/pages/' }, //text代表每一项的名字，link是连接的位置
          { text: 'Vue', link: '/pages/' },
          { text: 'React', link: '/pages/' },
          { text: '小程序', link: '/articles/mini/index' },
          { text: 'Electron', link: '/articles/electron/index' },
          { text: 'Web3D', link: '/articles/web3d/index' },
          { text: '其他', link: '/articles/other/vitepress/index' }
        ]
      },
      { text: '百度', link: 'http://www.baidu.com' }
    ],
    //   侧边导航
    sidebar: [
      {
        text: 'Vue3快速开始',
        collapsible: false, //是不是可以动态展开
        collapsed: false, //默认是不是展开
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
