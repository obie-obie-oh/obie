import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import Sidebar from './sidebar/sidebar'
import { fetchHouseData, fetchUsers } from '../actions/'

class House extends Component {
  componentWillMount() {
    this.props.fetchHouseData()
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
        <Sidebar />
        {this.props.children}
      </div>
    )
  }
}

export default connect(null, { fetchHouseData, fetchUsers })(House)