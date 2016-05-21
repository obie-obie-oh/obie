import { push } from 'react-router-redux'
import { browserHistory } from 'react-router'

export default function({ dispatch, getState }) {

  return next => action => {
    // console.log(dispatch, getState)
    // console.log('browserHistory', browserHistory)
    const url = window.location.href.split('/')
    const location = url[url.length - 1]
    console.log(location)
    if (location === 'login') {
      return next(action)
    }
    // if (action.type === "@@router/LOCATION_CHANGE" || action.type === "@@router/CALL_HISTORY_METHOD") {
      // return next(action)
    // }
    let status;
    const token = localStorage.getItem('obie')
    if (action.payload) {
      status = action.payload.status
    }

    if (!token || status === 401) {
      // browserHistory.push('/login')
      // return
    } 

    return next(action)
  }
}