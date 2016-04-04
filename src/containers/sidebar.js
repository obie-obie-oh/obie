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

export default connect()(Sidebar)