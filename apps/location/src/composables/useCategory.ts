import { api } from '@/utils/request'

export const useCategory = () => {
  const getCategories = async () => {
    return api.get('/location/categories')
  }

  return {
    getCategories,
  }
}
