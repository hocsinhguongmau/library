import { all } from 'redux-saga/effects'
import booksSagas from './books/saga'
import bookDetailSagas from './bookDetail/saga'

export default function* rootSaga() {
  yield all([...booksSagas, ...bookDetailSagas])
}
