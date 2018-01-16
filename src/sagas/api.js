import { call, put, takeLatest } from 'redux-saga/effects'

import { REQUEST_API_DATA, receiveApiData } from '../actions/actions'
import { fetchData } from './utils/api'

function* getApiData(action) {
   try {
      const balance = yield call(fetchData)
      yield put(receiveApiData(balance))
   } catch (e) {
      console.log(e)
   }
}

export default function* apiSaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData)
}
