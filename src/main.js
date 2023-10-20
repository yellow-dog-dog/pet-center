import { createApp } from 'vue'
import router from './router/router.js'
import APP from './App.vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

createApp(APP).use(router).use(ElementPlus).mount('#app')
