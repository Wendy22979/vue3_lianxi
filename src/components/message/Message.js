import xtxMessage from "./xtx-message.vue";
import {createVNode,render} from "vue"


// 创建盒子
const div =document.createElement("div")
// 添加一个类名
div.class='xtx-message-container'
// 挂载body上
document.body.appendChild(div)

let timer = null;
// 为组件创建虚拟节点，调用才创建
export default ({type,text})=>{
  //  创建虚拟节点
  const vnode = createVNode(xtxMessage,{type,text});
  // 组件渲染到容器
  render(vnode, div);

  
  // 开启定时器
  clearTimeout(timer)
  timer = setTimeout(() => {
    render(null,div)
  },2000)

}