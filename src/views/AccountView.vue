<template>
    <div class="account">
        <HeaderView/>
        <div class="updatePassword">
            <h3>修改密码：</h3>
            <el-form-item label="旧密码">
                <el-input v-model="form.oldPassword"/>
            </el-form-item>
            <el-form-item label="新密码">
                <el-input v-model="form.newPassword"/>
            </el-form-item>
            <el-button type="primary">更改密码</el-button>
        </div>
        <hr>
        <h3>我的发布:</h3>
        <div>
            <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
                <!-- 使用 v-for 循环渲染宠物列表 -->
                <div v-for="(pet, index) in petList" :key="index" class="main">
                    <!-- 左侧宠物预览图，占据1/4空间 -->
                    <div class="preview">
                        <img style="max-height: 100px" :src=pet.previewImage alt="暂无图片"/>
                    </div>

                    <!-- 右侧宠物信息 -->
                    <div class="info">
                        <!-- 第一排：名字、性别、年龄、品种 -->
                        <div class="info-row">
                            <div class="info-label">名字:</div>
                            <div class="info-value">{{ pet.name }}</div>
                            <div class="info-label">性别:</div>
                            <div class="info-value">{{ pet.gender }}</div>
                            <div class="info-label">年龄:</div>
                            <div class="info-value">{{ pet.age }}</div>
                            <div class="info-label">品种:</div>
                            <div class="info-value">{{ pet.breed }}</div>
                        </div>

                        <!-- 第二排：宠物描述 -->
                        <div class="info-row">
                            <div class="info-label">描述:</div>
                            <div class="info-value">{{ pet.description }}</div>
                        </div>

                        <!-- 第三排：发布者和发布日期 -->
                        <div class="info-row">
                            <div class="info-label">发布者:</div>
                            <div class="info-value">{{ pet.publisher }}</div>
                            <div class="info-label">发布日期:</div>
                            <div class="info-value">{{ pet.publishDate }}</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">主人邮箱</div>
                            <div class="info-value">{{ pet.email }}</div>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>

</template>
<script setup>
import HeaderView from "./HeaderView.vue";
import MainView from "./MainView.vue";
import {ref} from "vue";

let form = ref({
    oldPassword: '',
    newPassword: '',
})
//发布相关代码

let petList = ref([
    {
        previewImage: "/cheems2.png",
        name: "某某宠物1",
        gender: "雄性",
        age: "2岁",
        breed: "某某品种1",
        description: "这是一个可爱的宠物1，非常友善。",
        publisher: "某某用户1",
        publishDate: "2023-09-15",
        email:"12233212"
    },
    {
        previewImage: "/cheems2.png",
        name: "某某宠物2",
        gender: "雌性",
        age: "1岁",
        breed: "某某品种2",
        description: "这是一个可爱的宠物2，非常活泼。",
        publisher: "某某用户2",
        publishDate: "2023-09-16",
        email:"12233212"
    }, {
        previewImage: "/cheems2.png",
        name: "某某宠物2",
        gender: "雌性",
        age: "1岁",
        breed: "某某品种2",
        description: "这是一个可爱的宠物2，非常活泼。",
        publisher: "某某用户2",
        publishDate: "2023-09-16",
        email:"12233212"
    }, {
        previewImage: "/cheems2.png",
        name: "某某宠物2",
        gender: "雌性",
        age: "1岁",
        breed: "某某品种2",
        description: "这是一个可爱的宠物2，非常活泼。",
        publisher: "某某用户2",
        publishDate: "2023-09-16",
        email:"12233212"
    }, {
        previewImage: "/cheems2.png",
        name: "某某宠物2",
        gender: "雌性",
        age: "1岁",
        breed: "某某品种2",
        description: "这是一个可爱的宠物2，非常活泼。",
        publisher: "某某用户2",
        publishDate: "2023-09-16",
        email:"12233212"
    },
    // 更多宠物数据...
],)

</script>

<style scoped>
.main {
    box-shadow: 5px 5px 5px #777777;
    display: flex;
    margin: 20px;
    padding: 10px;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
}

.preview {
    flex: 1;
    padding: 10px;
}

.preview img {
    max-width: 100%;
    height: auto;
}

.info {
    flex: 3;
    padding: 10px;
}

.info-row {
    display: flex;
    margin-bottom: 10px;
}

.info-label {
    flex: 1;
    font-weight: bold;
    margin-right: 10px;
}

.info-value {
    flex: 6;
}
</style>