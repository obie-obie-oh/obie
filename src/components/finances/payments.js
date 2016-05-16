import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPayments} from '../../actions'
import PaymentEntry from './payment_entry'

class Payments extends Component {
  componentWillMount() {
    this.props.fetchPayments()
  }

  render() {
    return (
      <div className="payment-list">
        <h5 className="text-center">Pending Payments</h5>
        {this.props.payments.map(payment => 
          <PaymentEntry payment={payment} key={payment.paymentID} />
        )}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    payments: state.finances.payments
  }
}

export default connect(mapStateToProps, {fetchPayments})(Payments);