import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

class DynamicForm extends Component {
  render() {
    const { fields, handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        {Object.keys(fields).map(name => {
          const field = fields[name]
          return (<div key={name}>
            <label>{labels[name]}</label>
            <div>
              <input type="text" placeholder={labels[name]} {...field}/>
            </div>
          </div>)
        })}
        <div>
          <button type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Submit
          </button>
        </div>
      </form>
    )
  }
}

DynamicForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}


export default reduxForm({ form: 'dynamic' })(DynamicForm)