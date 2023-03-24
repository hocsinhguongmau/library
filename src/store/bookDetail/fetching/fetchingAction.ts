import { iBook } from '@/types/'

export const GET_BOOK_DETAIL_REQUEST = 'GET_BOOK_DETAIL_REQUEST'
export const GET_BOOK_DETAIL_SUCCESS = 'GET_BOOK_DETAIL_SUCCESS'
export const GET_BOOK_DETAIL_FAILURE = 'GET_BOOK_DETAIL_FAILURE'

export interface FetchBookDetailRequestAction {
  type: typeof GET_BOOK_DETAIL_REQUEST
  payload: {
    name: string
  }
}

export interface FetchBookDetailSuccessAction {
  type: typeof GET_BOOK_DETAIL_SUCCESS
  payload: {
    data: iBook
  }
}

export interface FetchBookDetailFailureAction {
  type: typeof GET_BOOK_DETAIL_FAILURE
  payload: {
    error: string
  }
}

export function getBookDetailRequest(name: string): FetchBookDetailRequestAction {
  return { type: GET_BOOK_DETAIL_REQUEST, payload: { name } }
}

export function getBookDetailSuccess(data: iBook): FetchBookDetailSuccessAction {
  return { type: GET_BOOK_DETAIL_SUCCESS, payload: { data } }
}

export function getBookDetailFailure(error: string): FetchBookDetailFailureAction {
  return { type: GET_BOOK_DETAIL_FAILURE, payload: { error } }
}

export type DataAction =
  | ReturnType<typeof getBookDetailRequest>
  | ReturnType<typeof getBookDetailSuccess>
  | ReturnType<typeof getBookDetailFailure>
