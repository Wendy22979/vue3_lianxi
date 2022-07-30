// 路由守卫
import  store  from "@/store/index"

export default (router) =>{
  //白名单
const whiteList = ["/login","/404"]

// 前置路由守卫
router.beforeEach((to,from,next)=>{
  const {userInfo} = store.state.user
  if(userInfo.token.trim()!=""){
    // 判断是否去登录页,有token就放行,跳转到首页
    if(to.path == "/login"){
       next("/index")
    }else{
      next()
    }

  } else {
    let flag = whiteList.some((item)=>{
      return to.path === item
    })
    if(flag){
      next()
    }else{
     next("/login")
    }
  }

})
}

