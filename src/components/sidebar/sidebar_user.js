import React from 'react'

const SidebarUser = ({
  user
}) => (
  <div className="sidebar-user">
    <img className="sidebar-user-image" src={user.user_image_url} />
    <div className="sidebar-user-name">{user.name}</div>
  </div>
)

export default SidebarUser