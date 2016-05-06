import { FETCH_MESSAGES, FETCH_LANDLORD_MESSAGES } from '../actions/types'

const INITIAL_STATE = []

export function roommateMessages(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_MESSAGES:
      return action.payload.data
    default:
      return state
  }
}

export function landlordMessages(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_LANDLORD_MESSAGES:
      return action.payload.data
    default:
      return state
  }
}