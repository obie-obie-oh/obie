import React from 'react'
import { Component } from 'react'
import Navbar from './navbar/navbar'
import BurgerMenu from './navbar/burger_menu'

export default class App extends Component {
  handleResize = (e) => {
    e.preventDefault()
    this.setState({windowWidth: window.innerWidth})
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    console.log('render being called')
    if(this.state && this.state.windowWidth <= 600) {
      return (
        <div>
          <BurgerMenu />
          {this.props.children}
        </div>
      )
    } else {
      return (
        <div>
          <Navbar />
          {this.props.children}
        </div>
      )
    }
  }
}
