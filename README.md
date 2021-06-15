# nuxt-base

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
# 注意事项：
1.nuxt默认是服务端渲染，由SSR渲染完成后返回给前端；
2.process.client只能说明当前运行环境是客户端；
3.服务器部署就是将整套代码放到服务器，nuxt build 打包后再执行nuxt start启动服务，服务器需要提供运行时Nodejs；
  静态站点部署和cli打包部署类似，都是将代码整体打包后给后端部署到服务器上；
4.layouts中的default默认会给每个pages页面添加效果，如果在有登录页的情况下，就不适用了，建议重新新建一个login.vue单独给不一样的login页面；




For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
