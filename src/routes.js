import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/app'
import Messages from './containers/messages'
import Finances from './containers/finances'
import Chores from './containers/chores'

export default (
  <Route path='/' component={App}>
    <Route path='finances' component={Finances} />
    <Route path='messages' component={Messages} />
    <Route path='chores' component={Chores} />
  </Route>
)
