// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/', // ✅ 个人主页必须设为 "/"
  plugins: [vue()]
})

