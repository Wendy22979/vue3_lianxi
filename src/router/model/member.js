// 会员
import Layout from "@/views/layout/layoutPage.vue"

export default {
  path:"/member",
  component:Layout,
  children:[
    {
      path:"",
      component:()=>import("@/views/member")
    }
  ]
}