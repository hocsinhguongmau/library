import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import booksReducer from './features/book/booksSlice'
import themeReducer from './features/theme/themeSlice'
import authorsReducer from './features/author/authorsSlice'
import categoriesReducer from './features/categories/categoriesSlice'
import publishersReducer from './features/publishers/publishersSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme']
}

const rootReducer = combineReducers({
  theme: themeReducer,
  books: booksReducer,
  authors: authorsReducer,
  categories: categoriesReducer,
  publishers: publishersReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
