// 员工管理
import Layout from "@/views/layout/layoutPage.vue"

export default {
  path:"/staff",
  component:Layout,
  children:[
    {
      path:"",
      component:()=>import("@/views/staff")
    }
  ]
}