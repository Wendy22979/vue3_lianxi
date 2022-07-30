// 首页
import Layout from "@/views/layout/layoutPage.vue"

export default {
  path:"/homePage",
  component:Layout,
  children:[
    {
      path:"",
      component:()=>import("@/views/homepage")
    }
  ]
}