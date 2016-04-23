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