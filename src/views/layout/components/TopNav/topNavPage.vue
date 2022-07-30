<template>
  <el-row justify="space-between" align="middle">
    <el-col :span="12">
      <h1 class="title">星空会员管理系统</h1>
    </el-col>
    <el-col :span="2">
      <el-dropdown>
        <span class="el-dropdown-link">
          {{username}}
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const username = store.state.user.userInfo.username;
    return {
      username,
    };
  },
};
</script>

<style lang="less" scoped>
.el-row {
  color: #fff;
  height: 100%;
}
.block-col-2 .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.el-dropdown{
  color:#fff;
  font-size: 18px;
}
/deep/  .el-dropdown-menu__item {
  font-size: 18px;
  margin-bottom:10px;
}
</style>