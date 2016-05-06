import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'

class MessagesNavmenu extends Component {
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
    browserHistory.push(`/house/messages/${route}`)
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
        <label className={this.getClasses('roommates')} style={{zIndex: 1}} onClick={() => this.navigateToRoute('roommates')}>
          <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked />Roommates
        </label>
        <label className={this.getClasses('landlord')} style={{zIndex: 1}} onClick={() => this.navigateToRoute('landlord')}>
          <input type="radio" name="options" id="option2" autoComplete="off" /> Include Landlord
        </label>
      </div>
    )
  }
}

MessagesNavmenu.contextTypes = {
  router: PropTypes.object
}

export default MessagesNavmenu