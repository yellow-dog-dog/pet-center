<template>
    <el-container>
        <el-header class="sticky-header">
            <!-- 网站标题和导航菜单 -->
            <div class="header-content">
                <div class="site-title">
                    <h1>宠物领养中心</h1>
                </div>
                <el-menu :default-active="activeMenuItem" mode="horizontal" style="width: 500px">
                    <el-menu-item index="home"><router-link to="/">首页</router-link></el-menu-item>
                    <el-menu-item index="login"><router-link to="/login">登录</router-link></el-menu-item>
                    <el-menu-item index="register"><router-link to="/register">注册</router-link></el-menu-item>
                    <el-menu-item index="account"><router-link to="/release">发布</router-link></el-menu-item>
                    <el-menu-item index="account"><router-link to="/account">账户</router-link></el-menu-item>
                </el-menu>
            </div>
        </el-header>
    </el-container>
</template>

<script setup>
import { ref } from "vue";
let activeMenuItem = ref("home");

</script>

<style scoped>
/* 样式可以根据需要自定义 */
.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff; /* 设置背景颜色为不透明的白色 */
    padding: 10px 20px;
}
.sticky-header {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000; /* 使头部位于其他内容的上方 */
}

.site-title {
    font-size: 12px;
    color: #333;
}

el-menu {
    border: none;
}

el-menu-item {
    padding: 0 20px;
}
</style>
