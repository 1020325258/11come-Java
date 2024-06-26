const baiduCode = require('./config/baiduCode.js'); // 百度统计hm码
const htmlModules = require('./config/htmlModules.js');


module.exports = {

  theme: 'vdoing', // 使用依赖包主题
  // theme: require.resolve('../../vdoing'), // 使用本地主题 (先将vdoing主题文件下载到本地：https://github.com/xugaoyi/vuepress-theme-vdoing)

  title: "11来了",
  description: '记录Java后端面试内容',
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: 'vuepress,theme,blog,vdoing' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色

    // ['meta', { name: 'wwads-cn-verify', content: '6c4b761a28b734fe93831e3fb400ce87' }], // 广告相关，你可以去掉
    // ['script', { src: 'https://cdn.wwads.cn/js/makemoney.js', type: 'text/javascript' }], // 广告相关，你可以去掉
  ],

  // 主题配置
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },

      // {
      //   text: '指南', link: '/pages/a2f161/', items: [
      //     { text: '主题初衷与诞生', link: '/pages/52d5c3/' },
      //     { text: '介绍', link: '/pages/a2f161/' },
      //     { text: '快速上手', link: '/pages/793dcb/' },
      //     { text: '目录结构', link: '/pages/2f674a/' },
      //     { text: '核心配置和约定', link: '/pages/33d574/' },
      //     { text: '自动生成front matter', link: '/pages/088c16/' },
      //     { text: 'Markdown 容器', link: '/pages/d0d7eb/' },
      //     { text: 'Markdown 中使用组件', link: '/pages/197691/' },
      //     {
      //       text: '相关文章', items: [
      //         { text: '使目录栏支持h2~h6标题', link: '/pages/8dfab5/' },
      //         { text: '如何让你的笔记更有表现力', link: '/pages/dd027d/' },
      //         { text: '批量操作front matter工具', link: '/pages/2b8e22/' },
      //         { text: '部署', link: '/pages/0fc1d2/' },
      //         { text: '关于写文章和H1标题', link: '/pages/9ae0bd/' },
      //         { text: '关于博客搭建与管理', link: '/pages/26997d/' },
      //         { text: '在线编辑和新增文章的方法', link: '/pages/c5a54d/' },
      //       ]
      //     }
      //   ]
      // },
      {
        text: '后端开发', link: '/pages/9eee62/'
        // , items: [
        //   {
        //     text: 'Java基础', items: [
        //       { text: '01.Java并发编程', link: '/pages/9eee62/' },
        //       { text: '02.Java网络编程', link: '/pages/0d7ff8/' },
        //       // { text: '04.面试突击-下', link: '/pages/9fbb8a/' },
        //       // { text: '05.面试突击-上', link: '/pages/dcd014/' },
        //       // { text: '06.AQS源码分析', link: '/pages/63d524/' },
        //       // { text: '07.ConcurrentHashMap源码分析', link: '/pages/02a13e/' },
        //     ]
        //   },
        //   {
        //     text: 'JVM虚拟机', items: [
        //       { text: '01.JVM虚拟机', link: '/pages/2b4756/' },
        //     ]
        //   },
        //   {
        //     text: 'MySQL', items: [
        //       { text: '01.MySQL面试题', link: '/pages/0d7ff8/' },
        //       { text: '02.MySQL高手实战', link: '/pages/7081ac/' }
        //     ]
        //   },
        //   {
        //     text: 'Redis', items: [
        //       { text: '01.基于电商场景的高并发Redis实战', link: '/pages/ef36f3/' },
        //       { text: '02.Redis面试题', link: '/pages/bb249b/' },
        //       { text: '03.Redisson分布式锁源码分析', link: '/pages/3a36be/' },
        //       { text: '04.Redis功能使用示例', link: '/pages/0ec929/' }
        //     ]
        //   },
        //   {
        //     text: 'Dubbo', items: [
        //       { text: '01.深入理解Dubbo系列', link: '/pages/4eecb5/' },
        //     ]
        //   },
        //   {
        //     text: '注册中心', items: [
        //       { text: '01.深入理解ZooKeeper系列', link: '/pages/8972df/' },
        //     ]
        //   },
        //   {
        //     text: '消息队列', items: [
        //       { text: '01.RocketMQ核心内容', link: '/pages/5019e0/' },
        //       { text: '02.基于电商场景的高并发RocketMQ实战', link: '/pages/4a7385/' },
        //     ]
        //   },
        //   {
        //     text: 'Netty', items: [
        //       { text: '01.Netty面试题', link: '/pages/e6a6b9/' },
        //     ]
        //   },
        //   {
        //     text: 'Linux', items: [
        //       { text: '01.常用Linux命令', link: '/pages/c9d7ee/' },
        //     ]
        //   },
        //   {
        //     text: '限流&熔断', items: [
        //       { text: '01.RateLimiter限流原理', link: '/pages/be61cb/' },
        //       { text: '02.Sentinel基本使用（转载）', link: '/pages/daa044/' },
              
        //     ]
        //   },
        // ]
      },
      {
        text: '推荐阅读', link: '/pages/e23511/', items: [
          { text: '简历优化', link: '/pages/d11814/', items: [
            { text: '01.高并发在简历上如何体现？', link: '/pages/e23511/' },
          ]},
          { text: '架构演变', link: '/pages/d11814/', items: [
            { text: '01.B 站百亿数据百万查询——关系链架构演进', link: '/pages/d11814/' },
            { text: '02.会员购交易系统架构演进', link: '/pages/020bd4/' },
            
          ]},
          
        ]
      },
      {
        text: '大厂面试', link: '/pages/91ee86/', items: [
          { text: '01.哔哩哔哩后端面试', link: '/pages/91ee86/' },
          { text: '02.滴滴后端一面', link: '/pages/c549c7/' },
          { text: '03.字节后端日常实习一面', link: '/pages/293b73/' },
          { text: '04.掌上先机后端面试', link: '/pages/79252a/' },
          { text: '05.滴滴后端二面', link: '/pages/b61ebe/' },
          { text: '06.快手后端一面', link: '/pages/297ce1/' },
          { text: '07.淘天提前批面试', link: '/pages/747af2/' },
          { text: '08.腾讯音乐校招Java后端一面', link: '/pages/522e9c/' },
          { text: '09.饿了么一面', link: '/pages/013716/' },
          { text: '10.美团财务科技后端一面', link: '/pages/a926d7/' },
          { text: '11.美团优选后端一面', link: '/pages/3c4b08/' },
          { text: '12.腾讯后端一面', link: '/pages/85f7c1/' },
        ]
      },
      {
        text: '笔试算法', link: '/pages/cf8be0/', items: [
          { text: '01.字节秋招高频算法汇总', link: '/pages/cf8be0/' },
          { text: '02.阿里秋招高频算法汇总', link: '/pages/271c01/' },
        ]
      }
      // {
      //   text: '配置', link: '/pages/a20ce8/', items: [
      //     { text: '主题配置', link: '/pages/a20ce8/' },
      //     { text: '首页配置', link: '/pages/f14bdb/' },
      //     { text: 'front matter配置', link: '/pages/3216b0/' },
      //     { text: '目录页配置', link: '/pages/54651a/' },
      //     { text: '添加摘要', link: '/pages/1cc523/' },
      //     { text: '修改主题颜色和样式', link: '/pages/f51918/' },
      //     { text: '评论栏', link: '/pages/ce175c/' },
      //   ]
      // },
      // { text: '资源', link: '/pages/db78e2/' },
      // { text: '案例', link: '/pages/5d571c/' },
      // { text: '问答', link: '/pages/9cc27d/' },
      // { text: '赞助', link: '/pages/1b12ed/' },

    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.png', // 导航栏logo
    repo: '1020325258/11come-Java', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    // docsDir: 'docs', // 编辑的文件夹
    // editLinks: true, // 编辑链接
    // editLinkText: '编辑',

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: { mode: 'structuring', collapsable: true }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    updateBar: { // 最近更新栏
      showToArticle: false, // 显示到文章页底部，默认true
      // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],

    pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    // contentBgStyle: 1,

    category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: '11来了', // 必需
      href: 'https://github.com/1020325258/11come-Java.git' // 可选的
    },
    social: { // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        // {
        //   iconClass: 'icon-youjian',
        //   title: '发邮件',
        //   link: 'mailto:894072666@qq.com'
        // },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/1020325258/11come-Java.git'
        },
        // {
        //   iconClass: 'icon-erji',
        //   title: '听音乐',
        //   link: 'https://music.163.com/#/playlist?id=755597173'
        // }
      ]
    },
    footer: { // 页脚信息
      createYear: 2024, // 博客创建年份
      copyrightInfo: '11来了版权所有 | <a href="http://beian.miit.gov.cn">豫ICP备2024063529号-1</a>', // 博客版权信息，支持a标签
    },
    htmlModules,
  },

  // 插件
  plugins: [
    // [require('./plugins/love-me'), { // 鼠标点击爱心特效
    //   color: '#11a8cd', // 爱心颜色，默认随机色
    //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    // }],

    ['fulltext-search'], // 全文搜索

    // ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    //   thirdparty: [ // 可选，默认 []
    //     {
    //       title: '在GitHub中搜索',
    //       frontUrl: 'https://github.com/search?q=', // 搜索链接的前面部分
    //       behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在npm中搜索',
    //       frontUrl: 'https://www.npmjs.com/search?q=',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q='
    //     }
    //   ]
    // }],

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode || '01293bffa6c3962016c08ba685c79d78'
      }
    ],

    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://jsd.cdn.zzko.cn/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      }
    ]
  ],

  markdown: {
    // lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/htmlModules.js',
  ]
}
