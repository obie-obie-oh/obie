import React, { Component } from 'react'
import { connect } from 'react-redux'

class Chores extends Component {
  render() {
    return (
      <article className="chores content-container">
        <p>chores component</p>
      </article>
    )
  }
}


function mapStateToProps (state) {

}

export default connect()(Chores)