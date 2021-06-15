import getCookie from "~/utils/getCookie"
/**
 * 路由鉴权思路：
 * 1.先校验是否有登陆后的token，没有重定向到登录页；
 * 2.路由跳转时是否有该路由的权限
 * 下面演示的是使用cookie来存储token,使用store时需要搭配本地缓存来做
 */
export default function({ store, route, redirect, req }){
//  let isClient = process.client;
//  let isServer = process.server;
//  let token;
//  // 在服务端
//  if (isServer) {
//   // 获取服务端cookie
//   let cookies = getCookie.getcookiesInServer(req)
//   // 获取当前服务端cookie中是否含有token字段
//   token = cookies.token ? cookies.token : ""
//  }
//  // 在客户端
//  if (isClient) {
//   // 获取客户端（本地）cookie中的token字段
//   token = getCookie.getcookiesInClient("token")
//  }
//  // 判断是否获取到token
//  if (!token) {
//   redirect('/login')
//  }
}

