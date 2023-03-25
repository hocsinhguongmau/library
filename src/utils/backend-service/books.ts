import { iBook } from '@/types'
import { BACKEND_API_URL } from '@/constants'
import axios from 'axios'

export const fetchAllBooks = async () => {
  const response = await axios.get(`${BACKEND_API_URL}/books`)
  return response.data
}

export const addBookFunction = async (book: iBook) => {
  const response = await axios.post(`${BACKEND_API_URL}/books`, book)
  console.log('book is added', book)
  return response.data
}

export const updateBookFunction = async (id: number, book: iBook) => {
  const response = await axios.put(`${BACKEND_API_URL}/books/${id}`, book)
  console.log(`book ${id} is updated`, book)
  return response.data
}

export const removeBookFunction = async (id: number) => {
  const response = await axios.delete(`${BACKEND_API_URL}/books/${id}`)
  console.log(`book ${id} is deleted`)
  return response.data
}
