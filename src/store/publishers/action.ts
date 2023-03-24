import { iPublisher } from '@/types'

export const GET_PUBLISHERS_REQUEST = 'GET_PUBLISHERS_REQUEST'
export const GET_PUBLISHERS_SUCCESS = 'GET_PUBLISHERS_SUCCESS'
export const GET_PUBLISHERS_FAILURE = 'GET_PUBLISHERS_FAILURE'

interface FetchPublishersRequestAction {
  type: typeof GET_PUBLISHERS_REQUEST
}

interface FetchPublishersSuccessAction {
  type: typeof GET_PUBLISHERS_SUCCESS
  payload: {
    data: iPublisher[]
  }
}

interface FetchPublishersFailureAction {
  type: typeof GET_PUBLISHERS_FAILURE
  payload: {
    error: string
  }
}

export function getPublishersRequest(): FetchPublishersRequestAction {
  return { type: GET_PUBLISHERS_REQUEST }
}

export function getPublishersSuccess(data: iPublisher[]): FetchPublishersSuccessAction {
  return { type: GET_PUBLISHERS_SUCCESS, payload: { data } }
}

export function getPublishersFailure(error: string): FetchPublishersFailureAction {
  return { type: GET_PUBLISHERS_FAILURE, payload: { error } }
}

export type DataAction =
  | ReturnType<typeof getPublishersRequest>
  | ReturnType<typeof getPublishersSuccess>
  | ReturnType<typeof getPublishersFailure>
