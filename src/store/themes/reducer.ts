import { ThemeAction, SET_THEME } from './action'

export type ThemeState = {
  theme: 'light' | 'dark'
}

const initialState: ThemeState = {
  theme: 'light'
}

const themeReducer = (state = initialState, action: ThemeAction) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload
      }
    default:
      return state
  }
}

export default themeReducer
