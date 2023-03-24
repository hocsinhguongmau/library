import { iBook } from '@/types/Book'

export const GET_BOOKS_REQUEST = 'GET_BOOKS_REQUEST'
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS'
export const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE'

interface FetchBooksRequestAction {
  type: typeof GET_BOOKS_REQUEST
}

interface FetchBooksSuccessAction {
  type: typeof GET_BOOKS_SUCCESS
  payload: {
    data: iBook[]
  }
}

interface FetchBooksFailureAction {
  type: typeof GET_BOOKS_FAILURE
  payload: {
    error: string
  }
}

export function getBooksRequest(): FetchBooksRequestAction {
  return { type: GET_BOOKS_REQUEST }
}

export function getBooksSuccess(data: iBook[]): FetchBooksSuccessAction {
  return { type: GET_BOOKS_SUCCESS, payload: { data } }
}

export function getBooksFailure(error: string): FetchBooksFailureAction {
  return { type: GET_BOOKS_FAILURE, payload: { error } }
}

export type DataAction =
  | ReturnType<typeof getBooksRequest>
  | ReturnType<typeof getBooksSuccess>
  | ReturnType<typeof getBooksFailure>
