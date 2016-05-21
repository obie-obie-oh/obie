import { push } from 'react-router-redux'
import { browserHistory } from 'react-router'

export default function({ dispatch, getState }) {

  return next => action => {
    const url = window.location.href.split('/')
    const location = url[url.length - 1]
    
    if (location === 'login') {
      return next(action)
    }
    
    let status;
    const token = localStorage.getItem('obie')
    if (action.payload) {
      status = action.payload.status
    }

    if (!token || status === 401) {
      return browserHistory.push('/login')
    } 

    return next(action)
  }
}