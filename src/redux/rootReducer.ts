import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import booksReducer from './features/book/booksSlice'
import themeReducer from './features/theme/themeSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme']
}

const rootReducer = combineReducers({
  theme: themeReducer,
  books: booksReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
