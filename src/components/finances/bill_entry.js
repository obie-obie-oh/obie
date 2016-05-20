import React from 'react'
import h from '../../helpers'

const BillEntry = ({
  bill
}) => (
  <section className="bill-entry list-entry">
      <div className="col-xs-8 col-lg-10">
        <p>
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
        {!bill.due_date? '' :
        <p>by {h.getPaymentDate(bill.due_date)}</p>}
        
      </div>
      <div className="col-xs-4 col-lg-2 flex-end-button">
        <button className="pay-button btn btn-default">Pay</button>
      </div>
  </section>
)

export default BillEntry