import React from 'react'
import h from '../../helpers'

const PaymentEntry = ({
  payment
}) => (
  <section className="payment-entry list-entry">
    <div className="col-xs-12">
      <p>
        <span className="glyphicon glyphicon-unchecked"></span>
        <span className="who-is-owed"> {payment.ower}</span>
         &nbsp; owes you 
        <span className="who-is-owed"> {h.formatPrice(payment.amount * 100)}</span> for <span className="who-is-owed">
          {payment.billName}
        </span>
      </p>
      {!payment.due_date ? '' : 
      <p>by { h.getPaymentDate(payment.due_date) }</p>}
      
    </div>
  </section>
)

export default PaymentEntry