import { combineReducers } from 'redux'

import themeReducer from './themes/reducer'

const rootReducer = combineReducers({
  theme: themeReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
