export const REQUEST_CONTRACTS = 'REQUEST_CONTRACTS'
export const RECEIVE_CONTRACTS = 'RECEIVE_CONTRACTS'
export const REQUEST_CONTRACT = 'REQUEST_CONTRACT'
export const RECEIVE_CONTRACT = 'RECEIVE_CONTRACT'

export const requestContracts = () => ({
  type: REQUEST_CONTRACTS
})

export const receiveContracts = contracts => ({
  type: RECEIVE_CONTRACTS,
  contracts
})

export const requestContract = () => ({
  type: REQUEST_CONTRACT
})

export const receiveContract = contract => ({
  type: RECEIVE_CONTRACT,
  contract
})
