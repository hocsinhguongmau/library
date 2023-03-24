import { call, put, fork, takeLatest } from 'redux-saga/effects'

import { iPublisher } from '@/types'
import {
  GET_PUBLISHERS_REQUEST,
  getPublishersFailure,
  getPublishersSuccess
} from './fetchingAction'
import { fetchAllPublishers } from '@/utils/backend-service'

function* getPublishers() {
  try {
    const result: iPublisher[] = yield call(fetchAllPublishers)
    yield put(getPublishersSuccess(result))
  } catch (error: any) {
    yield put(getPublishersFailure(error.message))
  }
}

function* watchGetPublishersRequest() {
  yield takeLatest(GET_PUBLISHERS_REQUEST, getPublishers)
}

const fetchingPublishersSagas = [fork(watchGetPublishersRequest)]

export default fetchingPublishersSagas
