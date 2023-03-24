import { BACKEND_API_URL } from '@/constants'
import axios from 'axios'

export const fetchAllAuthors = async () => {
  const response = await axios.get(`${BACKEND_API_URL}/authors`)
  return response.data
}

export const fetchAuthorDetail = async (id: number) => {
  const response = await axios.get(`${BACKEND_API_URL}/authors/${id}`)
  return response.data[0]
}
