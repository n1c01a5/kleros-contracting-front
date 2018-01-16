import { RECEIVE_CONTRACTS } from '../actions/contracts'

export default (state=[], { type, contracts }) => {
    switch(type) {
      case RECEIVE_CONTRACTS:
        return contracts
      default:
        return state
    }
}
