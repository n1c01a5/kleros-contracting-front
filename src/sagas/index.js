import { all, fork } from 'redux-saga/effects'

import balanceSaga from './profile'
import contractsSaga from './contracts'

export default function* rootSaga() {
  yield all([
    fork(balanceSaga),
    fork(contractsSaga)
  ])
}
