import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {

  render() {
    return (
      <main className='dashboard'>
        <h4>Dashboard goes here</h4>
      </main>
    )
  }
}

export default connect()(Dashboard)