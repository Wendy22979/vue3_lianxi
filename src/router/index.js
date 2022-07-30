import { createRouter, createWebHashHistory } from 'vue-router'
// 路由守卫
import routingGuard from "./routingGuard"

// 动态路由
import goods from "./model/goods"
import homepage from "./model/homepage"
import member from "./model/member"
import staff from "./model/staff"
import supplier from "./model/supplier"

// 动态组件
const dynamic = [
  goods,
  homepage,
  member,
  staff,
  supplier
]

const routes = [
  {
    path:"/",
    redirect:"/index"
  },
  {
    path:"/index",
    component:()=>import("@/views/layout/layoutPage.vue")
  },
  {
    path:"/login",
    component:()=>import("@/views/login")
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes:[...routes,...dynamic],
})

routingGuard(router)

export default router
