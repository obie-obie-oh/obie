import React from 'react'
import { Link } from 'react-router'

const FinanceNavmenu = () => {
  return (
    <ul>
      <Link to='/house/finances/payments'>Payments</Link>
      <Link to='/house/finances/bills'>Bills</Link>
      <Link to='/house/finances/charge'>Charge</Link>
    </ul>
  )

  //The Style below is what I would like to use for this one but need to 
  //figure out how to use it with Link
  // return (
  //   <div className="btn-group" data-toggle="buttons">
  //     <label className="btn btn-primary-outline active">
  //       <input type="radio" name="options" id="option1" autocomplete="off" checked />Payments
  //     </label>
  //     <label className="btn btn-primary-outline">
  //       <input type="radio" name="options" id="option2" autocomplete="off" /> Bills
  //     </label>
  //     <label className="btn btn-primary-outline">
  //       <input type="radio" name="options" id="option3" autocomplete="off" /> Charge
  //     </label>
  //   </div>
  // )
}

export default FinanceNavmenu