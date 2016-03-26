import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    return (
      <main className='dashboard'>
        Dashboard
      </main>
    )
  }
}

export default connect()(Dashboard)