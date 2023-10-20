<template>
    <div>
        <ul  class="infinite-list" style="overflow: auto">
            <!-- 使用 v-for 循环渲染宠物列表 -->
            <div v-for="(pet, index) in petList" :key="index" class="main">
                <!-- 左侧宠物预览图，占据1/4空间 -->
                <div class="preview">
                    <img style="max-height: 100px" :src="'/api/common/download/'+pet.fileName" alt="暂无图片"/>
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
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";

let petList = ref([
],)
onMounted(()=>{
  getPet()
})


async function getPet(){
  await axios.get("/api/pet/page",{
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }).then(res=>{
    if (res.data.code===1){
      petList.value=res.data.data.list
    }
  })
}
</script>

<style scoped>
/* 样式同上 */
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
