<template>
  <div class="login-form">
    <el-form
        label-width="100px"
        :model="form"
        style="max-width: 460px"
    >
      <el-form-item label="用户名">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"/>
      </el-form-item>
      <el-button type="primary" @click="register(form.name,form.email,form.password)">注册</el-button>
      <el-button type="default">
        <a href="/">返回首页</a>
      </el-button>
    </el-form>

  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";
import {ElMessage, ElNotification} from "element-plus";
import router from "../router/router.js";

let form = ref({
  username: '',
  email: '',
  password: ''
})

async function register(username, email, password) {
  await axios.post("/api/user", {
    username: username,
    email: email,
    password: password
  })
      .then(async res => {
        if (res.data.code === 1) {
          ElNotification({
            title: '注册成功',
            message: '已为您自动登录:'+username,
            type: 'success',
          })
          await axios.post("/api/login", {email: username, password: password})
          setTimeout(()=>{router.push("/")},3000)
        }else {
          ElMessage.error('注册错误请稍后再试')
        }
      }).catch(res=>{
        ElMessage.error('注册错误请稍后再试')
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
