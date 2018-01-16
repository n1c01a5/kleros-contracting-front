import { RECEIVE_CONTRACT } from '../actions/contracts'

export default (state={ contract: {} }, { type, contract }) => {
    switch(type) {
      case RECEIVE_CONTRACT:
        return contract
      default:
        return state
    }
}
