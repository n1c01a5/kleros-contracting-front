import { RECEIVE_API_DATA } from '../actions'

export default (state=0, {type, data}) => {
  switch(type) {
    case RECEIVE_API_DATA:
      return data
    default:
      return state
  }
}
