import { call, put, fork, takeLatest } from 'redux-saga/effects'

import { GET_BOOKS_REQUEST, getBooksFailure, getBooksSuccess } from './fetchingAction'
import { fetchAllBooks } from '@/utils/backend-service'
import { iBook } from '@/types'

function* getBooks() {
  try {
    const result: iBook[] = yield call(fetchAllBooks)
    yield put(getBooksSuccess(result))
  } catch (error: any) {
    yield put(getBooksFailure(error.message))
  }
}

function* watchGetBooksRequest() {
  yield takeLatest(GET_BOOKS_REQUEST, getBooks)
}

const fetchingBooksSagas = [fork(watchGetBooksRequest)]

export default fetchingBooksSagas
