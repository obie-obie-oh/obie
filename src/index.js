import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Router, browserHistory } from 'react-router'
import { reducer as formReducer } from 'redux-form';
import routes from './routes'
import reducers from './reducers'
import promise from 'redux-promise'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import style from '../style/sass/style.scss'


import auth from './middleware/auth'
const createStoreWithMiddleware = applyMiddleware(promise, auth)(createStore);

const store = createStoreWithMiddleware(reducers)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
  , document.querySelector('.main'));
