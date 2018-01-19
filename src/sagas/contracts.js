import { fork, call, put, takeLatest } from 'redux-saga/effects'

import { REQUEST_CONTRACTS, receiveContracts } from '../actions/contracts'
import { fetchContracts } from './utils/contracts'

export function* getContracts(action) {
   try {
      const contracts = yield call(fetchContracts)
      yield put(receiveContracts(contracts))
   } catch (e) {
      console.log(e)
   }
}

export default function* contractsSaga() {
  yield fork(takeLatest, REQUEST_CONTRACTS, getContracts)
}
