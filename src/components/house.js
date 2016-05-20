import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import Sidebar from './sidebar/sidebar'
import { fetchHouseData, fetchUsers, fetchUserData } from '../actions/'

class House extends Component {
  componentWillMount() {
    this.props.fetchHouseData()
    this.props.fetchUsers()
    this.props.fetchUserData()
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

export default connect(null, { fetchHouseData, fetchUsers, fetchUserData })(House)