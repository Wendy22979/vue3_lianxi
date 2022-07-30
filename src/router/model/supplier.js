// 供应商
// 员工管理
import Layout from "@/views/layout/layoutPage.vue"

export default {
  path:"/supplier",
  component:Layout,
  children:[
    {
      path:"",
      component:()=>import("@/views/supplier")
    }
  ]
}