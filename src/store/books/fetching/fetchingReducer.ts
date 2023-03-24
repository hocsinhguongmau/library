import { iBook } from '@/types'
import {
  DataAction,
  GET_BOOKS_FAILURE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS
} from './fetchingAction'

const initialState: DataState = {
  data: [],
  isLoading: false,
  error: null
}

export interface DataState {
  data: iBook[]
  isLoading: boolean
  error: string | null
}

export const fetchingBooksReducer = (state = initialState, action: DataAction): DataState => {
  switch (action.type) {
    case GET_BOOKS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case GET_BOOKS_SUCCESS:
      if ('payload' in action) {
        return {
          ...state,
          isLoading: false,
          data: action.payload.data
        }
      }
      return state
    case GET_BOOKS_FAILURE:
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
