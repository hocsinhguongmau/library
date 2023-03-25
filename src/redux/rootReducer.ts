import { combineReducers } from '@reduxjs/toolkit'

import booksReducer from './features/book/booksSlice'
import authorsReducer from './features/author/authorsSlice'
import themeReducer from './features/theme/themeSlice'

const rootReducer = combineReducers({
  theme: themeReducer,
  books: booksReducer,
  authors: authorsReducer
})

export default rootReducer
