import React, { Component } from 'react'
import { connect } from 'react-redux'

class Messages extends Component {
  constructor(props) {
    super(props)
    // console.log('messages props: ', props)
  }

  render() {
    console.log(this.props)
    return (
      <article className="messages">
        <p>messages component</p>
        <ul>
        {this.props.messages.map(message => 
          <li key={message.text}>{message.person} {message.text}</li>
        )}
        </ul>
      </article>
    )
  }
}


function mapStateToProps (state) {
  return {
    messages: state.messages
  }

}

export default connect(mapStateToProps)(Messages)