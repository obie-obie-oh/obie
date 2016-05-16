import React from 'react'
import BurgMenu from 'react-burger-menu'
const Menu = BurgMenu.slide
import links from './links'
import _ from 'lodash'
import { Link } from 'react-router'


const BurgerMenu = () => {
  return (
    <Menu>
      <ul className="burger-menu">
        {_.map(links, (link, name) => (
          <li key={name}>
            <Link className="burger-menu-item" to={link.to}>{name}</Link>
          </li>
        ))}
      </ul>
    </Menu>
  )
}

export default BurgerMenu