import { iBook } from '@/types/Book'
import {
  DataAction,
  GET_BOOK_DETAIL_FAILURE,
  GET_BOOK_DETAIL_REQUEST,
  GET_BOOK_DETAIL_SUCCESS
} from './fetchingAction'

const initialState: DataState = {
  data: null,
  isLoading: false,
  error: null
}

export interface DataState {
  data: iBook | null
  isLoading: boolean
  error: string | null
}

export const fetchingBookDetailReducer = (state = initialState, action: DataAction): DataState => {
  switch (action.type) {
    case GET_BOOK_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case GET_BOOK_DETAIL_SUCCESS:
      if ('payload' in action) {
        return {
          ...state,
          isLoading: false,
          data: action.payload.data
        }
      }
      return state
    case GET_BOOK_DETAIL_FAILURE:
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
