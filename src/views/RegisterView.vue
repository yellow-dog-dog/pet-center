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
                <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.name"/>
            </el-form-item>
            <el-button type="primary">登录</el-button>
            <el-button type="default">
                <router-link to="/">返回首页</router-link>
            </el-button>
        </el-form>

    </div>
</template>

<script setup>
import {ref} from "vue";

let form = ref({
    name: '',
    password: ''
})
</script>

<style scoped>
.login-form {
    display: flex;
    align-items: center; /* 上下居中 */
    justify-content: center; /* 左右居中 */
    height: 100vh; /* 设置高度占满整个视窗 */
}

</style>
