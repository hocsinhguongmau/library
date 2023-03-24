import { combineReducers } from 'redux'

import themeReducer from './themes/reducer'
import { booksReducer } from './books/reducer'
import { bookDetailReducer } from './bookDetail/reducer'

const rootReducer = combineReducers({
  books: booksReducer,
  bookDetail: bookDetailReducer,
  theme: themeReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
