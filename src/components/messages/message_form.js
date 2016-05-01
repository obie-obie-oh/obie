import React, {Component} from 'react'
import {reduxForm} from 'redux-form'
import { createMessage } from '../../actions'

class MessageForm extends Component {
  onSubmit(props) {
    this.props.createMessage(props)
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
}, null, {createMessage})(MessageForm);
