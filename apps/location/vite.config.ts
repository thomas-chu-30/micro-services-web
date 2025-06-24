import dotenv from 'dotenv'
import { fileURLToPath, URL } from 'node:url'
dotenv.config()

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '^/api': {
        target: process.env.VITE_API_PROXY_TARGET,
        changeOrigin: true,
        rewrite: (path) => path,
      },
    },
  },
})
