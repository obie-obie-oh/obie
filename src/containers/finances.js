import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPayments } from '../actions'

class Finances extends Component {
  componentWillMount() {
    this.props.fetchPayments()
  }

  render() {
    console.log('finances props', this.props)
    return (
      <article className="finances content-container">
        <p>finance component</p>
      </article>
    )
  }
}


function mapStateToProps (state) {
  return {
    bills: state.finances.bills,
    payments: state.finances.payments
  }
}

export default connect(mapStateToProps, {fetchPayments})(Finances)