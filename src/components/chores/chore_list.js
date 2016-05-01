import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchChores } from '../../actions'
import ChoreEntry from './chore_entry'

class ChoresList extends Component {
  componentWillMount() {
    this.props.fetchChores()
  }

  render() {
    return(
      <div className="chore-list">
        {this.props.chores.map((chore, i) =>
          <ChoreEntry key={i} chore={chore} />
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