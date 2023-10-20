<template>
  <div class="login-form">
    <el-form
        label-width="100px"
        :model="form"
        style="max-width: 460px"
    >
      <el-form-item label="用户名或邮箱">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"/>
      </el-form-item>
      <el-button type="primary" @click="login(form.name,form.password)">登录</el-button>
      <el-button type="default">
        <a href="/">返回首页</a>
      </el-button>
    </el-form>

  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";
import { ElMessage } from 'element-plus'
import { ElNotification } from 'element-plus'
import router from "../router/router.js";

let form = ref({
  name: '',
  password: ''
})

async function login(name, password) {
  await axios.post("/api/login", {email: name, password: password}).then(res => {
    if (res.data.code === 1){
      ElNotification({
        title: '登录成功',
        message: '欢迎回来:'+res.data.data.username,
        type: 'success',
      })
      setTimeout(()=>{router.push("/")},3000)
    }else {
      ElMessage.error(res.data.data.msg)
    }

  }).catch(res=>{
    ElMessage.error('账户名或密码错误')
  })

}
</script>

<style scoped>
.login-form {
  display: flex;
  align-items: center; /* 上下居中 */
  justify-content: center; /* 左右居中 */
  height: 100vh; /* 设置高度占满整个视窗 */
}

</style>
