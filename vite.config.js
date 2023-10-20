import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 后端服务的地址
        changeOrigin: true, // 启用跨域
        // rewrite: (path) => path.replace(/^\/api/, ''), // 重写请求路径，将 /api 前缀去掉
      },
    },
  },
})
