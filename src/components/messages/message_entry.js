import React from 'react'

const MessageEntry = ({
  message
}) => (
  <section className="message-entry">
    <div className="row">
      <div className="col-xs-3 message-entry-left-box">
        <div className="profile-image">
          <img src={message.userImageUrl} width="50px" />
        </div>
      </div>
      <div className="col-xs-9 message-right-container">
        <div className="username">
          <p>{message.name}</p>
        </div>
        <div className="message-text">
          <p>{message.text}</p>
        </div>
        <div className="time-stamp">
          <p>{message.time}</p>
        </div>
      </div>
    </div>

  </section>
)

export default MessageEntry