<template>
    <div class="pet-details">
        <!-- 左侧宠物图片 -->
        <div class="pet-image">
            <img :src="pet.previewImage" alt="宠物图片" />
        </div>

        <!-- 右侧宠物信息 -->
        <div class="pet-info">
            <!-- 第一排：名字、性别、年龄 -->
            <div class="info-row">
                <div class="info-label">名字:</div>
                <div class="info-value">{{ pet.name }}</div>
                <div class="info-label">性别:</div>
                <div class="info-value">{{ pet.gender }}</div>
                <div class="info-label">年龄:</div>
                <div class="info-value">{{ pet.age }}</div>
            </div>

            <!-- 第二排：宠物描述 -->
            <div class="info-row">
                <div class="info-label">描述:</div>
                <div class="info-value">{{ pet.description }}</div>
            </div>

            <!-- 第三排：发布时间 -->
            <div class="info-row">
                <div class="info-label">发布时间:</div>
                <div class="info-value">{{ pet.publishDate }}</div>
            </div>

            <!-- 第四排：宠物主人信息 -->
            <div class="info-row">
                <div class="info-label">主人手机号:</div>
                <div class="info-value">{{ pet.ownerPhoneNumber }}</div>
                <div class="info-label">主人邮箱:</div>
                <div class="info-value">{{ pet.ownerEmail }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
let pet=ref({
    previewImage:'',
    name:'',
    gender:'',
    age:'',
    description:'',
    publishDate:'',
    ownerPhoneNumber:'',
    ownerEmail:''


})
</script>

<style scoped>
.pet-details {
    display: flex;
    padding: 20px;
}

.pet-image {
    width: 30%;
    padding-right: 20px;
}

.pet-image img {
    max-width: 100%;
    height: auto;
}

.pet-info {
    width: 70%;
}

.info-row {
    display: flex;
    margin-bottom: 10px;
}

.info-label {
    flex: 1;
    font-weight: bold;
    margin-right: 5px;
}

.info-value {
    flex: 2;
}
</style>
