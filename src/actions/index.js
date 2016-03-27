import axios from 'axios'

export const FETCH_MESSAGES = 'FETCH_MESSAGES'
export const FETCH_CHORES = 'FETCH_CHORES'

const ROOT_URL = 'https://obie.herokuapp.com'

export function fetchMessages () {
  const request = axios.get(`${ROOT_URL}/messages`, {
    headers: {
      token: localStorage.getItem('obie')
    }
  })
  return {
    type: FETCH_MESSAGES,
    payload: request
  }
}

export function fetchChores () {
  const request = axios.get(`${ROOT_URL}/chores`, {
    headers: {
      token: localStorage.getItem('obie')
    }
  })
  return {
    type: FETCH_CHORES,
    payload: request
  }
}



