import { combineReducers } from '@reduxjs/toolkit'

import booksReducer from './features/book/bookSlice'

const rootReducer = combineReducers({
  books: booksReducer
})

export default rootReducer
