<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column label="序号" width="180" type="index" :index="sort" />
    <el-table-column
      :prop="item.prop"
      :label="item.label"
      v-for="(item, index) in labelProp"
      :key="index"
    />
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" type="primary">编辑</el-button>
        <el-button size="small" type="danger">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页 -->
  <div class="demo-pagination-block">
    <el-pagination
      :currentPage="page.currentPage"
      :page-size="page.pageSize"
      :page-sizes="[5, 10, 15, 20]"
      :total="page.total"
      layout=" slot, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
      <span key="1">共{{ page.total }}条</span>
    </el-pagination>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  props: {
    tableData: {
      type: Array,
    },
    labelProp: {
      type: Array,
    },
    page: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    // 父组件更新表格数据的函数
    let update = inject("getsStaffList");
    // 每页序号起始值
    const sort = (index) => {
      return props.page.pageSize * (props.page.currentPage - 1) + index + 1;
    };
    // 页码改变函数
    const handleSizeChange = (num) => {
      // 更改每页条数
      emit("update:page", {
        ...props.page,
        pageSize: num,
      });
      // 更新页面
      update();
    };
    // 当前页面的点击事件
    const handleCurrentChange = (num) => {
      console.log(num);
      // 更改页面
      emit("update:page", {
        ...props.page,
        currentPage: num,
      });
      // 更新页面
      update();
    };
    return {
      sort,
      handleSizeChange,
      handleCurrentChange,
    };
  },
};
</script>

<style lang="less" scoped>
.demo-pagination-block {
  span {
    margin-right: 10px;
  }
}
</style>