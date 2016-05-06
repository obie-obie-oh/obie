import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageEntry from './message_entry'
import { fetchMessages } from '../../actions'
import MessageForm from './message_form'

class RoommateMessages extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchMessages()
  }

  render() {
    return (
      <article className="messages content-container col-md-9">
        <MessageForm landlord={false} />
        <section className="message-list">
          {this.props.messages.map((message, i) => 
            <MessageEntry key={i} message={message} />
          )}
        </section>
      </article>
    )
  }
}

function mapStateToProps (state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, { fetchMessages })(RoommateMessages)