import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

// 建立 axios 實例
const request: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5174/api', // API 基礎 URL，可以根據需要修改
  timeout: 10000, // 請求超時時間 (10秒)
  headers: {
    'Content-Type': 'application/json',
  },
})

// 請求攔截器
request.interceptors.request.use(
  (config) => {
    // 在發送請求前做些什麼
    console.log('發送請求:', config.url)

    // 如果有 token，可以自動加入 Authorization header
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    // 對請求錯誤做些什麼
    console.error('請求錯誤:', error)
    return Promise.reject(error)
  },
)

// 回應攔截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    // 對回應資料做些什麼
    console.log('收到回應:', response.status)
    return response
  },
  (error) => {
    // 對回應錯誤做些什麼
    console.error('回應錯誤:', error)

    // 處理常見的 HTTP 錯誤狀態
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 未授權，可能需要重新登入
          console.error('未授權，請重新登入')
          // 可以在這裡處理登出邏輯
          break
        case 403:
          console.error('禁止訪問')
          break
        case 404:
          console.error('資源不存在')
          break
        case 500:
          console.error('伺服器錯誤')
          break
        default:
          console.error(`HTTP 錯誤: ${error.response.status}`)
      }
    } else if (error.request) {
      // 請求已發出但沒有收到回應
      console.error('網路錯誤，請檢查網路連線')
    } else {
      // 其他錯誤
      console.error('請求設定錯誤:', error.message)
    }

    return Promise.reject(error)
  },
)

// 封裝常用的 HTTP 方法
export const api = {
  // GET 請求
  get: <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return request.get(url, config).then((response) => response.data)
  },

  // POST 請求
  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    return request.post(url, data, config).then((response) => response.data)
  },

  // PUT 請求
  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    return request.put(url, data, config).then((response) => response.data)
  },

  // DELETE 請求
  delete: <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return request.delete(url, config).then((response) => response.data)
  },

  // PATCH 請求
  patch: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    return request.patch(url, data, config).then((response) => response.data)
  },
}

// 匯出 axios 實例，以便需要時直接使用
export default request

// 使用範例：
/*
// 基本使用
api.get('/users').then(data => {
  console.log('使用者資料:', data)
})

// 帶參數的 GET 請求
api.get('/users', {
  params: { page: 1, limit: 10 }
}).then(data => {
  console.log('分頁資料:', data)
})

// POST 請求
api.post('/users', {
  name: 'John Doe',
  email: 'john@example.com'
}).then(data => {
  console.log('建立的使用者:', data)
})

// 使用 TypeScript 類型
interface User {
  id: number
  name: string
  email: string
}

api.get<User[]>('/users').then(users => {
  users.forEach(user => {
    console.log(`${user.name}: ${user.email}`)
  })
})
*/
