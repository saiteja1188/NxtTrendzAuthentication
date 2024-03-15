// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errMsg: '',
    submitErrorMsg: false,
  }

  submitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitFailure = errMsg => {
    this.setState({submitErrorMsg: true, errMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.submitSuccess()
    } else {
      this.submitFailure(data.error_msg)
    }
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  render() {
    const {username, password, errMsg, submitErrorMsg} = this.state
    return (
      <div className="login-form-container">
        <div className="login-form-content">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-logo"
          />
          <form className="form-container" onSubmit={this.submitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-log"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
              className="login-mobile-logo"
            />
            <label htmlFor="inputUsername" className="input-label">
              USERNAME
            </label>
            <input
              type="text"
              className="input-text"
              id="inputUsername"
              placeholder="Username"
              onChange={this.onChangeUsername}
              value={username}
            />
            <label htmlFor="inputPassword" className="input-label">
              PASSWORD
            </label>
            <input
              type="password"
              className="input-text"
              id="inputPassword"
              placeholder="Password"
              onChange={this.onChangePassword}
              value={password}
            />
            <button type="submit" className="form-btn">
              Login
            </button>
            {submitErrorMsg && <p className="error-msg">*{errMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
