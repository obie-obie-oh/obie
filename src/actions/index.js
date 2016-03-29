import axios from 'axios'
import * as actions from './types'

const ROOT_URL = 'https://obie.herokuapp.com'

export function fetchMessages() {
  const request = axios.get(`${ROOT_URL}/messages`, {
    headers: {
      token: localStorage.getItem('obie')
    }
  })

  return {
    type: actions.FETCH_MESSAGES,
    payload: request
  }
}

export function fetchChores() {
  const request = axios.get(`${ROOT_URL}/chores`, {
    headers: {
      token: localStorage.getItem('obie')
    }
  })

  return {
    type: actions.FETCH_CHORES,
    payload: request
  }
}

export function fetchPayments() {
  const request = axios.get(`${ROOT_URL}/payment/owed`, {
    headers: {
      token: localStorage.getItem('obie')
    }
  })

  return {
    type: actions.FETCH_PAYMENTS,
    payload: request
  }
}

