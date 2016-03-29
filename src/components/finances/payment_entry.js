import React from 'react'
import h from '../../helpers'

const PaymentEntry = ({
  payment
}) => (
  <section className="chore-entry col-sm-12">
    <p>
      <span className="glyphicon glyphicon-unchecked"></span>
      <span className="who-is-owed"> {payment.ower}</span>
       &nbsp; owes you 
      <span className="who-is-owed"> {h.formatPrice(payment.amount * 100)}</span> for <span className="who-is-owed">
        {payment.billName}
      </span>
    </p>
    <p>
      by {h.getPaymentDate(payment.dueDate)}
    </p>
  </section>
)

export default PaymentEntry