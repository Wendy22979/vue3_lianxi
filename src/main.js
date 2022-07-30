import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全部的element插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 引入清除样式
import "@/assets/style/comm.less"

// 引入组定义插件
import plugins from "./plugins"



const app = createApp(App) 
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(plugins)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
