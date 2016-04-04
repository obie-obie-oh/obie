import React, { Component } from 'react'
import Bills from './bills'
import Payments from './payments'
import FinanceNavmenu from './finance_navmenu'


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