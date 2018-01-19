import { call, fork, put, select, take, takeLatest } from 'redux-saga/effects'

import contractsSaga, { getContracts } from './contracts'
import { fetchContracts } from './utils/contracts'
import * as actions from '../actions/contracts'

describe('Contracts saga', () => {
  const mockContracts = [
    {
      address: '0x53515b1f04e12e72600d42020690522f2392e58f',
      arbitrator: '0xaea35f89f98996ae06aac344ab4b9ce1731059c4',
      description: 'qwerty',
      email: 'alice@mail.io',
      evidences: [],
      partyA: '0x32284083978a18835f9745a81365a0876f90819a',
      partyB: '0x32284083978a18835f9745a81365a0876f90819a',
      timeout: 42
    },
    {
      address: '0x33515b1f04e12e72600d42020690522f2392e58f',
      arbitrator: '0xaea35f89f98996ae06aac344ab4b9ce1731059c4',
      description: 'qwerty',
      email: 'bob@mail.io',
      evidences: [],
      partyA: '0x32284083978a18835f9745a81365a0876f90819a',
      partyB: '0x32284083978a18835f9745a81365a0876f90819a',
      timeout: 42
    },
  ]

  const generator = contractsSaga()

  it('check if this saga loads the REQUEST_CONTRACTS action', () => {
    expect(
      generator.next().value
    ).toEqual(
      fork(takeLatest, 'REQUEST_CONTRACTS', getContracts)
    )
  })
})
