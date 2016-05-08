import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { createChore } from '../../actions'


class ChoresAssign extends Component {
  onSubmit(props) {
    this.props.createChore(props)
      .then(() => {
        this.props.resetForm()
      })
  }

  render() {
    const  {fields: {userId, task, details, dueDate}, 
      handleSubmit, 
      resetForm,
      submitting,
    } = this.props;
    
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <h5 className="text-center">Add a Todo</h5>

        <div className={`form-group ${task.touched && task.invalid ? 'has-danger': ''}`} >
          <label>Task</label>
          <input type="text" className="form-control" {...task} placeholder="Take Out Trash" />
          <div className="text-help">
            {task.touched ? task.error : ''}
          </div>
        </div>
        
        <div className="form-group" >
          <label>More Details? (Optional)</label>
          <textarea className="form-control" {...details} placeholder="pick up is thursday morning" />
        </div>

        <div className="form-group" >
          <label>Complete By (Optional)</label>
          <input type="date" className="form-control" {...dueDate} />
        </div>

        <button type="submit" className="btn btn-primary full-width-xs">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.task) {
    errors.task = 'Enter chore';
  }

  return errors;
}

export default reduxForm({
  form: 'ChoresNewForm',
  fields: ['userId', 'task', 'details', 'dueDate'],
  validate
}, null, { createChore })(ChoresAssign);
