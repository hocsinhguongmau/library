import { BACKEND_API_URL } from '@/constants'
import axios from 'axios'

export const fetchAllCategories = async () => {
  const response = await axios.get(`${BACKEND_API_URL}/categories.json`)
  return response.data
}
