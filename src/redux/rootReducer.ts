import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import booksReducer from './features/book/booksSlice'
import themeReducer from './features/theme/themeSlice'
import authorsReducer from './features/author/authorsSlice'
import categoriesReducer from './features/categories/categoriesSlice'
import publishersReducer from './features/publishers/publishersSlice'
import booksWithAuthorReducer from './features/book/booksWithAuthors'
import authReducer from './features/auth/authSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme', 'auth']
}

const rootReducer = combineReducers({
  theme: themeReducer,
  books: booksReducer,
  authors: authorsReducer,
  booksWithAuthor: booksWithAuthorReducer,
  categories: categoriesReducer,
  publishers: publishersReducer,
  auth: authReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
