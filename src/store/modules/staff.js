import {getStaffList} from "@/api/staff"
// import message from "@/components/message/Message"
// import router from "@/router"

const state = ()=>{
  return {
    staffList:null,
  }
}
const mutations = {
  setStaffList(state,data){
    state.staffList = data
  }

}
const actions = {
  // 获取列表数据
  async getStaffList({commit},data){
    try{
      let res = await getStaffList(data)
      console.log(res)
      commit("setStaffList",res.msg.rows)
     return res
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
