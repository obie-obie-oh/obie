import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp, login } from '../../actions/async'
import { browserHistory } from 'react-router'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      login: true
    }
  }

  changeState(e) {
    e.preventDefault()
    this.setState({
      login: !this.state.login
    })
  }

  login(e) {
    e.preventDefault()
    login(this.refs.email.value, this.refs.password.value).then((jwt) => {
      localStorage.setItem("obie", jwt.data.token);
    }).then(() => {
      browserHistory.push('/')
    })

  }

  signup(e) {
    e.preventDefault()

    signUp(this.refs.name.value, this.refs.email.value, this.refs.password.value).then(function() {
      alert("success")
    })

  }

  render() {
    return (
      <section>
        {this.state.login ? 
          <form onSubmit={this.login.bind(this)}>
            <h4>Log In</h4>
            <div className="form-group">
              <label className="form-control">Email</label>
              <input ref="email" className="form-control" type="email" />
            </div>
            <div className="form-group">
              <label className="form-control">Password</label>
              <input ref="password" className="form-control" type="password" />
            </div>
            <button className="btn btn-primary">Login</button>
            <a href="#" onClick={this.changeState.bind(this)}>Not Registered?</a>
          </form>
          :
          <form onSubmit={this.signup.bind(this)}>
            <h4>Sign Up</h4>
            <div className="form-group">
              <label className="form-control">Name</label>
              <input ref="name" className="form-control" type="text" />
            </div>
            <div className="form-group">
              <label className="form-control">Email</label>
              <input ref="email" className="form-control" type="email" />
            </div>
            <div className="form-group">
              <label className="form-control">Password</label>
              <input ref="password" className="form-control" type="password" />
            </div>
            <div className="form-group">
              <label className="form-control">Verify Password</label>
              <input className="form-control" type="password" />
            </div>
            <button className="btn btn-primary">Sign Up</button>
            <a href="#" onClick={this.changeState.bind(this)}>Already Registered?</a>
          </form>
      }
      </section>

    )
  }
}

function mapStateToProps (state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(Login)