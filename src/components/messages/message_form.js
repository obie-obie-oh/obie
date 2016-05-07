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
        <div className="form-group" >
          <input placeholder="Type text..." type="text" className="form-control" {...text} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'MessageForm',
  fields: ['text']
}, null, { submitRoommateMessage, submitLandlordMessage, fetchMessages, fetchLandlordMessages })(MessageForm);
