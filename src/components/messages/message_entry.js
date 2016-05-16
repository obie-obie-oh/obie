import React from 'react'

const MessageEntry = ({
  message
}) => (
  <section className="message-entry list-entry" style={{ display: 'block' }}>
    <img src={message.user_image_url} width="50px" />
    <div className="username">
      <p>{message.name}</p>
    </div>
    <div className="message-text">
      <p>{message.text}</p>
    </div>
    <div className="time-stamp">
      <p>{message.time}</p>
    </div>
  </section>
)

export default MessageEntry