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
        <div style={{marginTop: '30px'}} className="col-xl-10 col-xl-offset-1">
          {this.props.children}
        </div>
      </div>
    )
  }
}
