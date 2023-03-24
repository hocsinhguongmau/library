import { call, put, fork, takeLatest } from 'redux-saga/effects'

import { fetchBookDetail } from '@/utils/backend-service'
import {
  FetchBookDetailRequestAction,
  GET_BOOK_DETAIL_REQUEST,
  getBookDetailFailure,
  getBookDetailSuccess
} from './action'
import { iBook } from '@/types'

function* getBookDetail(action: FetchBookDetailRequestAction) {
  try {
    const result: iBook = yield call(fetchBookDetail, action.payload.name)
    yield put(getBookDetailSuccess(result))
  } catch (error: any) {
    yield put(getBookDetailFailure(error.message))
  }
}

function* watchGetBookDetailRequest() {
  yield takeLatest(GET_BOOK_DETAIL_REQUEST, getBookDetail)
}

const bookDetailSagas = [fork(watchGetBookDetailRequest)]

export default bookDetailSagas
