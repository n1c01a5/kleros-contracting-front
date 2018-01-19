import * as profile from './profile'

describe('actions', () => {
  it('should create an action to request balance', () => {
    const expectedAction = {
      type: profile.REQUEST_BALANCE,
    }
    expect(profile.requestBalance()).toEqual(expectedAction)
  })

  it('should create an action to receive balance', () => {
    const balanceMock = 42
    const expectedAction = {
      type: profile.RECEIVE_BALANCE,
      balance: 42
    }
    expect(profile.receiveBalance(balanceMock)).toEqual(expectedAction)
  })
})
