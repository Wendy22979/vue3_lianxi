<template>
  <div>
    <el-menu
      background-color="rgb(84,92,100)"
      text-color="#fff"
      active-text-color="rgb(255,208,75)"
      default-active="/homepage"
      :router="true"
      class="el-menu-vertical-demo"
    >
      <el-menu-item index="/homepage">
        <!-- <el-icon><HomeFilled /></el-icon> -->
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/member">
        <!-- <el-icon><Avatar /></el-icon> -->
        <span>会员管理</span>
      </el-menu-item>
      <el-menu-item index="/supplier">
        <!-- <el-icon><Box /></el-icon> -->
        <span>供应商管理</span>
      </el-menu-item>
      <el-menu-item index="/goods">
        <!-- <el-icon><GoodsFilled /></el-icon> -->
        <span>商品管理</span>
      </el-menu-item>
      <el-menu-item index="/staff">
        <!-- <el-icon><HomeFilled /></el-icon> -->
        <span>员工管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.el-menu-item span{
  font-size: 20px;
}
.el-menu-item {
  margin-bottom:10px;
}
</style>