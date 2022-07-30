// 登录表单校验规则
export default {
  username(value){
   if(!value)return "请输入账号"
   return true
  },
  password(value){
   if(!value) return "输入密码不能为空";
   if(!/^\w{5,24}/.test(value)) return '密码要5-24个字符'
   return true
  }
}