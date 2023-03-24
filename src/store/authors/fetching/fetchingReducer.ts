import { iAuthor } from '@/types'
import {
  DataAction,
  GET_AUTHORS_FAILURE,
  GET_AUTHORS_REQUEST,
  GET_AUTHORS_SUCCESS
} from './fetchingAction'

const initialState: DataState = {
  data: [],
  isLoading: false,
  error: null
}

export interface DataState {
  data: iAuthor[]
  isLoading: boolean
  error: string | null
}

export const fetchingAuthorsReducer = (state = initialState, action: DataAction): DataState => {
  switch (action.type) {
    case GET_AUTHORS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case GET_AUTHORS_SUCCESS:
      if ('payload' in action) {
        return {
          ...state,
          isLoading: false,
          data: action.payload.data
        }
      }
      return state
    case GET_AUTHORS_FAILURE:
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
