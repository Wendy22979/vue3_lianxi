import {userNameLogin} from "@/api/user"
import {parseJson}  from "@/uilts/localStorage"
import message from "@/components/message/Message"
import router from "@/router"

const state = ()=>{
  return {
    userInfo:{
      username:"",
      token:parseJson("vue3_project")?parseJson("vue3_project").user.userInfo.token:" "
    }
  }
}
const mutations = {
  SET_USER_INFO(state,data){
    state.userInfo = data
  }

}
const actions = {
  // 获取登录初始化数据
  async getLoginInfo({commit},data){
    try{
      let {username,password} = data
      let res = await userNameLogin({ username, password })
      commit("SET_USER_INFO",{token:res.data.token,username:username})

      // 登录成功,发东信息
      message({type:"success",text:"登录成功"})

      // 跳转页面
      router.push("/")
    
    }catch(error){
    console.log(error)
    }

   }
}


export default {
  namespaced:true,
  state,
  actions,
  mutations
}
