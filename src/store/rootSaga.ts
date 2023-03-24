import { all } from 'redux-saga/effects'

import booksSagas from './books/saga'
import bookDetailSagas from './bookDetail/saga'
import authorsSagas from './authors/saga'
import publishersSagas from './publishers/saga'

export default function* rootSaga() {
  yield all([...booksSagas, ...bookDetailSagas, ...authorsSagas, ...publishersSagas])
}
