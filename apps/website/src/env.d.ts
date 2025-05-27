/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string
  // 如果有其他環境變數，可以在這裡添加
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
