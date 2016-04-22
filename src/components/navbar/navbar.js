import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navmenu from './navmenu'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar in-desktop">
        <Navmenu format="navmenu"/>
      </nav>
    )
  }
}

export default connect()(Navbar)