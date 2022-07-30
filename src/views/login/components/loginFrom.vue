<template>
  <Form
    class="form"
    :validation-schema="scheam"
    autocomplete="off"
    v-slot="{ errors }"
    ref="loginRef"
  >
    <div class="form-item">
      <div class="input">
        <i class="iconfont icon-user"></i>
        <Field 
        type="text" 
        placeholder="请输入账号" 
        v-model="from.username" 
        name="username"/>
      </div>
      <div class="error" v-show="errors.username">
        <i class="iconfont icon-warning" />{{ errors.username }}
      </div>
    </div>
    <div class="form-item">
      <div class="input">
        <i class="iconfont icon-lock"></i>
        <Field
          type="password"
          placeholder="请输入密码"
          v-model="from.password"
          name="password"
        />
      </div>
      <div class="error" v-show="errors.password">
        <i class="iconfont icon-warning" />{{ errors.password }}
      </div>
    </div>
    <div class="form-item">
      <el-button type="primary" @click="btnLogin">登录</el-button>
    </div>
  </Form>
</template>

<script>
import { Field, Form } from "vee-validate";
import {useStore}  from "vuex";
import message from "@/components/message/Message"

// 密码校验规则
import rules from "./rules";
import {ref} from "vue"
export default {
  name: "LoginFrom",
  components: {
    Field,
    Form,
  },
  setup() {
    const store = useStore()
    // 表单ref获取
     let loginRef = ref(null)
    // 定义一个表单变量
    const from = ref({
      username: "",
      password: "",
    });
    const scheam = {
      username:rules.username,
      password:rules.password,
    };
    // 登录验证按钮
    const btnLogin = async ()=>{
      // 表单验证，返回的是一个promise对象
      const valid = await loginRef.value.validate()
      if(valid){
        // 验证成功就请求
       store.dispatch("user/getLoginInfo",from.value)
        
      }else {
        message({ type: 'error', text: '验证失败' })
      }
      
    }


    return {
      from,
      scheam,
      btnLogin,
      loginRef
    };
  },
};
</script>

<style lang="less" scoped>
.form {
  padding: 0 40px;
  margin-top: 15px;
  &-item {
    margin-bottom: 28px;
    width: 100%;
    .input {
      position: relative;
      height: 36px;
      > i {
        width: 34px;
        height: 34px;
        background: #cfcdcd;
        color: #fff;
        position: absolute;
        left: 1px;
        top: 1px;
        text-align: center;
        line-height: 34px;
        font-size: 18px;
      }
      input {
        padding-left: 44px;
        border: 1px solid #cfcdcd;
        height: 36px;
        line-height: 36px;
        width: 100%;
      }
    }
    .el-button {
      width: 100%;
    }
    .error {
      color: @priceColor;
    }
  }
}
</style>