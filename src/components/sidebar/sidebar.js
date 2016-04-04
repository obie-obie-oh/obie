import React, { Component } from 'react'
import { connect } from 'react-redux'

class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar col-sm-3">
        sidebar goes here...
        this is a placeholder..
      </aside>
    )
  }
}

export default connect()(Sidebar)