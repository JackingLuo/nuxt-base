import Cookie from "js-cookie"

export default {
 //获取服务端cookie
 getcookiesInServer: req => {
  let service_cookie = {};
  req && req.headers.cookie && req.headers.cookie.split(";").forEach(function (val) {
   let parts = val.split("=");
   service_cookie[parts[0].trim()] = (parts[1] || "").trim();
  });
  return service_cookie;
 },
 //获取客户端cookie
 getcookiesInClient: key =>{
  return Cookie.get(key) ? Cookie.get(key) : ""
 },
 //设置cookie
 setCookies:options=>{
  const {name, value} = options;
  Cookie.set(name,value);
 },
 //删除cookie
 removeCookies:key=>Cookie.remove(key)
}