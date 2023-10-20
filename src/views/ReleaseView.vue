<template>
    <div class="login-form">
        <el-form
            label-width="100px"
            :model="form"
            style="max-width: 460px"
        >
            <el-upload
                class="upload-demo"
                drag
                :on-success="handleUploadSuccess"
                action="/api/common/upload"
                multiple
            >
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                    拖动文件到此处或<em>点击此处上传</em>
                </div>
                <template #tip>
                    <div class="el-upload__tip">
                        不超过2Mb的jpg/png 文件
                    </div>
                </template>
            </el-upload>
            <el-form-item label="宠物名字">
                <el-input v-model="form.name"/>
            </el-form-item>

            <div class="mb-2 flex items-center text-sm">
                <el-radio-group v-model="form.gender" class="ml-4">
                    <el-radio label="雄性" size="large">雄性</el-radio>
                    <el-radio label="雌性" size="large">雌性</el-radio>
                </el-radio-group>
            </div>
            <el-form-item label="宠物年龄">
                <el-input v-model="form.age"/>
            </el-form-item>
            <el-form-item label="宠物品种">
                <el-input v-model="form.kind"/>
            </el-form-item>
            <el-form-item label="宠物描述">
                <el-input
                    v-model="form.description"
                    :autosize="{ minRows: 2, maxRows: 4 }"
                    type="textarea"
                    placeholder="请输入"
                />
            </el-form-item>
            <el-button type="primary" @click="release(form)">发布宠物</el-button>
            <el-button type="default">
                <a href="/">返回首页</a>
            </el-button>
        </el-form>

    </div>
</template>

<script setup>
import { UploadFilled } from '@element-plus/icons-vue'

import {ref} from "vue";
import axios from "axios";
import {ElNotification} from "element-plus";
function handleUploadSuccess(response) {
    console.log(response)
    form.value.fileName=response.data
    
}

let form = ref({
    fileName:'',
    name: '',
    gender: '',
    age: '',
    description: '',
    kind: '',
})
async function release(form){
  await axios.post("/api/pet",form).then(res=>{
    if (res.data.code===1){
      ElNotification({
        title: '发布成功',
        type: 'success',
      })
    }
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
