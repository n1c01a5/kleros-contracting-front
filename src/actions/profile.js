export const REQUEST_BALANCE = 'REQUEST_BALANCE'
export const RECEIVE_BALANCE = 'RECEIVE_BALANCE'

export const requestBalance = () => ({type: REQUEST_BALANCE})
export const receiveBalance = balance => ({type: RECEIVE_BALANCE, balance})
