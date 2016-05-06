import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { submitRoommateMessage, submitLandlordMessage, fetchMessages, fetchLandlordMessages } from '../../actions'

class MessageForm extends Component {
  onSubmit(props) {
    if (this.props.landlord) {
      this.props.submitLandlordMessage(props)
        .then(() => {
          this.props.fetchLandlordMessages()
          this.props.resetForm()
        })
    } else {
      this.props.submitRoommateMessage(props)
        .then(() => {
          this.props.fetchMessages()
          this.props.resetForm()
        })
    }
  }

  render () {
    const {
      fields: { text },
      handleSubmit,
      resetForm,
      submitting
    } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className={`form-group ${text.touched && text.invalid ? 'has-danger': ''}`} >
          <input placeholder="Type text..." type="text" className="form-control" {...text} />
          <div className="text-help">
            {text.touched ? text.error : ''}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};
  if (!values.text) {
    errors.text = 'Enter a Message';
  }
  return errors;
}

export default reduxForm({
  form: 'MessageForm',
  fields: ['text'],
  validate
}, null, { submitRoommateMessage, submitLandlordMessage, fetchMessages, fetchLandlordMessages })(MessageForm);
