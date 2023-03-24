import { fetchCountryDetail } from '@/utils/backend-service'
import { call, put, fork, takeLatest } from 'redux-saga/effects'

import {
  FetchBookDetailRequestAction,
  GET_BOOK_DETAIL_REQUEST,
  getBookDetailFailure,
  getBookDetailSuccess
} from './action'

import { iBook } from '@/types'

function* getBookDetail(action: FetchBookDetailRequestAction) {
  try {
    const result: iBook = yield call(fetchCountryDetail, action.payload.name)
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
