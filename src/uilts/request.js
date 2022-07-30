import store from "@/store";
import  axios from "axios"

// 导出基地址， 其它地方不是通过axios发请求的地方用上基地址
export const baseURL = 'http://2105b.9yuecloud.com/pro-api'

const request = axios.create({
  baseURL:process.env.VUE_APP_BASE_API, //"/api"
  timeout:5000
})

// 拦截器
request.interceptors.request.use(function (config) {
  let {userInfo} = store.state.user
  // token存在就将token加入请求头中
  if(userInfo.token.trim() !== ""){
    config.headers.Authorization = 'Bearer '+userInfo.token
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {

  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

// 请求处理
export default (url,method,submitData)=>{
    //请求地址，请求方式，提交的数据
    return request({
      url,
      method,
      [method.toLowerCase() === "get"? "params":"data"]:submitData
    })

}