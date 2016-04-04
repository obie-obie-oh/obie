import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBills } from '../../actions'
import BillEntry from './bill_entry'

class Bills extends Component {
  componentWillMount() {
    this.props.fetchBills()
  }

  render() {
    return (
      <div className="bill-list">
        <p>Bills:</p>
        {this.props.bills.map(bill => 
          <BillEntry bill={bill} key={bill.billId} />
        )}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    bills: state.finances.bills
  }
}

export default connect(mapStateToProps, {fetchBills})(Bills)