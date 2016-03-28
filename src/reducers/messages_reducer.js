import { FETCH_MESSAGES } from '../actions'

const INITIAL_STATE = []

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_MESSAGES: 
      if (action.payload.data) {
        return [...state, ...action.payload.data]
      }
      return state
    default: 
      return state
  }
}