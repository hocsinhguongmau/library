import { BACKEND_API_URL } from '@/constants'
import axios from 'axios'

export const fetchAllPublishers = async () => {
  const response = await axios.get(`${BACKEND_API_URL}/publishers`)
  return response.data
}
