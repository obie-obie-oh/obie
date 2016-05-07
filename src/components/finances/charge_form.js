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

  splitEvenly(e) {
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group col-sm-6" style={{paddingLeft: '0'}}>
          <label>Bill Name*</label>
          <input className="form-control" type="text" ref="billName" />
        </div>

        <div className="form-group col-sm-6" style={{paddingRight: '0'}}>
          <label>Total*</label>
          <div className="input-group">
            <div className="input-group-addon">$</div>
            <input className="form-control" ref="billTotal"/>
          </div>
        </div>

        <div className="form-group">
          <label>Due Date (Optional)</label>
          <input className="form-control" ref="billDueDate" type="date"/>
        </div>

        <button onClick={this.splitEvenly.bind(this)} className="btn btn-primary">Split Evenly</button>

        <hr/>

        <div>
          {this.props.users.map((user, i) => 
            <section key={i} className="form-group col-sm-6 col-xl-4">
              <label>{`${user.name} (Optional)`}</label>
              <div className="input-group">
                <div className="input-group-addon">$</div>
                <input className="form-control" width="10" type='number' ref={user.id}/>
              </div>
            </section>
          )}
        </div>

        <hr className="col-xs-12" />
        <button onClick={this.onSubmit.bind(this)} type="submit" className="btn btn-primary">Submit</button>
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
