export const REQUEST_API_DATA = 'REQUEST_API_DATA'
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA'

export const REQUEST_BALANCE = 'REQUEST_BALANCE'
export const RECEIVE_BALANCE = 'RECEIVE_BALANCE'

export const requestApiData = () => ({type: REQUEST_API_DATA})
export const receiveApiData = data => ({type: RECEIVE_API_DATA, data})

export const requestBalance = () => ({type: REQUEST_BALANCE})
export const receiveBalance = balance => ({type: RECEIVE_BALANCE, balance})
