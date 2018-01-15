import { all, fork } from 'redux-saga/effects'

import apiSaga from './api'
import balanceSaga from './profile'

export default function* rootSaga() {
  yield all([
    fork(balanceSaga)
  ])
}
