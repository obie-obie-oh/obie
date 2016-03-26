import React from 'react'
import { Link } from 'react-router'

const Navmenu = () => {
  return (
    <ul className="navmenu">
      <Link to='/messages'>Messages</Link>
      <Link to='/finances'>Finance</Link>
      <Link to='/chores'>Chores</Link>
    </ul>
  )
}

export default Navmenu