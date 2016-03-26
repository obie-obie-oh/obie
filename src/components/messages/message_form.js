import React from 'react'
import {reduxForm} from 'redux-form'

class MessageForm extends Component {
  render () {
    return (
      
    )
  }
}

function validate (values) {
  const errors = {}
  return errors
}

export default reduxForm ({
  form: 'MessageForm',
  fields: [],
  validate
})(MessageForm)