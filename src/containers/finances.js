import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPayments } from '../actions'
import PaymentEntry from '../components/finances/payment_entry'

class Finances extends Component {
  componentWillMount() {
    this.props.fetchPayments()
  }

  render() {
    console.log('finances props', this.props)
    return (
      <article className="finances col-sm-9">
        <p>Payments:</p>
        <div className="payments-list">
          {this.props.payments.map(payment => 
            <PaymentEntry payment={payment} key={payment.paymentID} />
          )}
        </div>
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