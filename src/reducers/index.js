import { combineReducers } from 'redux'
import messages from './messages_reducer'
import chores from './chores_reducer'
import finances from './finances_reducer'

const rootReducer = combineReducers({
  messages,
  chores,
  finances
})

export default rootReducer