<template>
  <el-card class="box-card clearfix">
    <div class="left fl" v-show="leftShow">
      <slot name="left"> </slot>
    </div>

    <div class="right fr" v-show="rightShow">
      <slot name="right"> </slot>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "headerCard",
  props: {
    leftShow: {
      type: Boolean,
      default: true,
    },
    rightShow: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="less" scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 100%;
  height: 60px;
  line-height: 60px;
}
/deep/.el-card__body {
  padding-top: 0;
}
</style>