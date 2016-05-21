import { combineReducers } from 'redux'
import { roommateMessages, landlordMessages } from './messages_reducer'
import chores from './chores_reducer'
import finances from './finances_reducer'
import house from './house_reducer'
import user from './user_reducer'
import { reducer as form } from 'redux-form'

import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  messages: roommateMessages,
  landlordMessages,
  chores,
  finances,
  house,
  user,
  routing: routerReducer,
  form
})

export default rootReducer