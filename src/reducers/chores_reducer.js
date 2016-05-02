import { FETCH_CHORES } from '../actions/types'

const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_CHORES:
      return action.payload.data
    default:
      return state
  }
}