import React from 'react'
import { Link } from 'react-router'

const Navmenu = ({format}) => {
  return (
    <ul className={format === "burger" ? "burger-menu" : "navmenu"}>
      <li><Link className="burger-menu-item" to='/house/messages'>Messages</Link></li>
      <li><Link className="burger-menu-item" to='/house/finances'>Finance</Link></li>
      <li><Link className="burger-menu-item" to='/house/todos'>Todo</Link></li>
      <li><Link className="burger-menu-item" to='/dashboard'>Dashboard</Link></li>
    </ul>
  )
}

export default Navmenu