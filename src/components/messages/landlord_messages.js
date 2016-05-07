import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageEntry from './message_entry'
import { fetchLandlordMessages } from '../../actions'
import MessageForm from './message_form'

class LandlordMessages extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchLandlordMessages()
  }

  render() {
    return (
      <section>
        <MessageForm landlord={true} />
        <section className="message-list">
          {this.props.messages.map((message, i) => 
            <MessageEntry key={i} message={message} />
          )}
        </section>
      </section>
    )
  }
}

function mapStateToProps (state) {
  return {
    messages: state.landlordMessages
  }
}

export default connect(mapStateToProps, { fetchLandlordMessages })(LandlordMessages)