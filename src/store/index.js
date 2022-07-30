import { createStore } from 'vuex'
import createPersistedstate from "vuex-persistedstate"
import user from "./modules/user"
import staff from "./modules/staff"

export default createStore({
  getters:{
    username:state=>state.user.userInfo.username
  },
  modules: {
    user,
    staff
  },
  plugins:[
    createPersistedstate({
      key:"vue3_project",
      path:["user"]
    })
  ]
  
})
