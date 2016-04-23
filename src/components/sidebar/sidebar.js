import React, { Component } from 'react'
import { connect } from 'react-redux'

class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar col-sm-3 in-desktop">
        <figure>
          <img style={{width: '80%', height: 'auto'}} src="http://media2.popsugar-assets.com/files/2013/07/10/010/n/4981324/78a3a96bf028c9fe_thumb_temp309592141373411224.xxxlarge/i/How-Choose-Right-Face-Mask.jpg" />
        </figure>
        <ul>
          <li>user1</li>
          <li>user2</li>
          <li>user3</li>
          <li>user4</li>
        </ul>
      </aside>
    )
  }
}

export default connect()(Sidebar)