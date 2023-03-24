import { iBook } from './../../types/Book'
import { call, put, fork, takeLatest } from 'redux-saga/effects'

import { GET_BOOKS_REQUEST, getBooksFailure, getBooksSuccess } from './action'
import { fetchAllBooks } from '@/utils/backend-service'

function* getBooks() {
  try {
    const result: iBook[] = yield call(fetchAllBooks)
    yield put(getBooksSuccess(result))
  } catch (error: any) {
    yield put(getBooksFailure(error.message))
  }
}

function* watchGetCountriesRequest() {
  yield takeLatest(GET_BOOKS_REQUEST, getBooks)
}

const booksSagas = [fork(watchGetCountriesRequest)]

export default booksSagas
