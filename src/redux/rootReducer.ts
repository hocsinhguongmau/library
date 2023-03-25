import { combineReducers } from '@reduxjs/toolkit'

import booksReducer from './features/book/booksSlice'
import themeReducer from './features/theme/themeSlice'

const rootReducer = combineReducers({
  theme: themeReducer,
  books: booksReducer
})

export default rootReducer
