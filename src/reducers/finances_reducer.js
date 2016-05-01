import { FETCH_PAYMENTS, FETCH_BILLS, FETCH_USERS } from '../actions/types'

const INITIAL_STATE = {
  payments: [],
  bills: [],
  users: []
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_PAYMENTS:
      return Object.assign({}, state, { payments: action.payload.data })
    case FETCH_BILLS:
      return Object.assign({}, state, { bills: action.payload.data })
    case FETCH_USERS:
      return Object.assign({}, state, { users: action.payload.data })
    default:
      return state
  }
}