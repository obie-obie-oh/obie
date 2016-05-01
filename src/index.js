import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Router, browserHistory } from 'react-router'
import {reducer as formReducer} from 'redux-form';
import routes from './routes'
import reducers from './reducers'
import promise from 'redux-promise'

// console.log("IMPORTED REDUCER", reducers);

// const mainReducers = {
//   form: formReducer,
//   reducers: reducers
// }

//const reducer = combineReducers(mainReducers)

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.main'));
