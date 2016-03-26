import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageEntry from '../components/messages/message_entry'
import {fetchMessages} from '../actions'

class Messages extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchMessages()
  }

  render() {
    return (
      <article className="messages">
        <h2 className="text-center">Messages</h2>
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

export default connect(mapStateToProps, {fetchMessages})(Messages)