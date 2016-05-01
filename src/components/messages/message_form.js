import React, {Component} from 'react'
import {reduxForm} from 'redux-form'
export const fields = [ 'message' ]

class MessageForm extends Component {
  render () {
    const {
      fields: { message },
      handleSubmit,
      resetForm,
      submitting
    } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Message</label>
          <input type="text" placeholder="message" {...message}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

function validate (values) {
  const errors = {}
  return errors
}

export default reduxForm ({
  form: 'MessageForm',
  fields,
  validate
})(MessageForm)