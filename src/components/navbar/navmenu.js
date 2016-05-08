import React from 'react'
import { Link } from 'react-router'

const Navmenu = ({format}) => {
  return (
    <ul className={format === "burger" ? "burger-menu" : "navmenu"}>
      <li><Link to='/house/messages'>Messages</Link></li>
      <li><Link to='/house/finances'>Finance</Link></li>
      <li><Link to='/house/todos'>Todo</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
    </ul>
  )
}

export default Navmenu