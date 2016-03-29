import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPayments, fetchBills } from '../actions'
import PaymentEntry from '../components/finances/payment_entry'
import BillEntry from '../components/finances/bill_entry'

class Finances extends Component {
  componentWillMount() {
    this.props.fetchPayments()
    this.props.fetchBills()
  }

  render() {
    return (
      <article className="finances col-sm-9">
        <p>Payments:</p>
        <div className="payment-list">
          {this.props.payments.map(payment => 
            <PaymentEntry payment={payment} key={payment.paymentID} />
          )}
        </div>
        <div className="bill-list">
          {this.props.bills.map(bill => 
            <BillEntry bill={bill} key={bill.billId} />
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

export default connect(mapStateToProps, {fetchPayments, fetchBills})(Finances)