import axios from 'axios'
import * as actions from './types'
const API_ROOT_URL = 'http://localhost:8787'

export function fetchHouseData() {
  const request = axios.get(`${API_ROOT_URL}/api/houses`, {
    headers: { 
      token: localStorage.getItem('obie') 
    }
  })

  return {
    type: actions.FETCH_HOUSE_DATA,
    payload: request
  }
}

export function fetchUsers() {
  const request = axios.get(`${API_ROOT_URL}/api/users/roommates`, {
    headers: {
      token: localStorage.getItem('obie')
    }
  })

  return {
    type: actions.FETCH_USERS,
    payload: request
  }
}

export function fetchUserData() {
  const request = axios.get(`${API_ROOT_URL}/api/users`, {
    headers: {
      token: localStorage.getItem('obie')
    }
  })

  return {
    type: actions.FETCH_USER_DATA,
    payload: request
  }
}

export function fetchMessages() {
  const request = axios.get(`${API_ROOT_URL}/api/messages`, {
    headers: {
      token: localStorage.getItem('obie')
    }
  })

  return {
    type: actions.FETCH_MESSAGES,
    payload: request
  }
}

export function fetchLandlordMessages() {
  const request = axios.get(`${API_ROOT_URL}/api/messages/landlord`, {
    headers: {
      token: localStorage.getItem('obie')
    }
  })

  return {
    type: actions.FETCH_LANDLORD_MESSAGES,
    payload: request
  }
}

export function fetchChores() {
  const request = axios.get(`${API_ROOT_URL}/api/chores`, {
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
  const request = axios.get(`${API_ROOT_URL}/api/payments`, {
    headers: {
      token: localStorage.getItem('obie')
    }
  })

  return {
    type: actions.FETCH_PAYMENTS,
    payload: request
  }
}

export function fetchBills() {
  const request = axios.get(`${API_ROOT_URL}/api/bills`, {
    headers: {
      token: localStorage.getItem('obie')
    }
  })

  return {
    type: actions.FETCH_BILLS,
    payload: request
  }
}

export function createChore(props) {
  const request = axios.post(`${API_ROOT_URL}/api/chores`, {
    headers: {
      token: localStorage.getItem('obie')
    },
    data: props
  })

  return {
    type: actions.CREATE_CHORE,
    payload: request
  }
}

export function submitRoommateMessage(props) {
  const request = axios.post(`${API_ROOT_URL}/api/messages`, {
    headers: {
      token: localStorage.getItem('obie')
    },
    data: props
  })

  return {
    type: actions.SUBMIT_ROOMMATE_MESSAGE,
    payload: request
  }
}


export function submitBill(props) {
  console.log('IN FRONT END', props)
  const request = axios.post(`${API_ROOT_URL}/api/bills`, {
    headers: {
      token: localStorage.getItem('obie')
    },
    data: props
  })
  
  return {
    type: actions.SUBMIT_BILL,
    payload: request
  }
}

export function submitLandlordMessage(props) {
  const request = axios.post(`${API_ROOT_URL}/api/messages/landlord`, {
    headers: {
      token: localStorage.getItem('obie')
    },
    data: props
  })

  return {
    type: actions.SUBMIT_LANDLORD_MESSAGE,
    payload: request
  }
}
