import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchChores } from '../../actions'
import { completeTodo } from '../../actions/async'
import ChoreEntry from './chore_entry'

class ChoresList extends Component {
  componentWillMount() {
    this.props.fetchChores()
  }

  completeTodo(id) {
    completeTodo(id)
      .then((data) => {
        console.log('completed chore', data)
        this.props.fetchChores() 
      })
  }

  render() {
    return(
      <div className="chore-list">
        {this.props.chores.map((chore, i) =>
          <ChoreEntry key={i} chore={chore} completeTodo={this.completeTodo.bind(this)} />
        )}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    chores: state.chores
  }
}

export default connect(mapStateToProps, {fetchChores})(ChoresList)