import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'

class FinanceNavmenu extends Component {
  constructor(props) {
    super(props)
    this.state = { currentView: '' }
    this.getClasses.bind(this)
  }

  componentWillMount() {
    this.changeLocation()
    window.addEventListener('popstate', this.changeLocation.bind(this))
  }


  componentWillUnmount() {
    window.removeEventListener('popstate', this.changeLocation.bind(this))
  }

  changeLocation() {
    const path = window.location.pathname.split('/')
    const currentView = path[path.length - 1]
    this.setState({ currentView })
  }

  navigateToRoute(route) {
    this.setState({ currentView: route })
    browserHistory.push(`/house/finances/${route}`)
  }

  getClasses(link) {
    let classes = 'btn btn-primary-outline flex-button'
    if (this.state.currentView === link) {
      classes += ' active'
    }
    return classes
  }

  render() {
    return (
      <div className="btn-group flex-navbar" data-toggle="buttons">
        <label className={this.getClasses('payments')} style={{zIndex: 0}} onClick={() => this.navigateToRoute('payments')}>
          <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked />Payments
        </label>
        <label className={this.getClasses('bills')} style={{zIndex: 0}} onClick={() => this.navigateToRoute('bills')}>
          <input type="radio" name="options" id="option2" autoComplete="off" /> Bills
        </label>
        <label className={this.getClasses('charge')} style={{zIndex: 0}} onClick={() => this.navigateToRoute('charge')}>
          <input type="radio" name="options" id="option3" autoComplete="off" /> Charge
        </label>
      </div>
    )
  }
}

export default FinanceNavmenu