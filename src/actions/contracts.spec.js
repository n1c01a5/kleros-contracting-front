import * as contracts from './contracts'

describe('actions', () => {
  it('should create an action to request contracts', () => {
    const expectedAction = {
      type: contracts.REQUEST_CONTRACTS,
    }
    expect(contracts.requestContracts()).toEqual(expectedAction)
  })

  it('should create an action to receive contracts', () => {
    const contractsMock = []
    const expectedAction = {
      type: contracts.RECEIVE_CONTRACTS,
      contracts: []
    }
    expect(contracts.receiveContracts(contractsMock)).toEqual(expectedAction)
  })

  it('should create an action to request contract', () => {
    const expectedAction = {
      type: contracts.REQUEST_CONTRACT,
    }
    expect(contracts.requestContract()).toEqual(expectedAction)
  })

  it('should create an action to receive contract', () => {
    const contractMock = {}
    const expectedAction = {
      type: contracts.RECEIVE_CONTRACT,
      contract: {}
    }
    expect(contracts.receiveContract(contractMock)).toEqual(expectedAction)
  })
})
