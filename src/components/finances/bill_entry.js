import React from 'react'
import h from '../../helpers'

const BillEntry = ({
  bill
}) => (
  <section className="bill-entry list-entry col-sm-12">
      <div className="col-xs-8">
        <p>
          <span className="glyphicon glyphicon-unchecked"></span>
          You owe
          <span className="who-is-owed">
            &nbsp; {bill.whoIsOwed}
          </span>
          <span className="who-is-owed">
            &nbsp; {h.formatPrice(bill.amount * 100)}
            &nbsp; for
          </span>
          <span className="who-is-owed">
            &nbsp; {bill.billName}
          </span>
        </p>
        <p>
          by {h.getPaymentDate(bill.due_date)}
        </p>
      </div>
      <div className="col-xs-4 flex-end-button">
        <button className="pay-button btn btn-default">Pay</button>
      </div>
  </section>
)

export default BillEntry