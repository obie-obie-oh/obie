import React, { Component } from 'react'
import ChoresList from './chore_list'
import ChoresAssign from './chores_assign'
import ChoresNavmenu from './chores_navmenu'

class Chores extends Component {
  render() {
    return (
      <article className="chores col-md-9">
        <ChoresNavmenu />
        {this.props.children}
      </article>
    )
  }
}


export default Chores