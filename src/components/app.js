import React from 'react'
import { Component } from 'react'
import Navbar from './navbar/navbar'
import BurgerMenu from './navbar/burger_menu'

export default class App extends Component {
  render() {
      return (
        <div>
          <Navbar />
          <BurgerMenu />
          {this.props.children}
        </div>
      )
  }
}
