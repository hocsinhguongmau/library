import { BACKEND_API_URL } from '@/constants'

export const fetchAllCountries = async () => {
  const result = await fetch(`${BACKEND_API_URL}/all`)
  const jsonResult = await result.json()
  return jsonResult
}

export const fetchCountryDetail = async (name: string) => {
  const result = await fetch(`${BACKEND_API_URL}/name/${name}`)
  const jsonResult = await result.json()
  return jsonResult[0]
}

export const fetchAllBooks = async () => {
  const result = await fetch(`${BACKEND_API_URL}/books`)
  const jsonResult = await result.json()
  return jsonResult
}
