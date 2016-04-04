import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChoreEntry from './chore_entry'
import { fetchChores } from '../../actions'

class Chores extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchChores()
  }

  render() {
    return (
      <article className="chores col-sm-9">
        <h2 className="text-center chore-header">Chores</h2>
        <div className="chore-list">
          {this.props.chores.map((chore, i) =>
            <ChoreEntry key={i} chore={chore} />
          )}
        </div>
      </article>
    )
  }
}


function mapStateToProps (state) {
  return {
    chores: state.chores
  }
}

export default connect(mapStateToProps, {fetchChores})(Chores)