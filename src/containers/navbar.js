import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navmenu from '../components/navbar/navmenu'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Navmenu />
      </nav>
    )
  }
}

//takes in global state tree
function mapStateToProps (state) {
  //return object of what you want to pass to component as a prop

}

export default connect(null, {})(Navbar)