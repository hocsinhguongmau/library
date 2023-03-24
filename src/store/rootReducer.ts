import { combineReducers } from 'redux'

import { publishersReducer } from './publishers/reducer'
import { authorsReducer } from './authors/reducer'
import themeReducer from './themes/reducer'
import { booksReducer } from './books/reducer'
import { bookDetailReducer } from './bookDetail/reducer'

const rootReducer = combineReducers({
  books: booksReducer,
  bookDetail: bookDetailReducer,
  authors: authorsReducer,
  publishers: publishersReducer,
  theme: themeReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
