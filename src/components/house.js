import React from 'react'
import { Component } from 'react'
import Sidebar from './sidebar/sidebar'

export default class House extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        {this.props.children}
      </div>
    )
  }
}
