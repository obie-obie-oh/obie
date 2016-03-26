import { combineReducers } from 'redux';

let messages = (state, action) => {
  return [{text: 'hi dude', person: 'nick'}, {text: 'can somebody help me with this', person: 'lyly'}, {text: 'i get so much puss', person: 'kartik'}]
}

const rootReducer = combineReducers({
  messages
});

export default rootReducer;