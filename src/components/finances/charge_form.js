import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitBill } from '../../actions'

class ChargeForm extends Component {
  constructor(props) {
    super(props)
  }

  onSubmit(e) {
    e.preventDefault();
    const fields = {}
    for(let key in this.refs) {
      if(key === 'billName' || key === 'billTotal' || key === 'billDueDate') {
        fields[key] = this.refs[key].value
      } else if (key !== undefined && this.refs[key].value > 0) {
        fields[key] = this.refs[key].value
      }
    }
    this.props.submitBill(fields)
  }

  render() {
    return (
      <div className="charge-form-container">
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="bill-name">
            <label className="bill-name-input">Bill Name</label>
            <div className="bill-name-input"> 
              <input type="text" ref="billName" />
            </div>
          </div>
          <div className="charge-form-section">
            <div className="bill-total">
              <label>Total</label>
              <div>
                <input ref="billTotal"/>
              </div>
            </div>
            <div className="bill-due-date">
              <label>Due Date</label>
              <div>
                <input ref="billDueDate" type="date"/>
              </div>
            </div>
          </div>
          <div className="charge-button-container">
            <button className="charge-form-button btn-info">Split Evenly</button>
          </div>
          <div>
            {this.props.users.map((user, i) => 
              <section key={i} className="user-custom-entry">
                <div className="user-custom-name">
                  <label>{user.name}</label>
                </div>
                <div className="input-group">
                  <div className="input-group-addon">$</div>
                  <input className="form-control custom-input" width="10" type='number' ref={user.id}/>
                </div>
              </section>
            )}
          </div>
          <button onClick={this.onSubmit.bind(this)} type="submit" className="charge-form-button btn-info">Submit</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.house.users
  }
}

export default connect(mapStateToProps, { submitBill })(ChargeForm)
