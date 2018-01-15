import { call, put, takeLatest } from 'redux-saga/effects'

import { REQUEST_BALANCE, receiveBalance } from '../actions'
import { fetchProfile } from './utils/profile'

function* getBalance(action) {
   try {
      const balance = yield call(fetchProfile)
      yield put(receiveBalance(balance))
   } catch (e) {
      console.log(e)
   }
}

function* mySaga() {
  yield takeLatest(REQUEST_BALANCE, getBalance)
}
