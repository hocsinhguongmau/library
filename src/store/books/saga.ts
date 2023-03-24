import { iBook } from './../../types/Book'
import { call, put, fork, takeLatest } from 'redux-saga/effects'

import { GET_BOOKS_REQUEST, getBooksFailure, getBooksSuccess } from './action'
import { fetchAllCountries } from '@/utils/backend-service'

function* getBooks() {
  try {
    const result: iBook[] = yield call(fetchAllCountries)
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
