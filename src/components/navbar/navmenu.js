import React from 'react'
import { Link } from 'react-router'

const Navmenu = () => {
  return (
    <ul className="navmenu">
      <Link to='/house/messages'>Messages</Link>
      <Link to='/house/finances'>Finance</Link>
      <Link to='/house/chores'>Chores</Link>
      <Link to='/dashboard'>Dashboard</Link>
    </ul>
  )
}

export default Navmenu