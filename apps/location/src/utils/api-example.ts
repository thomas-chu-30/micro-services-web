import { api } from './request'

// 定義資料類型
interface User {
  id: number
  name: string
  email: string
}

interface Location {
  id: number
  name: string
  address: string
  latitude: number
  longitude: number
}

// API 使用範例
export const userApi = {
  // 取得所有使用者
  getUsers: () => api.get<User[]>('/users'),

  // 取得單一使用者
  getUser: (id: number) => api.get<User>(`/users/${id}`),

  // 建立使用者
  createUser: (userData: Omit<User, 'id'>) => api.post<User>('/users', userData),

  // 更新使用者
  updateUser: (id: number, userData: Partial<User>) => api.put<User>(`/users/${id}`, userData),

  // 刪除使用者
  deleteUser: (id: number) => api.delete(`/users/${id}`),
}

export const locationApi = {
  // 取得所有地點
  getLocations: () => api.get<Location[]>('/locations'),

  // 取得單一地點
  getLocation: (id: number) => api.get<Location>(`/locations/${id}`),

  // 建立地點
  createLocation: (locationData: Omit<Location, 'id'>) =>
    api.post<Location>('/locations', locationData),

  // 更新地點
  updateLocation: (id: number, locationData: Partial<Location>) =>
    api.put<Location>(`/locations/${id}`, locationData),

  // 刪除地點
  deleteLocation: (id: number) => api.delete(`/locations/${id}`),
}

// 使用範例：
/*
// 在 Vue 組件中使用
import { userApi, locationApi } from '@/utils/api-example'

// 在 setup 或 methods 中
const fetchUsers = async () => {
  try {
    const users = await userApi.getUsers()
    console.log('使用者列表:', users)
  } catch (error) {
    console.error('取得使用者失敗:', error)
  }
}

const createNewUser = async () => {
  try {
    const newUser = await userApi.createUser({
      name: '張三',
      email: 'zhang@example.com'
    })
    console.log('新使用者:', newUser)
  } catch (error) {
    console.error('建立使用者失敗:', error)
  }
}

const fetchLocations = async () => {
  try {
    const locations = await locationApi.getLocations()
    console.log('地點列表:', locations)
  } catch (error) {
    console.error('取得地點失敗:', error)
  }
}
*/
