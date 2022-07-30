<template>
  <div class="common-layout">
    <el-container>
      <el-header class="layout-header">
        <TopNav/>
      </el-header>
      <el-container>
        <el-aside width="200px" class="layout-aside">
          <Sidebar/>
        </el-aside>
        <el-main >
         <Main/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Main from "./components/Main/mainPage.vue"
import Sidebar from "./components/Sidebar/sidbarPage.vue"
import TopNav from "./components/TopNav/topNavPage.vue"
export default {
  name:"LayoutPage",
  components:{
    Main,
    Sidebar,
    TopNav
  }
  
};
</script>

<style lang="less" scoped>
.layout-header{
  background-color: rgb(45,58,75);
}
.common-layout,.el-container{
  height: 100%;
}
.layout-aside {
  height: 100%;
  background-color: rgb(84,92,100);
  font-size: 20px;
}
</style>