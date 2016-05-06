import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { submitBill, fetchBills } from '../../actions'
import DynamicForm from '../dynamic_form' 
//export const fields = [ 'users', 'billName', 'billTotal', 'billDueDate' ]
//TODO: import necessary


class ChargeForm extends Component {
  // constructor(props) {
  //   super(props)
  // }

  onSubmit(props) {
    //TODO: change from createMessage to whatever action
    this.props.submitBill(props)
      .then(() => {
        //TODO: change to equiv of fetchMessages
        this.props.fetchBills()
        this.props.resetForm()
      })
  }

  render() {
    var userList = [];
    this.props.house.users.forEach(user => 
      userList.push(user.id)
    )
    const {
      fields: { billName, billTotal, billDueDate },
      handleSubmit,
      resetForm,
      submitting
    } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className={`form-group ${billName.touched && billName.invalid ? 'has-danger': ''}`} >
          <input placeholder="Type bill name..." type="text" className="form-control" {...billName} />
          <div className="text-help">
            {billName.touched ? billName.error : ''}
          </div>
        </div>
        <div className={`form-group ${billTotal.touched && billTotal.invalid ? 'has-danger': ''}`} >
          <input placeholder="Enter bill total..." type="number" className="form-control" {...billTotal} />
          <div className="text-help">
            {billTotal.touched ? billTotal.error : ''}
          </div>
        </div>
        {this.props.house.users.map(user =>
          <div key={user.id} className={`form-group ${user['id'].touched && user['id'].invalid ? 'has-danger': ''}`} >
            <label>{user.name}</label>
            <input placeholder={`Enter bill total for ${user.name}`} type="number" className="form-control" {...user['id']} />
            <div className="text-help">
              {user['id'].touched ? user['id'].error : ''}
            </div>
          </div>
        )}
        
        <div className={`form-group ${billDueDate.touched && billDueDate.invalid ? 'has-danger': ''}`} >
          <input placeholder="Select bill due date..." type="date" className="form-control" {...billDueDate} />
          <div className="text-help">
            {billDueDate.touched ? billDueDate.error : ''}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Split Evenly</button>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

const UserCustomEntry = ({
  user
}) => (
  <div className={`form-group ${billTotal.touched && billTotal.invalid ? 'has-danger': ''}`} >
    <input placeholder="Enter bill total..." type="number" className="form-control" {...billTotal} />
    <div className="text-help">
      {billTotal.touched ? billTotal.error : ''}
    </div>
  </div>
)

function validate(values) {
  console.log('VALIDATION VALUES', values)
  const errors = {};
  if (!values.billName) {
    errors.billName = 'Enter a name';
  }
  return errors;
}

function mapStateToProps (state) {
  return {
    house: state.house
  }
}

export default reduxForm({
  form: 'ChargeForm',
  fields: ['billName', 'billTotal', 'billDueDate'],
  validate
}, mapStateToProps, { submitBill, fetchBills })(ChargeForm);

