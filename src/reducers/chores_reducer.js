import {FETCH_CHORES} from '../actions'

const INITIAL_STATE = []
//research this

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_CHORES:
      return [...state, ...action.payload.data]
    default:
      return state
  }
}