import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navmenu from './navmenu'
import { Link } from 'react-router'
import BurgerMenu from './burger_menu'

class Navbar extends Component {
  componentDidMount() {
    const burger = document.querySelector('.bm-burger-button > button')
    console.log('burger: ', burger);
    burger.addEventListener('click', (e) => {
      console.log('burger menu click')
      if (burger) {
        burger.click()
      }
      e.preventDefault()
    })
  }

  toggleSideMenu(e) {
    e.preventDefault()
    const burger = document.querySelector('.bm-burger-button > button')
    if (burger) {
      console.log('in condish')
      burger.click();
    }
  }

  render() {
    return (
      <nav className="navbar navbar-full navbar-dark bg-primary">
        <div className="in-desktop">
          <a className="navbar-brand" href="/">Obie</a>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/house/messages">Messages</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/house/finances">Finances</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/house/chores">Chores</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <div className="in-mobile">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link onClick={this.toggleSideMenu} to="/" className="nav-link">☰</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default connect()(Navbar)