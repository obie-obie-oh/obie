import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageEntry from './message_entry'
import { fetchMessages } from '../../actions'

class Messages extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchMessages()
  }

  render() {
    console.log('messages', this.props)
    return (
      <article className="messages content-container col-md-9">
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