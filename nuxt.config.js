/**
 * config文件用来修改webpack和nuxt的默认配置
 */
export default {
  // 全局index页面默认配置
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'renderer', name: 'renderer', content: `webkit` },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: `NUXT,SSR` },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: 'https://at.alicdn.com/t/font_1276549_01dmqdh22x5j.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // 用于定义应用的全局（所有页面均需引用的）样式文件、模块或第三方库。
  css: [
    "@/assets/css/main.css"
  ],

  // 用于配置那些需要在 vue.js应用 实例化之前需要运行的 Javascript 插件，例如组件库
  plugins: [
    
  ],
  //router为路由设置中间件
  router: {
    middleware: ['auth']
  },
  //设置代理
  // proxy: [
  //   ['/api', {
  //     target: 'http://10.143.0.223:5555', //  api主机
  //     pathRewrite: {'^/api': '/'}
  //   }]
  // ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  //自定义进度条的配置,也可以自定义一个组件,显示路由切换时的加载状态
  loading: {
    color: '#2d8cf0',
    height: '3px'
  },
}
