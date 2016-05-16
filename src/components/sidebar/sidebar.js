import React, { Component } from 'react'
import { connect } from 'react-redux'
import SidebarUser from './sidebar_user'

class Sidebar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <aside className="sidebar col-sm-3 in-desktop">
        <figure>
          <img style={{width: '80%', height: 'auto'}} src={this.props.house.userImage || "http://www.pissedconsumer.com/themes/foundation/images/avatar_placeholder-128x128.png"} />
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

function mapStateToProps (state) {
  return {
    house: state.house
  }
}

export default connect(mapStateToProps)(Sidebar)