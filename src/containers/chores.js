import React, { Component } from 'react'
import { connect } from 'react-redux'

class Chores extends Component {
  render() {
    return (
      <article className="chores">
        <p>chores component</p>
      </article>
    )
  }
}


function mapStateToProps (state) {

}

export default connect()(Chores)