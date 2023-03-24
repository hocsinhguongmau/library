import { iAuthor } from '@/types'

export const GET_AUTHORS_REQUEST = 'GET_AUTHORS_REQUEST'
export const GET_AUTHORS_SUCCESS = 'GET_AUTHORS_SUCCESS'
export const GET_AUTHORS_FAILURE = 'GET_AUTHORS_FAILURE'

interface FetchAuthorsRequestAction {
  type: typeof GET_AUTHORS_REQUEST
}

interface FetchAuthorsSuccessAction {
  type: typeof GET_AUTHORS_SUCCESS
  payload: {
    data: iAuthor[]
  }
}

interface FetchAuthorsFailureAction {
  type: typeof GET_AUTHORS_FAILURE
  payload: {
    error: string
  }
}

export function getAuthorsRequest(): FetchAuthorsRequestAction {
  return { type: GET_AUTHORS_REQUEST }
}

export function getAuthorsSuccess(data: iAuthor[]): FetchAuthorsSuccessAction {
  return { type: GET_AUTHORS_SUCCESS, payload: { data } }
}

export function getAuthorsFailure(error: string): FetchAuthorsFailureAction {
  return { type: GET_AUTHORS_FAILURE, payload: { error } }
}

export type DataAction =
  | ReturnType<typeof getAuthorsRequest>
  | ReturnType<typeof getAuthorsSuccess>
  | ReturnType<typeof getAuthorsFailure>
