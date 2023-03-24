import { combineReducers } from 'redux'

import { fetchingPublishersReducer } from './publishers/fetching/fetchingReducer'
import { fetchingBookDetailReducer } from './bookDetail/fetching/fetchingReducer'
import { fetchingBooksReducer } from './books/fetching/fetchingReducer'
import { fetchingAuthorsReducer } from './authors/fetching/fetchingReducer'
import themeReducer from './themes/reducer'

const rootReducer = combineReducers({
  books: fetchingBooksReducer,
  bookDetail: fetchingBookDetailReducer,
  authors: fetchingAuthorsReducer,
  publishers: fetchingPublishersReducer,
  theme: themeReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
