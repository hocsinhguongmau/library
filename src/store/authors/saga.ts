import { call, put, fork, takeLatest } from 'redux-saga/effects'

import { GET_AUTHORS_REQUEST, getAuthorsFailure, getAuthorsSuccess } from './action'
import { fetchAllAuthors } from '@/utils/backend-service'
import { iAuthor } from '@/types'

function* getAuthors() {
  try {
    const result: iAuthor[] = yield call(fetchAllAuthors)
    yield put(getAuthorsSuccess(result))
  } catch (error: any) {
    yield put(getAuthorsFailure(error.message))
  }
}

function* watchGetAuthorsRequest() {
  yield takeLatest(GET_AUTHORS_REQUEST, getAuthors)
}

const authorsSagas = [fork(watchGetAuthorsRequest)]

export default authorsSagas
