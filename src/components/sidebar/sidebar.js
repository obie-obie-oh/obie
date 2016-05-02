import React, { Component } from 'react'
import { connect } from 'react-redux'

class Sidebar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <aside className="sidebar col-sm-3 in-desktop">
        <figure>
          <img style={{width: '80%', height: 'auto'}} src="http://media2.popsugar-assets.com/files/2013/07/10/010/n/4981324/78a3a96bf028c9fe_thumb_temp309592141373411224.xxxlarge/i/How-Choose-Right-Face-Mask.jpg" />
        </figure>
        <div className="sidebar-user-container">
          <header className="sidebar-roster-header">
            <h3>{this.props.house.name}</h3>
            <h4>Roommates:</h4>
          </header>
          {this.props.house.users.map((user, i) => 
            <SidebarUser key={i} user={user} />
          )}
        </div>
      </aside>
    )
  }
}

const SidebarUser = ({
  user
}) => (
  <div className="sidebar-user">
    <img className="sidebar-user-image" src={user.userImageUrl} />
    <div className="sidebar-user-name">{user.name}</div>
  </div>
)

function mapStateToProps (state) {
  return {
    house: state.house
  }
}

export default connect(mapStateToProps)(Sidebar)