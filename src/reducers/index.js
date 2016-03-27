import { combineReducers } from 'redux'
import messages from './messages_reducer'
import chores from './chores_reducer'

const rootReducer = combineReducers({
  messages,
  chores
})

export default rootReducer