import axios from 'axios'
import * as actions from './types'

const ROOT_URL = 'https://obie.herokuapp.com'
const NEW_API = 'http://localhost:6969'

export function fetchHouseData() {
  const request = axios.get(`${NEW_API}/api/houses`, {
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
  // const request = axios.get(`${ROOT_URL}/users`, {
  const request = axios.get(`${NEW_API}/api/users/roommates`, {
    headers: {
      token: localStorage.getItem('obie')
    }
  })

  return {
    type: actions.FETCH_USERS,
    payload: request
  }
}

export function fetchUserImage() {
  const request = axios.get(`${NEW_API}/api/users/image`, {
    headers: {
      token: localStorage.getItem('obie')
    }
  })

  return {
    type: actions.FETCH_USER_IMAGE,
    payload: request
  }
}

export function fetchMessages() {
  const request = axios.get(`${NEW_API}/api/messages`, {
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
  const request = axios.get(`${NEW_API}/api/messages/landlord`, {
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
  const request = axios.get(`${NEW_API}/api/chores`, {
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
  const request = axios.get(`${NEW_API}/api/payments`, {
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
  const request = axios.get(`${NEW_API}/api/bills`, {
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
  const request = axios.post(`${NEW_API}/api/chores`, {
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
  const request = axios.post(`${NEW_API}/api/messages`, {
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
  const request = axios.post(`${NEW_API}/api/bills`, {
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
  const request = axios.post(`${NEW_API}/api/messages/landlord`, {
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
