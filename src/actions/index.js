import axios from 'axios'
import * as actions from './types'
const API_ROOT_URL = 'http://localhost:8787'

const token = localStorage.getItem('obie')
axios.defaults.headers.common['token'] = token;

export function fetchHouseData() {
  const request = axios.get(`${API_ROOT_URL}/api/houses`)

  return {
    type: actions.FETCH_HOUSE_DATA,
    payload: request
  }
}

export function fetchUsers() {
  const request = axios.get(`${API_ROOT_URL}/api/users/roommates`)

  return {
    type: actions.FETCH_USERS,
    payload: request
  }
}

export function fetchUserData() {
  const request = axios.get(`${API_ROOT_URL}/api/users`)

  return {
    type: actions.FETCH_USER_DATA,
    payload: request
  }
}

export function fetchMessages() {
  const request = axios.get(`${API_ROOT_URL}/api/messages`)

  return {
    type: actions.FETCH_MESSAGES,
    payload: request
  }
}

export function fetchLandlordMessages() {
  const request = axios.get(`${API_ROOT_URL}/api/messages/landlord`)

  return {
    type: actions.FETCH_LANDLORD_MESSAGES,
    payload: request
  }
}

export function fetchChores() {
  const request = axios.get(`${API_ROOT_URL}/api/chores`)

  return {
    type: actions.FETCH_CHORES,
    payload: request
  }
}

export function fetchPayments() {
  const request = axios.get(`${API_ROOT_URL}/api/payments`)

  return {
    type: actions.FETCH_PAYMENTS,
    payload: request
  }
}

export function fetchBills() {
  const request = axios.get(`${API_ROOT_URL}/api/bills`)

  return {
    type: actions.FETCH_BILLS,
    payload: request
  }
}

export function createChore(props) {
  const request = axios.post(`${API_ROOT_URL}/api/chores`, {
    data: props
  })

  return {
    type: actions.CREATE_CHORE,
    payload: request
  }
}

export function submitRoommateMessage(props) {
  const request = axios.post(`${API_ROOT_URL}/api/messages`, {
    data: props
  })

  return {
    type: actions.SUBMIT_ROOMMATE_MESSAGE,
    payload: request
  }
}


export function submitBill(props) {
  const request = axios.post(`${API_ROOT_URL}/api/bills`, {
    data: props
  })
  
  return {
    type: actions.SUBMIT_BILL,
    payload: request
  }
}

export function submitLandlordMessage(props) {
  const request = axios.post(`${API_ROOT_URL}/api/messages/landlord`, {
    data: props
  })

  return {
    type: actions.SUBMIT_LANDLORD_MESSAGE,
    payload: request
  }
}



