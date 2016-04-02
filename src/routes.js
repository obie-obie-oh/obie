import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
import App from './components/app'
import House from './components/house'
import Messages from './containers/messages'
import Finances from './containers/finances'
import Bills from './containers/bills'
import Payments from './containers/payments'
import Chores from './containers/chores'
import Dashboard from './containers/dashboard'

export default (
  <Route path='/' component={App}>
    <IndexRedirect from='/' to='/dashboard' />
    <Route path='house' component={House}>
      <Route path='finances' component={Finances}>
        <IndexRedirect from='finances' to='/house/finances/payments' />
        <Route path='bills' component={Bills} />
        <Route path='payments' component={Payments} />
        <Route path='charge' />
      </Route>
      <Route path='messages' component={Messages} />
      <Route path='chores' component={Chores} />
    </Route>
    <Route path='dashboard' component={Dashboard}>

    </Route>
  </Route>
)
