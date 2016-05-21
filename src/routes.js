import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
import App from './components/app'
import House from './components/house'
import Messages from './components/messages/messages'
import RoommateMessages from './components/messages/roommate_messages'
import LandlordMessages from './components/messages/landlord_messages'
import Finances from './components/finances/finances'
import Bills from './components/finances/bills'
import Payments from './components/finances/payments'
import ChargeForm from './components/finances/charge_form'
import Chores from './components/chores/chores'
import ChoresList from './components/chores/chore_list'
import ChoresAssign from './components/chores/chores_assign'
import Dashboard from './components/dashboard/dashboard'
import Login from './components/login/login'

export default (
  <Route path='/' component={App}>
    <IndexRedirect to='/house' />
    <Route path='house' component={House}>
      <IndexRedirect to='messages' />
      <Route path='messages' component={Messages}>
        <IndexRedirect to="roommates" />
        <Route path="roommates" component={RoommateMessages} />
        <Route path="landlord" component={LandlordMessages} />
      </Route>
      <Route path='todos' component={Chores} >
        <IndexRedirect to="list" />
        <Route path='list' component={ChoresList} />
        <Route path='add' component={ChoresAssign} />
      </Route>
      <Route path='finances' component={Finances}>
        <IndexRedirect to='payments' />
        <Route path='bills' component={Bills} />
        <Route path='payments' component={Payments} />
        <Route path='charge' component={ChargeForm} />
      </Route>
    </Route>
    <Route path="login" component={Login} />
    <Route path='dashboard' component={Dashboard}>

    </Route>
  </Route>
)
