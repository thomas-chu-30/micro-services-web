/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string
  // 可以在這裡加入更多環境變數
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
