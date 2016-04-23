import React, { Component } from 'react'
import {reduxForm} from 'redux-form'
import { createChore } from '../../actions'


class ChoresAssign extends Component {
  onSubmit(props) {
    console.log(typeof props);
    this.props.createChore(props)
  }

  render() {
    const  {fields: {userId, name, category, dueDate}, handleSubmit} = this.props;
    
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${userId.touched && userId.invalid ? 'has-danger': ''}`} >
          <label>User ID</label>
          <input type="number" className="form-control" {...userId} />
          <div className="text-help">
            {userId.touched ? userId.error : ''}
          </div>
        </div>
        
        <div className={`form-group ${name.touched && name.invalid ? 'has-danger': ''}`} >
          <label>Chore Name</label>
          <input type="text" className="form-control" {...name} />
          <div className="text-help">
            {name.touched ? name.error : ''}
          </div>
        </div>
        
        <div className={`form-group ${category.touched && category.invalid ? 'has-danger': ''}`} >
          <label>Category</label>
          <input type="text" className="form-control" {...category} />
          <div className="text-help">
            {category.touched ? category.error : ''}
          </div>
        </div>

        <div className={`form-group ${dueDate.touched && dueDate.invalid ? 'has-danger': ''}`} >
          <label>Due Date</label>
          <input type="date" className="form-control" {...dueDate} />
          <div className="text-help">
            {dueDate.touched ? dueDate.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.userId) {
    errors.userId = 'Enter a username';
  }

  if (!values.name) {
    errors.name = 'Enter categories';
  }

  if (!values.category) {
    errors.category = 'Enter some content';
  }

  if (!values.dueDate) {
    errors.dueDate = 'Enter some content';
  }

  return errors;
}

//connect first arg is mapStateToProps, 2nd is matchDispatchToProps
//reduxForm: 1st is form config, 2nd : mapStateToProps, 3rd mapDispatchToProps


export default reduxForm({
  form: 'PostsNewForm',
  fields: ['userId', 'name', 'category', 'dueDate'],
  validate
}, null, {createChore})(ChoresAssign);
