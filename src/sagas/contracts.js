import { call, put, takeLatest } from 'redux-saga/effects'

import { REQUEST_CONTRACTS, receiveContracts } from '../actions/contracts'
import { fetchContracts } from './utils/contracts'

function* getContracts(action) {
   try {
      const contracts = yield call(fetchContracts)
      yield put(receiveContracts(contracts))
   } catch (e) {
      console.log(e)
   }
}

function* contractsSaga() {
  yield takeLatest(REQUEST_CONTRACTS, getContracts)
}
