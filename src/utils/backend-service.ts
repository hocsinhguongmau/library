import { BACKEND_API_URL } from '@/constants'

export const fetchAllBooks = async () => {
  const result = await fetch(`${BACKEND_API_URL}/books`)
  const jsonResult = await result.json()
  return jsonResult
}

export const fetchBookDetail = async (id: string) => {
  const result = await fetch(`${BACKEND_API_URL}/books/${id}`)
  const jsonResult = await result.json()
  return jsonResult[0]
}

export const fetchAllPublishers = async () => {
  const result = await fetch(`${BACKEND_API_URL}/publishers`)
  const jsonResult = await result.json()
  return jsonResult
}

export const fetchPublisherDetail = async (id: string) => {
  const result = await fetch(`${BACKEND_API_URL}/publishers/${id}`)
  const jsonResult = await result.json()
  return jsonResult[0]
}

export const fetchAllAuthors = async () => {
  const result = await fetch(`${BACKEND_API_URL}/authors`)
  const jsonResult = await result.json()
  return jsonResult
}

export const fetchAuthorDetail = async (id: string) => {
  const result = await fetch(`${BACKEND_API_URL}/authors/${id}`)
  const jsonResult = await result.json()
  return jsonResult[0]
}
