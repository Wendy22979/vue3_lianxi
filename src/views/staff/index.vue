<template>
  <div>
    <HeaderCard>
      <template v-slot:left>
        <div class="left">
          <span class="span"></span>
          <span>员工管理</span>
        </div>
      </template>
    </HeaderCard>
    <TableList :tableData="staffList" :labelProp="labelProp" v-model:page="page"/>
  </div>
</template>

<script>
import HeaderCard from "@/components/headerCard";
import TableList from "@/components/tableList";
import { onMounted, ref, provide  } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    HeaderCard,
    TableList,
  },
  setup() {
    const store = useStore();
    const page = ref({
      currentPage:1,
      pageSize:3,
      total:0
    })
    // const currentPage = ref(1); //页码
    // const pageSize = ref(3); //每页数目
    // const total = ref(0); //总数
    const staffList = ref([]); //初始化列表
    const labelProp = ref([]);//传过去的表头及绑定的数据
    const getsStaffList = async() => {
      let { msg: { count, rows }, } = await store.dispatch("staff/getStaffList",
       {
        currentPage: page.value.currentPage,
        pageSize: page.value.pageSize,
      });
      page.value.total= count;
      staffList.value = rows;
      labelProp.value = [
        {label:"账号",prop:"username"},
        {label:"姓名",prop:"name"},
        {label:"年龄",prop:"age"},
        {label:"电话",prop:"mobile"},
        {label:"薪酬",prop:"salary"},
        {label:"入职时间",prop:"entryDate"},
      ]
    };
    //将更新数据函数发送给子代
    provide("getsStaffList",getsStaffList)

    onMounted( () => {
      getsStaffList()//初始化员工列表请求
    });
    return {
      page,
      staffList,
      labelProp,
      getsStaffList,
    };
  },
};
</script>

<style lang="less" scoped>
.left {
  font-size: 18px;
}
.span {
  display: inline-block;
  width: 3px;
  height: 24px;
  background-color: rgb(49, 193, 123);
  vertical-align: middle;
  margin-right: 10px;
}
</style>