import { call, put, takeLatest, fork } from 'redux-saga/effects'

import { REQUEST_BALANCE, receiveBalance } from '../actions/profile'
import { fetchProfile } from './utils/profile'

export function* getBalance(action) {
   try {
      const balance = yield call(fetchProfile)
      yield put(receiveBalance(balance))
   } catch (e) {
      console.log(e)
   }
}

export default function* balanceSaga() {
  yield fork(takeLatest, REQUEST_BALANCE, getBalance)
}
