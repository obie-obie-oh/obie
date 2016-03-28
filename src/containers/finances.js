import React, { Component } from 'react'
import { connect } from 'react-redux'

class Finances extends Component {
  render() {
    return (
      <article className="finances content-container">
        <p>finance component</p>
      </article>
    )
  }
}


function mapStateToProps (state) {

}

export default connect()(Finances)