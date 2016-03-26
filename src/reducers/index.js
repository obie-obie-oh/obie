import { combineReducers } from 'redux'
import messages from './messages_reducer'

// let messages = (state, action) => {
//   return [{text: 'hi dude', name: 'nick'}, {text: 'can somebody help me with this', name: 'lyly'}, {text: 'i get so much puss', name: 'kartik'}]
// }

const rootReducer = combineReducers({
  messages
})

export default rootReducer