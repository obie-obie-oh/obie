import { combineReducers } from 'redux'
import messages from './messages_reducer'

const rootReducer = combineReducers({
  messages
})

export default rootReducer