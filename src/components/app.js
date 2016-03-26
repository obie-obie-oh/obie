import React from 'react'
import { Component } from 'react'
import Navbar from '../containers/navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}
