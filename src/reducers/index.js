import { combineReducers } from 'redux'

import balance from './balance'
import contracts from './contracts'

export default combineReducers({
  balance,
  contracts
})
