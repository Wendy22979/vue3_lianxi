import message from "@/components/message/Message" //消息弹框组件

export default {
  install(app){
       // 挂载全局属性   组件实例中调用  this.$message
    app.config.globalProperties.$message = message
  }
}