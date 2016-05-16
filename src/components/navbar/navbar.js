import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import links from './links'
import _ from 'lodash'

class Navbar extends Component {
  toggleSideMenu(e) {
    e.preventDefault()
    const burger = document.querySelector('.bm-burger-button > button')
    if (burger) {
      burger.click()
    }
  }

  render() {
    return (
      <nav className="navbar navbar-full navbar-dark bg-primary">
        <div className="in-desktop full-width col-xl-10 col-xl-offset-1">
          <Link className="navbar-brand" to="/">Obie</Link>
          <ul className="nav navbar-nav">
            {_.map(links, (link, name) => (
                <li className="nav-item" key={name}>
                  <Link className="nav-link" to={link.to}>{name}</Link>
                </li>
              )
            )}
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