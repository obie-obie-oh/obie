import React, { Component } from 'react'
import { connect } from 'react-redux'

class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar col-sm-3">
        sidebar goes here...
        Styles are placeholders for when we really make a sidebar
      </aside>
    )
  }
}

//takes in global state tree
function mapStateToProps (state) {
  //return object of what you want to pass to component as a prop

}

export default connect()(Sidebar)