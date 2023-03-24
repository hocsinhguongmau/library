import { iPublisher } from '@/types'
import {
  DataAction,
  GET_PUBLISHERS_FAILURE,
  GET_PUBLISHERS_REQUEST,
  GET_PUBLISHERS_SUCCESS
} from './fetchingAction'

const initialState: DataState = {
  data: [],
  isLoading: false,
  error: null
}

export interface DataState {
  data: iPublisher[]
  isLoading: boolean
  error: string | null
}

export const fetchingPublishersReducer = (state = initialState, action: DataAction): DataState => {
  switch (action.type) {
    case GET_PUBLISHERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case GET_PUBLISHERS_SUCCESS:
      if ('payload' in action) {
        return {
          ...state,
          isLoading: false,
          data: action.payload.data
        }
      }
      return state
    case GET_PUBLISHERS_FAILURE:
      if ('payload' in action) {
        return {
          ...state,
          isLoading: false,
          error: action.payload.error
        }
      }
      return state
    default:
      return state
  }
}
