import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navmenu from './navmenu'
import { Link } from 'react-router'

class Navbar extends Component {
  toggleSideMenu(e) {
    const burger = document.querySelector('.bm-burger-button > button')
    if (burger) {
      burger.click();
    }
  }

  render() {
    return (
      <nav className="navbar navbar-full navbar-dark bg-primary">
        <div className="in-desktop full-width">
          <Link className="navbar-brand" to="/">Obie</Link>
          <ul className="nav navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/house/messages">Messages</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/house/finances">Finances</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/house/todos">Todo</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/landlord/finances">LLFinances</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/landlord/messages">LLMessages</Link>
            </li>


          </ul>
        </div>
        <div className="in-mobile">
          <ul className="nav navbar-nav burger-icon">
            <li className="nav-item">
              <Link id="burger-link" onClick={this.toggleSideMenu} to="/" className="nav-link">☰</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default connect()(Navbar)