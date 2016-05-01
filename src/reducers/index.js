import { combineReducers } from 'redux'
import messages from './messages_reducer'
import chores from './chores_reducer'
import finances from './finances_reducer'
import {reducer as form} from 'redux-form'

const rootReducer = combineReducers({
  messages,
  chores,
  finances,
  form
})

export default rootReducer