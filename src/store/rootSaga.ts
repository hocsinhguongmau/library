import { all } from 'redux-saga/effects'

import booksSagas from './books/fetching/fetchingSaga'
import bookDetailSagas from './bookDetail/fetching/fetchingSaga'
import fetchingAuthorsSagas from './authors/fetching/fetchingSaga'
import publishersSagas from './publishers/fetching/fetchingSaga'

export default function* rootSaga() {
  yield all([...booksSagas, ...bookDetailSagas, ...fetchingAuthorsSagas, ...publishersSagas])
}
