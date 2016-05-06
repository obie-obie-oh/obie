import React, { Component } from 'react'
import { connect } from 'react-redux'

class ChargeForm extends Component {
  constructor(props) {
    super(props)
  }

  // componentWillMount() {

  // }

  render() {
    //billname
    //total       due date
    //split button    custom button
                      //user list
                      //submit
    return (
      <div className="charge-form-container">
        <form>
          <div className="bill-name">
            <label className="bill-name-input">Bill Name</label>
            <div className="bill-name-input"> 
              <input type="text" ref="billName" />
            </div>
          </div>
          <div className="charge-form-section">
            <div className="bill-total">
              <label>Total</label>
              <div>
                <input ref="billName"/>
              </div>
            </div>
            <div className="bill-due-date">
              <label>Due Date</label>
              <div>
                <input ref="billName" type="date"/>
              </div>
            </div>
          </div>
          <div className="charge-button-container">
            <button className="charge-form-button btn-info">Split Evenly</button>
          </div>
          <div>
            {this.props.users.map((user, i) => 
              <UserCustomEntry key={i} user={user} />
            )}
          </div>
          <button className="charge-form-button btn-info">Submit</button>
        </form>
      </div>
    )
  }
}

const UserCustomEntry = ({
  user
}) => (
  <section className="user-custom-entry">
    <div className="user-custom-name">
      <label>{user.name}</label>
    </div>
    <div className="input-group">
      <div className="input-group-addon">$</div>
      <input className="form-control custom-input" width="10" type='number'/>
    </div>
  </section>
)

function mapStateToProps (state) {
  return {
    users: state.house.users
  }
}

export default connect(mapStateToProps)(ChargeForm)

/*
.charge-form-container {
  border: 1px solid black;
  height: 80vh;
}

.charge-form-section > div {
  display: inline-block;
}

.user-custom-entry > div {
  display: inline-block;
  width: 15%;
}
*/
