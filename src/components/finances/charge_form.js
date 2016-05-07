import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitBill } from '../../actions'
import _ from 'lodash'

class ChargeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      billTotal: ''
    }
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

  splitEvenly(e) {
    e.preventDefault()
    const fields = this.refs
    const numberOfUsers = this.props.users.length
    const splitTotal = (+this.state.billTotal / numberOfUsers).toFixed(2)

    _.each(fields, (field, fieldName) => {
      if (fieldName !== 'billName' && fieldName !== 'billTotal' && fieldName !== 'billDueDate') {
        field.value = splitTotal
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <h5 className="text-center">Bill Info</h5>
        <div className="form-group col-sm-6 no-padding-xs no-padding-left">
          <label>Bill Name*</label>
          <input className="form-control" type="text" ref="billName" />
        </div>

        <div className="form-group col-sm-6 no-padding-xs no-padding-right">
          <label>Total*</label>
          <div className="input-group">
            <div className="input-group-addon">$</div>
            <input className="form-control" type="number" ref="billTotal" onChange={(e) => this.setState({ billTotal: e.target.value })} />
          </div>
        </div>

        <div className="form-group">
          <label>Due Date (Optional)</label>
          <input className="form-control" ref="billDueDate" type="date"/>
        </div>

        <button disabled={!this.state.billTotal} onClick={this.splitEvenly.bind(this)} className="btn btn-primary full-width-xs">Split Between Household</button>

        <hr/>

        <div>
          <h5 className="text-center">Household</h5>
          {this.props.users.map((user, i) => 
            <section key={i} className="form-group col-sm-6 col-xl-4 no-padding-xs">
              <label>{user.name}</label>
              <div className="input-group">
                <div className="input-group-addon">$</div>
                <input className="form-control" width="10" type='number' ref={user.id}/>
              </div>
            </section>
          )}
        </div>

        <hr className="col-xs-12" />
        <section className="col-xs-12 no-padding-xs">
          <p>*Charge at least one member</p>
          <button onClick={this.onSubmit.bind(this)} type="submit" className="btn btn-primary full-width-xs">Submit</button>
        </section>
      </form>
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.house.users
  }
}

export default connect(mapStateToProps, { submitBill })(ChargeForm)
