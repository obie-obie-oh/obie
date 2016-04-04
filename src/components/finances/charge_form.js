import React, { Component } from 'react'
import { connect } from 'react-redux'

class ChargeForm extends Component {
  render() {
    return (
      <div className="bill-list">
        <p>placeholder for charge form..</p>
      </div>
    )
  }
}

export default connect()(ChargeForm)