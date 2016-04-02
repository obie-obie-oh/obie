import React, { Component } from 'react'
import Bills from './bills.js'
import Payments from './payments.js'
import FinanceNavmenu from '../components/finance_navbar/finance_navmenu.js'


class Finances extends Component {
  render() {
    return (
      <article className="finances col-sm-9">
        <FinanceNavmenu />
        {this.props.children}
      </article>
    )
  }
}

export default Finances