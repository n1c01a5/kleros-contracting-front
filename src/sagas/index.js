import { all, fork } from 'redux-saga/effects'

import apiSaga from './api'
import balanceSaga from './profile'
import contractsSaga from './contracts'

export default function* rootSaga() {
  yield all([
    fork(balanceSaga)
  ])
}
