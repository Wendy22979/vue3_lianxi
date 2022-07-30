1、默认子路由不显示

原因：默认路由中多加了一个空格

2、provide与inject的传参接收undefined

原因：inject函数接收数据，不是在setup中接收的，而是在点击事件处理函数内接收，导致接收值为undefined