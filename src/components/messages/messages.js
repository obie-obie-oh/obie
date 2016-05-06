import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageEntry from './message_entry'
import MessageForm from './message_form'
import MessagesNavmenu from './messages_navmenu'

class Messages extends Component {
  render() {
    return (
      <article className="messages content-container col-md-9">
        <MessagesNavmenu />
        {this.props.children}
      </article>
    )
  }
}

export default Messages