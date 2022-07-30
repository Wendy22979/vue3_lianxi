// 商品
import Layout from "@/views/layout/layoutPage.vue"

export default {
  path:"/goods",
  component:Layout,
  children:[
    {
      path:"",
      component:()=>import("@/views/goods")
    }
  ]
}