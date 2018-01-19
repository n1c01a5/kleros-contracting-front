import { call, fork, put, select, take, takeLatest } from 'redux-saga/effects'

import balanceSaga, { getBalance } from './profile'
import { fetchProfile } from './utils/profile'
import * as actions from '../actions/profile'

describe('Profile saga', () => {
  const mockBalance = 42

  const generator = balanceSaga()

  it('check if this saga loads the REQUEST_BALANCE action', () => {
    expect(
      generator.next().value
    ).toEqual(
      fork(takeLatest, 'REQUEST_BALANCE', getBalance)
    )
  })
})
