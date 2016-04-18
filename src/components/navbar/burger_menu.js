import React from 'react'
import BurgMenu from 'react-burger-menu'
const Menu = BurgMenu.slide
import { browserHistory } from 'react-router'
import NavMenu from './navmenu'


const BurgerMenu = () => {
  
  return (
    <Menu>
      <NavMenu format="burger"/>
    </Menu>
  )
}

export default BurgerMenu

      // <a id="dashboard" className="menu-item" onClick="/dashboard">Dashboard</a>
      //   <a id="messages" className="menu-item" onClick="/house/messages">Messages</a>
      //   <a id="finance" className="menu-item" onClick="/house/finances/payments">Finance</a>
      //   <a id="chores" className="menu-item" onClick="/house/chores">Chores</a>